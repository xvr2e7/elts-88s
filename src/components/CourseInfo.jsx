import React from "react";

const CourseInfo = () => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <p className="terminal-title">~/course/info</p>
        <div className="terminal-buttons">
          <div className="terminal-button button-red"></div>
          <div className="terminal-button button-amber"></div>
          <div className="terminal-button button-green"></div>
        </div>
      </div>
      <div className="terminal-body">
        <div className="section">
          <h2 className="section-title">Course Description</h2>
          <p>
            Video games shape meaning and modulate affect. We watch them. We
            read them. And above all, we play them. Drawing on European critical
            theory and philosophy&mdash;from Huizinga to Heidegger&mdash;this
            seminar examines video games as a space for transcultural dialogue
            and critical inquiry.
          </p>
          <p>
            Through a series of radical questions, we will strip away what is
            considered essential to gaming. Can we play with only text, as in
            early computer interfaces? Can simulated military training become
            dance? Can walking itself become resistance?
          </p>
          <p>
            Like any good game, this seminar rewards curiosity and
            experimentation. All materials and discussion will be in English. No
            prior gaming experience required—just bring your willingness to
            play, think, and question.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
