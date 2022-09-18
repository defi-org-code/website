---
layout: pages/announcements/AnnouncementHandler
backButton:
  - ../back-button.md

date: Sep 14, 2021
read_text: 3 min read
link: open-defi-notification-protocol-and-epns-a-comparison
title: "Open DeFi Notification Protocol and EPNS — a Comparison"
posted_at: posted at Medium
author: Defi.org
socials:
  - /announcements/authors/defi/socials.md
related:
description: ""
---

Diversity and having multiple alternative solutions to similar pains is core to blockchain culture. There's no single "best" L2 network and there's no single "best" lending platform --- Compound and Aave each have their own unique advantages.

Similarly, the [Open DeFi Notification Protocol](https://medium.com/@defiorg/introducing-open-defi-notification-protocol-95a8712a94e0) and [EPNS](https://epns.io/) try to address a similar need --- sending mobile notifications to users for on-chain events --- but each solution has a different approach.

The Open DeFi Notification Protocol was born out of frustration. It's September 2021, Ethereum has been popular for years, DeFi is exploding, and yet there's no streamlined working solution for users to actually get their notifications from dapps.

When designing the new Open Protocol, we decided to do a couple of things differently from existing solutions like EPNS, in the hope of solving this pain for users in a simple and straightforward way:

1\. Make new project integrations dead simple

DeFi moves fast. There are 10 new DeFi projects launched every day and every project is unique. If integrating a new project to notifications takes more than a few minutes, there's no way the protocol could keep up.

EPNS architecture requires significant dev investment from a new project. The project either has to adapt its smart contracts or run a custom backend service. Both are difficult and would normally only be done by the core team.

With Open Protocol, any community contributor can integrate a new project with a PR containing about [20 lines of code](https://github.com/open-defi-notification-protocol/projects#example---low-health-notification-for-aave). There's no need to modify the project's smart contracts, no need to run any backend or modify the project's frontend.

2\. Clear and predictable pricing model for end users --- 100% free

Users are accustomed to getting free mobile notifications from just about every app in the traditional world. Why should blockchain be different? If core complementary blockchain services like MetaMask and Etherscan were not free to use, the ecosystem wouldn't grow to what it is today.

The complexity of EPNS comes with some hidden costs for end users. Subscriptions and sent notifications cost gas, this is probably why the project is still only live on Ropsten today. The [white paper](https://whitepaper.epns.io/protocol-specs-section/epns-protocol/sending-notifications#concept) also describes micro fees on notifications that are sent out.

With Open Protocol, subscriptions and notifications are sent off-chain for maximum efficiency, giving end users clarity that receiving notifications will always be free.

3\. Do only one thing --- but do it well

EPNS is a complex protocol, made overly generic to support multiple senders, multiple providers, multiple storage mediums like IPFS, etc. This complexity is difficult to implement, with over 1 year since the white paper published in June 2020 and still today --- registering for a simple push notification in a production setting outside of a demo doesn't fully work.

The Open Protocol is aggressively simple. It does one thing, but it's laser focused on doing it well.

Projects may not have the full flexibility to architect any custom solution on the protocol, but if they simply want their users to receive straightforward notifications, it's as simple as it gets.

A good example of this is the approach to decentralization. EPNS struggles with creating its own token incentive layer from scratch. This takes years. Causing third-party validators to actually participate in your decentralized network is not easy.

With the Open Protocol we've decided to bootstrap existing decentralized validator networks --- that already have dozens of production permissionless nodes and a working incentive layer staked with hundreds of millions of dollars like [Orbs Network](http://status.orbs.network/).
