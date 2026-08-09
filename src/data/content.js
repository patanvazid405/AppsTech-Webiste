// ─── SITE CONTENT ──────────────────────────────────────────────────────────
// Central content module. Facts (phones, emails, cities, testimonials) are
// preserved as provided by the business; marketing copy has been rewritten.

export const BRAND = {
  name: 'AppsTech',
  suffix: 'Soft',
  tagline: 'Zoho Authorized Partner',
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'products', label: 'Products', path: '/products' },
  { id: 'industries', label: 'Industries', path: '/industries' },
  { id: 'about', label: 'Process', path: '/about' },
  { id: 'blog', label: 'Insights', path: '/blog' },
];

export const STATS = [
  { icon: 'Rocket', n: 500, suffix: '+', label: 'Projects Delivered', sub: 'Across 15+ industries' },
  { icon: 'Globe2', n: 200, suffix: '+', label: 'Clients Worldwide', sub: '3 continents, 6 countries' },
  { icon: 'Award', n: 10, suffix: '+', label: 'Years in Zoho', sub: 'Authorized partner since 2014' },
  { icon: 'Star', n: 98, suffix: '%', label: 'Client Retention', sub: '4.9 / 5.0 average rating' },
];

export const SERVICES = [
  {
    slug: 'zoho-one',
    icon: 'Zap',
    title: 'Zoho One Implementation',
    desc: 'We roll out the full 45+ app Zoho One suite as a single operating system for your business — Sales, Finance, HR and Operations, unified from day one.',
    feat: true,
  },
  {
    slug: 'zoho-crm',
    icon: 'Target',
    title: 'Zoho CRM Customization',
    desc: 'Pipelines, scoring, and dashboards built around how your sales team actually sells, wired into WhatsApp, Gmail, and LinkedIn.',
  },
  {
    slug: 'zoho-erp',
    icon: 'Factory',
    title: 'Zoho ERP for Manufacturing',
    desc: 'BOM, work orders, shop-floor costing, and multi-warehouse inventory — production visibility from raw material to dispatch.',
  },
  {
    slug: 'finance-suite',
    icon: 'Wallet',
    title: 'Zoho Finance Suite',
    desc: 'GST-ready accounting, automated invoicing, and multi-currency inventory reporting that closes your books faster every month.',
  },
  {
    slug: 'automation-ai',
    icon: 'Bot',
    title: 'Workflow Automation & AI',
    desc: 'Deluge scripting and Zia-powered automation that removes manual busywork from every department, not just sales.',
  },
  {
    slug: 'zoho-creator',
    icon: 'Wrench',
    title: 'Zoho Creator Custom Apps',
    desc: 'Purpose-built, low-code applications for the processes off-the-shelf software was never built to handle — 550+ integrations, mobile-ready.',
  },
  {
    slug: 'hr-solutions',
    icon: 'Users',
    title: 'HR & People Solutions',
    desc: 'Zoho People and Payroll configured for hiring, attendance, leave, payroll, and statutory compliance in one self-service portal.',
  },
  {
    slug: 'managed-services',
    icon: 'ShieldCheck',
    title: 'Managed Services',
    desc: 'Ongoing support, quarterly health audits, and continuous optimization under a dedicated AMC — your Zoho stack never goes stale.',
  },
  {
    slug: 'migrations-integrations',
    icon: 'CloudCog',
    title: 'Migrations & Integrations',
    desc: 'Clean migrations off Salesforce, HubSpot, Tally, or SAP, plus API connections to payment gateways and third-party systems.',
  },
];

export const WHY_US = [
  { icon: 'Rocket', title: '3× Faster Implementation', desc: 'Pre-built frameworks compress rollouts from months to weeks without cutting corners.' },
  { icon: 'Award', title: 'Certified Domain Experts', desc: 'Every consultant carries current Zoho certifications backed by real deployment experience.' },
  { icon: 'BarChart3', title: 'ROI-Focused Delivery', desc: 'Every engagement is tied to measurable KPIs agreed before we write a single workflow.' },
  { icon: 'Globe2', title: 'Global, Local Delivery', desc: 'Teams on the ground across India, USA, UAE, UK, and Germany — same playbook, local context.' },
];

export const BENCHMARKS = [
  { label: 'Implementation Speed', val: '3× faster', pct: 90 },
  { label: 'User Adoption Rate', val: '96%', pct: 96 },
  { label: 'On-Time Delivery', val: '94%', pct: 94 },
  { label: 'Client Satisfaction', val: '4.9 / 5.0', pct: 98 },
  { label: 'Average ROI Delivered', val: '340%', pct: 88 },
];

export const PRODUCTS = [
  { id: 'crm', label: 'Zoho CRM', cat: 'CRM & Sales',
    desc: 'The most comprehensive CRM on the market, configured for your exact sales process — every touchpoint automated and accounted for.',
    feats: ['Lead capture & pipeline automation', 'WhatsApp, Gmail & LinkedIn integrations', 'AI-powered Zia insights & forecasting', 'Custom modules, roles & Deluge workflows'],
    kpis: [{ n: '₹4.2Cr', l: 'Pipeline' }, { n: '87', l: 'Deals' }, { n: '68%', l: 'Win Rate' }],
    bars: [55, 70, 45, 88, 62, 78, 72, 95],
    rows: [{ t: 'Acme Corp — ₹48L', b: 'Proposal Sent', tone: 'blue' }, { t: 'TechStartup — ₹22L', b: 'Negotiation', tone: 'gold' }, { t: 'GlobalMfg — ₹1.2Cr', b: 'Closed Won ✓', tone: 'green' }] },
  { id: 'books', label: 'Zoho Books', cat: 'Finance & Accounting',
    desc: 'Complete GST-compliant accounting — from invoicing to financial reporting, fully automated and audit-ready.',
    feats: ['GST filing & e-invoicing automation', 'Bank reconciliation & cash flow', 'Multi-currency, multi-warehouse inventory', 'CRM → Books → Inventory integration'],
    kpis: [{ n: '₹82L', l: 'Revenue MTD' }, { n: '₹12L', l: 'Receivables' }, { n: '99%', l: 'GST Filed' }],
    bars: [58, 72, 52, 84, 68, 91, 76, 96],
    rows: [{ t: 'INV-2025-0891 — GlobalMfg', b: 'Paid ✓', tone: 'green' }, { t: 'INV-2025-0890 — Acme Corp', b: 'Due in 5 days', tone: 'gold' }, { t: 'INV-2025-0889 — TechCo', b: 'Sent', tone: 'blue' }] },
  { id: 'one', label: 'Zoho One', cat: 'All-in-One Suite',
    desc: 'The operating system for your entire business — 45+ integrated apps replacing a patchwork of disconnected tools.',
    feats: ['45+ apps at $37/user/month', 'All apps talk to each other natively', 'Single sign-on & unified admin console', 'Scales from startup to enterprise'],
    kpis: [{ n: '45+', l: 'Apps' }, { n: '1', l: 'Login' }, { n: '∞', l: 'Scale' }], bars: [], rows: [] },
  { id: 'people', label: 'Zoho People', cat: 'HR & Workforce',
    desc: 'Cloud HR management from hiring to retiring — automated, compliant, and genuinely employee-friendly.',
    feats: ['Attendance, leave & biometric integration', 'Payroll & PF/ESI/TDS compliance', 'Performance management & appraisals', 'Employee self-service portal'],
    kpis: [{ n: '248', l: 'Employees' }, { n: '97%', l: 'Attendance' }, { n: '12', l: 'On Leave' }], bars: [],
    rows: [{ t: 'Rajesh Kumar', b: 'Present', tone: 'green' }, { t: 'Priya Mehta', b: 'On Leave', tone: 'gold' }, { t: 'Arun Sharma', b: 'WFH', tone: 'blue' }] },
  { id: 'creator', label: 'Zoho Creator', cat: 'Low-Code Dev',
    desc: 'Build powerful custom apps without heavy engineering — solve the business problems generic software ignores.',
    feats: ['Drag-and-drop multi-device app builder', 'Deluge scripting for complex logic', '550+ prebuilt integrations via API', 'AI-powered workflows with Zia'],
    kpis: [{ n: '550+', l: 'Integrations' }, { n: '5min', l: 'Deploy' }, { n: '100%', l: 'No-Code' }], bars: [], rows: [] },
  { id: 'analytics', label: 'Zoho Analytics', cat: 'Business Intelligence',
    desc: 'Self-service BI that turns raw operational data into dashboards your leadership actually opens every morning.',
    feats: ['500+ pre-built reports & dashboards', 'Ask Zia — AI natural language queries', 'Cross-app data blending & modeling', 'Scheduled executive reports'],
    kpis: [{ n: '+28%', l: 'Revenue MoM' }, { n: '18', l: 'Reports' }, { n: '4.2s', l: 'Query' }],
    bars: [38, 52, 44, 68, 58, 82, 74, 95],
    rows: [{ t: 'Q2 Revenue vs Target', b: '↑ 18% ahead', tone: 'green' }, { t: 'Churn rate this quarter', b: '2.1% ↓', tone: 'green' }] },
  { id: 'projects', label: 'Zoho Projects', cat: 'Project Mgmt',
    desc: 'Enterprise project management connecting teams, clients, and deliverables through Gantt and Kanban views.',
    feats: ['Gantt, Kanban & Scrum boards', 'Resource allocation & time tracking', 'Budget tracking & billing integration', 'Client portals & automated reports'],
    kpis: [{ n: '48', l: 'Active' }, { n: '94%', l: 'On Time' }, { n: '₹2.4Cr', l: 'Managed' }], bars: [], rows: [] },
  { id: 'desk', label: 'Zoho Desk', cat: 'Customer Support',
    desc: 'Context-aware help desk with AI ticket routing and full CRM integration, so support never works from a blind spot.',
    feats: ['Multi-channel ticket management', 'Zia AI — auto ticket classification', 'SLA management & escalation rules', 'Self-service portal & knowledge base'],
    kpis: [{ n: '94%', l: 'CSAT' }, { n: '2.4h', l: 'Resolution' }, { n: '12', l: 'Open' }], bars: [],
    rows: [{ t: '#8821 — Billing issue', b: 'High', tone: 'red' }, { t: '#8820 — Login error', b: 'Medium', tone: 'gold' }, { t: '#8819 — Feature request', b: 'Low', tone: 'green' }] },
];

export const INDUSTRIES = [
  { icon: 'Factory', title: 'Manufacturing', desc: 'BOM, work orders, production costing, multi-warehouse inventory.' },
  { icon: 'HeartPulse', title: 'Healthcare', desc: 'Patient management, appointment workflows, regulatory compliance.' },
  { icon: 'ShoppingCart', title: 'Retail & E-Commerce', desc: 'Omnichannel inventory, order management, customer loyalty.' },
  { icon: 'Truck', title: 'Logistics', desc: 'Order-to-cash automation, credit control, margin tracking.' },
  { icon: 'Building2', title: 'Construction', desc: 'Project costs, vendor management, site workforce, compliance.' },
  { icon: 'GraduationCap', title: 'Education', desc: 'Student lifecycle, fee collection, attendance, parent portals.' },
  { icon: 'Briefcase', title: 'Professional Services', desc: 'Client management, project billing, utilization dashboards.' },
  { icon: 'Pill', title: 'Pharma & Life Sciences', desc: 'Regulatory tracking, batch compliance, SFA for pharma.' },
];

export const TESTIMONIALS = [
  { av: 'DZ', name: 'Dr. Zaheesh Moideen', role: 'CEO', co: 'DakshOne Connect', txt: 'Their Zoho CRM integration transformed our lead management. We track every inquiry and automate follow-ups effortlessly. Conversion rate improved by 40% in the first quarter.', color: '#5B5FEF' },
  { av: 'PM', name: 'Mr. Prashanth M. R.', role: 'Managing Director', co: 'Unique-Q Tech', txt: 'They unified sales and support through Zoho CRM and Desk. Our entire journey from enquiry to invoicing is now fully streamlined. After-support remains exceptional.', color: '#8F95F7' },
  { av: 'GJ', name: 'Mr. Gaurav Jain', role: 'Founder', co: 'Ratan Papers', txt: 'Zoho Books and Inventory transformed our distribution. Real-time stock across 3 warehouses, GST automation, and order tracking — live in just 6 weeks.', color: '#2FD9C4' },
  { av: 'SB', name: 'Mr. Sanjay Bora', role: 'Founder', co: 'BoraClasses', txt: 'Zoho CRM automated student inquiries, course tracking, and payment follow-ups. Managing batches and conversions is now completely effortless.', color: '#F5B93D' },
  { av: 'AV', name: 'Mr. Amit Verma', role: 'Director', co: 'InaPharma', txt: 'Complete visibility from inquiry to order. Automated lead tracking and regulatory follow-ups across departments. Implementation exceeded all expectations.', color: '#FB7185' },
  { av: 'PS', name: 'Ms. Priya Sharma', role: 'Co-Founder', co: 'SweetenLife', txt: 'Zoho connected our e-commerce, CRM, and support seamlessly. Managing customer data and marketing campaigns in one dashboard is a game-changer.', color: '#F5B93D' },
];

export const TRUST_LOGOS = ['DakshOne Connect', 'Unique-Q Tech India', 'BoraClasses', 'Ratan Papers', 'SweetenLife', 'InaPharma', 'GlobalMfg', 'TechStartup Ltd', 'AcmeCorp India', 'DigitalPharma Co'];

export const PROCESS_STEPS = [
  { n: '01', title: 'Discovery', desc: 'We map every current workflow, pain point, and goal before proposing a single Zoho app.' },
  { n: '02', title: 'Analysis', desc: 'Gap analysis, license recommendations, integration mapping, and upfront risk assessment.' },
  { n: '03', title: 'Strategy', desc: 'A detailed blueprint with phased rollout, timeline, resourcing, and the KPIs we’ll be judged on.' },
  { n: '04', title: 'Implementation', desc: 'Configuration, customization, data migration, integrations, and Deluge scripting — done in sprints.' },
  { n: '05', title: 'Optimization', desc: 'UAT, hands-on user training, and performance tuning before we ever call it "go-live."' },
  { n: '06', title: 'Support', desc: 'Post-launch monitoring, a real helpdesk, quarterly audits, and continuous improvement.' },
];

export const FAQS = [
  { q: 'How is AppsTech Soft different from a generic IT vendor?', a: 'We only work in the Zoho ecosystem. That focus means certified consultants, pre-built implementation playbooks refined across 500+ projects, and a delivery team that has already solved your industry’s edge cases — not a generalist team learning on your budget.' },
  { q: 'How long does a typical Zoho One implementation take?', a: 'Most mid-size implementations go live in 6–10 weeks using our phased rollout model. Single-app deployments like Zoho CRM or Books are often live in 2–4 weeks. Your discovery call gives you a firm timeline, not a guess.' },
  { q: 'We already use Zoho but it feels underused — can you help?', a: 'Yes — this is one of our most common engagements. We run a Zoho health audit, identify what’s misconfigured or unused, and deliver a prioritized optimization roadmap, usually inside one working week.' },
  { q: 'Do you only work with large enterprises?', a: 'No. We work from single-founder startups through 500+ employee enterprises, across 15+ industries. Zoho One’s per-user pricing scales with you, and so does our engagement model.' },
  { q: 'What happens after go-live?', a: 'Every implementation includes a support window, and most clients continue on a Managed Services / AMC plan for quarterly audits, new workflow requests, and continuous optimization as your business changes.' },
  { q: 'Can you migrate us from Salesforce, HubSpot, or Tally?', a: 'Yes — clean data migration from Salesforce, HubSpot, Tally, SAP, and most legacy systems is a core part of our Migrations & Integrations service, with zero data loss as the baseline requirement, not an upsell.' },
];

export const BLOG_POSTS = [
  { slug: 'zoho-erp-guide-manufacturing', icon: 'Factory', tag: 'ERP Guide', title: 'The Complete Guide to Zoho ERP for Indian Manufacturing Companies', excerpt: 'A comprehensive walkthrough of implementing Zoho One as a full ERP — covering BOM, production, inventory, finance, and HR.', meta: '12 min · June 2025', featured: true,
    body: [
      'Most manufacturers outgrow spreadsheets long before they outgrow Tally or a generic accounting package. The gap usually shows up first on the shop floor: nobody can say, with confidence, what a job actually costs once labor, machine time, and wastage are accounted for.',
      'Zoho One closes that gap by treating manufacturing as one connected process rather than a set of disconnected tools. Zoho Inventory handles bill-of-materials and multi-warehouse stock; Zoho Books turns that into real job costing and GST-compliant accounting; Zoho CRM and Desk keep the commercial side — quotes, orders, after-sales support — tied to the same customer record.',
      'The practical starting point is almost never "turn everything on at once." A phased rollout — inventory and BOM first, finance second, HR and CRM third — gives your team room to adopt each piece without a production disruption. Most of our manufacturing clients are fully live within 8–10 weeks using this sequence.',
      'If you are still running production planning in Excel and reconciling it against Tally at month-end, that reconciliation gap is exactly what a properly configured Zoho ERP removes.',
    ] },
  { slug: 'zoho-crm-vs-salesforce', icon: 'Target', tag: 'CRM', title: 'Zoho CRM vs Salesforce: Which Is Right for Your Business?', meta: '5 min · May 2025',
    body: [
      'Salesforce and Zoho CRM both do the fundamentals well — pipelines, forecasting, automation, reporting. The real difference shows up in total cost of ownership and time-to-value, not in feature checklists.',
      'Salesforce is built for organizations that expect to hire a dedicated admin (or a partner on retainer) to maintain heavy customization. Zoho CRM is built so a lean team can configure and adjust it themselves — Blueprint for process automation, Deluge for custom logic, and a native bundle with Books, Desk, and Campaigns without stitching together separate vendor contracts.',
      'Cost is the other half of the decision. Zoho One bundles CRM with 45+ other applications at a fraction of what Salesforce charges for CRM alone plus its app ecosystem. For companies under roughly 500 employees, that difference usually funds the entire rest of the tech stack.',
      'The honest recommendation: if your sales process is already highly customized on Salesforce and switching cost is high, stay. If you are choosing a CRM for the first time, or your Salesforce org has become expensive to maintain, Zoho CRM is very likely the better fit.',
    ] },
  { slug: 'zoho-automation-workflows', icon: 'Zap', tag: 'Automation', title: '10 Zoho Workflows That Save 20 Hours a Week', meta: '8 min · April 2025',
    body: [
      'The highest-leverage automations are rarely the flashy ones. They are the small, repetitive handoffs between departments that nobody questions because "that\'s just how it\'s done."',
      'A few that consistently return the most time across our implementations: auto-assigning leads by territory the instant they hit CRM, generating and sending GST-compliant invoices the moment a deal closes, syncing new hires from Zoho People straight into payroll without re-entry, auto-escalating support tickets that breach SLA, and triggering low-stock purchase orders directly from Inventory.',
      'None of these require custom development — they are Deluge scripts and Blueprint workflows configurable inside the apps you already have. The pattern is always the same: find the manual step where someone copies data from one screen to another, and automate exactly that step first.',
    ] },
  { slug: 'gst-automation-zoho-books', icon: 'Wallet', tag: 'Finance', title: 'GST Automation with Zoho Books: Complete 2025 Guide', meta: '10 min · March 2025',
    body: [
      'GST compliance done manually costs most finance teams several days every month — reconciling GSTR-1 and GSTR-3B, matching e-invoices, chasing mismatched vendor filings. Zoho Books is built to remove nearly all of that manual reconciliation.',
      'Once configured correctly, Zoho Books auto-generates e-invoices in the required IRN format, tracks input tax credit against vendor filings, and prepares GSTR reports directly from your transaction data rather than a separate export-and-reformat step.',
      'The configuration details that actually matter: correct HSN/SAC mapping at the item level from day one, place-of-supply rules set up before your first multi-state invoice, and a reconciliation cadence (weekly, not just at filing deadline) so mismatches get caught while they are still small.',
      'Done right, GST filing goes from a multi-day monthly fire drill to a same-day review-and-submit task.',
    ] },
  { slug: 'zoho-people-implementation-mistakes', icon: 'Users', tag: 'HR', title: 'Zoho People Implementation: Common Mistakes to Avoid', meta: '6 min · Feb 2025',
    body: [
      'The most common failure mode with Zoho People is not a product limitation — it is rolling out attendance and leave policies before they have been fully documented and agreed internally. If your current leave policy has undocumented exceptions "everyone just knows about," the system will surface every one of those inconsistencies on day one.',
      'The second common mistake is skipping biometric/attendance integration testing before go-live. Attendance data feeds directly into payroll, so a mismatch here does not stay contained — it shows up as a payroll error weeks later, which is a much more painful place to debug it.',
      'The fix for both is the same: document policy exceptions and run a full parallel attendance cycle before switching payroll over. It adds a week to the timeline and removes almost all of the post-launch support tickets.',
    ] },
  { slug: 'zoho-analytics-executive-dashboards', icon: 'BarChart3', tag: 'Analytics', title: 'Building Executive Dashboards in Zoho Analytics', meta: '7 min · Jan 2025',
    body: [
      'Most "executive dashboards" fail for the same reason: they show everything the data team finds interesting instead of the handful of numbers a leadership team actually needs before a decision.',
      'Zoho Analytics can blend data across CRM, Books, Desk, and Inventory into a single model, which makes it tempting to build one enormous dashboard. Resist that. The dashboards that actually get opened every morning have five metrics or fewer, refresh on a schedule leadership trusts, and answer one question: are we on track this month, yes or no.',
      'Ask Zia, Analytics\' natural-language query feature, is worth enabling specifically so non-technical stakeholders can ask follow-up questions themselves instead of filing a report request and waiting a week for an answer.',
    ] },
];

export const CONTACT_METHODS = [
  { icon: 'Phone', label: 'India', value: '+91 8197905105', href: 'tel:+918197905105' },
  { icon: 'Phone', label: 'USA', value: '+1 281 609 3093', href: 'tel:+12816093093' },
  { icon: 'Mail', label: 'Email', value: 'viswanath.alikonda@appstechsoft.com', href: 'mailto:viswanath.alikonda@appstechsoft.com' },
  { icon: 'MessageCircle', label: 'WhatsApp', value: '+91 8197905105', href: 'https://wa.me/918197905105' },
];

export const OFFICES = ['🇮🇳 Bangalore', '🇮🇳 Nellore', '🇺🇸 Houston TX', '🇦🇪 Abu Dhabi', '🇬🇧 Liverpool', '🇩🇪 Munich'];

export const SERVICE_OPTIONS = ['Not sure — need an assessment', 'Zoho One Implementation', 'Zoho CRM Customization', 'Zoho ERP', 'Zoho Finance Suite', 'Zoho HR & People', 'Zoho Creator Custom App', 'Zoho Migration / Integration'];
