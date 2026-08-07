/* ================================================================
   AppsTech Soft — React Application
   Built with React 18 + Babel Standalone
   Requires: React, ReactDOM, Babel (CDN), icons.js
================================================================ */

/* eslint-disable */

const {useState,useEffect,useRef,useCallback}=React;

// ─── LOGO ────────────────────────────────────────────────────────────────────
const LogoMark=()=><svg width="36" height="36" viewBox="0 0 64 64" fill="none"><circle cx="38" cy="18" r="9" fill="#2ECC71"/><path d="M31 24 Q20 30 19 43" stroke="#2ECC71" strokeWidth="7" strokeLinecap="round"/><circle cx="46" cy="38" r="9" fill="#3B8EF0"/><path d="M38 37 Q28 32 19 38" stroke="#3B8EF0" strokeWidth="7" strokeLinecap="round"/><circle cx="22" cy="48" r="9" fill="#F5C518"/><path d="M28 43 Q34 33 36 22" stroke="#F5C518" strokeWidth="7" strokeLinecap="round"/></svg>;

// ─── ZOHO ICONS ──────────────────────────────────────────────────────────────
// ZI icons built from window._ICONS (loaded outside Babel)
const ZI = {};
Object.keys(window._ICONS||{}).forEach(k=>{
  ZI[k] = <img src={window._ICONS[k]} alt={"Zoho "+k} style={{width:"100%",height:"100%",objectFit:"contain",borderRadius:6,display:"block"}} />;
});

// ─── ROUTER ──────────────────────────────────────────────────────────────────
const useRouter=()=>{
  const get=()=>window.location.hash.slice(1)||'home';
  const [page,setPage]=useState(get);
  const nav=useCallback(p=>{window.location.hash=p;setPage(p);window.scrollTo({top:0,behavior:'smooth'});}, []);
  useEffect(()=>{const h=()=>setPage(get());window.addEventListener('hashchange',h);return()=>window.removeEventListener('hashchange',h);},[]);
  return {page,nav};
};

// ─── COUNTER ─────────────────────────────────────────────────────────────────
const Counter=({to,suffix=''})=>{
  const [v,setV]=useState(0);const ref=useRef();
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting){
        const dur=2000,s=performance.now();
        const step=n=>{const p=Math.min((n-s)/dur,1),ease=1-Math.pow(1-p,3);setV(Math.round(ease*to));if(p<1)requestAnimationFrame(step);};
        requestAnimationFrame(step);obs.disconnect();
      }
    },{threshold:.5});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[to]);
  return <span ref={ref}>{v}{suffix}</span>;
};

// ─── FADE IN ─────────────────────────────────────────────────────────────────
const FI=({children,delay=0,className=''})=>{
  const ref=useRef();const [v,setV]=useState(false);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);obs.disconnect();}},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[]);
  return <div ref={ref} className={`fi${v?' v':''} ${className}`} style={{transitionDelay:`${delay}s`}}>{children}</div>;
};

// ─── METRIC BAR ──────────────────────────────────────────────────────────────
const MBar=({label,val,pct})=>{
  const ref=useRef();const [w,setW]=useState(0);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setTimeout(()=>setW(pct),150);obs.disconnect();}},{threshold:.3});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[pct]);
  return(<div ref={ref} style={{marginBottom:20}}>
    <div className="mbar-row"><span>{label}</span><span>{val}</span></div>
    <div className="mbar-bg"><div className="mbar-fill" style={{width:`${w}%`}}/></div>
  </div>);
};

// ─── HERO CANVAS ─────────────────────────────────────────────────────────────
const HeroCanvas=()=>{
  const ref=useRef();
  useEffect(()=>{
    const c=ref.current;if(!c)return;
    const ctx=c.getContext('2d');let pts=[],mouse={x:null,y:null},raf;
    const N=70,D=130,MD=160;
    const resize=()=>{c.width=window.innerWidth;c.height=c.parentElement.offsetHeight||window.innerHeight;};
    function P(){this.x=Math.random()*c.width;this.y=Math.random()*c.height;this.vx=(Math.random()-.5)*.3;this.vy=(Math.random()-.5)*.3;this.r=Math.random()*1.2+.4;this.a=Math.random()*.25+.06;}
    P.prototype.upd=function(){
      this.x+=this.vx;this.y+=this.vy;
      if(this.x<0||this.x>c.width)this.vx*=-1;
      if(this.y<0||this.y>c.height)this.vy*=-1;
      if(mouse.x){const dx=this.x-mouse.x,dy=this.y-mouse.y,d=Math.sqrt(dx*dx+dy*dy);if(d<MD){const f=(MD-d)/MD*.015;this.vx+=dx*f;this.vy+=dy*f;}}
      const sp=Math.sqrt(this.vx*this.vx+this.vy*this.vy);if(sp>1)this.vx*=.97,this.vy*=.97;
    };
    const init=()=>{pts=[];for(let i=0;i<N;i++)pts.push(new P());};
    const draw=()=>{
      ctx.clearRect(0,0,c.width,c.height);
      for(let i=0;i<pts.length;i++){
        const p=pts[i];p.upd();
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(140,165,255,${p.a})`;ctx.fill();
        for(let j=i+1;j<pts.length;j++){
          const q=pts[j],dx=p.x-q.x,dy=p.y-q.y,d=Math.sqrt(dx*dx+dy*dy);
          if(d<D){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(101,116,255,${(1-d/D)*.08})`;ctx.lineWidth=.6;ctx.stroke();}
        }
      }
      raf=requestAnimationFrame(draw);
    };
    const hero=c.parentElement;
    const mm=e=>{const r=hero.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;};
    const ml=()=>{mouse.x=null;mouse.y=null;};
    hero.addEventListener('mousemove',mm);hero.addEventListener('mouseleave',ml);
    window.addEventListener('resize',()=>{resize();init();});
    resize();init();draw();
    return()=>{cancelAnimationFrame(raf);hero.removeEventListener('mousemove',mm);hero.removeEventListener('mouseleave',ml);};
  },[]);
  return <canvas ref={ref} style={{position:'absolute',inset:0,zIndex:1,opacity:.6}}/>;
};

// ─── PROCESS ANIMATED LINE ───────────────────────────────────────────────────
const ProcLine=()=>{
  const ref=useRef();const [w,setW]=useState(0);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setTimeout(()=>setW(100),200);obs.disconnect();}},{threshold:.3});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[]);
  return <div className="proc-line" ref={ref}><div className="proc-line-fill" style={{width:`${w}%`}}/></div>;
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const SVCS=[
  {ico:'⚡',t:'Zoho One Implementation',d:'End-to-end setup of 45+ Zoho apps — Sales, Finance, HR, Operations — unified on one platform.',feat:true},
  {ico:'🎯',t:'Zoho CRM Customization',d:'Custom pipelines, workflows, dashboards. Deep integrations with WhatsApp, Gmail, LinkedIn.'},
  {ico:'🏭',t:'Zoho ERP for Manufacturing',d:'BOM, work orders, production costing, multi-warehouse inventory, and supply chain.'},
  {ico:'💰',t:'Zoho Finance Suite',d:'GST-compliant accounting, automated invoicing, multi-currency inventory dashboards.'},
  {ico:'🤖',t:'Workflow Automation & AI',d:'Eliminate manual work with Deluge scripting, intelligent automations, and Zia AI.'},
  {ico:'🔧',t:'Zoho Creator Custom Apps',d:'Low-code custom apps for unique business processes — 550+ integrations, mobile-ready.'},
  {ico:'👥',t:'HR & People Solutions',d:'Zoho People and Payroll — automate hiring, attendance, leave, payroll, and compliance.'},
  {ico:'🛡️',t:'Managed Services',d:'Ongoing support, quarterly audits, and continuous optimization with dedicated AMC plans.'},
  {ico:'☁️',t:'Migrations & Integrations',d:'Migrate from Salesforce, HubSpot, Tally, SAP. API connections to payment gateways.'},
];

const PRODS=[
  {id:'crm',l:'Zoho CRM',cat:'CRM & Sales',desc:'The most comprehensive CRM configured for your exact sales process. Automate pipelines, integrate every touchpoint.',
   feats:['Lead capture & pipeline automation','WhatsApp, Gmail & LinkedIn integrations','AI-powered Zia insights & forecasting','Custom modules, roles & Deluge workflows'],
   kpis:[{n:'₹4.2Cr',l:'Pipeline'},{n:'87',l:'Deals'},{n:'68%',l:'Win Rate'}],bars:[55,70,45,88,62,78,72,95],
   rows:[{t:'Acme Corp — ₹48L',b:'Proposal Sent',bs:'bs-b'},{t:'TechStartup — ₹22L',b:'Negotiation',bs:'bs-y'},{t:'GlobalMfg — ₹1.2Cr',b:'Closed Won ✓',bs:'bs-g'}]},
  {id:'books',l:'Zoho Books',cat:'Finance & Accounting',desc:'Complete GST-compliant accounting. From invoicing to financial reporting — fully automated.',
   feats:['GST filing & e-invoicing automation','Bank reconciliation & cash flow','Multi-currency, multi-warehouse inventory','CRM → Books → Inventory integration'],
   kpis:[{n:'₹82L',l:'Revenue MTD'},{n:'₹12L',l:'Receivables'},{n:'99%',l:'GST Filed'}],bars:[58,72,52,84,68,91,76,96],
   rows:[{t:'INV-2025-0891 — GlobalMfg',b:'Paid ✓',bs:'bs-g'},{t:'INV-2025-0890 — Acme Corp',b:'Due in 5 days',bs:'bs-y'},{t:'INV-2025-0889 — TechCo',b:'Sent',bs:'bs-b'}]},
  {id:'one',l:'Zoho One',cat:'All-in-One Suite',desc:'The operating system for your entire business. 45+ integrated apps replacing your patchwork of tools.',
   feats:['45+ apps at $37/user/month','All apps talk to each other natively','Single sign-on & unified admin console','Scales from startup to enterprise'],
   kpis:[{n:'45+',l:'Apps'},{n:'1',l:'Login'},{n:'∞',l:'Scale'}],bars:[],rows:[]},
  {id:'people',l:'Zoho People',cat:'HR & Workforce',desc:'Cloud-based HR management from hiring to retiring. Automated, compliant, and employee-friendly.',
   feats:['Attendance, leave & biometric integration','Payroll & PF/ESI/TDS compliance','Performance management & appraisals','Employee self-service portal'],
   kpis:[{n:'248',l:'Employees'},{n:'97%',l:'Attendance'},{n:'12',l:'On Leave'}],bars:[],
   rows:[{t:'Rajesh Kumar',b:'Present',bs:'bs-g'},{t:'Priya Mehta',b:'On Leave',bs:'bs-y'},{t:'Arun Sharma',b:'WFH',bs:'bs-b'}]},
  {id:'creator',l:'Zoho Creator',cat:'Low-Code Dev',desc:'Build powerful custom apps without heavy coding. Solve unique business problems with Deluge scripting.',
   feats:['Drag-and-drop multi-device app builder','Deluge scripting for complex logic','550+ prebuilt integrations via API','AI-powered workflows with Zia'],
   kpis:[{n:'550+',l:'Integrations'},{n:'5min',l:'Deploy'},{n:'100%',l:'No-Code'}],bars:[],rows:[]},
  {id:'analytics',l:'Zoho Analytics',cat:'Business Intelligence',desc:'Self-service BI turning raw data into actionable dashboards. Ask Zia in plain English.',
   feats:['500+ pre-built reports & dashboards','Ask Zia — AI natural language queries','Cross-app data blending & modeling','Scheduled executive reports'],
   kpis:[{n:'+28%',l:'Revenue MoM'},{n:'18',l:'Reports'},{n:'4.2s',l:'Query'}],bars:[38,52,44,68,58,82,74,95],
   rows:[{t:'Q2 Revenue vs Target',b:'↑ 18% ahead',bs:'bs-g'},{t:'Churn rate this quarter',b:'2.1% ↓',bs:'bs-g'}]},
  {id:'projects',l:'Zoho Projects',cat:'Project Mgmt',desc:'Enterprise project management connecting teams, clients, and deliverables with Gantt and Kanban.',
   feats:['Gantt, Kanban & Scrum boards','Resource allocation & time tracking','Budget tracking & billing integration','Client portals & automated reports'],
   kpis:[{n:'48',l:'Active'},{n:'94%',l:'On Time'},{n:'₹2.4Cr',l:'Managed'}],bars:[],rows:[]},
  {id:'desk',l:'Zoho Desk',cat:'Customer Support',desc:'Context-aware help desk with AI-powered ticket management and full CRM integration.',
   feats:['Multi-channel ticket management','Zia AI — auto ticket classification','SLA management & escalation rules','Self-service portal & knowledge base'],
   kpis:[{n:'94%',l:'CSAT'},{n:'2.4h',l:'Resolution'},{n:'12',l:'Open'}],bars:[],
   rows:[{t:'#8821 — Billing issue',b:'High',bs:'bs-r'},{t:'#8820 — Login error',b:'Medium',bs:'bs-y'},{t:'#8819 — Feature request',b:'Low',bs:'bs-g'}]},
];

const TESTIMONIALS=[
  {av:'DZ',name:'Dr. Zaheesh Moideen',role:'CEO',co:'DakshOne Connect',txt:'Their Zoho CRM integration transformed our lead management. We track every inquiry and automate follow-ups effortlessly. Conversion rate improved by 40% in the first quarter.',color:'#6574FF'},
  {av:'PM',name:'Mr. Prashanth M. R.',role:'Managing Director',co:'Unique-Q Tech',txt:'They unified sales and support through Zoho CRM and Desk. Our entire journey from enquiry to invoicing is now fully streamlined. After-support remains exceptional.',color:'#A78BFA'},
  {av:'GJ',name:'Mr. Gaurav Jain',role:'Founder',co:'Ratan Papers',txt:'Zoho Books and Inventory transformed our distribution. Real-time stock across 3 warehouses, GST automation, and order tracking — live in just 6 weeks.',color:'#22D3EE'},
  {av:'SB',name:'Mr. Sanjay Bora',role:'Founder',co:'BoraClasses',txt:'Zoho CRM automated student inquiries, course tracking, and payment follow-ups. Managing batches and conversions is now completely effortless.',color:'#34D399'},
  {av:'AV',name:'Mr. Amit Verma',role:'Director',co:'InaPharma',txt:'Complete visibility from inquiry to order. Automated lead tracking and regulatory follow-ups across departments. Implementation exceeded all expectations.',color:'#F87171'},
  {av:'PS',name:'Ms. Priya Sharma',role:'Co-Founder',co:'SweetenLife',txt:'Zoho connected our e-commerce, CRM, and support seamlessly. Managing customer data and marketing campaigns in one dashboard is a game-changer.',color:'#FBBF24'},
];

const INDS=[
  {ico:'🏭',t:'Manufacturing',d:'BOM, work orders, production costing, multi-warehouse inventory.'},
  {ico:'🏥',t:'Healthcare',d:'Patient management, appointment workflows, regulatory compliance.'},
  {ico:'🛒',t:'Retail & E-Commerce',d:'Omnichannel inventory, order management, customer loyalty.'},
  {ico:'🚚',t:'Logistics',d:'Order-to-cash automation, credit control, margin tracking.'},
  {ico:'🏗️',t:'Construction',d:'Project costs, vendor management, site workforce, compliance.'},
  {ico:'🎓',t:'Education',d:'Student lifecycle, fee collection, attendance, parent portals.'},
  {ico:'💼',t:'Professional Services',d:'Client management, project billing, utilization dashboards.'},
  {ico:'💊',t:'Pharma & Life Sciences',d:'Regulatory tracking, batch compliance, SFA for pharma.'},
];

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const Nav=({page,nav,theme,toggle})=>{
  const [sc,setSc]=useState(false);const [mob,setMob]=useState(false);
  useEffect(()=>{const h=()=>setSc(window.scrollY>50);window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h);},[]);
  const LINKS=[{id:'home',l:'Home'},{id:'services',l:'Services'},{id:'products',l:'Products'},{id:'industries',l:'Industries'},{id:'about',l:'About'},{id:'blog',l:'Insights'}];
  const go=p=>{nav(p);setMob(false);};
  useEffect(()=>{const el=document.getElementById('sp');const h=()=>{const p=(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight))*100;if(el)el.style.width=p+'%';};window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h);},[]);
  return(<>
    <nav className={sc?'sc':''}>
      <div className="nlogo" onClick={()=>go('home')}><div style={{flexShrink:0}}><LogoMark/></div><span className="nlogo-txt">AppsTech<em>Soft</em></span></div>
      <ul className="nlinks">{LINKS.map(l=><li key={l.id}><a className={page===l.id?'act':''} onClick={()=>go(l.id)}>{l.l}</a></li>)}</ul>
      <div className="ncta">
        <button className="tgl" onClick={toggle} title="Toggle theme">{theme==='light'?'☀️':'🌙'}</button>
        <button className="btn btn-ghost" onClick={()=>go('contact')}>Contact</button>
        <button className="btn btn-prim" onClick={()=>go('contact')}>Free Consultation</button>
      </div>
      <div className="hbg" onClick={()=>setMob(!mob)}><span/><span/><span/></div>
    </nav>
    <div className={`mob${mob?' open':''}`}>
      {LINKS.map(l=><a key={l.id} onClick={()=>go(l.id)}>{l.l}</a>)}
      <button className="btn btn-prim" onClick={()=>go('contact')} style={{display:'block',textAlign:'center',marginTop:16,borderRadius:10}}>Free Consultation</button>
    </div>
  </>);
};

// ─── TESTIMONIAL MARQUEE ─────────────────────────────────────────────────────
const TestiMarquee=()=>{
  const doubled=[...TESTIMONIALS,...TESTIMONIALS,...TESTIMONIALS,...TESTIMONIALS];
  const doubled2=[...TESTIMONIALS.slice().reverse(),...TESTIMONIALS.slice().reverse(),...TESTIMONIALS.slice().reverse(),...TESTIMONIALS.slice().reverse()];
  const Card=({t})=>(
    <div className="tcard">
      <div className="tcard-qt">"</div>
      <div className="tcard-stars">{[1,2,3,4,5].map(i=><span key={i} className="tcard-star"/>)}</div>
      <p className="tcard-txt">{t.txt}</p>
      <div className="tcard-auth">
        <div className="tcard-av" style={{background:`linear-gradient(135deg,${t.color},#6574FF)`}}>{t.av}</div>
        <div style={{flex:1}}>
          <div className="tcard-name">{t.name}</div>
          <div className="tcard-role">{t.role}</div>
        </div>
        <div className="tcard-co">🏢 {t.co}</div>
      </div>
    </div>
  );
  return(<div>
    <div className="testi-wrap"><div className="testi-track fwd">{doubled.map((t,i)=><Card key={i} t={t}/>)}</div></div>
    <div className="testi-wrap" style={{marginTop:0}}><div className="testi-track rev">{doubled2.map((t,i)=><Card key={i} t={t}/>)}</div></div>
  </div>);
};

// ─── ZOHO PRODUCT PANEL ───────────────────────────────────────────────────────
const ZPanel=({p})=>(
  <div className="zpanel act">
    <div className="zpanel-info fi v">
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:18}}>
        <div style={{width:50,height:50,flexShrink:0}}>{ZI[p.id]}</div>
        <span className="tag" style={{marginBottom:0}}>{p.cat}</span>
      </div>
      <h3>{p.l}</h3>
      <p>{p.desc}</p>
      <div className="zpanel-feats">
        {p.feats.map(f=><div key={f} className="zpanel-feat">
          <div className="zpanel-feat-dot"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#6574FF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>{f}
        </div>)}
      </div>
      <button className="btn btn-prim">Implement {p.l}</button>
    </div>
    <div className="zmock fi v" style={{transitionDelay:'.15s'}}>
      <div className="zmock-hdr"><div className="zdots"><div className="zdot" style={{background:'#FF5F57'}}/><div className="zdot" style={{background:'#FEBC2E'}}/><div className="zdot" style={{background:'#28C840'}}/></div><span className="zmock-ttl">{p.l} — Dashboard</span></div>
      <div className="zmock-body">
        <div className="zkpi">{p.kpis.map(k=><div key={k.l} className="zkpi-c"><div className="zkpi-n">{k.n}</div><div className="zkpi-l">{k.l}</div></div>)}</div>
        {p.bars.length>0&&<div className="zmock-chart">{p.bars.map((h,i)=><div key={i} className="zmock-bar" style={{height:`${h}%`}}/>)}</div>}
        {p.rows.map((r,i)=><div key={i} className="zmock-row"><span style={{color:'var(--t2)'}}>{r.t}</span><span className={`bs ${r.bs}`}>{r.b}</span></div>)}
      </div>
    </div>
  </div>
);

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer=({nav})=>(
  <footer>
    <div className="foot-g">
      <div>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:4,cursor:'pointer'}} onClick={()=>nav('home')}>
          <LogoMark/><span className="nlogo-txt">AppsTech<em>Soft</em></span>
        </div>
        <p>Certified Zoho Consulting Partner transforming businesses through intelligent digital solutions across India, USA, UAE, UK & Germany.</p>
        <div className="foot-soc">
          <a href="https://www.linkedin.com/company/www.appstechsoft.com/" target="_blank">in</a>
          <a href="https://www.facebook.com/people/Appstech-Soft/61562974785323/" target="_blank">fb</a>
          <a href="https://www.zoho.com/partners/" target="_blank">zo</a>
        </div>
      </div>
      <div className="foot-col"><h4>Services</h4><ul>{['Zoho One','Zoho CRM','Zoho ERP','Finance Suite','HR Solutions','Managed Services'].map(s=><li key={s}><a onClick={()=>nav('services')}>{s}</a></li>)}</ul></div>
      <div className="foot-col"><h4>Products</h4><ul>{['Zoho CRM','Zoho Books','Zoho One','Zoho People','Zoho Creator','Zoho Analytics'].map(s=><li key={s}><a onClick={()=>nav('products')}>{s}</a></li>)}</ul></div>
      <div className="foot-col"><h4>Company</h4><ul>
        <li><a onClick={()=>nav('industries')}>Industries</a></li>
        <li><a onClick={()=>nav('about')}>Our Process</a></li>
        <li><a onClick={()=>nav('blog')}>Blog</a></li>
        <li><a onClick={()=>nav('contact')}>Contact</a></li>
      </ul></div>
    </div>
    <div className="foot-bot">
      <p>© 2025 AppsTech Soft. All rights reserved. Zoho Authorized Partner.</p>
      <div className="fbl">
        <a href="https://www.appstechsoft.com/privacy-policy" target="_blank">Privacy</a>
        <a href="https://www.appstechsoft.com/terms-conditions" target="_blank">Terms</a>
      </div>
    </div>
  </footer>
);

// ═══════════════════════════════════════════════════════════════
// PAGES
// ═══════════════════════════════════════════════════════════════
const HomePage=({nav})=>{
  const [tab,setTab]=useState('crm');
  const prod=PRODS.find(p=>p.id===tab);
  return(<div className="page">
    {/* HERO */}
    <section className="hero">
      <HeroCanvas/>
      <div className="orb orb1"/><div className="orb orb2"/><div className="orb orb3"/>
      <div className="hero-inner">
        <FI><div className="hero-badge"><div className="hero-badge-dot"/>&nbsp;Zoho Authorized Consulting Partner — Trusted by 200+ Businesses</div></FI>
        <FI delay={.1}><h1>Transforming<br/><span className="grd">Businesses Through</span><br/><span style={{color:'var(--t1)'}}>Intelligent</span> <span className="grd">Solutions</span></h1></FI>
        <FI delay={.2}><p className="hero-sub">Certified Zoho Consulting Partner helping organizations streamline operations, automate processes, and accelerate growth across India, USA, UAE, UK & Germany.</p></FI>
        <FI delay={.3}><div className="hero-ctas">
          <button className="btn btn-prim btn-lg" onClick={()=>nav('contact')}>📅 Schedule Free Consultation</button>
          <button className="btn btn-outline btn-lg" onClick={()=>nav('services')}>Explore Services →</button>
        </div></FI>
        <div className="hero-div"/>
        <FI delay={.4}><div className="hero-stats">
          {[{n:500,s:'+',l:'PROJECTS DELIVERED'},{n:200,s:'+',l:'CLIENTS WORLDWIDE'},{n:10,s:'+',l:'YEARS EXPERIENCE'},{n:98,s:'%',l:'CLIENT RETENTION'}].map(s=>(
            <div key={s.l}><div className="hs-num"><Counter to={s.n} suffix={s.s}/></div><div className="hs-label">{s.l}</div></div>
          ))}
        </div></FI>
      </div>
      <div className="pcard">
        <div className="pcard-inner">
          <div style={{fontSize:13,fontWeight:800,color:'var(--t1)',marginBottom:14,letterSpacing:'-.01em'}}>🏆 Zoho Authorized Partner</div>
          <div style={{display:'flex',gap:6,justifyContent:'center',flexWrap:'wrap',marginBottom:18}}>
            {['Zoho One','CRM+','Creator','Finance+','People'].map(t=><span key={t} style={{background:'rgba(79,106,242,.1)',border:'1px solid rgba(79,106,242,.2)',borderRadius:4,padding:'3px 10px',fontSize:11,color:'#8BA4E8',fontWeight:700}}>{t}</span>)}
          </div>
          <div style={{fontSize:11,color:'var(--t3)',borderTop:'1px solid var(--bdr)',paddingTop:14,marginBottom:6}}>Global offices in</div>
          <div style={{fontSize:22,letterSpacing:5}}>🇮🇳🇺🇸🇦🇪🇬🇧🇩🇪</div>
        </div>
      </div>
    </section>

    {/* TRUST MARQUEE */}
    <div className="trust-wrap">
      <div className="trust-track">
        {[...Array(2)].flatMap(()=>['DakshOne Connect','Unique-Q Tech India','BoraClasses','Ratan Papers','SweetenLife','InaPharma','GlobalMfg','TechStartup Ltd','AcmeCorp India','DigitalPharma Co'].map(n=>(
          <div key={n+Math.random()} className="trust-item"><span>🏢</span>{n}</div>
        )))}
      </div>
    </div>

    {/* STATS */}
    <div className="stats-full">
      <div className="stats-g">
        {[{ico:'🚀',n:500,s:'+',l:'Projects Delivered',sub:'15+ industries'},
          {ico:'🌍',n:200,s:'+',l:'Clients Worldwide',sub:'3 continents, 6 countries'},
          {ico:'🎓',n:10,s:'+',l:'Years Experience',sub:'Est. 2014'},
          {ico:'⭐',n:98,s:'%',l:'Client Retention',sub:'4.9 / 5.0 avg rating'}].map(s=>(
          <div key={s.l} className="stat-c">
            <span className="stat-ico">{s.ico}</span>
            <span className="stat-n"><Counter to={s.n} suffix={s.s}/></span>
            <div className="stat-l">{s.l}</div>
            <div className="stat-s">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>

    {/* SERVICES BENTO */}
    <section className="sec sec-d">
      <FI><div className="tag">What We Do</div></FI>
      <FI delay={.1}><h2 className="h2">End-to-End <span className="grd">Digital Solutions</span></h2></FI>
      <FI delay={.2}><p className="sub">From CRM automation to full ERP — we architect, configure, and optimize the complete Zoho ecosystem for your business.</p></FI>
      <div className="bento">
        {SVCS.map((s,i)=>(
          <div key={s.t} className={`bcard${s.feat?' feat':''}${i===1||i===2?' wide':''}`} onClick={()=>nav('services')}>
            <div className="bcard-inner">
              <span className="bcard-num">{String(i+1).padStart(2,'0')}</span>
              <div className="bico">{s.ico}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <span className="bcard-link">Explore → </span>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ZOHO PRODUCTS */}
    <section className="sec sec-dk">
      <FI><div className="tag" style={{color:'#A78BFA',background:'rgba(167,139,250,.1)',borderColor:'rgba(167,139,250,.2)'}}>Zoho Expertise</div></FI>
      <FI delay={.1}><h2 className="h2">The Complete Zoho <span className="grd">Ecosystem</span></h2></FI>
      <FI delay={.2}><p className="sub">Deep expertise across every Zoho product — not just CRM.</p></FI>
      <div className="ztabs">
        {PRODS.slice(0,4).map(p=>(
          <button key={p.id} className={`ztab${tab===p.id?' act':''}`} onClick={()=>setTab(p.id)}>
            <div className="ztab-ic">{ZI[p.id]}</div>
            <span className="ztab-l">{p.l.replace('Zoho ','')}</span>
            <span className="ztab-dot"/>
          </button>
        ))}
      </div>
      {prod&&<ZPanel p={prod}/>}
      <div style={{textAlign:'center',marginTop:40}}>
        <button className="btn btn-ghost" onClick={()=>nav('products')}>View All 8 Zoho Products →</button>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="sec sec-d" style={{paddingBottom:0,paddingLeft:0,paddingRight:0}}>
      <div style={{padding:'0 max(24px,7vw)',marginBottom:48}}>
        <FI><div className="tag">Client Stories</div></FI>
        <FI delay={.1}><h2 className="h2">Trusted by <span className="grd">Leaders</span></h2></FI>
        <FI delay={.2}><p className="sub">Real results. Real businesses. Here's what our clients say.</p></FI>
      </div>
      <TestiMarquee/>
    </section>

    {/* CTA BANNER */}
    <div className="cta-banner">
      <FI><div style={{maxWidth:600,margin:'0 auto'}}>
        <div className="tag">Get Started Today</div>
        <h2 className="h2" style={{marginTop:12,marginBottom:16}}>Ready to <span className="grd">Transform Your Business?</span></h2>
        <p style={{color:'var(--t2)',fontSize:17,lineHeight:1.75,marginBottom:40}}>Schedule a free 45-minute discovery call. We identify quick wins and deliver a custom roadmap on the call.</p>
        <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
          <button className="btn btn-prim btn-lg" onClick={()=>nav('contact')}>📅 Book Free Consultation</button>
          <button className="btn btn-outline btn-lg" onClick={()=>nav('about')}>Learn Our Process</button>
        </div>
      </div></FI>
    </div>
  </div>);
};

// ─── SERVICES PAGE ────────────────────────────────────────────────────────────
const ServicesPage=({nav})=>(
  <div className="page">
    <div className="phero">
      <div className="bc"><span onClick={()=>nav('home')}>Home</span> / Services</div>
      <FI><h1>Our <span className="grd">Services</span></h1></FI>
      <FI delay={.1}><p>End-to-end Zoho implementation, customization, and managed services — covering every part of your business.</p></FI>
    </div>
    <section className="sec sec-dk">
      <div className="bento">
        {SVCS.map((s,i)=>(
          <div key={s.t} className={`bcard${i===0?' feat':''}`} onClick={()=>nav('contact')}>
            <div className="bcard-inner">
              <span className="bcard-num">{String(i+1).padStart(2,'0')}</span>
              <div className="bico">{s.ico}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <span className="bcard-link">Get started →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="sec sec-d">
      <div className="why-g">
        <div>
          <FI><div className="tag">Why AppsTech Soft</div></FI>
          <FI delay={.1}><h2 className="h2">We Don't Just Implement.<br/><span className="grd">We Transform.</span></h2></FI>
          <FI delay={.2}><p style={{color:'var(--t2)',marginBottom:0,lineHeight:1.75,fontSize:16}}>Unlike generic IT vendors, we bring certified Zoho expertise, proven playbooks, and a genuine ROI-first approach.</p></FI>
          <div className="why-pts" style={{marginTop:36}}>
            {[{ico:'🚀',t:'3× Faster Implementation',d:'Pre-built frameworks cut implementation from months to weeks.'},
              {ico:'🎓',t:'Certified Domain Experts',d:'Every consultant holds Zoho certifications backed by real-world experience.'},
              {ico:'📊',t:'ROI-Focused Delivery',d:'We tie every implementation to measurable KPIs from day one.'},
              {ico:'🌍',t:'Global, Local Expertise',d:'Offices in USA, India, UAE, UK & Germany.'}].map((p,i)=>(
              <FI key={p.t} delay={i*.1}>
                <div className="why-pt"><div className="why-pt-ic">{p.ico}</div><div><h4>{p.t}</h4><p>{p.d}</p></div></div>
              </FI>
            ))}
          </div>
        </div>
        <div className="why-card">
          <div style={{fontSize:14,fontWeight:700,color:'var(--t1)',marginBottom:28,position:'relative',letterSpacing:'-.01em'}}>Performance Benchmarks</div>
          <MBar label="Implementation Speed" val="3× faster" pct={90}/>
          <MBar label="User Adoption Rate" val="96%" pct={96}/>
          <MBar label="On-Time Delivery" val="94%" pct={94}/>
          <MBar label="Client Satisfaction" val="4.9 / 5.0" pct={98}/>
          <MBar label="Average ROI Delivered" val="340%" pct={88}/>
          <div className="roi-badge"><div className="roi-n">340%</div><div className="roi-l">Avg. ROI</div></div>
        </div>
      </div>
    </section>
  </div>
);

// ─── PRODUCTS PAGE ────────────────────────────────────────────────────────────
const ProductsPage=({nav})=>{
  const [tab,setTab]=useState('crm');
  const prod=PRODS.find(p=>p.id===tab);
  return(<div className="page">
    <div className="phero">
      <div className="bc"><span onClick={()=>nav('home')}>Home</span> / Zoho Products</div>
      <FI><h1>The Complete Zoho <span className="grd">Ecosystem</span></h1></FI>
      <FI delay={.1}><p>Deep expertise across every Zoho product — not just CRM. We implement, customize, and integrate the full suite.</p></FI>
    </div>
    <section className="sec sec-dk">
      <div className="ztabs">{PRODS.map(p=>(
        <button key={p.id} className={`ztab${tab===p.id?' act':''}`} onClick={()=>setTab(p.id)}>
          <div className="ztab-ic">{ZI[p.id]}</div>
          <span className="ztab-l">{p.l.replace('Zoho ','')}</span>
          <span className="ztab-dot"/>
        </button>
      ))}</div>
      {prod&&<ZPanel p={prod}/>}
    </section>
    <section className="sec sec-d" style={{textAlign:'center'}}>
      <h2 className="h2" style={{marginBottom:16}}>Need a Custom <span className="grd">Integration?</span></h2>
      <p style={{color:'var(--t2)',marginBottom:32,maxWidth:480,margin:'0 auto 32px'}}>We connect Zoho to any third-party system — ERP, payments, e-commerce, WhatsApp Business.</p>
      <button className="btn btn-prim btn-lg" onClick={()=>nav('contact')}>Discuss Requirements →</button>
    </section>
  </div>);
};

// ─── INDUSTRIES PAGE ──────────────────────────────────────────────────────────
const IndustriesPage=({nav})=>(
  <div className="page">
    <div className="phero">
      <div className="bc"><span onClick={()=>nav('home')}>Home</span> / Industries</div>
      <FI><h1>Built for Your <span className="grd">Industry</span></h1></FI>
      <FI delay={.1}><p>Deep vertical expertise means faster implementation and better outcomes for your specific context.</p></FI>
    </div>
    <section className="sec sec-dk">
      <div className="ind-g">{INDS.map(ind=>(
        <div key={ind.t} className="ind-c">
          <div className="ind-ico">{ind.ico}</div>
          <h3>{ind.t}</h3><p>{ind.d}</p>
          <span className="ind-badge">Zoho Certified ✓</span>
        </div>
      ))}</div>
    </section>
    <section className="sec sec-d" style={{textAlign:'center'}}>
      <h2 className="h2" style={{marginBottom:16}}>Don't See Your <span className="grd">Industry?</span></h2>
      <p style={{color:'var(--t2)',marginBottom:32}}>We work across 15+ sectors. Talk to us.</p>
      <button className="btn btn-prim btn-lg" onClick={()=>nav('contact')}>Talk to a Consultant →</button>
    </section>
  </div>
);

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
const AboutPage=({nav})=>(
  <div className="page">
    <div className="phero">
      <div className="bc"><span onClick={()=>nav('home')}>Home</span> / About</div>
      <FI><h1>Our Proven <span className="grd">Process</span></h1></FI>
      <FI delay={.1}><p>Six steps from first call to full adoption — zero disruption to your business.</p></FI>
    </div>
    <section className="sec proc-section">
      <div className="ctr">
        <div className="tag">How We Work</div>
        <h2 className="h2" style={{marginTop:12,marginBottom:12}}>Implementation <span className="grd">Timeline</span></h2>
        <p style={{color:'var(--t2)',fontSize:17,maxWidth:500,margin:'0 auto'}}>A proven 6-step methodology refined across 500+ projects.</p>
      </div>
      <div style={{position:'relative'}}>
        <ProcLine/>
        <div className="proc-g">
          {[{n:'01',t:'Discovery',p:'Deep-dive into current processes, pain points, and goals. We document every workflow.'},
            {n:'02',t:'Analysis',p:'Gap analysis, license recommendations, integration mapping, and risk assessment.'},
            {n:'03',t:'Strategy',p:'Detailed blueprint with phased rollout, timeline, resource allocation, and KPIs.'},
            {n:'04',t:'Implementation',p:'Configuration, customization, data migration, integrations, and Deluge scripting.'},
            {n:'05',t:'Optimization',p:'UAT, user training, performance tuning, and iteration before go-live.'},
            {n:'06',t:'Support',p:'Post-launch monitoring, helpdesk, quarterly audits, and continuous improvement.'}
          ].map(s=>(
            <div key={s.n} className="proc-step">
              <div className="proc-num">{s.n}</div>
              <span className="proc-step-tag">Step {s.n}</span>
              <h4>{s.t}</h4><p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="sec sec-d">
      <div style={{textAlign:'center',marginBottom:56}}>
        <div className="tag">Client Stories</div>
        <h2 className="h2" style={{marginTop:12}}>What Our Clients <span className="grd">Say</span></h2>
      </div>
      <TestiMarquee/>
    </section>
  </div>
);

// ─── BLOG PAGE ────────────────────────────────────────────────────────────────
const BlogPage=({nav})=>{
  const posts=[
    {ico:'🏭',tag:'ERP Guide',t:'The Complete Guide to Zoho ERP for Indian Manufacturing Companies',ex:'A comprehensive walkthrough of implementing Zoho One as a full ERP — covering BOM, production, inventory, finance, and HR.',meta:'12 min · June 2025',ft:true},
    {ico:'🎯',tag:'CRM',t:'Zoho CRM vs Salesforce: Which is Right for Your Business?',meta:'5 min · May 2025',ft:false},
    {ico:'⚡',tag:'Automation',t:'10 Zoho Workflows That Save 20 Hours a Week',meta:'8 min · April 2025',ft:false},
    {ico:'💰',tag:'Finance',t:'GST Automation with Zoho Books: Complete 2025 Guide',meta:'10 min · March 2025',ft:false},
    {ico:'👥',tag:'HR',t:'Zoho People Implementation: Common Mistakes to Avoid',meta:'6 min · Feb 2025',ft:false},
    {ico:'📊',tag:'Analytics',t:'Building Executive Dashboards in Zoho Analytics',meta:'7 min · Jan 2025',ft:false},
  ];
  return(<div className="page">
    <div className="phero">
      <div className="bc"><span onClick={()=>nav('home')}>Home</span> / Insights</div>
      <FI><h1>Zoho Knowledge <span className="grd">Hub</span></h1></FI>
      <FI delay={.1}><p>Expert guides and insights from our certified Zoho consultants.</p></FI>
    </div>
    <section className="sec sec-dk">
      <div className="blog-g">
        {posts.slice(0,3).map(p=>(
          <div key={p.t} className={`blog-c${p.ft?' ft':''}`}>
            <div className="blog-thumb"><span className="blog-ico">{p.ico}</span></div>
            <div className="blog-body">
              <span className="blog-tag">{p.tag}</span>
              <h3>{p.t}</h3>
              {p.ex&&<p style={{fontSize:13,color:'var(--t2)',lineHeight:1.65,marginTop:6}}>{p.ex}</p>}
              <div className="blog-meta"><span>{p.meta}</span><span className="blog-read">Read more →</span></div>
            </div>
          </div>
        ))}
      </div>
      <div className="blog-g" style={{marginTop:16}}>
        {posts.slice(3).map(p=>(
          <div key={p.t} className="blog-c">
            <div className="blog-thumb" style={{height:120}}><span className="blog-ico">{p.ico}</span></div>
            <div className="blog-body">
              <span className="blog-tag">{p.tag}</span>
              <h3>{p.t}</h3>
              <div className="blog-meta"><span>{p.meta}</span><span className="blog-read">Read more →</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>);
};

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
const ContactPage=({nav})=>{
  const [sent,setSent]=useState(false);
  const submit=()=>{setSent(true);setTimeout(()=>setSent(false),5000);};
  return(<div className="page">
    <div className="phero">
      <div className="bc"><span onClick={()=>nav('home')}>Home</span> / Contact</div>
      <FI><h1>Let's Build Something <span className="grd">Together</span></h1></FI>
      <FI delay={.1}><p>Free 45-minute discovery call. We assess your setup, identify quick wins, and deliver a roadmap — on the call.</p></FI>
    </div>
    <section className="sec sec-dk">
      <div className="ctact-g">
        <div>
          <FI><div className="tag">Get in Touch</div>
          <h2 className="h2" style={{marginBottom:18}}>Ready to <span className="grd">Transform?</span></h2>
          <p style={{color:'var(--t2)',marginBottom:36,lineHeight:1.75,fontSize:15}}>Our certified consultants respond within 2 business hours. No sales pitch — just an honest conversation about how we can help.</p></FI>
          {[{ico:'📞',l:'India',v:'+91 8197905105'},{ico:'📞',l:'USA',v:'+1 281 609 3093'},{ico:'✉️',l:'Email',v:'viswanath.alikonda@appstechsoft.com'},{ico:'💬',l:'WhatsApp',v:'+91 8197905105'}].map(m=>(
            <div key={m.l} className="cm"><div className="cm-ic">{m.ico}</div><div><div className="cm-l">{m.l}</div><div className="cm-v">{m.v}</div></div></div>
          ))}
          <div style={{marginTop:28}}>
            {['🇮🇳 Bangalore','🇮🇳 Nellore','🇺🇸 Houston TX','🇦🇪 Abu Dhabi','🇬🇧 Liverpool','🇩🇪 Munich'].map(l=><span key={l} className="lbadge">{l}</span>)}
          </div>
        </div>
        <FI delay={.2}><div className="cform">
          <div className="cform-title">Book Free Consultation</div>
          <div className="cform-sub">Response within 2 business hours</div>
          <div className="fr"><div className="fg"><label>First Name</label><input type="text" placeholder="Rajesh"/></div><div className="fg"><label>Last Name</label><input type="text" placeholder="Kumar"/></div></div>
          <div className="fg"><label>Work Email</label><input type="email" placeholder="rajesh@company.com"/></div>
          <div className="fr"><div className="fg"><label>Phone</label><input type="tel" placeholder="+91 98XXX XXXXX"/></div><div className="fg"><label>Company Size</label><select><option>Select size</option><option>1–10</option><option>11–50</option><option>51–200</option><option>201–500</option><option>500+</option></select></div></div>
          <div className="fg"><label>What do you need?</label><select><option>Select service</option><option>Zoho One Implementation</option><option>Zoho CRM Customization</option><option>Zoho ERP</option><option>Zoho Finance Suite</option><option>Zoho HR & People</option><option>Zoho Creator Custom App</option><option>Zoho Migration / Integration</option><option>Not sure — need assessment</option></select></div>
          <div className="fg"><label>Tell us your requirements</label><textarea placeholder="Describe your challenges and goals..."/></div>
          <button className="cform-btn" onClick={submit} style={sent?{background:'linear-gradient(135deg,#059669,#2563EB)'}:{}}>{sent?"✓ Booked! We will be in touch within 2 hours.":"Schedule Free Consultation →"}</button>
          <div className="cform-note">🔒 Your information is secure. No spam, ever.</div>
        </div></FI>
      </div>
    </section>
  </div>);
};

// ═══════════════════════════════════════════════════════════════
// APP
// ═══════════════════════════════════════════════════════════════
const App=()=>{
  const {page,nav}=useRouter();
  const [theme,setTheme]=useState(()=>localStorage.getItem('ats-theme')||'dark');
  useEffect(()=>{document.documentElement.classList.toggle('light',theme==='light');localStorage.setItem('ats-theme',theme);},[theme]);
  const toggle=()=>setTheme(t=>t==='light'?'dark':'light');
  const PAGES={home:HomePage,services:ServicesPage,products:ProductsPage,industries:IndustriesPage,about:AboutPage,blog:BlogPage,contact:ContactPage};
  const Page=PAGES[page]||HomePage;
  return(<>
    <Nav page={page} nav={nav} theme={theme} toggle={toggle}/>
    <main style={{minHeight:'100vh',paddingTop:72}}><Page nav={nav}/></main>
    <Footer nav={nav}/>
    <a className="wa" href="https://wa.me/918197905105" target="_blank" rel="noopener">💬</a>
  </>);
};
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);