---
name: Clipper Chip
type: historical event
year: 1993
keywords:
  - key escrow
  - Skipjack
related:
  - crypto-wars
  - encryption
  - mass-surveillance
  - cypherpunk
  - pgp
resources:
  - title: Wikipedia article "Clipper chip"
    url: https://en.wikipedia.org/wiki/Clipper_chip
  - title: Protocol Failure in the Escrowed Encryption Standard — Matt Blaze (1994)
    url: https://www.mattblaze.org/papers/eesproto.pdf
---

The Clipper Chip was a hardware encryption device proposed by the U.S. National Security Agency in 1993 as a voluntary standard for telecommunications. It used the classified Skipjack cipher and a key-escrow design in which every chip's session key was held — split between two federal agencies — and could be reassembled to decrypt any conversation under legal process. The proposal was the most direct attempt in modern history to mandate a structural [[backdoor]] in civilian cryptographic infrastructure, and the public fight over it defined the first phase of the [[crypto-wars]].

The Clipper proposal failed for both political and technical reasons. The [[cypherpunk]] movement, the Electronic Frontier Foundation, and a coalition of civil-liberties groups, telecommunications companies, and academic cryptographers argued that key escrow created a single high-value target whose compromise would expose every communication ever made under the system. The technical case became decisive in 1994 when Matt Blaze published a vulnerability in the Escrowed Encryption Standard's Law Enforcement Access Field that allowed users to defeat the escrow while still appearing to comply. By 1996 the proposal was dead.

Clipper matters now because the policy argument it embodied keeps returning. "Exceptional access," "responsible encryption," "ghost users" — each generation of legislation proposes a new mechanism that key holders can be compelled to use against the user, and each runs into the same structural problem: a system that can be opened by an authorised party can be opened by an unauthorised one, and the deployment of strong end-to-end cryptography is the only architecture that resolves the dilemma. The Clipper story is the canonical worked example of why the [[cypherpunk]] position — code over law as the substrate of privacy — is not paranoia but engineering.
