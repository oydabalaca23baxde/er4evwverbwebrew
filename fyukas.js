//Raterix Tokenleri Sese Sokma

const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Gravity | Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const clienttt = new Discord.Client();
const clientt = new Discord.Client();
const token1 = new Discord.Client();
const token2 = new Discord.Client();
const token3 = new Discord.Client();
const token4 = new Discord.Client();
const token5 = new Discord.Client();
const data = new Map();


clienttt.login("Nzk3MjY5ODExNjIwNDc5MDE2.X_kBXw.u-8nDcwZR0qNKNciJOGOWKPGCkM")//Hesap Tokeni Token
clientt.login("Nzk3MjcwMDkyMjA2MzA5Mzc2.X_kBog.KMjzwjqvBXEP_L0OnWiJj5VyioI")
token1.login("Nzk3MjcwMjIxNjIyMzQ1NzU4.X_kBwQ.nFzYIwsGX3t85OjvM6GdsWj6UVE")
token2.login("Nzk3MjcwNDU0ODI1MjU0OTYy.X_kB-A.hPlQHhxP-buQnp-asyOYJlz-Jaw")
token3.login("Nzk3MjcwNjI0ODM3MDQyMjE3.X_kCIQ._sAT9BoUcThhHZKbLWcIrw5otj4")
token4.login("Nzk3MjcwNzM5OTQ1NzgzMzE3.X_kCPA.aGr7MVrtOzO9dg2yCeSXlIZUwQ8")
token5.login("Nzk3MjczNTc0ODQxNzc4MjQ2.X_kE4A.levHWSXJc2t6_cIwLahMHHS3w-4")

clienttt.on('ready', ()=>{
clienttt.channels.get('774933328730128414').join()// bi deq düzeldirem
})

clientt.on('ready', ()=>{
clientt.channels.get('797268711622180904').join()
})
token1.on('ready', ()=>{
token1.channels.get('797268711622180904').join()
})

token2.on('ready', ()=>{
token2.channels.get('797268711622180904789017875913637898').join()
})

token3.on('ready', ()=>{
token3.channels.get('797268711622180904').join()
})

token4.on('ready', ()=>{
token4.channels.get('797268711622180904').join()
})

token5.on('ready', ()=>{
token5.channels.get('797268711622180904').join()
})



clienttt.user.setGame(`『AZ』 Az.teamgarage Klani Daima AyakTa > https://discord.gg/2wqH6fs7xb`)
clientt.user.setGame(`『AZ』 Az.teamgarage Klani Daima AyakTa > https://discord.gg/2wqH6fs7xb`)
token1.user.setGame(`『AZ』 Az.teamgarage Klani Daima AyakTa > https://discord.gg/2wqH6fs7xb`)
token2.user.setGame(`『AZ』 Az.teamgarage Klani Daima AyakTa > https://discord.gg/2wqH6fs7xb`)
token3.user.setGame(`『AZ』 Az.teamgarage Klani Daima AyakTa > https://discord.gg/2wqH6fs7xb`)
token4.user.setGame(`『AZ』 Az.teamgarage Klani Daima AyakTa > https://discord.gg/2wqH6fs7xb`)
token5.user.setGame(`『AZ』 Az.teamgarage Klani Daima AyakTa > https://discord.gg/2wqH6fs7xb`)
token6.user.setGame(`『AZ』 Az.teamgarage Klani Daima AyakTa > https://discord.gg/2wqH6fs7xb`)



