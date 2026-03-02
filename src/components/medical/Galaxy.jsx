import React, { useRef, useEffect } from 'react';

export const Galaxy = ({
    starSpeed = 0.5,
    density = 1,
    hueShift = 140,
    speed = 1,
    glowIntensity = 0.3,
    repulsionStrength = 2,
    twinkleIntensity = 0.3,
    rotationSpeed = 0.1,
    transparent = true,
    className = ""
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;
        let particles = [];
        const MAX_PARTICLES = Math.floor((width * height) / 4000) * density;

        // Store mouse position for repulsion
        let mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        const handleResize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
            initParticles();
        };

        window.addEventListener('resize', handleResize);

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;

                // Randomize speed based on prop
                this.vx = (Math.random() - 0.5) * starSpeed * speed;
                this.vy = (Math.random() - 0.5) * starSpeed * speed;

                // Setup glow/color properties
                this.hue = Math.random() * 30 + hueShift;
                this.alpha = Math.random();
                this.alphaChange = (Math.random() * 0.02 + 0.005) * twinkleIntensity;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();

                // Glowing effect
                ctx.shadowBlur = this.size * 5 * glowIntensity;
                ctx.shadowColor = `hsl(${this.hue}, 80%, 60%)`;
                ctx.fillStyle = `hsla(${this.hue}, 100%, 80%, ${Math.abs(Math.sin(this.alpha))})`;
                ctx.fill();

                // Reset shadow for next draw to keep performance
                ctx.shadowBlur = 0;
            }

            update() {
                // Move particle
                this.x += this.vx;
                this.y += this.vy;

                // Twinkling
                this.alpha += this.alphaChange;

                // Wrap around screen
                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;

                // Interaction with mouse
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                // Rotate the entire galaxy around center
                let cx = width / 2;
                let cy = height / 2;
                let rx = this.x - cx;
                let ry = this.y - cy;
                let radian = rotationSpeed * 0.01;

                this.x = cx + Math.cos(radian) * rx - Math.sin(radian) * ry;
                this.y = cy + Math.sin(radian) * rx + Math.cos(radian) * ry;

                if (distance < 100) {
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;

                    let maxDistance = 100;
                    let force = (maxDistance - distance) / maxDistance;
                    let directionX = forceDirectionX * force * this.density * repulsionStrength;
                    let directionY = forceDirectionY * force * this.density * repulsionStrength;

                    this.x -= directionX;
                    this.y -= directionY;
                }
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < MAX_PARTICLES; i++) {
                particles.push(new Particle());
            }
        };

        initParticles();

        let animationFrameId;
        const animate = () => {
            if (transparent) {
                ctx.clearRect(0, 0, width, height);
            } else {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
                ctx.fillRect(0, 0, width, height);
            }

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [starSpeed, density, hueShift, speed, glowIntensity, repulsionStrength, twinkleIntensity, rotationSpeed, transparent]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full block ${className}`}
            style={{ pointerEvents: 'auto' }}
        />
    );
};
