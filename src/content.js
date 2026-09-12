export const studies = {
  meep: {
    id: "meep",
    exe: "MEEP.EXE",
    title: "MEEP",
    dek: "A blind-box media discovery app — built to break the recommendation loop and put genuinely niche media in front of people who would never have found it.",
    meta: [
      { label: "ROLE", value: "Product design" },
      { label: "TIMELINE", value: "Spring 2026" },
      { label: "TEAM", value: "Midori Dragics\nJoy Bae\nDominic Diaz\nStephanie Jing\nGenevie Vu" },
      { label: "ORG", value: "Project Teams · Design @ UCI" },
    ],
    prototype: "https://www.figma.com/proto/6cckdl0jXVeOjzhXPWCtOj",
    context:
      "Project Teams handed us a prompt: interacting with the unfamiliar. What kept surfacing in our conversations was how little of what we watch is actually chosen — recommendation algorithms repeat themselves, mainstream media is weighted toward whatever is already popular, and the genuinely niche stuff stays buried under it. So we set out to build an app that hands you something you would never have found on your own. The mascot came from somewhere less academic: Teamfight Tactics Set 17 and its Meeple trait, which is where MEEP got both its name and its personality.",
    hero: "/video/hero-meep-web.mp4",
    product: [
      {
        heading: "Unbox your recommendation.",
        story:
          "The home screen does not hand you a feed. It hands you a crate. You open it, and inside is one piece of niche media picked for you — something to rate, save, or pass along to a friend. Borrowing the blind-box format meant the recommendation arrives as a small event instead of another thumbnail in a grid, and it gave people a reason to come back tomorrow and open the next one.",
        video: "/video/meep-unbox-web.mp4",
      },
      {
        heading: "A social feed of what is actually on people’s palette.",
        story:
          "Discovery works better secondhand. The feed shows what friends have been unboxing, rating, and returning to, so taste travels between people instead of coming down from an algorithm. It also solves the cold-start problem quietly — if your own crate misses, someone else’s hit is one scroll away.",
        video: "/video/meep-feed-web.mp4",
      },
      {
        heading: "A travel log for everything worth keeping.",
        story:
          "Saving something should not mean losing it. The travel log collects every recommendation a user kept and sorts it so they can actually find it again — the shelf you build as you explore. It is also what makes the unboxing loop compound instead of evaporate: a month of crates becomes a library with a shape to it.",
        video: "/video/meep-travel-web.mp4",
      },
      {
        heading: "A profile you customize, and a Rewind you look forward to.",
        story:
          "The profile is where the app gets personal. Users dress up their own MEEP, then watch a Meep Rewind that reflects their consumption back at them. It turns a month of small unboxings into something a person can look at and recognize as their own taste — and something they want to show someone else.",
        video: "/video/meep-profile-web.mp4",
      },
    ],
    decisions: [
      {
        heading: "If the prompt is the unfamiliar, the world should be too.",
        story:
          "We built the whole app around space exploration — the unfamiliar made literal. Deep purples and indigos, a starfield behind everything, media arriving like something retrieved from far away. It gave every screen a consistent reason to look the way it did, and it kept the interface from reading as one more streaming service.",
        board: "/process/meep-world.png",
      },
      {
        heading: "Meep carries the onboarding.",
        story:
          "Instead of explaining the app in paragraphs, we let the character do it. Meep walks new users through their first unboxing, which keeps the tone playful and lands better with the younger audience we were designing for. Committing to a mascot also gave us something worth customizing later — which is what made the profile page earn its place.",
        board: "/process/meep-onboard.png",
      },
      {
        heading: "Two ideas borrowed from outside the category.",
        story:
          "I pushed for unboxing after thinking about blind boxes: the anticipation is the product, not the object inside. Meep Rewind came from Spotify Wrapped, for the same reason it works there — people want their taste summarized back to them, and a summary is a reason to share. Neither idea came from looking at other media apps, which is exactly why they gave MEEP a shape of its own.",
        board: "/process/meep-ideas.png",
      },
    ],
    prev: { id: "cosi", label: "<  COSI" },
    next: { id: "memento", label: "MEMENTO  >" },
  },
  memento: {
    id: "memento",
    exe: "MEMENTO.EXE",
    title: "Memento",
    dek: "An AI memory-reliving app — ideated, tested, prototyped, and pitched in 48 hours.",
    meta: [
      { label: "ROLE", value: "Product design" },
      { label: "TIMELINE", value: "48 hours · Apr 24-26" },
      { label: "TEAM", value: "Armin Mohammadi\nMegan Sun" },
      { label: "ORG", value: "Design-A-Thon · Design @ UCI" },
    ],
    prototype: "https://www.figma.com/proto/FA8950AGL1srxAoV0BWkuN",
    context:
      "After Cosi, I decided to sign up for a designathon. The prompt: how might we design solutions that celebrate culture and memory, strengthen connections between people, and create meaningful experiences that feel personal and shared? We had 48 hours to ideate, interview users, send out surveys, wireframe and prototype, and present to judges. It was my first time in a high-stress situation like that — a pressure and thrill unlike anything I'd ever felt.",
    hero: "/video/hero-memento-web.mp4",
    product: [
      {
        heading: "Creating a Memento — AI rebuilds your moment.",
        story:
          "Memento sources from your images, voice recordings, songs, location, and the detailed story you tell it — then uses AI to recreate that precious moment in your life.",
        video: "/video/memento-create-web.mp4",
      },
      {
        heading: "Viewing a Memento — step inside the memory.",
        story:
          "AR compatibility plus a Google Cardboard-style headset lets you fully immerse in the experience instead of just looking at it.",
        video: "/video/memento-view-web.mp4",
      },
      {
        heading: "Community gallery — share the ones worth keeping.",
        story: "Share your favorite Mementos with the community and wander through everyone else's.",
        video: "/video/memento-gallery-web.mp4",
      },
    ],
    decisions: [
      {
        heading: "Fragments, not scrapbooks.",
        story:
          "We built the visual language around fragments of memories. Inspired by Persona 5, we first tried a scrapbook aesthetic — but it felt too chaotic, so we pivoted to uneven edges on boxes, each one representing a fragment of a memory.",
        board: "/process/mem-fragments.png",
      },
      {
        heading: "Down the memory lane.",
        story:
          "Waiting for the AI to generate became part of the experience: a 'down the memory lane' animation keeps you immersed while your Memento is built.",
        board: "/process/mem-lane.png",
      },
      {
        heading: "A gallery you wander, not scroll.",
        story: "The community gallery free-scrolls to reflect an actual gallery and deepen the immersion.",
        board: "/process/mem-gallery.png",
      },
    ],
    prev: { id: "meep", label: "<  MEEP" },
    next: { id: "cosi", label: "COSI  >" },
  },
  cosi: {
    id: "cosi",
    exe: "COSI.EXE",
    title: "Cosi",
    dek: "A roommate app that opens the conversations nobody wants to start. My first time ever using Figma!",
    meta: [
      { label: "ROLE", value: "UX Design & Research" },
      { label: "TIMELINE", value: "Jan 2026 - Mar 2026" },
      { label: "TEAM", value: "Julianna Lin\nEren Kim\nJenica Maristela\nEmily Guo\nMillicent Mei" },
      { label: "Org", value: "Project Teams · Design @ UCI" },
    ],
    prototype: "https://www.figma.com/proto/V0JEi7N4dzIKmYgQ62L3Kw",
    context:
      "It was genuinely exciting to put an app together piece by piece. I went from following workshop instructions to learn the basic tools, to understanding why surveying and interviews matter for making products people actually want, to running the research independently and collaboratively — 80+ survey responses, 4 user interviews, and 3 usability testing sessions on the way to building this product from scratch.",
    problem: {
      heading: "Confrontation is hardest with the people you live with.",
      story:
        "To stay respectful, a lot of people just choose to silence themselves, and the resentment quickly builds into stress and discomfort. Texts, timetables, and chore lists all eventually fail. The core problems: uneven responsibility, awkwardness around confrontation, and informal systems that don't stick. So, how might we encourage people to be better roommates by opening channels of communication, visualizing responsibilities, and emphasizing individual impact?",
    },
    hero: "/video/hero-cosi-web.mp4",
    product: [
      {
        heading: "Roommate Agreement: set boundaries before they're tested.",
        story:
          "Cosi starts with a discussion, not a fight: roommates talk expectations ahead of time and sign a shared Roommate Agreement, establishing a clear boundary for everyone to follow and respect. ",
        video: "/video/cosi-agreement-web.mp4",
      },
      {
        heading: "Tasks: see the work, claim your part.",
        story:
          "A simple, organized task list with notifications, prioritized chronologically. Users can add tasks in seconds, and claim unassigned ones to take one for the team.",
        video: "/video/cosi-tasks-web.mp4",
      },
      {
        heading: "Shared Calendar: a heads-up instead of a surprise.",
        story:
          "Schedule guests, events, dinners, etc. Give an easy heads-up before using the shared space, and view scheduling conflicts before they become arguments.",
        video: "/video/cosi-calendar-web.mp4",
      },
    ],
    decisions: [
      {
        heading: "Warm like an overhead lamp.",
        story:
          "Light orange, black, and green for a warm, home-y feeling. The main app background is an orange-to-white gradient that reads like overhead lamp light, and Poppins is the main font for a friendly, modern voice.",
        board: "/process/cosi-warm.png",
      },
      {
        heading: "Bob the Blob, the onboarding buddy.",
        story:
          "Our onboarding is quite long, so Bob the Blob walks users through the tutorial. A cute guide builds familiarity and comfort right at the moment the app asks the most of its users.",
        board: "/process/cosi-bob.png",
      },
    ],
    prev: { id: "memento", label: "<  MEMENTO" },
    next: { id: "meep", label: "MEEP  >" },
  },
};
