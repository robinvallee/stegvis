# Stegvis

A health and fitness app that helps young adults build healthier habits through easy activity logging, personalized goals and daily challenges.

This repository contains the coded high-fidelity prototype, built with React and Vite. I designed and developed Stegvis on my own as part of the course *Project work: UX design*, from user research and ideation through prototyping and usability testing.

> The app's interface is in Swedish.

## Features

- **Home (Hem)** – daily streak, completed goals, today's goals and recent activities
- **Log activity (Logga)** – quick log for common activities, or pick from a longer list; enter time, distance (for walking, running, swimming and cycling) and how the session felt, followed by a confirmation screen
- **Statistics (Statistik)** – overview, breakdown by activity type and personal records, filterable by week, month and year
- **Social** – activity feed, group and personal challenges, and a friends list with streaks
- **Profile (Profil)** – user stats and earned medals
- **Activity details** – summary, statistics and new medals for a logged activity

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for navigation
- [Recharts](https://recharts.org/) for the breakdown chart
- [Lucide](https://lucide.dev/) icons
- Plain CSS with design tokens (color scales as CSS custom properties in `src/index.css`)

## Getting started

Requires [Node.js](https://nodejs.org/) 18 or later.

```bash
git clone https://github.com/robinvallee/stegvis.git
cd stegvis
npm install
npm run dev
```

Then open the local address Vite prints (usually http://localhost:5173). The layout is designed for a mobile viewport, so it looks best with your browser's device toolbar set to a phone size.

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the development server          |
| `npm run build`   | Build for production into `dist/`     |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint                            |

## Project structure

```
src/
├── pages/        # One component per screen (home, log, stats, social, profile, activity-details)
├── components/   # Reusable UI components, each with its own stylesheet
├── data/         # Mock data as JSON (activities, challenges, feed, friends, records)
├── assets/       # Logotype and images
├── App.jsx       # Routes and bottom navigation
└── index.css     # Design tokens and global styles
```

## Limitations

Stegvis is a prototype for demonstrating and testing the design, not a production app:

- All content comes from static JSON files and hard-coded values in `src/data/` and the page components.
- There is no backend or user accounts, and logged activities are not saved.
- The search field and some buttons are visual only.

## Author

**Robin Vallée** – UX design, UI design and front-end development
