import React from "react";

const CaseStudyPage = () => {
  return (
    <div className="caseStudy">
      <header className="caseStudyHeader">
        <h1>Task Manager App Redesign</h1>
        <p>January 2022 - June 2022 | UX/UI Designer</p>
      </header>

      <section className="overview">
        <h2>Overview</h2>
        <p>
          Task Manager App, a staple tool for power users, underwent a
          transformative redesign to enhance user experience and productivity.
          The challenge was to streamline user interactions and improve the
          application's hierarchical representation while maintaining its core
          functionalities.
        </p>
      </section>

      <section className="process">
        <h2>Process</h2>
        <div className="step">
          <h3>Empathize</h3>
          <p>
            Identified key user pain points, including the lack of a clear
            hierarchy and a consistent visual language.
          </p>
        </div>
        <div className="step">
          <h3>Define</h3>
          <p>
            The primary challenge was enhancing the hierarchical representation
            for a more intuitive user experience.
          </p>
        </div>
        <div className="step">
          <h3>Ideate</h3>
          <p>
            Developed a sitemap for structural understanding and curated a mood
            board to inspire the design approach.
          </p>
        </div>
        <div className="step">
          <h3>Prototype</h3>
          <p>
            Iteratively designed and refined a prototype, introducing a clear
            hierarchy and consistent UI patterns.
          </p>
        </div>
      </section>

      <section className="outcomes">
        <h2>Outcomes</h2>
        <p>
          The redesign resulted in a more user-friendly application, with
          improved navigation and productivity. Future steps include user
          testing to validate the redesign’s effectiveness and further refine
          the user experience.
        </p>
      </section>

      <section className="nextSteps">
        <h2>Next Steps</h2>
        <p>
          Conduct comprehensive user testing to gather feedback and make
          data-driven improvements for ongoing enhancements.
        </p>
      </section>
    </div>
  );
};

export default CaseStudyPage;
