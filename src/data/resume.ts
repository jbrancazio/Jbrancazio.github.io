// Resume content, sourced from the LinkedIn profile export.
// Name, location, and links come from site.ts; this file holds only resume facts.

export interface Role {
  title: string;
  dates: string;
  summary: string;
  highlights?: string[];
}

export interface Employer {
  company: string;
  location?: string;
  roles: Role[];
}

// One line per role for the 2010–2018 coffee and hospitality years.
export interface EarlierRole {
  title: string;
  company: string;
  dates: string;
  note?: string;
}

export const resume = {
  // Shown after the current role title (taken from experience[0].roles[0]).
  focus: 'Analytics & Data Operations',

  summary: [
    'I lead the BI team at HealthSherpa, focused on making data useful across the organization. Not just producing output, but building the systems that make data requests legible, prioritizable, and deliverable at a consistent standard.',
    'That means owning analytical intake workflows, maintaining data infrastructure documentation, administering our AI analytics platform, and staying closely connected to the business domains we support: ACA and Medicare enrollment, agent and agency operations, and finance.',
    'I care about honest data quality communication, lightweight process design, and incremental delivery. If something can be automated, documented, or systematized without adding overhead, that’s the direction I’ll push.',
  ],

  skills: {
    Stack: ['PostgreSQL', 'Snowflake', 'Hex', 'Python', 'Claude (Anthropic API)', 'Jira', 'Confluence'],
    Focus: ['Data Operations', 'Workflow Automation', 'BI Team Leadership'],
    Languages: ['English', 'German'],
  },

  experience: [
    {
      company: 'HealthSherpa',
      roles: [
        {
          title: 'Senior Manager, Business Intelligence',
          dates: 'Apr 2026 – Present',
          summary:
            'Lead HealthSherpa’s BI function, overseeing analytical delivery, data infrastructure, and AI platform operations across the organization.',
          highlights: [
            'Set team priorities and intake structure across analytical requests, data documentation, and platform administration',
            'Own the company’s Hex AI analytics platform end-to-end: semantic model governance, guide library, workspace roles, and analyst enablement',
            'Drive cross-functional data delivery in partnership with Finance, Agency Operations, and Engineering',
            'Responsible for BI team performance, career development, and operational standards',
          ],
        },
        {
          title: 'Senior Technical Operations Manager',
          dates: 'Sep 2024 – Apr 2026',
          summary:
            'Led Technical Agency Operations across payments, revenue analytics, financial reporting, and data platforms during a period of significant team growth and platform migration.',
          highlights: [
            'Owned operational priorities across agent payouts, LTV analytics, financial integrity, and internal data tooling',
            'Ensured accurate, on-time commission payments and maintained trusted financial metrics at scale',
            'Partnered with Finance and Agency leadership on revenue performance reporting and operational planning',
            'Oversaw migration from legacy reporting infrastructure to Hex AI, including semantic model development and analyst onboarding',
            'Served as the operational bridge between Product, Engineering, Data, and Agency leadership',
          ],
        },
        {
          title: 'Technical Operations Manager',
          dates: 'Nov 2021 – Sep 2024',
          summary:
            'Built the analytics and operational foundation supporting agency payments and revenue visibility across ACA and Medicare lines of business.',
          highlights: [
            'Delivered enrollment and performance analytics for agency and carrier stakeholders',
            'Maintained operational data pipelines and internal tooling; reduced manual reporting burden through automation',
            'Led cross-functional execution on payment workflows, data quality remediation, and reporting infrastructure',
            'Established team processes for intake, prioritization, and stakeholder communication as the function scaled',
          ],
        },
        {
          title: 'Operations Analyst',
          dates: 'Jul 2021 – Nov 2021',
          summary:
            'Designed and scaled SQL- and Python-based reporting for commissions, payouts, and performance metrics. Owned investigation and resolution of payment discrepancies and data quality issues.',
        },
        {
          title: 'Operations Associate',
          dates: 'Feb 2021 – Jul 2021',
          summary:
            'Supported operational workflows and data analysis for agency operations, including payment processing and reporting during the function’s early build-out.',
        },
      ],
    },
    {
      company: 'Intelligentsia Coffee',
      roles: [
        {
          title: 'Senior Business Development Manager',
          dates: 'Jun 2018 – Sep 2018',
          summary:
            'Owned Bay Area account relationships. Analyzed customer sales data to minimize waste, optimize orders, and identify upsell opportunities.',
        },
        {
          title: 'West Coast Regional Retail Manager',
          dates: 'Jun 2016 – Jun 2018',
          summary:
            'Oversaw three Los Angeles coffeebars with 60 employees. Wrote and managed location budgets and presented monthly performance analysis directly to the CEO.',
          highlights: [
            'Redesigned barista onboarding, improving ramp speed by 83%',
            'Scouted and signed the fourth Los Angeles location',
          ],
        },
        {
          title: 'Retail Manager, Venice Coffeebar',
          dates: 'Dec 2013 – Jun 2016',
          summary:
            'Led hiring, training, and day-to-day management of a 21-person team. Owned inventory, P&L reporting, and monthly performance presentations.',
          highlights: [
            'Grew location bottom line 150% through sales growth, efficiency improvements, and cost reduction',
          ],
        },
      ],
    },
  ] satisfies Employer[],

  earlier: [
    { title: 'Beverage Director', company: 'Beer Baron Bar & Kitchen', dates: '2019 – 2020', note: 'Beverage program across three locations; vendor pricing and supply chain' },
    { title: 'Floor Manager / Lead Bartender', company: 'Beer Baron Bar & Kitchen', dates: '2019' },
    { title: 'Café Manager', company: 'Global Gourmet Catering', dates: '2018 – 2019' },
    { title: 'Barista / Shift Lead', company: 'Intelligentsia Coffee', dates: '2013' },
    { title: 'Manager', company: 'Slow Train Cafe', dates: '2010 – 2013' },
    { title: 'Short Order / Brunch Cook', company: 'The Feve', dates: '2012 – 2013' },
  ] satisfies EarlierRole[],

  education: [
    { school: 'Flatiron School', credential: 'Immersive Data Science Bootcamp', years: '2018 – 2019' },
    { school: 'Oberlin College', credential: 'BA, Psychology', years: '2007 – 2011' },
  ],
};
