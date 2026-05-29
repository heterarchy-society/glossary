---
name: Nostr
type: protocol
year: 2020
keywords:
  - Notes and Other Stuff Transmitted by Relays
  - npub
  - relays
related:
  - p2p
  - censorship-resistance
  - self-sovereign-identity
  - public-key-cryptography
  - decentralization
resources:
  - title: Nostr protocol specification (NIPs)
    url: https://github.com/nostr-protocol/nips
  - title: nostr.com — protocol overview
    url: https://nostr.com/
---

Nostr (Notes and Other Stuff Transmitted by Relays) is an open protocol for censorship-resistant social communication, designed by the pseudonymous developer fiatjaf in 2020. Rather than depending on any single platform or server, Nostr clients publish cryptographically signed events to a user-chosen set of relays, and read events from those same relays. There are no accounts to register and no central authority — identity is simply a [[public-key-cryptography|public key]], and any relay that accepts an event makes it available to anyone who asks for it.

The protocol's design is deliberately minimal: a small JSON event format, a signature scheme, and a relay interface. This simplicity is its strength — relays are cheap to run, clients are cheap to build, and no party can be coerced into deplatforming a user across the network as a whole. If a relay refuses to carry your events, you publish to a different one; if a client censors what it displays, you switch clients. This is [[censorship-resistance]] achieved not through obfuscation but through structural pluralism, in the spirit of the broader [[cypherpunk]] tradition.

Nostr has become the de facto social layer of the parallel society's crypto-native wing, with native integration of [[bitcoin]] Lightning payments ("zaps"), portable [[self-sovereign-identity|self-sovereign identity]] across applications, and a growing ecosystem of clients spanning microblogging, long-form writing, marketplaces, and group chat. It is one of the clearest contemporary examples of [[heterarchy|heterarchical]] infrastructure: many overlapping relays, many competing clients, one shared protocol, and no single point of capture.
