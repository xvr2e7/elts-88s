import { useState } from "react";
import "./styles/terminal.css";
import TerminalNav from "./components/Nav";
import CourseInfo from "./components/CourseInfo";
import WeeklySchedule from "./components/WeeklySchedule";
import Assignments from "./components/Assignments";
import Resources from "./components/Resources";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [activeSection, setActiveSection] = useState("course-info");

  return (
    <ThemeProvider>
      <div className="container">
        {/* Theme toggle positioned absolutely */}
        <ThemeToggle />

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
            <h1>
              The Questions Concerning Video Game
              <span className="cursor"></span>
            </h1>
            <div className="course-meta">
              <span className="meta-tag">Spring 2025</span>
              <span className="meta-tag">Instructor: Ziyan Xie</span>
              <span className="meta-tag">Thursday 4:00 – 4:50 pm</span>
              <span className="meta-tag">Kaufman 101</span>
            </div>
          </div>
        </div>

        <div className="syllabus-layout">
          <div className="nav-column">
            <TerminalNav setActiveSection={setActiveSection} />
          </div>
          <div className="content-column">
            {activeSection === "course-info" && <CourseInfo />}
            {activeSection === "weekly-schedule" && <WeeklySchedule />}
            {activeSection === "assignments" && <Assignments />}
            {activeSection === "resources" && <Resources />}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
