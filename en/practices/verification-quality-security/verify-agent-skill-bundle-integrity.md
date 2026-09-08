---
id: verify-agent-skill-bundle-integrity
entity: practice
decision: limited-use
evidence: verified
primary_direction: verification-quality-security
related_directions: [agent-coordination-automation]
tools: [project-skill-bundle-verifier]
review_state: current
---

# Verify project-skill bundle integrity before use

## Desired outcome

Prevent a coding agent from silently applying a changed or unreviewed local
skill.

## When to apply

When a repository stores executable project skills together with scripts,
references, tests, and resources, and a reviewed bundle version can be pinned
in a versioned manifest. This practice complements content and authority review
but does not replace either one.

## How to apply

1. Define the complete contents of every skill bundle and a separate manifest
   of reviewed digests. Include instructions, scripts, tests, references, and
   resources rather than only the main file.
2. Compute the digest deterministically from canonically sorted paths and
   content. Reject unpinned bundles, symlinks, special files, path escapes, and
   predefined limit violations.
3. Run the preflight before reading and applying a project skill. Stop on a
   mismatch: do not run the bundle or refresh the manifest automatically.
4. For an approved update, review the full bundle diff and its tests, then
   change the bundle and digest together. Repeat the preflight against the exact
   prepared state.
5. Add the same check to the local gate, hook, and CI where available. Retain
   separately which boundaries actually block execution or publication.
6. Review provenance, instructions, dependencies, permissions, and sandboxing
   separately. An integrity manifest proves a byte-for-byte match to the
   reviewed state, not bundle safety or authorship.

## Success criterion

An unchanged reviewed bundle passes the preflight, while adding, removing,
replacing, or symlink-substituting any file blocks use. After approved review,
the updated bundle is accepted only with its exact new digest.

## Alternatives and limitations

Alternatives are manual review of the full diff before every use, a signed
upstream package, a provenance lockfile, or isolation in the agent harness. A
local manifest does not prove authorship, restrict skill permissions, or protect
against coordinated replacement of the gate and manifest inside one trust
boundary. It also does not prevent concurrent mutation between checking and
execution or cover global skills, plugins, and transitive dependencies.
Refreshing the digest without review destroys the signal and turns the process
into a ritual.

## Revisit

Re-evaluate when the skill loader, trust boundary, manifest format, or bundle
contents change, signatures become available, or a check-to-use bypass is
found.
