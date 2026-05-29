---
name: Trustless
type: concept
keywords:
  - trust minimization
  - trust-minimized
  - don't trust verify
related:
  - cryptography
  - public-key-cryptography
  - zero-knowledge-proof
  - byzantine-generals-problem
  - permissionless
resources:
  - title: Wikipedia article "Trustless"
    url: https://en.wikipedia.org/wiki/Trustless
---

"Trustless" is the slightly misleading term of art for systems whose correctness does not depend on trusting any particular party. A more accurate name is *trust-minimised*: every system has some trust assumptions baked in (the math is correct, the hardware is honest, the software does what it claims), but trust-minimised systems reduce those assumptions to as small and verifiable a set as possible.

The slogan "don't trust, verify" captures the discipline — wherever a fact can be checked independently, do not take it on someone's word. The technique is cryptographic. A [[digital-signature|digital signature]] makes authorship verifiable without trusting the messenger. A [[blockchain]] makes transaction history verifiable without trusting an intermediary. A [[zero-knowledge-proof|zero-knowledge proof]] makes a computation's correctness verifiable without trusting the prover or seeing the inputs. A reproducible build makes the relationship between source and binary verifiable without trusting the compiler operator.

Trust-minimisation is the mechanism by which the [[cypherpunk]] vision becomes operational. [[bitcoin|Bitcoin]] solved the Byzantine Generals Problem for money, replacing trusted issuers with [[proof-of-work]]. [[tor|Tor]] minimises trust in any single relay by routing through several. Open-source software minimises trust in vendors by exposing the source. These are not techniques that eliminate trust — every choice still rests on some assumption — but they make the residual trust legible, narrow, and largely substitutable. That property is what makes [[permissionless]] infrastructure usable between strangers.
