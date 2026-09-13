import Image from "next/image";

const capabilities = [
  {
    number: "01",
    title: "Business & Operations",
    copy: "Practical planning, workflow design, accounting support, sales strategy, and the systems that keep an organization moving.",
  },
  {
    number: "02",
    title: "Web & Product Development",
    copy: "Useful websites and applications shaped around real people, clear goals, and the work they need to accomplish every day.",
  },
  {
    number: "03",
    title: "Construction & Technical Consulting",
    copy: "Two decades of hands-on construction experience, backed by technical troubleshooting and universal EPA certification.",
  },
  {
    number: "04",
    title: "Research & Document Support",
    copy: "Careful research, structured information, and clear documents that turn complicated material into an actionable next step.",
  },
];

const experience = [
  "Business leadership",
  "Residential construction",
  "Retail sales & management",
  "Security & private law enforcement",
  "Manufacturing",
  "Landscaping",
  "Accounting & administration",
  "Software development",
];

const projects = [
  {
    status: "Evolving platform",
    title: "Blended Works",
    category: "Brand · Content · Digital services",
    copy: "A family-centered platform for practical tools, honest stories, daily devotionals, and services that help people and families rebuild with purpose.",
  },
  {
    status: "In development",
    title: "Blended Works Legal AI",
    category: "Legal technology · Source intelligence",
    copy: "A research workspace designed for interconnected cases, verified primary and secondary sources, jurisdiction-aware coverage, and clear provenance.",
  },
  {
    status: "Active development",
    title: "Blended Basecamp",
    category: "Remote work · Travel operations",
    copy: "A practical command center for work planning, travel, connectivity, energy, equipment, expenses, mileage, journals, and emergency check-ins.",
  },
  {
    status: "Active development",
    title: "The Blended Planner",
    category: "Planning · Family organization",
    copy: "A calendar and planning journal built to make work, family commitments, and longer-term goals easier to see and manage together.",
  },
  {
    status: "In development",
    title: "Mission Operations Toolkit",
    category: "Nonprofit operations · Human-centered systems",
    copy: "Digital forms, scheduling, incident documentation, spiritual-outcomes reporting, and operational tools shaped by firsthand mission experience.",
  },
  {
    status: "New project",
    title: "Life Happens",
    category: "Native Android · Everyday resilience",
    copy: "A Blended Works Android application now taking shape around a simple idea: life rarely follows the plan, so our tools should help us adapt.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Robin Cornett home">
          <span className="brand-mark">RC</span>
          <span>Robin Cornett</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">What I offer</a>
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Builder · Strategist · Creator</p>
          <h1>I turn real-world experience into practical solutions.</h1>
          <p className="hero-intro">
            I&apos;m Robin Cornett. I bring business, construction, technology, and service together to help people build what comes next.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services">Explore what I do</a>
            <a className="button button-secondary" href="#about">My story <span aria-hidden="true">↘</span></a>
          </div>
          <div className="hero-proof" aria-label="Experience highlights">
            <div><strong>20+</strong><span>Years building</span></div>
            <div><strong>360°</strong><span>Business perspective</span></div>
            <div><strong>1</strong><span>Clear point of contact</span></div>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image
              src="/images/robin-cornett-professional-profile.jpg"
              alt="Robin Cornett in a navy suit and striped tie"
              fill
              priority
              sizes="(max-width: 900px) 86vw, 40vw"
            />
          </div>
          <div className="portrait-note">
            <span className="signal" aria-hidden="true" />
            Based in Washington · Building everywhere
          </div>
        </div>
      </section>

      <section className="statement" id="about">
        <p className="section-kicker">This is me</p>
        <div className="statement-grid">
          <h2>Experience matters most when it becomes useful to someone else.</h2>
          <div>
            <p>
              My path has never fit into one title. I&apos;ve led teams, run businesses, built homes, solved technical problems, protected people, managed finances, and written software.
            </p>
            <p>
              That range is my strength. I see how the pieces connect, communicate without hiding behind jargon, and stay with a problem until there is a workable way forward.
            </p>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div>
            <p className="section-kicker">What I offer</p>
            <h2>One partner. A broad working toolkit.</h2>
          </div>
          <p>Support shaped around the problem—not forced into a preset package.</p>
        </div>
        <div className="service-grid">
          {capabilities.map((item) => (
            <article className="service-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading work-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2>Ideas shaped by lived experience.</h2>
          </div>
          <p>Products and platforms I&apos;m actively building through Cornett Industries and Blended Works.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.status}</span>
              </div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-copy">
          <p className="section-kicker">Built in the real world</p>
          <h2>Across industries, the constant is responsibility.</h2>
          <p>
            I&apos;ve worked where results are visible: a structure stands, a team performs, a customer trusts you, a system works, or it doesn&apos;t. That accountability shapes every project I take on.
          </p>
        </div>
        <ul className="experience-list">
          {experience.map((item, index) => (
            <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
          ))}
        </ul>
      </section>

      <section className="credentials">
        <div>
          <p className="section-kicker">Education & credentials</p>
          <h2>Study backed by hands-on work.</h2>
        </div>
        <div className="credential-grid">
          <article>
            <span>Education</span>
            <h3>Bachelor&apos;s in Legal Studies</h3>
            <p>Purdue University</p>
          </article>
          <article>
            <span>Education</span>
            <h3>Associate&apos;s in International Business</h3>
            <p>Everest</p>
          </article>
          <article>
            <span>Technical</span>
            <h3>Universal EPA Technician</h3>
            <p>Cross-system technical knowledge and field problem-solving.</p>
          </article>
          <article>
            <span>Maritime</span>
            <h3>U.S. Coast Guard Licensing</h3>
            <p>Professional maritime training and responsibility.</p>
          </article>
        </div>
      </section>

      <section className="service-story">
        <div className="service-story-number">05—07</div>
        <div>
          <p className="section-kicker">Service is part of the work</p>
          <h2>Technology matters. People matter more.</h2>
          <p>
            My work at Olympia Union Gospel Mission keeps every idea grounded in real needs. Alongside security, shelter, and maintenance responsibilities, I write and deliver faith-centered devotionals for mission guests—messages about hope, accountability, grief, reconciliation, and new beginnings.
          </p>
          <p>
            That proximity to people rebuilding their lives shapes how I design: practical first, respectful always, and accessible to the person who needs it most.
          </p>
        </div>
      </section>

      <section className="values">
        <blockquote>
          “Build honestly. Serve people. Leave things stronger than you found them.”
        </blockquote>
        <p>Faith, family, resilience, and practical service guide the work.</p>
      </section>

      <section className="contact" id="contact">
        <p className="section-kicker">Start a conversation</p>
        <h2>Have something worth building?</h2>
        <p>Tell me what you&apos;re working toward. We can begin with the problem, the opportunity, or simply the next right step.</p>
        <a className="contact-link" href="https://github.com/banhannah2025" target="_blank" rel="noreferrer">
          View my work on GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">RC</span><span>Robin Cornett</span></a>
        <p>Independent portfolio · A Cornett Industries project</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
