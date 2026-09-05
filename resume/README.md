# Resume source

The website resume uses the Awesome CV LaTeX format supplied by Kudzaishe. Edit the section files under `resume/`, then compile from this directory:

```sh
xelatex resume.tex
xelatex resume.tex
cp resume.pdf ../public/kudzaishe-zharare-cv.pdf
```

The repository includes the required Roboto and Font Awesome font files so builds do not depend on system fonts. The Awesome CV class is based on the CC BY-SA 4.0 template by Claud D. Park.
