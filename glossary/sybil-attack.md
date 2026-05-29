---
name: Sybil Attack
type: security concept
keywords:
  - sybil resistance
  - fake identities
related:
  - proof-of-work
  - proof-of-stake
  - web-of-trust
  - zero-knowledge-proof
  - decentralization
resources:
  - title: Wikipedia article "Sybil attack"
    url: https://en.wikipedia.org/wiki/Sybil_attack
---

A Sybil attack subverts a decentralised network by creating a large number of fake identities, allowing a single actor to gain disproportionate influence over the system. Named after the 1973 book about a woman with multiple personality disorder, the attack exploits any system where influence scales with the number of identities rather than with some scarce resource that cannot be cheaply duplicated.

In a peer-to-peer network where each node has one vote, an adversary who creates a thousand fake nodes controls a thousand votes; in a reputation system where each account accumulates trust independently, a network of seemingly unrelated accounts can serve the same purpose. Sybil resistance — the property of being difficult to subvert through identity multiplication — is therefore one of the core design challenges of decentralised systems, and the answers usually take the same form: tie influence to something scarce. Computation, stake, social attestation, biometrics, lived time on the network.

The Sybil problem crystallises a tension that runs through the parallel-society project: openness and integrity pull in opposite directions. A network anyone can join without verification is maximally inclusive but trivially capturable by a well-resourced adversary who simply floods it. A network demanding strong identity verification is Sybil-resistant but risks recreating the surveillance and gatekeeping it was built to escape. [[bitcoin|Bitcoin]]'s [[proof-of-work]] ties influence to computational expenditure; [[proof-of-stake]] to economic stake; [[web-of-trust]] attestation and [[zero-knowledge-proof|zero-knowledge]] proof-of-personhood are further points on the spectrum — each managing the same trade-off differently.
