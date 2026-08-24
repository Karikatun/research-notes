---
id: raster-generation-with-acceptance
entity: practice
decision: limited-use
evidence: tried
primary_direction: ui-browser-validation
tools: [imagegen]
review_state: current
---

# Generate raster assets with explicit acceptance

## Desired outcome

Use generation only when a new bitmap is needed and accept the visual result separately.

## When to apply

When the product needs a new raster asset, illustration, texture, or visual option that code or SVG cannot represent well.

## How to apply

1. Freeze the purpose, composition, dimensions, format, transparency, allowed
   file weight, style, placement context, forbidden content, and rights
   acceptance criteria.
2. Confirm that a new bitmap is needed rather than a change to an existing SVG,
   icon system, exact diagram, or code-native visual; verify rights for every
   reference.
3. Generate a bounded number of variants outside the product, and retain the
   generation parameters and safe result identifiers.
4. Inspect every variant at full size and in its real crop or container:
   composition, artifacts, legibility, background, transparency, color profile,
   dimensions, and format.
5. Submit the variants for separate visual and rights acceptance. Generation and
   technical validity do not authorize integrating the asset.
6. After explicit selection, add only the accepted variant, safely optimize the
   file, and verify it in the rendered desktop and mobile interface. Unapproved
   variants do not become product source material.

## Success criterion

The asset satisfies the task, usage rights, and technical format.

## Limitations

Do not use for an existing SVG, icon system, or exact diagram; generation requires visual and rights acceptance.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
