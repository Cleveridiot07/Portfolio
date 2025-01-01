import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Failed to get canvas context.");
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle System
    const particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse Trail
    const trail = new Array(40).fill(null).map(() => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      dx: 0,
      dy: 0,
    }));

    const pointer = { x: canvas.width / 2, y: canvas.height / 2 };

    const params = {
      widthFactor: 0.3,
      spring: 0.4,
      friction: 0.5,
    };

    const updateMousePosition = (e: MouseEvent | TouchEvent) => {
      const isTouchEvent = "touches" in e;
      pointer.x = isTouchEvent ? e.touches[0].clientX : e.clientX;
      pointer.y = isTouchEvent ? e.touches[0].clientY : e.clientY;
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", updateMousePosition);

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();

        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Update and draw trail
      trail.forEach((segment, index) => {
        const prev = index === 0 ? pointer : trail[index - 1];
        const spring = index === 0 ? params.spring * 0.4 : params.spring;

        segment.dx += (prev.x - segment.x) * spring;
        segment.dy += (prev.y - segment.y) * spring;
        segment.dx *= params.friction;
        segment.dy *= params.friction;
        segment.x += segment.dx;
        segment.y += segment.dy;
      });

      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);
      ctx.strokeStyle = "white";

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = (trail[i].x + trail[i + 1].x) / 2;
        const yc = (trail[i].y + trail[i + 1].y) / 2;
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (trail.length - i);
        ctx.stroke();
      }

      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchmove", updateMousePosition);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 bg-[#0E1525] w-full h-full pointer-events-none"
    />
  );
};

export default CustomCursor;
