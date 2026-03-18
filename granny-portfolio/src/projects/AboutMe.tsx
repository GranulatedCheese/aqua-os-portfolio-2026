import headshot from "../assets/images/headshot_image.jpg";

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
          Physics student at the University of Central Florida (UCF).
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
              ["1", "Early life"],
              ["2", "Education"],
              ["3", "Skills and technologies"],
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
            <b>Daniel Bayate</b> (born 2005) is an American student at the
            University of Central Florida pursuing degrees in Computer Science
            and Physics. Bayate is noted for his rapid technical proficiency and
            intuitive approach to software engineering. He is proficient in
            several programming languages including{" "}
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
              TypeScript/JavaScript
            </a>
            .
          </p>

          <p style={{ marginBottom: "20px" }}>
            His body of work is characterized by an interest in fantasy
            world-building, retro technology, and the practical application of
            AI tools. This portfolio serves as a demonstration of his frontend
            development capabilities and UI/UX design.
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
            Early life
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Bayate was born and raised in South Florida. At the age of eight, he
            developed a significant interest in computing after receiving a
            laptop from his father. By age nine, he began modding the{" "}
            <i>Java Edition</i> of Minecraft, creating custom blocks and
            gameplay features. At ten, he transitioned to hosting and managing
            public servers, gaining early experience with internet protocols and
            command-line interfaces. His first successful server featured a
            bespoke map, custom commands, and original plugins, establishing a
            lifelong passion for technological development.
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
              fontWeight: "bold",
              paddingBottom: "3px",
            }}
          >
            Secondary education
          </h3>
          <p style={{ marginBottom: "8px" }}>
            During his time in high school, Bayate was an active member of the
            Computer Science program. He participated in hackathons, notably
            developing a program using JavaScript, HTML, and CSS that converted
            text into American Sign Language (ASL) hand signs, including an
            educational minigame. He also served as the lead programmer for his
            school's robotics team, designing control systems in Java for FTC
            and FRC competitions. In his senior year, he spearheaded an FTC team
            as both lead programmer and head engineer.
          </p>
          <p style={{ marginBottom: "20px" }}>
            His academic curriculum included Advanced Placement (AP) coursework
            in Computer Science Principles and Computer Science A (Java),
            alongside introductory courses in web development.
          </p>

          <h3
            style={{
              fontFamily: "Linux Libertine, Georgia, serif",
              fontSize: "16px",
              fontWeight: "bold",
              paddingBottom: "3px",
            }}
          >
            Higher education
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Bayate is currently enrolled at the University of Central Florida,
            where he is pursuing a dual degree in Physics and Computer Science.
            His long-term academic goals include obtaining a PhD in theoretical
            physics. During his undergraduate career, he has completed advanced
            coursework in C++ and C# programming while expanding his portfolio
            through complex side projects like <i>Noted.</i> and{" "}
            <i>Runes & Rivets</i>.
          </p>

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
            Skills and technologies
          </h2>
          <p style={{ marginBottom: "10px" }}>
            Bayate has demonstrated proficiency across a diverse range of
            technical domains:
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
                  "Java, C++, C#, Python, TypeScript, JavaScript, HTML/CSS",
                ],
                ["Frameworks", "React, Vite, FastAPI"],
                ["Tools", "Git, VS Code, GitHub Copilot"],
                ["Concepts", "OOP, Systems Programming, CRUD, RESTful APIs"],
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
          <h3
            style={{
              fontFamily: "Linux Libertine, Georgia, serif",
              fontSize: "16px",
              fontWeight: "bold",
              paddingBottom: "3px",
            }}
          >
            Runes & Rivets
          </h3>
          <p style={{ marginBottom: "10px" }}>
            <i>Runes & Rivets</i> is an immersive fantasy RPG Minecraft
            modification. Developed using Java and JavaScript, the project was
            created to address a lack of narrative depth and cohesive
            world-building in existing fantasy addons. The project aims to
            capture the atmosphere of high-fantasy literature, such as the works
            of J.R.R. Tolkien, through complex game mechanics and lore.
          </p>

          <h3
            style={{
              fontFamily: "Linux Libertine, Georgia, serif",
              fontSize: "16px",
              fontWeight: "bold",
              paddingBottom: "3px",
            }}
          >
            Noted.
          </h3>
          <p style={{ marginBottom: "20px" }}>
            <i>Noted.</i> is an AI-powered note-taking platform designed to
            enhance academic efficiency. Observing the limitations of standard
            digital note-taking in fast-paced lectures, Bayate developed the
            platform to integrate Large Language Models (LLMs) like GPT and
            Gemini directly into the user's canvas. This allows for the
            automation of repetitive tasks, such as generating definitions or
            formatting mathematical steps. The platform is currently in
            development with a full release projected for mid-2026.
          </p>

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
          <ul style={{ paddingLeft: "24px", marginBottom: "20px" }}>
            <li>
              <b>GitHub:</b>{" "}
              <a
                href="https://github.com/GranulatedCheese"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0645ad" }}
              >
                github.com/GranulatedCheese
              </a>
            </li>
            <li>
              <b>LinkedIn:</b>{" "}
              <a
                href="https://www.linkedin.com/in/daniel-bayate/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0645ad" }}
              >
                linkedin.com/in/daniel-bayate
              </a>
            </li>
            <li>
              <b>Email:</b>{" "}
              <a
                href="mailto:danielbayate.dev@gmail.com"
                style={{ color: "#0645ad" }}
              >
                danielbayate.dev@gmail.com
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
                <a
                  href="https://github.com/GranulatedCheese/aqua-os-portfolio-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0645ad" }}
                >
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

          {/* avatar */}
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
              overflow: "hidden",
            }}
          >
            <img
              src={headshot}
              alt="Daniel Bayate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {[
            ["Born", "2005 (age 20–21), South Florida"],
            ["Nationality", "Filipino"],
            ["Education", "University of Central Florida"],
            ["Major", "Computer Science and Physics"],
            ["Occupations", "Software Developer, Quant Researcher"],
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
