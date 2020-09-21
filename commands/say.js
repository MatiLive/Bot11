const Discord = require("discord.js")
const prefix = "+"

module.exports.run = async(_Client, message) => {
        message.delete();
        if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3))
        else
        return message.channel.send("Nie posiadasz permisji!")
}

module.exports.help = {
    name: "say"
}