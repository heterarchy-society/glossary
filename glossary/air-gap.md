---
name: Air Gap
type: security concept
keywords:
  - air-gapped
  - isolated network
  - offline security
related:
  - opsec
  - encryption
  - self-custody
  - plausible-deniability
  - cryptocurrency
resources:
  - title: Wikipedia article "Air gap (networking)"
    url: https://en.wikipedia.org/wiki/Air_gap_(networking)
---

An air gap is a physical security measure that isolates a computer or network from all external connections — no internet, no local network, no wireless interfaces. The name describes the literal gap of air between the isolated system and any connected network. Data can only enter or leave via physical media: USB drives, optical discs, printed documents, or direct human transfer.

Air-gapped systems are used wherever the consequences of compromise are severe enough to justify the operational cost of physical isolation: nuclear-weapons control, power-grid management, classified government networks, and high-security cryptocurrency cold storage. The air gap is the strongest available network-security boundary, but it is not impenetrable — it merely shifts the attack surface from remote to physical. Malware has been delivered to air-gapped systems via infected USB drives (Stuxnet, which destroyed Iranian nuclear centrifuges, is the canonical case). Researchers have demonstrated leakage through electromagnetic emissions, acoustic signals from fans and hard drives, power fluctuations, and even heat signatures.

The air gap illustrates a broader principle: physical reality imposes costs that digital systems cannot. A state or corporation can remotely compromise networked devices at scale, but compromising an air-gapped system requires physical presence — a fundamentally different and more constrained attack surface. The asymmetry matters for anyone managing assets or information that justify the overhead: [[cryptocurrency]] [[self-custody|cold storage]], long-term identity keys, sensitive documents. The air gap does not make security easy, but it makes the adversary's task expensive in ways that cannot be automated away, which is often the most meaningful guarantee available.
