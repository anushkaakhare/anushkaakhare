export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "5-ui-ux-lessons-learned-second-year-designer",
    title: "5 UI/UX Lessons I’ve Learned in My Second Year as a Designer",
    excerpt:
      "In my second year of UI/UX, I realised that the things that improve my designs the most are usually the simple, practical habits.",
    category: "UI/ UX Design",
    author: "Anushka Akhare",
    date: "20 Oct, 2026",
    readTime: "4 min read",
    image: "/blog1.jpeg",
    tags: [
      "UIUXDesign",
      "DesignJourney",
      "LearningInPublic",
      "UIDesign",
      "UXDesign",
      "JuniorDesigner",
      "DesignTips",
    ],
    content: [
      "In my second year of UI/UX, I realised that the things that improve my designs the most are usually the simple, practical habits.",
      "1. Start with real user pain points: When I actually take time to understand what the user is stuck on—not what I think they’re stuck on—the whole flow becomes easier to design. It saves so much back-and-forth later.",
      "2. Show the value clearly: I’ve learned that users don’t hunt for information. If the value isn’t obvious in the first few seconds, they’ll leave. Clear headlines, simple buttons, and straightforward copy help more than fancy UI ever will.",
      "3. Design is an asset, not decoration: I used to focus on “making it look nice”, but now I focus on “making it work well and look trustworthy.” Spacing, visual hierarchy, and color purpose have a bigger impact than adding more elements.",
      "4. Keep things human: People connect with things that feel real. I’ve started using more genuine storytelling, natural images, and human-centered flows instead of overly polished or AI-perfect visuals. It makes the whole experience feel warmer.",
      "5. Use urgency, but in an honest way: A little nudge like limited seats or a timer can help users take action—but only when it’s genuinely helpful. I’ve learned that ethical UX builds long-term trust.",
      "And honestly… the biggest lesson? Good spacing, a simple type scale, and a clean flow can fix almost any messy screen. Basics matter more than we think. Still learning, still experimenting, still growing and enjoying every tiny improvement ✨",
    ],
  },
  {
    id: 2,
    slug: "navratri-colours-ui-ux-design-systems",
    title: "Nine Nights, Nine Colours: Lessons in UI/UX & Design Systems",
    excerpt:
      "In UI/UX, colour does more than make a screen look beautiful. It helps users understand what matters, recognise patterns, and know what to do next.",
    category: "Design System",
    author: "Anushka Akhare",
    date: "15 Oct, 2026",
    readTime: "3 min read",
    image: "/blog2.jpg",
    tags: [
      "Navratri",
      "UIDesign",
      "UXDesign",
      "DesignSystems",
      "Accessibility",
      "ProductDesign",
    ],
    content: [
      "Nine nights. Nine colours. One lesson for UI/UX designers. 🪔✨",
      "Navratri starts today, and it got me thinking about something we use in UI design every day: colour. In UI/UX, colour does more than make a screen look beautiful. It helps users understand what matters, recognise patterns, and know what to do next.",
      "If I were building a Navratri event app, I'd focus on four things:",
      "1. Colour system: Reusable colour tokens, not random colours picked for every screen.",
      "2. Accessibility: Enough contrast for text and buttons, even with a vibrant festive palette.",
      "3. Consistency: Familiar navigation and key actions, even when the visuals change.",
      "4. Context: Festive colours that set the mood without making the interface harder to use.",
      "A design system isn't just about making screens look consistent. It's about making the experience feel consistent, too. We can change the colours for the celebration without changing the clarity users depend on.",
      "Happy Navratri to everyone celebrating! 💃 Designers, if you were designing a Navratri-themed app, would you go bold and festive, or keep the UI minimal with subtle festive details?",
    ],
  },
  {
    id: 3,
    slug: "generative-ui-and-the-future-of-screens",
    title: "Generative UI: Designing What Users Actually Need, Not More Screens",
    excerpt:
      "What if our job as UI/UX designers isn't to design more screens, but to figure out which screens users actually need?",
    category: "Generative UI",
    author: "Anushka Akhare",
    date: "08 Oct, 2026",
    readTime: "4 min read",
    image: "/blog3.png",
    tags: [
      "UXDesign",
      "GenerativeUI",
      "ProductDesign",
      "AIUX",
      "UIUX",
      "UserExperience",
    ],
    content: [
      "What if our job as UI/UX designers isn't to design more screens, but to figure out which screens users actually need? I've been thinking about this while exploring how AI could change UI design.",
      "Imagine planning a trip. Instead of jumping between five sections of an app, you simply explain what you need, and the interface gives you an editable itinerary, a budget breakdown, and a map of suggested places. One request. Everything you need to get started. That's where Generative UI gets interesting to me.",
      "But generating interfaces isn't the hardest part. The real challenge is knowing when an interface should adapt and when it should stay familiar.",
      "A personalised travel planner? Users will love it. A payment screen? They want it predictable. Nobody wants to figure out a new checkout every time they pay.",
      "As designers, I think we need to focus on three things:",
      "1. Flexibility: Let the interface adapt to the user's needs dynamically.",
      "2. Familiarity: Keep important high-stakes interactions consistent and predictable.",
      "3. Control: Make sure users can understand, edit, and undo what AI does at any point.",
      "The goal isn't to make every interface AI-powered. It's to make every interaction easier, clearer, and more useful. I'd rather design an interface that knows when NOT to change than one that changes just because it can.",
      "What do you think? Should interfaces adapt to every user, or are there experiences where consistency matters more than personalisation?",
    ],
  },
  {
    id: 4,
    slug: "ux-for-ai-agents-designing-trust-and-control",
    title: "The Next UX Challenge: Designing Control & Trust in the Era of AI Agents",
    excerpt:
      "The next UX challenge isn't designing better screens. It's designing better control and trust between humans and autonomous systems.",
    category: "AI & UX",
    author: "Anushka Akhare",
    date: "01 Oct, 2026",
    readTime: "4 min read",
    image: "/blog4.png",
    tags: [
      "UXDesign",
      "UIUX",
      "ProductDesign",
      "AIUX",
      "AIAgents",
      "UserExperience",
    ],
    content: [
      "The next UX challenge isn't designing better screens. It's designing better control.",
      "AI is rapidly moving from “Here's an answer” to “I'll do it for you.” An AI agent can now plan tasks, use tools, make decisions, and complete multiple steps on a user's behalf.",
      "Imagine it books your flight, picks the seat, and pays. You only see the confirmation email. That raises a fundamental UX question: What happens when the user isn't doing every step anymore?",
      "As designers, we need to think about five critical pillars:",
      "1. Transparency: What is the AI doing right now at every stage of the workflow?",
      "2. Explainability: Why did it make this decision over other available options?",
      "3. Pre-Action Review: Can the user review the action before it commits and executes?",
      "4. Intervention: Can the user stop, pause, or undo what the AI does at any time?",
      "5. Error Recovery: What happens when the AI gets something wrong or encounters edge cases?",
      "This changes the role of UX completely. We're not only designing interfaces anymore—we're designing trust between humans and intelligent systems.",
      "One of the most interesting shifts for me right now is moving from click-by-click workflows to goal-based experiences. The interface may become simpler on the surface, but the UX problem becomes much more complex.",
      "What do you think: will AI make interfaces simpler, or just move the complexity somewhere else?",
    ],
  },
  {
    id: 5,
    slug: "power-of-microinteractions-payment-feedback",
    title: "A ₹1,499 Purchase: How a Single Button State Transforms User Trust",
    excerpt:
      "Good UX isn't always about adding more features. Sometimes it's about giving users the right feedback at the right moment.",
    category: "Microinteractions",
    author: "Anushka Akhare",
    date: "24 Sep, 2026",
    readTime: "3 min read",
    image: "/blog5.png",
    tags: [
      "UIUX",
      "UXDesign",
      "ProductDesign",
      "UserExperience",
      "DesignThinking",
      "Microinteractions",
      "FigmaDesign",
      "UXTips",
    ],
    content: [
      "A ₹1,499 purchase. One button. Two very different experiences. 👇",
      "Before: User taps “Pay Now.” Nothing happens. They tap again. And again. Now they're wondering: “Did it work? Will I be charged twice?”",
      "After: User taps “Pay Now.” The button changes to “Processing…” with a spinner and a short message. They relax. They wait. They trust the product.",
      "Same screen. Same price. One tiny change.",
      "Here's what this small feedback detail achieves:",
      "1. Action Confirmation: Confirms immediately that the action was received.",
      "2. Duplicate Prevention: Prevents repeated clicks and accidental duplicate payments.",
      "3. Anxiety Reduction: Reduces anxiety at the most sensitive moment of the checkout flow.",
      "4. Trust Building: Reinforces confidence and security in the product.",
      "Good UX isn't always about adding more features. Sometimes it's about giving users the right feedback at the right moment: Interaction → Feedback → Confidence.",
      "What's one small UI detail you've seen that made a big difference in an experience?",
    ],
  },
];
