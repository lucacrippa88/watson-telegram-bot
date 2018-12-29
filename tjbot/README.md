# Control a TJBot with Telegram

## What is TJBot?

Look here for full information about TJBot and how to setup it: https://github.com/fmanclossi/TJBot-playbook


## Telegram interaction

In this tutorial and related wiki page is shown how to control a TJBot writing to a Telegram bot. 

<img src="https://github.com/lucacrippa88/watson-telegram-bot/blob/master/img/tjbot_telegram.jpg" width="800px">

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


## More info

In my personal opinion, what are the differences between TJBot (powered by Watson) and a smart speaker for home automation?

- First, TJBot is built over an open source software stack (Node-RED on Raspbian) and on a powerful and complete hardware (the Raspberry Pi 3b).
- Second, it can be enriched with all available and open source sensors, servo motors and so on.
- Third, it can leverage on every Watson service powered by IBM Cloud, such as Visual Recognition, Personality Insights and so on, in addition to Watson Assistant itself.
- Fourth, it's a real cognitive embodyment: Watson is not bound to a proprietary hardware technology or smartphones, but can add cognitive features to the hardware technology you choose, also smartphones via webapps, native apps or apps integration (like Telegram).
- Fifth, with TJBot, Watson demonstrates that it can be called not with an hotword like "Hey Watson", but with you very own hotword, like the room hotel digital concierge name or the on-board computer name of a sport car.
- Sixth, it is not only a general purpose assistant.
- Seventh, it can be trained on your very own problem, and it can be capable to answer complex questions based on your ecosystem, data and hystory.
- Eighth, your data are yours, securely bounded inside the Watson services inside your IBM Cloud account. They cannot be used to train general purpose Watson services.

The final question: is Watson (or TJBot) better then a smart speaker? 

My personal answer: they are very different, they have different targets, different audience and different scope.
