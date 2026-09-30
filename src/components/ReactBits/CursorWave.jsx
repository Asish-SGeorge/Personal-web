import React, { useRef, useEffect } from 'react';

export default function CursorWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    const spacing = 35; // Space between dots
    let cols, rows;
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.floor(width / spacing) + 2;
      rows = Math.floor(height / spacing) + 2;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    const handleMouseMove = (e) => {
      // If hero section is not at the top, we might need to account for scroll, 
      // but Hero is at the top usually. 
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    let animationFrameId;
    
    const draw = () => {
      // Smooth mouse follow (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const maxDistance = 250;
          let scale = 1;
          let opacity = 0.15;
          let offsetX = 0;
          let offsetY = 0;
          
          if (distance < maxDistance) {
            const ratio = 1 - Math.pow(distance / maxDistance, 1.5);
            
            // Magnetic repel effect
            const push = ratio * 12;
            const angle = Math.atan2(dy, dx);
            offsetX = -Math.cos(angle) * push;
            offsetY = -Math.sin(angle) * push;
            
            scale = 1 + ratio * 1.5;
            opacity = 0.15 + ratio * 0.5;
          }
          
          const drawX = x + offsetX;
          const drawY = y + offsetY;
          
          ctx.beginPath();
          ctx.arc(drawX, drawY, 1.5 * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(150, 200, 255, ${opacity})`; // Slight blueish white
          ctx.fill();
        }
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
