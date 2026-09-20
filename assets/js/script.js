(() => {
  const progress = document.getElementById("scroll-progress");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLiquid = document.getElementById("nav-liquid");
  const navLinks = document.querySelectorAll(".nav-links a");
  const year = document.getElementById("year");
  const typingEl = document.getElementById("headingTyping");
  const canvas = document.getElementById("scroll-canvas");
  const orb = document.getElementById("scroll-orb");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Paste your GA4 Measurement ID (G-XXXXXXXX). Leave blank until created.
  // Reports show visits, country/city, device, referrer, and CV downloads — not names or raw IPs.
  const GA4_MEASUREMENT_ID = "";

  const isProdHost = location.hostname === "singhamjesh.github.io";

  const trackEvent = (name, params) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params || {});
    }
  };

  const loadGa4 = (id) => {
    if (!isProdHost || !id || !/^G-[A-Z0-9]+$/i.test(id)) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);
  };

  loadGa4(GA4_MEASUREMENT_ID);

  document.querySelectorAll("[data-track='cv-download']").forEach((el) => {
    el.addEventListener("click", () => {
      trackEvent("file_download", {
        file_name: "amjesh_cv.pdf",
        file_extension: "pdf",
        link_url: el.getAttribute("href") || "",
      });
    });
  });

  window.addEventListener("hashchange", () => {
    const section = (location.hash || "#top").slice(1) || "top";
    trackEvent("section_view", { section_id: section });
  });

  if (year) year.textContent = String(new Date().getFullYear());

  const closeNav = () => {
    document.body.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  };

  const menuVisible = () =>
    window.matchMedia("(min-width: 720px)").matches ||
    document.body.classList.contains("nav-open");

  let liquidRect = null;
  let liquidTimer = 0;

  const placeLiquid = (box, animate) => {
    if (!navLiquid || !navMenu || !box) return;
    if (!menuVisible()) return;
    const menu = navMenu.getBoundingClientRect();
    const next = {
      x: box.left - menu.left,
      y: box.top - menu.top,
      w: box.width,
      h: box.height,
    };
    const apply = (rect) => {
      navLiquid.style.left = `${rect.x}px`;
      navLiquid.style.top = `${rect.y}px`;
      navLiquid.style.width = `${rect.w}px`;
      navLiquid.style.height = `${rect.h}px`;
    };
    if (!animate || reduceMotion || !liquidRect) {
      apply(next);
      liquidRect = next;
      navLiquid.classList.add("is-ready");
      return;
    }
    const dx = next.x - liquidRect.x;
    const dy = next.y - liquidRect.y;
    navLiquid.classList.add("is-moving");
    if (dx > 2) {
      apply({
        x: liquidRect.x,
        y: next.y,
        w: next.x + next.w - liquidRect.x,
        h: next.h,
      });
    } else if (dx < -2) {
      apply({
        x: next.x,
        y: next.y,
        w: liquidRect.x + liquidRect.w - next.x,
        h: next.h,
      });
    } else if (dy > 2) {
      apply({
        x: next.x,
        y: liquidRect.y,
        w: next.w,
        h: next.y + next.h - liquidRect.y,
      });
    } else if (dy < -2) {
      apply({
        x: next.x,
        y: next.y,
        w: next.w,
        h: liquidRect.y + liquidRect.h - next.y,
      });
    } else {
      apply(next);
    }
    window.clearTimeout(liquidTimer);
    liquidTimer = window.setTimeout(() => {
      apply(next);
      navLiquid.classList.remove("is-moving");
      liquidRect = next;
    }, 180);
  };

  const moveLiquidTo = (link, animate = true) => {
    if (!link) return;
    placeLiquid(link.getBoundingClientRect(), animate);
  };

  const activeLink = () =>
    document.querySelector(".nav-links a.is-active") || navLinks[0];

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (open) {
        requestAnimationFrame(() => moveLiquidTo(activeLink(), false));
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => {
        const on = item === link;
        item.classList.toggle("is-active", on);
        if (on) item.setAttribute("aria-current", "location");
        else item.removeAttribute("aria-current");
      });
      moveLiquidTo(link, true);
      closeNav();
    });
    link.addEventListener("mouseenter", () => {
      if (reduceMotion || window.matchMedia("(hover: hover)").matches === false) return;
      if (!window.matchMedia("(min-width: 720px)").matches) return;
      moveLiquidTo(link, true);
    });
  });

  if (navMenu) {
    navMenu.addEventListener("mouseleave", () => {
      if (!window.matchMedia("(min-width: 720px)").matches) return;
      moveLiquidTo(activeLink(), true);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  const sections = ["top", "about", "skills", "work", "projects", "education", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActive = () => {
    const offset = window.innerHeight * 0.28;
    let current = "top";
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top - offset <= 0) {
        current = section.id;
      }
    });
    let nextLink = null;
    navLinks.forEach((link) => {
      const active = link.dataset.section === current;
      link.classList.toggle("is-active", active);
      if (active) {
        nextLink = link;
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
    if (nextLink && !navMenu?.matches(":hover")) moveLiquidTo(nextLink, true);
  };

  const updateProgress = () => {
    if (!progress) return;
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const value = height > 0 ? (scrollTop / height) * 100 : 0;
    progress.style.width = `${value}%`;
    if (orb) {
      const rail = orb.parentElement;
      const travel = rail ? rail.clientHeight - orb.offsetHeight : 0;
      orb.style.setProperty("--orb-y", `${(value / 100) * travel}px`);
    }
  };

  let lastY = window.scrollY;
  let velocity = 0;

  const updateScrollFx = () => {
    const y = window.scrollY;
    velocity = y - lastY;
    lastY = y;
    const down = velocity > 1;
    const up = velocity < -1;
    document.body.classList.toggle("scroll-down", down);
    document.body.classList.toggle("scroll-up", up);
    document.body.classList.toggle("is-boosting", Math.abs(velocity) > 28);
    if (orb) {
      const boost = Math.min(64, Math.abs(velocity) * 1.8 + 10);
      if (velocity >= 0) {
        orb.style.setProperty("--trail-dir", "180deg");
        orb.style.setProperty("--trail-top", "12px");
        orb.style.setProperty("--trail", `${boost}px`);
      } else {
        orb.style.setProperty("--trail-dir", "0deg");
        orb.style.setProperty("--trail-top", `${-boost}px`);
        orb.style.setProperty("--trail", `${boost}px`);
      }
    }
  };

  const onScroll = () => {
    updateProgress();
    updateScrollFx();
    setActive();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    liquidRect = null;
    moveLiquidTo(activeLink(), false);
    updateProgress();
  });
  updateProgress();
  setActive();
  requestAnimationFrame(() => moveLiquidTo(activeLink(), false));
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      liquidRect = null;
      moveLiquidTo(activeLink(), false);
    });
  }

  if (!reduceMotion && canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const stars = Array.from({ length: 72 }, () => ({
      x: Math.random(),
      y: Math.random(),
      depth: 0.2 + Math.random() * 0.8,
      size: 0.5 + Math.random() * 1.5,
    }));
    const glyphSpecs = [
      { src: "https://cdn.simpleicons.org/javascript/F7DF1E", label: "JS", color: "#F7DF1E" },
      { src: "https://cdn.simpleicons.org/typescript/3178C6", label: "TS", color: "#3178C6" },
      { src: "https://cdn.simpleicons.org/react/61DAFB", label: "React", color: "#61DAFB" },
      { src: "https://cdn.simpleicons.org/nodedotjs/5FA04E", label: "Node", color: "#5FA04E" },
      { src: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", label: "Next", color: "#E8EEF7" },
      { src: "https://cdn.simpleicons.org/mongodb/47A248", label: "Mongo", color: "#47A248" },
      { src: "https://cdn.simpleicons.org/docker/2496ED", label: "Docker", color: "#2496ED" },
      { src: "https://cdn.simpleicons.org/flutter/02569B", label: "Flutter", color: "#54C5F8" },
      { src: "https://cdn.simpleicons.org/git/F05032", label: "Git", color: "#F05032" },
      { src: "https://cdn.simpleicons.org/html5/E34F26", label: "HTML", color: "#E34F26" },
      { src: "https://cdn.simpleicons.org/css3/1572B6", label: "CSS", color: "#1572B6" },
      { src: "https://cdn.simpleicons.org/npm/CB3837", label: "npm", color: "#CB3837" },
      { label: "{ }", color: "#8ec5ff" },
      { label: "</>", color: "#bae6fd" },
      { label: "=>", color: "#93c5fd" },
      { label: "AWS", color: "#FF9900" },
    ];
    const glyphCount = window.innerWidth < 720 ? 10 : glyphSpecs.length;
    const glyphs = glyphSpecs.slice(0, glyphCount).map((spec, i) => {
      const img = spec.src ? new Image() : null;
      if (img) img.src = spec.src;
      return {
        x: (i * 0.61803398875 + 0.07) % 1,
        y: (i * 0.415 + 0.11) % 1,
        depth: 0.28 + (i % 6) * 0.12,
        size: 18 + (i % 5) * 5,
        rot: ((i % 2) * 2 - 1) * (0.12 + (i % 4) * 0.05),
        label: spec.label,
        color: spec.color,
        img,
      };
    });
    let width = 0;
    let height = 0;
    let warp = 0;
    const resizeCanvas = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const imageReady = (img) =>
      Boolean(img && img.complete && img.naturalWidth > 0);
    const drawGlyph = (glyph, x, y) => {
      const size = glyph.size * (0.72 + glyph.depth * 0.4);
      const stretch = 1 + Math.min(0.75, Math.abs(warp) * 0.012);
      const alpha = 0.16 + glyph.depth * 0.28;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(glyph.rot + warp * 0.0018 * glyph.depth);
      ctx.scale(1, stretch);
      ctx.globalAlpha = alpha;
      if (imageReady(glyph.img)) {
        ctx.drawImage(glyph.img, -size / 2, -size / 2, size, size);
      } else {
        ctx.font = `600 ${Math.max(11, size * 0.62)}px Inter, ui-monospace, monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = glyph.color;
        ctx.fillText(glyph.label, 0, 0);
      }
      ctx.restore();
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const draw = () => {
      warp += (velocity - warp) * 0.14;
      velocity *= 0.9;
      if (Math.abs(velocity) < 0.2 && Math.abs(warp) < 0.35) {
        document.body.classList.remove("scroll-down", "scroll-up", "is-boosting");
      }
      ctx.clearRect(0, 0, width, height);
      const streak = Math.min(42, Math.abs(warp) * 0.55);
      stars.forEach((star) => {
        star.y -= warp * star.depth * 0.00028;
        if (star.y < -0.08) star.y = 1.08;
        if (star.y > 1.08) star.y = -0.08;
        const x = star.x * width;
        const y = star.y * height;
        const len = 1.2 + streak * star.depth;
        ctx.strokeStyle = `rgba(186, 214, 255, ${0.16 + star.depth * 0.5})`;
        ctx.lineWidth = star.size;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, warp >= 0 ? y + len : y - len);
        ctx.stroke();
      });
      const homeEl = document.getElementById("top");
      glyphs.forEach((glyph) => {
        glyph.y -= warp * glyph.depth * 0.00028;
        if (glyph.y < -0.1) glyph.y = 1.1;
        if (glyph.y > 1.1) glyph.y = -0.1;
        const gx = glyph.x * width;
        const gy = glyph.y * height;
        const homeBottom = homeEl ? homeEl.getBoundingClientRect().bottom : 0;
        if (homeBottom > 48 && gy < homeBottom + 48) return;
        drawGlyph(glyph, gx, gy);
      });
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }

  const reveals = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    setTimeout(() => {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }, 900);
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  const animateCount = (el) => {
    const target = Number(el.dataset.count || 0);
    const suffix = el.dataset.suffix || "";
    if (reduceMotion) {
      el.textContent = `${target}${suffix}`;
      el.dataset.counted = "1";
      return;
    }
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    const duration = 1100;
    const start = performance.now();
    const tick = (now) => {
      const progressValue = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progressValue, 3);
      el.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progressValue < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const counters = document.querySelectorAll(".stat-value[data-count]");
  if (reduceMotion) {
    counters.forEach(animateCount);
  } else if ("IntersectionObserver" in window) {
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    counters.forEach((el) => countObserver.observe(el));
    setTimeout(() => {
      counters.forEach((el) => {
        if (!el.dataset.counted) animateCount(el);
      });
    }, 800);
  } else {
    counters.forEach(animateCount);
  }

  if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".tilt").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 8;
        const rotateX = (0.5 - y) * 8;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  if (typingEl) {
    const roles = Array.from(typingEl.querySelectorAll(".type-role"));
    const sizer = typingEl.querySelector(".type-sizer");
    if (!roles.length) return;

    const line = typingEl.closest(".type-line") || typingEl.parentElement;
    const measureText = (text) => {
      const probe = document.createElement("span");
      probe.setAttribute("aria-hidden", "true");
      probe.textContent = text;
      probe.style.cssText =
        "position:absolute;left:0;top:0;visibility:hidden;white-space:nowrap;pointer-events:none";
      line.appendChild(probe);
      const width = probe.getBoundingClientRect().width;
      probe.remove();
      return width;
    };

    const fitRoles = () => {
      if (!sizer) return;
      const target = sizer.getBoundingClientRect().width;
      const inherited = parseFloat(getComputedStyle(sizer).letterSpacing);
      const baseSpacing = Number.isFinite(inherited) ? inherited : 0;
      roles.forEach((role) => {
        const text = role.textContent.trim();
        const gaps = Math.max(text.length - 1, 1);
        const extra = Math.max(target - measureText(text), 0);
        role.style.letterSpacing = `${baseSpacing + extra / gaps}px`;
      });
    };

    const startFit = () => {
      fitRoles();
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(fitRoles).catch(() => {});
      }
    };
    startFit();
    window.addEventListener("resize", fitRoles);

    if (reduceMotion) {
      roles.forEach((role, i) => {
        role.classList.toggle("is-current", i === 0);
        role.classList.remove("is-leaving");
      });
      return;
    }
    let index = 0;
    const swap = () => {
      const current = roles[index];
      const nextIndex = (index + 1) % roles.length;
      const next = roles[nextIndex];
      current.classList.remove("is-current");
      current.classList.add("is-leaving");
      next.classList.add("is-current");
      window.setTimeout(() => current.classList.remove("is-leaving"), 560);
      index = nextIndex;
    };
    window.setInterval(swap, 3400);
  }
})();
