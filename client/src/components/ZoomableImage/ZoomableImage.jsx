import React, { useState, useRef } from 'react';

const ZoomableImage = ({ src }) => {
    const [zoomed, setZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);

    const handleMouseEnter = () => {
        setZoomed(true);
    };

    const handleMouseLeave = () => {
        setZoomed(false);
    };

    const handleMouseMove = (event) => {
        const imageRect = imageRef.current.getBoundingClientRect();
        const x = event.clientX - imageRect.left;
        const y = event.clientY - imageRect.top;
        setMousePosition({ x, y });
    };

    return (
        <div
            className="zoomable-image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            data-aos="fade-up"
        >
            <img ref={imageRef} src={src} alt="Zoomable" />
            {zoomed && (
                <>
                    <div
                        className="zoomed-fragment"
                        style={{
                            position: "absolute",
                            top: "17vh",
                            left: "30vw",
                            width: '80px',
                            height: '80px',
                            borderRadius: '8px',
                            backgroundImage: `url(${src})`,
                            backgroundPosition: `${-(mousePosition.x - 25)}px ${-(mousePosition.y - 25)}px`,
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default ZoomableImage;
