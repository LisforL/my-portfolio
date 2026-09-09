export const penlo = {
  title: "Penlo",
  titleAccent: "App",
  subtitle:
    "A live iOS app that puts close friends on a shared map. I co-built the original with two developers. This is my solo redesign of it.",
  appStoreLink: "https://apps.apple.com/vn/app/zenly-share-location-penlo/id6443518385",
  meta: [
    { label: "Project", value: "iOS app redesign" },
    { label: "Category", value: "Social & Location" },
    { label: "Role", value: "Sole UI/UX designer" },
    { label: "Project Year", value: "2026" },
    { label: "Timeline", value: "2 months" },
  ],
  heroImage: "/case-studies/penlo/hero.png",
  heroImageAlt: "Penlo — live location map with friend markers",

  startPoint: {
    whatIsIt: {
      label: "What Penlo is",
      body: "Penlo is a live location-sharing app that helps friends and family stay connected through real-time location updates, making it easier to meet up, coordinate plans, and ensure each other's safety.",
    },
    goal: {
      label: "The goal",
      body: "The main goal of the project was to redesign the experience by improving trust, usability, and everyday interactions, making location sharing feel more intuitive and valuable for daily use.",
    },
    footer: [
      { label: "Team", value: "2 developers, 1 QA, 1 manager" },
      { label: "My scope", value: "IA, flows, design system, every screen" },
    ],
  },

  problem: {
    heading: "The",
    headingRest: "problem",
    leadBold:
      "People should never have to think twice before sharing their location with someone they trust.",
    lead: "Every interaction came with another confirmation, permission request, or upgrade prompt before the map was even visible. When I tested the live product with users, many abandoned the journey before reaching the app's core value. To understand why the product struggled to become part of users' daily routines, I reviewed the existing experience and identified the moments where trust and clarity broke down.",
    leadNote:
      "The app's usage data belongs to the team and stays private, so the baseline here comes from that test.",
    whyLabel: "Why it needed a redesign",
    why: [
      {
        title: "The visual design felt dated",
        body: "Gradient sat on every surface, pins, sheets, buttons, so the map had the least presence on screen, and stock illustration stood in for the product.",
      },
      {
        title: "The experience was hard to navigate",
        body: "Confusing empty states, unclear location prompts, and ambiguous next steps left users uncertain about what to do.",
      },
    ],
    oldImage: "/case-studies/penlo/old-version.png",
    oldImageCaption: "Some key screens from the original version on App Store",
    stakes: {
      title: "The stakes",
      body: "A location app only survives if people keep using it. When users quietly stop, there's no uninstall notification. So I had to find the moments when trust and usefulness broke down.",
    },
    churns: {
      title: "Who churns",
      body: "Not the privacy skeptics, they never install anyway. The real problem is willing sharers. They needed a way to stay visible with safety. Those are the people I designed for.",
    },
  },

  learn: {
    heading: "What I needed",
    headingRest: "to learn",
    lead: "People stop using sharing apps for two reasons: privacy starts to feel uncomfortable, or the app stops feeling worth opening. Neither reason is obvious. I wrote three questions to understand.",
    questions: [
      "What does seeing a friend's location need to do? What makes someone actually use that information?",
      "What makes someone comfortable sharing their location in the moment, instead of feeling like they're being watched?",
      "After the excitement fades, what keeps the map feeling useful and worth opening?",
    ],
  },

  howLearned: {
    heading: "How I",
    headingRest: "learned it",
    lead: "Each question got the method that could actually answer it.",
    recruitment:
      "Recruitment: I found people who use location-sharing apps. I selected people ages 21–39 with different sharing habits. I used a screener survey to avoid bias from recruiting only friends.",
    methods: [
      { title: "Interviews", n: "n = 12", body: "Found out how friends coordinate and when sharing feels uncomfortable." },
      { title: "Survey", n: "n = 64", body: "Tested comfort levels across different types of relationships." },
      { title: "Usability round 1", n: "n = 8 · shipped app", body: "Tested the current app in the App Store. This is the baseline we compare all improvements against." },
      { title: "Usability round 2", n: "n = 8", body: "Tested the redesign with a new group of people. This validates our case study." },
    ],
  },

  discovered: {
    heading: "What I",
    headingRest: "discovered",
    lead: "Three patterns held up across the research, each one a place trust or usefulness broke, and each one a direct brief for the design.",
    patterns: [
      {
        tag: "Control",
        answers: "answers Q1",
        headline: "Users choose what each friend can see",
        quote: "I'm not hiding. It's just… there's one person I don't want knowing. I don't want a big alert like I blocked them.",
        source: "P4 · PHONG, 27",
        evidence: "9 of 12 people interviewed wanted to hide from one specific person without announcing it. 41 of 64 survey respondents ranked \"quietly pause sharing with one person\" as their top need.",
        solution: "Give each friend a different privacy level. Change it anytime without notifying them.",
      },
      {
        tag: "Context",
        answers: "answers Q2",
        headline: "Users need a reason to share their location",
        quote: "Why do you need my location right now? I haven't even seen what it does yet.",
        source: "P9 · NHI, 19",
        evidence: "5 of 8 testers stopped at the permission prompt on the old app, before it even explained itself. Users ignored location dots that didn't have fresh updates or show what's happening.",
        solution: "Explain what location sharing is for before asking. Show fresh updates and live activity.",
      },
      {
        tag: "Connection",
        answers: "answers Q3",
        headline: "An empty map gives people no reason to come back",
        quote: "I stopped opening it. Just dots sitting there, nobody's ever doing anything on it.",
        source: "P2 · SAU, 24",
        evidence: "Users stopped using sharing apps once the map felt empty and boring. Location mattered only when something was actually happening: a friend moving, arriving somewhere, running low on battery.",
        solution: "Make location feel alive. Show when friends are moving or arriving. Make it easy to reach out.",
      },
    ],
  },

  trustBreaks: {
    heading: "Where the",
    headingRest: "trust breaks",
    lead: "People don't quit a location app in one angry moment, they cool off over about a week. So I mapped that week to find where it turns.",
    patternLabel: "The pattern",
    patternBold: "What the app gives you peaks on day one, while what it asks of you never stops.",
    patternBody: "Seeing friends appear is thrilling once. Sharing your location runs every minute, forever. By day five there's little left to gain and the same amount to give up, and that's when people stop opening it.",
    patternNote: "Modeled from interviews and the survey, not analytics.",
    chart: {
      startLabel: "DAY 0 · INSTALL",
      midLabel: "LINE = HOW MUCH A USER WANTS TO OPEN THE APP",
      endLabel: "END OF WEEK ONE",
      payoffLabel: "the payoff",
      dropoffLabel: "the drop-off",
      slideLabel: "TRUST STARTS TO SLIDE",
    },
    timeline: [
      { n: "01", title: "Installs & shares", mood: "Curious, hopeful" },
      { n: "02", title: "Friends appear", mood: "Happy — they see it working" },
      { n: "03", title: "Novelty settles", mood: "Neutral, checking less often" },
      { n: "04", title: "“Who sees me now?”", mood: "Worried, unsure about privacy" },
      { n: "05", title: "Wants to control it", mood: "No easy way to do this" },
      { n: "06", title: "Stops opening it", mood: "Resigned, quietly gone" },
    ],
    pains: [
      {
        label: "Pain · Stage 03 · The value disappears",
        body: "After the excitement fades, seeing friends on a map doesn't answer any question. Just knowing location doesn't help you decide to open the app.",
        arrow: "→ P4, the map has to feel alive.",
      },
      {
        label: "Pain · Stage 04 · The problem becomes clear",
        body: "People don't know who can see their location right now. Sharing is set once and then forgotten, so they assume the worst.",
        arrow: "→ P2, make visibility visible.",
      },
      {
        label: "Pain · Stage 05 · No way to adjust",
        body: "Users felt exposed but couldn't make small changes. You had to choose: be fully visible or hide completely.",
        arrow: "→ P1, make sharing adjustable at any time.",
      },
      {
        label: "Pain · Stage 06 · Leaving is the cheapest option",
        body: "No reason to stay. No way to lower the cost. Users stop opening the app and eventually delete it. Nothing changes this.",
        arrow: "→ The redesign solves this.",
      },
    ],
  },

  principles: {
    heading: "Four",
    headingRest: "design principles",
    lead: "Four principles turned the research into rules I could design against.",
    cards: [
      {
        num: "P1",
        title: "Make sharing adjustable at any time.",
        subhead: "People should never feel trapped after they've shared.",
        body: "Each friend has one of four privacy levels: precise, blurred, frozen, or hidden. Change it in two taps with no notification. Hiding stops meaning disappearing.",
        shapes: "Shapes Ghost mode and the marker card.",
      },
      {
        num: "P2",
        title: "Make visibility visible.",
        subhead: "Nobody should have to guess who can see them.",
        body: "The map shows who can see you and at what precision. Every friend card explains it in words, not icons, the answer is always one glance away.",
        shapes: "Shapes the map status bar and every friend card.",
      },
      {
        num: "P3",
        title: "Nobody is found by accident.",
        subhead: "Being added should always be a decision, never a surprise.",
        body: "Every way in — QR, ID search, contact sync — waits on a pending request both people accept before either appears on a map.",
        shapes: "Shapes the add-friend flow.",
      },
      {
        num: "P4",
        title: "The map has to feel alive.",
        subhead: "A live map should tell you something a text message wouldn't.",
        body: "Markers carry what friends are doing right now — last active, the place they are at, city, weather, and battery. Reach out to a friend's profile in one tap.",
        shapes: "Shapes the home map and the marker card.",
      },
    ],
  },

  principleToScreen: {
    heading: "From principle",
    headingRest: "to screen",
    ghost: {
      eyebrow: "P1 · Reversible — the signature control",
      titlePre: "Going quiet without ",
      titleEm: "going dark",
      body: "Research showed people don't want all-or-nothing privacy. Most people want to be visible to some friends but hidden from others. Ghost Mode solves this by letting you set a different privacy level for each friend. You can change it anytime, and they won't be notified.",
      compare: [
        { label: "Old version", body: "Privacy had only one option: \"Share Location\" or don't share. There was no middle ground." },
        { label: "This redesign", body: "Four privacy levels for each friend. You can change them anytime without notifying them." },
      ],
      tierList: {
        num: "01",
        caption: "The tier list",
        friends: [
          { name: "Sofia", avatar: "/case-studies/penlo/ghost-av-sofia.png", tier: "Precise", dim: false },
          { name: "Andrew", avatar: "/case-studies/penlo/ghost-av-andrew.png", tier: "Blurred", dim: false },
          { name: "Mary", avatar: "/case-studies/penlo/ghost-av-mary.png", tier: "Frozen", dim: false },
          { name: "Jordan", avatar: "/case-studies/penlo/ghost-av-jordan.png", tier: "Hidden", dim: true },
        ],
      },
      tierPicker: {
        num: "02",
        caption: "Pick a tier for Andrew",
        avatar: "/case-studies/penlo/tier-av-andrew.png",
        name: "Andrew",
        seesAs: "Blurred",
        options: [
          { tier: "Precise", sub: "Share your exact location", active: false },
          { tier: "Blurred", sub: "Share only your area", active: true },
          { tier: "Frozen", sub: "Keep your last location", active: false },
          { tier: "Hidden", sub: "Stop sharing your location", active: false },
        ],
        cancel: "Cancel",
        apply: "Apply",
      },
    },
    evolution: {
      eyebrow: "How the marker card evolved",
      title: "Three rounds to get it right",
      body1: "The first version looked complete, but testing showed that it was doing too much. Each round removed something that seemed useful but added unnecessary complexity for users.",
      body2: "By the final version, the card focused on the actions that mattered most, with privacy controls placed directly where users needed them. Making users more connected with the map experience.",
      friendId: "ID: thanhhuongnguyen2000",
      rounds: [
        {
          version: "v1",
          caption: "Everything on the card",
          avatar: "/case-studies/penlo/v1-av-charlotte.png",
          final: false,
          chips: ["Share ETA", "Messages", "Battery 95%", "Direct location"],
          atHome: false,
          tiers: null,
          stopSharing: true,
          mark: "✕",
          note: "Too many actions made the card harder to scan",
        },
        {
          version: "v2",
          caption: "Cut to the essentials",
          avatar: "/case-studies/penlo/v2-v3-av-charlotte.png",
          final: false,
          chips: ["Messages", "Direct location"],
          atHome: true,
          tiers: null,
          stopSharing: true,
          mark: "✕",
          note: "“Stop sharing” carried too much weight",
        },
        {
          version: "v3",
          caption: "Final",
          avatar: "/case-studies/penlo/v2-v3-av-charlotte.png",
          final: true,
          chips: ["Messages", "Direct location"],
          atHome: true,
          tiers: { seesAs: "Blurred", options: ["Precise", "Blurred", "Frozen", "Hidden"], active: 1 },
          stopSharing: false,
          mark: "✓",
          note: "Four tiers instead of one permanent action.",
        },
      ],
    },
    markerCard: {
      eyebrow: "Solve P1 & P4 · Reversible & alive",
      title: "A marker with useful information, and an easy way to pause",
      body: "The map shows everything you need: the city, weather, your battery, and each friend's battery. Tap a friend's marker to see more — when they were last active, where they are, and a message button. You can also pause sharing with them in two taps, with no notification sent.",
      image: "/case-studies/penlo/p14-map.png",
      imageAlt: "Home map and marker card",
      compare: [
        { label: "Why it exists", body: "Battery tells you if they're really there. Last-active shows if the dot is fresh or old. The pause button lets you quietly adjust without anyone knowing." },
        { label: "Validated", body: "6 of 8 users said seeing this information changed whether they would message a friend." },
      ],
    },
    addFriend: {
      eyebrow: "Solve P3 · Nobody is found by accident",
      title: "Adding friends safely",
      body: "There are three ways to add a friend: QR code, ID search, or contacts. But all of them work the same way: both people must accept before either appears on the map. Privacy settings let you control who can message you, who can see your friends list, and who can find you.",
      image: "/case-studies/penlo/p3-add.png",
      imageAlt: "Add friend — ask, share, wait",
      compare: [
        { label: "Why it matters", body: "Users were worried about being added without knowing. Requiring both people to confirm removes that fear on every path." },
        { label: "Tested & validated", body: "Ease score improved from 4.1/7 to 6.4/7." },
      ],
    },
  },

  redesignedUI: {
    heading: "The",
    headingRest: "redesigned UI",
    lead: "The old app had no consistent look — the same action appeared differently on every screen. I rebuilt the interface on one dark, map-first treatment so the map stays the brightest thing on screen and every control behaves the same way wherever it turns up.",
    sideLabel: "Key screens",
    screens: [
      { title: "Home map", image: "/case-studies/penlo/ui-home.png", body: "City, weather, and your own battery in the header. Tap any friend to see more details and manage privacy settings." },
      { title: "Friend card", image: "/case-studies/penlo/ui-card.png", body: "Last-active, the place they are at, and two clear actions, plus the per-friend tier control." },
      { title: "Add friend", image: "/case-studies/penlo/ui-add.png", body: "Three ways in, and requesting versus pending kept apart so a sent request never looks like a friend." },
      { title: "Profile", image: "/case-studies/penlo/ui-profile.png", body: "Your own identity, your ID to share, and where friend management lives, separate from the map." },
      { title: "Map settings", image: "/case-studies/penlo/ui-settings.png", body: "What the map shows is the user's call — real-time status, weather, and battery each toggle off without leaving the map." },
      { title: "Share code", image: "/case-studies/penlo/ui-share.png", body: "A code you can hand over in person or send through any app, no contact upload required." },
    ],
  },

  tradeoffs: {
    heading: "Trade-offs and priorities",
    lead: "Some design choices meant choosing between reach and trust. Others decided where the two months went. I made these choices on purpose, and I can explain each one.",
    items: [
      {
        title: "Discovery is opt-in, never automatic",
        body: "Contact sync is a powerful tool for growing social apps. The easy choice is to auto-connect everyone. But I made it opt-in instead, both people must accept before connecting. This means slower growth, but more trust.",
      },
      {
        title: "Silent pausing, trust for one side, confusion for the other",
        body: "When you pause sharing, the other person doesn't get notified. They see an old location without knowing why. I accepted this trade-off because a notification would turn a quiet action into a confrontation, exactly what users wanted to avoid.",
      },
    ],
    allocation: {
      title: "How I spent two months — the 70–20–10 rule",
      rows: [
        { lead: "70% — The system and the core flows.", body: "Onboarding, map, add-friend, settings. Familiar patterns, no surprises. Trust comes from predictability." },
        { lead: "20% — Research.", body: "12 interviews, 64-person survey, two 8-person usability tests. Every decision backed by user feedback." },
        { lead: "10% — Delight.", body: "Expressive markers, mood ring around avatars, QR card. Small details, but they're what people screenshot." },
      ],
      cutLabel: "What I cut to protect the two months",
      cutBody: "Group maps, location history, and a scheduled auto-pause all tested as \"nice\" but not trust-critical. I dropped them to spend the time on the four privacy controls that decide whether people keep sharing at all. Prioritizing by the thesis, not the backlog.",
    },
  },

  moreProjects: {
    heading: "More",
    headingRest: "projects",
    allLink: "/projects",
    allLabel: "All projects ↗",
    items: [
      { title: "Omical Hotel", tag: "Booking · Web", image: "/projects/omical-mockup.png", link: "/projects/omical" },
      { title: "Mâm Việt", tag: "Restaurant · Branding", image: "/projects/MÂM VIỆT-mockup.png", link: "/projects/mamviet" },
      { title: "SpitiMou", tag: "Real estate · Web", image: "/projects/spitimou-mockup.png", link: "/projects/spitimou" },
    ],
  },
};
