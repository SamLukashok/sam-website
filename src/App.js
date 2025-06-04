import React from "https://esm.sh/react@18";
import resume from "./resumeData.js";

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>{resume.name}</h1>
        <p>{resume.email} | {resume.phone}</p>
      </header>

      <section>
        <h2>Education</h2>
        <ul>
          {resume.education.map((edu) => (
            <li key={edu.school}>
              <strong>{edu.degree}</strong> - {edu.school} ({edu.year})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        {resume.experience.map((job) => (
          <div key={job.company} className="job">
            <h3>{job.title} - {job.company}</h3>
            <p>{job.period}</p>
            <ul>
              {job.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
