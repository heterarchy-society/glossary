---
name: IPFS
type: protocol
year: 2015
keywords:
  - InterPlanetary File System
  - content-addressed storage
related:
  - p2p
  - decentralization
  - censorship-resistance
  - dapps
  - digital-commons
resources:
  - title: Wikipedia article "InterPlanetary File System"
    url: https://en.wikipedia.org/wiki/InterPlanetary_File_System
  - title: IPFS specification
    url: https://specs.ipfs.tech/
---

IPFS (InterPlanetary File System) is a [[p2p|peer-to-peer]] protocol for storing and retrieving content by its cryptographic hash rather than by its location. Designed by [Juan Benet](people:juan-benet) and first released in 2015, it replaces location-addressing (the URL that says *where* a file lives) with content-addressing (a hash that says *what* a file is). Any node that has the bytes corresponding to a given hash can serve them; any client that knows the hash can verify it received the correct bytes. The location of any particular copy ceases to matter.

The shift from location to content changes what is possible. Files become inherently de-duplicated and tamper-evident, since the hash uniquely fixes the bytes. Distribution becomes inherently parallel — many nodes can serve the same content without coordination. Archival becomes inherently durable — as long as one node has the content, the network has it. IPFS adds a discovery layer (a distributed hash table) so that clients can find nodes holding a desired hash, and a publication layer (IPNS, signatures, naming systems) for mutable references.

For the parallel society, IPFS is one of the key infrastructure pieces under the [[digital-commons|digital commons]]. It backs much of the storage for [[nft|NFT]] metadata, decentralised application frontends, and various [[shadow-library|archival]] projects. Its limitations are real — incentivising long-term pinning is hard, and content the network does not care about does fall off — and Filecoin, Arweave, and similar systems attempt to address them. But the underlying architectural move (content as identity, location as incidental) is one of the more durable ideas in [[decentralization|decentralisation]] and is reproduced in protocols across the [[web3|Web3]] stack.
