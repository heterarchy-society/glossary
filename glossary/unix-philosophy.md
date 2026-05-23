---
name: Unix Philosophy
type: concept
keywords:
  - do one thing well
related:
  - open-source
  - decentralization
resources:
  - title: Doug McIlroy's original summary (1978 Bell System Technical Journal)
    url: https://dl.acm.org/doi/10.1145/800009.808055
  - title: Wikipedia article "Unix philosophy"
    url: https://en.wikipedia.org/wiki/Unix_philosophy
---

The Unix Philosophy is a set of design principles for software articulated by Doug McIlroy and colleagues at Bell Labs in the late 1960s and codified in 1978. Its core rules: write programs that do one thing and do it well; write programs that work together; write programs that handle text streams, because that is a universal interface. The philosophy emerged from the practical experience of building Unix and reflects a preference for small, composable tools over monolithic systems.

In practice, the Unix Philosophy means programs are kept deliberately narrow in scope and expose simple interfaces — typically stdin, stdout, and exit codes — that allow them to be chained together in pipelines. The `grep`, `sort`, `awk`, and `sed` family of tools exemplifies this: each does one transformation, and complex tasks emerge from their composition rather than from any single program knowing everything. This composability is what makes Unix environments remain productive decades after their creation.

For builders of parallel structures and alternative systems, the Unix Philosophy is a working model of [[decentralization]] applied to software architecture. It demonstrates that powerful systems need not be controlled from a center — they can grow through the voluntary combination of independent, interoperable parts. The same logic underlies [[open-source]] ecosystems, modular [[cryptography]] libraries, and the layered architecture of the internet itself.
