const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'here',
    description: 'Mentions everyone currently online in a server!',
    args: false,
    guildOnly: true,
    cooldown: 10,
    accessibleBy: 'Moderators',
    category: 'Admin',
    permRequirement: 'MENTION_EVERYONE',
    run: async(client, message, args) => {

        if (!message.guild.me.hasPermission("MENTION_EVERYONE")) return message.channel.send({
            embed: new MessageEmbed()
            .setColor("RED")
            .setDescription("I need the permission MENTioN_EVERYONE to run this command!")
        })

        message.delete();
        message.channel.send("@here")
    }
}