// ═══════════════════════════════════════════════════════════════════════
//  YOUR CONTENT LIVES HERE — this is the only file you need to edit.
//  Everything on the page is generated from the values below.
//  Placeholders are marked "EDIT:" — swap them for your real details.
// ═══════════════════════════════════════════════════════════════════════

export const site = {
  // ── Identity ────────────────────────────────────────────────────────
  name: 'Sravani Alle',          // EDIT
  role: 'Data Analytics Engineer',     // EDIT
  // One sharp sentence a recruiter reads first. What you do + the value.
  tagline:
    'Data/AI Engineer turning raw data into decisions - dbt, Snowflake, and Airflow pipelines supercharged by AI-assisted workflows.', // EDIT
  location: 'Berlin, Germany',          // EDIT
  // Kept for your reference only — NOT rendered on the page and NOT used by the
  // form (Web3Forms routes to whatever inbox owns the access key below).
  email: 'alsr.sravani@gmail.com',

  // ── Contact form (Web3Forms) ────────────────────────────────────────
  // The form emails you WITHOUT ever putting your address in the page source.
  //   1. Go to https://web3forms.com  →  enter your email  →  copy the free Access Key.
  //   2. Paste it below. That's it — submissions arrive in your inbox.
  // Leave as-is and the form shows a "not configured yet" note instead of sending.
  contactAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY', // EDIT

  // ── Hero tech strip — your 6–8 HEADLINE skills, shown above the fold ─
  // This is the instant "what can they do" read. Keep it tight and true.
  coreStack: ['SQL', 'Python', 'dbt', 'Snowflake', 'Airflow', 'Data Governance', 'AI-Agents'], // EDIT

  // ── Hero stat chips (keep to 3; short + true) ───────────────────────
  stats: [
    { value: '9+', label: 'years in Data' },        // EDIT
    { value: '15+', label: 'articles published' }, // EDIT
    { value: '3', label: 'countries worked in' },  // EDIT
  ],

  // ── Social / profile links (used in hero, contact, footer) ──────────
  socials: {
    github: 'https://github.com/sravani-alle',
    linkedin: 'https://www.linkedin.com/in/alle-sravani/',
    medium: 'https://alle-sravani.medium.com/',
    towardsDataScience: 'https://towardsdatascience.com/author/alle-sravani/',
    twitter: '',                                           // EDIT or leave '' to hide
  },

  // ── About: 2–3 short paragraphs ─────────────────────────────────────
  about: {
    paragraphs: [
      'Data doesn’t help anyone sitting in a warehouse - it has to reach the people making decisions. That’s the problem I’ve spent 9+ years solving: rebuilding pipelines (dbt, Snowflake, Airflow), shipping dashboards 40+ stakeholders actually use, and running the funnel and cohort analysis that moved conversion by double digits at Zenjob and Novade.',
      'I partner closely with Product, Ops, and GTM teams to find the question behind the question, then build the pipeline, model, or metric that answers it. Now at Autovion Technologies, I’m applying that same instinct to AI-assisted workflows and data governance from the ground up.',
      'With a background spanning Germany, Singapore, and India, I bring a global perspective to how data cultures are built and sustained.',
    ],
  },

  // ── Experience (most recent first) ──────────────────────────────────
  // One `summary` line each — a general idea of the work, not a full CV.
  // The depth lives in the tailored CV you send on request.
  experience: [
    {
      role: 'Data Product Lead & Co-Founder',
      company: 'Autovion Technologies',
      period: 'Nov 2025 — Present',
      location: 'Berlin, Germany',
      summary:
        'Building Autovion Ledger, a governance and provenance platform with AI-assisted workflows — owning data product strategy end-to-end. Built an AI agent for automated vulnerability analysis.',
    },
    {
      role: 'Data Analytics Engineer',
      company: 'Zenjob SE',
      period: 'May 2022 — Oct 2025',
      location: 'Berlin, Germany',
      summary:
        'Re-architected 10+ legacy datasets into dbt/Snowflake data products and built self-service dashboards for 40+ stakeholders, cutting manual reporting by 40%. Led metadata/data catalog governance work and drove funnel/cohort analysis that lifted onboarding conversion by 40%.',
    },
    {
      role: 'Senior Data Analyst',
      company: 'Novade Solutions',
      period: 'Aug 2019 — Apr 2022',
      location: 'Singapore',
      summary:
        'Led a full CRM migration to Salesforce (with parallel-run validation) and built Airflow/Workato pipelines across IoT, CRM, and finance systems. Cut manual finance reporting by 40% via a Salesforce–Xero integration; redesigned RBAC for 100+ users.',
    },
    {
      role: 'Analyst',
      company: 'Crisil Global Research & Analytics (S&P Global)',
      period: 'Aug 2016 — Jul 2018',
      location: 'India',
      summary:
        'Implemented digital analytics and tagging (Adobe Dynamic Tag Manager). Ran marketing campaign analysis, alongside automating manual reporting workflows that eliminated 100% of manual report time.',
    },
  ],

  // ── Projects (curated — your best 4–6) ──────────────────────────────
  projects: [
    {
      title: 'Nudger Bee — AI Community Coordinator for Slack',
      blurb:
        'An MCP-powered Slack agent that automates multilingual onboarding, peer-matching, daily engagement nudges, and silent-user alerts for community health workers — with a built-in clinical fire-wall that redirects medical questions instead of answering them, saving ~6–8 hrs/week of manual coordination.',
      tags: ['Slack Bolt', 'OpenAI', 'MCP', 'Node.js', 'TypeScript', 'SQLite', 'Render'],
      repo: 'https://github.com/sravani-alle/NudgerBee',
      demo: '',
      featured: true,
    },
    {
      title: 'SQL Assistant Crew — Multi-Agent Natural Language SQL',
      blurb:
        'A CrewAI-orchestrated multi-agent system (generation → review → compliance) that lets users query a SQLite database in plain English, with RAG-based schema retrieval, built-in PII/safety checks, and transparent LLM cost tracking.',
      tags: ['Streamlit', 'CrewAI', 'GPT-4o-mini', 'FAISS', 'ChromaDB', 'Sentence Transformers', 'SQLite', 'Pandas'],
      repo: 'https://github.com/sravani-alle/SQL-Assistant-Crew',
      demo: '',
      featured: true,
    },
    {
      title: 'Data Product Governance Control Tower',
      blurb:
        'A Streamlit dashboard that operationalizes data product certification against governance controls — ownership, metadata, PII, RBAC, lineage, glossary, and documentation — with a domain maturity heatmap and a risk/escalation queue for council review.',
      tags: ['Streamlit', 'Python', 'Pandas', 'Plotly'],
      repo: 'https://github.com/sravani-alle/Data-Governance-Control-Tower',
      demo: '',
      featured: true,
    },
    {
      title: 'Metabase Metadata Auditor',
      blurb:
        'A Python toolkit that pulls dashboard, question, and collection metadata via the Metabase API to build a unified content-lineage table — helping data teams catch stale/broken dashboards and audit BI sprawl at scale.',
      tags: ['Python', 'Pandas', 'Metabase API', 'REST API'],
      repo: 'https://github.com/sravani-alle/Metabase-Metadata-Analysis',
      demo: '',
      featured: false,
    },
    {
      title: 'Tableau Metadata Analysis — Proactive Dependency Tracking',
      blurb:
        'A Python tool built on the Tableau Server Client that maps which dashboards and data sources depend on specific warehouse tables, so data teams can flag downstream impact and notify owners before a schema change breaks something silently.',
      tags: ['Python', 'Pandas', 'Tableau Server Client'],
      repo: 'https://github.com/sravani-alle/Tableau-Metadata-Analysis',
      demo: '',
      featured: false,
    },
  ],

  // ── Playground — fun things vibe-coded on weekends, all live ────────
  // No repos needed; each card links straight to the running site.
  playground: [
    {
      title: 'Never Have I Ever… AI Edition',
      blurb:
        'A mobile-first party game serving up AI-themed “Never Have I Ever” prompts - one card at a time, shareable, no login, and a little too accurate about how much you talk to chatbots.',
      url: 'https://never-have-i-ever-ai.netlify.app/',
    },
    {
      title: 'RegexNut',
      blurb:
        'A visual regex playground - build patterns by clicking components, test them live, browse a library of common ones, and get plain-English explanations, all for the regex-curious (or regex-cursed).',
      url: 'https://regexnut.netlify.app/',
    },
    {
      title: 'BoldPoint Edits',
      blurb:
        'A quick text touch-up tool for LinkedIn posts - bold, italic, strike, highlight, emojis, and one-click copy - since LinkedIn’s editor still won’t let you format anything yourself.',
      url: 'https://boldpointedits.netlify.app/',
    },
    {
      title: 'QR Quay',
      blurb:
        'A clean, fast QR code generator that runs 100% in your browser - your data never leaves your device, because a QR code shouldn’t come with a privacy policy.',
      url: 'https://qrquay.netlify.app/',
    },
    {
      title: 'IDcrap',
      blurb:
        'A free, no-signup tool that crops and resizes your photo into passport/visa-ready dimensions, then lays out a print-ready sheet - because photo requirements shouldn’t ruin your day.',
      url: 'https://idcrap.netlify.app/',
    },
  ],

  // ── Writing (Medium + Towards Data Science, curated) ────────────────
  // `date` is optional — leave '' to hide it. Fill in publish dates for extra credibility.
  writing: [
    {
      title: 'The 2026 Data Mandate: Is Your Governance Architecture a Fortress or a Liability?',
      publication: 'Towards Data Science',
      date: 'Mar 2026',
      url: 'https://towardsdatascience.com/the-2026-data-mandate-is-your-governance-architecture-a-fortress-or-a-liability/',
      blurb:
        'Why the EU AI Act and Cyber Resilience Act are forcing a shift from reactive compliance to “Governance-by-Design.”',
    },
    {
      title: 'Multi-Agent SQL Assistant, Part 2: Building a RAG Manager',
      publication: 'Towards Data Science',
      date: 'Nov 2025',
      url: 'https://towardsdatascience.com/multi-agent-sql-assistant-part-2-building-a-rag-manager/',
      blurb: 'A hands-on guide to comparing multiple RAG strategies — Keyword, FAISS, and Chroma.',
    },
    {
      title: 'Metabase data management made easy with Python',
      publication: 'Medium',
      date: 'Apr 2025',
      url: 'https://medium.com/zenjob-tech-blog/metabase-data-management-made-easy-with-python-a332d4c364e3',
      blurb: 'Take charge of your Metabase data today with Python.',
    },
    {
      title: 'No More Tableau Downtime: Metadata API for Proactive Data Health',
      publication: 'Towards Data Science',
      date: 'Mar 2025',
      url: 'https://towardsdatascience.com/no-more-tableau-downtime-metadata-api-for-proactive-data-health/',
      blurb: 'Leverage the power of the Metadata API to act on any potential data disruptions.',
    },
    {
      title: 'Migrating data? Make the most of the Product itself!',
      publication: 'Towards Data Science',
      date: 'Mar 2023',
      url: 'https://towardsdatascience.com/migrating-data-make-the-most-of-the-product-itself-b79b56d5e6c1/',
      blurb: 'Use the product features to make the data migration process easier.',
    },
  ],

  // Profile links shown at the end of the Writing section.
  writingProfiles: [
    { label: 'Towards Data Science', url: 'https://towardsdatascience.com/author/alle-sravani/' },
    { label: 'Medium', url: 'https://alle-sravani.medium.com/' },
  ],

  // ── Skills (grouped) ────────────────────────────────────────────────
  skills: [
    { group: 'Languages & Query', items: ['SQL', 'Python'] },
    { group: 'Data Modeling & Pipelines', items: ['dbt', 'Snowflake', 'Airflow', 'Workato'] },
    { group: 'BI & Visualization', items: ['Tableau', 'Metabase', 'Power BI', 'Sisense'] },
    { group: 'CRM & Integration', items: ['Salesforce', 'Xero'] },
    { group: 'Analytics Methods', items: ['KPI/funnel/cohort analysis', 'Data modeling'] },
    {
      group: 'Governance & Security',
      items: [
        'Data catalog & metadata management',
        'RBAC design',
        'Data provenance & auditability',
        'CRM-to-warehouse lineage',
        'Vulnerability analysis',
      ],
    },
    {
      group: 'AI Agents & AI-Assisted Workflows',
      items: [
        'AI agent development',
        'MCP (Model Context Protocol)',
        'AI-assisted engineering with Claude / Cursor / Gemini',
      ],
    },
    { group: 'Engineering Practices', items: ['Git / GitHub'] },
  ],
};

export type Site = typeof site;
