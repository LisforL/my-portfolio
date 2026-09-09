export const omical = {
  title: "Omical",
  titleAccent: "hotel",
  subtitle:
    "Omical is a boutique hotel in Phú Quốc, Vietnam. I designed the complete brand identity and booking website - from strategy through execution - building a cohesive visual system rooted in the building's own architectural language.",
  prototypeLink:
    "https://www.figma.com/proto/lKL7M4VOSVgYlUyqWlRtmF/Omical-hotel?node-id=597-1080&viewport=1511%2C3042%2C0.1&t=V43dPTqBTwvK7EpU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=597%3A1080&page-id=0%3A1",
  meta: [
    { label: "Project", value: "UI design, case study" },
    { label: "Category", value: "Hotel" },
    { label: "Role", value: "Sole UI/UX designer" },
    { label: "Project Year", value: "2025" },
    { label: "Timeline", value: "3 weeks" },
  ],
  coverImage: "/case-studies/omical/cover.jpg",

  brand: {
    heading: "The foundation:",
    headingRest: "one shape",
    intro:
      "Omical's building is defined by one key feature: tall arched openings set into dark timber. I used this arch as the foundation of the visual identity, the design feels cohesive, with every element connected to one clear idea.",
    mark: {
      label: "The mark",
      image: "/case-studies/omical/logo.png",
      title: "Hatched",
      body: "The arch is filled with diagonal hatching and the wordmark sits directly beneath it, integrated into the composition rather than floating alongside it. At large sizes the hatch reads as architectural detail; at footer size it becomes a solid tone. The mark survives reduction without losing character.",
    },
    grid: {
      label: "Grid",
      desktop: { title: "Desktop · 1920", cols: 8, caption: "8 columns · 242px margin · 24px gutter" },
      mobile: { title: "Mobile · 375", cols: 2, caption: "2 columns · 30px margin · 24px gutter" },
    },
    palette: {
      label: "Palette",
      swatches: [
        { hex: "#072818", label: "Primary · Dark Green - default ground, all marketing pages" },
        { hex: "#D8B25B", label: "Accent · Yellow - action only; buttons and CTAs" },
        { hex: "#F8EDE0", label: "Neutral 1 - reading surfaces, cards and forms" },
        { hex: "#D76310", label: "Tertiary · Orange - accents and highlights" },
      ],
    },
    type: {
      label: "Type",
      rows: [
        { role: "Display 1", family: "Domain Display", spec: "30 px · LS 0%", sub: "Regular" },
        { role: "Display 2", family: "EB Garamond", spec: "20 px · LS 0%", sub: "Regular" },
        { role: "Headline", family: "EB Garamond", spec: "28 px · LS 0%", sub: "Sub-heads 24 / 20" },
        { role: "Text 1–3", family: "Manrope — Regular, Medium, Bold, ExtraBold", spec: "15 px (LS 5%) · 13 px", sub: "11 px (PS 4%)", plain: true },
        { role: "Button", family: "Domain Display / Manrope Semibold", spec: "16 px · 14 px", sub: "LS 0%", plain: true, uppercase: true },
      ],
    },
    buttons: {
      label: "Buttons",
      dark: {
        label: "On dark ground",
        states: [
          { text: "Book now", state: "Enabled", style: { background: "#D8B25B", color: "#072818" } },
          { text: "Book now", state: "Hovered", style: { background: "#FFFFFF", color: "#D8B25B" } },
          {
            text: "Book now",
            state: "Pressed",
            style: { background: "#072818", color: "#F8EDE0", border: "1px solid #F8EDE0", padding: "11px 21px" },
          },
        ],
        tabLabel: "Tab · room class",
        tabs: [
          { text: "Standard", style: { background: "#F8EDE0", color: "#072818", padding: "10px 18px" } },
          { text: "Superior", style: { border: "1px solid #D8B25B", color: "#D8B25B", padding: "9px 17px" } },
          { text: "Deluxe", style: { border: "1px solid #558D6F", color: "#CFDFD7", padding: "9px 17px" } },
          { text: "Suite", style: { border: "1px solid #558D6F", color: "#CFDFD7", padding: "9px 17px" } },
        ],
      },
      light: {
        label: "On light ground",
        states: [
          { text: "Xem thêm", state: "Enabled", style: { border: "1px solid #072818", color: "#072818", padding: "11px 21px" } },
          { text: "Xem thêm", state: "Hovered", style: { background: "#072818", color: "#F8EDE0" } },
          { text: "Xem thêm", state: "Pressed", style: { background: "#D8B25B", color: "#072818" } },
        ],
        stepLabel: "Step · booking flow",
        steps: [
          { text: "1  Chọn phòng", color: "#072818" },
          { text: "2  Dịch vụ mua thêm", color: "#8a8a85" },
          { text: "3  Thanh toán", color: "#D76310" },
        ],
      },
    },
    icons: {
      label: "Icons",
      desktop: { title: "Display icon · desktop", image: "/case-studies/omical/sg-icons-desktop.png", caption: "Frame 60 × 60 px", sub: "#072818 · Lục" },
      mobile: { title: "Display icon · mobile", image: "/case-studies/omical/sg-icons-mobile.png", caption: "Frame 40 × 40 px", sub: "#072818 · Lục" },
      interactive: {
        label: "Interactive icon · states",
        groups: [
          {
            name: "Close",
            states: [
              { glyph: "✕", style: { color: "#F0EFEC" } },
              { glyph: "✕", style: { background: "#FFFFFF", color: "#072818" } },
              { glyph: "✕", style: { border: "1px solid #F0EFEC", color: "#F0EFEC" } },
            ],
          },
          {
            name: "Back",
            states: [
              { glyph: "←", style: { border: "1px solid #F0EFEC", color: "#F0EFEC" } },
              { glyph: "←", style: { background: "#A8C4B6", color: "#072818" } },
              { glyph: "←", style: { background: "#F0EFEC", color: "#072818" } },
            ],
          },
          {
            name: "Select",
            states: [
              { glyph: "", style: { border: "1px solid #F0EFEC" } },
              { glyph: "✓", style: { background: "#D8B25B", color: "#072818" } },
              { glyph: "✓", style: { border: "1px solid #D8B25B", color: "#D8B25B" } },
            ],
          },
        ],
        caption: "Enabled → Hovered → Pressed · 40 px hit target",
      },
    },
  },

  screens: {
    heading: "Eleven screens,",
    headingRest: "one at a time",
    intro:
      "Pick a screen on the left to see it and the reasoning behind it. Marketing pages sit on forest green; the booking flow drops to light Neutral 1 sheets the moment money is involved.",
    imageBase: "/case-studies/omical/screens/",
    groups: [
      { label: "Brand pages", ids: ["home", "about"] },
      { label: "Rooms", ids: ["tiers", "standard", "superior", "deluxe", "suite"] },
      { label: "Booking flow", ids: ["b1", "b2", "b3", "b4"] },
    ],
    items: [
      {
        id: "home",
        num: "01",
        name: "Homepage",
        meta: "Dark · shell bands",
        image: "homepage.jpg",
        lead: "The page alternates dark and shell bands so scrolling feels like walking from outside to inside and back. Search sits in the hero, so a guest who arrived with dates already chosen never has to read the brand story.",
      },
      {
        id: "about",
        num: "02",
        name: "About",
        meta: "Three words, then proof",
        image: "about.jpg",
        lead: "Hotel about-pages usually read as a wall of adjectives. This one has a structure a skim-reader can hold: three arched openings labelled Unique, Luxurious, Familiar — then mission, vision and three core values as evidence for each.",
      },
      {
        id: "tiers",
        num: "03",
        name: "Room index",
        meta: "4 tiers · three-up carousel",
        image: "room-types.jpg",
        lead: "The tier index is a three-up carousel with the active tier lifted and framed. Choosing happens here; comparing happens on the detail page.",
      },
      {
        id: "standard",
        num: "04",
        name: "Standard",
        meta: "15–20m² · 6 amenities",
        image: "room-standard.jpg",
        lead: "The base tier sets the template: cinematic hero with three adjectives, a fact strip of size, capacity and price range, description with an amenity matrix, three sub-types, then a carousel back out to the other tiers.",
      },
      {
        id: "superior",
        num: "05",
        name: "Superior",
        meta: "17–35m² · 6 amenities",
        image: "room-superior.jpg",
        lead: "Same page, one step up the ladder. Daylight enters the frame and the sub-types widen, but not a single section moves position.",
      },
      {
        id: "deluxe",
        num: "06",
        name: "Deluxe",
        meta: "21–40m² · 7 amenities",
        image: "room-deluxe.jpg",
        lead: "The first tier where the amenity count changes: a mini bar appears as a seventh icon, in a new grid slot rather than a reflowed row.",
      },
      {
        id: "suite",
        num: "07",
        name: "Suite",
        meta: "21–40m² · 7 amenities",
        image: "room-suite.jpg",
        lead: "The top tier gets the same template and the most generous photography — full-room views, furniture staged as living space.",
      },
      {
        id: "b1",
        num: "08",
        name: "1 · Choose a room",
        meta: "Step 1 of 3",
        image: "booking.jpg",
        lead: "The flow is three steps plus a confirmation. One persistent summary card rides the right rail from the first click to the last, growing a line each time the guest adds something.",
      },
      {
        id: "b2",
        num: "09",
        name: "2 · Add services",
        meta: "Step 2 of 3",
        image: "extras.jpg",
        lead: "Spa, dinner and breakfast buffets, a theme-park ticket. Four cards only, priced plainly, every one skippable.",
      },
      {
        id: "b3",
        num: "10",
        name: "3 · Details & pay",
        meta: "Step 3 of 3",
        image: "fill-info.jpg",
        lead: "Guest details and payment on one white sheet. Special requests are offered as five checkboxes plus a free-text field, with a disclaimer that they are not guaranteed.",
      },
      {
        id: "b4",
        num: "11",
        name: "4 · Confirmation",
        meta: "Receipt",
        image: "confirmation.jpg",
        lead: "The receipt is drawn as a physical ticket — perforation nodes on the edges, booking code top-right, total bottom-right. It is designed to be screenshotted.",
      },
    ],
  },
};
