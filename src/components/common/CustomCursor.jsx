// src/common/CustomCursor.jsx
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [cursorState, setCursorState] = useState('default'); // 'default' | 'medium' | 'large'
    const rafRef = useRef(null);
    const cursorRef = useRef(null);

    // Detect mobile/touch devices → disable custom cursor
    const isMobile = () => window.innerWidth < 768 || 'ontouchstart' in window;

    useEffect(() => {
        if (isMobile()) return; // Disable on mobile

        const moveCursor = (e) => {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                setMousePos({ x: e.clientX, y: e.clientY });
            });
        };

        const handleMediumEnter = () => setCursorState('medium');
        const handleLargeEnter = () => setCursorState('large');
        const handleLeave = () => setCursorState('default');

        // Selectors — add your own classes as needed
        const mediumSelectors = 'a, button, input, textarea, [role="button"], .cursor-medium, [data-cursor="medium"]';
        const largeSelectors = '.cursor-large, [data-cursor="large"], .sector-card, .story-card';

        const mediumEls = document.querySelectorAll(mediumSelectors);
        const largeEls = document.querySelectorAll(largeSelectors);

        mediumEls.forEach(el => {
            el.addEventListener('mouseenter', handleMediumEnter);
            el.addEventListener('mouseleave', handleLeave);
        });

        largeEls.forEach(el => {
            el.addEventListener('mouseenter', handleLargeEnter);
            el.addEventListener('mouseleave', handleLeave);
        });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('mousemove', moveCursor);
            mediumEls.forEach(el => {
                el.removeEventListener('mouseenter', handleMediumEnter);
                el.removeEventListener('mouseleave', handleLeave);
            });
            largeEls.forEach(el => {
                el.removeEventListener('mouseenter', handleLargeEnter);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    // Hide default cursor when custom is active
    useEffect(() => {
        if (isMobile()) return;
        document.body.style.cursor = 'none';
        return () => {
            document.body.style.cursor = 'auto';
        };
    }, []);

    // Cursor styles
    const styles = {
        default: { size: 16, offset: 8, bg: 'rgba(249, 115, 22, 0.95)', border: 'none', shadow: '0 0 20px rgba(249, 115, 22, 0.9)' },
        medium: { size: 48, offset: 24, bg: 'rgba(255, 255, 255, 0.25)', border: '2px solid rgba(255, 255, 255, 0.6)', shadow: '0 0 30px rgba(255, 255, 255, 0.4)' },
        large: { size: 100, offset: 50, bg: 'rgba(249, 115, 22, 0.15)', border: '3px solid rgba(249, 115, 22, 0.5)', shadow: '0 0 60px rgba(249, 115, 22, 0.6)' },
    };

    const current = styles[cursorState];

    // Don't render on mobile
    if (isMobile()) return null;

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference transition-all duration-300 ease-out"
            style={{
                transform: `translate(${mousePos.x - current.offset}px, ${mousePos.y - current.offset}px)`,
                width: current.size,
                height: current.size,
                background: current.bg,
                border: current.border,
                boxShadow: current.shadow,
            }}
        />
    );
}