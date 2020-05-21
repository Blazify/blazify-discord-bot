const { MessageEmbed } = require("discord.js");
const { cyan } = require("../../colours.json");
const { stripIndents } = require("common-tags");
const overwatch = require("overwatch-api");
const Settings = require("../../models/configsetting.js")
const BlazifyClient = require("../../base/Command");
class Overwatch extends BlazifyClient {
  constructor(client) {
    super(client, {
      name: "overwatch",
      description: "Shows the stats of a Overwatch player",
      usage: "b3overwatch player pc|console",
      category: "Gaming",
      cooldown: 1000,
      aliases: ["ow"],
      permLevel: 1,
      permission: "READ_MESSAGES"
    });
  }
async run(message, args) {
       const guildSettings = await Settings.findOne({guildID: message.guild.id}) || new Settings({
        guildID: message.guild.id
    });
    const {enableGaming} = guildSettings;
        if(!args[0]) return message.channel.send("Please supply a username.");
        if(!args[1] || (args[1] && !["pc", "xbl", "psn"].includes(args[1]))) return message.channel.send("Please supply a platform to check. `pc`, `xbox` or `psn`");
        if(args[0].includes("#")) args[0] = args[0].replace(/#/g, "-");
if(!enableGaming) return message.channel.send("Hmm it seems like the Gaming commands are not enabled if you want to enable them please go to the dashboard. Click [here](http://localhost:8080)");
            overwatch.getProfile(args[1], "global", args[0], (err, json) => {
                if (err) return message.channel.send("Unable to find a user with that username.");
                const { games, level, portrait, username, playtime: { competitive, quickplay }, private } = json;
                const { sportsmanship, shotcaller, teammate } = json.endorsement;
                const { won, draw, played, lost, win_rate } = json.games.competitive;

                if(private) return message.channel.send("This users stats are private and cant be seen by anyone.");

                    const embed = new MessageEmbed()
                        .setColor(cyan)
                        .setAuthor(`Blizzard (Overwatch) | ${username}`, portrait)
                        .setThumbnail(portrait)
                        .addField("General:", stripIndents`
                        **Level:** ${level || 0}
                        **Sportsmanship:** ${sportsmanship.rate || 0} / 100
                        **Shotcaller:** ${shotcaller.rate || 0} / 100
                        **Teammate:** ${teammate.rate  || 0} / 100
                        `)
                        .addField("Competitive:", stripIndents`
                        **Played:** ${played || 0}
                        **Won:** ${won || 0}
                        **Draw:** ${draw || 0}
                        **Lost:** ${lost || 0}
                        **Win Rate:** ${win_rate || 0}
                        **Playtime:** ${competitive || 0}
                        `, true)
                        .addField("QuickPlay:", stripIndents`
                        **Played:** ${games.quickplay.played || "N/A"}
                        **Won:** ${games.quickplay.won || 0}
                        **Playtime:** ${quickplay || 0}
                        `, true)
                        .setTimestamp();

                    message.channel.send(embed);

                })
    }
  }
module.exports = Overwatch;