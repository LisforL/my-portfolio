export const spitimou = {
  title: "SpitiMou",
  titleAccent: "real estate",
  subtitle:
    "SpitiMou is a real estate marketplace connecting two groups on one platform: buyers searching for property in Cyprus and real estate agencies managing their listings. I led the complete UX design from research to final screens. It is live.",
  liveLink: "https://spitimou.cy",
  meta: [
    { label: "Project", value: "Web design, end-to-end" },
    { label: "Category", value: "Real estate" },
    { label: "Role", value: "Sole UI/UX designer" },
    { label: "Project Year", value: "2025" },
    { label: "Timeline", value: "1 month" },
  ],
  heroImage: "/case-studies/spitimou/hero.jpg",
  heroImageAlt: "SpitiMou home page — search bar and five city blocks",

  problem: {
    heading: "Three users,",
    headingRest: "three different needs",
    lead: "Property listings are scattered across multiple sites. The real problem is that buyers, investors, and agencies each have different needs that listings don't address.",
    personas: [
      {
        role: "The mover",
        title: "Chooses an area before a flat",
        broke: "Filters show many properties but cannot describe a neighborhood. Buyers research on forums and chat groups, then return to the site only to contact an agent.",
        design: "Four city blocks answer the location question first. Every listing then carries a written description alongside the property details, and appears on a real map. Buyers can evaluate the neighborhood.",
      },
      {
        role: "The investor",
        title: "Needs a market, not a unit",
        broke: "Listings show only property information, not market data. Investors analyze this information elsewhere before deciding, so the decision happens before viewing listings.",
        design: "Show property details where buyers look first. Each listing displays key information upfront instead of hiding it in photos. This approach prioritizes what matters most to buyers, reducing decision time.",
      },
      {
        role: "The agency",
        title: "Publishes, then manages easily",
        broke: "Publishing one property requires filling many fields in one form, so agents rush or give up. Updates never stop after launch, making manual management unsustainable.",
        design: "Break the endless form into stages that save, so a listing can be finished later instead of rushed. A dashboard shows every listing's status at a glance, and an agency profile means the work carries a name.",
      },
    ],
  },

  research: {
    heading: "Learning",
    headingRest: "from the competition",
    lead: "Instead of user research, I analyzed the Cyprus property market. I studied Airbnb and Booking, they excel at helping people browse places they haven't visited. I also studied Rightmove, which specializes in property.",
    columns: ["Airbnb", "Booking", "Rightmove"],
    rows: [
      {
        criterion: "Entry point",
        values: ["destination search", "destination search", "location search"],
        decision: "open on a property search, not a destination search",
      },
      {
        criterion: "Filter depth",
        values: ["moderate, progressive", "moderate, progressive", "deep, upfront"],
        decision: "show 6 filters upfront, hide 40+ behind Advanced",
      },
      {
        criterion: "Card carries",
        values: ["price, rating, type", "price, score, location", "price, beds, agent"],
        decision: "carry price, beds, baths, m², agency, ref",
      },
      {
        criterion: "Trust signal",
        values: ["reviews", "review score", "agent branding"],
        decision: "name the agency on every card",
      },
      {
        criterion: "Supplier presence",
        values: ["host page", "property page", "branch page"],
        decision: "link every card to that agency's listings",
      },
      {
        criterion: "Listing depth",
        values: ["amenity list", "room facts", "beds, baths, tenure"],
        decision: "answer energy class, internal vs total m², veranda, title deed",
      },
    ],
    took: {
      label: "What I took",
      intro: "All three platforms start with location and keep listing cards simple. SpitiMou diverges in two ways:",
      points: [
        {
          label: "For buyers:",
          body: "Six filters appear immediately, with 40+ options in Advanced Search. This works because Cyprus buyers usually know which city they want before searching.",
        },
        {
          label: "For agencies:",
          body: "Portfolio management tools are included because agencies manage many properties, not just one.",
        },
      ],
    },
  },

  flows: {
    heading: "Mapping the product",
    headingRest: "from both sides",
    card: {
      label: "The listing card",
      title: "One object, filled in by one side and read by the other",
      body: "Agencies create the listing card when adding a property. Buyers see this same card in search results, on city pages, in categories, and in agency portfolios. Every field an agency fills is information a buyer will evaluate. Because both sides use the same card, the two flows couldn't be designed separately. One card design solved both.",
    },
    mapLabel: "The map — three levels, two audiences",
    mapLevels: ["Level 1 · entry", "Level 2 · browse", "Level 3 · act"],
    mapRows: [
      {
        side: "Public site",
        title: "Finding a property",
        entry: { label: "Home", note: "search · cities · categories · market" },
        browse: [
          { label: "City blocks", suffix: "×5", dashed: true },
          { label: "Categories", suffix: "×4", dashed: true },
          { label: "Search results", primary: true },
        ],
        act: [
          { label: "Property detail", accent: true },
          { label: "Agency profile", dashed: true },
          { label: "Posts · FAQ · Contact", dashed: true },
        ],
      },
      {
        side: "Agency dashboard",
        title: "Listing a property",
        entry: { label: "Register and verify", note: "one door into the dashboard" },
        browse: [
          { label: "Portfolio dashboard", primary: true },
          { label: "Agency profile", dashed: true },
          { label: "eCard integration", dashed: true },
        ],
        act: [
          { label: "Add or edit property", accent: true, note: "staged" },
          { label: "Photos and map location", dashed: true },
          { label: "Status — live, sold, changed", dashed: true },
        ],
      },
    ],
    legend: [
      { swatch: "solid", label: "destination" },
      { swatch: "dashed", label: "supporting page" },
      { swatch: "accent", label: "where the product earns something" },
    ],
  },

  screens: {
    heading: "Six wireframes",
    headingRest: "that define the product",
    lead: "About thirty screens were designed. These six wireframes show the core concept: three for how buyers work, three for how agencies work. The visual design sits in the design system above.",
    buyerLabel: "For buyers",
    agencyLabel: "For agencies",
    buyer: [
      {
        n: "01",
        label: "Home and search",
        body: "The filter bar sits under the navigation on every page, so search is always accessible. Below it, four city tiles let buyers start without filling out forms.",
      },
      {
        n: "02",
        label: "Search results",
        body: "Each card displays agency name, location, price, and key details. Buyers can compare properties without clicking.",
      },
      {
        n: "03",
        label: "Property detail",
        body: "Full photo gallery at top, then a sticky facts panel showing price and property details. The description sits beside it, with the booking button inside the panel.",
      },
    ],
    agency: [
      {
        n: "04",
        label: "Portfolio dashboard",
        body: "Every listing appears in one table showing its status. Built for managing many properties.",
      },
      {
        n: "05",
        label: "Add property, staged",
        body: "Dozens of fields are organized into named stages with visible progress.",
      },
      {
        n: "06",
        label: "Published listing",
        body: "The edit path is straightforward: agents update what they know, with price corrections built in.",
      },
    ],
  },

  decisions: {
    heading: "Decisions",
    headingRest: "and their tradeoffs",
    lead: "Two design choices where the obvious answer wasn't the one I chose. Each has a real cost. I'd rather name them than hide them.",
    cards: [
      {
        num: "02",
        title: "The filter bar stayed on every page",
        chose:
          "One filter bar appears on every public page: six named fields plus a reference number. Three produce useful results — condition, 35 features and six distances sit in Advanced Search behind one click.",
        alternative: "Cut filters down to the ten most used. Simpler for first-time visitors and cleaner design.",
        cost: "Forty filters are hidden behind Advanced Search — most buyers never open it. This means the advantage doesn't stand out. Also, the filter bar on every page takes up space and pushes listings lower on mobile screens.",
      },
      {
        num: "03",
        title: "The agency became the face, not the agent",
        chose:
          "Every listing displays the agency name. Every agency has a profile page showing all their properties. Buyers see which agency listed each property, and contacting an agency includes the agency name.",
        alternative:
          "Put the individual agent on the listing instead of the agency — their digital card, their name, their phone. Buyers deal with a person, not a company, so it is warmer and it converts.",
        cost: "New agencies look weak next to established ones. A new agency with 3 listings appears on the same page as an agency with 50 listings. Currently, I sort by update date, but this doesn't fully solve the problem.",
      },
    ],
  },

  process: {
    heading: "How a month",
    headingRest: "was enough",
    lead: "Not by working faster. By deciding design rules in week one — rules that applied to every screen, so I didn't re-decide them later. And by reviewing the build myself while changes were still cheap.",
    columns: [
      {
        tag: "Week 1",
        title: "Decide once",
        items: ["Type scale, colour, spacing", "The listing card", "Both audiences' starting pages"],
      },
      {
        tag: "Week 2-4",
        title: "Build on it",
        items: [
          "User flow diagrams",
          "Design screen, for both audiences",
          "Component library in Figma",
          "Empty results and missing-data states",
        ],
      },
      {
        tag: "In parallel",
        title: "Check it held",
        items: ["Design QA on the built site", "Fixes back into the system"],
      },
    ],
  },

  testNext: {
    heading: "What I would",
    headingRest: "test next",
    lead: "Two tests, ordered by impact. I prioritize by how much a wrong answer would cost, not by how easy they are to run. Each test targets a specific design decision on this page.",
    cards: [
      {
        label: "Does the extra click hurt?",
        body: "Serious buyers searching for something specific may never open Advanced Search. If they can't find what they need, decision 02 was wrong and the filter set should be higher on the page.",
      },
      {
        label: "Do agents finish the form?",
        body: "Track completion by stage in the add-property flow. The stage where agents abandon most reveals where grouping is wrong, and grouping is the cheapest thing to fix on this list.",
      },
    ],
  },
};
