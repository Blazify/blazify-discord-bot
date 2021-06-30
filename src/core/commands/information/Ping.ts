import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class extends Command {
  constructor() {
    super("ping", {
      aliases: ["ping", "latency"],
      description: "Shows the ping",
      userPermissions: ["SEND_MESSAGES"],
      category: "Information",
    });
  }

  public exec(message: Message) {
    return message.util?.send(
      `API Latency is ${
        Date.now() - message.createdTimestamp
      }ms. Websocket Latency is ${Math.round(this.client.ws.ping)}ms`
    );
  }
}
