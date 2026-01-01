# ShareMe — Photo Sharing Showcase

ShareMe is a photo-sharing platform built as a polished portfolio project to demonstrate end-to-end web development skills. It combines a React frontend with a Sanity CMS-powered backend to provide a snappy, image-first experience for browsing, creating, and interacting with pins.

![ShareMe screenshot](https://github.com/user-attachments/assets/d55cdba0-19ec-46fd-87be-04caf5c990f9)

**Live demo:** https://sharemeconnect.netlify.app

**Highlights**
- Image upload and optimized delivery via Sanity
- Browse, search, and detail views for pins
- User profile, create/save pin flows, and commenting
- Responsive, Masonry-style grid layout

**Tech stack**
- Frontend: React, react-router, Tailwind CSS
- Backend / CMS: Sanity (content schema in `shareme_backend/schemaTypes`)
- Utilities: `react-icons`, `react-masonry-css`, `uuid`, `jwt-decode`

Getting started
---------------

Prerequisites
- Node.js (LTS) and npm

Backend (Sanity)
1. Open a terminal and change into the backend folder:

```bash
cd shareme_backend
```
2. Install deps and run the Sanity studio locally:

```bash
npm install
npm run dev
```

Available scripts (backend): `dev` (sanity dev), `start`, `build`, `deploy`.

Frontend
1. In a new terminal, change into the frontend folder:

```bash
cd shareme_frontend
```
2. Install deps and start the app:

```bash
npm install
npm start
```

Available scripts (frontend): `start`, `build`, `test`, `eject`.

Environment
- The frontend expects Sanity project configuration (client dataset/projectId) in `shareme_frontend/client.js` or via environment variables used by that file. Check `shareme_backend/sanity.config.js` for project details.

Project structure (key folders)
- `shareme_frontend/src` — React app source (components, containers, utils)
- `shareme_backend` — Sanity studio and schema definitions (`schemaTypes`)

Notes for reviewers
- This project is intended as a showcase of full-stack capabilities: frontend UX, CMS-driven content model, and integration between the two. Explore the Sanity studio to see how content (pins, users, comments) is modeled and try creating sample pins to view them in the frontend.


