:root{
  --bg: #0b0b0c;
  --panel: #101013;
  --text: #f2efe8;
  --muted: #b8b1a6;
  --line: rgba(242,239,232,0.12);
  --accent: #b24b3a;
  --shadow: 0 20px 60px rgba(0,0,0,0.45);
}

*{ box-sizing: border-box; }
html,body{ height: 100%; scroll-behavior: smooth; }
body{
  margin: 0;
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: radial-gradient(1100px 700px at 20% -10%, rgba(178,75,58,0.18), transparent 60%),
              radial-gradient(900px 600px at 90% 10%, rgba(242,239,232,0.08), transparent 60%),
              var(--bg);
  color: var(--text);
}

a{ color: inherit; text-decoration: none; }
p{ line-height: 1.6; }
.muted{ color: var(--muted); }
.small{ font-size: 0.9rem; }

.site-header{
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 22px;
  background: rgba(11,11,12,0.78);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.logo{
  font-family: "Anton", sans-serif;
  letter-spacing: 0.5px;
  font-size: 1.4rem;
}
.logo span{
  color: var(--muted);
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  margin-left: 6px;
}

.nav{ display: flex; gap: 16px; align-items: center; }
.nav a{ opacity: 0.9; }
.nav a:hover{ opacity: 1; }

.hero{
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 22px;
  padding: 56px 22px 20px;
  max-width: 1100px;
  margin: 0 auto;
}

.eyebrow{
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.85rem;
  margin: 0 0 10px;
}

h1{
  font-family: "Anton", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.8rem);
  margin: 0 0 10px;
  line-height: 1.05;
}

.subhead{ max-width: 58ch; margin: 0 0 18px; color: var(--muted); }
.cta-row{ display: flex; gap: 12px; flex-wrap: wrap; margin: 18px 0 18px; }

.hero-badges{
  display: flex; gap: 10px; flex-wrap: wrap;
}
.hero-badges span{
  border: 1px solid var(--line);
  padding: 8px 10px;
  border-radius: 999px;
  font-size: 0.9rem;
  color: var(--muted);
  background: rgba(255,255,255,0.02);
}

.section{
  max-width: 1100px;
  margin: 0 auto;
  padding: 52px 22px;
}

.section-alt{
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00));
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-head h2{
  font-family: "Anton", sans-serif;
  font-size: 2rem;
  margin: 0 0 6px;
}
.section-head p{ margin: 0; color: var(--muted); }

.grid{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 22px;
}

.product,
.concept-card,
.value-card{
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.2);
}

.product h3,
.concept-card h3,
.value-card h3{
  margin: 10px 0 6px;
  font-size: 1.05rem;
}

.thumb{
  height: 140px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background:
    radial-gradient(600px 260px at 30% 20%, rgba(178,75,58,0.25), transparent 55%),
    radial-gradient(500px 220px at 80% 80%, rgba(242,239,232,0.10), transparent 55%),
    rgba(0,0,0,0.25);
}
.thumb-2{ background:
  radial-gradient(600px 260px at 30% 20%, rgba(242,239,232,0.12), transparent 55%),
  radial-gradient(500px 220px at 80% 80%, rgba(178,75,58,0.20), transparent 55%),
  rgba(0,0,0,0.25);
}
.thumb-3{ background:
  radial-gradient(600px 260px at 30% 20%, rgba(178,75,58,0.22), transparent 55%),
  radial-gradient(500px 220px at 80% 80%, rgba(242,239,232,0.08), transparent 55%),
  rgba(0,0,0,0.25);
}
.thumb-4{ background:
  radial-gradient(600px 260px at 30% 20%, rgba(242,239,232,0.10), transparent 55%),
  radial-gradient(500px 220px at 80% 80%, rgba(178,75,58,0.14), transparent 55%),
  rgba(0,0,0,0.25);
}

.hero-card{
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(255,255,255,0.03);
  box-shadow: var(--shadow);
  padding: 18px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
}

.card-label{
  margin: 0 0 6px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
}
.card-title{ margin: 0; font-weight: 900; font-size: 1.2rem; }
.card-note{ margin: 6px 0 0; color: var(--muted); }

.stat-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 18px;
}
.stat-grid div{
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px;
  background: rgba(255,255,255,0.02);
}
.stat-grid strong{
  display: block;
  font-size: 1rem;
  margin-bottom: 4px;
}
.stat-grid span{
  display: block;
  color: var(--muted);
  font-size: 0.9rem;
}

.btn{
  display: inline-flex;
  align-items:center;
  justify-content:center;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid rgba(242,239,232,0.20);
  background: var(--text);
  color: #0b0b0c;
  font-weight: 800;
  cursor: pointer;
  transition: transform 120ms ease, opacity 120ms ease;
}
.btn:hover{ transform: translateY(-1px); }
.btn:active{ transform: translateY(0px); opacity: 0.9; }
.btn-small{ padding: 10px 14px; font-weight: 800; font-size: 0.95rem; }

.btn-ghost{
  background: transparent;
  color: var(--text);
  border: 1px solid var(--line);
}

.about{
  margin-top: 22px;
  max-width: 70ch;
}

.concept-grid{
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
.concept-line{
  margin-top: 0;
}

.value-grid{
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

input, textarea{
  width: 100%;
  padding: 12px 12px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.03);
  color: var(--text);
  outline: none;
}
textarea{ resize: vertical; }

.contact{
  margin-top: 22px;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 16px;
  background: rgba(0,0,0,0.20);
}
.contact label{ display:block; margin: 8px 0 6px; color: var(--muted); }
.two{ display:grid; grid-template-columns: 1fr 1fr; gap: 12px; }

.footer{
  padding: 24px 22px 40px;
  text-align: center;
  color: var(--muted);
}

@media (max-width: 980px){
  .hero{ grid-template-columns: 1fr; }
  .grid{ grid-template-columns: repeat(2, 1fr); }
  .concept-grid{ grid-template-columns: 1fr 1fr; }
  .value-grid{ grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 520px){
  .site-header{
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 14px 16px;
  }

  .logo{ font-size: 1.3rem; }

  .nav{
    width: 100%;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  .nav a{ font-size: 0.95rem; }
  .btn-small{ padding: 8px 12px; font-size: 0.9rem; }
  .grid,
  .concept-grid,
  .value-grid,
  .two,
  .stat-grid{ grid-template-columns: 1fr; }
}
