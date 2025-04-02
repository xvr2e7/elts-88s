import React, { useState } from "react";

const Nav = ({ setActiveSection, setTargetWeek, setAssignmentView }) => {
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState([""]);
  const [activeItem, setActiveItem] = useState("course-info");

  const handleCommandSubmit = (e) => {
    e.preventDefault();

    let response = "";
    const cmd = command.trim().toLowerCase();

    // Check for week navigation command
    const weekMatch = cmd.match(/^\/week([1-9]|10)$/);
    if (weekMatch) {
      const weekNumber = parseInt(weekMatch[1], 10);
      setActiveSection("weekly-schedule");
      setActiveItem("weekly-schedule");
      setTargetWeek(weekNumber);
      response = `Navigated to Week ${weekNumber}`;
    } else if (cmd === "/help") {
      response =
        "Try: /info, /schedule, /assignments, /resources, /week[1-10], /solo, /multi, /clear";
    } else if (cmd === "/info") {
      setActiveSection("course-info");
      setActiveItem("course-info");
      response = "Navigated to Course Info";
    } else if (cmd === "/schedule") {
      setActiveSection("weekly-schedule");
      setActiveItem("weekly-schedule");
      response =
        "Navigated to Weekly Schedule \n Try /week[x] to navigate to a specific week";
    } else if (cmd === "/assignments") {
      setActiveSection("assignments");
      setActiveItem("assignments");
      response = "Navigated to Assignments";
    } else if (cmd === "/solo") {
      setActiveSection("assignments");
      setActiveItem("assignments");
      setAssignmentView("solo");
      response = "Navigated to Solo Player Assignments";
    } else if (cmd === "/multi") {
      setActiveSection("assignments");
      setActiveItem("assignments");
      setAssignmentView("multiplayer");
      response = "Navigated to Multiplayer Assignments";
    } else if (cmd === "/resources") {
      setActiveSection("resources");
      setActiveItem("resources");
      response = "Navigated to Resources";
    } else if (cmd === "/clear") {
      setCommandHistory([]);
      setCommand("");
      return;
    } else if (cmd !== "") {
      response = `Command not found: ${cmd}`;
    }

    if (response) {
      setCommandHistory((prev) => [...prev, `$ ${cmd}`, response]);
    }

    setCommand("");
  };

  const handleItemClick = (section) => {
    setActiveSection(section);
    setActiveItem(section);
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <p className="terminal-title">~/navigation</p>
        <div className="terminal-buttons">
          <div className="terminal-button button-red"></div>
          <div className="terminal-button button-amber"></div>
          <div className="terminal-button button-green"></div>
        </div>
      </div>
      <div className="terminal-body">
        <div className="nav-items">
          <div
            className={`nav-item ${
              activeItem === "course-info" ? "active" : ""
            }`}
            onClick={() => handleItemClick("course-info")}
          >
            <span className="nav-prefix">[01]</span> Course Info
          </div>
          <div
            className={`nav-item ${
              activeItem === "weekly-schedule" ? "active" : ""
            }`}
            onClick={() => handleItemClick("weekly-schedule")}
          >
            <span className="nav-prefix">[02]</span> Weekly Schedule
          </div>
          <div
            className={`nav-item ${
              activeItem === "assignments" ? "active" : ""
            }`}
            onClick={() => handleItemClick("assignments")}
          >
            <span className="nav-prefix">[03]</span> Assignments
          </div>
          <div
            className={`nav-item ${activeItem === "resources" ? "active" : ""}`}
            onClick={() => handleItemClick("resources")}
          >
            <span className="nav-prefix">[04]</span> Resources
          </div>
        </div>

        <div className="terminal-cmd">
          <div className="cmd-history">
            {commandHistory.map((line, index) => (
              <p
                key={index}
                className={line.startsWith("$") ? "cmd-input-line" : ""}
              >
                {line}
              </p>
            ))}
          </div>
          <form onSubmit={handleCommandSubmit} className="cmd-input">
            <span>$</span>
            <input
              type="text"
              placeholder="/help"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nav;
