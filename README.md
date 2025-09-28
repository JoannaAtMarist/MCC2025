# Marist Computing Conference (MCC 2025) Website

This repository contains the website for the **Marist Computing Conference (MCC 2025)**, collocated with the **2nd Mid-Hudson Valley TechMeet**.  

- **Conference Date:** Friday, November 7, 2025  
- **Location:** Marist University, Poughkeepsie, NY  
- **Website:** [https://maristcomputingconf.org](#)   

---

## About the Site

This site is built with **[Eleventy (11ty)](https://www.11ty.dev/)**, a static site generator.  
It follows the **Marist University Brand Guidelines** (colors, typography, logo usage) and includes schedule, venue, registration, and call for papers.  

**Features:**
- Dynamic schedules powered by JSON (`schedule.json`)  
- Collocated events: MCC + Mid-Hudson Valley TechMeet  
- Keynote, program, venue, and registration pages  
- Mobile-friendly responsive layout  
- Accessible styles aligned with WCAG 2.0  

---

## Project Structure

```text
.
├── src/               # Site source files
│   ├── *.md           # Content pages (About, Program, Keynote, etc.)
│   ├── _data/         # JSON data (schedule.json, site.json, links.json)
│   └── layouts/       # Base templates (base.njk, includes)
├── styles/            # CSS (branding.css, layout.css, sections.css)
├── assets/            # Logos, images
└── .eleventy.js       # Eleventy config
```

---

## Development

To run the site locally:

```bash
npm install
npx @11ty/eleventy --serve
```

Site will be available at `http://localhost:8080/`.

---

## Contact

For questions about the conference:  
📩 [MaristComputingConf@marist.edu](mailto:MaristComputingConf@marist.edu)

---

## Credits & Sponsorship

This site is maintained by Marist College faculty, staff, and students.  
Sponsored by industry and academic partners including ACM, ECC, IBM, IEEE, New Era Technologies, Sentricus, and more.  

---

## License

© 2025 Marist University.  
This repository is for conference communications only. Please do not repurpose without permission.
