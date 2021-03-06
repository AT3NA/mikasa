/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "mikasa",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}elaina`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/ZPyVOtzLYzsAAAPo/mikasa-ackerman-mikasa-season4.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `š *Mikasa* š\n\nš *Description: A WhatsApp Bot developed by *AT3NA* With Rich Anime features based on MIKASABOT.*\n\nš *OFFICIAL BOT URL:https://github.com/AT3NA/mikasabot* \n\n š *Guide:https://github.com/Ronen6999/Elaina-bot* \n\n š¾ *BOT URL:https://github.com/AT3NA/mikasabot* \n`,
			}
		);
	};
}
