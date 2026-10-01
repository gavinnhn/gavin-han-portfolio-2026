export const studies = {
  meep: {
    id: "meep",
    exe: "MEEP.EXE",
    title: "MEEP",
    dek: "A blind-box media discovery app. Built to break the mainstream algorithm loop and put genuinely niche media in front of people who would never have found it.",
    meta: [
      { label: "ROLE", value: "UX Design & Research" },
      { label: "TIMELINE", value: "Spring 2026" },
      { label: "TEAM", value: "Midori Dragics\nJoy Bae\nDominic Diaz\nStephanie Jing\nGenevie Vu" },
      { label: "ORG", value: "Project Teams · Design @ UCI" },
    ],
    prototype: "https://www.figma.com/proto/6cckdl0jXVeOjzhXPWCtOj",
    prev: { id: "cosi", label: "<  COSI" },
    next: { id: "memento", label: "MEMENTO  >" },
    product: [
      {
        heading: "Home/Unbox your recommendation",
        story:
          "Borrowing the trending blind-box format from POP MART, users open a crate to get the niche media that they can rate, share, and save. Each recommendation becomes its own small event instead of just another thumbnail in a grid, using the dopamine hit of unboxing to improve user retention.",
        video: "/video/meep-unbox-web.mp4",
      },
      {
        heading: "Social Feed",
        story:
          "Discovery works better secondhand. Use the social feed to discover your friend’s activities, what they have been unboxing, rating, and returning to. Our media recommendation travels between people on top of our recommendations.",
        video: "/video/meep-feed-web.mp4",
      },
      {
        heading: "Travel Log",
        story:
          "The travel log collects all the recommendations the user has kept and sorts them by the user’s preferences so they can find them again easily.",
        video: "/video/meep-travel-web.mp4",
      },
      {
        heading: "Profile page",
        story:
          "In the user’s profile, they can customize their MEEP to stand out, access their settings, and watch a MEEP rewind on their current media consumption.",
        video: "/video/meep-profile-web.mp4",
      },
    ],
    blocks: [
      { type: "divider", label: "CONTEXT" },
      {
        type: "prose",
        html: "The prompt of the project was: interacting with the unfamiliar. To venture into the unknown, our team wanted to build an app that solves repetitive algorithms and biased mainstream media and finds more niche media, a very common theme in today’s social media world for young Gen-Zers.",
      },
      { type: "divider", label: "DEMO" },
      { type: "demo", src: "/studies/meep-screen.mp4", bg: "/studies/meep-demo-bg.png", layout: "meep", rate: 0.75, caption: "Full demo" },
      { type: "divider", label: "THE PROBLEM" },
      {
        type: "problem",
        html: "Young adults want to explore new media, but current discovery platforms keep them in algorithmic comfort zones. Unfamiliar content feels risky due to decision paralysis, fear of wasting time, and a lack of trusted social guidance.",
        hmw: "How might we help young adult media consumers take confident first steps into unfamiliar content (across all media types) in a way that feels intentional, trustworthy, and low-pressure rather than algorithmic or overwhelming?",
        alien: "/studies/meep-alien.png",
      },
      { type: "divider", label: "RESEARCH" },
      { type: "prose", html: "We surveyed 122 people. Out of them," },
      {
        type: "pies",
        items: [
          { pct: 62, html: "<strong>62%</strong> of users look for new recommendations at least weekly" },
          { pct: 54, html: "<strong>54%</strong> of users experience decision paralysis when browsing for new media" },
          { pct: 64, html: "<strong>64%</strong> of users feel stuck in an algorithm loop" },
        ],
      },
      { type: "prose", html: "Users want discovery but lack a guided way to find it" },
      {
        type: "prose",
        html: "Through interviewing 6 participants, we were able to identify three major takeaways.",
      },
      {
        type: "cards",
        items: [
          {
            icon: "clock",
            html: "<strong>fear of wasting time keeps users stuck in their media comfort zone</strong>",
            count: "4 of 6 participants",
          },
          {
            icon: "friends",
            html: "<strong>friends are the most reliable path to discovering unfamiliar media</strong>",
            count: "5 of 6 participants",
          },
          {
            icon: "loop",
            html: "<strong>Algorithms create the illusion of choice without real authentic discovery</strong>",
            count: "6 of 6 participants",
          },
        ],
      },
      {
        type: "prose",
        html: "So we created MEEP! An app that introduces new media outside of mainstream algorithms to users through 4 main functions: Unbox-A-Rec, Social Feed, Travel Log, and Profile + Rewind",
      },
      { type: "figure", src: "/studies/meep-solution.png", caption: "MEEP" },
      {
        type: "prose",
        html: "To think about how we can stand out amongst other media recommendation apps, we created a competitive analysis",
      },
      { type: "figure", src: "/studies/meep-comp.png", caption: "Competitive analysis" },
      { type: "divider", label: "DESIGN DECISIONS" },
      {
        type: "prose",
        html: "One of mankind’s greatest mysteries is the deep, dark space, and as a big video game nerd myself, I combined those thoughts and introduced MEEP (Media Exploration Extraterrestrial Pal) to the team!",
      },
      { type: "figure", src: "/studies/meep-meet.png", caption: "Meet Meep" },
      {
        type: "prose",
        html: "The team loved it, so we went with a space-themed approach for the entire app.",
      },
      { type: "figure", src: "/studies/meep-brand.png", caption: "Branding guide" },
      {
        type: "prose",
        html: "I wanted to take advantage of the blind box craze stemming from Labubus and Sonny Angels, so I suggested unboxing new media as a feature, which makes the process of getting media recs more engaging.",
      },
      { type: "figure", src: "/process/meep-ideas.png", caption: "Unbox a recommendation" },
      { type: "prose", html: "Through three rounds of usability testing, here were our findings:" },
      {
        type: "pair",
        items: [
          {
            title: "What users <strong>LOVED:</strong>",
            lines: [
              "The capsule unboxing moment",
              "Social feed and seeing friends’ activities",
              "Exploration concept and MEEP",
            ],
          },
          {
            title: "Room for <strong>improvement:</strong>",
            lines: [
              "Onboarding needed more context and guidance",
              "Social reactions were a bit unintuitive",
              "Spaceship purpose was unclear",
            ],
          },
        ],
      },
      {
        type: "prose",
        html: "Given the feedback, we strengthened the onboarding process with MEEP as a guide, and (very painfully) scrapped our beloved spaceship concept, which acts as a part of the user profile, and users collect digital furniture and appliances to decorate the spaceship as they opened more crates. Testers reported that the gamified approach felt like too much commitment, the opposite of what we wanted to create, which is a stress-free, minimum commitment experience.",
      },
      { type: "figure", src: "/studies/meep-grave.png", caption: "Spaceship graveyard" },
      { type: "figure", src: "/studies/meep-profile.png", caption: "Profile, before and after" },
      {
        type: "prose",
        html: "We also did extra A/B testing with our navbar. We initially had a floating, green liquid-glass navbar, but we settled for black because the empty spaces the green navbar left didn’t feel right.",
      },
      { type: "figure", src: "/studies/meep-nav.png", caption: "Navbar A/B testing" },
      {
        type: "prose",
        html: "Here are some more early iterations of MEEP, side by side with what they ended up becoming.",
      },
      { type: "figure", src: "/studies/meep-lofi.png", caption: "Lo-fi to hi-fi" },
      { type: "product" },
    ],
  },
  memento: {
    id: "memento",
    exe: "MEMENTO.EXE",
    title: "Memento",
    dek: "An AI memory-reliving app. Ideated, tested, prototyped, and pitched in 48 hours.",
    meta: [
      { label: "ROLE", value: "Product design" },
      { label: "TIMELINE", value: "48 hours · Apr 24-26" },
      { label: "TEAM", value: "Armin Mohammadi\nMegan Sun" },
      { label: "ORG", value: "Design-A-Thon · Design @ UCI" },
    ],
    prototype: "https://www.figma.com/proto/FA8950AGL1srxAoV0BWkuN",
    prev: { id: "meep", label: "<  MEEP" },
    next: { id: "cosi", label: "COSI  >" },
    product: [
      {
        heading: "Creating a memento",
        story:
          "Memento sources from images, voice recordings, songs, location, and detailed stories from users to recreate a precious moment in their life using AI. The more fragments the user can bring, the more closely the Memento will resemble the actual experience.",
        video: "/video/memento-create-web.mp4",
      },
      {
        heading: "Viewing memento",
        story:
          "Users can view their Memento as a standard landscape video on their devices, but they can also utilize the AR compatibility with headsets like Google Cardboard to fully immerse into the experience and get a lively 360° view of their precious memory.",
        video: "/video/memento-view-web.mp4",
      },
      {
        heading: "Community gallery",
        story:
          "We wanted to recreate the feeling of digging through your memories, searching for specific pieces in an infinite void. That is why we created our community gallery to be free-scrolling. Users can view and relive other people’s favorite memories from their point of view.",
        video: "/video/memento-gallery-web.mp4",
      },
    ],
    blocks: [
      { type: "divider", label: "CONTEXT" },
      {
        type: "prose",
        html: "This was my first design-a-thon! The prompt was: How might we design solutions that celebrate culture and memory, strengthen connections between people, and create meaningful experiences that feel personal and shared? This prompt felt very personal and emotional to my team, so we dared to dream big with our concept. We had 48 hours to ideate, interview users, send out surveys, wireframe & prototype, and present to judges. For the first time in a high-stress situation like this, there was a pressure and thrill unlike anything I’ve ever felt.",
      },
      { type: "divider", label: "DEMO" },
      { type: "demo", src: "/studies/memento-screen.mp4", bg: "/studies/memento-demo-bg.png", layout: "memento", caption: "Full demo" },
      { type: "divider", label: "THE PROBLEM" },
      {
        type: "problem",
        html: "Everyone carries memories worth sharing—moments that shaped us, places we've lived, experiences that belong to the people we love. Over time, memories fade into fragments of feelings, sounds, and faces, making them hard to hold onto and even harder to pass on. No matter how many photos we take or words we write, nothing quite captures what it felt like to actually be there.",
        hmw: "How might we build an app that gets as close to reliving the moment as possible?",
      },
      { type: "divider", label: "RESEARCH" },
      {
        type: "prose",
        html: "We surveyed 84 lovely humans, and the result speaks for itself.",
      },
      {
        type: "pies",
        items: [
          { pct: 90.2, html: "<strong>90.2%</strong> were frustrated when unable to recall meaningful memories" },
          {
            pct: 78.6,
            html: "<strong>78.6%</strong> wish they could experience the memories of their loved ones that they weren’t present for",
          },
        ],
      },
      {
        type: "prose",
        html: "We also asked in our survey: <strong>What memory would you want to relive more vividly?</strong> The answers were full of precious moments that carry a lot of emotional weight, and our team was moved as we read all of them. Reading the responses also brought us back to the simpler times, and we realized that it is within human nature to try to hold our dearest memories close.",
      },
      { type: "figure", src: "/studies/mem-survey.png", caption: "Survey answers" },
      {
        type: "prose",
        html: "The most common pain point about their favorite memories we received was that <strong>“photos and videos can’t capture the emotions I felt”</strong>, so…",
      },
      { type: "divider", label: "DESIGN DECISIONS" },
      {
        type: "prose",
        html: "We wanted to create an app that transforms scattered fragments of photos, voice recordings, stories, and places into immersive memory experiences using AI, which you can step into and share across communities.",
      },
      {
        type: "prose",
        html: "We placed a heavy emphasis on “fragments” of memories, so we built the visual language around those fragments. Our initial idea was inspired by Persona 5 design style, as we wanted to use a scrapbook aesthetic for our app, but it felt too chaotic, so we decided to pivot to uneven edges for boxes, representing the fragments of memories.",
      },
      { type: "figure", src: "/studies/mem-fragments.png", caption: "Fragments" },
      {
        type: "prose",
        html: "As AI collects and generates the Memento for our user, it would take a second for the end product to finish. I created the “Down the memory lane” animation because I wanted the waiting process to be immersive, as users can see their fragments float past their POV. This was a personal design choice because I usually get bored and annoyed staring at the typical circular spinning animation while things load.",
      },
      {
        type: "lane",
        still: "/studies/mem-lane-frame.png",
        video: "/video/memento-lane-screen.mp4",
        caption: "Down the memory lane",
      },
      {
        type: "prose",
        html: "Originally, we wanted to recreate the experience of looking through a scrapbook of memories, but it felt messy and hard to navigate. We changed it to a free-scrolling gallery for more immersion, almost like users are looking around in 360°, similar to the VR-adaptable experiences our mementos bring to users.",
      },
      {
        type: "compare",
        left: "/studies/gallery-lo.png",
        right: "/studies/gallery-hi.png",
        caption: "Community gallery",
      },
      { type: "product" },
      { type: "divider", label: "REFLECTION" },
      {
        type: "prose",
        html: "Our main challenge was that the lack of time to do more intensive research forced us to design a lot based on intuition and personal experiences. We were also not able to test out as many design iterations as we would’ve liked. I really loved our concept of this app, and even though Memento do not seem like a fully viable product that we would be happy to push out to the market at the moment, with the current pace of AI development, we will definitely go back and create this experience, for real. Overall, I am super proud of this project, and I thoroughly enjoyed this journey :3",
      },
    ],
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
    prev: { id: "memento", label: "<  MEMENTO" },
    next: { id: "meep", label: "MEEP  >" },
    product: [
      {
        heading: "Roommate agreement page",
        story:
          "Encourage civil discussion to set boundaries ahead of time, and sign the Roommate Agreement. Everyone states their expectations, acknowledges their responsibilities, and accepts them.",
        video: "/video/cosi-agreement-web.mp4",
      },
      {
        heading: "Task page",
        story:
          "Task list + notification system, prioritized chronologically. Users can easily add tasks, claim unassigned ones to step up for the household, encouraging accountability.",
        video: "/video/cosi-tasks-web.mp4",
      },
      {
        heading: "Shared calendar page",
        story:
          "Easy heads-up for using the shared space ahead of time, and viewing upcoming scheduling conflicts. Addresses the guests issue and makes communications easier.",
        video: "/video/cosi-calendar-web.mp4",
      },
    ],
    blocks: [
      { type: "divider", label: "CONTEXT" },
      {
        type: "prose",
        html: "First time using Figma! It was super exciting to put together this app piece by piece. I went from following workshop instructions to understand basic tools, to learning about the importance of surveying and user interviews to make products and design decisions that actually appeal to users, to independently and collaboratively taking on these actions, to finally building out this product 0 -> 1.",
      },
      { type: "divider", label: "DEMO" },
      { type: "demo", src: "/studies/cosi-screen.mp4", bg: "/studies/cosi-demo-bg.png", layout: "cosi", rate: 0.75, caption: "Full demo" },
      { type: "divider", label: "THE PROBLEM" },
      {
        type: "problem",
        html: "It's hard to confront people while being respectful, especially when its people you live with. To avoid the confrontation, some people end up silencing themselves, and the resentment builds up, leading to stress and discomfort. So…",
        hmw: "How might we encourage people to be better roommates by opening channels of communication, visualizing responsibilities, and emphasizing individual impact?",
      },
      { type: "divider", label: "RESEARCH" },
      {
        type: "prose",
        html: "Through 42 survey responses and 6 interviews, we identified 3 major pain points:",
      },
      {
        type: "cards",
        items: [
          {
            icon: "home",
            html: "The most commonly reported issues are regarding <strong>cleaning, noise, and guests</strong>.",
          },
          {
            icon: "chat",
            html: "<strong>50%</strong> of respondents found it difficult to confront their roommates and communicate issues.",
          },
          {
            icon: "check",
            html: "5 out of 6 interviewees brought up a <strong>lack of accountability</strong> as a major issue among roommates",
          },
        ],
      },
      {
        type: "prose",
        html: "This is what makes our app stand out amongst existing co-living apps",
      },
      { type: "figure", src: "/studies/cosi-comp.png", caption: "Competitive analysis" },
      { type: "divider", label: "DESIGN DECISIONS" },
      {
        type: "prose",
        html: "To address these pain points, we designed this product so that our app",
      },
      {
        type: "cards",
        items: [
          { icon: "home", html: "Provides a solution to address cleaning, noise and guests" },
          { icon: "chat", html: "Helps make communication between roommates frictionless" },
          { icon: "check", html: "Enforces accountability amongst each other, respectfully" },
        ],
      },
      {
        type: "prose",
        html: "This is our final user flow before fleshing out the app (scroll and drag to look around)",
      },
      { type: "flow", src: "/studies/cosi-flow.png", caption: "User flow" },
      { type: "prose", html: "According to the style guide" },
      { type: "figure", src: "/studies/cosi-style.png", caption: "Style guide" },
      {
        type: "prose",
        html: "From user testing, we were informed that the onboarding process could be a bit tedious, so we created Bob the Blob",
      },
      { type: "figure", src: "/studies/cosi-bob.png", caption: "Bob the Blob" },
      {
        type: "prose",
        html: "Bob the Blob walks users through the tutorial as an onboarding pal. The simple, cute design creates familiarity and comfort.",
      },
      {
        type: "prose",
        html: "Users also reported that our initial app iteration reminded them of Flo 😅, so we switched it up to make the app feel more homey. Inspired by a warm, orange, overhead lamp glow.",
      },
      { type: "figure", src: "/studies/cosi-ab.png", caption: "A/B testing" },
      {
        type: "prose",
        html: "Lo-fi => Hi-fi process for one of our key features: Tasks page",
      },
      { type: "figure", src: "/studies/cosi-tasks.png", caption: "Tasks page, lo-fi to hi-fi" },
      { type: "product" },
      { type: "divider", label: "REFLECTION" },
      {
        type: "pair",
        items: [
          {
            title: "<strong>Challenges:</strong>",
            lines: [
              "Getting caught up in making an app rather than understanding the problem",
              "Figuring out branding that made the app feel comfortable and encouraging to use",
              "Reducing the cognitive load of lengthy processes like onboarding and agreement creation",
            ],
          },
          {
            title: "<strong>Takeaways:</strong>",
            lines: [
              "When you feel like you’ve lost sight of the original problem, go back to user research",
              "It’s never too late to make improvements. If it’s a big change, it’ll probably be a big improvement",
              "The design process is iterative; you don’t need to follow every single step in one set order",
            ],
          },
        ],
      },
    ],
  },
};
