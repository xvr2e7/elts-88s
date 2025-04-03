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
      <div className="terminal-body info-content">
        <div className="section">
          <h2 className="section-title">Course Description</h2>
          <p>
            Video games shape meaning and modulate affect. We watch them. We
            read them. And above all, we play them. Drawing on theory and
            history of media, this seminar examines video games as a space for
            transcultural dialogue and critical inquiry.
          </p>
          <p>
            Through a series of radical questions, we will strip away what is
            considered essential to gaming. Can we play with only text, as in
            early computer interfaces? Can simulated military training become
            dance? Can walking itself become resistance? Week by week, we will
            move through different modes of play&mdash;textual, embodied,
            automated, silent&mdash;to uncover how digital media generates new
            possibilities for being and relating across boundaries.
          </p>
          <p>
            Moving from early text adventures to contemporary experiments, we
            will develop a critical vocabulary that bridges European theoretical
            traditions with emerging forms of digital play. We will explore how
            games transform conventional systems of storytelling and
            performance, enabling new forms of identity and embodiment that
            transcend cultural and linguistic borders.
          </p>
          <p>
            Like any good game, this seminar rewards curiosity and
            experimentation. All materials and discussion will be in English. No
            prior gaming experience required&mdash;just bring your willingness
            to play, think, and question.
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">Instructor Information</h2>
          <p>
            <strong>Ziyan Xie</strong> ({""}
            <a href="mailto:ziyanx@g.ucla.edu">Email</a>)
          </p>
          <p>
            <strong>Seminar Hour</strong>: Thursday 4:00 &mdash; 4:50 pm,
            Kaufman 101
          </p>
          <p>
            <strong>Office Hour</strong>: Tuesday 2:00 &mdash; 3:00 pm (Discord)
            or by appointment
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">Learning Outcomes</h2>
          <p>
            By the end of this seminar, fellow learners and players can expect
            to be able to:
          </p>
          <ul className="terminal-list">
            <li>
              Question fundamental assumptions about video games' relation to
              play, text, body, and death.
            </li>
            <li>
              Apply critical frameworks to interpret how games create meaning
              across cultural boundaries.
            </li>
            <li>
              Evaluate how digital gaming shape contemporary understandings of
              identity and embodiment.
            </li>
            <li>
              Develop original perspectives on digital gaming's role and
              influence in contemporary culture.
            </li>
            <li>
              Contribute critical insights to broader conversations about
              digital play and human experience.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">Other Policies</h2>

          <div className="policy">
            <h3>Late Work</h3>
            <p>
              I recognize that life can be challenging and unexpected events
              happen. If you anticipate difficulty meeting a deadline, please
              communicate with me in advance. We can work together to find a
              solution and ensure you stay on track with your learning journey.
              Good communication is key.
            </p>
          </div>

          <div className="policy">
            <h3>Academic Integrity</h3>
            <p>
              I want to create an environment where we can all learn and grow
              together while maintaining high academic standards. Here are some
              key points:
            </p>
            <ul className="terminal-list">
              <li>
                <strong>Collaboration vs. Individual Work</strong>: While this
                class encourages working together and discussing ideas, your
                submitted work must be original and show your own effort.
              </li>
              <li>
                <strong>Citations and Sources</strong>: When using others' ideas
                or work, please cite them appropriately.
              </li>
              <li>
                <strong>AI Tools and Technology</strong>: You may use AI tools
                like ChatGPT for brainstorming, getting feedback, or editing
                your own work. However, any content that is directly generated
                by AI must be clearly identified as such in your submissions.
              </li>
            </ul>
          </div>

          <div className="policy">
            <h3>Community Expectations</h3>
            <ul className="terminal-list">
              <li>
                <strong>Be Respectful</strong>: Expand your perspectives by
                actively listening to others when they speak.
              </li>
              <li>
                <strong>Be Engaged</strong>: Come to discussions prepared by
                playing games and/or completing readings.
              </li>
              <li>
                <strong>Be Playful</strong>: Let go of any utilitarian mindset
                before launching your game. Enjoy the game.
              </li>
              <li>
                <strong>Be Critical</strong>: Grapple with challenging ideas and
                thoughtfully consider them repeatedly.
              </li>
              <li>
                <strong>Be Creative</strong>: Embrace all possibilities while
                thinking. Explore every possible "what-if"s.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
