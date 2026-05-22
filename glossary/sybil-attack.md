---
name: Sybil Attack
type: security concept
keywords:
  - sybil resistance
  - fake identities
resources:
  - title: Wikipedia article "Sybil attack"
    url: https://en.wikipedia.org/wiki/Sybil_attack
---

A Sybil attack is an attempt to subvert a decentralized network by creating a large number of fake identities, allowing a single actor to gain disproportionate influence over the system. Named after the 1973 book about a woman with multiple personality disorder, the attack exploits any system where influence scales with the number of identities rather than some scarce resource. In a peer-to-peer network where each node has one vote, an adversary who creates a thousand fake nodes controls a thousand votes. In a reputation system where each account accumulates trust independently, an attacker can build a network of seemingly unrelated accounts that all serve the same purpose.

Sybil resistance — the property of being difficult to subvert through identity multiplication — is one of the core design challenges of decentralized systems. [[Bitcoin]]'s [[proof of work]] achieves Sybil resistance by making influence proportional to computational expenditure rather than identity count: you cannot cheaply create a thousand mining identities because each requires real hardware and energy. [[Proof of stake]] ties influence to economic stake, which also cannot be manufactured from thin air. Other approaches include social graph verification (proving you are a unique human through existing relationships), biometric attestation, and physical-world proof of personhood systems — though each introduces its own trade-offs between Sybil resistance, [[privacy]], and accessibility.

The Sybil problem is not merely technical — it reflects a fundamental tension in decentralized systems between openness and integrity. A system that requires no identity verification is maximally open but trivially Sybil-attackable. A system that requires strong identity verification is Sybil-resistant but potentially exclusionary and privacy-violating. Most practical systems find points on this trade-off spectrum suited to their threat models. Understanding Sybil attacks helps explain why [[proof of work]], stake-based governance, and reputation systems are designed the way they are — and why building Sybil-resistant systems without sacrificing [[anonymity]] remains one of the hardest open problems in decentralized system design.
