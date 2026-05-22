---
name: Dead Drop
type: technique
keywords:
  - dead letter box
  - covert communication
resources:
  - title: Wikipedia article "Dead drop"
    url: https://en.wikipedia.org/wiki/Dead_drop
---

A dead drop is a method of passing information between two parties without direct contact, by leaving materials at a pre-arranged location for the other party to retrieve later. The classic form is physical — a hollowed-out bolt in a park, a chalk mark on a mailbox, an envelope under a particular loose brick. The defining feature is temporal and spatial separation: sender and receiver are never present at the same location at the same time, which means they cannot be observed meeting and cannot implicate each other if caught. Intelligence services have used dead drops for centuries; the technique predates modern cryptography and remains relevant because it leaves no digital trace.

In digital contexts, dead drop techniques have been adapted for anonymous file sharing and secure communication. An email account can serve as a digital dead drop: two parties share credentials to a draft folder, and messages are left as unsent drafts that are never transmitted over the network — only read by someone who logs in and opens the folder. This defeats traffic analysis because no message is ever sent. The [Tor]-based [[SecureDrop]] system used by journalists to receive documents from [[whistleblowing|whistleblowers]] incorporates dead drop principles. In adversarial environments where communication metadata is as dangerous as content, the dead drop logic — separate the act of leaving from the act of retrieving — remains a powerful privacy primitive.

The dead drop belongs to a wider ecosystem of techniques for maintaining free communication under adversarial conditions — alongside [[encryption]], [[anonymous communication]] networks, and [[steganography]]. What distinguishes it is that it operates in the physical layer, where digital surveillance has no reach. For the parallel society, this points to a general principle: a diversity of communication channels, each suited to different threat models, is more resilient than dependence on any single medium. When one channel is compromised, others remain. The dead drop is not an anachronism but a reminder that the most robust [[operational security]] combines digital and physical layers rather than treating them as alternatives.
