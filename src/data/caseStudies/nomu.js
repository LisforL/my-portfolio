export const nomu = {
  title: "Nomu",
  titleAccent: "food delivery",
  subtitle:
    "A mobile food delivery app designed to make everyday ordering feel more friendly, engaging, and enjoyable. The experience combines a playful visual identity, intuitive interactions, and a reward system to create a brand that feels memorable beyond the order itself.",
  meta: [
    { label: "Project", value: "UI design, mascot & icon set" },
    { label: "Category", value: "Food delivery" },
    { label: "Role", value: "Figma, 3D character renders" },
    { label: "Project Year", value: "2026" },
    { label: "Timeline", value: "2 weeks" },
  ],
  banner: {
    eyebrow: "Food delivery · 2026",
    title: "Nomu",
    tagline: "every order, delivered by Nomu",
    image: "/case-studies/nomu/hero-riding.png",
  },

  concept: {
    heading: "The",
    headingRest: "concept",
    intro:
      "Food delivery often feels like a waiting game. This concept turns that waiting time into part of the experience - using a friendly character, expressive states, and small moments of interaction to make the journey from order to delivery feel more engaging.",
    cards: [
      {
        title: "A mascot that brings the brand to life",
        body: "A mascot becomes the visual identity across the app. Distinct poses and expressions make each moment feel more friendly and recognizable.",
      },
      {
        title: "A visual language built around warmth",
        body: "Bright pink, soft gradients create an energetic yet approachable experience. The 3D mascot adds personality and makes functional screens more memorable.",
      },
      {
        title: "Small rewards give a reason to return",
        body: "Coins, daily check-ins, levels and simple missions turn routine ordering into a lightweight reward loop, encouraging users to stay engaged beyond each order.",
      },
    ],
  },

  character: {
    heading: "The main",
    headingRest: "character",
    intro:
      "A friendly Shiba was chosen for its recognizable silhouette and energetic personality. The rider helmet connects the character to delivery, while the coin detail extends its role into the rewards experience. Together, these elements create a mascot that feels consistent, memorable, and purposeful.",
    rules: [
      {
        n: "01",
        title: "One pose per job, never decorative",
        body: "Each pose represents a specific moment in the journey, keeping the mascot functional rather than decorative.",
      },
      {
        n: "02",
        title: "Readable at 40px and at 400px",
        body: "Key features such as the helmet, ears, and delivery box keep the character identifiable from 40px to larger screens.",
      },
      {
        n: "03",
        title: "Status before text",
        body: "Each pose communicates the order status at a glance, helping users understand what is happening.",
      },
    ],
    hint: "Drag to compare the hand-drawn with the final render",
    poses: [
      {
        name: "Eating",
        use: "Home banner",
        final: "/case-studies/nomu/poses/eat-final.png",
        sketch: "/case-studies/nomu/poses/eat-sketch.png",
      },
      {
        name: "Riding",
        use: "Order pop-up, map",
        final: "/case-studies/nomu/poses/ride-final.png",
        sketch: "/case-studies/nomu/poses/ride-sketch.png",
      },
      {
        name: "Winking",
        use: "Rewards header",
        final: "/case-studies/nomu/poses/wink-final.png",
        sketch: "/case-studies/nomu/poses/wink-sketch.png",
      },
      {
        name: "Handing over",
        use: "Delivered state",
        final: "/case-studies/nomu/poses/hand-final.png",
        sketch: "/case-studies/nomu/poses/hand-sketch.png",
      },
      {
        name: "Portrait",
        use: "Profile avatar",
        final: "/case-studies/nomu/poses/avatar-final.png",
        sketch: "/case-studies/nomu/poses/avatar-sketch.png",
      },
    ],
  },

  system: {
    heading: "Colour",
    headingRest: "and type",
    intro:
      "Pink carries the brand, yellow carries every action worth tapping, and nothing else competes. Two weights of Inter and one italic slogan face cover the whole app.",
    palette: [
      { hex: "#FF2E63", label: "Primary" },
      { hex: "#FF7FA8", label: "Banner gradient" },
      { hex: "#FFD400", label: "Coins, main CTA" },
      { hex: "#FFFFFF", label: "Cards, sheets", bordered: true },
      { hex: "#1C1C1E", label: "Text" },
    ],
    type: [
      { name: "Banner slogan", spec: "28 px · italic caps" },
      { name: "Screen title", spec: "20 px · semibold" },
      { name: "Body & list", spec: "15 px / 13 px" },
      { name: "Tab label", spec: "11 px · 40 px hit area" },
    ],
  },

  icons: {
    heading: "Icons that",
    headingRest: "change character",
    video: "/case-studies/nomu/tab-bar-anim.mp4",
    protoLabel: "Prototype — tab bar",
    protoTitle: "Selection is an entrance",
    protoBody:
      "The grey object does not recolour, it is replaced by Nomu holding it, inside a pink pill that grows from the icon's centre. Recorded from the working prototype.",
    tabs: [
      { name: "Home", off: "/case-studies/nomu/tabs/home-off.png", on: "/case-studies/nomu/tabs/home-on.png" },
      { name: "Order", off: "/case-studies/nomu/tabs/order-off.png", on: "/case-studies/nomu/tabs/order-on.png" },
      { name: "Notification", off: "/case-studies/nomu/tabs/notif-off.png", on: "/case-studies/nomu/tabs/notif-on.png" },
      { name: "Setting", off: "/case-studies/nomu/tabs/set-off.png", on: "/case-studies/nomu/tabs/set-on.png" },
    ],
    statuses: [
      { name: "Picking up", note: "Arms full, boxes stacked — the tracker's first step.", image: "/case-studies/nomu/status/pick.png" },
      { name: "Delivering", note: "On the scooter — the only pose that has to read on top of a map.", image: "/case-studies/nomu/status/deliver.png" },
      { name: "Delivered", note: "Order complete — the only celebratory pose in the set.", image: "/case-studies/nomu/status/done.png" },
    ],
  },

  screens: {
    heading: "Under the",
    headingRest: "surface",
    intro:
      "Switch on the layers the screen was built from: margins, the 8px grid, tap targets, colour roles, and see them sitting on the real screen.",
    gutter: "5.5%",
    items: [
      {
        name: "Homepage",
        image: "/case-studies/nomu/screens/homepage.png",
        zones: [
          { top: "0%", height: "37.4%", fill: "rgba(255,46,99,.40)", line: "#FF2E63" },
          { top: "37.4%", height: "53.2%", fill: "rgba(255,255,255,.30)", line: "transparent" },
          { top: "90.6%", height: "9.4%", fill: "rgba(255,255,255,.55)", line: "#FF52A8" },
        ],
        taps: [
          { left: "5.1%", top: "24.9%", width: "89.6%", height: "6.3%" },
          { left: "0%", top: "90.6%", width: "25%", height: "9.4%" },
          { left: "25%", top: "90.6%", width: "25%", height: "9.4%" },
          { left: "50%", top: "90.6%", width: "25%", height: "9.4%" },
          { left: "75%", top: "90.6%", width: "25%", height: "9.4%" },
        ],
      },
      {
        name: "Order status",
        image: "/case-studies/nomu/screens/order-status.png",
        zones: [
          { top: "28.6%", height: "19.4%", fill: "rgba(255,46,99,.40)", line: "#FF2E63" },
          { top: "48.0%", height: "20.0%", fill: "rgba(255,255,255,.30)", line: "transparent" },
        ],
        taps: [{ left: "14.7%", top: "62.2%", width: "70.1%", height: "4.4%" }],
      },
      {
        name: "Live tracking",
        image: "/case-studies/nomu/screens/live-tracking.png",
        zones: [
          { top: "0%", height: "46.2%", fill: "rgba(19,19,18,.30)", line: "transparent" },
          { top: "46.2%", height: "21.6%", fill: "rgba(255,46,99,.40)", line: "#FF2E63" },
          { top: "67.8%", height: "32.2%", fill: "rgba(255,255,255,.30)", line: "transparent" },
        ],
        taps: [
          { left: "5.5%", top: "6.5%", width: "9.6%", height: "4.0%" },
          { left: "23.2%", top: "15.2%", width: "39.0%", height: "8.7%" },
          { left: "5.8%", top: "73.9%", width: "25.3%", height: "12.2%" },
        ],
      },
      {
        name: "Rewards",
        image: "/case-studies/nomu/screens/rewards.png",
        zones: [
          { top: "0%", height: "37.4%", fill: "rgba(255,46,99,.40)", line: "#FF2E63" },
          { top: "37.4%", height: "50.6%", fill: "rgba(255,255,255,.30)", line: "transparent" },
          { top: "88.0%", height: "12.0%", fill: "rgba(255,255,255,.55)", line: "#FF52A8" },
        ],
        taps: [
          { left: "16.1%", top: "35.5%", width: "67.4%", height: "6.0%" },
          { left: "71.8%", top: "46.1%", width: "23.2%", height: "3.9%" },
          { left: "71.8%", top: "54.9%", width: "23.2%", height: "4.0%" },
          { left: "68.4%", top: "63.7%", width: "26.7%", height: "4.0%" },
          { left: "68.4%", top: "72.7%", width: "26.7%", height: "4.0%" },
          { left: "77.9%", top: "81.6%", width: "17.1%", height: "3.9%" },
          { left: "0%", top: "88%", width: "25%", height: "12%" },
          { left: "25%", top: "88%", width: "25%", height: "12%" },
          { left: "50%", top: "88%", width: "25%", height: "12%" },
          { left: "75%", top: "88%", width: "25%", height: "12%" },
        ],
      },
      {
        name: "Setting",
        image: "/case-studies/nomu/screens/setting.png",
        zones: [
          { top: "0%", height: "37.5%", fill: "rgba(255,46,99,.40)", line: "#FF2E63" },
          { top: "37.5%", height: "52.5%", fill: "rgba(255,255,255,.30)", line: "transparent" },
          { top: "90.0%", height: "10.0%", fill: "rgba(255,255,255,.55)", line: "#FF52A8" },
        ],
        taps: [
          { left: "6.3%", top: "25.5%", width: "19%", height: "9%" },
          { left: "30.8%", top: "25.5%", width: "19%", height: "9%" },
          { left: "55.3%", top: "25.5%", width: "19%", height: "9%" },
          { left: "79.8%", top: "25.5%", width: "14%", height: "9%" },
          { left: "0%", top: "90%", width: "25%", height: "10%" },
          { left: "25%", top: "90%", width: "25%", height: "10%" },
          { left: "50%", top: "90%", width: "25%", height: "10%" },
          { left: "75%", top: "90%", width: "25%", height: "10%" },
        ],
      },
    ],
    layers: [
      {
        key: "margin",
        title: "Side margins",
        note: "One gutter, every screen: 5.5% of the width — about 21px on a 390pt frame. Cards, list rows and task pills all start on it; only the search pill runs wider.",
      },
      {
        key: "grid",
        title: "8px baseline grid",
        note: "Lines every 8px at design scale. Every vertical gap is a multiple of it, which is what keeps five different card styles feeling like one screen.",
      },
      {
        key: "tap",
        title: "Tap targets",
        note: "Measured off the screens, not guessed: four equal tab-bar columns, the search pill, the yellow reward button and its five task pills, the modal action. Live tracking has no tab bar — its controls are the chevron, the route chip and the tracker.",
      },
      {
        key: "colour",
        title: "Colour roles",
        note: "Pink owns the header down to the gradient's end, white owns everything below it — including the tab bar, where the only saturated thing is the active pill. Live tracking is the exception: the map takes the header slot and pink drops to a status strip.",
      },
    ],
  },
};
