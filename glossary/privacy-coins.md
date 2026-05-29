---
name: Privacy Coins
type: concept
keywords:
  - privacy cryptocurrency
  - confidential transactions
related:
  - monero
  - cryptocurrency
  - fungibility
  - privacy
  - anonymity
  - zero-knowledge-proof
resources:
  - title: Wikipedia article "Privacy coin"
    url: https://en.wikipedia.org/wiki/Privacy_coin
---

Privacy coins are [[cryptocurrency|cryptocurrencies]] designed so that transaction details — amounts, senders, recipients, or all three — are concealed from the public ledger by cryptographic construction rather than by convention. They are the answer to a problem [[bitcoin|Bitcoin]] never claimed to solve: Bitcoin is pseudonymous, not private, and the entire history of every address is permanently public. Once an address is linked to a person, every transaction it has ever made becomes traceable. Privacy coins close that link by default.

The category includes several distinct technical lineages. [[monero|Monero]] uses ring signatures and stealth addresses to make every transaction part of an anonymity set. Zcash uses [[zero-knowledge-proof|zk-SNARKs]] to allow fully shielded transactions in which only validity is proven, not contents. Dash uses CoinJoin-style mixing. Each represents a different point in the trade-space between trust assumptions, performance, regulatory exposure, and the size of the anonymity set.

For [[fungibility]] — the property that every unit of a currency is interchangeable with every other — privacy is not optional. A coin whose history can be inspected can be selectively refused, blacklisted, or priced lower than a "clean" coin, breaking fungibility and turning what looks like a single currency into many. Privacy coins are the response: by removing the publicly observable history, they restore the property that physical cash has always had. This is also why privacy coins occupy the most contested regulatory position in the [[cryptocurrency]] space — they are the cypherpunk thesis applied to money with no compromises, and the institutions whose business model depends on transaction surveillance have responded accordingly.
