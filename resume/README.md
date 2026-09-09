# Résumé

`resume.tex` is the source of the public, one-page résumé. It uses XeLaTeX,
Bitstream Charter, black text, an 11-point body, a single column, and A4 paper.
The name and contact links are centered; personal location and nationality are omitted.

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

- Skills lead with full-stack engineering, with mobile, infrastructure, data,
  project management, and leadership grouped separately. Keep broader skills
  and evidence on the About page. Linux refers to development environments;
  do not infer kernel, network, or specialist systems administration expertise.
- Project management and communication are supported by discovery, delivery
  coordination, team leadership, stakeholder liaison, and training. Do not
  imply a project-management certification or a separate employment title.
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
- Poza's 56 interviews are discovery activity, not customer acquisition. Its
  custom document-verification pipeline uses existing OCR engines and AWS
  Rekognition, not custom-trained OCR or liveness models. Alpaca work is in
  sandbox; merged wallet code does not establish a production launch.

Private contracts and merchant sign-off documents are not part of this repository.
