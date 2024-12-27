import React, { useEffect } from 'react';

const CustomCursor: React.FC = () => {
    useEffect(() => {
        const canvas = document.querySelector("canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        // Check if ctx is null
        if (!ctx) {
            console.error("Failed to get canvas context.");
            return; // Exit if the context is not available
        }

        // for intro motion
        let mouseMoved = false;

        const pointer = {
            x: 0.5 * window.innerWidth,
            y: 0.5 * window.innerHeight,
        };
        
        const params = {
            pointsNumber: 40,
            widthFactor: 0.3,
            mouseThreshold: 0.6,
            spring: 0.4,
            friction: 0.5
        };

        const trail = new Array(params.pointsNumber);
        for (let i = 0; i < params.pointsNumber; i++) {
            trail[i] = {
                x: pointer.x,
                y: pointer.y,
                dx: 0,
                dy: 0,
            };
        }

        const updateMousePosition = (eX: number, eY: number) => {
            pointer.x = eX;
            pointer.y = eY;
            console.log(`Mouse Position: ${pointer.x}, ${pointer.y}`); // Debugging log
        };

        window.addEventListener("click", (e) => {
            updateMousePosition(e.pageX, e.pageY);
        });
        window.addEventListener("mousemove", (e) => {
            mouseMoved = true;
            updateMousePosition(e.pageX, e.pageY);
        });
        window.addEventListener("touchmove", (e) => {
            mouseMoved = true;
            updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
        });

        const setupCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            console.log(`Canvas Size: ${canvas.width} x ${canvas.height}`); // Debugging log
        };

        const update = (t: number) => {
            if (!mouseMoved) {
                pointer.x = (0.5 + 0.3 * Math.cos(0.002 * t) * (Math.sin(0.005 * t))) * window.innerWidth;
                pointer.y = (0.5 + 0.2 * (Math.cos(0.005 * t)) + 0.1 * Math.cos(0.01 * t)) * window.innerHeight;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            trail.forEach((p, pIdx) => {
                const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
                const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
                p.dx += (prev.x - p.x) * spring;
                p.dy += (prev.y - p.y) * spring;
                p.dx *= params.friction;
                p.dy *= params.friction;
                p.x += p.dx;
                p.y += p.dy;
            });

            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(trail[0].x, trail[0].y);

            // Set the stroke color to white
            ctx.strokeStyle = 'white';

            for (let i = 1; i < trail.length - 1; i++) {
                const xc = 0.5 * (trail[i].x + trail[i + 1].x);
                const yc = 0.5 * (trail[i].y + trail[i + 1].y);
                ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
                ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
                ctx.stroke();
            }
            ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
            ctx.stroke();
        };

        setupCanvas();
        update(0);
        window.addEventListener("resize", setupCanvas);

        const animate = (timestamp: number) => {
            update(timestamp);
            window.requestAnimationFrame(animate);
        };

        window.requestAnimationFrame(animate);

        return () => {
            // Cleanup event listeners on component unmount
            window.removeEventListener("mousemove", (e) => updateMousePosition(e.pageX, e.pageY));
            window.removeEventListener("click", (e) => updateMousePosition(e.pageX, e.pageY));
            window.removeEventListener("touchmove", (e) => updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY));
            window.removeEventListener("resize", setupCanvas);
        };
    }, []);

    return (
        <canvas className='z-50' style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></canvas>
    );
};

export default CustomCursor;
