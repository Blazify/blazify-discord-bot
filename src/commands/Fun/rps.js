const { MessageEmbed } = require("discord.js");
const { promptMessage } = require("../../utils/functions.js");
const Settings = require("../../models/configsetting.js");
const chooseArr = ["⛰️", "📄", "✂"];

const BlazifyClient = require("../../base/Command");
class Rps extends BlazifyClient {
  constructor(client) {
    super(client, {
      name: "rps",
      description: "Play Rock Paper Scissor with Blazify",
      usage: "b3alpaca",
      category: "Fun",
      cooldown: 1000,
      aliases: ["rock-paper-scissor"],
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
    const { enableFun } = guildSettings;
    if (!enableFun)
      return message.channel.send(
        "Hmm it seems like the Fun commands are not enabled if you want to enable them please go to the dashboard. Click [here](http://localhost:8080)"
      );
    const embed = new MessageEmbed()
      .setColor("#ffffff")
      .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
      .setDescription("Add a reaction to one of these emojis to play the game!")
      .setTimestamp();

    const m = await message.channel.send(embed);
    const reacted = await promptMessage(m, message.author, 30, chooseArr);

    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

    const result = await getResult(reacted, botChoice);
    embed.setDescription("").addField(result, `${reacted} vs ${botChoice}`);

    m.edit(embed);

    function getResult(me, clientChosen) {
      if (
        (me === "🗻" && clientChosen === "✂") ||
        (me === "📰" && clientChosen === "🗻") ||
        (me === "✂" && clientChosen === "📰")
      ) {
        return "You won!";
      } else if (me === clientChosen) {
        return "It's a tie!";
      } else {
        return "You lost!";
      }
    }
  }
};
module.exports = Rps;