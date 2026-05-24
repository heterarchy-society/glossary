---
name: Backdoor
type: concept
keywords:
  - trapdoor
  - backdoors
related:
  - encryption
  - cryptography
  - surveillance
  - crypto-wars
resources:
  - title: Wikipedia article "Backdoor (computing)"
    url: https://en.wikipedia.org/wiki/Backdoor_(computing)
  - title: Keys Under Doormats (MIT, 2015)
    url: https://dspace.mit.edu/handle/1721.1/97690
---

A backdoor is a deliberately hidden access mechanism in software, hardware, or a cryptographic system that bypasses standard authentication and allows unauthorized entry. It may be inserted by a manufacturer at government request, planted by an attacker through supply chain compromise, or exist as a bug intentionally left unpatched. In the context of encryption, backdoors have historically been pushed under euphemisms like "key escrow" or "exceptional access."

In practice, a backdoor means a second key or path to data exists alongside the legitimate one — whether a master decryption key held by a third party, a weakened random number generator (the Dual_EC_DRBG case, where the NSA embedded predictability into a NIST standard in 2006), or a hidden service account in a network device. A backdoor does not distinguish between authorized and unauthorized users: anyone who knows it exists can exploit it.

Government demands for backdoors into [[encryption]] are a recurring theme of the [[crypto-wars]]. The cryptographic community has long argued — and the 2015 MIT "Keys Under Doormats" paper confirmed empirically — that it is mathematically impossible to build a backdoor accessible only to the "right" authorities: weakening a system for one weakens it for all. For [[cypherpunk|cypherpunks]] and builders of parallel structures, the absence of backdoors is a precondition for trusting any tool.
