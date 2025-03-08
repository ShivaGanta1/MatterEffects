import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Page.css';
import useMousePosition from './useMousePosition';

function Page() {

    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const maskRef = useRef(null);

    useEffect(() => {
        const maskElement = maskRef.current;
        const size = isHovered ? 400 : 40;

        gsap.to(maskElement, {
            duration: 0.5,
            ease: "back.out(1.7)",
            webkitMaskSize: `${size}px`,
        });

    }, [isHovered]);

    useEffect(() => {
        const maskElement = maskRef.current;
        const size = isHovered ? 400 : 40;
        gsap.set(maskElement, {
            webkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
        });
    }, [x, y, isHovered]);


    return (
        <main className="main">
            <div
                ref={maskRef}
                className="mask"
            >
                <p
                    onMouseEnter={() => { setIsHovered(true) }}
                    onMouseLeave={() => { setIsHovered(false) }}
                >
                    A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
                </p>
            </div>

            <div className="body">
                <p>I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
            </div>

        </main>
    )
}

export default Page; 