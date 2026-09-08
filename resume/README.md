# Résumé

`resume.tex` is the source of the public, one-page résumé. It uses XeLaTeX,
Nimbus Sans, black text, an 11-point body, a single column, and A4 paper.

Build and publish the matching PDF from the repository root:

```sh
cd resume
xelatex -halt-on-error -interaction=nonstopmode resume.tex
cp resume.pdf ../public/kudzaishe-zharare-cv.pdf
```

Keep the PDF to one page by selecting relevant achievements for the target job.
Keep fuller project descriptions on the website. Do not shrink the font or
margins to accommodate more bullets. Review the rendered page and extracted
text after editing, and commit the source and public PDF together.

Content distinctions to preserve:

- Cleva's sub-minute decision time applies to eligible completed submissions.
  Other cases still require manual review. A million users describes company
  scale supported by the infrastructure, not a measured auto-approval count.
- The CBZ figure of 200 is contracted programme scope, not a verified delivery
  total. Selected organisation names represent work delivered by the team
  through Motapa and CBZ, not direct employment or endorsement.
- Motapa's existing role dates are retained; the bullets separately identify
  support continuing through 2022 and subsequent integration work.
- Poza is under active development. Do not describe planned features as a
  launched service or add unsupported usage metrics.

Private contracts and merchant sign-off documents are not part of this repository.
