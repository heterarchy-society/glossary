---
name: Lightning Network
type: protocol
year: 2018
keywords:
  - lightning
  - payment channels
  - layer 2
related:
  - bitcoin
  - p2p
  - cryptocurrency
  - smart-contract
  - nostr
resources:
  - title: Wikipedia article "Lightning Network"
    url: https://en.wikipedia.org/wiki/Lightning_Network
  - title: The Bitcoin Lightning Network — Joseph Poon and Thaddeus Dryja (2016)
    url: https://lightning.network/lightning-network-paper.pdf
---

The Lightning Network is a payment protocol layered on top of [[bitcoin|Bitcoin]] that allows participants to send transactions to each other off-chain through a mesh of cryptographically secured payment channels, settling the net result to the base chain only when needed. The design was proposed by Joseph Poon and Thaddeus Dryja in 2016, and the network went live on Bitcoin mainnet in 2018.

The protocol uses Hash Time-Locked Contracts (HTLCs) and bidirectional channels to make off-chain payments trust-minimised — at any point either party can close the channel and broadcast the latest state to the chain. The motivation is structural: Bitcoin's base layer is deliberately constrained — small blocks, conservative changes — to maximise the decentralisation and durability of its consensus, which makes it unsuitable for high-frequency low-value payments. Lightning resolves the tension by treating the base chain as a settlement layer and routing day-to-day payments through a separate [[p2p|peer-to-peer]] network of channels.

The result is the closest thing to a working [[counter-economics|counter-economic]] payment rail at internet scale: near-instant, low-fee, and highly private payments, with base-layer settlement always available as a fallback. Lightning powers the "zap" tipping primitive in [[nostr|Nostr]], machine-to-machine payments in agentic systems, and cross-border remittances that bypass the correspondent-banking network. Its weaknesses — routing complexity, liquidity management, the operational burden of running a node — are active areas of work, and the protocol's trajectory is one of the better indicators of whether the [[cypherpunk]] monetary vision can scale to ordinary use.
