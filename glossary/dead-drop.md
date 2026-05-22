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

Dead drops illustrate a broader principle in [[operational security]]: when channels of communication are compromised or observable, the most secure option is sometimes not to use them at all. The technique forces adversaries to be in two places at once to observe both parties — a much higher operational cost than intercepting a transmission. For individuals operating under active surveillance, understanding the spectrum of communication options from fully digital to fully physical, and matching the method to the threat model, is a core [[digital self-defense]] skill.
