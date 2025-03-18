import React from "react";

const Nav = ({ setActiveSection }) => {
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
            className="nav-item"
            onClick={() => setActiveSection("course-info")}
          >
            <span className="nav-prefix">[01]</span> Course Info
          </div>
          <div
            className="nav-item"
            onClick={() => setActiveSection("weekly-schedule")}
          >
            <span className="nav-prefix">[02]</span> Weekly Schedule
          </div>
          <div
            className="nav-item"
            onClick={() => setActiveSection("assignments")}
          >
            <span className="nav-prefix">[03]</span> Assignments
          </div>
          <div
            className="nav-item"
            onClick={() => setActiveSection("resources")}
          >
            <span className="nav-prefix">[04]</span> Resources
          </div>
        </div>

        <div className="terminal-cmd">
          <p className="cmd-history">Type /help for available commands</p>
          <div className="cmd-input">
            <span>$</span>
            <input type="text" placeholder="Enter command..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
