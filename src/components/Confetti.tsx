'use client';

import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

export default function Confetti() {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    });
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        // Stop confetti after 8 seconds
        const timer = setTimeout(() => {
            setIsRunning(false);
        }, 8000);

        return () => {
            window.removeEventListener('resize', updateDimensions);
            clearTimeout(timer);
        };
    }, []);

    return (
        <ReactConfetti
            width={dimensions.width}
            height={dimensions.height}
            numberOfPieces={isRunning ? 200 : 0}
            recycle={false}
            colors={['#FF6B9D', '#7FC5F9', '#FFD166', '#06D6A0', '#118AB2']}
        />
    );
} 