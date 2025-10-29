# Astylab Library — Static Site Starter
A lightweight, no-build static website to publish your research by SDGs.

## Structure
- `index.html` — Home
- `sdgs.html` — Browse SDGs
- `insights.html` — Insights (cards)
- `data.html` — Data Sources (table)
- `about.html` — About page
- `assets/styles.css` — Styling

## Edit
Open the HTML files in any editor and replace placeholder items with your content.

## Deploy
### Option A — Netlify (drag & drop)
1. Go to https://app.netlify.com/drop
2. Drag the `astylab-library-site` folder into the window
3. Done. Add a custom domain in Netlify settings (optional).

### Option B — GitHub Pages
1. Create a new repo (e.g., `astylab-library`)
2. Upload all files
3. In repo Settings → Pages → set **Branch: main / root**
4. Your site goes live at `https://<username>.github.io/astylab-library/`

### Option C — Vercel
1. Import the repo in https://vercel.com/new
2. Framework preset: **Other**
3. Build output directory: `/` (root)
4. Deploy.

## Custom Domain
Point your domain to your host:
- Netlify: set A/ALIAS or CNAME as instructed by Netlify
- GitHub Pages: add a `CNAME` file with your domain
- Vercel: add your domain in project settings

## Optional: Contact Form
Use a form backend like Formspree:
<form action="https://formspree.io/f/yourFormId" method="POST">
  <input type="email" name="email" placeholder="Email" required />
  <textarea name="message" placeholder="Message" required></textarea>
  <button type="submit">Send</button>
</form>

---
Made for fast publishing. Upgrade later to a CMS or Notion-backed site when you’re ready.
