---
name: Dead Drop
type: technique
keywords:
  - dead letter box
  - covert communication
related:
  - encryption
  - anonymous-communication
  - steganography
  - opsec
  - whistleblowing
resources:
  - title: Wikipedia article "Dead drop"
    url: https://en.wikipedia.org/wiki/Dead_drop
---

A dead drop is a method of passing information between two parties without direct contact, by leaving material at a pre-arranged location for the other party to retrieve later. The defining feature is temporal and spatial separation: sender and receiver are never present at the same place at the same time, so they cannot be observed meeting and cannot implicate each other if caught.

The classic form is physical — a hollowed-out bolt in a park, a chalk mark on a mailbox, an envelope under a loose brick. Intelligence services have used dead drops for centuries; the technique predates modern cryptography. Digital adaptations preserve the same logic: two parties share credentials to an email draft folder, and messages are left as unsent drafts that are never transmitted, defeating traffic analysis at the network layer. The Tor-based SecureDrop system used by journalists to receive material from [[whistleblowing|whistleblowers]] incorporates the same principle.

The dead drop belongs to a wider ecosystem of techniques for maintaining free communication under adversarial conditions, alongside [[encryption]], [[anonymous-communication|anonymous communication]] networks, and [[steganography]]. What distinguishes it is that it operates in the physical layer, where digital surveillance has no reach. The general lesson is that a diversity of channels suited to different threat models is more resilient than dependence on any single medium. When one is compromised, others remain — robust [[opsec|operational security]] combines digital and physical layers rather than treating them as alternatives.
