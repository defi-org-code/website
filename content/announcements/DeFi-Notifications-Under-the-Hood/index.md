---
layout: pages/announcements/AnnouncementHandler
backButton:
  - ../back-button.md

date: Nov 22
read_text: 5 min read
link: DeFi-Notifications-Under-the-Hood
image: assets/images/announcements/DeFi-Notifications-Under-the-Hood/bg.jpg
title: "The Open DeFi Notifications Protocol - What’s Under the Hood?"
author: Defi.org
socials:
  - /announcements/authors/defi/socials.md
related:
description: ""
---

If you are familiar with the world of DeFi, you probably share the pain of constantly having to stay up-to-date with your positions across different projects manually.

[The Open DeFi Notifications Protocol](https://defi.org/notifications/) is an open-source and decentralized service that combines the usefulness of mobile push notifications with the trustlessness of the blockchain’s decentralization concept.

From a user standpoint, it's as simple as downloading an app from the [iOS](https://apps.apple.com/il/app/defi-notifications/id1588243632) or [Android app](https://play.google.com/store/apps/details?id=com.orbs.openDefiNotificationsApp&pli=1) stores, scanning your wallet QR, and selecting which notifications you’d like to subscribe to. From this point on, whenever there’s a change in the blockchain that meets certain criteria, you’ll be immediately notified via a push notification.

![banner](/assets/images/announcements/DeFi-Notifications-Under-the-Hood/image1.png)


The backbone of the system consists of three collaborating components which together allow a very secure and robust engine while maintaining high flexibility regarding integration of all kinds of DeFi projects across multiple blockchains. 

Now let’s understand how this is done under the hood….

![flow](/assets/images/announcements/DeFi-Notifications-Under-the-Hood/image2.jpg)


### Project Integration Code 

The first component in the system is the project integration code.

This is a super-simple and straightforward JS class that defines the conditions that need to be checked in order to know whether a notification should be sent or not. This is the only part of the system that consists of dynamic code, and needs to be implemented to integrate new DeFi projects or new notifications for existing projects.

To integrate, you’ll need to implement two methods:

1. **onSubscribeForm** - this method should return a json object that describes the form in the mobile app that will be shown to the user to allow subscribing to a certain notification. So, for example, if you want to set up a notification that should be sent when a certain threshold is reached, the form should include an input to allow setting this threshold.
2. **onBlocks** - this method is the actual testing of the notification condition, so this is the method that needs to implement the code that queries the blockchain and checks whether we need to send a push notification.


### Detector 

The second component is the Detector.

This is the “heart and soul” of the DeFi Notifications Protocol, and it is this module that does the actual execution of the project integration code. The Detector constantly queries each of the supported blockchains and tests all notification subscriptions, and if it finds a notification criteria which is met, it calls a push service to send a notification to the user.

Communication between the detector and push notifications provider (Firebase Messaging) is secured via ethereum based signatures.




### Orbs Layer 3 

The fourth and final component is [Orbs Layer 3](https://www.orbs.com/network/) (L3 for short).

This part of the system is responsible for auditing a portion of the notifications sent. It independently verifies that the test, which was done by the detector, for the specific parameters (user wallet, project contract etc) and specific state of the blockchain (block height) has in fact come out true and a notification should actually be sent.

Orbs L3 is a decentralized layer which takes advantage of the Orbs Guardians and ensures a secure execution space with zero trust required.

Just as before, each data packet sent between the detector and L3 is digitally signed using ethereum-based signatures with the guardian node wallet. 



# separator

### A Notification Standard for Leading DeFi Projects

The Open DeFi Notification Protocol is an open initiative to provide users with decentralized and free mobile notifications for on-chain events. 

The protocol has an impressive lineup of leading DeFi projects who have already been integrated into the Open DeFi Notification app for the benefit of their users, including among others: Aave, Uniswap, SushiSwap, QuickSwap, PancakeSwap and more…

**All in all, the app supports 20 protocols across 5 networks: Ethereum, BSC, Polygon, Fantom and Avalanche!**

![ecosystem](/assets/images/announcements/DeFi-Notifications-Under-the-Hood/image3.png)



# separator


The Protocol has been implemented fully by the [Orbs network](https://www.orbs.com/) and will be executed by the Orbs Guardians, making this the 1st fully decentralized implementation of a notification protocol.

Become involved and contribute:
https://github.com/open-defi-notification-protocol

Learn more about the Open DeFi Notification Protocol [here](https://defi.org/notifications/).

Proudly born in the [defi.org](http://defi.org/) accelerator, join our [Telegram channel](https://t.me/defiorg) for more updates!



# separator


**Please Note**

_The Open DeFi Notification Protocol is a beta version that is still under active development, and all underlying digital assets, blockchain networks and DeFi platforms are also subject to ongoing development, and as such, the protocol or the underlying platforms:_

_(a) may contain bugs, errors and defects,_

_(b) may function improperly or be subject to periods of downtime and unavailability,_

_(c) may result in total or partial loss or corruption of data or a delay or a failure to send or receive expected notifications._


_Any use of any platform, application and/or services described here is at your own risk and you are solely responsible for all transaction decisions. For more information, please see the [Terms of Use](https://defi.org/defi-notifications-terms-of-use/index.html) and [Privacy Policy](https://defi.org/defi-notifications-privacy-policy/index.html)._






