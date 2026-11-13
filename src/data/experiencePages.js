// One page per organization, opened from the Experience tab at /experience/<slug>.
// Everything below is placeholder text: replace it, add images, add or remove sections.
//
// Images: drop files in public/media/experience/<slug>/, run `npm run thumbs`,
// then set `image.src` to "/media/experience/<slug>/<file>.jpg". Without a `src`
// the page shows a placeholder box.
//
// Section fields (all optional except heading): id, heading, text[], image, stats[]

export const experiencePages = [
  {
    slug: "sons-of-caesar",
    title: "Sons of Caesar",
    roles: [["Full Stack Developer (Founder)", "Mar 2026 – Present"]],
    links: [["sonsofcaesar.xyz", "https://sonsofcaesar.xyz"]],
    summary:
      "I run Sons of Caesar, a party brand in Windsor, and I built the platform behind it: the website, ticketing, payments, door check-in and a support chatbot.",
    sections: [
      {
        heading: "why I started it",
        text: [
          "Sons of Caesar started as a clothing brand in Lagos. When I moved to Windsor, the city felt boring. People wanted to party, but nobody was taking the initiative to host. So I did. We've thrown three house parties and one collab event with a club (Blanche).",
          "Selling tickets through DMs and e-transfers didn't scale, so I built our own system.",
        ],
      },
      {
        heading: "how it fits together",
        text: [
          "The website is built with React and TypeScript and hosted on Vercel. It talks to a Python and FastAPI backend on Railway, with PostgreSQL for events, orders and tickets. Stripe handles payments, Resend sends ticket emails with QR codes, and the database is backed up to Cloudflare R2.",
        ],
        image: {
          src: "/media/experience/sons-of-caesar/system-diagram.svg",
          w: 720,
          h: 860,
          caption: "system diagram",
        },
      },
      {
        heading: "tickets and payments",
        text: [
          "Buyers pay through Stripe Checkout. When a payment goes through, Stripe sends a webhook to the backend, which creates the tickets and emails each one with a QR code. At the door, staff scan the codes with a scanner I built into the site, and each code only works once.",
          "The admin dashboard shows sales per day, tiers, check-ins and attendees as they happen. I added a screenshot mode that hides revenue and personal details, which is how I can show it here. NIGHTMARE, our Halloween party, sold out at 150 tickets from 112 orders, with most sales coming in the final days.",
        ],
        image: {
          src: "/media/experience/sons-of-caesar/admin-dashboard.png",
          caption: "admin dashboard (revenue hidden)",
        },
      },
      {
        heading: "the gallery",
        text: [
          "Camera photos are about 1 MB each, which made the gallery slow on phones. I wrote a script that turns each photo into an 800px thumbnail for the grid and a 2000px version that only loads when someone opens it, both in WebP, and uploads them to R2. For NIGHTMARE, the grid loads 0.7 MB instead of 29.6 MB, which is 97.7% less, with a colour placeholder showing while each photo loads.",
        ],
        image: {
          src: "/media/experience/sons-of-caesar/gallery-savings.svg",
          w: 720,
          h: 560,
          caption: "gallery savings",
        },
      },
      {
        heading: "the chatbot",
        text: [
          "I added a support chatbot to answer the questions people kept DMing us: refunds, re-entry, transfers and where their tickets are.",
          "It uses retrieval-augmented generation. I wrote our policies as docs, split them into pieces and turned each piece into an embedding with Voyage AI, stored in Postgres with pgvector. When someone asks a question, the closest pieces are retrieved and Claude answers from them. Claude can also call tools to look up events, check an order and resend tickets.",
          "Anything involving someone's order is checked in code, not left to the AI, so it can't be talked into showing someone else's details. It also has rate limits and a daily spend cap.",
        ],
        image: {
          src: "/media/experience/sons-of-caesar/chatbot.png",
          maxWidth: 364,
          caption: "chatbot screenshot",
        },
      },
      {
        heading: "testing it",
        text: [
          "To check it, I wrote 38 test cases, including prompt-injection and data-leak attempts. The first runs caught the agent making up policy that wasn't in our docs. I changed its instructions and reran the suite three times: 114 of 114 passed, with no data leaks. The cases are my own, so they show the known cases pass, not how it handles every real question.",
        ],
        image: {
          src: "/media/experience/sons-of-caesar/eval-results.svg",
          w: 720,
          h: 560,
          caption: "eval results",
        },
      },
      {
        heading: "results",
        stats: [
          { value: "4", label: "events" },
          { value: "700", label: "attendees" },
          { value: "150", label: "tickets sold on our own platform" },
        ],
        image: {
          src: "/media/experience/sons-of-caesar/event-photo-covered-eyes.png",
          caption: "NIGHTMARE, our Halloween party",
        },
      },
      {
        heading: "what I learned",
        text: [
          "Running Sons of Caesar taught me what it takes to scale a business: creating hype, planning for what can go wrong, and keeping real customers happy.",
        ],
      },
    ],
  },
  {
    slug: "greenshield",
    title: "GreenShield",
    roles: [
      ["Software Developer Co-op", "Jan 2026 – Apr 2026"],
      ["Contact Center Co-op", "May 2026 – Aug 2026"],
    ],
    summary:
      "Placeholder: one sentence on your two co-op terms at GreenShield.",
    sections: [
      {
        id: "developer",
        heading: "software developer co-op",
        text: [
          "Placeholder: what you built, the tools you used and what changed because of it.",
        ],
        image: { caption: "screenshot (blur or fake any real data)" },
      },
      {
        id: "contact-center",
        heading: "contact center co-op",
        text: [
          "Placeholder: what the role taught you, and the dashboard you built.",
        ],
        image: { caption: "the dashboard (fake data only)" },
      },
      {
        heading: "what I learned",
        text: ["Placeholder: one or two lines."],
      },
    ],
  },
  {
    slug: "colorstack-uwindsor",
    title: "ColorStack UWindsor",
    roles: [["President", "Aug 2026 – Present"]],
    links: [["instagram", "https://www.instagram.com/colorstackuwin/"]],
    summary: "Placeholder: one sentence on what the chapter is.",
    sections: [
      {
        heading: "why I started it",
        text: ["Placeholder: the story."],
        image: { caption: "photo from a meeting or event" },
      },
      {
        heading: "what we do",
        text: ["Placeholder: events, programs and who it's for."],
      },
      {
        heading: "by the numbers",
        stats: [
          { value: "—", label: "members" },
          { value: "—", label: "events" },
        ],
      },
    ],
  },
  {
    slug: "bscs",
    title: "Black Students in Computer Science",
    roles: [["Co-Founder & Co-President", "Oct 2025 – Present"]],
    links: [["instagram", "https://www.instagram.com/uwinbscs/"]],
    summary: "Placeholder: one sentence on what BSCS is.",
    sections: [
      {
        heading: "why we started it",
        text: ["Placeholder: the story."],
        image: { caption: "photo from an event" },
      },
      {
        heading: "what we do",
        text: ["Placeholder: events, programs and who it's for."],
      },
      {
        heading: "by the numbers",
        stats: [
          { value: "—", label: "members" },
          { value: "—", label: "events" },
        ],
      },
    ],
  },
];
