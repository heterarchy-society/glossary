---
name: Web of Trust
type: concept
keywords:
  - key signing
  - PGP trust
  - decentralized trust
  - key signing party
related:
  - cypherpunk
  - pgp
  - public-key-cryptography
  - self-sovereign-identity
  - decentralization
resources:
  - title: Wikipedia article "Web of trust"
    url: https://en.wikipedia.org/wiki/Web_of_trust
---

A web of trust is a decentralised model for establishing the authenticity of cryptographic keys without relying on a central certificate authority. Users sign each other's public keys to vouch that a key genuinely belongs to the person it claims to belong to; trust then propagates through the network of signatures, creating a distributed infrastructure of verified identities built entirely on voluntary attestation between people who know each other.

The key-signing party — a gathering where participants verify each other's identity documents and sign each other's public keys — is the ritual through which the web grows. This is a fundamentally different model from the certificate-authority system used in HTTPS, where a small number of companies are designated by browser vendors as trusted signers for the entire internet. The web of trust is [[heterarchy|heterarchical]]: there is no apex authority whose compromise brings down the whole system. Its weakness is that trust does not automatically extend to people outside your social graph.

For the [[cypherpunk]] movement, the web of trust was not just a technical mechanism but a model for how trust should work in human society more broadly — built from direct relationships and voluntary endorsement rather than delegated to institutions whose trustworthiness cannot be independently verified. The analogy extends beyond cryptography: reputation systems in decentralised markets, vouching networks in [[agorism|agorist]] communities, and peer attestation in [[self-sovereign-identity|self-sovereign identity]] systems all implement web-of-trust logic. The common thread is that trust is earned through relationships, not granted by authorities.
