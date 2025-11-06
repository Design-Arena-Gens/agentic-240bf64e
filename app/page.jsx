"use client";

import { useMemo } from "react";

const sectionData = [
  {
    id: "introduction",
    title: "A Blueprint For Intentional Living",
    tagline: "Success responds to consistency, not enthusiasm.",
    content: [
      "Discipline is the quiet architecture of extraordinary lives. When your actions obey your promises, focus sharpens, rules protect your time, and pillars hold the weight of your ambitions.",
      "This guide is organized for daily use. Each section delivers the mindset, the system, and the micro-actions you can repeat. Read once to understand, revisit often to recommit."
    ]
  },
  {
    id: "pillar-discipline",
    title: "Pillar I — Discipline",
    tagline: "Do what you planned long after the mood has passed.",
    content: [
      "Discipline begins with frictionless starts and deliberate stopping points. Establish cues that launch you into your meaningful work within two minutes of beginning your day.",
      "Pair every commitment with a visible tracker. The goal is not perfection but streak density—how often you return after inevitable interruptions.",
      "Reduce choices. Decide wardrobe, meals, and routine checkpoints in advance to preserve cognitive bandwidth for hard problems."
    ],
    actions: [
      "Draft a two-minute ignition ritual for your mornings.",
      "Maintain a weekly scoreboard: promises vs. completions.",
      "Automate a recurring calendar block titled “keep the promise.”"
    ]
  },
  {
    id: "pillar-focus",
    title: "Pillar II — Focus",
    tagline: "Attention is a currency. Spend it on compounding outcomes.",
    content: [
      "Protect a Deep Focus block daily. Start with 25 minutes, extend as capacity grows. Announce this block to your environment—silence notifications, close doors, inform teammates.",
      "Adopt a capture system that empties your mind quickly. Notes, voice memos, or index cards—anything to move ideas out of working memory and back into your plan.",
      "End every focus session with a thirty-second review: what progressed, what stalled, what deserves tomorrow’s start?"
    ],
    actions: [
      "Publish a digital- or physical-Do Not Disturb indicator.",
      "Use the 3W protocol after each session: What worked, What was hard, What to adjust.",
      "Limit your active projects to three. Park the rest in a later list."
    ]
  },
  {
    id: "pillar-rules",
    title: "Pillar III — Rules",
    tagline: "Systems exist so you can operate with calm urgency.",
    content: [
      "Write down five personal operating rules. They must be simple, memorable, and binary—either followed or violated. Example: “No screens during the first hour awake.”",
      "Align every rule with a value you refuse to negotiate. Rules are not punishment; they are self-respect rituals.",
      "Review your rules monthly, pruning those that no longer serve your highest leverage goals."
    ],
    actions: [
      "Frame each rule as “I always…” or “I never…” to eliminate ambiguity.",
      "Set calendar reminders for rule audits on the first Monday of each month.",
      "Share the rules with an accountability partner who can challenge drift."
    ]
  },
  {
    id: "pillar-success",
    title: "Pillar IV — Success",
    tagline: "Success is leading indicators managed on a weekly rhythm.",
    content: [
      "Define success as the capability to repeat valuable behavior. Celebrate the system, not the outcome; outcomes lag, habits live in the present.",
      "Create a Success Dashboard with four metrics: Energy, Focus Hours, Relationship Deposits, and Learning Reps. Score each from 1-5 weekly.",
      "Schedule a Friday Reset: review dashboard scores, note lessons, adjust next week’s commitments."
    ],
    actions: [
      "Build a single-page dashboard (notebook or digital) with your four metrics.",
      "Block 30 minutes every Friday for the reset ritual.",
      "Identify one leverage skill to improve quarterly and design weekly reps."
    ]
  },
  {
    id: "rituals",
    title: "Anchor Rituals",
    tagline: "Rituals are the handles on discipline.",
    content: [
      "Morning - Prime momentum. Hydrate, movement, plan, identity statement. Example: “I am a disciplined architect of meaningful work.”",
      "Midday - Recommit. Quick walk, gratitude note, scan rule adherence.",
      "Evening - Reflect. Journal three wins, one lesson, one carry-forward. Prepare your environment for tomorrow’s ignition ritual."
    ]
  },
  {
    id: "roadmap",
    title: "90-Day Roadmap",
    tagline: "Stack small predictable wins for compound impact.",
    content: [
      "Phase 1 (Days 1-30): Install the ignition ritual, run daily focus blocks, and log your rule compliance.",
      "Phase 2 (Days 31-60): Launch the Success Dashboard and invite accountability partners.",
      "Phase 3 (Days 61-90): Refine. Remove friction points, upgrade one environmental trigger, and teach your system to someone else."
    ]
  },
  {
    id: "epilogue",
    title: "Epilogue — Sustain The Edge",
    tagline: "Consistency compounds when you design for resilience.",
    content: [
      "There will be missed days, unexpected crises, and changing ambitions. The system survives when you re-enter quickly, forgive the lapse, and recommit to the next action.",
      "Never leave a planning session without the first concrete step scheduled. Action cures hesitation."
    ]
  }
];

export default function Page() {
  const tocItems = useMemo(
    () =>
      sectionData.map((section) => ({
        id: section.id,
        label: section.title.replace("Pillar", "Pillar")
      })),
    []
  );

  return (
    <main className="page">
      <header className="hero">
        <span className="badge">Self-Mastery Field Guide</span>
        <h1>The Discipline Blueprint</h1>
        <p>
          A modern manual for building discipline, sharpening focus, crafting rules,
          and anchoring the pillars that hold sustainable success.
        </p>
      </header>

      <aside className="toc">
        <h2>Table of Contents</h2>
        <nav>
          <ul>
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <section className="sections">
        {sectionData.map((section) => (
          <article key={section.id} id={section.id} className="section">
            <div className="section-header">
              <h2>{section.title}</h2>
              <p className="tagline">{section.tagline}</p>
            </div>
            <div className="section-content">
              {section.content && (
                <div className="paragraphs">
                  {section.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
              {section.actions && (
                <div className="action-card">
                  <h3>Make It Concrete</h3>
                  <ul>
                    {section.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="closing">
        <div className="closing-card">
          <h2>Daily Compass</h2>
          <p>
            Before ending each day, ask: “Did my actions honor my rules? Did I protect my
            focus? Did I advance my pillars of success?” If the answer is no, decide
            the smallest action that makes tomorrow a yes.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Return to Top
          </button>
        </div>
      </section>
    </main>
  );
}
