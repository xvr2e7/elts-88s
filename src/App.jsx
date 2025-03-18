import { useState } from "react";
import "./styles/terminal.css";
import TerminalNav from "./components/Nav";
import CourseInfo from "./components/CourseInfo";

function App() {
  const [activeSection, setActiveSection] = useState("course-info");

  return (
    <div className="container">
      <div className="terminal-window">
        <div className="terminal-header">
          <p className="terminal-title">~/syllabus</p>
          <div className="terminal-buttons">
            <div className="terminal-button button-red"></div>
            <div className="terminal-button button-amber"></div>
            <div className="terminal-button button-green"></div>
          </div>
        </div>
        <div className="terminal-body">
          <h1 style={{ color: "var(--terminal-light-grey)" }}>
            The Questions Concerning Video Game
            <span className="cursor"></span>
          </h1>
          <div className="course-meta">
            <span className="meta-tag">Spring 2025</span>
            <span className="meta-tag">Instructor: Ziyan Xie</span>
          </div>
        </div>
      </div>

      <div className="syllabus-layout">
        <div className="nav-column">
          <TerminalNav setActiveSection={setActiveSection} />
        </div>
        <div className="content-column">
          {activeSection === "course-info" && <CourseInfo />}
          {/* We'll add other sections later */}
        </div>
      </div>
    </div>
  );
}

export default App;
