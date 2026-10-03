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
          "54% of people I surveyed felt decision paralysis when browsing, so a recommendation is one crate instead of another thumbnail in a grid. Borrowing the blind-box format from POP MART, someone opens a crate, then rates, shares, or saves it. The unboxing is there to make that recommendation feel like an event and to support retention.",
        video: "/video/meep-unbox-web.mp4",
      },
      {
        heading: "Social Feed",
        story:
          "5 of 6 interviewees said friends are the most reliable path into unfamiliar media. The feed shows what friends have unboxed, rated, and returned to, so recommendations travel from person to person alongside the ones the app already makes.",
        video: "/video/meep-feed-web.mp4",
      },
      {
        heading: "Travel Log",
        story:
          "The travel log collects the recommendations someone has kept and sorts them by preference, so the media they already chose is easy to find again.",
        video: "/video/meep-travel-web.mp4",
      },
      {
        heading: "Profile page",
        story:
          "Testers responded to the exploration concept and to MEEP, so the profile is where someone customizes their MEEP, opens settings, and watches a rewind of their current media consumption.",
        video: "/video/meep-profile-web.mp4",
      },
    ],
    blocks: [
      { type: "divider", label: "THE PROBLEM" },
      {
        type: "prose",
        html: "The prompt was: interacting with the unfamiliar. I wanted an app that gets past repetitive algorithms and biased mainstream media and finds more niche media, a very common theme in today’s social media world for young Gen-Zers.",
      },
      {
        type: "problem",
        html: "Young adults want to explore new media, but current discovery platforms keep them in algorithmic comfort zones. Unfamiliar content feels risky due to decision paralysis, fear of wasting time, and a lack of trusted social guidance.",
        hmw: "How might we help young adult media consumers take confident first steps into unfamiliar content (across all media types) in a way that feels intentional, trustworthy, and low-pressure rather than algorithmic or overwhelming?",
        alien: "/studies/meep-alien.png",
      },
      { type: "divider", label: "RESEARCH" },
      { type: "prose", html: "I surveyed 122 people. Of those people," },
      {
        type: "pies",
        items: [
          { pct: 62, html: "<strong>62%</strong> of users look for new recommendations at least weekly" },
          { pct: 54, html: "<strong>54%</strong> of users experience decision paralysis when browsing for new media" },
          { pct: 64, html: "<strong>64%</strong> of users feel stuck in an algorithm loop" },
        ],
      },
      { type: "prose", html: "Users want discovery, but they lack a guided way to find it." },
      {
        type: "prose",
        html: "I interviewed 6 participants and identified three major takeaways.",
      },
      {
        type: "cards",
        items: [
          {
            icon: "clock",
            html: "<strong>Fear of wasting time keeps users stuck in their media comfort zone</strong>",
            count: "4 of 6 participants",
          },
          {
            icon: "friends",
            html: "<strong>Friends are the most reliable path to discovering unfamiliar media</strong>",
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
        html: "To figure out how I could stand out among other media recommendation apps, I made a competitive analysis.",
      },
      { type: "figure", src: "/studies/meep-comp.png", caption: "Competitive analysis" },
      { type: "divider", label: "DIRECTION" },
      {
        type: "prose",
        html: "From that research I created MEEP, an app that introduces media outside mainstream algorithms through four functions: Unbox-A-Rec, Social Feed, Travel Log, and Profile + Rewind.",
      },
      {
        type: "gifs",
        srcs: [
          "/studies/meep-gif-1.gif",
          "/studies/meep-gif-3.gif",
          "/studies/meep-gif-4.gif",
          "/studies/meep-gif-2.gif",
        ],
        caption: "MEEP",
      },
      {
        type: "prose",
        html: "One of mankind’s greatest mysteries is the deep, dark space, and as a big video game nerd myself, I combined those thoughts and introduced MEEP (Media Exploration Extraterrestrial Pal) to the team!",
      },
      { type: "figure", src: "/studies/meep-meet.png", caption: "Meet Meep" },
      {
        type: "prose",
        html: "The team loved it, so I carried a space theme through the whole app.",
      },
      { type: "figure", src: "/studies/meep-brand.png", caption: "Branding guide" },
      {
        type: "prose",
        html: "I wanted to take advantage of the blind box craze stemming from Labubus and Sonny Angels, so I suggested unboxing new media as a feature, which makes the process of getting media recs more engaging.",
      },
      { type: "figure", src: "/process/meep-ideas.png", caption: "Unbox a recommendation" },
      { type: "divider", label: "ITERATION" },
      { type: "prose", html: "Through three rounds of usability testing, these were the findings:" },
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
        html: "Given the feedback, I strengthened onboarding with MEEP as a guide, and I scrapped the spaceship concept, which acted as part of the user profile. Users collected digital furniture and appliances to decorate the spaceship as they opened more crates. Testers reported that the gamified approach felt like too much commitment, the opposite of the stress-free, minimal-commitment experience I wanted.",
      },
      { type: "figure", src: "/studies/meep-grave.png", caption: "Spaceship graveyard" },
      { type: "figure", src: "/studies/meep-profile.png", caption: "Profile, before and after" },
      {
        type: "prose",
        html: "I also ran an A/B test on the navbar. I started with a floating green liquid-glass bar. I settled on black because the empty spaces around the green bar didn’t feel right.",
      },
      { type: "figure", src: "/studies/meep-nav.png", caption: "Navbar A/B testing" },
      {
        type: "prose",
        html: "These are early iterations of MEEP next to what they became.",
      },
      { type: "figure", src: "/studies/meep-lofi.png", caption: "Lo-fi to hi-fi" },
      { type: "product" },
      { type: "divider", label: "DEMO" },
      { type: "demo", src: "/studies/meep-screen.mp4", bg: "/studies/meep-demo-bg.png", layout: "meep", rate: 0.75, caption: "Full demo" },
      { type: "divider", label: "REFLECTION" },
      {
        type: "prose",
        html: "I would not bring the spaceship back. Testers read the furniture collection as a commitment, and the goal was a low-pressure first step. Onboarding still needed more guidance in testing, so the next thing I would test is whether MEEP-as-guide actually gets someone to a first unbox. Social reactions were still unintuitive, and that is the other open thread.",
      },
    ],
  },
  memento: {
    id: "memento",
    exe: "MEMENTO.EXE",
    title: "Memento",
    dek: "An AI memory-reliving app. Ideated, tested, prototyped, and pitched in 48 hours.",
    meta: [
      { label: "ROLE", value: "Product design" },
      { label: "TIMELINE", value: "48 hours · Apr 24–26, 2026" },
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
          "The most common pain point was that photos and videos can’t capture the emotion of a memory. Creating a memento pulls in images, voice recordings, songs, location, and a detailed story. The more fragments someone brings, the closer the result gets to the actual experience.",
        video: "/video/memento-create-web.mp4",
      },
      {
        heading: "Viewing memento",
        story:
          "The goal was to get as close as possible to being there again. A memento plays as a landscape video, and it can also run in AR on a headset like Google Cardboard, with a 360° view of the memory.",
        video: "/video/memento-view-web.mp4",
      },
      {
        heading: "Community gallery",
        story:
          "A scrapbook layout felt messy and hard to navigate, so the community gallery is free-scrolling, like looking around in 360°. Someone can move through other people’s memories the way a memento itself is meant to be experienced.",
        video: "/video/memento-gallery-web.mp4",
      },
    ],
    blocks: [
      { type: "divider", label: "THE PROBLEM" },
      {
        type: "prose",
        html: "The prompt was: How might we design solutions that celebrate culture and memory, strengthen connections between people, and create meaningful experiences that feel personal and shared?",
      },
      {
        type: "problem",
        html: "Everyone carries memories worth sharing—moments that shaped us, places we've lived, experiences that belong to the people we love. Over time, memories fade into fragments of feelings, sounds, and faces, making them hard to hold onto and even harder to pass on. No matter how many photos we take or words we write, nothing quite captures what it felt like to actually be there.",
        hmw: "How might we build an app that gets as close to reliving the moment as possible?",
      },
      { type: "divider", label: "RESEARCH" },
      {
        type: "prose",
        html: "I surveyed 84 people, and the results speak for themselves.",
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
        html: "I also asked: <strong>What memory would you want to relive more vividly?</strong> The answers were full of precious moments that carry a lot of emotional weight, and I was moved as I read all of them. Reading the responses also brought me back to simpler times, and I realized that it is human nature to try to hold our dearest memories close.",
      },
      { type: "figure", src: "/studies/mem-survey.png", caption: "Survey answers" },
      {
        type: "prose",
        html: "The most common pain point about favorite memories was that <strong>“photos and videos can’t capture the emotions I felt,”</strong> so the product had to collect more than a photo.",
      },
      { type: "divider", label: "DIRECTION" },
      {
        type: "prose",
        html: "I designed an app that turns scattered fragments of photos, voice recordings, stories, and places into immersive memory experiences using AI, which you can step into and share across communities.",
      },
      { type: "divider", label: "ITERATION" },
      {
        type: "prose",
        html: "I placed a heavy emphasis on “fragments” of memories, so I built the visual language around those fragments. My first idea was inspired by the Persona 5 design style. I wanted a scrapbook aesthetic, but it felt too chaotic, so I pivoted to uneven edges on the boxes, representing the fragments of memories.",
      },
      { type: "figure", src: "/studies/mem-fragments.png", caption: "Fragments" },
      {
        type: "prose",
        html: "As AI collects and generates the Memento, it takes a second for the end product to finish. I created the “Down memory lane” animation because I wanted the waiting to be immersive, with fragments floating past the user’s point of view. I usually get bored and annoyed staring at a circular spinning animation while things load.",
      },
      {
        type: "lane",
        still: "/studies/mem-lane-frame.png",
        video: "/video/memento-lane-screen.mp4",
        caption: "Down memory lane",
      },
      {
        type: "prose",
        html: "I originally wanted the feeling of looking through a scrapbook of memories, but it felt messy and hard to navigate. I changed it to a free-scrolling gallery for more immersion, almost like looking around in 360°, similar to the VR-adaptable experiences the mementos bring.",
      },
      {
        type: "compare",
        left: "/studies/gallery-lo.png",
        right: "/studies/gallery-hi.png",
        caption: "Community gallery",
      },
      { type: "product" },
      { type: "divider", label: "DEMO" },
      { type: "demo", src: "/studies/memento-screen.mp4", bg: "/studies/memento-demo-bg.png", layout: "memento", caption: "Full demo" },
      { type: "divider", label: "REFLECTION" },
      {
        type: "prose",
        html: "This was my first designathon. I had 48 hours to ideate, interview, survey, wireframe, prototype, and present, and the pressure and the thrill were unlike anything I had felt on a project. Limited research time pushed a lot of the design toward intuition and personal experience, and I could not test as many iterations as I wanted. Memento is not a product I would ship yet. The next test is whether a generated memento feels closer to the memory than a photo or a video. With the current pace of AI development, I would go back and run that test. I am proud of this project.",
      },
    ],
  },
  cosi: {
    id: "cosi",
    exe: "COSI.EXE",
    title: "Cosi",
    dek: "A roommate app that opens the conversations nobody wants to start.",
    meta: [
      { label: "ROLE", value: "UX Design & Research" },
      { label: "TIMELINE", value: "Jan 2026 - Mar 2026" },
      { label: "TEAM", value: "Julianna Lin\nEren Kim\nJenica Maristela\nEmily Guo\nMillicent Mei" },
      { label: "ORG", value: "Project Teams · Design @ UCI" },
    ],
    prototype: "https://www.figma.com/proto/V0JEi7N4dzIKmYgQ62L3Kw",
    prev: { id: "memento", label: "<  MEMENTO" },
    next: { id: "meep", label: "MEEP  >" },
    product: [
      {
        heading: "Roommate agreement page",
        story:
          "50% of survey respondents found it difficult to confront a roommate. The agreement page is where everyone states expectations, acknowledges responsibilities, and signs them, so the hard conversation happens before resentment builds.",
        video: "/video/cosi-agreement-web.mp4",
      },
      {
        heading: "Task page",
        story:
          "5 of 6 interviewees named a lack of accountability. The task list is chronological. Someone can add a task or claim an unassigned one, which is how the app asks a roommate to step up without a confrontation.",
        video: "/video/cosi-tasks-web.mp4",
      },
      {
        heading: "Shared calendar page",
        story:
          "Guests were one of the most commonly reported issues. The shared calendar shows upcoming conflicts and gives a heads-up before someone uses a shared space.",
        video: "/video/cosi-calendar-web.mp4",
      },
    ],
    blocks: [
      { type: "divider", label: "THE PROBLEM" },
      {
        type: "problem",
        html: "It's hard to confront people while being respectful, especially when it's people you live with. To avoid confrontation, some people end up silencing themselves, and the resentment builds up, leading to stress and discomfort. So…",
        hmw: "How might we encourage people to be better roommates by opening channels of communication, visualizing responsibilities, and emphasizing individual impact?",
      },
      { type: "divider", label: "RESEARCH" },
      {
        type: "prose",
        html: "Through 42 survey responses and 6 interviews, I identified 3 major pain points, and a screen for each:",
      },
      {
        type: "cards",
        items: [
          {
            icon: "home",
            html: "The most commonly reported issues concern <strong>cleaning, noise, and guests</strong>. The agreement is where those expectations get stated and signed, and the calendar flags shared-space conflicts, including guests.",
          },
          {
            icon: "chat",
            html: "<strong>50%</strong> of respondents found it difficult to confront their roommates and communicate issues. The agreement opens that conversation in the product instead of in the moment.",
          },
          {
            icon: "check",
            html: "5 out of 6 interviewees brought up a <strong>lack of accountability</strong> as a major issue among roommates. The task list lets someone add a task or claim an unassigned one.",
          },
        ],
      },
      {
        type: "prose",
        html: "This is what makes the app stand out among existing co-living apps.",
      },
      { type: "figure", src: "/studies/cosi-comp.png", caption: "Competitive analysis" },
      { type: "divider", label: "DIRECTION" },
      {
        type: "prose",
        html: "This is the final user flow before I fleshed out the app (scroll and drag to look around).",
      },
      { type: "flow", src: "/studies/cosi-flow.png", caption: "User flow" },
      { type: "divider", label: "ITERATION" },
      {
        type: "prose",
        html: "User testing showed that onboarding could be a bit tedious, so I created Bob the Blob to walk people through the tutorial. The simple, cute design is there to make those steps feel familiar and comfortable.",
      },
      { type: "figure", src: "/studies/cosi-bob.png", caption: "Bob the Blob" },
      {
        type: "prose",
        html: "Testers said the first visual direction reminded them of Flo, so I changed it to feel more like a home, using a warm orange overhead lamp. That palette is the style guide.",
      },
      { type: "figure", src: "/studies/cosi-style.png", caption: "Style guide" },
      { type: "figure", src: "/studies/cosi-ab.png", caption: "A/B testing" },
      {
        type: "prose",
        html: "The lo-fi to hi-fi process for the Tasks page, one of the key features.",
      },
      { type: "figure", src: "/studies/cosi-tasks.png", caption: "Tasks page, lo-fi to hi-fi" },
      { type: "product" },
      { type: "divider", label: "DEMO" },
      { type: "demo", src: "/studies/cosi-screen.mp4", bg: "/studies/cosi-demo-bg.png", layout: "cosi", rate: 0.75, caption: "Full demo" },
      { type: "divider", label: "REFLECTION" },
      {
        type: "prose",
        html: "This was my first time using Figma. I started from workshop instructions and ended by building the product from 0 to 1, including the surveys and interviews behind the decisions.",
      },
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
              "When the work drifted toward features, I went back to the survey and the interviews",
              "The lamp palette was a late change, and it was the one that made the app feel like a home",
              "Bob came out of testing, after onboarding already felt too long",
            ],
          },
        ],
      },
    ],
  },
};
