# Jonlee James R. Navio | Portfolio

Personal portfolio for an **Automation & AI Systems Specialist**. It shows potential clients the systems I build: CRM architecture, data pipelines, and AI-powered workflows that turn manual work into something that just runs.

**Live site:** https://jonleenavio.vercel.app

## What's on the site

- **About:** who I am, what I build, and a downloadable resume
- **Skills:** six capability areas ("Systems I Build"), a Systems Stack with tool logos, and a six-step "How I Work" process
- **Projects:** a coverflow gallery of seven builds, each with a detail view (screenshots, at-a-glance stats, tech stack)
- **Experience:** a timeline of roles, including AGAVA Pty Ltd | Get Scaled (current)
- **Awards & Trainings:** Employee of the Quarter (Q1 2026), HighLevel LIVE in Manila 2026, and the AI4AI webinar
- **Contact:** message form and a Google Calendar booking tab for a 30-minute intro call

## Featured projects

| Project | Tools |
| --- | --- |
| Meta Ads to Monday.com Data Pipeline | Make.com, Monday.com, Meta API, Google Sheets |
| Budget-Aware Expense Tracker | Make.com, Telegram, OpenAI, Google Sheets, Gmail |
| Oas Volleyball Alliance Messenger Assistant | Make.com, Messenger, Telegram, Meta API |
| RAG Support Chatbot with Source Citations & Human Handoff | n8n, Docker, Gemini, Supabase, Google Drive |
| AI Calendar Assistant with Memory | n8n, Telegram, Google Calendar, OpenAI |
| Messenger Food Order Assistant | n8n, Messenger, Telegram, Google Sheets, Meta API |
| Instant Lead Response & AI Qualification System | Zapier, HubSpot, Google Forms, Slack, Gmail |

## Built with

Plain HTML, CSS, and JavaScript, with no framework and no build step.

- Fonts: Space Grotesk, Poppins, IBM Plex Mono (Google Fonts)
- Dark mode by default, with a light/dark toggle that remembers your choice
- Responsive layout and reduced-motion support

## Project structure

```
Portfolio-Website/
├── index.html      # page structure and content
├── style.css       # design system, layout, themes
├── script.js       # gallery, project modal, theme toggle, tabs, slideshows
└── assets/
    ├── images/     # logos, portrait, certificates
    ├── projects/   # project screenshots
    └── resume/     # Navio_Resume.pdf
```

## Run locally

No install needed. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Updating content

- **Add a project:** add an entry to the `projects` array in `script.js`, add one line to `galleryItems`, and optionally add stats and captions in `projectExtras`.
- **Update the resume:** replace `assets/resume/Navio_Resume.pdf`. Both download buttons point to that path.
- **Image paths are case-sensitive** when deployed, so file names must match the code exactly.

## Deployment

Hosted on Vercel and connected to this repository, so every push to `main` redeploys automatically. No build command or output directory is needed.

## Contact

- Email: naviojonleejames@gmail.com
- LinkedIn: https://www.linkedin.com/in/jonlee-james-navio-31a5982b2/
- GitHub: https://github.com/JonleeJamesNavio
- Location: Oas, Albay, Philippines

&copy; 2026 Jonlee James R. Navio. All rights reserved.
