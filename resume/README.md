# Resume

`resume.tex` is the source of the public one-page resume. It uses XeLaTeX,
Bitstream Charter, black 11-point text, 0.55-inch margins, and 1.07 line spacing.
The name and contact links are centered. Personal location and nationality are omitted.

Build from the repository root:

```sh
cd resume
xelatex -halt-on-error -interaction=nonstopmode resume.tex
cp resume.pdf ../public/kudzaishe-zharare-cv.pdf
```

## Editorial rules

- Keep one page by selecting and shortening content, not shrinking type or margins
- Use action-and-result bullets of one or two lines, with no final periods or split words
- Use XYZ when a measured result exists; otherwise state the action, purpose, and evidenced outcome without inventing a metric
- Limit Skills to three capability groups; demonstrate leadership and coordination in experience
- Avoid vendor mappings, proprietary procedures, internal configurations, and unnecessary company implementation details
- Keep claims consistent with `src/data/experience.js` and `src/data/projects.js`
- Render and inspect the final PDF, then commit the source and public PDF together

## Accuracy

- Cleva's sub-minute decisions apply to eligible completed submissions; uncertain cases require manual review
- The million-user figure describes company scale supported by the infrastructure, not an automated approval count
- Poza remains in development; discovery interviews do not measure acquired customers, and sandbox work is not a production launch
- FlexID work covers credential wallets, selective disclosure, zero-knowledge proofs, encrypted credential handling, and engineering leadership; do not imply invention of cryptographic primitives
- Motapa's role dates are 2020 to 2021; subsequent payment integration support continued through 2022
- The World Bank engagement is a 2019 to 2020 SDC contract; retain the supplied abbreviation without an unverified expansion
- Private contracts, implementation notes, and merchant sign-off documents do not belong in this repository
