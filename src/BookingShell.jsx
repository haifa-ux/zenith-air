import { useState, useRef, useEffect } from "react";

const TOKEN = {
  bg: "#F8F6F1",
  text: "#1A1A1A",
  accent: "#C9A96E",
  secondary: "#E8E8E4",
  muted: "#9A9A94",       // decorative only — SVG strokes, dividers, disabled states
  mutedText: "#5A5A5A",   // body/secondary readable text — passes WCAG AA
  subtle: "#8A7D6B",      // warm mid-tone for taglines, placeholders, light UI labels
  rangeBg: "#F5EDD9",
};

// ── Responsive hook ───────────────────────────────────────────────
const useIsMobile = () => {
  const [mobile, setMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return mobile;
};

const JetSVG = ({ width, selected }) => {
  const fill = selected ? "#A8833A" : "#C9A96E";
  return (
    <svg width={width} height={width} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      <path fill={fill} d="M511.068,259.125c-1.516-2.156-4.578-3.156-7.484-2.469l-171.859,23c-1.172,6.094-3.109,12.484-6.234,15.922c0.031-0.172,0.063-0.328-0.047,0.047c-0.016-9.75-1.75-11.063-5.859-35.188c-5.859-21.672-13.438-37.75-22.766-48.859l21.109-9.719c1.938-0.703,2.953-2.828,2.25-4.781c-0.688-1.938-2.828-2.953-4.781-2.266l-28.813,7.047c-7.078-5.219-14.953-8.266-23.625-9.297l-3.078-33.156c0.016-2.078-1.641-3.766-3.703-3.781c-2.062-0.016-3.75,1.641-3.781,3.688l-3.313,33.234c-8.688,1.047-16.578,4.078-23.672,9.313l-28.813-7.047c-1.953-0.688-4.094,0.328-4.781,2.266c-0.703,1.953,0.313,4.078,2.25,4.781l21.109,9.719c-9.328,11.109-16.906,27.188-22.766,48.859c-4.109,24.125-5.844,25.438-5.859,35.188c0.016,0.047,0.047,0.125,0.063,0.203c-0.016-0.016-0.031-0.031-0.063-0.063c-3.188-3.438-5.125-9.938-6.297-16.109l-171.828-23c-2.922-0.688-5.984,0.313-7.484,2.469c-1.531,2.156-1.172,4.969,0.891,6.906c7.281,10.188,25.688,16.188,35.063,20.531l50.406,13.188c-0.531,0.406-1.031,0.813-1.516,1.234c-4.844,4.266-8.219,10.313-9.031,17.219c-0.125,1.078-0.188,2.156-0.188,3.25c0,6.813,2.547,13.156,6.828,18c4.25,4.828,10.297,8.203,17.203,9.031l0,0l0.172,0.016l-0.141-0.016c1.078,0.125,2.141,0.188,3.219,0.188c6.797,0,13.156-2.547,18-6.828c4.844-4.25,8.219-10.297,9.016-17.203c0.141-1.094,0.203-2.172,0.203-3.234c0-3.797-0.797-7.438-2.219-10.75l72.422,18.969c12.703,16.281,32.484,26.75,54.719,26.75c22.25,0,42.031-10.469,54.734-26.75l72.422-18.969c-1.422,3.313-2.219,6.953-2.219,10.75c0,1.063,0.063,2.141,0.203,3.234c0.797,6.906,4.188,12.953,9.016,17.203c4.844,4.281,11.203,6.828,18.016,6.828c1.063,0,2.141-0.063,3.203-0.188l-0.328,0.047l0.359-0.047c6.906-0.828,12.969-4.203,17.203-9.031c4.281-4.844,6.844-11.188,6.844-18c0-1.094-0.078-2.172-0.203-3.25c-0.813-6.906-4.188-12.953-9.031-17.219c-0.484-0.422-0.984-0.828-1.5-1.234l50.391-13.188c9.375-4.344,27.781-10.344,35.063-20.531C512.225,264.094,512.584,261.281,511.068,259.125z M102.194,334.891l-0.172-0.031l0.188,0.031C102.209,334.891,102.209,334.891,102.194,334.891z M117.288,323.031v-0.016c-0.422,3.469-2.078,6.422-4.5,8.563c-2.422,2.156-5.563,3.406-8.938,3.406c-0.547,0-1.078-0.031-1.641-0.094c-3.469-0.422-6.406-2.078-8.563-4.484c-2.125-2.438-3.391-5.578-3.391-8.953c0-0.547,0.031-1.094,0.094-1.641c0.422-3.469,2.063-6.406,4.5-8.563c2.422-2.141,5.563-3.391,8.938-3.391c0.531,0,1.078,0.031,1.609,0.094h0.016c3.484,0.422,6.422,2.063,8.563,4.5c2.141,2.422,3.406,5.563,3.406,8.953C117.381,321.938,117.35,322.469,117.288,323.031z M250.788,252.094h-20.859c-7.016,0-12.703-5.688-12.703-12.688c0-7.031,5.688-12.719,12.703-12.719h20.859V252.094z M282.068,252.094h-20.844v-25.406h20.844c7.016,0,12.703,5.688,12.703,12.719C294.771,246.406,289.084,252.094,282.068,252.094z M409.803,334.891c-0.016,0-0.016,0-0.016,0l0.359-0.047L409.803,334.891z M418.35,330.406c-2.141,2.406-5.094,4.063-8.563,4.484c-0.563,0.063-1.094,0.094-1.625,0.094c-3.391,0-6.531-1.25-8.953-3.406c-2.422-2.141-4.078-5.094-4.5-8.563c-0.063-0.547-0.094-1.078-0.094-1.609c0-3.391,1.266-6.531,3.406-8.953c2.141-2.438,5.094-4.078,8.563-4.5h0.016c0.531-0.063,1.078-0.094,1.609-0.094c3.375,0,6.516,1.25,8.953,3.391c2.422,2.156,4.063,5.094,4.484,8.563c0.063,0.547,0.094,1.094,0.094,1.641C421.74,324.828,420.49,327.969,418.35,330.406z" />
      <path fill={fill} d="M186.553,295.766c0,0,0-0.094,0-0.141C186.381,295.031,186.553,295.766,186.553,295.766z" />
    </svg>
  );
};

const JETS = [
  { id: "light",   category: "Light Jet",   description: "Nimble and efficient for regional travel",              specs: { passengers: 7,  range: "1,500 nm", cabin: "4.8 ft" }, recommendation: "Perfect for short hops under 3 hours with up to 7 passengers",                                        models: "Citation CJ3  ·  Phenom 300  ·  Learjet 75",            svgWidth: 80  },
  { id: "midsize", category: "Midsize Jet", description: "The balance of range, comfort, and versatility",        specs: { passengers: 9,  range: "2,800 nm", cabin: "5.7 ft" }, recommendation: "Ideal for cross-country flights with up to 9 passengers in a stand-up cabin",                      models: "Citation Latitude  ·  Challenger 350  ·  Hawker 900XP", svgWidth: 110 },
  { id: "heavy",   category: "Heavy Jet",   description: "Intercontinental range with a full cabin experience",   specs: { passengers: 14, range: "4,500 nm", cabin: "6.2 ft" }, recommendation: "Built for long-haul travel — sleep, dine, and arrive refreshed with up to 14 guests",               models: "Gulfstream G550  ·  Global 6000  ·  Falcon 7X",          svgWidth: 140 },
];

const AIRPORTS = [
  { code: "KTEB",   name: "Teterboro Airport",          city: "New York",     state: "NJ" },
  { code: "KLAS",   name: "Harry Reid International",   city: "Las Vegas",    state: "NV" },
  { code: "KLAX",   name: "Los Angeles International",  city: "Los Angeles",  state: "CA" },
  { code: "KSNA",   name: "John Wayne Airport",         city: "Orange County",state: "CA" },
  { code: "KMIA",   name: "Miami International",        city: "Miami",        state: "FL" },
  { code: "KBOS",   name: "Logan International",        city: "Boston",       state: "MA" },
  { code: "KORD",   name: "O'Hare International",       city: "Chicago",      state: "IL" },
  { code: "KPBI",   name: "Palm Beach International",   city: "Palm Beach",   state: "FL" },
  { code: "KSAN",   name: "San Diego International",    city: "San Diego",    state: "CA" },
  { code: "KASPEN", name: "Aspen/Pitkin County",        city: "Aspen",        state: "CO" },
];

const STEPS = [
  { id: 1, label: "Route"      },
  { id: 2, label: "Aircraft"   },
  { id: 3, label: "Departure"  },
  { id: 4, label: "Passengers" },
  { id: 5, label: "Catering"   },
  { id: 6, label: "Transport"  },
  { id: 7, label: "Summary"    },
];

const DAY_LABELS   = ["Su","Mo","Tu","We","Th","Fr","Sa"];
const MONTH_NAMES  = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTH_SHORT  = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAY_NAMES    = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const PREF_OPTIONS = [
  { id: "pets",        label: "Travelling with pets"              },
  { id: "children",    label: "Travelling with children"          },
  { id: "wheelchair",  label: "Requires wheelchair accessibility" },
];

// ── Menu data ─────────────────────────────────────────────────────
const MENU = [
  {
    id: "breakfast",
    title: "Breakfast",
    description: "Thoughtfully composed morning service",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.1" />
        <path d="M11 2v2M11 18v2M2 11h2M18 11h2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M4.93 4.93l1.41 1.41M15.66 15.66l1.41 1.41M4.93 17.07l1.41-1.41M15.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
    items: [
      { id: "b1", name: "Smoked Salmon Brioche",    desc: "House-cured salmon, crème fraîche, capers, dill" },
      { id: "b2", name: "Fresh Fruit Platter",       desc: "Seasonal selection, honey yoghurt, mint" },
      { id: "b3", name: "Avocado Toast",              desc: "Sourdough, heirloom tomato, micro herbs, sea salt" },
      { id: "b4", name: "Freshly Baked Croissants",  desc: "French butter pastry, preserves, clotted cream" },
      { id: "b5", name: "Granola & Greek Yoghurt",   desc: "House granola, Manuka honey, fresh berries" },
    ],
  },
  {
    id: "lunch",
    title: "Lunch & Dinner",
    description: "Refined main service, prepared to order",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M7 3v5a4 4 0 0 0 8 0V3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 12v7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M8 19h6"  stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M3 3v16"  stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
    items: [
      { id: "l1", name: "Beef Tenderloin",        desc: "Truffle jus, potato gratin, haricot verts" },
      { id: "l2", name: "Pan-Seared Sea Bass",    desc: "Saffron beurre blanc, wilted spinach, lemon oil" },
      { id: "l3", name: "Lobster Bisque",          desc: "Cognac cream, chive oil, sourdough crostini" },
      { id: "l4", name: "Caesar Salad",            desc: "Romaine, house-made dressing, Grana Padano, anchovies" },
      { id: "l5", name: "Artisan Cheese Board",    desc: "Five selections, quince, Marcona almonds, lavash" },
    ],
  },
  {
    id: "drinks",
    title: "Cocktails & Drinks",
    description: "Curated cellar and bar selection",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 3h14l-6 8v6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 17h6"        stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
    items: [
      { id: "d1", name: "Champagne",               desc: "Vintage Bollinger, Laurent-Perrier Rosé available" },
      { id: "d2", name: "Still & Sparkling Water",  desc: "Acqua Panna, San Pellegrino, chilled" },
      { id: "d3", name: "Fresh Juices",             desc: "Cold-pressed orange, green apple, ginger shot" },
      { id: "d4", name: "Whiskey Selection",        desc: "Macallan 12, Glenfiddich 18, Maker's Mark" },
      { id: "d5", name: "Signature Cocktails",      desc: "Seasonal creations by our in-flight mixologist" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Sans:wght@300;400;500&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    @keyframes driftUp      { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
    @keyframes fadeIn       { from { opacity:0; } to { opacity:1; } }
    @keyframes dropdownOpen { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
    @keyframes recommendIn  { from { opacity:0; transform:translateY(8px);  } to { opacity:1; transform:translateY(0); } }
    @keyframes calendarIn   { from { opacity:0; transform:translateX(10px); } to { opacity:1; transform:translateX(0); } }
    @keyframes confirmIn    { from { opacity:0; transform:translateY(6px);  } to { opacity:1; transform:translateY(0); } }
    @keyframes timeSlideIn  { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
    @keyframes countPop     { 0%{transform:scale(1)} 40%{transform:scale(1.14)} 100%{transform:scale(1)} }
    @keyframes prefIn       { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
    @keyframes toastIn      { from { opacity:0; transform:translateY(4px);  } to { opacity:1; transform:translateY(0); } }
    @keyframes toastOut     { from { opacity:1; } to { opacity:0; } }

    .zenith-shell    { animation: fadeIn 0.8s ease both; }
    .zenith-progress { animation: driftUp 1s cubic-bezier(.25,.46,.45,.94) .15s both; }
    .zenith-content  { animation: driftUp 1s cubic-bezier(.25,.46,.45,.94) .35s both; }
    .step-node       { transition: background .5s ease, border-color .5s ease; }
    .step-connector  { transition: background .6s ease; }
    .step-label      { transition: color .4s ease, opacity .4s ease; }

    /* ── Focus states: champagne gold outline on all interactive elements ── */
    *:focus-visible {
      outline: 2px solid #C9A96E;
      outline-offset: 2px;
    }
    /* Suppress outline for mouse users; preserve for keyboard */
    input:focus, textarea:focus { outline: none; }

    /* ── Navigation buttons ── */
    .nav-btn { transition: background .3s ease, color .3s ease; cursor: pointer; min-height: 44px; min-width: 44px; }
    .nav-btn:hover:not(:disabled) { background: #1A1A1A !important; color: #F8F6F1 !important; }
    .nav-btn-primary:hover:not(:disabled) { background: #b8924f !important; }
    .nav-btn:focus-visible { outline: 2px solid #C9A96E; outline-offset: 2px; }

    /* ── Airport field ── */
    .airport-field-underline { position:absolute; bottom:0; left:0; height:1px; width:100%; background:#E8E8E4; transition:background .4s ease; }
    .airport-field-underline.focused { background:#C9A96E; }
    .airport-dropdown { animation: dropdownOpen .25s cubic-bezier(.25,.46,.45,.94) both; }
    .airport-option { transition: background .2s ease; cursor: pointer; min-height: 44px; }
    .airport-option:hover { background: #F8F6F1 !important; }
    .airport-option:focus-visible { outline: 2px solid #C9A96E; outline-offset: -2px; }

    /* ── Swap button ── */
    .swap-btn { transition: transform .5s cubic-bezier(.25,.46,.45,.94), border-color .3s ease; cursor:pointer; background:white; border:1px solid #E8E8E4; min-width:44px; min-height:44px; }
    .swap-btn:hover { border-color:#C9A96E !important; }
    .swap-btn.spinning { transform:rotate(180deg); }
    .swap-btn:focus-visible { outline: 2px solid #C9A96E; outline-offset: 2px; }

    /* ── Toggle pill ── */
    .trip-toggle-pill   { display:inline-flex; background:#E8E8E4; border-radius:100px; padding:3px; position:relative; }
    .trip-toggle-option { position:relative; z-index:1; border-radius:100px; border:none; background:transparent; font-family:"Noto Sans",sans-serif; font-weight:400; letter-spacing:.14em; text-transform:uppercase; cursor:pointer; transition:color .35s ease; min-height:44px; min-width:44px; display:flex; align-items:center; justify-content:center; }
    .trip-toggle-option:focus-visible { outline: 2px solid #C9A96E; outline-offset: 1px; }
    .trip-toggle-thumb  { position:absolute; top:3px; height:calc(100% - 6px); border-radius:100px; background:#fff; box-shadow:0 1px 4px rgba(26,26,26,.10); transition:left .4s cubic-bezier(.25,.46,.45,.94), width .4s cubic-bezier(.25,.46,.45,.94); pointer-events:none; }

    /* ── Jet card ── */
    .jet-card { transition: box-shadow .5s cubic-bezier(.25,.46,.45,.94), transform .5s cubic-bezier(.25,.46,.45,.94), background .4s ease, border-color .4s ease; cursor:pointer; }
    .jet-card:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(26,26,26,.09) !important; }
    .jet-card.selected { background:#FDFBF7 !important; }
    .jet-card:focus-visible { outline: 2px solid #C9A96E; outline-offset: 2px; }
    .recommend-line { animation: recommendIn .6s cubic-bezier(.25,.46,.45,.94) both; }

    input::placeholder { color:#8A7D6B; opacity:.8; }
    input:focus { outline:none; }

    /* ── Calendar ── */
    .cal-grid { animation: calendarIn .5s cubic-bezier(.25,.46,.45,.94) both; }
    .cal-day-wrap  { position:relative; display:flex; align-items:center; justify-content:center; }
    .cal-range-bg  { position:absolute; top:0; bottom:0; background:#F5EDD9; pointer-events:none; transition:opacity .3s ease; }
    /* Force square cells so border-radius:50% always renders a perfect circle */
    .cal-day { position:relative; z-index:1; display:flex; align-items:center; justify-content:center; width:36px; height:36px; min-width:36px; border-radius:50%; font-family:"Noto Sans",sans-serif; font-size:14px; font-weight:400; cursor:pointer; transition:background .25s ease, color .25s ease, transform .25s ease; border:none; background:transparent; letter-spacing:.02em; flex-shrink:0; aspect-ratio:1/1; }
    .cal-day:hover:not(.past):not(.empty) { background:rgba(201,169,110,.15); transform:scale(1.08); }
    .cal-day.today-ring   { box-shadow:inset 0 0 0 1.5px #C9A96E; }
    .cal-day.selected-dot { background:#C9A96E !important; color:#fff !important; transform:scale(1.08); }
    .cal-day.past { color:#ADADAA; cursor:default; pointer-events:none; }
    .cal-day:focus-visible { outline: 2px solid #C9A96E; outline-offset: 1px; }
    /* Mobile: override width/height but keep aspect-ratio square */
    @media (max-width: 768px) {
      .cal-day { width:auto; height:auto; min-width:0; font-size:14px !important; }
      .cal-day-wrap { aspect-ratio:1/1; }
    }
    .cal-month-nav { background:none; border:none; cursor:pointer; color:#5A5A5A; transition:color .25s ease, transform .3s ease; display:flex; align-items:center; justify-content:center; min-width:44px; min-height:44px; }
    .cal-month-nav:hover { color:#1A1A1A; transform:scale(1.1); }
    .cal-month-nav:disabled { opacity:.25; cursor:default; transform:none; }
    .cal-month-nav:focus-visible { outline: 2px solid #C9A96E; outline-offset: 2px; }

    /* ── Jet card mobile — proper stacked layout ── */
    @media (max-width: 768px) {
      .jet-card { flex-direction: column !important; }
      .jet-card-image { width: 100% !important; height: 120px !important; padding: 20px !important; border-right: none !important; border-bottom: 1px solid #E8E8E4 !important; flex-shrink: 0 !important; }
      .jet-card-body { flex: unset !important; width: 100% !important; padding: 16px 18px 18px !important; display: block !important; }
      .jet-card-divider { display: none !important; }
    }

    /* ── Time stepper ── */
    .time-stepper-btn { background:none; border:none; cursor:pointer; color:#5A5A5A; transition:color .25s ease, transform .2s ease; display:flex; align-items:center; justify-content:center; line-height:1; min-width:44px; min-height:36px; }
    .time-stepper-btn:hover { color:#C9A96E; transform:scale(1.15); }
    .time-stepper-btn:focus-visible { outline: 2px solid #C9A96E; outline-offset: 2px; }
    .time-value-btn   { font-family:"Cormorant Garamond",serif; font-size:42px; font-weight:300; color:#1A1A1A; letter-spacing:.02em; line-height:1; min-width:62px; text-align:center; background:none; border:none; cursor:text; padding:0; transition:color .2s ease; border-bottom:1.5px solid transparent; }
    .time-value-btn:hover { color:#C9A96E; border-bottom-color:rgba(201,169,110,.4); }
    .time-value-input { font-family:"Cormorant Garamond",serif; font-size:42px; font-weight:300; color:#C9A96E; letter-spacing:.02em; line-height:1; width:62px; text-align:center; background:none; border:none; border-bottom:1.5px solid #C9A96E; padding:0; outline:none; }
    .time-separator   { font-family:"Cormorant Garamond",serif; font-size:36px; font-weight:300; color:#C9A96E; line-height:1; align-self:flex-end; padding-bottom:2px; user-select:none; }
    .confirm-line  { animation: confirmIn  .7s cubic-bezier(.25,.46,.45,.94) both; }
    .time-block    { animation: timeSlideIn .55s cubic-bezier(.25,.46,.45,.94) both; }
    .dual-time-divider { width:1px; background:#E8E8E4; align-self:stretch; flex-shrink:0; margin:0 4px; }

    /* ── Passenger counter ── */
    .pax-count-btn { width:44px; height:44px; border-radius:50%; border:1.5px solid #C9A96E; background:transparent; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .3s ease, border-color .3s ease, opacity .3s ease, transform .2s ease; flex-shrink:0; }
    .pax-count-btn:hover:not(:disabled) { background:rgba(201,169,110,.10); transform:scale(1.08); }
    .pax-count-btn:disabled { border-color:#E8E8E4; opacity:.35; cursor:default; transform:none; }
    .pax-count-btn:focus-visible { outline: 2px solid #C9A96E; outline-offset: 2px; }
    .pax-count-num { animation: countPop .35s cubic-bezier(.25,.46,.45,.94) both; }
    .pax-count-display-btn { font-family:"Cormorant Garamond",serif; font-size:64px; font-weight:300; color:#1A1A1A; line-height:1; letter-spacing:.02em; background:none; border:none; padding:0; cursor:text; transition:color .25s ease; border-bottom:2px solid transparent; display:block; width:100%; text-align:center; }
    .pax-count-display-btn:hover { color:#C9A96E; border-bottom-color:rgba(201,169,110,.35); }
    .pax-count-edit-input { font-family:"Cormorant Garamond",serif; font-size:64px; font-weight:300; color:#C9A96E; line-height:1; letter-spacing:.02em; background:none; border:none; border-bottom:2px solid #C9A96E; padding:0; outline:none; width:80px; text-align:center; display:block; }

    .clamp-toast-enter { animation: toastIn  .4s cubic-bezier(.25,.46,.45,.94) both; }
    .clamp-toast-exit  { animation: toastOut .6s ease forwards; }

    /* ── Preference rows ── */
    .pref-row { display:flex; align-items:center; justify-content:space-between; padding:15px 0; border-bottom:1px solid #E8E8E4; animation: prefIn .5s cubic-bezier(.25,.46,.45,.94) both; cursor:pointer; min-height:44px; }
    .pref-row:last-child { border-bottom:none; }
    .pref-pill { width:44px; height:24px; border-radius:100px; position:relative; transition:background .4s cubic-bezier(.25,.46,.45,.94); flex-shrink:0; cursor:pointer; border:none; padding:0; }
    .pref-pill:focus-visible { outline: 2px solid #C9A96E; outline-offset: 3px; }
    .pref-pill-thumb { position:absolute; top:3px; width:18px; height:18px; border-radius:50%; background:#fff; box-shadow:0 1px 4px rgba(26,26,26,.18); transition:left .4s cubic-bezier(.25,.46,.45,.94); }

    /* ── Notes / textarea fields ── */
    .notes-field { width:100%; border:none; background:transparent; resize:none; font-family:"Noto Sans",sans-serif; font-size:14px; font-weight:300; color:#1A1A1A; letter-spacing:.02em; line-height:1.7; padding:0; }
    .notes-field::placeholder { color:#8A7D6B; opacity:1; }
    .notes-field:focus { outline:none; }
    .notes-underline { height:1px; background:#E8E8E4; transition:background .4s ease; margin-top:10px; }
    .notes-underline.focused { background:#C9A96E; }

    .cap-pill { display:inline-flex; align-items:center; gap:5px; padding:4px 10px; border-radius:100px; background:rgba(201,169,110,.10); border:1px solid rgba(201,169,110,.25); }

    /* ── Catering ── */
    .cat-card-header { transition: background .3s ease; }
    .cat-card-header:hover { background: rgba(201,169,110,.03) !important; }
    .cat-card-header:focus-visible { outline: 2px solid #C9A96E; outline-offset: -2px; }

    /* ── Quantity buttons ── */
    .qty-btn { min-width:44px; min-height:44px; }
    .qty-btn:focus-visible { outline: 2px solid #C9A96E; outline-offset: 2px; }

    /* ════════════════════════════════════════════════════════════════
       MOBILE RESPONSIVE — 768px breakpoint
    ════════════════════════════════════════════════════════════════ */
    @media (max-width: 768px) {

      /* Shell padding */
      .zenith-shell { padding: 28px 0 48px !important; }
      .zenith-content { margin-top: 28px !important; border-radius: 0 !important; border-left: none !important; border-right: none !important; }

      /* Progress rail — mobile variant */
      .progress-rail-desktop { display: none !important; }
      .progress-rail-mobile  { display: flex !important; }

      /* Step panels */
      .step-panel { padding: 32px 20px 32px !important; }

      /* Route selector */
      .route-fields { flex-direction: column !important; gap: 24px !important; }
      .swap-btn-wrap { align-self: center !important; margin-top: 0 !important; }
      .swap-btn { width: 44px !important; height: 44px !important; }

      /* Calendar — full width */
      .cal-grid { grid-template-columns: repeat(7, 1fr) !important; width: 100% !important; }
      .cal-day-header-grid { grid-template-columns: repeat(7, 1fr) !important; width: 100% !important; }
      .cal-day-wrap { width: auto !important; }

      /* Dual time — stack vertically */
      .dual-time-row { flex-direction: column !important; align-items: center !important; gap: 32px !important; }
      .dual-time-divider { display: none !important; }

      /* Catering item rows — taller tap targets */
      .catering-item-row { padding: 18px 0 !important; }
      .qty-btn { width: 44px !important; height: 44px !important; }

      /* Summary confirm button */
      .confirm-btn { width: 100% !important; padding: 22px 32px !important; }

      /* Spacing tweaks */
      .summary-panel { padding: 36px 20px 40px !important; }
      .catering-panel { padding: 32px 20px 32px !important; }
      .transport-panel { padding: 32px 20px 32px !important; }
    }
  `}</style>
);

// ── Toggle Pill ────────────────────────────────────────────────────
const TogglePill = ({ options, value, onChange, small }) => {
  const pillRef  = useRef(null);
  const btnRefs  = useRef([]);
  const [thumbStyle, setThumbStyle] = useState({ left: 3, width: 60 });
  useEffect(() => {
    const idx = options.indexOf(value);
    const btn = btnRefs.current[idx];
    const pill = pillRef.current;
    if (btn && pill) {
      const pR = pill.getBoundingClientRect(), bR = btn.getBoundingClientRect();
      setThumbStyle({ left: bR.left - pR.left, width: bR.width });
    }
  }, [value, options]);
  return (
    <div ref={pillRef} className="trip-toggle-pill">
      <div className="trip-toggle-thumb" style={thumbStyle} />
      {options.map((opt, i) => (
        <button key={opt} ref={el => (btnRefs.current[i] = el)} className="trip-toggle-option" onClick={() => onChange(opt)}
          style={{ color: value === opt ? TOKEN.text : TOKEN.muted, padding: small ? "5px 14px" : "6px 18px", fontSize: small ? "9px" : "10px" }}>
          {opt}
        </button>
      ))}
    </div>
  );
};

// ── Inline Time Field ─────────────────────────────────────────────
const TimeField = ({ value, onChange, min, max }) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const inputRef = useRef(null);
  const display = String(value).padStart(2, "0");
  const commit = raw => { const n = parseInt(raw, 10); if (!isNaN(n)) onChange(Math.max(min, Math.min(max, n))); setEditing(false); };
  const handleClick = () => { setDraft(display); setEditing(true); setTimeout(() => inputRef.current?.select(), 0); };
  const handleKeyDown = e => {
    if (e.key === "Enter") commit(draft);
    if (e.key === "Escape") setEditing(false);
    if (e.key === "ArrowUp")   { e.preventDefault(); const n = value + 1 > max ? min : value + 1; onChange(n); setDraft(String(n).padStart(2,"0")); }
    if (e.key === "ArrowDown") { e.preventDefault(); const n = value - 1 < min ? max : value - 1; onChange(n); setDraft(String(n).padStart(2,"0")); }
  };
  if (editing) return <input ref={inputRef} className="time-value-input" value={draft} onChange={e => setDraft(e.target.value)} onBlur={() => commit(draft)} onKeyDown={handleKeyDown} maxLength={2} />;
  return <button className="time-value-btn" onClick={handleClick} title="Click to edit">{display}</button>;
};

// ── Time Stepper ──────────────────────────────────────────────────
const ChevUp   = () => <svg width="14" height="9"  viewBox="0 0 14 9"  fill="none"><path d="M1 8L7 2L13 8"  stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ChevDown = () => <svg width="14" height="9"  viewBox="0 0 14 9"  fill="none"><path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const TimeStepper = ({ label, hour, minute, ampm, onHourChange, onMinuteChange, onAmpmChange, animDelay = 0 }) => {
  const stepHour   = d => onHourChange(h   => { let n = h   + d; if (n < 1) n = 12; if (n > 12) n = 1;  return n; });
  const stepMinute = d => onMinuteChange(m => { let n = m   + d * 5; if (n < 0) n = 55; if (n >= 60) n = 0; return n; });
  return (
    <div className="time-block" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", animationDelay: `${animDelay}s` }}>
      {label && <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: TOKEN.mutedText, fontWeight: 500, marginBottom: 16 }}>{label}</div>}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <button className="time-stepper-btn" onClick={() => stepHour(1)}><ChevUp /></button>
          <TimeField value={hour} onChange={v => onHourChange(() => v)} min={1} max={12} />
          <button className="time-stepper-btn" onClick={() => stepHour(-1)}><ChevDown /></button>
        </div>
        <div className="time-separator">:</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <button className="time-stepper-btn" onClick={() => stepMinute(1)}><ChevUp /></button>
          <TimeField value={minute} onChange={v => onMinuteChange(() => v)} min={0} max={59} />
          <button className="time-stepper-btn" onClick={() => stepMinute(-1)}><ChevDown /></button>
        </div>
        <div style={{ marginLeft: 8, alignSelf: "center" }}>
          <TogglePill options={["AM","PM"]} value={ampm} onChange={onAmpmChange} small />
        </div>
      </div>
    </div>
  );
};

// ── Calendar ──────────────────────────────────────────────────────
const Calendar = ({ departDate, returnDate, onSelect, isRoundTrip }) => {
  const isMobile = useIsMobile();
  const today = new Date(); today.setHours(0,0,0,0);
  const [viewYear,  setViewYear]  = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [calKey, setCalKey] = useState(0);
  const navigateMonth = dir => {
    setCalKey(k => k + 1);
    let m = viewMonth + dir, y = viewYear;
    if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; }
    setViewMonth(m); setViewYear(y);
  };
  const canGoPrev = !(viewYear === today.getFullYear() && viewMonth === today.getMonth());
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push({ empty: true, key: `e${i}` });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ date: new Date(viewYear, viewMonth, d), day: d, key: `d${d}` });
  const rem = cells.length % 7 === 0 ? 0 : 7 - (cells.length % 7);
  for (let i = 0; i < rem; i++) cells.push({ empty: true, key: `t${i}` });
  const isSameDay = (a,b) => a && b && a.getDate()===b.getDate() && a.getMonth()===b.getMonth() && a.getFullYear()===b.getFullYear();
  const isPast    = d => d < today;
  const isInRange = d => isRoundTrip && departDate && returnDate && d > departDate && d < returnDate;
  const isStart   = d => isRoundTrip && isSameDay(d, departDate) && returnDate;
  const isEnd_    = d => isRoundTrip && isSameDay(d, returnDate);
  const getRangeBg = idx => {
    if (!isRoundTrip || !departDate || !returnDate) return null;
    const cell = cells[idx]; if (!cell || cell.empty) return null;
    const d = cell.date;
    if (!isInRange(d) && !isStart(d) && !isEnd_(d)) return null;
    if (isStart(d)) return { left: "50%", right: "0%" };
    if (isEnd_(d))  return { left: "0%",  right: "50%" };
    return { left: "0%", right: "0%" };
  };
  const cellSize = isMobile ? undefined : 36;
  const gridCols = isMobile ? "repeat(7, 1fr)" : "repeat(7, 36px)";
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <button className="cal-month-nav" onClick={() => navigateMonth(-1)} disabled={!canGoPrev}
          aria-label="Previous month">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div>
          <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 22, fontWeight: 400, color: TOKEN.text, letterSpacing: ".06em" }}>{MONTH_NAMES[viewMonth]}</span>
          <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 22, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".06em", marginLeft: 8 }}>{viewYear}</span>
        </div>
        <button className="cal-month-nav" onClick={() => navigateMonth(1)}
          aria-label="Next month">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <div className="cal-day-header-grid" style={{ display: "grid", gridTemplateColumns: gridCols, gap: "0 4px", justifyContent: isMobile ? "stretch" : "center", marginBottom: 6 }}>
        {DAY_LABELS.map(d => <div key={d} style={{ textAlign: "center", fontFamily: "Noto Sans,sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase", color: TOKEN.mutedText, padding: "4px 0 10px" }}>{d}</div>)}
      </div>
      <div key={calKey} className="cal-grid" style={{ display: "grid", gridTemplateColumns: gridCols, gap: isMobile ? "2px" : "4px 4px", justifyContent: isMobile ? "stretch" : "center" }}>
        {cells.map((cell, idx) => {
          if (cell.empty) return <div key={cell.key} style={{ width: cellSize, height: cellSize ?? 40 }} />;
          const past=isPast(cell.date), isTday=isSameDay(cell.date,today), isDep=isSameDay(cell.date,departDate), isRet=isSameDay(cell.date,returnDate), rangeBg=getRangeBg(idx), inRange=isInRange(cell.date);
          let cls = "cal-day";
          if (past) cls += " past";
          if (isTday && !isDep && !isRet) cls += " today-ring";
          if (isDep || isRet) cls += " selected-dot";
          const label = `${MONTH_NAMES[viewMonth]} ${cell.day}, ${viewYear}${isDep?" (departure)":""}${isRet?" (return)":""}`;
          return (
            <div key={cell.key} className="cal-day-wrap" style={{ position: "relative", width: cellSize, height: isMobile ? 40 : cellSize }}>
              {(inRange || rangeBg) && <div className="cal-range-bg" style={{ left: rangeBg ? rangeBg.left : "0%", right: rangeBg ? rangeBg.right : "0%" }} />}
              <button className={cls} onClick={() => !past && onSelect(cell.date)}
                aria-label={label}
                aria-pressed={isDep || isRet}
                style={{ color: past ? undefined : isDep || isRet ? "#fff" : TOKEN.text, width: isMobile ? "100%" : 36, height: isMobile ? 40 : 36 }}>
                {cell.day}
              </button>
            </div>
          );
        })}
      </div>
      {isRoundTrip && <div style={{ marginTop: 14, textAlign: "center", fontFamily: "Noto Sans,sans-serif", fontSize: 12, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".08em", fontStyle: "italic", minHeight: 16, transition: "opacity .4s ease", opacity: !departDate || returnDate ? 0 : 1 }}>Now select your return date</div>}
    </div>
  );
};

// ── DateTimePicker ────────────────────────────────────────────────
const DateTimePicker = ({
  tripType, from, to,
  departDate, onDepartDateChange,
  depHour, onDepHourChange,
  depMinute, onDepMinuteChange,
  depAmpm, onDepAmpmChange,
}) => {
  const isRoundTrip = tripType === "Round Trip";
  const setDepartDate = onDepartDateChange;
  const setDepHour    = onDepHourChange;
  const setDepMinute  = onDepMinuteChange;
  const setDepAmpm    = onDepAmpmChange;
  const [returnDate, setReturnDate] = useState(null);
  const [retHour, setRetHour]   = useState(3);
  const [retMinute, setRetMinute] = useState(0);
  const [retAmpm, setRetAmpm]   = useState("PM");
  useEffect(() => { setDepartDate(null); setReturnDate(null); }, [tripType]);
  const handleSelect = d => {
    if (!isRoundTrip) { setDepartDate(d); return; }
    if (!departDate || returnDate) { setDepartDate(d); setReturnDate(null); return; }
    if (d <= departDate) { setDepartDate(d); setReturnDate(null); return; }
    setReturnDate(d);
  };
  const fmt = d => d ? `${MONTH_SHORT[d.getMonth()]} ${d.getDate()}` : null;
  const fmtLong = d => d ? `${DAY_NAMES[d.getDay()]}, ${MONTH_NAMES[d.getMonth()]} ${d.getDate()}` : null;
  const fmtTime = (h,m,ap) => `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")} ${ap}`;
  const fromCity = from?.city || "Origin"; const toCity = to?.city || "Destination";
  const showConfirm = isRoundTrip ? departDate && returnDate : !!departDate;
  const confirmKey  = isRoundTrip ? `${departDate}-${returnDate}-${depHour}-${depMinute}-${depAmpm}-${retHour}-${retMinute}-${retAmpm}` : `${departDate}-${depHour}-${depMinute}-${depAmpm}`;
  const isMobile = useIsMobile();
  return (
    <div className="step-panel" style={{ padding: "44px 40px 40px" }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: TOKEN.accent, fontWeight: 500, marginBottom: 10 }}>Step 3</div>
        <h2 style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 34, fontWeight: 300, color: TOKEN.text, letterSpacing: ".01em", lineHeight: 1.1 }}>When are you departing?</h2>
      </div>
      <div style={{ animation: "driftUp .7s cubic-bezier(.25,.46,.45,.94) .1s both" }}><Calendar departDate={departDate} returnDate={returnDate} onSelect={handleSelect} isRoundTrip={isRoundTrip} /></div>
      <div style={{ height: 1, background: TOKEN.secondary, margin: "32px 0", animation: "driftUp .7s cubic-bezier(.25,.46,.45,.94) .2s both" }} />
      <div style={{ animation: "driftUp .7s cubic-bezier(.25,.46,.45,.94) .3s both" }}>
        {!isRoundTrip ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: TOKEN.mutedText, fontWeight: 500, textAlign: "center", marginBottom: 20 }}>Departure Time</div>
            <TimeStepper hour={depHour} minute={depMinute} ampm={depAmpm} onHourChange={setDepHour} onMinuteChange={setDepMinute} onAmpmChange={setDepAmpm} />
          </div>
        ) : (
          <div key="dual" className="dual-time-row" style={{ display: "flex", alignItems: "flex-start", gap: 0, flexDirection: isMobile ? "column" : "row" }}>
            <TimeStepper label="Departure" hour={depHour} minute={depMinute} ampm={depAmpm} onHourChange={setDepHour} onMinuteChange={setDepMinute} onAmpmChange={setDepAmpm} animDelay={0} />
            {!isMobile && <div className="dual-time-divider" style={{ margin: "32px 16px 0" }} />}
            <TimeStepper label="Return" hour={retHour} minute={retMinute} ampm={retAmpm} onHourChange={setRetHour} onMinuteChange={setRetMinute} onAmpmChange={setRetAmpm} animDelay={0.12} />
          </div>
        )}
      </div>
      <div style={{ minHeight: 56, marginTop: 32, paddingTop: 24, borderTop: `1px solid ${TOKEN.secondary}` }}>
        {showConfirm ? (
          <div key={confirmKey} className="confirm-line" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}><circle cx="7.5" cy="7.5" r="6.5" stroke={TOKEN.accent} strokeWidth="1" /><path d="M7.5 4.5v3.5l2 2" stroke={TOKEN.accent} strokeWidth="1" strokeLinecap="round" /></svg>
            {!isRoundTrip ? (
              <p style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 14, fontWeight: 300, color: TOKEN.text, letterSpacing: ".04em", lineHeight: 1.6 }}>
                Departure set for <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 16, fontWeight: 400 }}>{fmtLong(departDate)}</span>
                <span style={{ color: TOKEN.mutedText, margin: "0 6px" }}>·</span>
                <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 16, fontWeight: 400, color: TOKEN.accent }}>{fmtTime(depHour, depMinute, depAmpm)}</span>
              </p>
            ) : (
              <p style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 14, fontWeight: 300, color: TOKEN.text, letterSpacing: ".04em", lineHeight: 1.8 }}>
                <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 16, fontWeight: 400 }}>{fromCity}</span>
                <span style={{ color: TOKEN.accent, margin: "0 7px", fontSize: 13 }}>→</span>
                <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 16, fontWeight: 400 }}>{toCity}</span>
                <span style={{ color: TOKEN.accent, margin: "0 7px", fontSize: 13 }}>→</span>
                <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 16, fontWeight: 400 }}>{fromCity}</span>
                <span style={{ color: TOKEN.mutedText, margin: "0 8px" }}>·</span>
                <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 16, fontWeight: 400, color: TOKEN.accent }}>{fmt(departDate)}</span>
                <span style={{ color: TOKEN.mutedText, margin: "0 5px", fontSize: 13 }}>–</span>
                <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 16, fontWeight: 400, color: TOKEN.accent }}>{fmt(returnDate)}</span>
              </p>
            )}
          </div>
        ) : (
          <p style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 14, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".06em", fontStyle: "italic" }}>
            {isRoundTrip && departDate && !returnDate ? "Now select your return date" : "Select a date to confirm your departure"}
          </p>
        )}
      </div>
    </div>
  );
};

// ── Passenger Config ──────────────────────────────────────────────
const PassengerConfig = ({ selectedJet, onCountChange, prefs, onPrefsChange }) => {
  const jetData = JETS.find(j => j.id === selectedJet);
  const maxPax  = jetData?.specs.passengers ?? 9;
  const [count, setCount]   = useState(1);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft]   = useState("");
  const [toast, setToast]   = useState(null);
  const [countKey, setCountKey] = useState(0);
  const setPrefs = onPrefsChange;
  const [notes, setNotes]   = useState("");
  const [notesFocused, setNotesFocused] = useState(false);
  const toastTimer = useRef(null);
  const inputRef   = useRef(null);

  useEffect(() => { if (count > maxPax) { setCount(maxPax); setCountKey(k => k+1); } }, [selectedJet, maxPax]);
  useEffect(() => { onCountChange?.(count); }, [count]);

  const showClampToast = (jetName, max) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ msg: `Maximum capacity for ${jetName} is ${max} passenger${max===1?"":"s"}`, phase: "in" });
    toastTimer.current = setTimeout(() => { setToast(t => t ? { ...t, phase: "out" } : null); setTimeout(() => setToast(null), 650); }, 2000);
  };
  const applyCount = raw => {
    const n = parseInt(raw, 10);
    if (isNaN(n) || n < 1) { setCount(1); setCountKey(k => k+1); }
    else if (n > maxPax) { setCount(maxPax); setCountKey(k => k+1); showClampToast(jetData?.category ?? "this aircraft", maxPax); }
    else { setCount(n); setCountKey(k => k+1); }
    setEditing(false);
  };
  const handleDisplayClick = () => { setDraft(String(count)); setEditing(true); setTimeout(() => inputRef.current?.select(), 0); };
  const handleEditKeyDown  = e  => { if (e.key==="Enter") applyCount(draft); if (e.key==="Escape") setEditing(false); };
  const decrement = () => { if (count > 1) { setCountKey(k => k+1); setCount(c => c-1); } };
  const increment = () => { if (count < maxPax) { setCountKey(k => k+1); setCount(c => c+1); } };
  const togglePref  = id => setPrefs({ ...prefs, [id]: !prefs[id] });
  const activePrefs = PREF_OPTIONS.filter(o => prefs[o.id]).map(o => o.label);
  const atMax = count >= maxPax, atMin = count <= 1;

  return (
    <div className="step-panel" style={{ padding: "44px 40px 40px" }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: TOKEN.accent, fontWeight: 500, marginBottom: 10 }}>Step 4</div>
        <h2 style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 34, fontWeight: 300, color: TOKEN.text, letterSpacing: ".01em", lineHeight: 1.1 }}>Who's travelling?</h2>
      </div>
      <div style={{ animation: "driftUp .6s cubic-bezier(.25,.46,.45,.94) .1s both" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
          <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: TOKEN.mutedText, fontWeight: 500 }}>Passengers</div>
          {jetData ? (
            <div className="cap-pill">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><circle cx="4.5" cy="2.5" r="1.5" stroke={TOKEN.accent} strokeWidth="1" /><path d="M1 8c0-1.93 1.57-3.5 3.5-3.5S8 6.07 8 8" stroke={TOKEN.accent} strokeWidth="1" strokeLinecap="round" /></svg>
              <span style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".14em", color: TOKEN.accent, fontWeight: 500, textTransform: "uppercase" }}>Max {maxPax} · {jetData.category}</span>
            </div>
          ) : <span style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 12, letterSpacing: ".12em", color: TOKEN.mutedText, fontStyle: "italic" }}>No aircraft selected</span>}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginBottom: 8 }}>
          <button className="pax-count-btn" onClick={decrement} disabled={atMin} aria-label={`Remove passenger, current count ${count}`}>
            <svg width="14" height="2" viewBox="0 0 14 2" fill="none"><path d="M1 1h12" stroke={atMin ? "#E8E8E4" : "#C9A96E"} strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
          <div style={{ textAlign: "center", minWidth: 80 }}>
            {editing
              ? <input ref={inputRef} className="pax-count-edit-input" value={draft} onChange={e => setDraft(e.target.value)} onBlur={() => applyCount(draft)} onKeyDown={handleEditKeyDown} maxLength={2} aria-label="Passenger count" />
              : <button key={countKey} className="pax-count-display-btn pax-count-num" onClick={handleDisplayClick} title="Click to edit" aria-label={`${count} ${count === 1 ? "passenger" : "passengers"}, click to edit`}>{count}</button>
            }
            <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: TOKEN.mutedText, fontWeight: 400, marginTop: 4 }}>{count === 1 ? "passenger" : "passengers"}</div>
          </div>
          <button className="pax-count-btn" onClick={increment} disabled={atMax} aria-label={`Add passenger, current count ${count}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke={atMax ? "#E8E8E4" : "#C9A96E"} strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginTop: 16 }}>
          {Array.from({ length: maxPax }).map((_,i) => (
            <div key={i} style={{ width: Math.max(4, Math.min(8, 280/maxPax-4)), height: 3, borderRadius: 2, background: i < count ? TOKEN.accent : TOKEN.secondary, transition: "background .35s ease", flexShrink: 0 }} />
          ))}
        </div>
        <div style={{ height: 28, marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {toast && <span className={toast.phase==="in" ? "clamp-toast-enter" : "clamp-toast-exit"} style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 10.5, fontWeight: 300, color: TOKEN.accent, letterSpacing: ".06em", textAlign: "center" }}>{toast.msg}</span>}
        </div>
      </div>
      <div style={{ height: 1, background: TOKEN.secondary, margin: "24px 0 32px", animation: "driftUp .6s cubic-bezier(.25,.46,.45,.94) .2s both" }} />
      <div style={{ animation: "driftUp .6s cubic-bezier(.25,.46,.45,.94) .25s both" }}>
        <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: TOKEN.mutedText, fontWeight: 500, marginBottom: 4 }}>Preferences</div>
        <div>
          {PREF_OPTIONS.map((opt, i) => {
            const active = prefs[opt.id];
            return (
              <div key={opt.id} className="pref-row" onClick={() => togglePref(opt.id)} style={{ animationDelay: `${0.3+i*0.07}s` }}>
                <span style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 13, fontWeight: 300, color: active ? TOKEN.text : TOKEN.mutedText, letterSpacing: ".02em", transition: "color .35s ease", userSelect: "none" }}>{opt.label}</span>
                <button className="pref-pill" onClick={e => { e.stopPropagation(); togglePref(opt.id); }} style={{ background: active ? TOKEN.accent : TOKEN.secondary }} aria-pressed={active} aria-label={opt.label}>
                  <div className="pref-pill-thumb" style={{ left: active ? "23px" : "3px" }} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ height: 1, background: TOKEN.secondary, margin: "32px 0", animation: "driftUp .6s cubic-bezier(.25,.46,.45,.94) .5s both" }} />
      <div style={{ animation: "driftUp .6s cubic-bezier(.25,.46,.45,.94) .55s both" }}>
        <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: notesFocused ? TOKEN.accent : TOKEN.mutedText, fontWeight: 500, marginBottom: 14, transition: "color .3s ease" }}>Special Requirements</div>
        <textarea className="notes-field" rows={3} value={notes} onChange={e => setNotes(e.target.value)} onFocus={() => setNotesFocused(true)} onBlur={() => setNotesFocused(false)} placeholder="Any additional passenger requirements..." />
        <div className={`notes-underline${notesFocused?" focused":""}`} />
      </div>
      <div style={{ minHeight: 52, marginTop: 32, paddingTop: 24, borderTop: `1px solid ${TOKEN.secondary}` }}>
        <div key={`${count}-${JSON.stringify(prefs)}`} className="confirm-line" style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="7.5" cy="7.5" r="6.5" stroke={TOKEN.accent} strokeWidth="1" /><path d="M7.5 4.5v3.5l2 2" stroke={TOKEN.accent} strokeWidth="1" strokeLinecap="round" /></svg>
          <p style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 12, fontWeight: 300, color: TOKEN.text, letterSpacing: ".04em", lineHeight: 1.8 }}>
            <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 15, fontWeight: 400 }}>{count} {count===1?"passenger":"passengers"}</span>
            {activePrefs.length > 0 && <><span style={{ color: TOKEN.muted, margin: "0 7px" }}>·</span><span style={{ color: TOKEN.muted }}>{activePrefs.join("  ·  ")}</span></>}
          </p>
        </div>
      </div>
    </div>
  );
};

// ── Jet Card & Picker ─────────────────────────────────────────────
const IconPax   = () => <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="3" r="2" stroke="#C9A96E" strokeWidth="1" /><path d="M1.5 10c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" /></svg>;
const IconRange = () => <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5h9M7 2.5l3 3-3 3" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const IconCabin = () => <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1v9M2 4l3.5-3 3.5 3" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const JetCard = ({ jet, selected, onSelect, delay }) => (
  <div
    className={`jet-card${selected?" selected":""}`}
    onClick={() => onSelect(jet.id)}
    role="button"
    tabIndex={0}
    aria-pressed={selected}
    aria-label={`Select ${jet.category}: ${jet.description}`}
    onKeyDown={e => (e.key === "Enter" || e.key === " ") && onSelect(jet.id)}
    style={{ display: "flex", flexDirection: "row", alignItems: "stretch", background: "#FFFFFF", border: `1px solid ${selected?TOKEN.accent:TOKEN.secondary}`, borderLeft: `3px solid ${selected?TOKEN.accent:"transparent"}`, borderRadius: 2, boxShadow: selected?"0 4px 24px rgba(201,169,110,.10)":"0 1px 4px rgba(26,26,26,.04)", animation: `driftUp .7s cubic-bezier(.25,.46,.45,.94) ${delay}s both`, overflow: "hidden" }}>
    <div className="jet-card-image" style={{ width: 168, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, background: selected?"rgba(201,169,110,.04)":"transparent", transition: "background .4s ease" }}>
      <JetSVG width={jet.svgWidth} selected={selected} />
    </div>
    <div className="jet-card-divider" style={{ width: 1, alignSelf: "stretch", background: TOKEN.secondary, opacity: 0.5, flexShrink: 0 }} />
    <div className="jet-card-body" style={{ flex: 1, minWidth: 0, padding: "20px 22px" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
        <h3 style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 21, fontWeight: 400, color: TOKEN.text, letterSpacing: ".01em", lineHeight: 1 }}>{jet.category}</h3>
        {selected && <span style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: TOKEN.accent, fontWeight: 500 }}>Selected</span>}
      </div>
      <p style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 14, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".02em", lineHeight: 1.4, marginBottom: 14 }}>{jet.description}</p>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {[{ icon: <IconPax />, value: `${jet.specs.passengers} pax` },{ icon: <IconRange />, value: jet.specs.range },{ icon: <IconCabin />, value: jet.specs.cabin }].map(({ icon, value }, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            {icon}
            <span style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 12, fontWeight: 400, letterSpacing: ".06em", color: selected?TOKEN.text:TOKEN.mutedText, transition: "color .4s ease" }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const JetPicker = ({ selectedJet, onJetChange }) => {
  const selectedJetData = JETS.find(j => j.id === selectedJet);
  return (
    <div className="step-panel" style={{ padding: "44px 40px 40px" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: TOKEN.accent, fontWeight: 500, marginBottom: 10 }}>Step 2</div>
        <h2 style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 34, fontWeight: 300, color: TOKEN.text, letterSpacing: ".01em", lineHeight: 1.1 }}>Select your aircraft</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {JETS.map((jet, i) => <JetCard key={jet.id} jet={jet} selected={selectedJet===jet.id} onSelect={onJetChange} delay={0.05+i*0.15} />)}
      </div>
      <div style={{ minHeight: 52, marginTop: 24, paddingTop: 20, borderTop: `1px solid ${TOKEN.secondary}` }}>
        {selectedJetData ? (
          <div key={selectedJet} className="recommend-line" style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}><circle cx="8" cy="8" r="6.5" stroke="#C9A96E" strokeWidth="1" /><path d="M8 5v4l2.5 2" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" /></svg>
            <div>
              <p style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 14, fontWeight: 300, color: TOKEN.text, letterSpacing: ".02em", lineHeight: 1.6 }}>{selectedJetData.recommendation}</p>
              <p style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 12, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".04em", marginTop: 3 }}>{selectedJetData.models}</p>
            </div>
          </div>
        ) : <p style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 14, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".06em", fontStyle: "italic" }}>Select a category to see aircraft details</p>}
      </div>
    </div>
  );
};

// ── Airport Field ─────────────────────────────────────────────────
const AirportField = ({ label, value, onSelect, placeholder, excludeCode }) => {
  const [focused, setFocused] = useState(false);
  const [query, setQuery]     = useState("");
  const [open, setOpen]       = useState(false);
  const inputRef = useRef(null);
  const filtered = AIRPORTS.filter(a => {
    if (a.code === excludeCode) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return a.code.toLowerCase().includes(q) || a.city.toLowerCase().includes(q) || a.name.toLowerCase().includes(q);
  });
  useEffect(() => { if (!focused) setQuery(value ? value.city : ""); }, [value, focused]);
  return (
    <div style={{ flex: 1, position: "relative", paddingBottom: 1 }}>
      <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: focused?TOKEN.accent:TOKEN.mutedText, fontWeight: 500, marginBottom: 10, transition: "color .3s ease" }}>{label}</div>
      <div style={{ position: "relative", paddingBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          {value && <span style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: ".12em", color: TOKEN.accent, flexShrink: 0 }}>{value.code}</span>}
          <input ref={inputRef} value={query} onChange={e => { setQuery(e.target.value); setOpen(true); if (!e.target.value) onSelect(null); }}
            onFocus={() => { setFocused(true); setOpen(true); setQuery(""); }}
            onBlur={() => { setTimeout(() => { setFocused(false); setOpen(false); setQuery(value?value.city:""); }, 160); }}
            placeholder={value?"":placeholder}
            aria-label={label}
            style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 22, fontWeight: 300, color: TOKEN.text, border: "none", background: "transparent", width: "100%", padding: 0, lineHeight: 1.2 }} />
        </div>
        {value && <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 12, fontWeight: 300, color: TOKEN.mutedText, marginTop: 4 }}>{value.name} · {value.state}</div>}
        <div className={`airport-field-underline${focused?" focused":""}`} />
      </div>
      {open && filtered.length > 0 && (
        <div className="airport-dropdown" style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#FFF", border: `1px solid ${TOKEN.secondary}`, borderRadius: 2, zIndex: 100, boxShadow: "0 8px 32px rgba(26,26,26,.08)", overflow: "hidden" }}>
          {filtered.map((a, i) => (
            <div key={a.code} className="airport-option" onMouseDown={() => { onSelect(a); setQuery(a.city); setOpen(false); setFocused(false); }}
              style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderBottom: i<filtered.length-1?`1px solid ${TOKEN.secondary}`:"none", background: "#FFF" }}>
              <span style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: ".12em", color: TOKEN.accent, width: 42, flexShrink: 0 }}>{a.code}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 17, fontWeight: 400, color: TOKEN.text }}>{a.city}</div>
                <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 12, fontWeight: 300, color: TOKEN.mutedText, marginTop: 2 }}>{a.name}</div>
              </div>
              <span style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: TOKEN.mutedText }}>{a.state}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Route Selector ────────────────────────────────────────────────
const RouteSelector = ({ tripType, onTripTypeChange, from, to, onFromChange, onToChange }) => {
  const [spinning, setSpinning] = useState(false);
  const isMobile = useIsMobile();
  const handleSwap = () => {
    if (!from && !to) return;
    setSpinning(true);
    setTimeout(() => { onFromChange(to); onToChange(from); setTimeout(() => setSpinning(false), 500); }, 150);
  };
  return (
    <div className="step-panel" style={{ padding: "44px 40px 40px" }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: TOKEN.accent, fontWeight: 500, marginBottom: 10 }}>Step 1</div>
        <h2 style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 34, fontWeight: 300, color: TOKEN.text, letterSpacing: ".01em", lineHeight: 1.1 }}>Where are you flying?</h2>
      </div>
      <div style={{ marginBottom: 36 }}><TogglePill options={["One Way","Round Trip"]} value={tripType} onChange={onTripTypeChange} /></div>
      <div className="route-fields" style={{ display: "flex", alignItems: isMobile ? "stretch" : "flex-start", gap: 16, flexDirection: isMobile ? "column" : "row" }}>
        <AirportField label="From" value={from} onSelect={onFromChange} placeholder="Departure city" excludeCode={to?.code} />
        <div className="swap-btn-wrap" style={{ display: "flex", justifyContent: "center", marginTop: isMobile ? 0 : 18, flexShrink: 0 }}>
          <button
            className={`swap-btn${spinning?" spinning":""}`}
            onClick={handleSwap}
            aria-label="Swap departure and arrival airports"
            style={{ width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 5h12M10 2l3 3-3 3" stroke={TOKEN.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 9H1M4 6l-3 3 3 3" stroke={TOKEN.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <AirportField label="To" value={to} onSelect={onToChange} placeholder="Arrival city" excludeCode={from?.code} />
      </div>
      {from && to && (
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: `1px solid ${TOKEN.secondary}`, display: "flex", alignItems: "center", gap: 12, animation: "driftUp .6s cubic-bezier(.25,.46,.45,.94) both", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 15, fontWeight: 400, color: TOKEN.text }}>{from.city}</span>
          <svg width="32" height="8" viewBox="0 0 32 8" fill="none"><path d="M0 4h28M25 1l3 3-3 3" stroke={TOKEN.accent} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 15, fontWeight: 400, color: TOKEN.text }}>{to.city}</span>
          <span style={{ marginLeft: "auto", fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: TOKEN.mutedText }}>{tripType==="Round Trip"?"Round trip · Return date TBD":"Route confirmed"}</span>
        </div>
      )}
    </div>
  );
};

// ── Progress Rail ─────────────────────────────────────────────────
const ProgressRail = ({ currentStep }) => {
  const isMobile = useIsMobile();
  const activeStep = STEPS.find(s => s.id === currentStep);

  if (isMobile) {
    return (
      <div className="zenith-progress progress-rail-mobile" style={{ width: "100%", maxWidth: 680, margin: "0 auto", padding: "0 20px" }}>
        {/* Step name — prominent, centered */}
        <div style={{ textAlign: "center", marginBottom: 6 }}>
          <span style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 20, fontWeight: 400, color: TOKEN.text, letterSpacing: ".06em" }}>
            {activeStep?.label}
          </span>
        </div>
        {/* "Step X of 7" counter */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: ".18em", textTransform: "uppercase", color: TOKEN.subtle }}>
            Step {currentStep} of {STEPS.length}
          </span>
        </div>
        {/* Dot row — visually separated from text above */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
          {STEPS.map((step, i) => {
            const isCompleted = step.id < currentStep;
            const isActive    = step.id === currentStep;
            const isLast      = i === STEPS.length - 1;
            return (
              <div key={step.id} style={{ display: "flex", alignItems: "center", flex: isLast ? "0 0 auto" : 1 }}>
                <div className="step-node" style={{
                  width: isActive ? 10 : 8, height: isActive ? 10 : 8,
                  borderRadius: "50%", flexShrink: 0,
                  background: isActive ? TOKEN.accent : isCompleted ? TOKEN.accent : TOKEN.secondary,
                  opacity: isCompleted ? 0.6 : 1,
                  transition: "background .5s ease, width .3s ease, height .3s ease",
                }} />
                {!isLast && <div className="step-connector" style={{ flex: 1, height: 1, background: isCompleted ? TOKEN.accent : TOKEN.secondary, opacity: isCompleted ? 0.5 : 1 }} />}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="zenith-progress progress-rail-desktop" style={{ display: "flex", alignItems: "flex-start", width: "100%", maxWidth: 680, margin: "0 auto", padding: "0 8px" }}>
      {STEPS.map((step, i) => {
        const isCompleted=step.id<currentStep, isActive=step.id===currentStep, isLast=i===STEPS.length-1;
        return (
          <div key={step.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: isLast?"0 0 auto":"1" }}>
            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
              <div className="step-node" style={{ width: 28, height: 28, borderRadius: "50%", border: `1.5px solid ${isActive||isCompleted?TOKEN.accent:TOKEN.secondary}`, background: isActive||isCompleted?TOKEN.accent:"transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                {isCompleted
                  ? <svg width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1 4.5L4.5 8L11 1" stroke={TOKEN.bg} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  : <span style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 10, fontWeight: 400, color: isActive?TOKEN.bg:TOKEN.mutedText, lineHeight: 1 }}>{step.id}</span>}
              </div>
              {!isLast && <div className="step-connector" style={{ flex: 1, height: 1, background: isCompleted?TOKEN.accent:TOKEN.secondary, opacity: isCompleted?0.7:1 }} />}
            </div>
            <span className="step-label" style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: ".1em", textTransform: "uppercase", color: isActive?TOKEN.text:TOKEN.mutedText, opacity: isActive?1:isCompleted?0.7:0.5, marginTop: 8, whiteSpace: "nowrap" }}>{step.label}</span>
          </div>
        );
      })}
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// ── CateringModule ────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════

const AccordionPanel = ({ open, children }) => {
  const innerRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => { setHeight(open ? (innerRef.current?.scrollHeight ?? 0) : 0); }, [open]);
  useEffect(() => { if (open && innerRef.current) setHeight(innerRef.current.scrollHeight); });
  return (
    <div style={{ overflow: "hidden", height, transition: "height 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
};

const QtyButton = ({ disabled, onClick, children, ariaLabel }) => (
  <button onClick={onClick} disabled={disabled}
    aria-label={ariaLabel}
    className="qty-btn"
    style={{ width: 44, height: 44, borderRadius: "50%", border: `1.5px solid ${disabled?TOKEN.secondary:TOKEN.accent}`, background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: disabled?"default":"pointer", flexShrink: 0, transition: "border-color .3s ease, background .3s ease, opacity .3s ease, transform .2s ease", opacity: disabled?0.35:1 }}
    onMouseEnter={e => { if (!disabled) e.currentTarget.style.background="rgba(201,169,110,.12)"; }}
    onMouseLeave={e => { e.currentTarget.style.background="transparent"; }}>
    {children}
  </button>
);

const ItemRow = ({ item, qty, onChange }) => {
  const atMin = qty === 0, atMax = qty >= 12;
  return (
    <div className="catering-item-row" style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 0", borderBottom: `1px solid ${TOKEN.secondary}` }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, fontWeight: 400, color: qty > 0 ? TOKEN.text : "#5A5A52", letterSpacing: ".02em", lineHeight: 1.2, transition: "color .35s ease" }}>{item.name}</div>
        <div style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 12, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".03em", lineHeight: 1.5, marginTop: 3 }}>{item.desc}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
        <QtyButton disabled={atMin} onClick={() => onChange(qty - 1)} ariaLabel={`Remove one ${item.name}`}>
          <svg width="10" height="2" viewBox="0 0 10 2" fill="none"><path d="M1 1h8" stroke={atMin?TOKEN.secondary:TOKEN.accent} strokeWidth="1.5" strokeLinecap="round" /></svg>
        </QtyButton>
        <span aria-live="polite" aria-label={`${qty} ${item.name}`} style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, fontWeight: 300, color: qty > 0 ? TOKEN.accent : TOKEN.mutedText, width: 22, textAlign: "center", lineHeight: 1, transition: "color .3s ease" }}>{qty}</span>
        <QtyButton disabled={atMax} onClick={() => onChange(qty + 1)} ariaLabel={`Add one ${item.name}`}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke={atMax?TOKEN.secondary:TOKEN.accent} strokeWidth="1.5" strokeLinecap="round" /></svg>
        </QtyButton>
      </div>
    </div>
  );
};

const CategoryCard = ({ category, quantities, onQtyChange, customRequest, onCustomRequestChange, isOpen, onToggle, animDelay, disabled }) => {
  const { Icon } = category;
  const totalItems  = category.items.reduce((sum, item) => sum + (quantities[item.id] || 0), 0);
  const hasItems    = totalItems > 0;
  const [reqFocused, setReqFocused] = useState(false);

  // When disabled, treat card as fully inert
  const accentActive = !disabled && (isOpen || hasItems);

  return (
    <div style={{
      border: `1px solid ${accentActive ? TOKEN.accent : TOKEN.secondary}`,
      borderLeft: `3px solid ${accentActive ? TOKEN.accent : "transparent"}`,
      borderRadius: 2,
      background: disabled ? TOKEN.bg : "#FFFFFF",
      overflow: "hidden",
      boxShadow: isOpen && !disabled ? "0 4px 28px rgba(201,169,110,.09)" : "0 1px 4px rgba(26,26,26,.04)",
      transition: "box-shadow .6s cubic-bezier(.25,.46,.45,.94), border-color .5s ease, background .5s ease",
      animation: `driftUp .7s cubic-bezier(.25,.46,.45,.94) ${animDelay}s both`,
      opacity: disabled ? 0.45 : 1,
      // Smooth the opacity transition when toggling disabled
      transitionProperty: "box-shadow, border-color, background, opacity",
      transitionDuration: "0.6s, 0.5s, 0.5s, 0.5s",
      transitionTimingFunction: "cubic-bezier(.25,.46,.45,.94)",
    }}>
      {/* Header / trigger */}
      <button
        onClick={disabled ? undefined : onToggle}
        className="cat-card-header"
        style={{ width: "100%", display: "flex", alignItems: "center", gap: 20, padding: "22px 24px", background: "transparent", border: "none", cursor: disabled ? "default" : "pointer", textAlign: "left" }}
      >
        <div style={{ width: 44, height: 44, borderRadius: "50%", border: `1px solid ${accentActive ? TOKEN.accent : TOKEN.secondary}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: accentActive ? TOKEN.accent : TOKEN.muted, transition: "border-color .5s ease, color .5s ease" }}>
          <Icon />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, fontWeight: 400, color: disabled ? TOKEN.muted : TOKEN.text, letterSpacing: ".02em", lineHeight: 1.1, transition: "color .5s ease" }}>{category.title}</div>
          <div style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 13, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".03em", marginTop: 4 }}>{category.description}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          {hasItems && !disabled && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", borderRadius: 100, background: "rgba(201,169,110,.10)", border: "1px solid rgba(201,169,110,.25)" }}>
              <span style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 9, letterSpacing: ".14em", textTransform: "uppercase", color: TOKEN.accent, fontWeight: 500 }}>{totalItems} selected</span>
            </div>
          )}
          {!disabled && (
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .6s cubic-bezier(.25,.46,.45,.94)", color: TOKEN.muted }}>
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </button>

      {/* Accordion body */}
      <AccordionPanel open={isOpen && !disabled}>
        <div style={{ borderTop: `1px solid ${TOKEN.secondary}`, padding: "0 24px 24px" }}>
          {/* Item rows */}
          {category.items.map((item, i) => (
            <div key={item.id} style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? "translateY(0)" : "translateY(6px)", transition: `opacity .5s ease ${i * 0.07}s, transform .5s cubic-bezier(.25,.46,.45,.94) ${i * 0.07}s` }}>
              <ItemRow item={item} qty={quantities[item.id] || 0} onChange={v => onQtyChange(item.id, v)} />
            </div>
          ))}

          {/* Custom request field */}
          <div style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? "translateY(0)" : "translateY(6px)", transition: `opacity .5s ease ${category.items.length * 0.07 + 0.08}s, transform .5s cubic-bezier(.25,.46,.45,.94) ${category.items.length * 0.07 + 0.08}s`, marginTop: 20 }}>
            <div style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: reqFocused ? TOKEN.accent : TOKEN.mutedText, fontWeight: 500, marginBottom: 12, transition: "color .3s ease" }}>
              Custom Request
            </div>
            <textarea
              rows={2}
              value={customRequest}
              onChange={e => onCustomRequestChange(e.target.value)}
              onFocus={() => setReqFocused(true)}
              onBlur={() => setReqFocused(false)}
              placeholder="Something specific in mind? Let us know..."
              style={{ width: "100%", border: "none", background: "transparent", resize: "none", fontFamily: "Noto Sans, sans-serif", fontSize: 12.5, fontWeight: 300, color: TOKEN.text, letterSpacing: ".02em", lineHeight: 1.7, padding: 0, outline: "none" }}
            />
            <div style={{ height: 1, background: reqFocused ? TOKEN.accent : TOKEN.secondary, marginTop: 8, transition: "background .4s ease" }} />
          </div>
        </div>
      </AccordionPanel>
    </div>
  );
};

const buildSummary = quantities => {
  const lines = [];
  MENU.forEach(cat => { cat.items.forEach(item => { const q = quantities[item.id]||0; if (q > 0) lines.push({ name: item.name, qty: q }); }); });
  return lines;
};

const CateringModule = ({
  passengerCount,
  noCatering, onNoCateringChange,
  quantities, onQuantitiesChange,
  dietary, onDietaryChange,
}) => {
  const [openCategory, setOpenCategory]     = useState(null);
  const [customRequests, setCustomRequests] = useState({});
  const [dietaryFocused, setDietaryFocused] = useState(false);

  const setNoCatering = onNoCateringChange;
  const setQuantities = onQuantitiesChange;
  const setDietary    = onDietaryChange;

  const handleToggle    = id  => setOpenCategory(prev => prev === id ? null : id);
  const handleQtyChange = (itemId, value) => {
    const next = { ...quantities };
    if (value === 0) delete next[itemId]; else next[itemId] = value;
    setQuantities(next);
  };
  const handleCustomRequest = (catId, value) =>
    setCustomRequests(prev => ({ ...prev, [catId]: value }));

  const handleNoCateringToggle = () => {
    if (!noCatering) setOpenCategory(null);
    setNoCatering(!noCatering);
  };

  const summary         = buildSummary(quantities);
  const totalSelections = summary.reduce((s, l) => s + l.qty, 0);
  const hasSummary      = !noCatering && summary.length > 0;

  return (
    <div className="catering-panel step-panel" style={{ padding: "44px 40px 40px" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: TOKEN.accent, fontWeight: 500, marginBottom: 10 }}>Step 5</div>
        <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 34, fontWeight: 300, color: TOKEN.text, letterSpacing: ".01em", lineHeight: 1.1 }}>Curate your experience</h2>
        {passengerCount && !noCatering && (
          <p style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 14, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".04em", marginTop: 10, transition: "opacity .4s ease" }}>
            Catering for{" "}
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 16, fontWeight: 400, color: TOKEN.text }}>{passengerCount} {passengerCount === 1 ? "guest" : "guests"}</span>
          </p>
        )}
      </div>

      {/* ── No catering toggle ── */}
      <div
        onClick={handleNoCateringToggle}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 28,
          cursor: "pointer",
          userSelect: "none",
          animation: "driftUp .6s cubic-bezier(.25,.46,.45,.94) .05s both",
        }}
      >
        {/* Custom minimal checkbox */}
        <div style={{
          width: 18,
          height: 18,
          borderRadius: 3,
          border: `1.5px solid ${noCatering ? TOKEN.accent : TOKEN.secondary}`,
          background: noCatering ? TOKEN.accent : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "border-color .4s ease, background .4s ease",
        }}>
          {noCatering && (
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
              <path d="M1 3.5L3.5 6L9 1" stroke="#F8F6F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <span style={{
          fontFamily: "Noto Sans, sans-serif",
          fontSize: 12,
          fontWeight: 300,
          letterSpacing: ".04em",
          color: noCatering ? TOKEN.text : TOKEN.muted,
          transition: "color .4s ease",
        }}>
          No catering required
        </span>
        {noCatering && (
          <span style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: 13,
            fontWeight: 300,
            fontStyle: "italic",
            color: TOKEN.muted,
            letterSpacing: ".04em",
            marginLeft: 2,
          }}>
            — we'll note this for your flight
          </span>
        )}
      </div>

      {/* Category cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {MENU.map((cat, i) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            quantities={quantities}
            onQtyChange={handleQtyChange}
            customRequest={customRequests[cat.id] || ""}
            onCustomRequestChange={v => handleCustomRequest(cat.id, v)}
            isOpen={openCategory === cat.id}
            onToggle={() => handleToggle(cat.id)}
            animDelay={0.05 + i * 0.13}
            disabled={noCatering}
          />
        ))}
      </div>

      {/* Dietary requirements — hidden when no catering */}
      <div style={{
        overflow: "hidden",
        maxHeight: noCatering ? 0 : 160,
        opacity: noCatering ? 0 : 1,
        transition: "max-height .6s cubic-bezier(.25,.46,.45,.94), opacity .45s ease",
        pointerEvents: noCatering ? "none" : "auto",
      }}>
        <div style={{ height: 1, background: TOKEN.secondary, margin: "36px 0 32px" }} />
        <div>
          <div style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: dietaryFocused ? TOKEN.accent : TOKEN.mutedText, fontWeight: 500, marginBottom: 14, transition: "color .3s ease" }}>
            Dietary Requirements
          </div>
          <textarea
            rows={3}
            value={dietary}
            onChange={e => setDietary(e.target.value)}
            onFocus={() => setDietaryFocused(true)}
            onBlur={() => setDietaryFocused(false)}
            placeholder="Dietary restrictions or allergies..."
            style={{ width: "100%", border: "none", background: "transparent", resize: "none", fontFamily: "Noto Sans, sans-serif", fontSize: 13, fontWeight: 300, color: TOKEN.text, letterSpacing: ".02em", lineHeight: 1.7, padding: 0, outline: "none" }}
          />
          <div style={{ height: 1, background: dietaryFocused ? TOKEN.accent : TOKEN.secondary, marginTop: 10, transition: "background .4s ease" }} />
        </div>
      </div>

      {/* Summary */}
      <div style={{ minHeight: 56, marginTop: 32, paddingTop: 24, borderTop: `1px solid ${TOKEN.secondary}` }}>
        {noCatering ? (
          <div style={{ display: "flex", alignItems: "center", gap: 14, animation: "confirmIn .6s cubic-bezier(.25,.46,.45,.94) both" }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="7.5" cy="7.5" r="6.5" stroke={TOKEN.muted} strokeWidth="1" />
              <path d="M4.5 7.5h6" stroke={TOKEN.muted} strokeWidth="1" strokeLinecap="round" />
            </svg>
            <p style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 14, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".04em", fontStyle: "italic" }}>
              No catering service requested
            </p>
          </div>
        ) : hasSummary ? (
          <div key={totalSelections} style={{ display: "flex", alignItems: "flex-start", gap: 14, animation: "confirmIn .7s cubic-bezier(.25,.46,.45,.94) both" }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="7.5" cy="7.5" r="6.5" stroke={TOKEN.accent} strokeWidth="1" />
              <path d="M7.5 4.5v3.5l2 2" stroke={TOKEN.accent} strokeWidth="1" strokeLinecap="round" />
            </svg>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 14, fontWeight: 300, color: TOKEN.text, letterSpacing: ".04em", lineHeight: 1.8 }}>
                {summary.map((line, i) => (
                  <span key={line.name}>
                    <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 15, fontWeight: 400 }}>{line.qty > 1 ? `${line.qty}× ` : ""}{line.name}</span>
                    {i < summary.length - 1 && <span style={{ color: TOKEN.muted, margin: "0 7px", fontSize: 11 }}>·</span>}
                  </span>
                ))}
              </p>
              {dietary.trim() && (
                <p style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 13, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".03em", fontStyle: "italic", marginTop: 5, lineHeight: 1.6 }}>Note: {dietary}</p>
              )}
            </div>
          </div>
        ) : (
          <p style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 14, fontWeight: 300, color: TOKEN.mutedText, letterSpacing: ".06em", fontStyle: "italic" }}>
            Select items from any category to build your menu
          </p>
        )}
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// ── GroundTransport ───────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════

const TRANSPORT_OPTIONS = [
  {
    id: "car",
    title: "Private Car",
    description: "A dedicated chauffeur meets you on the tarmac",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 13h16M5 13l1.8-5h8.4L17 13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="13" width="18" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="6.5" cy="18.5" r="1.5" fill="currentColor" />
        <circle cx="15.5" cy="18.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "helicopter",
    title: "Helicopter Transfer",
    description: "Direct connection to your final destination",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 9h18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M11 9v5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M4 14h14l-2 3H6l-2-3z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 17v2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M8 19h6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M6 9V7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <circle cx="6" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "none",
    title: "No transfer needed",
    description: "I'll arrange my own transportation",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="7.5" stroke="currentColor" strokeWidth="1.1" />
        <path d="M8 11h6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
];

const VEHICLE_OPTIONS = ["Sedan", "SUV", "Van"];

// Reuse the same AccordionPanel already defined above for catering
const TransportExpandPanel = AccordionPanel;

const TransportCard = ({ option, selected, onSelect, animDelay, children }) => {
  const { Icon } = option;
  return (
    <div
      style={{
        border: `1px solid ${selected ? TOKEN.accent : TOKEN.secondary}`,
        borderLeft: `3px solid ${selected ? TOKEN.accent : "transparent"}`,
        borderRadius: 2,
        background: selected ? "#FDFBF7" : "#FFFFFF",
        overflow: "hidden",
        boxShadow: selected
          ? "0 4px 24px rgba(201,169,110,.10)"
          : "0 1px 4px rgba(26,26,26,.04)",
        transition: "box-shadow .5s cubic-bezier(.25,.46,.45,.94), border-color .45s ease, background .4s ease",
        animation: `driftUp .7s cubic-bezier(.25,.46,.45,.94) ${animDelay}s both`,
        cursor: "pointer",
      }}
      onClick={() => onSelect(option.id)}
    >
      {/* Card header row */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "22px 24px" }}>
        {/* Icon circle */}
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          border: `1px solid ${selected ? TOKEN.accent : TOKEN.secondary}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          color: selected ? TOKEN.accent : TOKEN.muted,
          transition: "border-color .45s ease, color .45s ease",
        }}>
          <Icon />
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: "flex", alignItems: "baseline", gap: 10, marginBottom: 3,
          }}>
            <span style={{
              fontFamily: "Cormorant Garamond, serif", fontSize: 22,
              fontWeight: 400, color: TOKEN.text, letterSpacing: ".02em", lineHeight: 1.1,
            }}>
              {option.title}
            </span>
            {selected && (
              <span style={{
                fontFamily: "Noto Sans, sans-serif", fontSize: 8.5,
                letterSpacing: ".18em", textTransform: "uppercase",
                color: TOKEN.accent, fontWeight: 500,
              }}>
                Selected
              </span>
            )}
          </div>
          <div style={{
            fontFamily: "Noto Sans, sans-serif", fontSize: 13, fontWeight: 300,
            color: TOKEN.mutedText, letterSpacing: ".03em",
          }}>
            {option.description}
          </div>
        </div>

        {/* Selection indicator dot */}
        <div style={{
          width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
          border: `1.5px solid ${selected ? TOKEN.accent : TOKEN.secondary}`,
          background: selected ? TOKEN.accent : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "border-color .45s ease, background .45s ease",
        }}>
          {selected && (
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff" }} />
          )}
        </div>
      </div>

      {/* Expandable detail area */}
      {children && (
        <TransportExpandPanel open={selected}>
          {children}
        </TransportExpandPanel>
      )}
    </div>
  );
};

const GroundTransport = ({
  selected, onSelectedChange,
  address, onAddressChange,
  vehicle, onVehicleChange,
  heliDest, onHeliDestChange,
}) => {
  const setSelected = onSelectedChange;
  const setAddress  = onAddressChange;
  const setVehicle  = onVehicleChange;
  const setHeliDest = onHeliDestChange;
  const [addressFocused, setAddressFocused] = useState(false);
  const [heliDestFocused, setHeliDestFocused] = useState(false);
  const [notes, setNotes]               = useState("");
  const [notesFocused, setNotesFocused] = useState(false);

  // Shared inline text field style
  const fieldStyle = {
    width: "100%", border: "none", background: "transparent",
    fontFamily: "Cormorant Garamond, serif", fontSize: 20, fontWeight: 300,
    color: TOKEN.text, letterSpacing: ".02em", lineHeight: 1.3, padding: 0, outline: "none",
  };
  const fieldUnderline = (focused) => ({
    height: 1, marginTop: 10,
    background: focused ? TOKEN.accent : TOKEN.secondary,
    transition: "background .4s ease",
  });
  const fieldLabel = (focused) => ({
    fontFamily: "Noto Sans, sans-serif", fontSize: 11,
    letterSpacing: ".22em", textTransform: "uppercase", fontWeight: 500,
    color: focused ? TOKEN.accent : TOKEN.mutedText,
    marginBottom: 12, transition: "color .3s ease",
  });

  // Summary text
  const buildConfirmLine = () => {
    if (!selected) return null;
    if (selected === "none") return "Own transport arranged";
    if (selected === "car") {
      const parts = [`Private Car · ${vehicle}`];
      if (address.trim()) parts.push(address.trim());
      return parts.join("  ·  ");
    }
    if (selected === "helicopter") {
      const parts = ["Helicopter Transfer"];
      if (heliDest.trim()) parts.push(heliDest.trim());
      return parts.join("  ·  ");
    }
    return null;
  };

  const confirmLine = buildConfirmLine();

  return (
    <div className="transport-panel step-panel" style={{ padding: "44px 40px 40px" }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: 36 }}>
        <div style={{
          fontFamily: "Noto Sans, sans-serif", fontSize: 11, letterSpacing: ".3em",
          textTransform: "uppercase", color: TOKEN.accent, fontWeight: 500, marginBottom: 10,
        }}>
          Step 6
        </div>
        <h2 style={{
          fontFamily: "Cormorant Garamond, serif", fontSize: 34, fontWeight: 300,
          color: TOKEN.text, letterSpacing: ".01em", lineHeight: 1.1,
        }}>
          Arriving in style
        </h2>
      </div>

      {/* ── Transport option cards ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

        {/* Private Car */}
        <TransportCard
          option={TRANSPORT_OPTIONS[0]}
          selected={selected === "car"}
          onSelect={setSelected}
          animDelay={0.05}
        >
          <div style={{
            borderTop: `1px solid ${TOKEN.secondary}`,
            padding: "24px 24px 28px",
          }}>
            {/* Address field */}
            <div style={{
              opacity: selected === "car" ? 1 : 0,
              transform: selected === "car" ? "translateY(0)" : "translateY(6px)",
              transition: "opacity .5s ease .08s, transform .5s cubic-bezier(.25,.46,.45,.94) .08s",
              marginBottom: 28,
            }}>
              <div style={fieldLabel(addressFocused)}>Destination Address</div>
              <input
                value={address}
                onChange={e => setAddress(e.target.value)}
                onFocus={() => setAddressFocused(true)}
                onBlur={() => setAddressFocused(false)}
                placeholder="Hotel, residence, or venue address..."
                style={{ ...fieldStyle }}
              />
              <div style={fieldUnderline(addressFocused)} />
            </div>

            {/* Vehicle preference */}
            <div style={{
              opacity: selected === "car" ? 1 : 0,
              transform: selected === "car" ? "translateY(0)" : "translateY(6px)",
              transition: "opacity .5s ease .16s, transform .5s cubic-bezier(.25,.46,.45,.94) .16s",
            }}>
              <div style={{
                fontFamily: "Noto Sans, sans-serif", fontSize: 11, letterSpacing: ".22em",
                textTransform: "uppercase", fontWeight: 500, color: TOKEN.mutedText, marginBottom: 12,
              }}>
                Vehicle Preference
              </div>
              <TogglePill
                options={VEHICLE_OPTIONS}
                value={vehicle}
                onChange={setVehicle}
              />
            </div>
          </div>
        </TransportCard>

        {/* Helicopter Transfer */}
        <TransportCard
          option={TRANSPORT_OPTIONS[1]}
          selected={selected === "helicopter"}
          onSelect={setSelected}
          animDelay={0.18}
        >
          <div style={{
            borderTop: `1px solid ${TOKEN.secondary}`,
            padding: "24px 24px 28px",
          }}>
            <div style={{
              opacity: selected === "helicopter" ? 1 : 0,
              transform: selected === "helicopter" ? "translateY(0)" : "translateY(6px)",
              transition: "opacity .5s ease .08s, transform .5s cubic-bezier(.25,.46,.45,.94) .08s",
            }}>
              <div style={fieldLabel(heliDestFocused)}>Destination</div>
              <input
                value={heliDest}
                onChange={e => setHeliDest(e.target.value)}
                onFocus={() => setHeliDestFocused(true)}
                onBlur={() => setHeliDestFocused(false)}
                placeholder="Destination helipad or address..."
                style={{ ...fieldStyle }}
              />
              <div style={fieldUnderline(heliDestFocused)} />
            </div>
          </div>
        </TransportCard>

        {/* No transfer */}
        <TransportCard
          option={TRANSPORT_OPTIONS[2]}
          selected={selected === "none"}
          onSelect={setSelected}
          animDelay={0.31}
        />

      </div>

      {/* ── Divider ── */}
      <div style={{
        height: 1, background: TOKEN.secondary, margin: "36px 0 32px",
        animation: "driftUp .7s cubic-bezier(.25,.46,.45,.94) .45s both",
      }} />

      {/* ── Notes field ── */}
      <div style={{ animation: "driftUp .7s cubic-bezier(.25,.46,.45,.94) .5s both" }}>
        <div style={fieldLabel(notesFocused)}>Transport Instructions</div>
        <textarea
          rows={2}
          value={notes}
          onChange={e => setNotes(e.target.value)}
          onFocus={() => setNotesFocused(true)}
          onBlur={() => setNotesFocused(false)}
          placeholder="Any specific transport instructions..."
          style={{
            width: "100%", border: "none", background: "transparent", resize: "none",
            fontFamily: "Noto Sans, sans-serif", fontSize: 13, fontWeight: 300,
            color: TOKEN.text, letterSpacing: ".02em", lineHeight: 1.7, padding: 0, outline: "none",
          }}
        />
        <div style={fieldUnderline(notesFocused)} />
      </div>

      {/* ── Confirmation summary ── */}
      <div style={{
        minHeight: 56, marginTop: 32, paddingTop: 24,
        borderTop: `1px solid ${TOKEN.secondary}`,
      }}>
        {confirmLine ? (
          <div
            key={confirmLine}
            style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              animation: "confirmIn .7s cubic-bezier(.25,.46,.45,.94) both",
            }}
          >
            {/* Icon — checkmark for "none", clock for active service */}
            {selected === "none" ? (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                <circle cx="7.5" cy="7.5" r="6.5" stroke={TOKEN.muted} strokeWidth="1" />
                <path d="M4.5 7.5h6" stroke={TOKEN.muted} strokeWidth="1" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                <circle cx="7.5" cy="7.5" r="6.5" stroke={TOKEN.accent} strokeWidth="1" />
                <path d="M7.5 4.5v3.5l2 2" stroke={TOKEN.accent} strokeWidth="1" strokeLinecap="round" />
              </svg>
            )}

            <p style={{
              fontFamily: "Noto Sans, sans-serif", fontSize: 14, fontWeight: 300,
              color: selected === "none" ? TOKEN.mutedText : TOKEN.text,
              letterSpacing: ".04em", lineHeight: 1.8, fontStyle: selected === "none" ? "italic" : "normal",
            }}>
              {confirmLine.split("  ·  ").map((segment, i, arr) => (
                <span key={i}>
                  <span style={{
                    fontFamily: "Cormorant Garamond, serif", fontSize: 15, fontWeight: 400,
                    color: selected === "none" ? TOKEN.mutedText : (i === 0 ? TOKEN.text : TOKEN.accent),
                  }}>
                    {segment}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ color: TOKEN.muted, margin: "0 7px", fontSize: 11 }}>·</span>
                  )}
                </span>
              ))}
              {notes.trim() && (
                <>
                  <br />
                  <span style={{
                    fontFamily: "Noto Sans, sans-serif", fontSize: 13, fontWeight: 300,
                    color: TOKEN.mutedText, letterSpacing: ".03em", fontStyle: "italic",
                  }}>
                    Note: {notes}
                  </span>
                </>
              )}
            </p>
          </div>
        ) : (
          <p style={{
            fontFamily: "Noto Sans, sans-serif", fontSize: 14, fontWeight: 300,
            color: TOKEN.mutedText, letterSpacing: ".06em", fontStyle: "italic",
          }}>
            Select a transport option to continue
          </p>
        )}
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// ── TripSummary ───────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════

const SummaryRow = ({ label, value, subvalue, delay }) => (
  <div style={{
    display: "flex", alignItems: "flex-start", gap: 24,
    padding: "18px 0", borderBottom: `1px solid ${TOKEN.secondary}`,
    opacity: 0, animation: `driftUp .8s cubic-bezier(.25,.46,.45,.94) ${delay}s forwards`,
  }}>
    {/* Label */}
    <div style={{
      width: 110, flexShrink: 0, paddingTop: 2,
      fontFamily: "Noto Sans, sans-serif", fontSize: 11, fontWeight: 500,
      letterSpacing: ".22em", textTransform: "uppercase", color: TOKEN.mutedText,
    }}>
      {label}
    </div>
    {/* Value */}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontFamily: "Noto Sans, sans-serif", fontSize: 14, fontWeight: 300,
        color: TOKEN.text, letterSpacing: ".02em", lineHeight: 1.5,
      }}>
        {value}
      </div>
      {subvalue && (
        <div style={{
          fontFamily: "Noto Sans, sans-serif", fontSize: 12, fontWeight: 300,
          color: TOKEN.mutedText, letterSpacing: ".03em", marginTop: 3, lineHeight: 1.5,
        }}>
          {subvalue}
        </div>
      )}
    </div>
  </div>
);

const TripSummary = ({ from, to, tripType, selectedJet, passengerCount, cateringState, transportState }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const jetData = JETS.find(j => j.id === selectedJet);

  // ── Format helpers ────────────────────────────────────────────
  const fromCity = from?.city  || "—";
  const toCity   = to?.city    || "—";

  const jetLine    = jetData ? jetData.category : "—";
  const jetSubline = jetData ? `${jetData.specs.passengers} passengers · ${jetData.specs.range} range · ${jetData.specs.cabin} cabin height` : null;

  const departureLine = cateringState?.departDate
    ? `${DAY_NAMES[cateringState.departDate.getDay()]}, ${MONTH_NAMES[cateringState.departDate.getMonth()]} ${cateringState.departDate.getDate()}`
    : "Date not set";
  const departureTime = cateringState?.departDate
    ? `${String(cateringState.depHour).padStart(2,"0")}:${String(cateringState.depMinute).padStart(2,"0")} ${cateringState.depAmpm}`
    : null;

  const paxLine    = `${passengerCount} ${passengerCount === 1 ? "passenger" : "passengers"}`;
  const paxSubline = cateringState?.activePrefs?.length > 0 ? cateringState.activePrefs.join("  ·  ") : null;

  const cateringLine = (() => {
    if (cateringState?.noCatering) return "No catering requested";
    if (!cateringState?.summary?.length) return "No items selected";
    return cateringState.summary.map(l => `${l.qty > 1 ? `${l.qty}× ` : ""}${l.name}`).join("  ·  ");
  })();

  const transportLine = (() => {
    const s = transportState;
    if (!s?.selected) return "Not specified";
    if (s.selected === "none") return "Own transport arranged";
    if (s.selected === "car") {
      const parts = [`Private Car · ${s.vehicle || "Sedan"}`];
      if (s.address?.trim()) parts.push(s.address.trim());
      return parts.join("  ·  ");
    }
    if (s.selected === "helicopter") {
      const parts = ["Helicopter Transfer"];
      if (s.heliDest?.trim()) parts.push(s.heliDest.trim());
      return parts.join("  ·  ");
    }
    return "Not specified";
  })();

  const ROWS = [
    { label: "Aircraft",        value: jetLine,         subvalue: jetSubline },
    { label: "Departure",       value: departureLine,   subvalue: departureTime },
    { label: "Passengers",      value: paxLine,         subvalue: paxSubline },
    { label: "Catering",        value: cateringLine,    subvalue: null },
    { label: "Ground Transport",value: transportLine,   subvalue: null },
  ];

  if (confirmed) {
    return (
      <div style={{
        padding: "72px 48px 80px",
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center",
        animation: "fadeIn .9s ease both",
      }}>
        {/* Checkmark circle */}
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          border: `1px solid ${TOKEN.accent}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 28,
          animation: "driftUp .8s cubic-bezier(.25,.46,.45,.94) .1s both",
        }}>
          <svg width="24" height="17" viewBox="0 0 24 17" fill="none">
            <path d="M2 8L9 15L22 2" stroke={TOKEN.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Heading — 2.5rem, balanced against 16px body */}
        <div style={{
          fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", fontWeight: 300,
          color: TOKEN.text, letterSpacing: ".03em", lineHeight: 1.1,
          animation: "driftUp .9s cubic-bezier(.25,.46,.45,.94) .2s both",
        }}>
          Booking confirmed.
        </div>
        {/* Gold rule */}
        <div style={{
          width: 40, height: 1, background: TOKEN.accent, margin: "20px auto",
          animation: "driftUp .8s cubic-bezier(.25,.46,.45,.94) .35s both",
        }} />
        {/* Body text — 16px minimum */}
        <p style={{
          fontFamily: "Noto Sans, sans-serif", fontSize: 16, fontWeight: 300,
          color: TOKEN.mutedText, letterSpacing: ".04em", lineHeight: 1.8, maxWidth: 340,
          animation: "driftUp .8s cubic-bezier(.25,.46,.45,.94) .45s both",
        }}>
          Your dedicated concierge will be in touch within 2 hours to finalise every detail.
        </p>
        <p style={{
          fontFamily: "Cormorant Garamond, serif", fontSize: 17, fontStyle: "italic",
          color: TOKEN.accent, letterSpacing: ".08em", marginTop: 32,
          animation: "driftUp .8s cubic-bezier(.25,.46,.45,.94) .6s both",
        }}>
          Above everything.
        </p>
      </div>
    );
  }

  return (
    <div className="summary-panel" style={{ padding: "56px 48px 52px" }}>

      {/* ── Hero headline ── */}
      <div style={{
        textAlign: "center", marginBottom: 44,
        animation: "driftUp .9s cubic-bezier(.25,.46,.45,.94) .05s both",
      }}>
        <div style={{
          fontFamily: "Noto Sans, sans-serif", fontSize: 11, letterSpacing: ".32em",
          textTransform: "uppercase", color: TOKEN.accent, fontWeight: 500, marginBottom: 18,
        }}>
          Step 7 · Review
        </div>
        <h1 style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: 62,
          fontWeight: 300,
          color: TOKEN.text,
          letterSpacing: ".03em",
          lineHeight: 1.0,
          margin: 0,
        }}>
          Your journey awaits.
        </h1>
      </div>

      {/* ── Route block ── */}
      <div style={{
        textAlign: "center", marginBottom: 44,
        animation: "driftUp .85s cubic-bezier(.25,.46,.45,.94) .2s both",
      }}>
        {/* Route line */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 18,
          marginBottom: 12, flexWrap: "wrap",
        }}>
          <span style={{
            fontFamily: "Cormorant Garamond, serif", fontSize: 30, fontWeight: 400,
            color: TOKEN.text, letterSpacing: ".04em",
          }}>
            {fromCity}
          </span>
          {/* Arrow with line */}
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <div style={{ width: 32, height: 1, background: TOKEN.accent, opacity: .7 }} />
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" style={{ marginLeft: -1 }}>
              <path d="M1 1l6 5-6 5" stroke={TOKEN.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{
            fontFamily: "Cormorant Garamond, serif", fontSize: 30, fontWeight: 400,
            color: TOKEN.text, letterSpacing: ".04em",
          }}>
            {toCity}
          </span>
        </div>
        {/* Date + jet line */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap",
        }}>
          <span style={{
            fontFamily: "Noto Sans, sans-serif", fontSize: 12, fontWeight: 300,
            color: TOKEN.mutedText, letterSpacing: ".08em",
          }}>
            {departureLine}
          </span>
          {jetData && <>
            <span style={{ color: TOKEN.secondary, fontSize: 10 }}>·</span>
            <span style={{
              fontFamily: "Noto Sans, sans-serif", fontSize: 12, fontWeight: 300,
              color: TOKEN.mutedText, letterSpacing: ".08em",
            }}>
              {jetData.category}
            </span>
            {tripType === "Round Trip" && <>
              <span style={{ color: TOKEN.secondary, fontSize: 10 }}>·</span>
              <span style={{
                fontFamily: "Noto Sans, sans-serif", fontSize: 11, fontWeight: 300,
                color: TOKEN.accent, letterSpacing: ".08em",
              }}>
                Round Trip
              </span>
            </>}
          </>}
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{
        display: "flex", alignItems: "center", gap: 16, marginBottom: 8,
        animation: "driftUp .8s cubic-bezier(.25,.46,.45,.94) .32s both",
      }}>
        <div style={{ flex: 1, height: 1, background: TOKEN.secondary }} />
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="5.5" stroke={TOKEN.accent} strokeWidth="1" />
          <path d="M7 4v3.5l2 1.5" stroke={TOKEN.accent} strokeWidth="1" strokeLinecap="round" />
        </svg>
        <div style={{ flex: 1, height: 1, background: TOKEN.secondary }} />
      </div>

      {/* ── Detail rows ── */}
      <div style={{ marginBottom: 44 }}>
        {ROWS.map((row, i) => (
          <SummaryRow
            key={row.label}
            label={row.label}
            value={row.value}
            subvalue={row.subvalue}
            delay={0.38 + i * 0.12}
          />
        ))}
        {/* Remove bottom border from last row */}
        <style>{`.summary-last-row { border-bottom: none !important; }`}</style>
      </div>

      {/* ── Confirm button ── */}
      <div style={{
        opacity: 0,
        animation: `driftUp .85s cubic-bezier(.25,.46,.45,.94) ${0.38 + ROWS.length * 0.12 + 0.1}s forwards`,
      }}>
        <button
          className="confirm-btn"
          onClick={() => setConfirmed(true)}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          aria-label="Confirm your booking"
          style={{
            width: "100%",
            padding: "20px 32px",
            background: btnHovered ? "#A8833A" : TOKEN.accent,
            border: "none",
            borderRadius: 2,
            cursor: "pointer",
            fontFamily: "Noto Sans, sans-serif",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: ".28em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            transition: "background 300ms ease",
            display: "block",
          }}
        >
          Confirm Booking
        </button>

        {/* Reassurance line */}
        <p style={{
          textAlign: "center", marginTop: 20,
          fontFamily: "Cormorant Garamond, serif", fontSize: 15,
          fontStyle: "italic", fontWeight: 300,
          color: TOKEN.mutedText, letterSpacing: ".06em", lineHeight: 1.6,
        }}>
          Your dedicated concierge will be in touch within 2 hours.
        </p>
      </div>

    </div>
  );
};

// ── Booking Shell ─────────────────────────────────────────────────
export default function BookingShell() {
  const [currentStep, setCurrentStep] = useState(1);
  const [tripType, setTripType]       = useState("One Way");
  const [from, setFrom]               = useState(null);
  const [to, setTo]                   = useState(null);
  const [selectedJet, setSelectedJet] = useState(null);
  const [passengerCount, setPassengerCount] = useState(1);

  // Lifted catering state — so TripSummary can read it
  const [cateringNoCatering, setCateringNoCatering] = useState(false);
  const [cateringQuantities, setCateringQuantities] = useState({});
  const [cateringDietary, setCateringDietary]       = useState("");
  // Departure date/time from Step 3 (lifted for summary)
  const [departDate, setDepartDate]   = useState(null);
  const [depHour, setDepHour]         = useState(10);
  const [depMinute, setDepMinute]     = useState(0);
  const [depAmpm, setDepAmpm]         = useState("AM");
  // Lifted transport state — so TripSummary can read it
  const [transportSelected, setTransportSelected] = useState(null);
  const [transportAddress, setTransportAddress]   = useState("");
  const [transportVehicle, setTransportVehicle]   = useState("Sedan");
  const [transportHeliDest, setTransportHeliDest] = useState("");
  // Passenger preferences (lifted)
  const [passengerPrefs, setPassengerPrefs] = useState({ pets: false, children: false, wheelchair: false });

  const canGoBack    = currentStep > 1;
  const canGoForward = currentStep < STEPS.length;
  const isFinalStep  = currentStep === STEPS.length;

  // Build derived summary objects for TripSummary
  const cateringSummary = buildSummary(cateringQuantities);
  const cateringStateForSummary = {
    noCatering: cateringNoCatering,
    summary:    cateringSummary,
    dietary:    cateringDietary,
    departDate, depHour, depMinute, depAmpm,
    activePrefs: PREF_OPTIONS.filter(o => passengerPrefs[o.id]).map(o => o.label),
  };
  const transportStateForSummary = {
    selected:  transportSelected,
    address:   transportAddress,
    vehicle:   transportVehicle,
    heliDest:  transportHeliDest,
  };

  const renderStep = () => {
    if (currentStep === 1) return <RouteSelector tripType={tripType} onTripTypeChange={setTripType} from={from} to={to} onFromChange={setFrom} onToChange={setTo} />;
    if (currentStep === 2) return <JetPicker selectedJet={selectedJet} onJetChange={setSelectedJet} />;
    if (currentStep === 3) return (
      <DateTimePicker
        tripType={tripType} from={from} to={to}
        departDate={departDate} onDepartDateChange={setDepartDate}
        depHour={depHour} onDepHourChange={setDepHour}
        depMinute={depMinute} onDepMinuteChange={setDepMinute}
        depAmpm={depAmpm} onDepAmpmChange={setDepAmpm}
      />
    );
    if (currentStep === 4) return (
      <PassengerConfig
        selectedJet={selectedJet}
        onCountChange={setPassengerCount}
        prefs={passengerPrefs}
        onPrefsChange={setPassengerPrefs}
      />
    );
    if (currentStep === 5) return (
      <CateringModule
        passengerCount={passengerCount}
        noCatering={cateringNoCatering}
        onNoCateringChange={setCateringNoCatering}
        quantities={cateringQuantities}
        onQuantitiesChange={setCateringQuantities}
        dietary={cateringDietary}
        onDietaryChange={setCateringDietary}
      />
    );
    if (currentStep === 6) return (
      <GroundTransport
        selected={transportSelected}
        onSelectedChange={setTransportSelected}
        address={transportAddress}
        onAddressChange={setTransportAddress}
        vehicle={transportVehicle}
        onVehicleChange={setTransportVehicle}
        heliDest={transportHeliDest}
        onHeliDestChange={setTransportHeliDest}
      />
    );
    if (currentStep === 7) return (
      <TripSummary
        from={from} to={to} tripType={tripType}
        selectedJet={selectedJet}
        passengerCount={passengerCount}
        cateringState={cateringStateForSummary}
        transportState={transportStateForSummary}
      />
    );
    return null;
  };

  return (
    <>
      <GlobalStyles />
      <div className="zenith-shell" style={{ minHeight: "100vh", background: TOKEN.bg, display: "flex", flexDirection: "column", alignItems: "center", padding: "48px 24px 64px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: TOKEN.mutedText, fontWeight: 400, marginBottom: 10 }}>Private Aviation</div>
          <div style={{ fontFamily: "Cormorant Garamond,serif", fontSize: 42, fontWeight: 300, color: TOKEN.text, letterSpacing: ".18em", textTransform: "uppercase", lineHeight: 1 }}>Zenith Air</div>
          <div style={{ width: 40, height: 1, background: TOKEN.accent, margin: "14px auto 0", opacity: 0.8 }} />
        </div>
        <ProgressRail currentStep={currentStep} />
        <div className="zenith-content" style={{ width: "100%", maxWidth: 680, marginTop: 48, background: "#FFFFFF", border: `1px solid ${TOKEN.secondary}`, borderRadius: 3, overflow: "hidden", boxShadow: "0 2px 40px rgba(26,26,26,.05), 0 1px 4px rgba(26,26,26,.04)" }}>
          {renderStep()}
          {/* Hide nav footer on final summary step */}
          {!isFinalStep && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 32px", borderTop: `1px solid ${TOKEN.secondary}`, background: TOKEN.bg }}>
              <button className="nav-btn" onClick={() => canGoBack && setCurrentStep(s => s-1)} disabled={!canGoBack}
                style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase", fontWeight: 400, padding: "10px 24px", border: `1px solid ${canGoBack?TOKEN.text:TOKEN.secondary}`, background: "transparent", color: canGoBack?TOKEN.text:TOKEN.mutedText, borderRadius: 2, opacity: canGoBack?1:0.4 }}>
                Back
              </button>
              <span style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: TOKEN.mutedText, fontWeight: 300 }}>{currentStep} / {STEPS.length}</span>
              <button className="nav-btn nav-btn-primary" onClick={() => canGoForward && setCurrentStep(s => s+1)} disabled={!canGoForward}
                style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase", fontWeight: 400, padding: "10px 24px", border: "1px solid transparent", background: canGoForward?TOKEN.accent:TOKEN.secondary, color: canGoForward?"#FFFFFF":TOKEN.mutedText, borderRadius: 2, opacity: canGoForward?1:0.5 }}>
                Continue
              </button>
            </div>
          )}
          {/* Back button only on final step */}
          {isFinalStep && (
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "16px 32px", borderTop: `1px solid ${TOKEN.secondary}`, background: TOKEN.bg }}>
              <button className="nav-btn" onClick={() => setCurrentStep(s => s-1)}
                style={{ fontFamily: "Noto Sans,sans-serif", fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase", fontWeight: 400, padding: "10px 24px", border: `1px solid ${TOKEN.text}`, background: "transparent", color: TOKEN.text, borderRadius: 2 }}>
                Back
              </button>
            </div>
          )}
        </div>
        <div style={{ marginTop: 36, fontFamily: "Cormorant Garamond,serif", fontSize: 14, fontStyle: "italic", color: TOKEN.subtle, letterSpacing: ".06em" }}>Above everything.</div>
      </div>
    </>
  );
}
