const discord = require("discord.js");
const money = require("../../../database/sql")
module.exports = {
    name: 'addmoney',
    description: '',
    category: '',
    accessibleBy: 'Owner',
    usage: '[code to run]',
    args: false,
    guildOnly: false,
    category: 'Owner',
    cooldown: 0,
    run: async(client, message, args, PREFIX, anChan, Utils, sqlite, keyv, connection, announcementChan, leaveChan, guildCommandPrefixes) => {
        money.addCash(message.mentions.members.first() ? message.mentions.members.first().id : args[0], args[1])
        let user = message.mentions.members.first() ? message.mentions.members.first() : message.guild.members.cache.get(args[0]);
        message.channel.send({
            embed: new discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription(`You gave ${user.user.username} £${args[1]}`)
        })
    }
}