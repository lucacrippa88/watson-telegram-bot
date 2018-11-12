# Create a Watson Assistant web app with no coding skills

This tutorial will show how to integrate a Chatbot made with Watson Assistant into a web application built with Node-RED. No coding skills are needed!
This tutorial collects all experience gained on Watson Assistant and Node-RED during ASL 2017-2018 sessions.

## Prerequisites

Prerequisites to get this tutorial done are:
1. An IBM Cloud account.
2. Choose the option that fits:
  - Do you want to have a custom Virtual Assistant? -> Go to step 3.
  - Do you just want to know how it works the Node-RED Watson Assistant integration? -> Skip step 3 and go to step 4.
3. Make sure you completed this tutorial to have a custom Virtual Assistant with Watson Assistant: https://github.com/lucacrippa88/watson-assistant-training
4. You are all done with prerequisites!

## How to expect from this tutorial

This tutorial will show you how to create a simple web-based interface for your Virtual Assistant and alternatively a Telegram Bot connected to Watson Assistant. All other technical activities are based on the native Node-RED flow interface.


## Tutorials

### Steps

Follow these steps to complete the tutorial.

#### Step 1 - Create a bot on Telegram
Search \@BotFather on Telegram search bar and enter the name of the bot. Then, save the token string to use it later.

#### Step 2 - Create a Node-RED application
Select Node-RED Starter boilerplate on IBM Cloud catalog. Enter needed data and click create. You should protect your app with a username and password: you can do so by filling the form once the app is started.

#### Step 3 - Install Telegram nodes on Node-RED
Once you are in the main RED dashboard of your app, click in install tab and search for telegram. Then install "node-red-contrib-telegrambot".

#### Step 4 - Use Telegram nodes
Enter /watson as command to activate the "Telegram receiver" node. Then, add the bot created by inserting the name and the token. Then connect "Telegram receiver" to "Telegram sender" node.

Note: to start interacting with your bot, type /start, then type /watson and your sentence.

#### Step 5 - Watson Assistant integration
In order to integrate Watson Assistant in a Telegram bot, some nodes are required: "Telegram receiver", "function", "assistant", "function", "Telegram sender".

Telegram receiver: already set-up
Function 1: use code listed in js folder (link)
Assistant: to be updated
Function 2: use code listed in js folder (link)
Telegram sender: already set-up


### Videos

Almost 2 videos are coming (italian).

## Notes



## Outcomes



## Disclaimer

This is not an official asset. It has been created by me and it's not intended for professional use. However, it follows all guidelines you can find in https://console.bluemix.net/docs/services/conversation/ and in https://www.ibm.com/watson/developercloud/assistant/api/v1/. For Watson Services SLAs, please have a look here: https://www-03.ibm.com/software/sla/sladb.nsf/sla/bm-0038-09. Video tutorial linked are not official assets.

## License

his project uses the Apache License Version 2.0 software license. https://github.com/lucacrippa88/watson-assistant-nodered/blob/master/LICENSE
