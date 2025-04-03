import React, { useState, useEffect } from "react";

const WeeklySchedule = ({ targetWeek }) => {
  const [viewMode, setViewMode] = useState("full"); // "full" or "carousel"
  const [currentWeek, setCurrentWeek] = useState(0);

  // Effect to handle targetWeek changes
  useEffect(() => {
    if (targetWeek) {
      setCurrentWeek(targetWeek - 1);

      // If we're in full view, scroll to the correct week
      if (viewMode === "full") {
        setTimeout(() => {
          const element = document.getElementById(`week-${targetWeek}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [targetWeek, viewMode]);

  const weeks = [
    {
      number: 1,
      title: "Play! – Can we play …?",
      content: [
        "Introductions.",
        "History of video games. History of ludology and game studies.",
      ],
      homework: [
        {
          prefix: "Read:",
          title:
            'Huizinga, "Nature and Significance of Play" in Homo Ludens (1938)',
        },
        {
          prefix: "Play: ",
          title: "Zork I: The Great Underground Empire (1980)",
          url: "https://archive.org/details/msdos_Zork_I_-_The_Great_Underground_Empire_1980",
        },
      ],
      moreResources: [
        {
          title:
            'Aarseth, Espen, and Gordon Calleja. "The Word Game: The Ontology of an Indefinable Object".',
          url: "https://www.researchgate.net/publication/348558275_The_Word_Game_The_ontology_of_an_indefinable_object",
        },
        {
          title: 'Bogost, Ian. "Videogames are a Mess".',
          url: "https://bogost.com/writing/videogames_are_a_mess/",
        },
        {
          title:
            "Caillois, Roger, and Meyer Barash (2001). Man, Play, and Games.",
        },
        {
          title:
            "Payne, Matthew Thomas, and Nina B. Huntemann (2019) How to Play Video Games.",
          url: "http://www.jstor.org/stable/j.ctv12fw8tn",
        },
        {
          title: "Pias, Claus (2017). Computer Game Worlds.",
          url: "https://press.uchicago.edu/ucp/books/book/distributed/C/bo27470707.html",
        },
        {
          title: "Internet Archive's Classic Game Collection",
          url: "https://archive.org/details/classicpcgames",
        },
      ],
    },
    {
      number: 2,
      title: "Textual Play – Can we play with (only) text?",
      content: [
        "Circa-1980 teletype interface. Vector display. Distant playing.",
        "Text-based adventure game. Aspect ratio. Simulated depth. Decision space.",
      ],
      homework: [
        {
          prefix: "View:",
          title: "Farocki, Serious Games I-IV (2009-2010)",
          url: "https://www.harunfarocki.de/installations/2010s/2010/serious-games-i-watson-is-down.html",
        },
        {
          prefix: "Watch: ",
          title: "Dancin - GTA V Military Crew",
          url: "https://www.youtube.com/watch?v=chhlAV01_y4",
        },
        {
          prefix: "View:",
          title: "Gerrard, Exercise (Djibouti) (2012)",
          url: "https://www.johngerrard.net/exercise-djibouti.html",
        },
      ],
      moreResources: [
        {
          title: "Emily Short's blog about interactive fiction",
          url: "https://emshort.blog/",
        },
        {
          title: "'A Dark Room' (2013)",
          url: "https://adarkroom.doublespeakgames.com/",
        },
        {
          title: "'Colossal Cave Adventure' (1976)",
          url: "https://www.amc.com/blogs/colossal-cave-adventure-the-text-game-that-started-it-all--4618",
        },
        {
          title: "Twine (try if you want to create your own text adventures)",
          url: "https://twinery.org/",
        },
      ],
    },
    {
      number: 3,
      title: "Performative Play – Can we play with dancing?",
      content: [
        "Military simulation. Choreographed Violence. Hypermasculinity.",
        "Gesture interface. Ludic body. Heterogeneity.",
      ],
      due: ["Solo Path: Game Log Entry 1"],
      homework: [
        {
          prefix: "Read: ",
          title:
            'Brecht, "A Short Organum for the Theatre" in Brecht on Theatre (1966)',
        },
        {
          prefix: "Play: ",
          title: "Firewatch (2016)",
          url: "https://store.steampowered.com/app/383870/Firewatch/",
        },
      ],
      moreResources: [],
    },
    {
      number: 4,
      title: "Embodied Play – Can we play with walking?",
      content: [
        "Procedural Poetics. Defamiliarization.",
        "Walking simulator. Walkie-talkie. Feminized Labor.",
      ],
      due: ["Multiplayer Path: Moodboard Presentation 1"],
      homework: [
        {
          prefix: "Read: ",
          title: 'Aarseth, "Doors and Perception" (2007)',
        },
        {
          prefix: "Play: ",
          title: "Doors (2021)",
          url: "https://doors.gua-le-ni.com/",
        },
        {
          prefix: "View:",
          title: 'UCLA LENS, "Grand Theft Eco" (2024)',
          url: "https://www.ioes.ucla.edu/project/grand-theft-eco/",
        },
      ],
      moreResources: [
        // {
        //   title: "'Dear Esther' (2012)",
        //   url: "https://store.steampowered.com/app/203810/Dear_Esther/",
        // },
        // {
        //   title: "'Gone Home' (2013)",
        //   url: "https://store.steampowered.com/app/232430/Gone_Home/",
        // },
        // {
        //   title: "'Proteus' (2013)",
        //   url: "https://twistedtree.itch.io/proteus",
        // },
        // {
        //   title: "'What Remains of Edith Finch'(2017)",
        //   url: "https://store.steampowered.com/app/501300/What_Remains_of_Edith_Finch/",
        // },
      ],
    },
    {
      number: 5,
      title: "Virtual Play – Can we play with reality?",
      content: [
        "Fiction vs. Simulation. Object representation. Virtual materiality.",
        "Technological enframing. Machinima. Mixed reality overlay.",
      ],
      homework: [
        {
          prefix: "Read: ",
          title: 'Adorno, "Commitment" (1962)',
        },
        {
          prefix: "View: ",
          title: "Brand, Spacewar! in Rolling Stone (1972)",
        },
      ],
      moreResources: [
        // {
        //   title: "'The Stanley Parable' (2013)",
        //   url: "https://store.steampowered.com/app/221910/The_Stanley_Parable/",
        // },
      ],
    },
    {
      number: 6,
      title: "Resistive Play – Can we play without text?",
      content: [
        "Aesthetic negation. Visual protest. Counter-cultural resistance.",
        "Autonomous form. Hacker culture. Alternative spaces.",
      ],
      due: [
        "Solo Path: Game Log Entry 2",
        "Multiplayer Path: Moodboard Presentation 2",
      ],
      homework: [
        {
          prefix: "Reading:",
          title: 'Deleuze, "Postscript on the Societies of Control" (1992)',
        },
        {
          prefix: "Play:",
          title: "Cookie Clicker (2013)",
          url: "https://cookieclicker.com/",
        },
      ],
      moreResources: [
        // {
        //   title: "'Papers, Please' (2013) or 'This War of Mine' (2014)",
        //   url: "https://store.steampowered.com/app/239030/Papers_Please/",
        // },
        // {
        //   title: "Galloway, 'Gaming: Essays on Algorithmic Culture'",
        //   url: "https://www.upress.umn.edu/book-division/books/gaming",
        // },
      ],
    },
    {
      number: 7,
      title: "Dividual Play – Can we play without any player?",
      content: [
        "Machinic modulation. Automated protocol. Dividual play.",
        "Idle/Self-playing games. Computational spectatorship.",
      ],
      homework: [
        {
          prefix: "Read:",
          title:
            'von Uexküll, "A Stroll Through the Worlds of Animals and Men" (1934)',
        },
        {
          prefix: "Play:",
          title: "Journey (2012).",
          url: "https://store.steampowered.com/app/638230/Journey/",
        },
        {
          prefix: "Watch:",
          title: "Chen's GDC Talk – Designing Journey (2013)",
          url: "https://archive.org/details/GDC2013Chen",
        },
      ],
      moreResources: [
        // {
        //   title: "'Progress Quest' or 'Kittens Game' (idle games)",
        //   url: "https://kittensgame.com/web/",
        // },
        // {
        //   title: "Sianne Ngai on 'Stuplimity'",
        //   url: "https://content.ucpress.edu/chapters/10810.ch01.pdf",
        // },
        // {
        //   title: "Conway's Game of Life simulations",
        //   url: "https://conwaylife.com/",
        // },
        // {
        //   title: "AI art generators and computational creativity",
        //   url: "https://makeavideo.studio/",
        // },
      ],
    },
    {
      number: 8,
      title: "Semiotic Play – Can we play without any enemy?",
      content: [
        "Interspecies semiotics. Shared Umwelt. Cross-world communication.",
        "Friendship. Non-verbal cooperation. Emergent companionship.",
      ],
      due: ["Multiplayer Path: Moodboard Presentation 3"],
      homework: [
        {
          prefix: "Read:",
          title: 'Virilio, "Speed and Politics: An Essay on Dromology" (1986)',
        },
        {
          prefix: "Play:",
          title: "Getting Over It with Bennett Foddy (2017)",
          url: "https://store.steampowered.com/app/240720/Getting_Over_It_with_Bennett_Foddy/",
        },
      ],
      moreResources: [
        // {
        //   title: "'Abzû' (2016) or 'Flower' (2009)",
        //   url: "https://store.steampowered.com/app/384190/ABZU/",
        // },
        // {
        //   title: "Jane Bennett, 'Vibrant Matter' (excerpts)",
        //   url: "https://www.dukeupress.edu/vibrant-matter",
        // },
        // {
        //   title: "'Sky: Children of the Light'",
        //   url: "https://thatgamecompany.com/sky/",
        // },
      ],
    },
    {
      number: 9,
      title: "Automatic Play – Can we play without thinking?",
      content: [
        "Dromological violence. Muscle memory. Technical mastery.",
        "Tool-assisted speedrun. Frame-perfect execution. Cheating.",
      ],
      due: [
        "Solo Path: Game Log Entry 3",
        "Multiplayer Path: Final Presentation (Part 1)",
      ],
      homework: [
        {
          prefix: "Read:",
          title: 'Heidegger, "The Question Concerning Technology" (1954)',
        },
      ],
      moreResources: [
        // {
        //   title: "GDQ (Games Done Quick) speedrun events",
        //   url: "https://gamesdonequick.com/",
        // },
        // {
        //   title: "'Super Hexagon' or other reflex-focused games",
        //   url: "https://store.steampowered.com/app/221640/Super_Hexagon/",
        // },
        // {
        //   title: "TAS (Tool-Assisted Speedrun) videos and communities",
        //   url: "https://tasvideos.org/",
        // },
      ],
    },
    {
      number: 10,
      title: "Infinite Play… – Can we play without dying?",
      content: [
        "Being-toward-death. Temporal recursion. Algorithmic finitude.",
        "Coda, and Farewell.",
      ],
      due: [
        "Multiplayer Path: Final Presentation (Part 2)",
        "Solo Path: Gamer Portfolio",
      ],
      moreResources: [
        // {
        //   title: "'Undertale' (2015) or 'Outer Wilds' (2019)",
        //   url: "https://store.steampowered.com/app/391540/Undertale/",
        // },
        // {
        //   title: "Carse, 'Finite and Infinite Games'",
        //   url: "https://www.simonandschuster.com/books/Finite-and-Infinite-Games/James-Carse/9781476731711",
        // },
        // {
        //   title: "'No Man's Sky'",
        //   url: "https://www.nomanssky.com/",
        // },
      ],
    },
  ];

  const nextWeek = () => {
    setCurrentWeek((prev) => (prev === weeks.length - 1 ? 0 : prev + 1));
  };

  const prevWeek = () => {
    setCurrentWeek((prev) => (prev === 0 ? weeks.length - 1 : prev - 1));
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "full" ? "carousel" : "full"));
  };

  const jumpToWeek = (weekNum) => {
    setCurrentWeek(weekNum - 1);
  };

  const renderWeekContent = (week) => (
    <div className="week-content">
      <div className="content-section">
        {week.content.map((item, index) => (
          <p key={index} className="content-item">
            {item}
          </p>
        ))}
      </div>

      {week.due && (
        <div className="due-section">
          <h4>Due this Week:</h4>
          <ul className="terminal-list">
            {week.due.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {week.homework && (
        <div className="homework-section">
          <h4>For Week {week.number < 10 ? week.number + 1 : "Final"}:</h4>
          <ul className="terminal-list">
            {week.homework.map((item, index) => (
              <li key={index}>
                <span className="homework-prefix">{item.prefix}</span>{" "}
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="homework-title"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {week.moreResources && (
        <div className="more-resources-section">
          <h4>More:</h4>
          <ul className="terminal-list resource-list">
            {week.moreResources.map((item, index) => (
              <li key={index}>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <p className="terminal-title">~/course/schedule</p>
        <div className="terminal-buttons">
          <div className="terminal-button button-red"></div>
          <div className="terminal-button button-amber"></div>
          <div className="terminal-button button-green"></div>
        </div>
      </div>
      <div className="terminal-body">
        <div className="view-mode-controls">
          <h2 className="section-title">Weekly Schedule</h2>
          <button
            className="view-toggle-button"
            onClick={toggleViewMode}
            title={
              viewMode === "full"
                ? "Switch to carousel view"
                : "Switch to full view"
            }
          >
            {viewMode === "full" ? "[⊞]" : "[≡]"}
          </button>
        </div>

        {viewMode === "carousel" ? (
          <div className="carousel-view">
            <div className="carousel-navigation">
              <button className="carousel-nav-btn" onClick={prevWeek}>
                [&lt;&lt;]
              </button>
              <div className="carousel-progress">
                <div className="week-quick-nav">
                  {weeks.map((week) => (
                    <span
                      key={week.number}
                      className={`week-nav-item ${
                        currentWeek + 1 === week.number ? "active" : ""
                      }`}
                      onClick={() => jumpToWeek(week.number)}
                    >
                      {week.number}
                    </span>
                  ))}
                </div>
              </div>
              <button className="carousel-nav-btn" onClick={nextWeek}>
                [&gt;&gt;]
              </button>
            </div>

            <div className="carousel-content">
              <div className="week-item carousel-week">
                <div className="week-header">
                  <span className="week-number">
                    Week {weeks[currentWeek].number}:
                  </span>
                  <span className="week-title">{weeks[currentWeek].title}</span>
                </div>
                {renderWeekContent(weeks[currentWeek])}
              </div>
            </div>
          </div>
        ) : (
          <div className="weeks-container">
            {weeks.map((week) => (
              <div
                id={`week-${week.number}`}
                key={week.number}
                className="week-item"
              >
                <div className="week-header">
                  <span className="week-number">Week {week.number}:</span>
                  <span className="week-title">{week.title}</span>
                </div>
                {renderWeekContent(week)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeeklySchedule;
