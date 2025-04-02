import React, { useState, useEffect } from "react";

const Assignments = ({ initialView }) => {
  const [activeView, setActiveView] = useState(initialView || "solo");

  // Update view when initialView prop changes (from navigation commands)
  useEffect(() => {
    if (initialView) {
      setActiveView(initialView);
    }
  }, [initialView]);

  const toggleView = (view) => {
    setActiveView(view);
  };

  // Common shared requirements to be displayed in both views
  const SharedRequirements = () => (
    <div className="shared-requirements">
      <div className="requirement-group">
        <h4>Active Contribution</h4>
        <ul className="terminal-list">
          <li>Regular attendance and participation in class discussions</li>
          <li>Demonstrated engagement with assigned readings and games</li>
          <li>
            Thoughtful contributions in collective analyses and discussions
          </li>
        </ul>
      </div>

      <div className="requirement-group">
        <h4>Course Evaluations</h4>
        <ul className="terminal-list">
          <li>
            Pre-term survey: Getting to know you and your gaming background
          </li>
          <li>
            Mid-term survey: Feedback on learning progress and your feelings so
            far
          </li>
          <li>Final survey: Course reflection and instructor feedback</li>
        </ul>
      </div>
    </div>
  );

  // Solo Path content
  const SoloPath = () => (
    <div className="path">
      <div className="assignment">
        <h4>Game Log</h4>
        <div className="assignment-details">
          <p className="assignment-description">
            Format Options (Choose 1 only):
          </p>
          <ul className="terminal-list">
            <li>Written: 150-250 word blog entries</li>
            <li>Video: 1-2 minute video essays</li>
          </ul>

          <p className="assignment-description">Submission Schedule:</p>
          <ul className="terminal-list">
            <li>Entry 1: Due Week 3 (Friday April 18)</li>
            <li>Entry 2: Due Week 6 (Friday May 9)</li>
            <li>Entry 3: Due Week 9 (Friday May 30)</li>
          </ul>

          <p className="assignment-description">Requirements:</p>
          <ul className="terminal-list">
            <li>Document your gaming expeditions and generate questions</li>
            <li>
              Connect gameplay experiences to course readings and discussions
            </li>
            <li>Include meaningful visual evidence (screenshots/footage)</li>
          </ul>
        </div>
      </div>

      <div className="assignment">
        <h4>Gamer Portfolio (Due Finals Week, Tuesday June 10)</h4>
        <div className="assignment-details">
          <ul className="terminal-list">
            <li>Revise your three game logs into a cohesive portfolio</li>
            <li>Add a 200-word introduction (or 1-2 minute video intro)</li>
            <li>Reflect on your evolution as a thoughtful player</li>
            <li>Discuss how your understanding of games has evolved</li>
            <li>Identify key assumptions challenged and perspectives gained</li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Multiplayer Path content
  const MultiplayerPath = () => (
    <div className="path">
      <div className="assignment">
        <h4>Group Moodboarding</h4>
        <div className="assignment-details">
          <p className="assignment-description">Team Formation:</p>
          <ul className="terminal-list">
            <li>Groups of 3-5 players</li>
          </ul>

          <p className="assignment-description">Submission Schedule:</p>
          <ul className="terminal-list">
            <li>Team 1: Present Week 4 in class</li>
            <li>Team 2: Present Week 6 in class</li>
            <li>Team 3: Present Week 8 in class</li>
          </ul>

          <p className="assignment-description">Content Requirements:</p>
          <ul className="terminal-list">
            <li>Screenshots, diagrams, artwork</li>
            <li>Concept maps, theoretical connections</li>
            <li>Short written reflections</li>
            <li>Media clips, reference networks</li>
          </ul>

          <p className="assignment-description">Presentation Format:</p>
          <ul className="terminal-list">
            <li>5-minute informal presentation</li>
            <li>5-minute follow-up questions and discussion</li>
          </ul>
        </div>
      </div>

      <div className="assignment">
        <h4>
          Final Presentation (Present Week 9/10 in class; Due Finals Week,
          Tuesday June 10)
        </h4>
        <div className="assignment-details">
          <p className="assignment-description">Format:</p>
          <ul className="terminal-list">
            <li>4-6 minute group presentation</li>
            <li>1-3 minute Q&A session</li>
          </ul>

          <p className="assignment-description">Components:</p>
          <ul className="terminal-list">
            <li>Live gameplay demonstration (optional)</li>
            <li>Interactive audience elements</li>
            <li>Original creative content</li>
            <li>Multimedia integration</li>
          </ul>

          <p>Note: Submit all materials after the week of presentation</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <p className="terminal-title">~/course/assignments</p>
        <div className="terminal-buttons">
          <div className="terminal-button button-red"></div>
          <div className="terminal-button button-amber"></div>
          <div className="terminal-button button-green"></div>
        </div>
      </div>
      <div className="terminal-body">
        <h2 className="section-title">Assignment Break Down</h2>

        {/* Retro toggle */}
        <div className="retro-toggle-container">
          <div className="retro-toggle">
            <span
              className={`toggle-option ${
                activeView === "solo" ? "active" : ""
              }`}
              onClick={() => toggleView("solo")}
              role="button"
              tabIndex="0"
              aria-label="View Solo Player Path"
            >
              <span className="toggle-icon">[◉]</span> SOLO
            </span>
            <span className="toggle-separator">|</span>
            <span
              className={`toggle-option ${
                activeView === "multiplayer" ? "active" : ""
              }`}
              onClick={() => toggleView("multiplayer")}
              role="button"
              tabIndex="0"
              aria-label="View Multiplayer Path"
            >
              <span className="toggle-icon">[◉◉]</span> MULTI
            </span>
          </div>
        </div>

        {/* Dynamic path heading */}
        <h3 className="path-heading">
          {activeView === "solo" ? "Solo Player Path" : "Multiplayer Path"}
        </h3>

        <div className="assignment-content">
          <SharedRequirements />

          {activeView === "solo" ? (
            <>
              <SoloPath />
              <div className="assessment">
                <h4>Assessment Break Down</h4>
                <ul className="terminal-list">
                  <li>60% Active Contribution</li>
                  <li>20% Game Logging</li>
                  <li>10% Gamer Portfolio</li>
                  <li>10% Course Evaluations</li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <MultiplayerPath />
              <div className="assessment">
                <h4>Assessment Break Down</h4>
                <ul className="terminal-list">
                  <li>60% Active Contribution</li>
                  <li>20% Group Moodboarding</li>
                  <li>10% Final Presentation</li>
                  <li>10% Course Evaluations</li>
                </ul>
              </div>
            </>
          )}

          <p className="grading-note">&ge;73% = Pass, &lt;73% = No Pass</p>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
