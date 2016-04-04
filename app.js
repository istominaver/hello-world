var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
app.get('/', function(req, res){
 res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
 socket.on('chat message', function(msg){
 io.emit('chat message', msg);
 });
});
http.listen(port, function(){
 console.log('listening on ' + port);
});
/*
var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: 'my_bot_1', appSecret: 'b213900f816542e0abf96d6a3d3a9d3b' });
console.log('%s bla-bla',bot.add);
bot.add('/', function (session) {
   session.send('Hello World'); 
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(8080, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

var bot = new builder.TextBot();
bot.add('/', [
    function (session) {
        builder.Prompts.text(session, "Hello... What's your name?");
    },
    function (session, results) {
        session.userData.name = results.response;
        builder.Prompts.number(session, "Hi " + results.response + ", How many years have you been coding?"); 
    },
    function (session, results) {
        session.userData.coding = results.response;
        builder.Prompts.choice(session, "What language do you code Node using?", ["JavaScript", "CoffeeScript", "TypeScript"]);
    },
    function (session, results) {
        session.userData.language = results.response.entity;
        session.send("Got it... " + session.userData.name + 
                     " you've been programming for " + session.userData.coding + 
                     " years and use " + session.userData.language + ".");
    }
]);

bot.listenStdin();

var Botkit = require('botkit');
var builder = require('botbuilder');

var controller = Botkit.slackbot();
var bot = controller.spawn({
   token: process.env.token
});

var slackBot = new builder.SlackBot(controller, bot);
slackBot.add('/', [
    function (session) {
        builder.Prompts.text(session, "Hello... What's your name?");
    },
    function (session, results) {
        session.userData.name = results.response;
        builder.Prompts.number(session, "Hi " + results.response + ", How many years have you been coding?"); 
    },
    function (session, results) {
        session.userData.coding = results.response;
        builder.Prompts.choice(session, "What language do you code Node using?", ["JavaScript", "CoffeeScript", "TypeScript"]);
    },
    function (session, results) {
        session.userData.language = results.response.entity;
        session.send("Got it... " + session.userData.name + 
                     " you've been programming for " + session.userData.coding + 
                     " years and use " + session.userData.language + ".");
    }
]);


slackBot.listenForMentions();

bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});*/
