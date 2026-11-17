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
      "Two co-op terms at GreenShield: first as a software developer on providerConnect, then on the phones in the contact center.",
    sections: [
      {
        id: "developer",
        heading: "software developer co-op",
        text: [
          "I worked on providerConnect, the web portal GreenShield and several other insurers offer to health care providers. Providers use it to check payments and statements, submit claims, get dental breakdowns etc. There are two sites, one for dental providers and one for every other kind of provider, on separate codebases. I worked on both, and a change to one meant making it on the other too, so every change was done twice.",
          "I built with C#, ASP.NET and SQL, mostly on the UI. I also helped with about five support tickets.",
        ],
        image: {
          src: "/media/experience/greenshield/providerconnect-home.png",
          caption: "providerConnect's public home page",
        },
      },
      {
        heading: "the dynamic form",
        text: [
          'My main project was the "send a form or document" feature. It started as one long form that showed every field at once, and it gave an error if you filled in two fields that contradicted each other.',
          "I rebuilt it so that picking what you're sending shows only the fields that make sense for it. Fields that conflict never appear together, so there is no error to give.",
          "I also added an invisible reCAPTCHA to the site, which the company later rolled back after some of its larger clients objected.",
        ],
        image: {
          src: "/media/experience/greenshield/dynamic-form.svg",
          w: 720,
          h: 400,
          caption: "the form before and after (simplified)",
        },
      },
      {
        id: "contact-center",
        heading: "contact center co-op",
        text: [
          "I took calls from plan members and providers for GreenShield and its partner clients. Members called about claims and coverage. Providers mostly called about the portal and claim submissions. When I couldn't resolve something, I put the caller on hold and called a coordinator. After each call I picked the reason from a dropdown of about 30 options.",
          "The dropdown tells you what a call was about, but not how the caller felt or how hard it was to sort out. ClearCall is my attempt at that second part.",
        ],
      },
      {
        heading: "the dashboard",
        text: [
          "I built it with Python and FastAPI on the backend and React with Recharts on the frontend. It runs on 1,000 mock call records I generated, each with the fields I filled in on real calls (caller type, client, reason, duration, escalated or not, province, outcome) plus a transcript. There are five views: overview, by call reason, by client, by province and transcript insights.",
        ],
        image: {
          src: "/media/experience/greenshield/clearcall-by-call-reason.png",
          caption: "ClearCall, by call reason (mock data)",
        },
      },
      {
        heading: "mock data, real pipeline",
        text: [
          "The data is mock, and I weighted it so a few patterns I'd seen on the phones show up. The charts show what I built in, not findings about GreenShield. The point was the pipeline and the views.",
        ],
        image: {
          src: "/media/experience/greenshield/clearcall-by-client.png",
          caption: "ClearCall, by client (mock data)",
        },
      },
      {
        heading: "scoring the transcripts with Claude",
        text: [
          "A script sends each transcript to Claude and asks for three things back as JSON: a sentiment score from -1 to 1, a complexity score from 0 to 10 and an escalation-risk flag (low, medium or high). It checks each reply, retries on errors and saves after every call, so a stopped run picks up where it left off. The scores feed the Transcript Insights page: sentiment by month, the risk breakdown and a list of high-risk calls.",
          "The transcripts are templated, so they're more uniform than real calls. I haven't checked Claude's scores against human ratings, so treat them as a demo of the pipeline.",
        ],
        image: {
          src: "/media/experience/greenshield/clearcall-transcript-insights.png",
          caption: "ClearCall, transcript insights (mock data)",
        },
      },
      {
        heading: "what I learned",
        text: [
          "On the phones I saw what call data leaves out. Building ClearCall showed me that the hard part of analytics is deciding what to measure.",
          "As a developer I learned how software gets made in production: sprint branches, Azure DevOps, and requirements that come from the business.",
        ],
      },
    ],
  },
  {
    slug: "colorstack-uwindsor",
    title: "ColorStack UWindsor",
    roles: [["President", "Aug 2026 – Present"]],
    links: [["instagram", "https://www.instagram.com/colorstackuwin/"]],
    summary:
      "I started the UWindsor chapter of ColorStack, a national community for Black and Latinx students in computer science, and I'm its president.",
    sections: [
      {
        heading: "what is ColorStack",
        text: [
          "ColorStack is a nonprofit community for Black and Latinx students in computer science. Members across the US and Canada talk to each other and trade advice in a national Slack, which also has job and internship referrals. There's an annual summit and programs for members, and some companies are direct partners with ColorStack.",
          "For me, the community is the most important part: a national network of students, and the opportunities that come with it.",
        ],
      },
      {
        heading: "starting the UWindsor chapter",
        text: [
          "There was no ColorStack at UWindsor before, so I started the chapter. It's the second in Canada, after the University of Alberta, and the only one in Ontario. I became president in August 2026.",
          "ColorStack and BSCS are similar, but BSCS is focused on building community, while ColorStack is focused on how to get internships.",
        ],
        image: {
          src: "/media/experience/colorstack-uwindsor/work-session.jpg",
          caption: "resume review with the co-op office, the hands-on part after the presentation",
        },
      },
      {
        heading: "what we do",
        text: [
          "We meet about once a month. So far we've run two sessions: LeetCode and Chill, a practice session for coding interviews, and a resume review with the co-op office.",
        ],
        image: {
          src: "/media/experience/colorstack-uwindsor/whiteboard-session.jpg",
          caption: "LeetCode and Chill",
        },
      },
      {
        heading: "by the numbers",
        stats: [
          { value: "40", label: "members" },
          { value: "2", label: "sessions so far" },
        ],
      },
      {
        heading: "what I learned",
        text: [
          "Starting the chapter showed me that I don't have to wait for a space to exist. If I want to connect students at my school to a national community, I can just do it.",
        ],
      },
    ],
  },
  {
    slug: "bscs",
    title: "Black Students in Computer Science",
    roles: [["Co-Founder & Co-President", "Oct 2025 – Present"]],
    links: [["instagram", "https://www.instagram.com/uwinbscs/"]],
    summary:
      "I co-founded Black Students in Computer Science at the University of Windsor, a club that connects Black students in tech to community and careers.",
    sections: [
      {
        heading: "why we started it",
        text: [
          "I was part of NSBE, and I noticed there was no similar space for Black students in computer science. We saw each other in classes, but we didn't know each other. There was no connection and no community, so I started filling that gap with my co-founders.",
          "We began in October 2025 and are now a ratified club at UWindsor.",
        ],
        image: {
          src: "/media/experience/bscs/involvement-fair.jpg",
          caption:
            "our table at the involvement fair, next to the Google Developer Group",
        },
      },
      {
        heading: "what we do",
        text: [
          "Our mission is to connect Black students in tech to careers, and to make the community fun along the way. In about a year we've run around 15 events, from board game hangouts to career panels.",
        ],
        image: {
          src: "/media/experience/bscs/hangout.jpg",
          caption: "board game hangout",
        },
      },
      {
        heading: "career events",
        text: [
          "Our biggest event was a career night in collaboration with NSBE, with more than 150 attendees, speakers, and plenty of networking and activities.",
          "Last semester I also led our own career event, with five speakers from different parts of tech.",
        ],
        image: {
          src: "/media/experience/bscs/career-event.jpg",
          caption: "our career event, with five speakers",
        },
      },
      {
        heading: "trivia night",
        text: [
          "Not everything is career-focused. Trivia night was a quiz show, hosted by our very own Steve Harvey (Nifemi).",
        ],
        image: {
          src: "/media/experience/bscs/games-night.jpg",
          caption: "trivia night",
        },
      },
      {
        heading: "the exec team",
        text: [
          "As co-president, I oversee everything: finances, events and where the club goes next. I host meetings, and I act as a bridge between the club and other groups, like ColorStack, RAEON and the co-op office. My co-president does the same.",
          "We're an exec team of about 12, including a vice president, heads of events, technology and marketing, a treasurer, a secretary and a few junior roles. We start each semester with an exec dinner.",
        ],
        image: {
          src: "/media/experience/bscs/exec-dinner.jpg",
          caption: "exec dinner at the start of the semester",
        },
      },
      {
        heading: "by the numbers",
        stats: [
          { value: "70", label: "members" },
          { value: "15", label: "events" },
          { value: "150+", label: "at our biggest event" },
          { value: "12", label: "execs" },
        ],
      },
      {
        heading: "what I learned",
        text: [
          "Running a club taught me how to lead a team, work with other organizations, and creating something people care about.",
        ],
      },
    ],
  },
];
