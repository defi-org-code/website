---
layout: pages/announcements/AnnouncementHandler
backButton:
  - ../back-button.md

date: Sep 9, 2021
read_text: 5 min read
link: introducing-open-defi-notification-protocol
image: assets/images/announcements/introducing-open-defi-notification-protocol/main.png
title: "Introducing Open DeFi Notification Protocol"
posted_at: posted at Medium
author: Defi.org
socials:
  - /announcements/authors/defi/socials.md
related:
description: ""
---

_The Open DeFi Notification Protocol is a community led initiative to provide users with decentralized and free mobile notifications for on-chain events._

_With a quick 30 minute integration on Github, any DeFi project can provide its users with free mobile notifications for important events like accumulated pending rewards, price swings, near liquidations, stop loss, contract upgrades, new governance votes and more._

### Notifications --- important when money is at stake

One of the things that always bothered me with taking a loan on Compound or Aave is that prices are volatile. If I'm not careful, collateral value can drop and I will be liquidated. If somebody would wake me up in the middle of the night to adjust my position when this happens, I would sleep much better.

The same thing with AMM's like Sushi or PancakeSwap. When I buy a newly released moonshot, I know its price can collapse at any moment. If I had a sure way to be alerted on stop loss, I would sleep much better. Also when providing liquidity, particularly when degen farming, if the price moves too much or TVL increases and my reward share drops, I can easily find myself on the wrong side of IL vs farming profits. When I'm not on top of things, there's real risk to lose money.

Another example that I've never understood is the concept of timelock contract upgrades. This popular pattern permits the project core team to upgrade contracts via 12--24 hour timelock delay. Since these upgrades can usually migrate user funds, users are expected to review them and remove their funds until certain about the new code. How can I realistically monitor these upgrades without a notification?

The great thing about DeFi is that all the data is out there. A fully transparent financial system with every single event recorded on the ledger, yet a dependable mobile notifications service is not so easy to find.

### Protocol design goals

1\. Notifications should be free for users --- no subscription fees or ads*\
*We believe that mobile alerts for DeFi positions should be a free core blockchain service accessible to anyone, much like MetaMask or Etherscan.

2\. Dependable --- never miss an alert*\
*When money is involved and you're about to be liquidated, you can't afford to miss a notification. The protocol should be redundant enough to wake you up in the middle of the night with various degrees of nagging alerts.

3\. Multi network support --- Ethereum, BSC, Polygon and more\
The DeFi ecosystem is constantly expanding to new networks like Polygon and Arbitrum. The protocol should be chain agnostic and designed to integrate with any ecosystem that wishes to plug in.

4\. Community-led and open --- public and decentralized alert nodes\
Core blockchain services should be as decentralized as possible. Allow any developer to contribute code, any project to integrate and any validator to help run nodes.

### A polished user experience

Watch a video of a user in action setting up a notification in Aave to monitor health factor getting low (risk of liquidation):

<iframe width="692" height="519" src="https://www.youtube.com/embed/TNhu7YN5rIQ" title="Open DeFi Notification Protocol - Liquidation notification on Aave" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1.  An open-source web component can be integrated right inside Aave web frontend to let users set up notifications right from Aave's UI. This is not mandatory though.
2.  The user downloads the mobile app "DeFi Notifications" for iOS or Android and scans their address QR in MetaMask or the position QR in Aave UI. No other registration is required.
3.  The user chooses the type of notification to receive --- those are contributed by the Aave developer community. Dozens of supported DeFi projects show up right in the app. Any project contributor can add more.
4.  The user approves push notifications on their mobile device. Alert sound can be fully customized to gain your attention. Alternatively, they can select a Telegram message or even a Twilio phone call.
5.  Decentralized protocol alert nodes start to monitor new blocks for the user, looking for on-chain events that trigger a notification. Projects like Orbs Network are providing their validator nodes for this purpose.

### Ridiculously easy to integrate a new project

Let's say you're missing notifications on a new unsupported DeFi project like [Alpaca Finance](https://www.alpacafinance.org/).

The good news is that any Alpaca contributor can integrate notifications, not just the Alpaca core team. All it requires is implementing a simple JavaScript web3 class that extracts the notification from the chain data.

This class is then contributed via PR to the protocol [Github repo](https://github.com/open-defi-notification-protocol/projects). The whole process takes about 30 minutes for somebody familiar with the project's smart contracts. There's no need to run any backend, develop any UI or make any modification to the project's smart contracts.

Here is the integration that allows Aave users to get notified when their position health factor drops below 1.1:

![](/assets/images/announcements/introducing-open-defi-notification-protocol/2.png)

Once the PR is accepted, the project will immediately appear inside the mobile app with this new notification type enabled. You can control the project label, logo and colors by adding a small JSON file next to the class.

![](/assets/images/announcements/introducing-open-defi-notification-protocol/3.png)

When a new user registers for this notification in the app, the protocol's many alert nodes will start executing the newly contributed JavaScript web3 class against every new mainnet block to extract fresh notifications. When any fresh notification is returned, the alert nodes will trigger a push notification and send it to the user.

Become involved and contribute:\
<https://github.com/open-defi-notification-protocol>

Another user experience video showing [notifications in Sushi](https://youtu.be/ecdgzJ7tA1g)

Proudly born in the [defi.org](http://defi.org/) accelerator

Run an [alert node](https://github.com/orbs-network/validator-instructions) (23 nodes currently running --- [network status](http://status.orbs.network/))
