---
name: Self-Custody
type: practice
keywords:
  - not your keys not your coins
  - NYKNYC
  - self-custodial
  - hardware wallet
related:
  - self-sovereignty
  - bitcoin
  - public-key-cryptography
  - opsec
  - lightning-network
resources:
  - title: Wikipedia article "Cryptocurrency wallet"
    url: https://en.wikipedia.org/wiki/Cryptocurrency_wallet
  - title: "Not Your Keys, Not Your Coins — Andreas Antonopoulos"
    url: https://aantonop.com/
---

Self-custody is the practice of holding the private keys to one's own digital assets directly, rather than delegating that responsibility to a custodian — an exchange, a bank, or any other third party. A balance on an exchange is not the user's bitcoin but a claim against the exchange's reserves, redeemable at the exchange's discretion; a balance in a wallet whose seed only the user knows is the bitcoin itself.

The slogan "not your keys, not your coins" compresses the argument. The technical substrate is [[public-key-cryptography|public-key cryptography]]: a self-custodied wallet generates a key pair locally, the public key is broadcast as an address, the private key never leaves the device that holds it. Tooling has matured through several generations — paper wallets, then hardware signing devices (Trezor, Coldcard, Ledger) that keep the private key in a sealed environment, then multisignature schemes that split signing authority across devices or people — each trading a different point on the curve between operational simplicity and the size of threat model the user can credibly defend against.

Self-custody is the load-bearing primitive of the parallel-society economy. It is what makes [[bitcoin]] structurally different from PayPal or a bank account, what makes [[lightning-network|Lightning]] payments work without an issuer, and what makes [[censorship-resistance|censorship-resistant]] payments possible at all. It also imposes a discipline that the legacy financial system does not — backups, [[opsec]], inheritance planning — and the persistent UX gap between custodial and self-custodial holdings is the largest single obstacle to the wider [[cypherpunk]] monetary vision scaling to ordinary users.
