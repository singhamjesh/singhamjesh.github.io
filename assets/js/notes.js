(() => {
  const SUBJECTS = [
    {
      id: 'de',
      title: 'Digital Electronics',
      blurb:
        'Number systems, Boolean algebra, gates, maps, and sequential circuits.',
      icon: 'fa-microchip',
      accent: '#f5b942',
      chapters: [
        [
          '01',
          'Digital System Basics',
          'Digital_Logic_Ch01_Digital_System_Basics.pdf',
        ],
        [
          '02',
          'Number Systems and Codes',
          'Digital_Logic_Ch02_Number_Systems_and_Codes.pdf',
        ],
        [
          '03',
          'Binary Arithmetic and Complements',
          'Digital_Logic_Ch03_Binary_Arithmetic_and_Complements.pdf',
        ],
        ['04', 'Boolean Algebra', 'Digital_Logic_Ch04_Boolean_Algebra.pdf'],
        ['05', 'Logic Gates', 'Digital_Logic_Ch05_Logic_Gates.pdf'],
        [
          '06',
          'Boolean Functions, SOP and POS',
          'Digital_Logic_Ch06_Boolean_Functions_SOP_POS.pdf',
        ],
        ['07', 'Karnaugh Map', 'Digital_Logic_Ch07_Karnaugh_Map.pdf'],
        ['08', 'Quine-McCluskey', 'Digital_Logic_Ch08_Quine_McCluskey.pdf'],
        [
          '09',
          'Adders and Subtractors',
          'Digital_Logic_Ch09_Adders_and_Subtractors.pdf',
        ],
        [
          '10',
          'MUX, Decoder, Comparator and Parity',
          'Digital_Logic_Ch10_MUX_Decoder_Comparator_Parity.pdf',
        ],
        [
          '11',
          'Latches and Flip-Flops',
          'Digital_Logic_Ch11_Latches_and_Flip_Flops.pdf',
        ],
        [
          '12',
          'Flip-Flop Conversion',
          'Digital_Logic_Ch12_Flip_Flop_Conversion.pdf',
        ],
        ['13', 'State Machines', 'Digital_Logic_Ch13_State_Machines.pdf'],
        ['14', 'Registers', 'Digital_Logic_Ch14_Registers.pdf'],
        ['15', 'Counters', 'Digital_Logic_Ch15_Counters.pdf'],
        ['16', 'Memory', 'Digital_Logic_Ch16_Memory.pdf'],
        ['17', 'PLA, PAL and PLD', 'Digital_Logic_Ch17_PLA_PAL_PLD.pdf'],
        ['18', 'ADC and DAC', 'Digital_Logic_Ch18_ADC_and_DAC.pdf'],
        ['19', 'Logic Families', 'Digital_Logic_Ch19_Logic_Families.pdf'],
      ],
    },
    {
      id: 'cn',
      title: 'Computer Networks',
      blurb: 'Layering, switching, routing, IPv4, TCP, and application protocols.',
      icon: 'fa-network-wired',
      accent: '#3dd6c6',
      chapters: [
        [
          '01',
          'Syllabus Map and Strategy',
          'CN_Ch01_Syllabus_Map_and_Strategy.pdf',
        ],
        [
          '02',
          'Principles of Layering',
          'CN_Ch02_Principles_of_Layering.pdf',
        ],
        [
          '03',
          'Switching and Performance',
          'CN_Ch03_Switching_and_Performance.pdf',
        ],
        ['04', 'Error Detection', 'CN_Ch04_Error_Detection.pdf'],
        ['05', 'Sliding Window', 'CN_Ch05_Sliding_Window.pdf'],
        ['06', 'MAC', 'CN_Ch06_MAC.pdf'],
        ['07', 'Ethernet', 'CN_Ch07_Ethernet.pdf'],
        [
          '08',
          'Routing: Distance Vector and Link State',
          'CN_Ch08_Routing_DV_and_LS.pdf',
        ],
        [
          '09',
          'IPv4, CIDR and Subnetting',
          'CN_Ch09_IPv4_CIDR_Subnetting.pdf',
        ],
        [
          '10',
          'IPv4 Fragmentation and Forwarding',
          'CN_Ch10_IPv4_Fragmentation_Forwarding.pdf',
        ],
        ['11', 'NAT', 'CN_Ch11_NAT.pdf'],
        [
          '12',
          'TCP Segment and Connection',
          'CN_Ch12_TCP_Segment_and_Connection.pdf',
        ],
        [
          '13',
          'TCP Flow and Congestion',
          'CN_Ch13_TCP_Flow_and_Congestion.pdf',
        ],
        ['14', 'Socket API and UDP', 'CN_Ch14_Socket_API_and_UDP.pdf'],
        ['15', 'DNS and HTTP', 'CN_Ch15_DNS_and_HTTP.pdf'],
        [
          '16',
          'Out-of-Syllabus Quick Sheets',
          'CN_Ch16_Out_of_Syllabus_Quick_Sheets.pdf',
        ],
        [
          '17',
          'Master Formula Sheet and Mixed Practice',
          'CN_Ch17_Master_Formula_Sheet_and_Mixed_Practice.pdf',
        ],
        ['18', 'Complete GATE 2027 Notes', 'CN_Complete_GATE2027_Notes.pdf'],
      ],
    },
    {
      id: 'sd',
      title: 'System Design',
      blurb:
        'Concurrency, networking, databases, caching, messaging, and how systems scale.',
      icon: 'fa-cubes',
      accent: '#c084fc',
      chapters: [
        [
          '01',
          'Computing, Concurrency and Node.js',
          'Chapter_01_Computing_Concurrency_NodeJS.pdf',
        ],
        [
          '02',
          'Memory, Storage and Numbers',
          'Chapter_02_Memory_Storage_Numbers.pdf',
        ],
        [
          '03',
          'Networking Fundamentals',
          'Chapter_03_Networking_Fundamentals.pdf',
        ],
        ['04', 'Communication APIs', 'Chapter_04_Communication_APIs.pdf'],
        [
          '05',
          'Scalability, Availability and Consistency',
          'Chapter_05_Scalability_Availability_Consistency.pdf',
        ],
        ['06', 'DNS and CDN at Scale', 'Chapter_06_DNS_CDN_at_Scale.pdf'],
        [
          '07',
          'Load Balancer and Reverse Proxy',
          'Chapter_07_Load_Balancer_Reverse_Proxy.pdf',
        ],
        [
          '08',
          'Application Layer and Microservices',
          'Chapter_08_Application_Layer_Microservices.pdf',
        ],
        ['09', 'Relational Databases', 'Chapter_09_Relational_Databases.pdf'],
        [
          '10',
          'NoSQL and Choosing a Database',
          'Chapter_10_NoSQL_Choosing_a_Database.pdf',
        ],
        ['11', 'Caching', 'Chapter_11_Caching.pdf'],
        [
          '12',
          'Asynchronism and Messaging',
          'Chapter_12_Asynchronism_Messaging.pdf',
        ],
        ['13', 'Security Essentials', 'Chapter_13_Security_Essentials.pdf'],
      ],
    },
    {
      id: 'coa',
      title: 'Computer Organization & Architecture',
      blurb:
        'CPU, instruction sets, memory hierarchy, pipelining, and I/O.',
      icon: 'fa-memory',
      accent: '#60a5fa',
      chapters: [
        [
          '01',
          'Syllabus Map and Strategy',
          'COA_Ch01_Syllabus_Map_and_Strategy.pdf',
        ],
        ['02', 'Computer Fundamentals', 'COA_Ch02_Computer_Fundamentals.pdf'],
        ['03', 'Number Systems', 'COA_Ch03_Number_Systems.pdf'],
        ['04', 'Computer Arithmetic', 'COA_Ch04_Computer_Arithmetic.pdf'],
        ['05', 'CPU and Control Unit', 'COA_Ch05_CPU_and_Control_Unit.pdf'],
        [
          '06',
          'Instruction Set and Addressing',
          'COA_Ch06_Instruction_Set_and_Addressing.pdf',
        ],
        ['07', 'Memory Hierarchy', 'COA_Ch07_Memory_Hierarchy.pdf'],
        [
          '08',
          'Cache and Virtual Memory',
          'COA_Ch08_Cache_and_Virtual_Memory.pdf',
        ],
        [
          '09',
          'Secondary Storage and I/O',
          'COA_Ch09_Secondary_Storage_and_IO.pdf',
        ],
        [
          '10',
          'Pipelining and Parallel',
          'COA_Ch10_Pipelining_and_Parallel.pdf',
        ],
        [
          '11',
          'Microprocessors and Microcontrollers',
          'COA_Ch11_Microprocessors_and_Microcontrollers.pdf',
        ],
        [
          '12',
          'Master Sheet and Mixed Practice',
          'COA_Ch12_Master_Sheet_and_Mixed_Practice.pdf',
        ],
        [
          '13',
          'Complete Bihar TRE 4 Notes',
          'COA_Complete_BiharTRE4_Notes.pdf',
        ],
      ],
    },
    {
      id: 'os',
      title: 'Operating System',
      blurb: 'Processes, scheduling, and how an operating system runs a computer.',
      icon: 'fa-desktop',
      accent: '#4ade80',
      chapters: [
        ['01', 'Introduction', 'Operating_System_Ch1_Introduction.pdf'],
        [
          '02',
          'Process Management',
          'Operating_System_Ch2_Process_Management.pdf',
        ],
      ],
    },
  ].map((subject) => ({
    ...subject,
    chapters: subject.chapters.map(([id, title, file]) => ({
      id,
      title,
      file: `assets/notes/${subject.id}/${file}`,
    })),
  }));

  const library = document.getElementById('library');
  const reader = document.getElementById('reader');
  const grid = document.getElementById('subject-grid');
  const toc = document.getElementById('toc');
  const tocList = document.getElementById('toc-list');
  const tocOpen = document.getElementById('toc-open');
  const tocBackdrop = document.getElementById('toc-backdrop');
  const pagesRoot = document.getElementById('pdf-pages');
  const scrollEl = document.getElementById('pdf-scroll');
  const stage = document.getElementById('pdf-stage');
  const loadingEl = document.getElementById('pdf-loading');
  const errorEl = document.getElementById('pdf-error');
  const chip = document.getElementById('pdf-chip');
  const kicker = document.getElementById('reader-kicker');
  const chapterTitle = document.getElementById('reader-chapter');
  const prevChapterBtn = document.getElementById('prev-chapter');
  const nextChapterBtn = document.getElementById('next-chapter');
  const navToggle = document.getElementById('nav-toggle');
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  const state = {
    subjectId: null,
    chapterId: null,
    doc: null,
    generation: 0,
    loadToken: 0,
    loading: false,
    mode: 'single',
    zoom: 1,
    page: 1,
    layoutWidth: 0,
  };

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = assetUrl(
      'assets/plugin/pdfjs/pdf.worker.min.js',
    );
  }

  loadPrefs();
  renderLibrary();
  syncControlButtons();
  renderRoute();

  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('popstate', renderRoute);
  document.addEventListener('fullscreenchange', () => {
    syncFullscreenButton();
    if (state.doc) layoutPages(true);
  });
  document.addEventListener('webkitfullscreenchange', () => {
    syncFullscreenButton();
    if (state.doc) layoutPages(true);
  });

  document.getElementById('back-library').addEventListener('click', () => {
    if (location.hash) {
      history.pushState(null, '', location.pathname + location.search);
    }
    showLibrary();
  });

  document.getElementById('notes-home').addEventListener('click', (event) => {
    event.preventDefault();
    closeNav();
    if (location.hash) {
      history.pushState(null, '', location.pathname + location.search);
    }
    showLibrary();
  });

  navToggle?.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  tocOpen.addEventListener('click', () => {
    const open = !toc.classList.contains('is-open');
    setTocOpen(open);
  });
  tocBackdrop.addEventListener('click', () => setTocOpen(false));

  tocList.addEventListener('click', (event) => {
    const item = event.target.closest('.toc-item');
    if (!item || !state.subjectId) return;
    setTocOpen(false);
    navigate(`${state.subjectId}/${item.dataset.id}`);
  });

  prevChapterBtn.addEventListener('click', () => jumpChapter(-1));
  nextChapterBtn.addEventListener('click', () => jumpChapter(1));

  const dockToggle = document.getElementById('pdf-dock-toggle');
  const mobileDock = window.matchMedia('(max-width: 860px)');
  const syncDock = () => {
    const controls = document.getElementById('pdf-controls');
    const open = stage.classList.contains('is-dock-open');
    const collapsed = mobileDock.matches && !open;
    controls.toggleAttribute('inert', collapsed);
    controls.setAttribute('aria-hidden', String(collapsed));
  };
  dockToggle.addEventListener('click', () => {
    const open = stage.classList.toggle('is-dock-open');
    dockToggle.setAttribute('aria-expanded', String(open));
    const label = open ? 'Hide page controls' : 'Show page controls';
    dockToggle.setAttribute('aria-label', label);
    dockToggle.title = label;
    syncDock();
  });
  mobileDock.addEventListener('change', syncDock);
  syncDock();

  stage.querySelector('.pdf-controls').addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button || button.disabled) return;
    const action = button.dataset.action;
    if (action === 'zoom-in') setZoom(state.zoom * 1.15);
    if (action === 'zoom-out') setZoom(state.zoom / 1.15);
    if (action === 'full') toggleFullscreen();
    if (action === 'single') setMode('single');
    if (action === 'spread') setMode('spread');
    if (action === 'prev') stepPage(-1);
    if (action === 'next') stepPage(1);
  });

  let zoomTimer = 0;
  let pendingZoom = null;
  let zoomPoint = null;
  stage.addEventListener(
    'wheel',
    (event) => {
      if (!(event.ctrlKey || event.metaKey) || !state.doc) return;
      event.preventDefault();
      const factor = event.deltaY < 0 ? 1.06 : 0.94;
      pendingZoom = (pendingZoom || state.zoom) * factor;
      zoomPoint = { x: event.clientX, y: event.clientY };
      window.clearTimeout(zoomTimer);
      zoomTimer = window.setTimeout(() => {
        setZoom(pendingZoom, zoomPoint);
        pendingZoom = null;
        zoomPoint = null;
      }, 90);
    },
    { passive: false },
  );

  let pan = null;
  scrollEl.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || event.pointerType !== 'mouse') return;
    if (event.target.closest('button, a, input')) return;
    if (!canPan()) return;
    pan = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      left: scrollEl.scrollLeft,
      top: scrollEl.scrollTop,
    };
    scrollEl.classList.add('is-panning');
    try {
      scrollEl.setPointerCapture(event.pointerId);
    } catch {
      /* pointer capture is optional */
    }
  });
  scrollEl.addEventListener('pointermove', (event) => {
    if (!pan || event.pointerId !== pan.id) return;
    scrollEl.scrollLeft = pan.left - (event.clientX - pan.x);
    scrollEl.scrollTop = pan.top - (event.clientY - pan.y);
  });
  const endPan = (event) => {
    if (!pan || (event && event.pointerId !== pan.id)) return;
    pan = null;
    scrollEl.classList.remove('is-panning');
  };
  scrollEl.addEventListener('pointerup', endPan);
  scrollEl.addEventListener('pointercancel', endPan);

  let pinch = null;

  function touchSpan(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  }

  function touchCenter(touches) {
    return {
      x: (touches[0].clientX + touches[1].clientX) / 2,
      y: (touches[0].clientY + touches[1].clientY) / 2,
    };
  }

  function startPinch(source, distance, point) {
    if (!state.doc || pinch || distance < 1) return;
    const rect = pagesRoot.getBoundingClientRect();
    pinch = {
      source,
      distance,
      zoom: state.zoom,
      point,
      originX: point.x - rect.left,
      originY: point.y - rect.top,
      preview: state.zoom,
    };
  }

  function updatePinch(distance, point) {
    if (!pinch || pinch.distance < 1) return;
    const preview = clampZoom(pinch.zoom * (distance / pinch.distance));
    const factor = preview / pinch.zoom;
    pinch.preview = preview;
    pinch.point = point;
    pagesRoot.style.transformOrigin = `${pinch.originX}px ${pinch.originY}px`;
    pagesRoot.style.transform =
      Math.abs(factor - 1) < 0.001 ? '' : `scale(${factor})`;
    const doc = state.doc;
    if (!doc) return;
    const end = Math.min(
      doc.numPages,
      state.page + (state.mode === 'spread' ? 1 : 0),
    );
    const label =
      end > state.page ? `Pages ${state.page}–${end}` : `Page ${state.page}`;
    chip.textContent = `${label} of ${doc.numPages} · ${Math.round(preview * 100)}%`;
  }

  function finishPinch() {
    if (!pinch) return;
    const preview = pinch.preview;
    const point = pinch.point;
    pinch = null;
    pagesRoot.style.transform = '';
    pagesRoot.style.transformOrigin = '';
    if (Math.abs(preview - state.zoom) >= 0.01) setZoom(preview, point);
    else updateCurrentPage();
  }

  scrollEl.addEventListener(
    'touchstart',
    (event) => {
      if (event.touches.length !== 2 || !state.doc) return;
      if (event.target.closest('button, a, input')) return;
      event.preventDefault();
      startPinch('touch', touchSpan(event.touches), touchCenter(event.touches));
    },
    { passive: false },
  );
  scrollEl.addEventListener(
    'touchmove',
    (event) => {
      if (!pinch || pinch.source !== 'touch' || event.touches.length < 2)
        return;
      event.preventDefault();
      updatePinch(touchSpan(event.touches), touchCenter(event.touches));
    },
    { passive: false },
  );
  scrollEl.addEventListener(
    'touchend',
    (event) => {
      if (!pinch || pinch.source !== 'touch' || event.touches.length >= 2)
        return;
      finishPinch();
    },
    { passive: false },
  );
  scrollEl.addEventListener(
    'touchcancel',
    () => {
      if (pinch && pinch.source === 'touch') finishPinch();
    },
    { passive: false },
  );

  scrollEl.addEventListener(
    'gesturestart',
    (event) => {
      event.preventDefault();
      if (pinch || !state.doc) return;
      const rect = scrollEl.getBoundingClientRect();
      startPinch('gesture', 100, {
        x: event.clientX || rect.left + rect.width / 2,
        y: event.clientY || rect.top + rect.height / 2,
      });
    },
    { passive: false },
  );
  scrollEl.addEventListener(
    'gesturechange',
    (event) => {
      event.preventDefault();
      if (!pinch || pinch.source !== 'gesture') return;
      updatePinch(100 * (event.scale || 1), {
        x: event.clientX || pinch.point.x,
        y: event.clientY || pinch.point.y,
      });
    },
    { passive: false },
  );
  scrollEl.addEventListener(
    'gestureend',
    (event) => {
      event.preventDefault();
      if (pinch && pinch.source === 'gesture') finishPinch();
    },
    { passive: false },
  );

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    if (!state.doc) return;
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => layoutPages(true), 140);
  });

  let scrollFrame = 0;
  scrollEl.addEventListener(
    'scroll',
    () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        updateCurrentPage();
      });
    },
    { passive: true },
  );

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const meta = event.metaKey || event.ctrlKey;
    if (meta && ['s', 'p', 'u'].includes(key)) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (event.key === 'Escape') {
      if (toc.classList.contains('is-open')) {
        setTocOpen(false);
        return;
      }
      if (document.body.classList.contains('nav-open')) closeNav();
      return;
    }
    if (
      !document.body.classList.contains('is-reading') ||
      isTyping(event.target)
    )
      return;
    if (meta && (key === 'c' || key === 'x' || key === 'a')) {
      event.preventDefault();
      return;
    }
    if (key === '+' || key === '=') {
      event.preventDefault();
      setZoom(state.zoom * 1.15);
    } else if (key === '-' || key === '_') {
      event.preventDefault();
      setZoom(state.zoom / 1.15);
    } else if (key === '0' && !meta) {
      setZoom(1);
    } else if (key === 'f' && !meta) {
      event.preventDefault();
      toggleFullscreen();
    } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault();
      stepPage(-1);
    } else if (event.key === 'ArrowRight' || event.key === 'PageDown') {
      event.preventDefault();
      stepPage(1);
    }
  });

  document.addEventListener(
    'contextmenu',
    (event) => {
      if (event.target.closest('.pdf-stage')) event.preventDefault();
    },
    true,
  );
  document.addEventListener(
    'dragstart',
    (event) => {
      if (event.target.closest('.pdf-stage')) event.preventDefault();
    },
    true,
  );
  document.addEventListener(
    'selectstart',
    (event) => {
      if (event.target.closest('.pdf-scroll, .pdf-page, .pdf-sheet')) {
        event.preventDefault();
      }
    },
    true,
  );
  document.addEventListener(
    'copy',
    (event) => {
      const selection = document.getSelection();
      const node = selection && selection.anchorNode;
      const el = node && (node.nodeType === 1 ? node : node.parentElement);
      if (!el || el.closest('.pdf-stage')) {
        event.preventDefault();
      }
    },
    true,
  );
  window.addEventListener('beforeprint', (event) => {
    event.preventDefault?.();
  });
  window.print = () => {};

  const renderObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) renderSheet(entry.target);
      });
    },
    { root: scrollEl, rootMargin: '900px 0px', threshold: 0.01 },
  );

  function assetUrl(path) {
    const url = new URL(window.location.href);
    const dir = url.pathname.endsWith('/')
      ? url.pathname
      : url.pathname.replace(/[^/]*$/, '');
    return new URL(`../${path}`, `${url.origin}${dir}`).toString();
  }

  function esc(value) {
    return String(value).replace(
      /[&<>"']/g,
      (ch) =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        })[ch],
    );
  }

  function isTyping(target) {
    return Boolean(target && target.closest('input, textarea, select'));
  }

  function loadPrefs() {
    try {
      const saved = JSON.parse(sessionStorage.getItem('notes-reader') || '{}');
      if (saved.mode === 'single' || saved.mode === 'spread')
        state.mode = saved.mode;
      if (typeof saved.zoom === 'number') state.zoom = clampZoom(saved.zoom);
    } catch {
      /* keep defaults */
    }
  }

  function savePrefs() {
    sessionStorage.setItem(
      'notes-reader',
      JSON.stringify({ mode: state.mode, zoom: state.zoom }),
    );
  }

  function clampZoom(value) {
    return Math.min(2.4, Math.max(0.7, Math.round(value * 100) / 100));
  }

  const SUBJECT_ALIASES = {
    'digital-electronics': 'de',
    'computer-networks': 'cn',
    'system-design': 'sd',
  };

  function findSubject(id) {
    const key = SUBJECT_ALIASES[id] || id;
    return SUBJECTS.find((subject) => subject.id === key) || null;
  }

  function renderLibrary() {
    grid.innerHTML = SUBJECTS.map((subject) => {
      const preview = subject.chapters.slice(0, 3);
      const extra = subject.chapters.length - preview.length;
      const href = `#${subject.id}/${subject.chapters[0].id}`;
      return `
        <a class="subject-card glass" href="${href}" style="--subject:${subject.accent}" data-subject="${subject.id}">
          <span class="subject-icon"><i class="fas ${subject.icon}" aria-hidden="true"></i></span>
          <h2>${esc(subject.title)}</h2>
          <p class="subject-count">${subject.chapters.length} chapters</p>
          <p class="subject-blurb">${esc(subject.blurb)}</p>
          <ul class="subject-preview">
            ${preview
              .map(
                (chapter) =>
                  `<li><span>${chapter.id}</span>${esc(chapter.title)}</li>`,
              )
              .join('')}
          </ul>
          ${extra > 0 ? `<p class="subject-more">+${extra} more chapters</p>` : ''}
          <span class="subject-go">Start reading</span>
        </a>
      `;
    }).join('');
  }

  function parseRoute() {
    const raw = decodeURIComponent(location.hash.replace(/^#/, '')).trim();
    if (!raw) return null;
    const [subjectId, chapterId] = raw.split('/');
    const subject = findSubject(subjectId);
    if (!subject) return null;
    const chapter =
      subject.chapters.find((item) => item.id === chapterId) ||
      subject.chapters[0];
    return { subject, chapter };
  }

  function renderRoute() {
    const route = parseRoute();
    if (!route) {
      showLibrary();
      return;
    }
    const canonical = `${route.subject.id}/${route.chapter.id}`;
    if (location.hash !== `#${canonical}`) {
      history.replaceState(null, '', `#${canonical}`);
    }
    showReader(route.subject, route.chapter);
  }

  function navigate(hash) {
    if (location.hash === `#${hash}`) {
      renderRoute();
      return;
    }
    location.hash = hash;
  }

  function showLibrary() {
    state.generation += 1;
    state.loadToken += 1;
    state.loading = false;
    if (state.doc) {
      state.doc.destroy();
      state.doc = null;
    }
    state.subjectId = null;
    state.chapterId = null;
    if (document.fullscreenElement === reader) {
      document.exitFullscreen().catch(() => {});
    }
    reader.hidden = true;
    library.hidden = false;
    document.body.classList.remove('is-reading');
    setTocOpen(false);
    document.title = 'Notes — Amjesh Kumar Singh';
  }

  function showReader(subject, chapter) {
    library.hidden = true;
    reader.hidden = false;
    document.body.classList.add('is-reading');
    closeNav();
    const index = subject.chapters.findIndex((item) => item.id === chapter.id);
    kicker.textContent = `${subject.title} · Chapter ${index + 1} of ${subject.chapters.length}`;
    chapterTitle.textContent = chapter.title;
    document.title = `${chapter.title} — ${subject.title}`;
    renderToc(subject, chapter);
    updateChapterJumps(subject, chapter);
    if (
      state.subjectId === subject.id &&
      state.chapterId === chapter.id &&
      (state.doc || state.loading)
    ) {
      return;
    }
    state.subjectId = subject.id;
    state.chapterId = chapter.id;
    loadChapter(subject, chapter);
  }

  function renderToc(subject, chapter) {
    tocList.innerHTML = subject.chapters
      .map(
        (item) => `
        <button
          type="button"
          class="toc-item${item.id === chapter.id ? ' is-active' : ''}"
          data-id="${item.id}"
          data-title="${esc(item.title.toLowerCase())}"
          ${item.id === chapter.id ? 'aria-current="true"' : ''}
        >
          <span class="toc-num">${item.id}</span>
          <span class="toc-name">${esc(item.title)}</span>
          <span class="toc-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </button>
      `,
      )
      .join('');
    const active = tocList.querySelector('.is-active');
    if (active) active.scrollIntoView({ block: 'nearest' });
  }

  function updateChapterJumps(subject, chapter) {
    const index = subject.chapters.findIndex((item) => item.id === chapter.id);
    setJump(prevChapterBtn, subject.chapters[index - 1], 'Previous chapter');
    setJump(nextChapterBtn, subject.chapters[index + 1], 'Next chapter');
  }

  function setJump(button, chapter, label) {
    button.disabled = !chapter;
    button.dataset.id = chapter ? chapter.id : '';
    const text = chapter ? `${label}: ${chapter.title}` : label;
    button.title = text;
    button.setAttribute('aria-label', text);
  }

  function jumpChapter(direction) {
    const subject = findSubject(state.subjectId);
    if (!subject) return;
    const index = subject.chapters.findIndex(
      (item) => item.id === state.chapterId,
    );
    const next = subject.chapters[index + direction];
    if (next) navigate(`${subject.id}/${next.id}`);
  }

  async function loadChapter(subject, chapter) {
    const token = ++state.loadToken;
    state.loading = true;
    state.generation += 1;
    if (state.doc) {
      state.doc.destroy();
      state.doc = null;
    }
    pagesRoot.innerHTML = '';
    errorEl.hidden = true;
    loadingEl.hidden = false;
    chip.textContent = 'Opening chapter…';
    scrollEl.scrollTop = 0;
    syncControlButtons();
    if (!window.pdfjsLib) {
      failLoad(token, 'The reader could not start in this browser.');
      return;
    }
    try {
      const doc = await pdfjsLib.getDocument({
        url: assetUrl(chapter.file),
        isEvalSupported: false,
        disableAutoFetch: false,
        verbosity: 0,
      }).promise;
      if (token !== state.loadToken) {
        doc.destroy();
        return;
      }
      state.doc = doc;
      state.page = 1;
      state.loading = false;
      await layoutPages(false);
    } catch {
      failLoad(token, 'This chapter could not be opened. Please try again.');
    }
  }

  function failLoad(token, message) {
    if (token !== state.loadToken) return;
    state.loading = false;
    loadingEl.hidden = true;
    errorEl.hidden = false;
    errorEl.textContent = message;
    chip.textContent = '';
  }

  function pageWidth() {
    const style = getComputedStyle(scrollEl);
    const inner =
      scrollEl.clientWidth -
      parseFloat(style.paddingLeft) -
      parseFloat(style.paddingRight);
    const gap = state.mode === 'spread' ? 14 : 0;
    const columns = state.mode === 'spread' ? 2 : 1;
    return Math.max(120, ((inner - gap) / columns) * state.zoom);
  }

  async function layoutPages(keepPlace) {
    const doc = state.doc;
    if (!doc) return;
    pagesRoot.style.transform = '';
    pagesRoot.style.transformOrigin = '';
    const gen = ++state.generation;
    cancelRenders();
    const ratioY = scrollEl.scrollHeight
      ? scrollEl.scrollTop / scrollEl.scrollHeight
      : 0;
    const ratioX = scrollEl.scrollWidth
      ? scrollEl.scrollLeft / scrollEl.scrollWidth
      : 0;
    const width = pageWidth();
    state.layoutWidth = width;
    pagesRoot.classList.toggle('is-spread', state.mode === 'spread');
    pagesRoot.style.setProperty('--page-w', `${width}px`);
    pagesRoot.replaceChildren();
    renderObserver.disconnect();

    for (let number = 1; number <= doc.numPages; number += 1) {
      const page = await doc.getPage(number);
      if (gen !== state.generation) return;
      const viewport = page.getViewport({ scale: 1 });
      const height = width * (viewport.height / viewport.width);
      const sheet = document.createElement('figure');
      sheet.className = 'pdf-sheet';
      sheet.dataset.page = String(number);
      sheet.style.width = `${width}px`;
      const paper = document.createElement('div');
      paper.className = 'pdf-page';
      paper.style.height = `${height}px`;
      const canvas = document.createElement('canvas');
      canvas.setAttribute('aria-hidden', 'true');
      canvas.draggable = false;
      const shield = document.createElement('div');
      shield.className = 'pdf-shield';
      shield.setAttribute('aria-hidden', 'true');
      paper.append(canvas, shield);
      const caption = document.createElement('figcaption');
      caption.textContent = `Page ${number}`;
      sheet.append(paper, caption);
      pagesRoot.append(sheet);
      renderObserver.observe(sheet);
    }
    if (gen !== state.generation) return;
    loadingEl.hidden = true;
    if (keepPlace)
      moveScroll(ratioX * scrollEl.scrollWidth, ratioY * scrollEl.scrollHeight);
    updateCurrentPage();
    pagesRoot.querySelectorAll('.pdf-sheet').forEach((sheet) => {
      const box = sheet.getBoundingClientRect();
      const root = scrollEl.getBoundingClientRect();
      if (box.bottom > root.top - 800 && box.top < root.bottom + 800) {
        renderSheet(sheet);
      }
    });
  }

  function cancelRenders() {
    pagesRoot.querySelectorAll('.pdf-sheet').forEach((sheet) => {
      if (sheet._task) {
        sheet._task.cancel();
        sheet._task = null;
      }
    });
  }

  async function renderSheet(sheet) {
    const gen = state.generation;
    const doc = state.doc;
    if (
      !doc ||
      sheet.dataset.rendered === String(gen) ||
      sheet.dataset.busy === String(gen)
    ) {
      return;
    }
    sheet.dataset.busy = String(gen);
    const pageNumber = Number(sheet.dataset.page);
    try {
      const page = await doc.getPage(pageNumber);
      if (gen !== state.generation || !sheet.isConnected) return;
      const paper = sheet.querySelector('.pdf-page');
      const canvas = sheet.querySelector('canvas');
      const base = page.getViewport({ scale: 1 });
      const cssWidth = paper.clientWidth || state.layoutWidth;
      let scale =
        (cssWidth / base.width) * Math.min(window.devicePixelRatio || 1, 2);
      let viewport = page.getViewport({ scale });
      if (viewport.width > 1800) {
        scale *= 1800 / viewport.width;
        viewport = page.getViewport({ scale });
      }
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      const context = canvas.getContext('2d', { alpha: false });
      const task = page.render({ canvasContext: context, viewport });
      sheet._task = task;
      await task.promise;
      if (gen !== state.generation) return;
      sheet.dataset.rendered = String(gen);
      paper.classList.add('is-ready');
    } catch (error) {
      if (!error || error.name !== 'RenderingCancelledException') {
        /* a later layout will retry */
      }
    } finally {
      if (sheet.dataset.busy === String(gen)) delete sheet.dataset.busy;
    }
  }

  function updateCurrentPage() {
    const doc = state.doc;
    if (!doc) return;
    const root = scrollEl.getBoundingClientRect();
    let current = 1;
    let bestTop = Infinity;
    pagesRoot.querySelectorAll('.pdf-sheet').forEach((sheet) => {
      const rect = sheet.getBoundingClientRect();
      const visible =
        Math.min(rect.bottom, root.bottom) - Math.max(rect.top, root.top);
      if (visible < 24) return;
      const page = Number(sheet.dataset.page);
      const topDelta = Math.abs(rect.top - root.top);
      if (
        topDelta < bestTop - 6 ||
        (Math.abs(topDelta - bestTop) <= 6 && page < current)
      ) {
        bestTop = Math.min(bestTop, topDelta);
        current = page;
      }
    });
    if (state.mode === 'spread' && current % 2 === 0) current -= 1;
    state.page = current;
    const max = scrollEl.scrollHeight - scrollEl.clientHeight;
    stage.style.setProperty(
      '--read',
      String(max > 0 ? scrollEl.scrollTop / max : 0),
    );
    const end = Math.min(
      doc.numPages,
      current + (state.mode === 'spread' ? 1 : 0),
    );
    const label = end > current ? `Pages ${current}–${end}` : `Page ${current}`;
    chip.textContent = `${label} of ${doc.numPages} · ${Math.round(state.zoom * 100)}%`;
    scrollEl.classList.toggle('can-pan', canPan());
    syncControlButtons();
  }

  function canPan() {
    return (
      scrollEl.scrollWidth > scrollEl.clientWidth + 2 ||
      scrollEl.scrollHeight > scrollEl.clientHeight + 2
    );
  }

  function stepPage(direction) {
    const doc = state.doc;
    if (!doc) return;
    const jump = state.mode === 'spread' ? 2 : 1;
    const next = Math.min(
      doc.numPages,
      Math.max(1, state.page + direction * jump),
    );
    const sheet = pagesRoot.querySelector(`[data-page="${next}"]`);
    sheet?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }

  function setZoom(value, point) {
    const zoom = clampZoom(value);
    const rect = scrollEl.getBoundingClientRect();
    const originX = point ? point.x - rect.left : rect.width / 2;
    const originY = point ? point.y - rect.top : rect.height / 2;
    const contentX = scrollEl.scrollLeft + originX;
    const contentY = scrollEl.scrollTop + originY;
    const prevW = Math.max(scrollEl.scrollWidth, 1);
    const prevH = Math.max(scrollEl.scrollHeight, 1);
    if (!state.doc || zoom === state.zoom) {
      state.zoom = zoom;
      syncControlButtons();
      return;
    }
    state.zoom = zoom;
    savePrefs();
    syncControlButtons();
    layoutPages(false).then(() => {
      moveScroll(
        (contentX / prevW) * scrollEl.scrollWidth - originX,
        (contentY / prevH) * scrollEl.scrollHeight - originY,
      );
      scrollEl.classList.toggle('can-pan', canPan());
    });
  }

  function moveScroll(left, top) {
    const behavior = scrollEl.style.scrollBehavior;
    scrollEl.style.scrollBehavior = 'auto';
    scrollEl.scrollLeft = left;
    scrollEl.scrollTop = top;
    scrollEl.style.scrollBehavior = behavior;
  }

  function setMode(mode) {
    if (state.mode === mode) return;
    state.mode = mode;
    savePrefs();
    syncControlButtons();
    if (state.doc) layoutPages(true);
  }

  function toggleFullscreen() {
    const active =
      document.fullscreenElement || document.webkitFullscreenElement;
    if (active) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      exit.call(document).catch(() => {});
      return;
    }
    const request = reader.requestFullscreen || reader.webkitRequestFullscreen;
    if (request) request.call(reader).catch(() => {});
  }

  function syncFullscreenButton() {
    const button = stage.querySelector('[data-action="full"]');
    const on =
      (document.fullscreenElement || document.webkitFullscreenElement) ===
      reader;
    document.body.classList.toggle('is-fullscreen', on);
    button.classList.toggle('is-active', on);
    button.setAttribute('aria-pressed', String(on));
    const label = on ? 'Exit full screen' : 'Full screen';
    button.title = label;
    button.setAttribute('aria-label', label);
  }

  function syncControlButtons() {
    const doc = state.doc;
    const pages = doc ? doc.numPages : 0;
    stage
      .querySelector('[data-action="single"]')
      .classList.toggle('is-active', state.mode === 'single');
    stage
      .querySelector('[data-action="spread"]')
      .classList.toggle('is-active', state.mode === 'spread');
    stage
      .querySelector('[data-action="single"]')
      .setAttribute('aria-pressed', String(state.mode === 'single'));
    stage
      .querySelector('[data-action="spread"]')
      .setAttribute('aria-pressed', String(state.mode === 'spread'));
    syncFullscreenButton();
    stage.querySelector('[data-action="zoom-in"]').disabled =
      !doc || state.zoom >= 2.4;
    stage.querySelector('[data-action="zoom-out"]').disabled =
      !doc || state.zoom <= 0.7;
    const jump = state.mode === 'spread' ? 2 : 1;
    stage.querySelector('[data-action="prev"]').disabled =
      !doc || state.page <= 1;
    stage.querySelector('[data-action="next"]').disabled =
      !doc || state.page + jump > pages;
    stage.querySelector('[data-action="single"]').disabled = !doc;
    stage.querySelector('[data-action="spread"]').disabled = !doc;
  }

  function setTocOpen(open) {
    toc.classList.toggle('is-open', open);
    tocBackdrop.hidden = !open;
    tocOpen.setAttribute('aria-expanded', String(open));
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    }
  }
})();
