export default function AboutMe() {
  return (
    <div
      style={{
        fontFamily: "Linux Libertine, Georgia, Times, serif",
        fontSize: "14px",
        lineHeight: "1.6",
        color: "#202122",
        background: "#fff",
        padding: "16px",
        height: "100%",
        overflowY: "auto",
      }}
    >
      {/* top banner */}
      <div
        style={{
          border: "1px solid #a2a9b1",
          background: "#eaf3fb",
          padding: "8px 12px",
          marginBottom: "16px",
          fontSize: "13px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "20px" }}>📌</span>
        <span>
          This article is about <b>Daniel Bayate</b>, a Computer Science and
          Physics student attending UCF.
        </span>
      </div>

      {/* page title */}
      <h1
        style={{
          fontFamily: "Linux Libertine, Georgia, serif",
          fontSize: "28px",
          fontWeight: "normal",
          borderBottom: "1px solid #a2a9b1",
          paddingBottom: "4px",
          marginBottom: "12px",
        }}
      >
        Daniel Bayate
      </h1>

      {/* Layout: content left, infobox right */}
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        {/* main cont */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* table of conts */}
          <div
            style={{
              border: "1px solid #a2a9b1",
              background: "#f8f9fa",
              padding: "12px 16px",
              display: "inline-block",
              marginBottom: "16px",
              minWidth: "200px",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "8px",
                fontSize: "13px",
              }}
            >
              Contents{" "}
              <span
                style={{
                  fontWeight: "normal",
                  fontSize: "12px",
                  color: "#0645ad",
                  cursor: "pointer",
                }}
              >
                [hide]
              </span>
            </div>
            {[
              ["1", "Early Life"],
              ["2", "Education"],
              ["3", "Skills & Technologies"],
              ["4", "Projects"],
              ["5", "Contact"],
            ].map(([num, label]) => (
              <div key={num} style={{ fontSize: "13px", marginBottom: "2px" }}>
                <span style={{ color: "#202122", marginRight: "6px" }}>
                  {num}
                </span>
                <a
                  href={`#section-${num}`}
                  style={{ color: "#0645ad", textDecoration: "none" }}
                >
                  {label}
                </a>
              </div>
            ))}
          </div>

          {/* leading para */}
          <p style={{ marginBottom: "12px" }}>
            <b>Daniel Bayate</b>, born in 2005, South Florida, is an attending
            student at UCF studying computer science and physics. Daniel is most
            known for his quick learning and intuitive thinking. He is
            profficient in several languages including{" "}
            <a href="#" style={{ color: "#0645ad" }}>
              Java
            </a>
            ,{" "}
            <a href="#" style={{ color: "#0645ad" }}>
              C++
            </a>
            ,{" "}
            <a href="#" style={{ color: "#0645ad" }}>
              Python
            </a>
            , and{" "}
            <a href="#" style={{ color: "#0645ad" }}>
              TypeScript/JavaScripts
            </a>
            .
          </p>

          <p style={{ marginBottom: "20px" }}>
            His work is characterized by his interests in fantasy worlds, retro
            technology, and practical usage of AI tools. This portfolio itself
            is a demonstration of his development skills, specifically on the
            frontend side.
          </p>

          {/* sect: early life */}
          <h2
            id="section-1"
            style={{
              fontFamily: "Linux Libertine, Georgia, serif",
              fontSize: "20px",
              fontWeight: "normal",
              borderBottom: "1px solid #a2a9b1",
              paddingBottom: "4px",
              marginBottom: "10px",
            }}
          >
            Early Life
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Daniel was born and raised in Sunny South Florida. In his younger
            years, around the age of 8, his father had gifted him an old laptop,
            to which Daniel took a major interest in. Around 9 years old, Daniel
            got the Java version of Minecraft, and inspired by many youtubers at
            the time, custom modded his client to add new features, blocks, and
            more.It wouldn't be up until 10 years old that Daniel starts to
            tinker around with public servers and hosting them. At that time,
            Daniel learned alot about internet protocols and most of all, using
            a commandline. Daniel ran his first successful server during that
            time, with a completely custom map, commands, and plugin. Daniel
            would continue to express his passion for computers and technology
            more so all throughout his life.{" "}
          </p>

          {/* sect: edu */}
          <h2
            id="section-2"
            style={{
              fontFamily: "Linux Libertine, Georgia, serif",
              fontSize: "20px",
              fontWeight: "normal",
              borderBottom: "1px solid #a2a9b1",
              paddingBottom: "4px",
              marginBottom: "10px",
            }}
          >
            Education
          </h2>
          <h3
            style={{
              fontFamily: "Linux Libertine, Georgia, serif",
              fontSize: "16px",
              fontWeight: "normal",
              paddingBottom: "3px",
            }}
          >
            High School
          </h3>
          <p style={{ marginBottom: "2px" }}>
            Daniel is currently pursing two degree in Physics and Computer
            Science at the University of Central Florida. Daniel hopes to later
            down the line continue his studies in physics and achieve a PHD in
            theoretical physics.
          </p>
          <p style={{ marginBottom: "8px" }}>
            During Daniel's time in highschool, he was apart of the Computer
            Science class, to which he participated in a Hack-a-thon and wrote a
            program{" "}
            <a href="#" style={{ color: "#0645ad", fontStyle: "italic" }}>
              (JavaScript and HTML/CSS)
            </a>{" "}
            that converted user inputted text into its respective ASL hand
            signs, and even offered a minigame to help user's study and learn
            ASL spelling. Daniel also participated in his schools Robotics team,
            where he, along with a team, built and programmed robots from
            scratch to compete in FTC and FRC competitions. Daniel served as the
            lead programmer for his team, primarily developing the robots
            control systems in Java. In his senior year, he lead his own FTC
            team, still serving as the lead programmer and now the head
            engineer.{" "}
          </p>
          <p style={{ marginBottom: "20px" }}>
            Additionally to Daniel's club participation, he also took several
            programming related classes during High School. Some courses he took
            were: Intro to HTML/CSS, Programming with JavaScript{" "}
            <span style={{ fontStyle: "italic" }}>(AP)</span>, and Fundamentals
            of Java Programming{" "}
            <span style={{ fontStyle: "italic" }}>(AP)</span>.
          </p>

          <h3
            style={{
              fontFamily: "Linux Libertine, Georgia, serif",
              fontSize: "16px",
              fontWeight: "normal",
              paddingBottom: "3px",
            }}
          >
            College
          </h3>
          <p>Stop here for tn</p>

          {/* sect: skills */}
          <h2
            id="section-3"
            style={{
              fontFamily: "Linux Libertine, Georgia, serif",
              fontSize: "20px",
              fontWeight: "normal",
              borderBottom: "1px solid #a2a9b1",
              paddingBottom: "4px",
              marginBottom: "10px",
            }}
          >
            Skills & Technologies
          </h2>
          <p style={{ marginBottom: "10px" }}>
            Daniel Bayate has demonstrated proficiency across a range of
            programming languages and tools:
          </p>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              marginBottom: "20px",
              fontSize: "13px",
            }}
          >
            <thead>
              <tr style={{ background: "#eaecf0" }}>
                <th
                  style={{
                    border: "1px solid #a2a9b1",
                    padding: "6px 10px",
                    textAlign: "left",
                  }}
                >
                  Category
                </th>
                <th
                  style={{
                    border: "1px solid #a2a9b1",
                    padding: "6px 10px",
                    textAlign: "left",
                  }}
                >
                  Technologies
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Languages",
                  "Java, C++, Python, TypeScript, JavaScript, HTML/CSS",
                ],
                ["Frameworks", "React, Vite, ETC"],
                ["Tools", "Git, VS Code, ETC"],
                ["Concepts", "OOP, Systems Programming, ETC"],
              ].map(([cat, tech], i) => (
                <tr
                  key={cat}
                  style={{ background: i % 2 === 0 ? "#fff" : "#f8f9fa" }}
                >
                  <td
                    style={{
                      border: "1px solid #a2a9b1",
                      padding: "6px 10px",
                      fontWeight: "bold",
                    }}
                  >
                    {cat}
                  </td>
                  <td
                    style={{ border: "1px solid #a2a9b1", padding: "6px 10px" }}
                  >
                    {tech}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* sect: projects */}
          <h2
            id="section-4"
            style={{
              fontFamily: "Linux Libertine, Georgia, serif",
              fontSize: "20px",
              fontWeight: "normal",
              borderBottom: "1px solid #a2a9b1",
              paddingBottom: "4px",
              marginBottom: "10px",
            }}
          >
            Projects
          </h2>
          <p style={{ marginBottom: "20px" }}>Ipsum Lorem Dolor...</p>

          {/* sect: contact */}
          <h2
            id="section-5"
            style={{
              fontFamily: "Linux Libertine, Georgia, serif",
              fontSize: "20px",
              fontWeight: "normal",
              borderBottom: "1px solid #a2a9b1",
              paddingBottom: "4px",
              marginBottom: "10px",
            }}
          >
            Contact
          </h2>
          <p style={{ marginBottom: "8px" }}>
            Daniel Bayate can be reached through the following channels:
          </p>
          <ul style={{ paddingLeft: "24px", marginBottom: "20px" }}>
            <li>
              <b>GitHub:</b>{" "}
              <a href="#" style={{ color: "#0645ad" }}>
                github.com/mememe
              </a>
            </li>
            <li>
              <b>LinkedIn:</b>{" "}
              <a href="#" style={{ color: "#0645ad" }}>
                linkedin.com/in/mememe
              </a>
            </li>
            <li>
              <b>Email:</b>{" "}
              <a href="#" style={{ color: "#0645ad" }}>
                danbayate@gmail.com
              </a>
            </li>
          </ul>

          {/* footer categories */}
          <div
            style={{
              borderTop: "1px solid #a2a9b1",
              paddingTop: "10px",
              marginTop: "20px",
              fontSize: "13px",
            }}
          >
            <b>Categories:</b>{" "}
            {[
              "Software Developers",
              "TypeScript",
              "C++ Programmers",
              "React Developers",
              "Open Source",
            ].map((cat, i) => (
              <span key={cat}>
                <a href="#" style={{ color: "#0645ad" }}>
                  {cat}
                </a>
                {i < 4 ? " · " : ""}
              </span>
            ))}
          </div>
        </div>

        {/* infobox */}
        <div
          style={{
            width: "240px",
            flexShrink: 0,
            border: "1px solid #a2a9b1",
            background: "#f8f9fa",
            fontSize: "13px",
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              background: "#cee0f2",
              textAlign: "center",
              padding: "6px",
              fontWeight: "bold",
              borderBottom: "1px solid #a2a9b1",
            }}
          >
            Daniel Bayate
          </div>

          {/* placeholder avatar */}
          <div
            style={{
              width: "120px",
              height: "120px",
              background: "#eaecf0",
              margin: "12px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #a2a9b1",
              color: "#72777d",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            PHOT OF ME
          </div>

          {[
            ["Born", "2005, South Florida"],
            ["Nationality", "Filipino"],
            ["Education", "UCF"],
            ["Occupation", "Software Developer"],
            ["Known for", "This portfolio!!!"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                display: "flex",
                borderTop: "1px solid #a2a9b1",
                padding: "5px 8px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  width: "90px",
                  flexShrink: 0,
                  color: "#54595d",
                }}
              >
                {label}
              </div>
              <div>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
