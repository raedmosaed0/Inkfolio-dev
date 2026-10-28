/* ================= DATA — edit your info here ================= */
const SITE = {
  name: 'Omar Nasser',
  role: 'Full-stack developer',
  tagline: 'I build complete web products — from hand-finished interfaces to solid back ends.',
  email: 'hello@example.com',
  availability: 'Currently open to freelance & full-time roles.',

  about: {
    quote: 'Good interfaces start as rough sketches. I just happen to ship mine.',
    paragraphs: [
      'I’m a full-stack developer who cares as much about the feel of a page as the code behind it. I build interfaces that load quickly, work for everyone, and still have a little personality — backed by APIs and databases I can trust.',
      'Most projects start on paper — boxes, arrows, ugly first drafts — before they ever reach a code editor. That habit keeps the work honest and the details deliberate.'
    ],
    facts: [
      'Based in Your City, Your Country',
      'Full-stack: front end, back end & databases',
      'Currently exploring: WebGL & motion design',
      'Happiest with: a pen, a keyboard, and strong coffee'
    ]
  },

  // brush: 'big' | 'medium' | 'small' | 'dry' | 'sketch'   level: 0–1
  skills: [
    { name: 'JavaScript & TypeScript', note: 'for logic',                  level: 0.95, brush: 'big' },
    { name: 'React & Next.js',         note: 'for interfaces',             level: 0.90, brush: 'medium' },
    { name: 'HTML & CSS',              note: 'for structure & style',      level: 0.95, brush: 'medium' },
    { name: 'Node.js, APIs & Databases', note: 'for the back of house',   level: 0.90, brush: 'small' },
    { name: 'SVG & Animation',         note: 'for texture',                level: 0.85, brush: 'dry' },
    { name: 'Accessibility & Testing', note: 'for rough edges',            level: 0.75, brush: 'sketch' }
  ],
  tools: [
    { abbr: 'VS', name: 'VS Code',     note: '(editor + terminal)' },
    { abbr: 'Fg', name: 'Figma',       note: '(layouts + wireframes)' },
    { abbr: 'Gt', name: 'Git & GitHub', note: '(version control)' },
    { abbr: '✎',  name: 'Pen & paper', note: '(every idea starts here)' }
  ],
  principles: [
    'Ship small, then iterate.',
    'Accessible by default, not as an afterthought.',
    'Keep it simple, then make it beautiful.',
    'Don’t be afraid of rough edges.'
  ],

  // sketch: 'browser' | 'phone' | 'chart' | 'terminal'
  projects: [
    { title: 'Inkwell Notes', year: '2026', role: 'Design & development', sketch: 'browser',
      description: 'A distraction-free writing app with offline sync, markdown shortcuts and a hand-drawn interface.',
      tags: ['React', 'TypeScript', 'IndexedDB'],
      links: [{ label: 'Live site', href: 'https://example.com' }, { label: 'Source code', href: 'https://github.com/' }] },
    { title: 'Sketchbook Mobile', year: '2025', role: 'Mobile development', sketch: 'phone',
      description: 'A music-practice companion with setlists, tempo tools and a metronome that feels analog.',
      tags: ['React Native', 'Expo', 'Web Audio'],
      links: [{ label: 'Live demo', href: 'https://example.com' }, { label: 'Source code', href: 'https://github.com/' }] },
    { title: 'Plotline Dashboard', year: '2025', role: 'Full-stack development', sketch: 'chart',
      description: 'An analytics dashboard for indie shops, with live charts and keyboard-first filters.',
      tags: ['Next.js', 'D3', 'PostgreSQL'],
      links: [{ label: 'Case study', href: 'https://example.com' }, { label: 'Source code', href: 'https://github.com/' }] },
    { title: 'Quill CLI', year: '2024', role: 'Open source', sketch: 'terminal',
      description: 'A command-line tool that scaffolds, lints and deploys static sites in a single step.',
      tags: ['Node.js', 'CLI', 'Open source'],
      links: [{ label: 'Documentation', href: 'https://example.com' }, { label: 'Source code', href: 'https://github.com/' }] }
  ],

  socials: [
    { label: 'GitHub',   href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'X / Twitter', href: 'https://x.com/' }
  ]
};

/* ================= Portfolio behaviour (index.html) ================= */
if (!document.body.classList.contains('page-404')) {
(() => {
'use strict';
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const ext = h => /^https?:/i.test(h) ? ' target="_blank" rel="noopener noreferrer"' : '';
const newTab = h => /^https?:/i.test(h) ? '<span class="sr-only"> (opens in a new tab)</span>' : '';

/* ---------- small svg helpers ---------- */
const P  = (d, w = 4, c = '') => `<path class="s draw ${c}" d="${d}" stroke-width="${w}"/>`;
const K  = d => `<path class="k pop" d="${d}"/>`;
const C  = (x, y, r) => `<circle class="k pop" cx="${x}" cy="${y}" r="${r}"/>`;
const CO = (x, y, r, w = 4) => `<circle class="s draw" cx="${x}" cy="${y}" r="${r}" stroke-width="${w}"/>`;
const T  = (x, y, t, size = 19) => `<text class="pop" x="${x}" y="${y}" font-size="${size}">${t}</text>`;
const HAT = d => `<path class="hatf pop" d="${d}"/>`;

const sketches = {
  browser: () => [
    P('M20 24 C 140 20, 260 26, 380 22 C 384 100, 382 200, 378 276 C 260 280, 140 274, 22 278 C 18 200, 20 100, 20 24 Z', 5),
    P('M20 58 C 140 56, 260 60, 380 56', 4), C(40, 41, 6), C(58, 41, 6), C(76, 41, 6),
    P('M44 92 L 220 90', 14), P('M44 118 L 160 117', 14), P('M44 146 L 200 146', 3), P('M44 160 L 176 161', 3),
    K('M44 184 C 80 180, 110 186, 134 182 C 136 196, 136 208, 132 218 C 104 222, 70 218, 46 220 C 42 208, 44 196, 44 184 Z'),
    P('M246 84 C 290 80, 330 84, 358 82 C 360 130, 358 180, 356 222 C 320 226, 280 222, 248 224 C 244 180, 246 130, 246 84 Z', 4),
    P('M248 86 L 356 222', 2.5), P('M356 86 L 248 222', 2.5),
    HAT('M24 244 L 376 244 L 376 272 L 24 272 Z')
  ].join(''),
  phone: () => [
    P('M130 18 C 170 14, 230 16, 270 20 C 280 100, 280 200, 276 282 C 230 286, 170 284, 126 280 C 120 200, 122 100, 130 18 Z', 6),
    P('M182 36 L 218 35', 6),
    CO(158, 84, 12), P('M180 78 L 250 77', 5), P('M180 94 L 232 94', 3),
    CO(158, 134, 12), P('M180 128 L 246 128', 5), P('M180 144 L 226 144', 3),
    CO(158, 184, 12), P('M180 178 L 252 178', 5), P('M180 194 L 236 194', 3),
    CO(200, 244, 22, 5), K('M192 232 L 192 256 L 214 244 Z'),
    P('M84 130 C 100 150, 100 170, 84 190', 4), P('M60 108 C 100 146, 100 174, 60 212', 4),
    P('M316 130 C 300 150, 300 170, 316 190', 4), P('M340 108 C 300 146, 300 174, 340 212', 4)
  ].join(''),
  chart: () => [
    P('M44 36 L 46 252 L 366 250', 5),
    K('M78 250 L 80 196 L 110 194 L 112 250 Z'),
    `<path class="s hat draw" d="M128 250 L 128 150 L 160 152 L 162 250" stroke-width="4"/>`,
    K('M178 250 L 180 124 L 210 122 L 212 250 Z'),
    `<path class="s hat draw" d="M228 250 L 228 84 L 260 86 L 262 250" stroke-width="4"/>`,
    K('M278 250 L 280 104 L 310 102 L 312 250 Z'),
    P('M56 214 C 110 190, 150 168, 196 112 S 290 60, 344 44', 4),
    P('M322 38 L 346 42 L 338 64', 4), C(196, 112, 6),
    P('M60 40 L 120 40', 3), P('M60 52 L 98 52', 3)
  ].join(''),
  terminal: () => [
    P('M18 28 C 140 24, 260 30, 382 26 C 386 100, 384 200, 380 274 C 260 278, 140 272, 20 276 C 16 200, 18 100, 18 28 Z', 5),
    P('M18 60 L 382 58', 4), C(38, 44, 6), C(56, 44, 6), C(74, 44, 6),
    T(40, 98, '$ npm run build'), T(40, 128, 'compiled in 1.2s'), T(40, 158, '$ quill deploy'), T(40, 188, 'shipped to production.'),
    `<rect class="k blink" x="40" y="206" width="12" height="22"/>`,
    P('M344 104 C 320 106, 334 144, 310 154 C 334 164, 320 202, 344 204', 5),
    HAT('M22 246 L 378 246 L 378 270 L 22 270 Z')
  ].join('')
};
const sketchSVG = (type, label) =>
  `<svg viewBox="0 0 400 300" role="img" aria-label="${esc(label)}"><g filter="url(#rough)">${(sketches[type] || sketches.browser)()}</g></svg>`;

const arrowSVG = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path class="s" d="M4 20 C 9 14, 13 9, 19 5 M10 5 L 19 5 L 19 14" stroke-width="2.4"/></svg>';
const underSVG = '<svg class="u" viewBox="0 0 100 9" aria-hidden="true"><path class="s scr" d="M2 5 C 20 1, 40 8, 60 4 S 88 6, 98 3" stroke-width="2.6"/></svg>';

/* ---------- brush samples for the skills list ---------- */
function brushSVG(type, level) {
  const w = Math.round(40 + level * 320), x2 = 8 + w;
  let body;
  switch (type) {
    case 'big':    body = `<path class="s draw" d="M8 22 C ${8+w*.3} 12, ${8+w*.65} 32, ${x2} 20" stroke-width="26" filter="url(#heavy)"/>`; break;
    case 'medium': body = `<path class="s draw" d="M8 22 C ${8+w*.35} 16, ${8+w*.6} 28, ${x2} 21" stroke-width="15" filter="url(#heavy)"/>`; break;
    case 'small':  body = `<path class="s draw" d="M8 14 C ${8+w*.4} 9, ${8+w*.7} 17, ${x2} 12" stroke-width="4" filter="url(#rough)"/>
                           <path class="s draw" d="M${8+w*.1} 24 C ${8+w*.5} 20, ${8+w*.75} 27, ${x2-w*.08} 23" stroke-width="3" filter="url(#rough)"/>
                           <path class="s draw" d="M${8+w*.2} 33 C ${8+w*.5} 30, ${8+w*.7} 35, ${x2-w*.2} 32" stroke-width="2" filter="url(#rough)"/>`; break;
    case 'dry':    body = `<path class="s draw" d="M8 22 C ${8+w*.3} 15, ${8+w*.7} 29, ${x2} 20" stroke-width="22" filter="url(#dry)"/>`; break;
    default: {
      let d = 'M8 30', x = 8, up = true;
      while (x < x2 - 14) { x += 14 + (x % 7); d += ` L ${Math.min(x, x2)} ${up ? 10 : 32}`; up = !up; }
      body = `<path class="s draw" d="${d}" stroke-width="4" filter="url(#rough)"/>`;
    }
  }
  return `<svg class="brush" viewBox="0 0 400 44" aria-hidden="true">${body}</svg>`;
}

/* ---------- render content from SITE ---------- */
const S = SITE;
const parts = S.name.trim().split(/\s+/);
const initials = parts.map(p => p[0]).join('').slice(0, 2).toUpperCase();
const year = new Date().getFullYear();

document.title = `${S.name} — ${S.role}`;
$('meta[name="description"]').content = S.tagline;
$('#logoName').textContent = S.name;
$('#logoMono').textContent = initials;
$('#firstName').textContent = parts[0];
$('#lastName').textContent = parts.slice(1).join(' ');
$('#role').textContent = S.role;
$('#tagline').textContent = S.tagline;
$('#year').textContent = year;
$('#footYear').textContent = year;
$('#footName').textContent = S.name;

$('#aboutQuote').textContent = '“' + S.about.quote + '”';
$('#aboutText').innerHTML = S.about.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');
$('#facts').innerHTML = S.about.facts.map(f => `<li>${esc(f)}</li>`).join('');

$('#skillList').innerHTML = S.skills.map(s => `
  <div class="skill reveal">
    ${brushSVG(s.brush, s.level)}
    <div><b>${esc(s.name)}</b><small>(${esc(s.note)})</small><span class="sr-only"> Proficiency ${Math.round(s.level * 100)} percent.</span></div>
  </div>`).join('');
$('#toolList').innerHTML = S.tools.map(t => `
  <li class="tool"><span class="tool-ico" aria-hidden="true">${esc(t.abbr)}</span><span><b>${esc(t.name)}</b><small>${esc(t.note)}</small></span></li>`).join('');
$('#principles').innerHTML = S.principles.map(p => `<li>${esc(p)}</li>`).join('');

$('#projectList').innerHTML = S.projects.map((p, i) => {
  const main = p.links && p.links[0];
  const art = `<div class="proj-wrap">
      <svg class="proj-back" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true"><g filter="url(#dry)">
        <path class="s draw" d="M-10 278 L 410 262" stroke-width="30"/><path class="s draw" d="M392 40 L 398 290" stroke-width="16"/></g></svg>
      <div class="proj-frame">${sketchSVG(p.sketch, `${p.title} — ink sketch`)}</div></div>`;
  const artEl = main
    ? `<a class="proj-art has-link" href="${esc(main.href)}"${ext(main.href)} tabindex="-1" aria-hidden="true">${art}</a>`
    : `<div class="proj-art">${art}</div>`;
  const links = (p.links || []).map(l =>
    `<a class="plink" href="${esc(l.href)}"${ext(l.href)}><span>${esc(l.label)}</span>${newTab(l.href)}${arrowSVG}${underSVG}</a>`).join('');
  return `<article class="project reveal">
    ${artEl}
    <div class="proj-body">
      <div class="proj-head"><span class="num" aria-hidden="true">${i + 1}</span><h3>${esc(p.title)}</h3></div>
      <p class="meta">${esc(p.year)} · ${esc(p.role)}</p>
      <p>${esc(p.description)}</p>
      <ul class="tags" aria-label="Technologies">${(p.tags || []).map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      <div class="links">${links}</div>
    </div>
  </article>`;
}).join('');

$('#availability').textContent = S.availability;
$('#emailLink').href = 'mailto:' + S.email;
$('#emailText').textContent = S.email;
$('#socials').innerHTML = S.socials.map(s =>
  `<a class="plink" href="${esc(s.href)}"${ext(s.href)}><span>${esc(s.label)}</span>${newTab(s.href)}${arrowSVG}${underSVG}</a>`).join('');

/* ---------- section separators (hand-drawn rule + arrow) ---------- */
$$('.sep').forEach((el, i) => {
  const flip = i % 2 ? ' transform="translate(1200 0) scale(-1 1)"' : '';
  el.classList.add('reveal');
  el.innerHTML = `<svg viewBox="0 0 1200 70" aria-hidden="true"><g filter="url(#rough)"${flip}>
    <path class="s draw" d="M10 40 C 120 14, 200 62, 320 34 S 520 20, 640 40 S 860 60, 980 30 S 1120 34, 1176 38" stroke-width="6"/>
    <path class="s draw" d="M1146 14 C 1164 24, 1178 32, 1188 40 C 1176 48, 1162 54, 1146 62" stroke-width="6"/>
    <path class="s draw" d="M80 58 L 330 53" stroke-width="2"/>
    <path class="s draw" d="M700 20 L 900 16" stroke-width="2"/></g></svg>`;
});

/* ---------- ink-draw plumbing ---------- */
$$('.draw, .scr').forEach(p => { if (p.setAttribute && !p.hasAttribute('pathLength')) p.setAttribute('pathLength', '1'); });
const roots = $$('.reveal, .hero-art, .hero-streaks, .under-wrap');
roots.forEach(r => $$('.draw, .pop', r).forEach((n, i) => n.style.setProperty('--d', Math.min(i * 0.07, 1.4) + 's')));

function replay(root) {
  if (reduce) return;
  const paths = $$('.draw', root);
  paths.forEach(p => { p.style.transition = 'none'; p.style.strokeDashoffset = '1.02'; });
  void root.getBoundingClientRect();
  paths.forEach((p, i) => { p.style.transition = `stroke-dashoffset .7s ease ${Math.min(i * 0.04, .6)}s`; p.style.strokeDashoffset = '0'; });
  setTimeout(() => paths.forEach(p => { p.style.transition = ''; p.style.strokeDashoffset = ''; }), 1600);
}
$$('.skill').forEach(el => el.addEventListener('mouseenter', () => replay(el)));
$$('.proj-art').forEach(el => el.addEventListener('mouseenter', () => replay($('.proj-frame', el))));

const io = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries, o) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); o.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
  : null;
roots.forEach(r => io ? io.observe(r) : r.classList.add('in'));

/* ---------- header, nav, active section ---------- */
const header = $('#siteHeader');
const onScroll = () => header.classList.toggle('scrolled', scrollY > 30);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

const menuBtn = $('#menuBtn');
const setMenu = open => { document.body.classList.toggle('menu-open', open); menuBtn.setAttribute('aria-expanded', String(open)); };
menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
addEventListener('keydown', e => { if (e.key === 'Escape') { setMenu(false); menuBtn.focus(); } });
$$('#nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));

const navLinks = $$('#nav a');
if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.removeAttribute('aria-current'));
    const a = navLinks.find(l => l.getAttribute('href') === '#' + e.target.id);
    if (a) a.setAttribute('aria-current', 'true');
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));
}

/* ---------- contact ---------- */
/* ---------- unknown #links → 404 page ---------- */
const checkHash = () => {
  const raw = location.hash.slice(1);
  if (!raw || raw === 'top') return;
  let id = raw; try { id = decodeURIComponent(raw); } catch {}
  if (!document.getElementById(id)) location.replace(location.protocol === 'file:' ? '404.html' : '/404.html');
};
checkHash(); addEventListener('hashchange', checkHash);

const copyStatus = $('#copyStatus');
$('#copyBtn').addEventListener('click', async () => {
  const text = S.email;
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else {
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta); ta.select();
      if (!document.execCommand('copy')) throw new Error('copy failed');
      ta.remove();
    }
    copyStatus.textContent = 'Copied to clipboard — ' + text;
  } catch {
    copyStatus.textContent = 'Couldn’t copy automatically. Please select the address above.';
  }
  setTimeout(() => { copyStatus.textContent = ''; }, 4000);
});

const form = $('#contactForm'), formStatus = $('#formStatus');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); formStatus.textContent = 'Please fill in every field with a valid email.'; return; }
  const d = new FormData(form);
  const subject = encodeURIComponent('Portfolio message from ' + d.get('name'));
  const body = encodeURIComponent(`${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`);
  formStatus.textContent = 'Opening your email app…';
  location.href = `mailto:${S.email}?subject=${subject}&body=${body}`;
});
})();
}

/* ================= 404 page behaviour (404.html) ================= */
if (document.body.classList.contains('page-404')) {
(() => {
  'use strict';
  const NAME = SITE.name;               // taken from the DATA section above

  const $ = s => document.querySelector(s);
  // When opened straight from disk ("/" would point at the drive root), link to the portfolio file instead.
  const local = location.protocol === 'file:';
  const home = local ? 'index.html' : '/';
  $('#homeLogo').href = home; $('#homeBtn').href = home;
  $('#workBtn').href = home + '#projects'; $('#helloBtn').href = home + '#contact';

  $('#siteName').textContent = NAME; $('#footName').textContent = NAME;
  $('#mono').textContent = NAME.split(/\s+/).map(p => p[0]).join('').slice(0, 2).toUpperCase();
  $('#year').textContent = new Date().getFullYear();

  // Show what the visitor tried to open (as plain text only).
  const tried = (location.pathname + location.search + location.hash);
  if (!local && tried && tried !== '/' && !/404\.html$/i.test(location.pathname)) {
    $('#triedPath').textContent = tried.length > 80 ? tried.slice(0, 80) + '…' : tried;
    $('#tried').hidden = false;
  }

  document.querySelectorAll('.draw').forEach(p => p.setAttribute('pathLength', '1'));
  const card = $('#card'), streaks = [...document.querySelectorAll('.streaks')];
  [card, ...streaks].forEach(root => root.querySelectorAll('.draw,.pop,.rise').forEach((n, i) => n.style.setProperty('--d', Math.min(i * 0.09, 1.2) + 's')));
  requestAnimationFrame(() => requestAnimationFrame(() => { card.classList.add('in'); streaks.forEach(x => x.classList.add('in')); }));
})();
}
