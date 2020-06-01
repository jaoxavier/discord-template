const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./token.json');

client.once("iniciado", () =>{
    console.log("Iniciado!");
});

client.login(token);

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping"){
        message.channel.send("pong")
    }

    
});



