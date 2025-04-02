import React from "react";

const Resources = () => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <p className="terminal-title">~/course/resources</p>
        <div className="terminal-buttons">
          <div className="terminal-button button-red"></div>
          <div className="terminal-button button-amber"></div>
          <div className="terminal-button button-green"></div>
        </div>
      </div>
      <div className="terminal-body">
        <div className="section">
          <h2 className="section-title">Required Materials</h2>
          <p>
            <strong>Notes on accessing the materials:</strong> All readings can
            be accessed either through clickable links on the syllabus or
            downloadable files posted on the course website.
          </p>

          <div className="games-section">
            <h3>Individual Game Access:</h3>

            <div className="game-category">
              <h4>Free Browser-Based Games:</h4>
              <ul className="terminal-list">
                <li>
                  <a
                    href="https://archive.org/details/msdos_Zork_I_-_The_Great_Underground_Empire_1980"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zork I
                  </a>{" "}
                  (Web)
                </li>
                <li>
                  <a
                    href="https://cookieclicker.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cookie Clicker
                  </a>{" "}
                  (Web)
                </li>
                <li>
                  <a
                    href="https://doors.gua-le-ni.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Doors
                  </a>{" "}
                  (Web)
                </li>
                <li>
                  <a
                    href="https://www.decisionproblem.com/paperclips/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Universal Paper Clips
                  </a>{" "}
                  (Web)
                </li>
              </ul>
            </div>

            <div className="game-category">
              <h4>Steam Games (with estimated prices):</h4>
              <ul className="terminal-list">
                <li>
                  <a
                    href="https://store.steampowered.com/app/383870/Firewatch/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firewatch
                  </a>{" "}
                  ($18.50)
                </li>
                <li>
                  <a
                    href="https://store.steampowered.com/app/304430/INSIDE/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inside
                  </a>{" "}
                  ($18.50)
                </li>
                <li>
                  <a
                    href="https://store.steampowered.com/app/638230/Journey/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Journey
                  </a>{" "}
                  ($16.00)
                </li>
                <li>
                  <a
                    href="https://store.steampowered.com/app/240720/Getting_Over_It_with_Bennett_Foddy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Getting Over It with Bennett Foddy
                  </a>{" "}
                  ($8.50)
                </li>
              </ul>
            </div>

            <div className="cost-notes">
              <h4>Estimated Total Cost Range: $0 - $61.50</h4>
              <ul className="terminal-list">
                <li>
                  $0 minimum using free browser games and library resources
                </li>
                <li>
                  Up to $61.50 if purchasing all paid games on Steam (prices may
                  vary with sales)
                </li>
              </ul>
            </div>

            <div className="access-notes">
              <p>
                All Steam games are PC/Mac compatible and can be accessed
                through:
              </p>
              <ul className="terminal-list">
                <li>
                  Direct purchase on{" "}
                  <a
                    href="https://store.steampowered.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Steam
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.library.ucla.edu/collections/powell-community-collections"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Powell Community Collection
                  </a>{" "}
                  borrowing
                </li>
                <li>
                  Steam family sharing (limited to 6 students, first-come basis)
                </li>
                <li>
                  Console versions available for borrowing from{" "}
                  <a
                    href="https://www.library.ucla.edu/help/services-resources/audiovisual-media-playback-equipment/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Powell Library
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Dealing with the Mess</h2>
          <p>
            Video games are a huge mess. Below are just a few more resources to
            help you deal with it:
          </p>

          <div className="resources-section">
            <h3>General Resources</h3>
            <ul className="terminal-list resource-list">
              <li>
                <a
                  href="https://digra.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Digital Games Research Association (DiGRA)
                </a>
                : The leading international organization for game studies
                research.
              </li>
              <li>
                <a
                  href="https://dl.digra.org/index.php/dl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DiGRA Digital Library
                </a>
                : A comprehensive repository of game studies scholarship.
              </li>
              <li>
                <a
                  href="https://www.eai.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electronic Arts Intermix
                </a>
                : A major archive of experimental media art.
              </li>
              <li>
                <a
                  href="https://fdg2024.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Foundations of Digital Games (FDG)
                </a>
                : An academic conference focusing on technical innovations.
              </li>
              <li>
                <a
                  href="https://gdconf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Game Developers Conference (GDC)
                </a>
                : The game industry's premier professional event.
              </li>
              <li>
                <a
                  href="https://gamestudies.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Game Studies
                </a>
                : The first peer-reviewed journal dedicated to computer games
                research.
              </li>
            </ul>

            <h3>Thinking and Working with Games</h3>
            <ul className="terminal-list resource-list">
              <li>
                <a
                  href="https://www.critical-distance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Critical Distance
                </a>
                : Curates the best in games criticism and analysis.
              </li>
              <li>
                <a
                  href="https://www.firstpersonscholar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  First Person Scholar
                </a>
                : Academic blog focusing on game studies.
              </li>
              <li>
                <a
                  href="https://www.gamedeveloper.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Game Developer
                </a>
                : Leading industry news and analysis site.
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=BLq8esOv_Ew"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jacob Geller's Tips for Making Video Essays About Video Games
                </a>
                : Practical guide for creating video essays.
              </li>
              <li>
                <a
                  href="https://www.rockpapershotgun.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rock Paper Shotgun
                </a>
                : In-depth games journalism and criticism.
              </li>
              <li>
                <a
                  href="https://www.playthepast.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play the Past
                </a>
                : Explores historical gaming and history in games.
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">University Resources</h2>
          <p>UCLA has a multitude of resources available to all students.</p>

          <div className="university-resources">
            <ul className="terminal-list resource-list">
              <li>
                <a
                  href="https://www.aap.ucla.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Academic Advancement Program (AAP)
                </a>
              </li>
              <li>
                <a
                  href="http://www.brc.ucla.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bruin Resource Center
                </a>
              </li>
              <li>
                <a
                  href="http://www.career.ucla.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Career Center
                </a>
              </li>
              <li>
                <a
                  href="https://careprogram.ucla.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CARE Advocate
                </a>
              </li>
              <li>
                <a
                  href="http://www.cae.ucla.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Center for Accessible Education (CAE)
                </a>
              </li>
              <li>
                <a
                  href="https://www.library.ucla.edu/help/services-resources/equipment-lending/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CLICC
                </a>
              </li>
              <li>
                <a
                  href="http://www.counseling.ucla.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Counseling and Psychological Services (CAPS)
                </a>
              </li>
              <li>
                <a
                  href="https://www.internationalcenter.ucla.edu/programs-events/ambassadors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dashew Center
                </a>
              </li>
              <li>
                <a
                  href="https://financialwellness.ucla.edu/resources"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Financial Wellness Program
                </a>
              </li>
              <li>
                <a
                  href="https://lgbtq.ucla.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LGBTQ Campus Resource Center
                </a>
              </li>
              <li>
                <a
                  href="https://equity.ucla.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Office of Equity, Diversity and Inclusion (EDI)
                </a>
              </li>
              <li>
                <a
                  href="https://uwc.ucla.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Student Writing Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Acknowledgement</h2>
          <p>
            Our ability to gather, play, and learn here is the result of
            coercion, dispossession, and colonization. We are grateful for the
            land itself and the people that have stewarded it through
            generations. Please learn more about what land you are occupying and
            make actions here:{" "}
            <a
              href="https://www.tongva.land/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tongva.land/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
