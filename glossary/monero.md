---
name: Monero
type: cryptocurrency
year: 2014
keywords:
  - XMR
  - ring signatures
  - RingCT
related:
  - privacy-coins
  - cryptocurrency
  - fungibility
  - zero-knowledge-proof
  - bitcoin
  - cryptography
resources:
  - title: Wikipedia article "Monero"
    url: https://en.wikipedia.org/wiki/Monero
  - title: getmonero.org — official project site
    url: https://www.getmonero.org/
---

Monero is a [[cryptocurrency]] designed from the outset to make transaction graphs unreadable. Launched in April 2014 as a fork of Bytecoin's CryptoNote codebase, it has since become the most widely used [[privacy-coins|privacy coin]] and the closest existing approximation to digital cash in the strong sense: amounts, senders, and recipients are all obscured by default, not opt-in. Every Monero user gets the same privacy guarantees, which is exactly the property that makes the coin [[fungibility|fungible]] — no unit can be distinguished from any other by its history.

The privacy comes from a stack of cryptographic techniques layered on a standard [[proof-of-work]] blockchain. Ring signatures hide the true sender by mixing the spend with decoys; stealth addresses generate a one-time destination for each transaction so recipients are unlinkable; Ring Confidential Transactions (RingCT) hide amounts using Pedersen commitments while still allowing the network to verify that no money is created or destroyed. The combination yields a system in which the public ledger reveals that *some* transfer happened but very little about what.

Monero has occupied a particular position in the cypherpunk and parallel-society world: it is the cryptocurrency that the [[crypto-discourse|broader crypto discourse]] often disowns, but the one that most directly continues the original [[cryptoanarchy|cryptoanarchist]] project. Listings have been pulled from major exchanges in multiple jurisdictions on regulatory grounds, which the Monero community treats as evidence that the threat model is correct. The project remains volunteer-funded and pseudonymously developed, and continues to push the cryptographic state of the art — most recently with Bulletproofs and ongoing work on FCMP++ — in directions that the rest of the industry tends to follow.
