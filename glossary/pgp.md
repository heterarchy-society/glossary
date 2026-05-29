---
name: PGP
type: technology
year: 1991
keywords:
  - Pretty Good Privacy
  - OpenPGP
  - GPG
  - GnuPG
related:
  - encryption
  - public-key-cryptography
  - web-of-trust
  - cypherpunk
  - crypto-wars
  - digital-signature
resources:
  - title: Wikipedia article "Pretty Good Privacy"
    url: https://en.wikipedia.org/wiki/Pretty_Good_Privacy
  - title: OpenPGP specification
    url: https://www.openpgp.org/
---

PGP (Pretty Good Privacy) is the encryption and signing tool written by Phil Zimmermann in 1991 that put strong [[public-key-cryptography|public-key cryptography]] in the hands of ordinary users for the first time. Zimmermann released it free of charge in response to a proposed U.S. Senate bill that would have required communications providers to give the government access to plaintext. The program quickly spread internationally through bulletin boards and FTP mirrors — which made it, in the eyes of the U.S. government, an illegal export of munitions, since strong cryptography fell under the same restrictions as weapons technology.

The legal aftermath defined the [[crypto-wars]]. Zimmermann was the target of a three-year federal criminal investigation that was dropped without charges in 1996. The export-control framework that produced the case was substantially dismantled in the late 1990s, in part because the source code had already been printed in book form and exported legally as protected speech. The standoff established two ideas that the [[cypherpunk]] movement would build on for decades: that publishing cryptography is publishing speech, and that once a cryptosystem is in the wild it cannot be put back.

Technically, PGP combines symmetric encryption for the message body with asymmetric encryption for key exchange, and uses [[digital-signature|digital signatures]] for authenticity. Its trust model is the [[web-of-trust]] — keys are vouched for by other keys, not by a central authority — which has aged into a niche choice but remains the canonical example of a non-hierarchical PKI. The protocol lives on in the OpenPGP standard, implemented most prominently by GnuPG (GPG), and continues to underpin signed Linux package distributions, journalist-source contact ([[secure-communication|secure communication]] via tools like SecureDrop), and the slow correspondence of the [[cypherpunk]] diaspora.
