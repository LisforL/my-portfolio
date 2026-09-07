export const scaleData = [
  { label: "2 weeks", people: "5, by phone", rounds: "One, informal", weights: [26, 12, 40, 4, 18] },
  { label: "6 weeks", people: "12", rounds: "Two", weights: [16, 24, 26, 20, 14] },
  { label: "3 months", people: "18–24", rounds: "Three", weights: [12, 26, 22, 26, 14] },
  { label: "6 months", people: "30+", rounds: "Four, plus post-launch", weights: [10, 22, 20, 30, 18] },
];

export const moveData = [
  {
    num: "01",
    title: "Understand the problem",
    tint: "#131312",
    deliver: "Problem statement",
    byScale: [
      { headline: "Half a day to agree what we are solving.", body: "Even on a two-week job, this comes first. If we cannot write the problem in one sentence, we are about to design something nobody asked for.", cut: "Stakeholder interviews" },
      { headline: "Two days on the problem and the constraints.", body: "I list what engineering, legal and preference each demand, and the team agrees which is which before I draw anything.", cut: "Nothing" },
      { headline: "A week, including a look at competitors.", body: "Time to check the brief is asking the right question, and to bring back a second way of framing it for the team to react to.", cut: "Nothing" },
      { headline: "Framing with a point of view on the market.", body: "You get two ways of seeing the problem, so the direction is chosen on purpose rather than by default.", cut: "Nothing" },
    ],
  },
  {
    num: "02",
    title: "Talk to users",
    tint: "#55554f",
    deliver: "Tagged insights",
    byScale: [
      { headline: "Five user calls in two days.", body: "Five conversations are not statistics, but they will stop you building the wrong thing — which is the whole point at this length.", cut: "Diary studies and surveys" },
      { headline: "Twelve interviews, sorted into insights.", body: "Every claim in the final design points back to a quote, or says plainly that it doesn't. Sorting the quotes by hand takes a day and is worth it.", cut: "Diary studies" },
      { headline: "Interviews plus a two-week diary study.", body: "Diaries catch what interviews miss: week two, once the novelty is gone and the product has to be worth the effort.", cut: "Nothing" },
      { headline: "Research all the way through, not one phase.", body: "A standing hour a week with real users, so decisions stop being arguments about taste.", cut: "Nothing" },
    ],
  },
  {
    num: "03",
    title: "Design the UI",
    tint: "#c0553f",
    deliver: "UI screens + design system",
    byScale: [
      { headline: "This is where most of the two weeks goes.", body: "At this length I design in the UI rather than around it — a day of paper sketches, then layout, type, colour and states worked out on real screens. No system behind it, and I write down what that costs later.", cut: "The component library" },
      { headline: "Full UI, plus a small design system.", body: "Sketches and flows first, then every screen designed to spec — type scale, colour, spacing, icons, all interaction states — with components in Figma so the tenth screen costs a fraction of the first.", cut: "Contribution rules" },
      { headline: "Polished UI and a system your team can extend.", body: "Visual design, motion, and the documentation nobody volunteers for: annotated flows, empty and error states, responsive and reduced-motion behaviour.", cut: "Nothing" },
      { headline: "A full design language, not just screens.", body: "Visual identity applied across the product, with rules for how components get added and reviewed so the library outlives me.", cut: "Nothing" },
    ],
  },
  {
    num: "04",
    title: "Prototype and test",
    tint: "#55554f",
    deliver: "Clickable prototype + findings",
    byScale: [
      { headline: "A clickable build, tested with five people.", body: "The finished screens get wired up and put in front of real users late in week two. Whatever breaks gets fixed before handoff; whatever I cannot fix gets written down.", cut: "Formal usability sessions" },
      { headline: "Two rounds of prototype and fix.", body: "Test the designed flow, fix what fails, test again. Keeping round one beside the final is the useful part of the process and the honest part of the case study.", cut: "Nothing" },
      { headline: "Three rounds, with what failed written down.", body: "Enough room to try a genuinely different flow instead of polishing the first one until it stops improving.", cut: "Nothing" },
      { headline: "Prototypes with motion, tested properly.", body: "Transitions and micro-interactions built and judged in context, then dropped with the reasoning recorded so nothing is re-argued later.", cut: "Nothing" },
    ],
  },
  {
    num: "05",
    title: "Launch and measure",
    tint: "#FF52A8",
    deliver: "Post-launch results",
    byScale: [
      { headline: "A handover, plus one day of drawing.", body: "There is no post-launch data in two weeks, so you get a written prediction instead: what I expect to happen, and what would prove me wrong.", cut: "Post-launch measurement" },
      { headline: "Launch support and a five-week review.", body: "Numbers, support tickets, and a plain note on what was traded away — in the case study rather than left out of it.", cut: "Motion polish, sometimes" },
      { headline: "Two post-launch reviews with real numbers.", body: "The part most portfolios skip. It is also where illustration gets its time, because the product finally has a voice to draw for.", cut: "Nothing" },
      { headline: "Watch it for a quarter, then fix what you find.", body: "Ship, measure, and return to the two things still wrong. Drawing time every Friday throughout.", cut: "Nothing" },
    ],
  },
];

export const verdictLines = [
  "Yes, if the problem is worth researching before it is drawn.",
  "Yes, if you want one person doing research, flows and interface.",
  "Yes, if the fortieth screen should cost less than the first.",
  "Only if you want research in the room, not a decorator at the end of the sprint.",
  "No, if the decision is already made and you just need it drawn by Friday.",
  "No, if you need a front-end engineer more than a designer.",
];
