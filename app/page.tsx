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
        <span className="contact-status">Contact options coming next</span>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">RC</span><span>Robin Cornett</span></a>
        <p>Independent portfolio · A Cornett Industries project</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
