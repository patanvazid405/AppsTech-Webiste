import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let pts = [];
    let raf;
    const mouse = { x: null, y: null };
    const N = 60, D = 130, MD = 160;

    const resize = () => {
      c.width = c.parentElement.offsetWidth;
      c.height = c.parentElement.offsetHeight;
    };

    function P() {
      this.x = Math.random() * c.width;
      this.y = Math.random() * c.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r = Math.random() * 1.2 + 0.4;
      this.a = Math.random() * 0.25 + 0.06;
    }
    P.prototype.update = function () {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > c.width) this.vx *= -1;
      if (this.y < 0 || this.y > c.height) this.vy *= -1;
      if (mouse.x) {
        const dx = this.x - mouse.x, dy = this.y - mouse.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < MD) { const f = ((MD - d) / MD) * 0.015; this.vx += dx * f; this.vy += dy * f; }
      }
      const sp = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (sp > 1) { this.vx *= 0.97; this.vy *= 0.97; }
    };

    const init = () => { pts = Array.from({ length: N }, () => new P()); };
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.update();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(143,149,247,${p.a})`;
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < D) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(91,95,239,${(1 - d / D) * 0.09})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const hero = c.parentElement;
    const onMove = (e) => { const r = hero.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onLeave = () => { mouse.x = null; mouse.y = null; };
    const onResize = () => { resize(); init(); };

    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);
    resize(); init(); draw();

    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 z-0 opacity-60" />;
}
