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

The Sybil problem crystallizes a core tension in the parallel society project: openness and integrity pull in opposite directions. A network that anyone can join without verification is maximally inclusive but trivially capturable by a well-resourced adversary who simply floods it with fake participants. A network that requires strong identity verification is resilient against Sybil attacks but risks recreating the very surveillance and exclusion it was built to escape. There is no clean solution — only trade-offs managed by design. [[Proof of work]], [[proof of stake]], [[web of trust]] attestation, and [[zero-knowledge proof|zero-knowledge]] proof of personhood are different points on this spectrum, each optimizing for different values. Understanding Sybil resistance is understanding that in decentralized systems, the hardest problems are not technical but political: who gets to participate, on what terms, and how do you keep the system honest without making it a gatekeeper.
