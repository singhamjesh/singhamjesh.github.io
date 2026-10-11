(() => {
  if (window.__aMascot) return;
  window.__aMascot = true;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const docked = reduce || !fine;

  const page = document.body.classList.contains('notes-body')
    ? 'notes'
    : /blogs\.html$/.test(location.pathname)
      ? 'blogs'
      : 'home';

  const root = document.createElement('div');
  root.className = 'a-mascot';
  root.id = 'a-mascot';
  root.dataset.state = 'idle';
  root.dataset.expression = 'happy';
  if (!docked) root.setAttribute('aria-hidden', 'true');
  root.innerHTML = `
    <div class="a-mascot-stage">
      <svg class="a-mascot-svg" viewBox="0 0 100 132" aria-hidden="true">
        <defs>
          <linearGradient id="a-mascot-ring" x1="18" y1="16" x2="86" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#ff9a2e"/>
            <stop offset="0.48" stop-color="#ff4d6a"/>
            <stop offset="1" stop-color="#b44cff"/>
          </linearGradient>
        </defs>
        <ellipse class="part-shadow" cx="50" cy="124" rx="16" ry="3.1" fill="rgba(0,0,0,0.38)"/>
        <g class="part-body">
          <g class="part-leg part-leg-l">
            <path d="M40 80c-1 12-2 22-1 34" fill="none" stroke="url(#a-mascot-ring)" stroke-width="3.4" stroke-linecap="round"/>
            <circle cx="39" cy="116" r="2.5" fill="#ff9a2e"/>
          </g>
          <g class="part-leg part-leg-r">
            <path d="M60 80c1 12 2 22 1 34" fill="none" stroke="url(#a-mascot-ring)" stroke-width="3.4" stroke-linecap="round"/>
            <circle cx="61" cy="116" r="2.5" fill="#b44cff"/>
          </g>
          <circle cx="50" cy="54" r="27" fill="#14161e" stroke="url(#a-mascot-ring)" stroke-width="3"/>
          <ellipse cx="40" cy="40" rx="11" ry="6" fill="rgba(255,255,255,0.07)"/>
          <path d="M44.2 78.5 50 69.2 55.8 78.5M46 75.6h8" fill="none" stroke="url(#a-mascot-ring)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
          <g class="part-arm part-arm-l">
            <path d="M25 58c-8 3-12 12-7 20" fill="none" stroke="url(#a-mascot-ring)" stroke-width="3.2" stroke-linecap="round"/>
          </g>
          <g class="part-arm part-arm-r">
            <path d="M75 58c8 3 12 12 7 20" fill="none" stroke="url(#a-mascot-ring)" stroke-width="3.2" stroke-linecap="round"/>
          </g>
          <g class="part-head">
            <g class="eye eye-l">
              <ellipse class="sclera" cx="39" cy="51" rx="6.2" ry="7" fill="#f6f8fb"/>
              <circle class="pupil pupil-l" cx="39" cy="52.2" r="2.45" fill="#17191f"/>
              <ellipse class="lid lid-l" cx="39" cy="51" rx="6.6" ry="7.4" fill="#1c1e27"/>
            </g>
            <g class="eye eye-r">
              <ellipse class="sclera" cx="61" cy="51" rx="6.2" ry="7" fill="#f6f8fb"/>
              <circle class="pupil pupil-r" cx="61" cy="52.2" r="2.45" fill="#17191f"/>
              <ellipse class="lid lid-r" cx="61" cy="51" rx="6.6" ry="7.4" fill="#1c1e27"/>
            </g>
            <path class="mouth mouth-smile" d="M40 63.5q10 8 20 0" fill="none" stroke="#f6f8fb" stroke-width="1.8" stroke-linecap="round"/>
            <ellipse class="mouth mouth-open" cx="50" cy="65" rx="3.5" ry="2.7" fill="#f6f8fb"/>
            <path class="mouth mouth-sleep" d="M42 64.5h16" fill="none" stroke="#f6f8fb" stroke-width="1.8" stroke-linecap="round"/>
          </g>
          <text class="zzz" x="70" y="30" fill="#ffb089" font-size="12" font-family="Inter, sans-serif" font-weight="700">z</text>
        </g>
      </svg>
    </div>
  `;

  document.body.appendChild(root);

  const stage = root.querySelector('.a-mascot-stage');
  const partBody = root.querySelector('.part-body');
  const partHead = root.querySelector('.part-head');
  const legL = root.querySelector('.part-leg-l');
  const legR = root.querySelector('.part-leg-r');
  const armL = root.querySelector('.part-arm-l');
  const armR = root.querySelector('.part-arm-r');
  const pupilL = root.querySelector('.pupil-l');
  const pupilR = root.querySelector('.pupil-r');
  const lidL = root.querySelector('.lid-l');
  const lidR = root.querySelector('.lid-r');
  const shadow = root.querySelector('.part-shadow');

  const rules = [
    {
      sel: '.pdf-controls button, #pdf-dock-toggle, .reader-back, #prev-chapter, #next-chapter, #toc-open',
      mood: 'curious',
      tuck: true,
    },
    {
      sel: '.pdf-stage, .pdf-scroll, .toc-panel',
      mood: 'quiet',
      tuck: true,
    },
    { sel: '.toc-item', mood: 'curious' },
    { sel: '.subject-card', mood: 'curious' },
    { sel: '.skill-icon', mood: 'happy' },
    { sel: '.skill-card', mood: 'happy' },
    { sel: '.project-links a', mood: 'wave' },
    { sel: '.project', mood: 'curious' },
    { sel: '.cert-card', mood: 'wow' },
    { sel: '.achieve-card', mood: 'happy' },
    { sel: '.timeline-item', mood: 'curious' },
    { sel: '.info-card', mood: 'curious' },
    { sel: '.contact-tile', mood: 'wave' },
    { sel: '.social-media a', mood: 'wave' },
    { sel: '.cvDownloadBtn a', mood: 'wave' },
    { sel: '.hero-stack a', mood: 'happy' },
    { sel: '.about-photo', mood: 'happy' },
    { sel: '.brand', mood: 'wave' },
    { sel: '.nav-links a', mood: 'wave' },
    { sel: '.btn, button[aria-label]', mood: 'happy' },
  ];

  const sectionMood = {
    top: 'happy',
    about: 'wave',
    skills: 'happy',
    work: 'curious',
    projects: 'curious',
    education: 'curious',
    achievements: 'wow',
    certifications: 'wow',
    contact: 'wave',
    library: 'curious',
    reader: 'quiet',
  };

  let px = window.innerWidth - 90;
  let py = window.innerHeight - 120;
  let x = window.innerWidth - 78;
  let y = window.innerHeight + 120;
  let heading = 1;
  let mode = 'idle';
  let modeTime = 0;
  let lastInput = performance.now();
  let expression = 'happy';
  let gesture = 'none';
  let gestureUntil = 0;
  let tuckedHover = false;
  let lastKey = '';
  let clearTimer = 0;
  let magnet = null;
  let tiltCard = null;
  let jump = null;
  let lift = 0;
  let walkPhase = 0;
  let moving = false;
  let jumpCooldown = 0;
  let blinkLeft = 0;
  let nextBlink = 480;
  let lookX = 0;
  let lookY = 0;
  let scrollKick = 0;
  let lastScroll = window.scrollY;
  let scrollReactAt = 0;
  let sectionAt = 0;
  let sectionId = page === 'notes' ? 'library' : 'top';
  let sectionExpr = sectionMood[sectionId] || 'happy';
  let intro = true;
  let exiting = '';
  let exitTimer = 0;
  let raf = 0;
  let running = false;
  let lastFrame = 0;
  let dockBlink = 0;
  const pose = { legL: 0, legR: 0, armL: 0, armR: 0, head: 0, sx: 1, sy: 1, bob: 0, lean: 0 };
  const offs = [];

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const clean = (value) => String(value || '').replace(/\s+/g, ' ').trim();

  const listen = (target, type, fn, opts) => {
    target.addEventListener(type, fn, opts);
    offs.push(() => target.removeEventListener(type, fn, opts));
  };

  const setMode = (next) => {
    if (mode === next) return;
    mode = next;
    modeTime = 0;
    root.dataset.state = next;
  };

  const gestureFor = (mood) => {
    if (mood === 'wave' || mood === 'happy') return 'wave';
    if (mood === 'wow') return 'cheer';
    if (mood === 'curious') return 'curious';
    return 'none';
  };

  const readingOpen = () => {
    if (page !== 'notes') return false;
    const reader = document.getElementById('reader');
    return Boolean(reader && !reader.hidden);
  };

  const nest = () => {
    if (readingOpen() || tuckedHover) return { x: 54, y: window.innerHeight - 18 };
    return { x: window.innerWidth - 78, y: window.innerHeight - 18 };
  };

  const aimFor = (now, quiet) => {
    if (exiting) return { x: window.innerWidth + 40, y: window.innerHeight - 18 };
    if (quiet) return { x: 54, y: window.innerHeight - 18 };
    if (now - lastInput > 6500 && !lastKey) return nest();
    const toLeft = px > window.innerWidth - 170;
    return {
      x: clamp(px + (toLeft ? -62 : 54), 46, window.innerWidth - 46),
      y: clamp(py + 86, 130, window.innerHeight - 16),
    };
  };

  const startJump = (target, arc, loose) => {
    const x1 = loose ? target.x : clamp(target.x, 40, window.innerWidth - 40);
    const y1 = clamp(target.y, 100, window.innerHeight - 12);
    if (jump && mode === 'jumping') {
      jump.x1 = x1;
      jump.y1 = y1;
      jump.arc = arc;
      if (jump.phase === 'air') {
        jump.x0 = x;
        jump.y0 = y;
        jump.t = Math.min(jump.t, 70);
      }
      return;
    }
    jump = { x0: x, y0: y, x1, y1, arc, phase: 'anticipation', t: 0 };
    lift = 0;
    setMode('jumping');
  };

  const finishExit = () => {
    if (!exiting) return;
    const url = exiting;
    exiting = '';
    window.clearTimeout(exitTimer);
    location.href = url;
  };

  const updateJump = (dt) => {
    if (!jump) {
      setMode('landing');
      return;
    }
    jump.t += dt;
    if (jump.phase === 'anticipation') {
      if (jump.t >= 90) {
        jump.phase = 'air';
        jump.t = 0;
      }
      return;
    }
    const p = Math.min(1, jump.t / 400);
    lift = Math.sin(p * Math.PI) * jump.arc;
    x = jump.x0 + (jump.x1 - jump.x0) * p;
    y = jump.y0 + (jump.y1 - jump.y0) * p;
    if (p >= 1) {
      x = jump.x1;
      y = jump.y1;
      lift = 0;
      jump = null;
      jumpCooldown = 340;
      setMode('landing');
    }
  };

  const updateLanding = (dt) => {
    modeTime += dt;
    lift = 0;
    if (modeTime >= 220) {
      if (exiting) {
        finishExit();
        return;
      }
      setMode(gestureUntil > performance.now() ? 'reacting' : 'tracking');
      if (intro) {
        intro = false;
        if (page === 'notes' && location.hash.includes('/')) onHash();
      }
    }
  };

  const moveToward = (dx, dy, dist, dt, speed) => {
    const step = Math.min(dist, (speed * dt) / 1000);
    x += (dx / dist) * step;
    y += (dy / dist) * step;
    if (Math.abs(dx) > 2) heading = Math.sign(dx);
    walkPhase += (dt * 0.012 * speed) / 280;
    moving = true;
  };

  const visibleSection = () => {
    if (readingOpen()) return 'reader';
    if (page === 'notes') return 'library';
    if (page === 'blogs') return 'top';
    let best = 'top';
    let bestVis = 0;
    document.querySelectorAll('main section[id]').forEach((el) => {
      const rect = el.getBoundingClientRect();
      const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      if (visible > bestVis) {
        bestVis = visible;
        best = el.id;
      }
    });
    return best;
  };

  const refreshSection = (now) => {
    if (now - sectionAt < 260) return;
    sectionAt = now;
    const next = visibleSection();
    sectionExpr = sectionMood[next] || 'happy';
    if (next === sectionId) return;
    sectionId = next;
    if (lastKey || exiting || mode === 'jumping' || mode === 'landing' || now - lastInput > 6500) return;
    gesture = gestureFor(sectionExpr);
    gestureUntil = now + 680;
    expression = sectionExpr;
  };

  const blinkAmount = (dt) => {
    nextBlink -= dt;
    if (nextBlink <= 0 && mode !== 'sleeping') {
      blinkLeft = 130;
      nextBlink = 2300 + Math.random() * 2200;
    }
    if (blinkLeft <= 0) return 0;
    blinkLeft -= dt;
    const t = 1 - Math.max(blinkLeft, 0) / 130;
    return Math.sin(clamp(t, 0, 1) * Math.PI);
  };

  const damp = (current, target, dt, ms) => current + (target - current) * (1 - Math.exp(-dt / ms));

  const applyPose = (now, dt) => {
    const breathe = Math.sin(now / 460);
    const want = { legL: 0, legR: 0, armL: 0, armR: 0, head: 0, sx: 1, sy: 1, bob: breathe * -2.2, lean: 0 };
    let lid = blinkAmount(dt);

    if (mode === 'jumping' && jump && jump.phase === 'anticipation') {
      const p = Math.min(1, jump.t / 90);
      want.sx = 1 + p * 0.16;
      want.sy = 1 - p * 0.22;
      want.legL = -16 * p;
      want.legR = 16 * p;
      want.armL = 10 * p;
      want.armR = -10 * p;
      want.bob = 5 * p;
      lift = 0;
    } else if (mode === 'jumping' && jump) {
      const air = Math.sin(Math.min(1, jump.t / 400) * Math.PI);
      want.sx = 1 - air * 0.08;
      want.sy = 1 + air * 0.16;
      want.legL = -28 * air;
      want.legR = 22 * air;
      want.armL = -50 * air;
      want.armR = -44 * air;
      want.bob = 0;
      want.lean = clamp((jump.x1 - jump.x0) * 0.015, -10, 10);
    } else if (mode === 'landing') {
      const s = Math.sin(Math.min(1, modeTime / 220) * Math.PI);
      want.sx = 1 + s * 0.18;
      want.sy = 1 - s * 0.22;
      want.legL = 12 * s;
      want.legR = -12 * s;
      want.bob = 4 * s;
      lift = 0;
    } else if (moving) {
      const swing = Math.sin(walkPhase);
      want.legL = swing * (mode === 'sleeping' ? 16 : 32);
      want.legR = -swing * (mode === 'sleeping' ? 16 : 32);
      want.armL = -swing * (mode === 'sleeping' ? 10 : 22);
      want.armR = swing * (mode === 'sleeping' ? 10 : 20);
      want.bob = -Math.abs(Math.cos(walkPhase)) * (mode === 'sleeping' ? 1.5 : 3.4);
      want.sx = mode === 'sleeping' ? 1.01 : 1.035;
      want.sy = mode === 'sleeping' ? 0.99 : 0.965;
      want.lean = clamp(heading * 7, -8, 8);
      lift = 0;
    } else if (mode === 'sleeping') {
      const s = Math.sin(now / 980);
      want.sx = 1 + s * 0.025;
      want.sy = 1 - s * 0.035;
      want.bob = s * -1.6;
      want.armL = 8;
      want.armR = -8;
      want.head = -8;
      lid = 0.78;
      lift = 0;
    } else if (mode === 'reacting') {
      want.sx = 1 + breathe * 0.03;
      want.sy = 1 - breathe * 0.02;
      if (gesture === 'wave') want.armR = -54 + Math.sin(now / 130) * 16;
      else if (gesture === 'cheer') {
        want.armL = -50;
        want.armR = -50;
      } else if (gesture === 'curious') want.head = 8;
      lift = 0;
    } else {
      want.sx = 1 + breathe * 0.03;
      want.sy = 1 - breathe * 0.02;
      want.legL = Math.sin(now / 740) * 3;
      want.legR = -want.legL;
      want.armL = Math.sin(now / 860) * 5;
      want.armR = -want.armL;
      if (mode === 'idle' && sectionId === 'contact') want.armR = -28 + Math.sin(now / 180) * 10;
      lift = 0;
    }

    if (scrollKick > 0.02 && mode !== 'jumping') {
      want.sy *= 1 - scrollKick * 0.08;
      want.sx *= 1 + scrollKick * 0.06;
      scrollKick *= Math.exp(-dt / 140);
    } else {
      scrollKick = 0;
    }

    if (mode !== 'sleeping') {
      const tx = clamp((px - x) / 34, -3.2, 3.2);
      const ty = clamp((py - (y - 78)) / 40, -2.5, 2.5);
      const glide = 1 - Math.exp(-dt / 55);
      lookX += (tx - lookX) * glide;
      lookY += (ty - lookY) * glide;
      want.head += clamp(lookX * 3.1, -11, 11);
    } else {
      lookX *= Math.exp(-dt / 180);
      lookY += (1.2 - lookY) * (1 - Math.exp(-dt / 180));
    }

    const ease = mode === 'jumping' || mode === 'landing' ? 26 : 48;
    pose.legL = damp(pose.legL, want.legL, dt, ease);
    pose.legR = damp(pose.legR, want.legR, dt, ease);
    pose.armL = damp(pose.armL, want.armL, dt, ease);
    pose.armR = damp(pose.armR, want.armR, dt, ease);
    pose.head = damp(pose.head, want.head, dt, 60);
    pose.sx = damp(pose.sx, want.sx, dt, ease);
    pose.sy = damp(pose.sy, want.sy, dt, ease);
    pose.bob = damp(pose.bob, want.bob, dt, ease);
    pose.lean = damp(pose.lean, want.lean, dt, ease);

    const rise = -lift + pose.bob;
    partBody.style.transform = `translate(50px, 118px) translate(0px, ${rise.toFixed(2)}px) rotate(${pose.lean.toFixed(2)}deg) scale(${pose.sx.toFixed(3)}, ${pose.sy.toFixed(3)}) translate(-50px, -118px)`;
    legL.style.transform = `translate(40px, 80px) rotate(${pose.legL.toFixed(2)}deg) translate(-40px, -80px)`;
    legR.style.transform = `translate(60px, 80px) rotate(${pose.legR.toFixed(2)}deg) translate(-60px, -80px)`;
    armL.style.transform = `translate(25px, 58px) rotate(${pose.armL.toFixed(2)}deg) translate(-25px, -58px)`;
    armR.style.transform = `translate(75px, 58px) rotate(${pose.armR.toFixed(2)}deg) translate(-75px, -58px)`;
    partHead.style.transform = `translate(50px, 64px) rotate(${pose.head.toFixed(2)}deg) translate(-50px, -64px)`;
    pupilL.style.transform = `translate(${lookX.toFixed(2)}px, ${lookY.toFixed(2)}px)`;
    pupilR.style.transform = `translate(${lookX.toFixed(2)}px, ${lookY.toFixed(2)}px)`;
    lidL.style.transform = `translate(39px, 51px) scale(1, ${lid.toFixed(3)}) translate(-39px, -51px)`;
    lidR.style.transform = `translate(61px, 51px) scale(1, ${lid.toFixed(3)}) translate(-61px, -51px)`;
    const shadowScale = Math.max(0.38, 1 - lift / 150);
    shadow.style.transform = `translate(50px, 124px) scale(${shadowScale.toFixed(3)}, 1) translate(-50px, -124px)`;
    root.dataset.expression = mode === 'sleeping' ? 'sleep' : expression;
    root.dataset.state = mode;
    root.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
  };

  const update = (dt, now) => {
    moving = false;
    jumpCooldown = Math.max(0, jumpCooldown - dt);
    const quiet = readingOpen() || tuckedHover;
    root.classList.toggle('is-tucked', quiet);
    refreshSection(now);

    if (mode === 'jumping') {
      updateJump(dt);
      applyPose(now, dt);
      return;
    }
    if (mode === 'landing') {
      updateLanding(dt);
      applyPose(now, dt);
      return;
    }

    const aim = aimFor(now, quiet);
    const dx = aim.x - x;
    const dy = aim.y - y;
    const dist = Math.hypot(dx, dy);
    const idleFor = now - lastInput;
    const wantsSleep = idleFor > 7000 && !lastKey && !exiting;

    if (dist > 20) {
      const far = dist > 280 && jumpCooldown <= 0 && !quiet && !wantsSleep && mode !== 'walking';
      if (far) startJump(aim, quiet ? 36 : 76, false);
      else {
        if (wantsSleep) {
          if (mode !== 'sleeping') {
            setMode('sleeping');
            lastKey = '';
            gesture = 'none';
          }
        } else if (mode !== 'walking') setMode('walking');
        moveToward(dx, dy, dist, dt, wantsSleep ? 130 : quiet ? 190 : 360);
      }
    } else if (wantsSleep) {
      if (mode !== 'sleeping') {
        setMode('sleeping');
        lastKey = '';
        gesture = 'none';
        gestureUntil = 0;
      }
    } else if (gestureUntil > now) {
      if (mode !== 'reacting') setMode('reacting');
    } else if (idleFor < 1400) {
      if (mode !== 'tracking') setMode('tracking');
    } else if (mode !== 'idle') setMode('idle');

    if (mode === 'sleeping') expression = 'sleep';
    else if (!lastKey && mode !== 'jumping' && mode !== 'landing') expression = sectionExpr;
    applyPose(now, dt);
  };

  const loop = (now) => {
    raf = 0;
    if (!running) return;
    const dt = Math.min(34, Math.max(0, now - lastFrame));
    lastFrame = now;
    update(dt, now);
    raf = window.requestAnimationFrame(loop);
  };

  const startLoop = () => {
    if (docked || running || document.hidden) return;
    running = true;
    lastFrame = performance.now();
    raf = window.requestAnimationFrame(loop);
  };

  const stopLoop = () => {
    running = false;
    if (raf) window.cancelAnimationFrame(raf);
    raf = 0;
  };

  const match = (target) => {
    if (!target || !target.closest) return null;
    const rule = rules.find((item) => target.closest(item.sel));
    if (!rule) return null;
    return { rule, el: target.closest(rule.sel), target };
  };

  const showReaction = (found) => {
    const key = `${found.rule.sel}|${found.rule.tuck ? 1 : 0}`;
    tuckedHover = Boolean(found.rule.tuck);
    lastInput = performance.now();
    if (expression === 'sleep') expression = 'happy';
    if (key === lastKey) return;
    lastKey = key;
    expression = found.rule.mood === 'sleepy' ? 'sleep' : found.rule.mood || 'happy';
    gesture = gestureFor(found.rule.mood);
    gestureUntil = lastInput + 700;
    root.dataset.expression = expression;
  };

  const clearReaction = () => {
    lastKey = '';
    tuckedHover = false;
    gesture = 'none';
    gestureUntil = 0;
    if (mode !== 'sleeping') {
      expression = sectionExpr;
      root.dataset.expression = expression;
    }
  };

  const onPointerMove = (event) => {
    if (event.pointerType && event.pointerType !== 'mouse') return;
    px = event.clientX;
    py = event.clientY;
    lastInput = performance.now();
    if (expression === 'sleep') expression = 'happy';
    const found = match(event.target);
    window.clearTimeout(clearTimer);
    if (found) showReaction(found, false);
    else clearTimer = window.setTimeout(clearReaction, 160);
  };

  const onPointerDown = (event) => {
    if (docked || (event.pointerType && event.pointerType !== 'mouse')) return;
    if (event.target.closest?.('input, textarea, select, [contenteditable="true"]')) return;
    lastInput = performance.now();
    expression = 'wow';
    gesture = 'cheer';
    gestureUntil = lastInput + 560;
    const quiet = readingOpen() || tuckedHover;
    const aim = aimFor(lastInput, quiet);
    const dist = Math.hypot(aim.x - x, aim.y - y);
    if (quiet || dist < 84) startJump({ x, y }, 48, false);
    else startJump(aim, 72, false);
  };

  const onPointerUp = (event) => {
    if (!event.pointerType || event.pointerType === 'mouse') return;
    const onSelf = event.target.closest && event.target.closest('#a-mascot');
    if (onSelf) {
      expression = 'wow';
      root.dataset.expression = 'wow';
      if (partBody) {
        partBody.style.transform = 'translate(50px, 118px) scale(1.12, 0.86) translate(-50px, -118px)';
        window.setTimeout(() => {
          if (partBody) partBody.style.transform = '';
          root.dataset.expression = 'happy';
        }, 180);
      }
      return;
    }
    const found = match(event.target);
    if (found) showReaction(found, true);
  };

  const releaseMagnet = (event) => {
    if (!magnet) return;
    if (event && magnet.contains(event.relatedTarget)) return;
    magnet.style.transform = '';
    magnet = null;
  };

  const onMagnet = (event) => {
    if (!fine || reduce) return;
    const el = event.target.closest?.('.project-links a, .contact-tile, .btn, .hero-stack a');
    if (magnet && magnet !== el) releaseMagnet();
    if (!el) return;
    magnet = el;
    const rect = el.getBoundingClientRect();
    const mx = clamp((event.clientX - (rect.left + rect.width / 2)) * 0.18, -7, 7);
    const my = clamp((event.clientY - (rect.top + rect.height / 2)) * 0.18, -6, 6);
    el.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
  };

  const releaseTilt = (event) => {
    if (!tiltCard) return;
    if (event && tiltCard.contains(event.relatedTarget)) return;
    tiltCard.classList.remove('is-tilting');
    tiltCard.style.transform = '';
    tiltCard = null;
  };

  const onSubjectTilt = (event) => {
    if (!fine || reduce) return;
    const card = event.target.closest?.('.subject-card');
    if (tiltCard && tiltCard !== card) releaseTilt();
    if (!card) return;
    tiltCard = card;
    const rect = card.getBoundingClientRect();
    const tx = (event.clientX - rect.left) / rect.width;
    const ty = (event.clientY - rect.top) / rect.height;
    card.classList.add('is-tilting');
    card.style.transform = `perspective(900px) rotateX(${(0.5 - ty) * 4}deg) rotateY(${(tx - 0.5) * 5}deg) translate3d(${(tx - 0.5) * 8}px, ${(ty - 0.5) * 6 - 4}px, 0) scale(1.015)`;
  };

  const chapterTitle = () => {
    const reader = document.getElementById('reader');
    const title = document.getElementById('reader-chapter');
    if (!reader || reader.hidden || !title) return '';
    return clean(title.textContent);
  };

  const onHash = () => {
    if (page !== 'notes') return;
    let tries = 0;
    const look = () => {
      const text = chapterTitle();
      if (text) {
        expression = 'curious';
        gesture = 'curious';
        gestureUntil = performance.now() + 800;
        return;
      }
      if (location.hash.includes('/') && tries < 8) {
        tries += 1;
        window.setTimeout(look, 200);
        return;
      }
      if (!location.hash || location.hash === '#') {
        expression = 'wave';
        gesture = 'wave';
        gestureUntil = performance.now() + 700;
      }
    };
    window.setTimeout(look, 280);
  };

  const canonicalPath = (pathname) => {
    let path = pathname || '/';
    if (path.endsWith('/index.html')) path = path.slice(0, -'index.html'.length);
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
    return path || '/';
  };

  const isInternalNav = (anchor, event) => {
    if (docked || reduce || exiting) return false;
    if (!anchor || event.defaultPrevented || event.button !== 0) return false;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
    if (anchor.target && anchor.target !== '_self') return false;
    if (anchor.hasAttribute('download')) return false;
    const href = anchor.getAttribute('href') || '';
    if (!href || href.startsWith('#') || /^(mailto:|tel:|javascript:)/i.test(href)) return false;
    let url;
    try {
      url = new URL(anchor.href, location.href);
    } catch (error) {
      return false;
    }
    if (url.origin !== location.origin) return false;
    return canonicalPath(url.pathname) !== canonicalPath(location.pathname);
  };

  const onNavigate = (event) => {
    const anchor = event.target.closest?.('a[href]');
    if (!isInternalNav(anchor, event)) return;
    event.preventDefault();
    exiting = anchor.href;
    expression = 'wow';
    gesture = 'cheer';
    gestureUntil = performance.now() + 700;
    startJump({ x: window.innerWidth + 48, y: window.innerHeight - 16 }, 84, true);
    exitTimer = window.setTimeout(finishExit, 860);
  };

  if (docked) {
    root.classList.add('is-docked');
    stage.tabIndex = 0;
    stage.setAttribute('role', 'button');
    stage.setAttribute('aria-label', 'Say hello');
    listen(stage, 'keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      root.dataset.expression = 'happy';
    });
    if (!reduce) {
      dockBlink = window.setInterval(() => {
        const shut = 'translate(39px, 51px) scale(1, 1) translate(-39px, -51px)';
        const shutR = 'translate(61px, 51px) scale(1, 1) translate(-61px, -51px)';
        lidL.style.transform = shut;
        lidR.style.transform = shutR;
        window.setTimeout(() => {
          lidL.style.transform = 'translate(39px, 51px) scale(1, 0) translate(-39px, -51px)';
          lidR.style.transform = 'translate(61px, 51px) scale(1, 0) translate(-61px, -51px)';
        }, 120);
      }, 3200);
    }
  } else {
    root.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    startJump(nest(), 70, false);
    startLoop();
  }

  window.requestAnimationFrame(() => root.classList.add('is-in'));

  listen(window, 'pointermove', onPointerMove, { passive: true });
  listen(window, 'pointerdown', onPointerDown, { passive: true });
  listen(window, 'pointerup', onPointerUp, { passive: true });
  listen(document, 'mouseout', (event) => {
    releaseMagnet(event);
    releaseTilt(event);
  });
  if (fine && !reduce) {
    listen(document, 'mousemove', onMagnet);
    listen(document, 'mousemove', onSubjectTilt);
  }
  listen(document.documentElement, 'mouseleave', () => {
    if (docked) return;
    lastInput = performance.now() - 7200;
    lastKey = '';
    tuckedHover = false;
  });
  listen(document, 'focusin', (event) => {
    const found = match(event.target);
    if (!found) return;
    window.clearTimeout(clearTimer);
    if (!docked) {
      const rect = found.el.getBoundingClientRect();
      px = rect.left + rect.width / 2;
      py = rect.top + Math.min(rect.height / 2, 80);
      lastInput = performance.now();
    }
    showReaction(found, false);
  });
  listen(document, 'focusout', (event) => {
    const next = event.relatedTarget && match(event.relatedTarget);
    const current = match(event.target);
    if (next && current && next.el === current.el) return;
    window.clearTimeout(clearTimer);
    clearTimer = window.setTimeout(() => {
      if (document.activeElement && match(document.activeElement)) return;
      clearReaction();
    }, 140);
  });
  listen(window, 'hashchange', onHash);
  listen(document, 'click', onNavigate, true);
  listen(
    window,
    'scroll',
    () => {
      const dy = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      if (docked || Math.abs(dy) < 14) return;
      const now = performance.now();
      lastInput = now;
      scrollKick = 1;
      if (now - scrollReactAt > 460 && !lastKey && mode !== 'jumping' && mode !== 'landing') {
        scrollReactAt = now;
        expression = dy > 0 ? 'curious' : 'happy';
        gesture = 'curious';
        gestureUntil = now + 280;
      }
    },
    { passive: true, capture: true },
  );
  listen(window, 'resize', () => {
    if (docked) return;
    x = clamp(x, 36, window.innerWidth - 36);
    y = clamp(y, 80, window.innerHeight + 40);
  });
  listen(document, 'visibilitychange', () => {
    if (document.hidden) stopLoop();
    else startLoop();
  });
  listen(window, 'pagehide', (event) => {
    stopLoop();
    window.clearInterval(dockBlink);
    window.clearTimeout(clearTimer);
    window.clearTimeout(exitTimer);
    if (!event.persisted) offs.splice(0).forEach((fn) => fn());
  });
  listen(window, 'pageshow', () => {
    if (!document.hidden) startLoop();
  });
})();
