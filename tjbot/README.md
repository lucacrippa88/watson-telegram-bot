## What is TJBot?

Look here for full information about TJBot and how to setup it: https://github.com/fmanclossi/TJBot-playbook


## Control a TJBot with Telegram

In this tutorial and related wiki page is shown how to control a TJBot writing to a Telegram bot. 

<img src="https://github.com/lucacrippa88/watson-telegram-bot/blob/master/img/tjbot_telegram.jpg" width="400px">

### What TJBot can do?

You can write to TJBot in order to perform the following actions:

- turns on led with on selected color 
- moves the arm in the selected position: lower, raised, back, wave
- takes a photo and send it to Telegram bot
- recognizes objects seen with it's eyes
- recognize colors seen and turn on led on the main color seen (to be updated to add colors)
- report the inside CPU temperature
- report the current weather and outside temperature (to be updated with the automatic position)

Currently the answers are provided to Node-RED debug console. Next step will be to connect a USB speaker to listen its voice!

### Are there easter eggs?

- You should try to ask TJBot to dance for you...
- You should always greet TJBot...


## Where to start

- Do you have a TJBot? Start with the Node-RED flow here: https://github.com/lucacrippa88/watson-telegram-bot/blob/master/tjbot/flows/control-with-telegram
- What if you do not have a TJBot? You can use Virtual TJBot nodes! Start with the Node-RED flow here: https://github.com/lucacrippa88/watson-telegram-bot/blob/master/tjbot/flows/control-with-telegram, then change TJBot nodes to Virtual TJBot nodes, you will have your Virtual TJBot in the right sidenav! Soon the flow for Virtual TJBot.


## Follow the tutorial

Tutorial starts in this wiki page: https://github.com/lucacrippa88/watson-telegram-bot/wiki/TJBot-interacting-with-human-using-Telegram
