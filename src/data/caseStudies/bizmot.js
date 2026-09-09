export const bizmot = {
  title: "Bizmot",
  titleAccent: "card flow",
  subtitle:
    "How I solved the core onboarding challenge: getting users to create their complete digital business card in under 5 minutes without confusing them.",
  liveLink: "https://bizmot.com/en",
  meta: [
    { label: "Project", value: "Card creation flow" },
    { label: "Category", value: "Business" },
    { label: "Role", value: "Sole UI/UX designer" },
    { label: "Project Year", value: "2025" },
    { label: "Timeline", value: "1 month" },
  ],
  intro:
    "I was the only designer on a team of five — two developers, a tester and a manager. Two weeks went to the flow work: three prototypes, ten testing sessions and the call to ship Flow 3. Two more went to the ~80 card designs.",
  heroImage: "/case-studies/bizmot/hero.png",

  whatIsIt: {
    heading: "What",
    headingRest: "BizMot is?",
    paragraphs: [
      "BizMot is a digital business card platform. Instead of printing and carrying paper cards, professionals create one digital card and share it instantly, no printing, no running out of cards, no outdated information.",
    ],
    thinkOfItLead: "Think of it as: ",
    thinkOfItBold:
      "Paper business card → Digital profile that updates in real-time and captures leads automatically.",
    eyebrow: "How it works",
    cards: [
      {
        title: "Share instantly, three ways",
        bullets: ["NFC tap, phone to phone", "QR code scan", "Direct link or email"],
        note: "No app required for the recipient — they view your card in a browser and save your details in one tap.",
      },
      {
        title: "Collect leads automatically",
        bullets: [
          "Anyone who views your card has their contact details captured in your dashboard",
          "Real-time views, downloads, and lead counts",
          "No manual data entry",
        ],
      },
      {
        title: "Built for individuals and teams",
        rows: [
          { label: "Individuals", value: "Salespeople, freelancers, and business owners use it solo to connect faster and track leads." },
          { label: "Teams", value: "Companies manage all employee cards centrally with consistent branding, and see performance metrics for each team member." },
        ],
      },
    ],
    darkCard: {
      title: "What the product does after the share",
      body: "Collects the viewer's contact details as a lead, reports who opened the card in an analytics dashboard, and lets enterprise teams manage cards centrally. Used by individual salespeople, freelancers and real-estate agents, and by enterprise teams.",
    },
    productImage: "/case-studies/bizmot/card-example.png",
  },

  flowsIntro: {
    heading: "One flow,",
    headingRest: "three sequences",
    paragraphs: [
      "Every new user needs to do the same three things: choose a template, answer questions about themselves, and finalise the card.",
      "The main differences were the order of these steps and how much information users saw at once. Instead of deciding which approach was best based on assumptions, three different flows were built as prototypes and tested.",
    ],
    hint: "Click button to switch between the flows",
  },
  flows: [
    {
      tab: "Flow 1",
      sequence: [
        "Name, photo, industry",
        "Contact details (2–4 fields)",
        "Business information (2–4 fields)",
        "Finalise card",
      ],
      densityLabel: "Information density",
      title: "Flow 1 — ask everything up front",
      body: "Collect everything up front at 2–4 questions per screen, then choose a template at the end -> The shortest path.",
      advantage: "Fewest total screens",
      cost: "High cognitive load per screen; people froze at the top of each one",
      stripHeader: "Flow 1 — all eight screens",
      stripSubheader: "2–4 questions per screen",
      screens: [
        { n: "01", title: "What's your name?", label: "Name + photo", fields: 1, activeField: true, preview: "blank" },
        { n: "02", title: "Business industry", label: "Industry + title", fields: 2, preview: "blank" },
        { n: "03", title: "Contact Details", label: "Contact details", fields: 2, preview: "avatar-line" },
        { n: "04", title: "Business Info", label: "4 fields, 1 screen", fields: 3, activeField: true, preview: "avatar-fields", highlight: true },
        { n: "05", title: "More Insight", label: "More insight", kind: "chips", preview: "avatar-full" },
        { n: "06", title: "Showcase more", label: "Showcase", kind: "chips", preview: "avatar-full" },
        { n: "07", title: "Select a template", label: "Choose template", kind: "template", preview: "template", highlight: true },
        { n: "08", title: "Congratulations", label: "card, finally", kind: "final", preview: "final", highlight: true },
      ],
    },
    {
      tab: "Flow 2",
      sequence: [
        "Name, photo, industry",
        "Contact and business details (1–2 fields each)",
        "Choose a template → suggested by industry",
        "Finalise card",
      ],
      densityLabel: "Progressive disclosure",
      title: "Flow 2 — one thing at a time",
      body: "Same order, thinner screens: 1–2 questions each, template still at the end. Easier to read, more steps to walk.",
      advantage: "Clear mental model, low load per step, a sense of momentum.",
      cost: "More steps to walk, and the template stays abstract until the last one",
      stripHeader: "Flow 2 — all ten screens",
      stripSubheader: "1–2 questions per screen",
      screens: [
        { n: "01", title: "What's your name?", label: "Name + photo", fields: 1, activeField: true, preview: "blank" },
        { n: "02", title: "Your business industry", label: "Industry", fields: 1, preview: "avatar-line" },
        { n: "03", title: "Your job position", label: "Job position", fields: 1, preview: "avatar-line" },
        { n: "04", title: "Contact Details", label: "Phone", fields: 1, preview: "avatar-fields" },
        { n: "05", title: "Contact Details", label: "Email", fields: 1, preview: "avatar-duo" },
        { n: "06", title: "Business Information", label: "Business info · 2 screens", fields: 1, preview: "avatar-full" },
        { n: "07", title: "More Insight Information", label: "More insight", kind: "chips", preview: "avatar-full" },
        { n: "08", title: "Showcase more", label: "Showcase", kind: "chips", preview: "avatar-full" },
        { n: "09", title: "Select a template", label: "Choose template", kind: "template", preview: "template", highlight: true },
        { n: "10", title: "Congratulations", label: "card, finally", kind: "final", preview: "final", highlight: true },
      ],
    },
    {
      tab: "Flow 3 · Shipped",
      sequence: [
        "Name, photo, industry",
        "Choose a template → suggested by industry",
        "Contact and business details (1–2 fields each)",
        "Review and share",
      ],
      sequenceNote: "Same density as Flow 2 — only the order changed",
      densityLabel: "Industry-matched template, live preview — shipped",
      title: "Flow 3 — two questions, then see the card",
      body: "Two quick questions: name and industry, then a template grid already filtered to that industry. From there the card sits beside the form and updates as you type.",
      advantage: "Users see the card design as they fill in their information.",
      cost: "Building this was hard: the card preview updates with every keystroke.",
      stripHeader: "Flow 3 — all ten screens",
      stripSubheader: "1–2 questions per screen · template at 03, suggested by industry",
      screens: [
        { n: "01", title: "What's your name?", label: "Name + photo", fields: 1, activeField: true, preview: "blank" },
        { n: "02", title: "Your business industry", label: "Industry", fields: 1, preview: "blank" },
        { n: "03", title: "Select a template", label: "Choose template — suggests by industry", kind: "template", preview: "template", highlight: true },
        { n: "04", title: "Your job position", label: "Job position", fields: 1, preview: "avatar-fields", chrome: true },
        { n: "05", title: "Contact Details", label: "Phone", fields: 1, preview: "avatar-fields", chrome: true },
        { n: "06", title: "Contact Details", label: "Email", fields: 1, preview: "avatar-duo", chrome: true },
        { n: "07", title: "Business Information", label: "Business info · 2 screens", fields: 1, preview: "avatar-full", chrome: true },
        { n: "08", title: "More Insight Information", label: "More insight", kind: "chips", preview: "avatar-full", chrome: true },
        { n: "09", title: "Showcase more", label: "Showcase", kind: "chips", preview: "avatar-full", chrome: true },
        { n: "10", title: "Review and share", label: "card, already seen", kind: "final", preview: "final", highlight: true },
      ],
    },
  ],
  defaultFlow: 2,

  testing: {
    heading: "Two rounds",
    headingRest: "of testing, two changes of mind",
    intro:
      "I ran moderated remote sessions with clickable prototypes over two rounds — ten participants, the same ten people in both. The winner of round 1 moved into round 2. Both rounds were qualitative, focused on preference and understanding rather than timing, so the findings below come from participants' words and my observations, not numerical data.",
    rounds: [
      {
        label: "Round 1",
        matchup: "Flow 1 vs Flow 2",
        winner: "Flow 2",
        dark: false,
        body: "The main issue was how many questions appeared on one screen. Three to four questions felt like a long form that users had to complete. One to two questions felt more like a simple step. No one complained that the shorter version had more screens. The extra taps felt less important because the smaller number of questions made the task feel easier.",
        quotes: [
          "When I see too many questions at once, I don't know where to start.",
          "Breaking it into smaller steps makes me feel like I'm making progress.",
        ],
      },
      {
        label: "Round 2",
        matchup: "Flow 2 vs Flow 3",
        winner: "Flow 3",
        dark: true,
        body: "This result surprised me. I expected the two flows to feel similar because Flow 3 keeps Flow 2's simple question layout and only moves template selection forward, ahead of the detail questions. But showing the card early changed how people understood the questions. Instead of seeing the fields as a list of information to fill in, they saw them as specific spaces to complete on something they had already chosen.",
        quotes: [
          "When I see the template first, I know what information matters.",
          "This feels less abstract — I'm not guessing where things will go.",
        ],
      },
    ],
    gotWrong:
      "I went into round 1 expecting Flow 1 to win. I had optimised for the metric in the promise ‘under five minutes’ and assumed fewer screens meant a faster finish. It didn't: people spent the saved screens re-reading the dense ones. Screen count was my proxy for effort, and it was the wrong proxy.",
  },

  solution: {
    heading: "Flow 3:",
    headingRest: "the card arrives early, then fills itself in",
    steps: [
      {
        n: "01",
        title: "Name, industry, template",
        body: "Name and industry first, so the grid can be filtered by job type before anyone sees it.",
        bullets: [
          "7 categories: real estate, creative, healthcare, enterprise, sales, freelance, business owners",
          "Each category carries 10–12 designs",
          "Users see relevant templates instead of scrolling all templates",
          "Colour palette is secondary customisation",
        ],
        images: [
          { src: "/case-studies/bizmot/step-name.png", caption: "01 What's your name?" },
          { src: "/case-studies/bizmot/step-industry.png", caption: "02 Your business industry" },
          { src: "/case-studies/bizmot/step-template.png", caption: "03 Templates, already filtered", accent: true },
        ],
      },
      {
        n: "02",
        title: "Contact and business details",
        body: "Users add their contact and business information step by step: starting with their phone and email, then adding their company name, logo, address, and website.",
        images: [
          { src: "/case-studies/bizmot/step-contact.png", caption: "04–05 Contact details" },
          { src: "/case-studies/bizmot/step-business.png", caption: "06–07 Business information" },
          { src: "/case-studies/bizmot/step-business-2.png", caption: "08–09 Logo, address, website" },
        ],
      },
      {
        n: "03",
        title: "More insight",
        body: "After the essential information is complete, users can choose what else they want to show on their card, from Slogan and About us to Services, Social Media, Gallery, Videos, and Testimonials.",
        images: [
          { src: "/case-studies/bizmot/step-insight.png", caption: "10 More insight" },
          { src: "/case-studies/bizmot/step-showcase.png", caption: "11 Showcase more" },
        ],
      },
      {
        n: "04",
        title: "Finish, then keep going",
        body: "Card is done. Users can:",
        bullets: ["View and edit", "Share on social media or copy link", "Order physical cards (arrive in 3 days)"],
        note: "Users get an offer: collect leads. If they say yes, the card becomes a form that captures viewer details. If they say no, the flow ends. Either way, the job is done.",
        images: [
          { src: "/case-studies/bizmot/step-more.png", caption: "12 Congratulations, 100%" },
          { src: "/case-studies/bizmot/step-final.png", caption: "13 Shipping + lead offer" },
          { src: "/case-studies/bizmot/step-final-2.png", caption: "14 Lead collection, optional" },
        ],
      },
    ],
    prototypeLink: "https://www.figma.com/proto/uXTV7cg5O6A3l0z7kx2Dw5/Card-create-flow?node-id=98-19180&viewport=3069%2C-1317%2C0.14&t=MF9rXlZZCyoE0ctZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=98%3A19180&page-id=0%3A1",
    prototypeLabel: "Open the Flow 3 prototype ↗",
    prototypeCaption: "Figma · clickable, starts at screen 01",
  },

  makingPossible: {
    heading: "The version",
    headingRest: "users wanted was the version engineering dreaded",
    body: "A live preview requires two things to stay in sync: the form data and the rendered template. Every keystroke re-renders the card with its own layout rules. The dev team said this would be slow and fragile to build.",
    problems: [
      { problem: "The card flickered on every keystroke", solution: "So it waits until typing pauses" },
      { problem: "The form and the card drifted apart", solution: "So both read from one copy of the data", accent: true },
      { problem: "Redrawing the whole card felt laggy", solution: "So only the line you changed redraws" },
    ],
    whatWeDidntDo:
      "We could have compromised: keep Flow 2, add a preview at the end. It would ship faster and still show users their card. But testing showed users needed context while filling in information, not after.",
    whatWeDidInstead:
      "Showing feedbacks from users to the engineers rather than the conclusion. Watching a participant hesitate on an abstract form and then relax in front of the preview reframed it from a design preference to a problem worth solving. They came back with a component-based preview, debounced updates, scoped re-renders, and it was fast.",
  },

  results: {
    heading: "What",
    headingRest: "shipped, and what I can honestly claim",
    body: "Flow 3 became the default card creation path. We didn't measure completion rate before launch, so I can't compare before vs. after. But I have user testing evidence and feedback after launch. I prefer to be honest about what I can prove.",
    stats: [
      { value: "3 → 1", caption: "Three flows tested, one shipped. Each was a working prototype, not just a sketch." },
      { value: "2", caption: "Two rounds of user testing. Round 1 ruled out dense screens; round 2 chose Flow 3." },
      { value: "7 × 12", caption: "Seven industry categories, 10–12 card designs each — roughly eighty designs, so the template grid can be filtered before anyone sees it." },
    ],
    quotes: [
      "I knew exactly where my information would go.",
      "Way easier to know what's missing when I see the preview.",
    ],
    source: "Source: post-launch feedback, moderated sessions.",
  },

  learnings: {
    heading: "Two things",
    headingRest: "I took into the next project",
    cards: [
      {
        title: "Efficient on paper isn't efficient in hand",
        body: "Flow 1 had the fewest screens, so I thought it was the best. But users didn't choose it. Users count decisions, not screens. I learned this by watching someone struggle.",
      },
      {
        title: "Context beats instruction",
        body: "Writing instructions didn't help users understand the fields. But showing them the card preview (what they're actually creating) made it clear. Show the answer instead of explaining it.",
      },
    ],
  },

  moreProjects: {
    heading: "More",
    headingRest: "projects",
    allLink: "/projects",
    allLabel: "All projects ↗",
    items: [
      { title: "SpitiMou", tag: "Real estate · Web", image: "/projects/spitimou-mockup.png", link: "/projects/spitimou" },
      { title: "Mâm Việt", tag: "Restaurant · Branding", image: "/projects/MÂM VIỆT-mockup.png", link: "/projects/mamviet" },
      { title: "Omical Hotel", tag: "Booking · Web", image: "/projects/omical-mockup.png", link: "/projects" },
    ],
  },
};
