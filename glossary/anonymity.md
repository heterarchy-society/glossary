---
name: Anonymity
type: concept
keywords:
  - anonymous
  - anonymous communication
related:
  - pseudonymity
  - privacy
  - tor
  - mixnet
  - opsec
  - onion-routing
resources:
  - title: Wikipedia article "Anonymity"
    url: https://en.wikipedia.org/wiki/Anonymity
---

Anonymity is the condition of acting without any identifier — pseudonymous or otherwise — that can be tied back to a person across interactions. It differs from [[pseudonymity]] in a structural way: a pseudonym persists and accumulates reputation, while an anonymous actor is, by design, unlinkable from one moment to the next. Both serve [[privacy]], but they answer different needs. Pseudonymity preserves identity while hiding it; anonymity dissolves identity altogether.

In digital systems, true anonymity is hard. Every connection leaves metadata — timing, IP addresses, traffic patterns — that can be correlated across observations. The tools developed to defend against this correlation are the core of the [[cypherpunk]] tradition: [[tor|Tor]] and other [[onion-routing|onion routers]] obscure the network path, [[mixnet|mixnets]] add timing noise, [[opsec|operational security]] disciplines the human behaviors that leak side-channel information. None of these tools provides anonymity as a property of the user; they provide it as a property of a carefully maintained process.

For the parallel society, anonymity is the precondition for honest speech and dissent in environments where identification carries consequences. It is what makes [[whistleblowing]], [[samizdat]]-style publishing, and unauthorized journalism possible against well-resourced adversaries. It is also genuinely dual-use — the same property that protects dissidents protects abuse — and the cypherpunk position has consistently been that the tradeoff favors the side with less power, since institutions already have many ways to act unobserved while individuals do not.
