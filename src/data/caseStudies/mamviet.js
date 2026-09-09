export const mamviet = {
  title: "Mam Viet",
  titleAccent: "Restaurant",
  subtitle:
    "Mâm Việt is a family-run Vietnamese restaurant in Saigon serving regional cooking. This work was the brand identity, the design system, and a sixteen-page site from scratch.",
  prototypeLink:
    "https://www.figma.com/proto/hhg2duIbefMcX3gRafePSR/Ma%CC%82m-Vie%CC%A3%CC%82t--Viet-?node-id=2208-4677&viewport=-513%2C275%2C0.26&t=j3bEpGLGk2G6R5xH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2208%3A4677&page-id=2208%3A4670",
  meta: [
    { label: "Project", value: "UI/UX design, case study" },
    { label: "Category", value: "Food" },
    { label: "Role", value: "Sole UI/UX designer" },
    { label: "Project Year", value: "2025" },
    { label: "Timeline", value: "3 months" },
  ],
  coverImage: "/case-studies/mamviet/cover.png",

  overview: {
    heading: "What the site does",
    headingRest: "is",
    cards: [
      {
        title: "Explain the experience",
        body: "Mâm Việt serves regional Vietnamese cooking two ways: shared set trays (mâm) for the table and individual plates - a dining format that shapes everything we designed.",
      },
      {
        title: "Take the reservation",
        body: "Booking on a drawn floor plan, with a waitlist branch when the night is full - the website handles capacity so the team focuses on service.",
      },
      {
        title: "Build the brand",
        body: "Five menus by course and diet, each with region, spice and price - the digital presence that holds the restaurant's identity beyond the phone.",
      },
    ],
  },

  challenge: {
    heading: "Challenge",
    headingRest: "& approach",
    intro:
      "Mâm Việt is a small Vietnamese restaurant whose existing site was a single page and a photographed menu. I ran no research with its own guests, so each problem below is stated against published studies of Vietnamese diners and Vietnamese online menus, with the source named. Each is paired with the move made against it.",
    problems: [
      {
        n: "01",
        title: "Menu was just a photo",
        broken:
          "A photographed menu was hard to read on a phone and hid prices, allergens, and what each mâm (set tray) included. Vietnamese diners often search online first—81.3% of Hanoi customers do.",
        sources: [
          { label: "Hanoi consumer study, 2018", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5982020/" },
          { label: "British Food Journal, 2023", href: "https://doi.org/10.1108/BFJ-10-2022-0916" },
        ],
        design:
          "Five course pages with structured dish records - region, spice, allergens, price, holding set trays and single plates in one scannable list.",
      },
      {
        n: "02",
        title: "A cuisine that needed explaining",
        broken:
          "Unfamiliar dish names gave first-time guests little to decide with, while the menu did not explain mâm. Of 1,746 Hanoi food-service customers, 71.8% wanted nutrition information, yet only one-third of online food buyers could find clear origin information.",
        sources: [
          { label: "Menu labels in Vietnam, 2018", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5877005/" },
          { label: "Hanoi consumer study, 2018", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5982020/" },
        ],
        design:
          "Region tags and a “how we eat this” note sit on the dish itself, and every course page opens with set trays before plates, guiding guests or letting them explore freely.",
      },
      {
        n: "03",
        title: "Brand held in one person's head",
        broken:
          "Posters, delivery apps, and signage used different type and colours, creating no clear brand recognition. A study of Vietnamese restaurant customers found layout and design had the biggest impact on satisfaction.",
        sources: [{ label: "Hoang & Suleri, Vietnam, 2021", href: "https://doi.org/10.1080/22243534.2021.2006921" }],
        design:
          "Grid, colour, type, buttons, ornaments and inputs specified for desktop and mobile, ensuring every page stays consistent with the brand.",
      },
    ],
  },

  users: {
    heading: "Four users,",
    headingRest: "four different needs",
    intro:
      "The restaurant already recognised four key audiences through its phone logs. These insights came directly from the owner's understanding of who calls and why.",
    cards: [
      {
        tag: "Primary",
        title: "The weekend family",
        wants: "A table for six on Saturday, in a room where everyone can hear each other.",
        blocked:
          "The landline goes unanswered at peak times. No way to see which rooms are free, check capacity, or get availability in writing.",
        enables: "A drawn floor plan where they pick the room and time, and confirmation arrives instantly. No guessing.",
        flow: "→ Flow A · Book a table",
      },
      {
        tag: "Secondary",
        title: "The first-timer",
        wants: "To understand what a mâm actually is, whether they can order just one plate, and what each dish costs.",
        blocked:
          "Dish names with no translation, no prices, no sense of portion or spice. Nothing explains how set trays differ from single plates.",
        enables: "Five course pages showing set trays first, then individual dishes.",
        flow: "→ Flow B · Read the menu",
      },
      {
        tag: "Tertiary",
        title: "The event organiser",
        wants: "A private room for twenty, a fixed per-head price, and terms in writing so they can plan a budget.",
        blocked: "Room availability and pricing rules that existed only in conversation. Capacity limits unclear, deposit terms verbal.",
        enables: "An enquiry form capturing group size, dietary needs and budget, with capacity and pricing.",
        flow: "→ Flow C · Enquire about an event",
      },
      {
        tag: "Fourth priority",
        title: "The culture seeker",
        wants: "To meet Vietnamese culture through food — workshops, chef talks, the origin of a dish.",
        blocked: "No visibility into what the restaurant runs. Word of mouth only, and no way to know when the next session is.",
        enables: "A workshop gallery of upcoming events: classes, talks, tastings - each with images and a booking link.",
        flow: "→ Flow D · Discover workshops",
      },
    ],
  },

  structure: {
    heading: "Sitemap",
    headingRest: "— 16 pages, 4 branches",
    intro:
      "Designed to stay simple: no page is more than two levels from the home page, and the two main conversion paths - table booking and events - are accessible from every page.",
    branches: [
      { title: "About", meta: "Story · 3 pages", items: ["Our story", "Culture", "The room"] },
      { title: "Menu", meta: "Menu · 5 pages", items: ["Starters", "Hotpot", "Vegetarian", "À la carte", "Dessert"] },
      { title: "Events", meta: "Events + workshops · 4 pages", items: ["Calendar", "Detail", "Register", "Confirmation"] },
      { title: "Booking", meta: "Booking · 3 pages", items: ["Floor map", "Waitlist", "Confirmation"], current: true },
      { title: "Contact", meta: "Not designed", note: "Cut from scope — the footer carries address, hours and map instead.", dashed: true },
    ],
  },

  flows: {
    heading: "Three flows,",
    headingRest: "and where they branch",
    intro: "One flow per audience. Each ends in a state the guest can screenshot, and each has one branch that used to be a dead end on the phone.",
    items: [
      {
        tag: "Flow A",
        title: "Book a table",
        caption: "Weekend family · 4 steps",
        steps: ["Home", "Guests + date + time", "Pick table on floor map", "Confirmation postcard"],
        branchLabel: "EDGE CASE — NIGHT FULL",
        branchAccent: true,
        branchBody: "Waitlist: one field, SMS when a table opens. Never a “no tables” dead end.",
      },
      {
        tag: "Flow B",
        title: "Read the menu",
        caption: "First-timer · 3 steps",
        steps: ["Home or search", "Course page · set trays, then plates", "Book a table — enters Flow A"],
        branchLabel: "EDGE CASE — TOO MUCH CHOICE",
        branchAccent: true,
        branchBody:
          "Two ways to read the same page: set trays at the top for guests who'd rather not decide, the full plates list below for guests who want to build their own meal.",
      },
      {
        tag: "Flow C",
        title: "Enquire about an event",
        caption: "Organiser · 4 steps",
        steps: ["Calendar", "Event detail · room + menu", "Enquiry form", "Review + deposit terms"],
        branchLabel: "DECISION — Deliberately slower",
        branchAccent: false,
        branchBody: "No instant confirmation. The restaurant replies by hand, because capacity for twenty is a conversation.",
      },
      {
        tag: "Flow D",
        title: "Discover workshops",
        caption: "Culture seeker · 3 steps",
        steps: ["Calendar", "Workshop detail · what you cook", "Register"],
        branchLabel: "DECISION — Shares pages with Flow C",
        branchAccent: false,
        branchBody:
          "No separate branch in the sitemap: workshops are entries on the Sự kiện calendar, so this flow reuses the four event pages rather than adding its own.",
      },
    ],
  },

  styleGuide: {
    heading: "UI style guide",
    headingRest: "— Mâm Việt",
    intro:
      "The system came before the screens: grid, colour, type, buttons, ornament and inputs, documented for both desktop and mobile so every page below inherits rather than invents.",
    grid: {
      desktop: "12 columns · 120px margin · 24px gutter",
      mobile: "4 columns · 20px margin · 16px gutter",
    },
    palette: [
      { hex: "#072818", label: "Primary · Blue - default ground, all marketing pages" },
      { hex: "#D8B25B", label: "Accent · Yellow - action only; buttons and CTAs" },
      { hex: "#F8EDE0", label: "Neutral 1 - reading surfaces, cards and forms" },
      { hex: "#D76310", label: "Tertiary · Red - accents and highlights" },
    ],
    type: [
      { role: "Display 1", family: "Beautique Display", serif: true, spec: "75 px · LS 0%", sub: "Regular" },
      { role: "Display 2", family: "Beautique Display", serif: true, spec: "48 px · LS 0%", sub: "Regular" },
      { role: "Headline", family: "Beautique Display", serif: true, spec: "32 px · LS 0%", sub: "Sub-heads 24 / 20" },
      { role: "Text 1–3", family: "K2D — Regular, Medium, SemiBold", spec: "16 px · 14 px · 12 px", sub: "LS 0%" },
      { role: "Button", family: "K2D SemiBold", uppercase: true, spec: "16 px · 14 px", sub: "LS .04em" },
    ],
    ornamentIcons: "/case-studies/mamviet/sg-ornament-icons.png",
    patterns: "/case-studies/mamviet/sg-patterns.png",
    iconsDesktop: "/case-studies/mamviet/sg-icons-desktop.png",
    iconsMobile: "/case-studies/mamviet/sg-icons-mobile.png",
    imageShapes: "/case-studies/mamviet/sg-image-shapes.png",
  },

  screens: {
    heading: "Every page,",
    headingRest: "top to bottom",
    intro: "All sixteen pages, grouped the way the sitemap groups them. Pick one from the index — the frame on the right scrolls its full length.",
    groups: [
      {
        label: "Landing",
        items: [
          { id: "home", label: "Home", title: "Home", note: "Overhead tray hero with the nav wrapped around its edge; one yellow call to action in the viewport." },
        ],
      },
      {
        label: "Story & space",
        items: [
          { id: "about1", label: "About", title: "About Mâm Việt", note: "Long-form editorial on the family and the regional cooking, with the eight-petal mark used as the divider." },
          { id: "space", label: "The space", title: "The space", note: "Every interior photograph cut to a Huế octagon with a 3px indigo keyline." },
        ],
      },
      {
        label: "Menu",
        items: [
          { id: "menu1", label: "Appetisers", title: "Appetisers", note: "Three set trays: hero trio fills the fold, detail spread beneath. The template was drawn for this page." },
          { id: "menu2", label: "Hotpot", title: "Hotpot", note: "Hotpot photography is horizontal, so zone two flips to a wide crop — same grid, one span changed." },
          { id: "menu3", label: "Vegetarian", title: "Vegetarian", note: "The quiet variant: ground lifted one step and every tile keylined, because the food is low-contrast." },
          { id: "menu4", label: "À la carte", title: "À la carte", note: "Twenty dishes on a template built for three. It works, but it is the flattest screen in the set." },
          { id: "menu5", label: "Dessert", title: "Dessert", note: "Seven desserts, no hero. The page ends early rather than padding with cross-sell." },
        ],
      },
      {
        label: "Events",
        items: [
          { id: "event1", label: "Event activity", title: "Event activity", note: "Upcoming nights as a vertical calendar, wave motif marking each seam." },
          { id: "event2", label: "Activity 01", title: "Activity 01", note: "Room, set menu and capacity — the page that has to look as considered as the room." },
          { id: "event3", label: "Activity 02", title: "Activity 02", note: "Date, guests, occasion. Deliberately slower than the table flow." },
          { id: "event4", label: "Activity 03", title: "Activity 03", note: "Deposit terms stated plainly before submit; final state is a card, not a toast." },
        ],
      },
      {
        label: "Booking",
        items: [
          { id: "booking", label: "Floor map", title: "Floor map", note: "Selection happens on a drawn plan. Free tables are yellow; booked ones go flat and lose their chair outlines." },
          { id: "waitlist", label: "Waitlist", title: "Waitlist branch", note: "The one place the gold lacquer panel appears — one field, SMS when a table opens." },
          { id: "postcard", label: "Postcard", title: "Confirmation postcard", note: "The booking ends on something worth screenshotting rather than a receipt." },
        ],
      },
    ],
    imageBase: "/case-studies/mamviet/screens/",
  },

  prototype: {
    heading: "Flow A",
    headingRest: "in motion",
    intro: "The booking flow clicked through end to end: home, guests and time, floor map, postcard.",
    caption: "Home → floor map → postcard",
  },
};
