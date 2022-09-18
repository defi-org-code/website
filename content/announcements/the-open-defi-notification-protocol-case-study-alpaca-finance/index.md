---
layout: pages/announcements/AnnouncementHandler
backButton:
  - ../back-button.md

date: Jul 14
read_text: 4 min read
link: the-open-defi-notification-protocol-case-study-alpaca-finance
image: assets/images/announcements/the-open-defi-notification-protocol-case-study-alpaca-finance/main.jpeg
title: "The Open DeFi Notification Protocol Case Study: Alpaca Finance"
posted_at: posted at Medium
author: Defi.org
socials:
  - /announcements/authors/defi/socials.md
related:
description: ""
---

- Alpaca Finance is ​​the largest lending protocol for leveraged yield farming (LYF).
- The Open DeFi Notification Protocol is a community led initiative to provide users with decentralized and free mobile notifications for on-chain events.
- Alpaca has recently integrated the Notification Protocol to provide its users with 24/7 real-time notifications to monitor their LYF positions' health factor.
- Following the integration and additional educational content by the Alpaca team, the Notification app is now widely used by Alpaca users, with over 1,000 active notifications.

#### Problem

Lending protocols such as MakerDAO, Aave, Compound Finance, Alpaca Finance etc., have become some of the biggest powerhouses in DeFi with billions of dollars in TVL. These protocols enable various investment and trading strategies, such as leveraged yield farming (LYF) by Alpaca.

However, taking a loan can carry certain risks, primarily the risk of liquidation.

Liquidation risk is doubly important in crypto where the market is known for its high volatility. Therefore, having continuous monitoring of a loan's health factor is a crucial service for any user of these DeFi protocols.

Alpaca Finance is the largest lending protocols allowing [leveraged yield farming](https://docs.alpacafinance.org/our-protocol-1/step-by-step-guide/farm) (LYF) on BNB Chain and Fantom, with over $500M in TVL. Alpaca borrowers can take undercollateralized loans for LYF positions to increase their assets base and yields. Alpaca, calculates the [Safety Buffer](https://docs.alpacafinance.org/leveraged-yield-farming/liquidation) which tells you how close you are to potential liquidation. Once it reaches zero, you can get liquidated.

The great thing about DeFi is that all the data is out there --- it is a fully transparent financial system with every single event recorded on the ledger, yet a dependable mobile notifications service is not so easy to find.

Until now...

#### Solution

[The Open DeFi Notification Protocol](https://defi.org/notifications/) is an open initiative to provide users with decentralized and free mobile notifications for on-chain events, powered by the [Orbs network](https://www.orbs.com/).

The protocol is fully open, allowing anyone to contribute new notifications by implementing a simple JavaScript web3 class that extracts the notification from the chain data.

Recently, Alpaca Finance has [integrated](https://medium.com/@defiorg/the-open-defi-notification-protocol-now-supports-alpaca-finance-c99213c5f72d) the Notification Protocol, first on BNB Chain closely followed by Fantom. Using the Open DeFi Notification Protocol, Alpaca users can set up a "position health" notification which will issue an alert once the safety buffer drops below a specified threshold. In this way, users have 24/7 monitoring of their position health, and can take immediate action in case of a low safety buffer, such as adding collateral, in order to increase their safety buffer to mitigate the risk of liquidation.

<iframe width="692" height="389" src="https://www.youtube.com/embed/UV9mDWpJBsw" title="The Open DeFi Notification Protocol - Position health notification on Alpaca Finance" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In addition, Alpaca has implemented the Notification Widget on their [Portfolio page UI](https://app.alpacafinance.org/portfolio/farm), allowing for an even greater accessibility to the app for their users.

All in all, the entire process of downloading the app to setting up an alert is very quick and user-friendly, as can be seen in the video below:

In addition, Alpaca has also spent considerable time and effort [announcing](https://twitter.com/AlpacaFinance/status/1491606147685654531) this new tool to their community, together with educational content explaining the benefits of using the Notification app to help mitigate liquidation risks. This played a pivotal role in the wide use of the app by the Alpaca community.

![](/assets/images/announcements/the-open-defi-notification-protocol-case-study-alpaca-finance/2.jpeg)

#### Results

The above mentioned steps taken by the Alpaca Finance project have contributed to the success of the Notification app integration by Alpaca, with approximately 1,000 active notifications.

This is by far the most active protocol in comparison to other projects currently available on the app.

![](/assets/images/announcements/the-open-defi-notification-protocol-case-study-alpaca-finance/3.png)

### Conclusions

Real-time notifications are an absolute must when money is at stake. The Open DeFi Notification Protocol ensures that DeFi users never miss a crucial alert

With a quick 30 minute integration on Github, any DeFi project can provide its users with free mobile notifications for important events like accumulated pending rewards, price swings, near liquidations, stop loss, contract upgrades, new governance votes and more.

As we can see in the case of Alpaca, following a successful integration of the protocol on both BNB Chain and Fantom, the addition of the app's widget to the UI, and educational content for the users, the Notification app is widely utilized by Alpaca users.

With these simple and quick steps, any DeFi project can follow suit to provide its users with crucial alerts to optimize their DeFi trading strategies and help manage risk.

# separator

_The Open DeFi Notification Protocol by _[_defi.org_](https://defi.org/)_ is a free-for-use, community-inspired initiative to provide users with decentralized and free mobile notifications for all sorts of on-chain events. The Protocol is powered by the _[_Orbs network_](https://www.orbs.com/)_ and will be executed by its decentralized network of independent nodes, known as the Orbs Guardians._

_The Open DeFi Notification Protocol app is available on both _[_Apple AppStore_](https://apps.apple.com/il/app/defi-notifications/id1588243632)_ and _[_Google Play_](https://play.google.com/store/apps/details?id=com.orbs.openDefiNotificationsApp)_._

Learn more:

<https://defi.org/notifications/>

Become involved and contribute:

<https://github.com/open-defi-notification-protocol>

Proudly born in the [defi.org](https://defi.org/) accelerator

Powered by the [Orbs network](https://www.orbs.com/).

Run an [alert node](https://github.com/orbs-network/validator-instructions) (23 nodes currently running --- [network status](http://status.orbs.network/))
