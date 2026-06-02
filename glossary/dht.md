---
name: Distributed Hash Table
type: protocol
year: 2001
keywords:
  - DHT
  - distributed hash table
  - Kademlia
related:
  - p2p
  - bittorrent
  - ipfs
  - decentralization
  - censorship-resistance
resources:
  - title: Wikipedia article "Distributed hash table"
    url: https://en.wikipedia.org/wiki/Distributed_hash_table
  - title: 'Kademlia: A Peer-to-peer Information System Based on the XOR Metric'
    url: https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf
---

A distributed hash table (DHT) is a lookup system that spreads a key–value store across a network of nodes with no central index. Each node holds a slice of the table and knows how to route a request for any key toward the node responsible for it, so that any participant can find the value for a key by asking a handful of peers rather than a server. The result is a shared address book that no one owns and that survives nodes joining and leaving at will.

The core idea arrived in 2001 with four near-simultaneous designs — Chord, CAN, Pastry, and Tapestry — and was refined by Kademlia, whose XOR-based distance metric underpins the [[bittorrent|BitTorrent]] mainline DHT and much of [[ipfs|IPFS]]. Keys and node identifiers live in the same hash space; a node stores the keys closest to its own ID, and lookups proceed in logarithmic hops by repeatedly querying peers nearer to the target. Routing tables stay small, and the structure self-heals as membership churns.

A DHT is the quiet machinery beneath much of [[decentralization|decentralisation]]: the part that lets a swarm find each other without a tracker, a directory, or a name server to seize. That same openness is its tension — public DHTs leak who is asking for what, and [[sybil-attack|Sybil attacks]] let an adversary flood the keyspace with fake nodes to eclipse or surveil a target. The history of [[p2p|peer-to-peer]] systems is partly the history of hardening these tables against the people who would rather they had a single switch to flip off.
