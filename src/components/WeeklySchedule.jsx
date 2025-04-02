import React, { useState } from "react";

const WeeklySchedule = () => {
  const [viewMode, setViewMode] = useState("full"); // "full" or "carousel"
  const [currentWeek, setCurrentWeek] = useState(0);

  const weeks = [
    {
      number: 1,
      title: "Play! – Can we play …?",
      content: [
        "Introductions.",
        "History of video games. History of ludology and game studies.",
      ],
      homework: [
        'Read: Huizinga, "Nature and Significance of Play" in Homo Ludens (1938)',
        "Play: Zork I: The Great Underground Empire (1980).",
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
        "Watch: Farocki, Serious Games I-IV (2009-2010)",
        "Watch: Dancin - GTA V Military Crew",
        "View: Gerrard, Exercise (Djibouti) (2012)",
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
        'Read: Brecht, "A Short Organum for the Theatre"',
        "Play: Firewatch (2016)",
      ],
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
        'Read: Aarseth, "Doors and Perception" (2007)',
        "Play: Doors (2021)",
        'View: UCLA LENS, "Grand Theft Eco" (2024)',
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
        'Read: Adorno, "Commitment" (1962)',
        "View: Brand, Spacewar! in Rolling Stone (1972)",
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
        'Reading: Deleuze, "Postscript on the Societies of Control" (1992)',
        "Play: Cookie Clicker (2013)",
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
        'Read: von Uexküll, "A Stroll Through the Worlds of Animals and Men" (1934)',
        "Play: Journey (2012).",
        "Watch: Chen's GDC Talk – Designing Journey (2013)",
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
        'Read: Virilio, "Speed and Politics: An Essay on Dromology" (1986).',
        "Play: Getting Over It with Bennett Foddy (2017)",
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
        'Read: Heidegger, "The Question Concerning Technology" (1954)',
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
              <li key={index}>{item}</li>
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
                [--]
              </button>
              <div className="carousel-progress">
                <span className="terminal-progress">
                  [{currentWeek + 1}/{weeks.length}]
                </span>
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
                [++]
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
              <div key={week.number} className="week-item">
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
