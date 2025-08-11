const e=`---
title: "Customer Service at United Airlines: the Good, the Bad and the Ugly"
metatitle: "Analysis over Customer Service at United Airlines"
date: 2023-03-21 11:25:00-08:00
draft: false
author: Xuchen Yao
description: "Xuchen Yao shares his recent experience with United Airlines' customer service during flight delays and cancellations and proposes solutions to address the challenge of dynamically scaling customer support during surge traffic."
weight: 1
tags:
  - SeaX
image: images/blog/31-cx-at-united-airlines/flight-delay-illustration.png
canonicalURL: /blog/customer-service-at-united-airlines/
url: /blog/customer-service-at-united-airlines/
---

*[Seasalt.ai](https://seasalt.ai) CEO, Xuchen Yao, shares his recent experience with United Airlines' customer service after facing flight delays and cancellations. This led him to realize the challenges faced by airline customer support in dynamically scaling itself to handle surge traffic during such situations. Xuchen talks about potential improvements such as diverting self-servable traffic from human agents, improving the efficiency of human agents, and developing technology to proactively identify and de-risk potential issues.*

This blog was written on the UA2 flight from Singapore to San Francisco on 3/22/2023.

I recently took the pleasure of taking the flight of UA1 from San Francisco (SFO) to Singapore (SIN). The pleasure quickly became a misfortune due to flight cancellation. Here’s the learning about United’s customer service from the eyes of a technologist who builds contact centers.



# A flight of two lags: delayed and canceled

Here was the plan for the trip to Singapore from Seattle on Tuesday 3/14/2023:

<center>
<img src="/images/blog/31-cx-at-united-airlines/united-flights.png" alt="My planned United flights"/>

*7:29AM – 09:42AM, from Seattle (SEA) to San Francisco (SFO) on UA2368. 11:50AM – 08:15PM, from San Francisco (SFO) to Singapore (SIN) on UA29.*
</center>

Unfortunately, I took neither of the flights.

The first flight was delayed for 1.5 hours due to a jam at the Seattle airport (at 7AM in the morning!). That reduced my transition time to 0 at SFO. I talked to field service on SEA ground and they put me on an Alaska flight from SEA to SFO. That Alaska flight was delayed too but still made it to SFO at 11AM, giving me barely enough time to catch the next flight.

**THE GOOD**: United let me change my flight to Alaska for free.

**THE GOOD**: United was very proactive on the delays via a “26266” short code. When the delay happened, it even offered options to rebook my flights.

**THE BAD**: The flight rebook option is only limited to United flights. No rebooking between airlines. I had to talk to a human to be put on a different flight.

**THE UGLY**: Why was SEA Airport so jammed at 7AM?!

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-1.jpg" alt="United text message support - 1"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-2.jpg" alt="United text message support - 2"/></td>
  </tr>
 </table>

*United Airlines’ short code messaging system is timely and proactive.*
</center>


1. What was interesting was **on** UA1. We stayed on the ground for 3 hours and eventually the flight got canceled due to the following events:
2. First San Francisco had really high wind that all flights were grounded
Then when it was cleared to fly, all planes were waiting in a very long queue to clear out
3. Finally when it was almost our turn, the pilots said they were working overtime and according to FAA regulations, it was illegal for them to continue to fly. Because the flight to Singapore was 17 hours and given the time they spent on the ground, they would have exceeded the limit by the time they got to Singapore. 

Unfortunately, there were no replacement pilots, so the whole flight was canceled.

**THE UGLY**: During the entire time of 3 hours on the ground, United offered 2 biscuits. That’s it.

Everyone rushed out of the plane, thinking about how this impacted their travel. Since this is international, we would have arrived in Singapore on a different day. Not the next day, but actually two days later: because Singapore is 15 hours ahead and the flight is 17 hours.

Then about 300 passengers ran to ground customer service at United. By the time I reached United Customer Service, there were already about 200 people in line in front of me. A lot of them were impacted due to the weather from other flights carried by United.

Getting to talk with a ground agent would be hopeless given how slow the line moved. I know there’s another flight at 11PM to Singapore on the same day, also from United. My hope is to get rebooked to that flight at 11PM. Probably a lot of people from my flight wanted to do the same but all stood in the line as me.

Here’s what I did:

1. I called United via phone: 800-864-8331
2. I texted United virtual agent via short code: 32050. 
3. I used the United website to try to video chat with the agent
4. I was also standing in the line for a ground agent

I was literally a **cross-channel** customer when needing to resolve an important and emergent issue immediately. 


**THE GOOD**: United offered 4 different ways of connecting with their customer service.

**THE GOOD**: By confirming the flight number, United was able to pull its status and knew it was impacted, and offered rebook/cancel options.

**THE BAD**: The phone waiting time estimation was way off. It told me the wait time was 2 minutes but I waited 45 minutes to talk with an agent.

**THE BAD**: The chatbot is very dumb. I had to follow its “menus” by pressing 1/2/3/4 or A/B/C/D/E as replies.

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="United text message support - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="United text message support - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="United text message support - 5"/></td>
  </tr>
 </table>

*United Airline chatbot uses last generation technology that offers a menu card to limit passengers’ input.*
</center>


**THE UGLY**: There were literally less than 10 customer service agents on the ground to deal with over 1000 impacted passengers. This created anxiety, anger, helplessness, and pressure on both customers and agents. This is because when our flight was canceled, the ground service and flying attendants told everyone to talk with their ground customer service. **Instructing every impacted passenger to talk to the less than 10 ground customer service agents created a physical “DDOS” attack on United’s ground customer service.**

DDOS stands for “Distributed Denial of Service” when hackers direct traffic from millions of places to a single website to make it unresponsive to any services. 

**THE UGLY**: I used 4 channels to talk with United (text, video chat, phone call, ground). I used 4 times more resources and everyone else could have done the same. This artificially increased a spike of 4X of traffic and pressure to United customer service. I suppose every other passenger did so because that explained why my “waiting time of 2 minutes” became 45 minutes eventually.

Eventually I got connected via phone and the agent spent about 20 minutes to rebook me to a later flight at 11PM to Singapore on the same day. By the time I finished, I was still in line in video chat, dealing with the chatbot (ironically it’s called liveperson), and obviously physically in line.

I told a young man standing behind me from the same flight to call United. He said: “no way, it’ll take forever!”. But I said: “I just rebooked via phone. Look, there are 200 people in front of us, how long do you think you’ll wait in the queue?”

Later at 11PM, I ran into the young man on my rebooked flight. He was so happy to see me and cannot thank me enough for the “phone tip”. He wore a “tiktok” shirt and high-end headphones, so I thought he might be tech savvy or at least good with computers.

**THE UGLY**: Perception from a “tech savvy” customer was that phone calls won’t solve anything for him, he’d rather physically wait in line to talk with a real person while he can clearly see how long the queue was. **This reflects how badly the general public think about the unhelpfulness of phone support.**

# Airline Customer Support: the Main Problem is Dynamic Scalability

With the experience of having one flight delayed and one canceled on the same day, and talking to customer services via 4 different channels on two occasions, and a deep understanding of how contact centers are built – I think the major problem of Airline Customer Support is this:

**Airline Customer Support cannot dynamically scale itself. Or put it in cloud computing terms: Airline Customer Support is not elastic.**

This not only happened with United. I had similar experiences with Air Canada during Covid-19: each phone call took more than 2 hours of waiting time.


I don’t even think a dump chatbot or an unempathetic human agent is the main problem. Customer support has its unique pattern that they come in waves: **usually when a flight is impacted, between tens of dozens of passengers and hundreds of them are trying to contact at the same time, sometimes with a multiplier of 4 via cross channels.**

This kind of traffic surge is not well handled by modern airline contact centers. What makes it worse is that all of these issues are “code red”: it needs to be resolved _immediately_. Sorry, no Zendesk-based Asynchronous email support. _I need to talk with an agent right now_. 

# Airline Customer Support: Humans Don’t Scale

Let’s think about how an e-commerce website prepares itself during peak traffic like Black Friday:
1. **Predict** what kind of traffic it’ll get during what time.
2. **Pre-allocate** enough server resources by contacting cloud providers or increase the limit of their server clusters.
3. **Dynamically spawn** more servers when traffic surges.

Can airline customer support do the same?
1. **Predict**: there are models we could use to predict when a flight is impacted but I don’t know whether they use any. For instance, one can take the following factors into considerations:
    * Around airport traffic – easily pulled out from Google Maps
    * Congestion at airport – some airports have real-time updates
    * Local weather
    * Usual travel patterns such as holidays
    * Local events that create a large influx and outflux of * passengers such as CES in Las Vegas
    * Other signals such as plane conditions
    * History statuses
2. **Pre-allocate**: I believe this is what each airline is or should be doing around holiday seasons by hiring more agents. I certainly hope they do that. I know TurboTax hires more people around tax return deadlines.
3. **Dynamically spawn**: this is the most difficult case. There’s simply no easy way to do it with humans, especially with trained experienced agents.

# Airline Customer Support: How to Scale

Our main goal is to deal with surge traffic when passengers need to solve their problems on the spot, without delay. 
1. Digital self-serve channels don’t seem to be able to totally replace human agents for the following two reasons:
Digital self-serve channels are limited and don’t offer enough back-office access as a human agent has
2. Passengers psychologically want to talk with a human because traditionally automated solutions were not helping, especially the infamous chatbots.

The solution is not that straightforward because humans are hard to scale. But there was also ways to resolve it:
1. A lot of problems can still be solved by self-serve channels. We need to identify them and divert the self-servable traffic from human agents.
    * For instance, when my flight was canceled – all I wanted was to rebook the flights. But United didn’t offer me this option and I had to call. However, when my flight was delayed, United proactively offered me the rebook option. The solutions to both problems are the same – I don’t need to talk with an agent when my flight is canceled more than when my flight is delayed. Why can’t I self-serve?
2. Human agents can be more efficient when in the chat or on the call.
    * The customer service agent took about 30 minutes to rebook me, with about 15 minutes putting me on hold while she was working on something.
    * The rest of 15 minutes when she was talking to me: half of the time she was collecting information.
    * I feel with optimization, the 30 minutes can be shortened to 5-10 minutes if information collection and automation are done properly.

If I were to build a contact center system for United, the following are what I will do:
1. Offer chat and phone calls as the primary customer service channels. Don’t redirect a whole plane of passengers to ground customer services (we’ve all seen how crowded the car rental places are after a big plane just landed in a tourism destination).
2. Merge cross-channel customers into one single channel. This means identifying the customers as soon as possible. This will greatly reduce the queue size and save agent bandwidth.
3. Produce a more intelligent chat-based support. The current generation of chatbot becomes obsolete, outdated, and very unpopular after ChatGPT is out. Let ChatGPT handle the conversation – in our experience it does better than humans!
4. Emphasize on the efficiency of human agents: getting the job done is not enough if each call takes 45 minutes; let’s help them resolve the issues quickly by offering:
    * “next best action” suggestions
    * “previous successful resolutions” based on other agents’ chat or call logs
    * real-time copilot that helps with execution to back-office systems via API calls or RPA automations
5. Build a prediction model on the risk of surge customer service requests and proactively work on it.


I never had a customer service agent proactively reach out to me to resolve the issue. It has always been me, the passenger, frustratingly waiting and calling in line and on the line. 

We at [Seasalt.ai](https://seasalt.ai/?utm_source=blog) are happy to build a “minority report”-like technology to identify the problem before it happens, de-risk it by proactively reaching out to impacted passengers, and tackle the challenge of dynamically scaling a contact center with humans during surge traffic. 

If in the next few years, I receive a phone call from the airline communicating a potential problem before I attempt to seek help, that’ll be truly amazing customer experience and delightful journey before I even take the trip. Whichever airline can do it first will win so many loyal flyers.
`;export{e as default};
