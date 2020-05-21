const { MessageEmbed } = require("discord.js");
const Settings = require("../../models/configsetting.js");
const { decode } = require("@lavalink/encoding");

const BlazifyClient = require("../../base/Command");
class Queue extends BlazifyClient {
  constructor(client) {
    super(client, {
      name: "queue",
      description: "Displays the Songs in Queue",
      usage: "b3queue",
      category: "Music",
      cooldown: 1000,
      aliases: ["que"],
      permLevel: 1,
      permission: "READ_MESSAGES"
    });
  }
async run(message, args) {
    const guildSettings =
      (await Settings.findOne({ guildID: message.guild.id })) ||
      new Settings({
        guildID: message.guild.id,
      });

    const { enableMusic } = guildSettings;
    if (!enableMusic)
      return message.channel.send(
        "Hmm it seems like the Music commands are not enabled if you want to enable them please go to the dashboard. Click [here](http://localhost:8080)"
      );

    const player = bot.lava.players.get(message.guild.id);
    if (!player || !player.current)
      return message.channel.send("No song currently playing in this guild.");

    let index = 1;
    let string = "";

    const next = player.next.map((t) => Object.assign({ requester: t.requester }, decode(t.song)));
    const np = Object.assign({ requester: player.current.requester }, decode(player.current.song));

    if (np)
      string += `__**Currently Playing**__\n ${np.title} - **Requested by <@${np.requester}>**. \n`;
    if (next[1])
      string += `__**Rest of queue:**__\n ${next
        .slice(1, 10)
        .map(
          (x) =>
            `**${index++})** ${x.title} - **Requested by <@${
              x.requester
            }>**.`
        )
        .join("\n")}`;

    const embed = new MessageEmbed()
      .setAuthor(
        `Current Queue for ${message.guild.name}`,
        message.guild.iconURL
      )
      .setThumbnail(`https://i.ytimg.com/vi/${np.identifier}/maxresdefault.jpg`)
      .setDescription(string);

    return message.channel.send(embed);
 }
};
module.exports = Queue;