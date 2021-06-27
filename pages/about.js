//import styles
import styles from "../styles/Layout.module.css";

export default function about() {
  //Arrays - used for rendering data through the map() method
  const education = [
    {
      institution: "HyperionDev",
      year: 2021,
      qualification: "Full-stack Web. Dev.",
    },
    { institution: "Wits", year: 2020, qualification: "BAS Hons" },
    { institution: "Wits", year: 2017, qualification: "BAS" },
    { institution: "St catherine's High", year: 2014, qualification: "NSC" },
  ];

  const experience = [
    {
      company: "Greenspace Studio",
      duration: "2018-2020",
      role: "Technologist",
    },
    {
      company: "Thuso Architects",
      duration: "2018-3mos",
      role: "Technologist",
    },
  ];

  const skills = [
    "Javascript",
    "HTML",
    "CSS",
    "Bootstrap",
    "jQuery",
    "React",
    "Next.js",
    "Express",
    "Node.js",
    "MongoDB.js",
    "JWT",
    "Jest",
    "Mocha",
    "Chai",
  ];

  return (
    <div>
      <head>
        <title>About</title>
      </head>
      <div className="container">
        <main className={styles.main}>
          <h1 className="text-center">More About My Background...</h1>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Education</h2>
              <table>
                <tr>
                  <th>Institution</th>
                  <th>Year</th>
                  <th>Qualification</th>
                </tr>
                {education.map((edu) => (
                  <tr>
                    <td>{edu.institution}</td>
                    <td>{edu.year}</td>
                    <td>{edu.qualification}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Experience</h2>
              <table>
                <tr>
                  <th>Company</th>
                  <th>Duration</th>
                  <th>Role</th>
                </tr>
                {experience.map((exp) => (
                  <tr>
                    <td>{exp.company}</td>
                    <td>{exp.duration}</td>
                    <td>{exp.role}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Skills</h2>
              <p>
                I am competent in creating FullStack web applications however am
                more passionate about working on the user interface logic
                applications. Below is a collection of languages, frameworks,
                and skills I've aquired in my journey thus far.
              </p>
              <div className={styles.skills}>
                {skills.map((skill) => (
                  <div>{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
