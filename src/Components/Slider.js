import { useState } from "react";

import { Loader } from "./Loader";
import { GetData } from "./sliderData";
import { Arrow } from "./Arrow";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { content, isLoading, error } = GetData();

    if (isLoading) return <Loader />;
    if (error) return <div>Wystąpił błąd! Wciśnij F5.</div>;
    if (
        currentSlide === -1
            ? setCurrentSlide(4)
            : currentSlide === 5
            ? setCurrentSlide(0)
            : null
    );

    return (
        <>
            <Arrow
                className="arrow arrow--left"
                setCurrentSlide={setCurrentSlide}
            />
            <Arrow
                className="arrow arrow--right"
                setCurrentSlide={setCurrentSlide}
            />
            <div className="slider">
                {content.map((slide, index) =>
                    index === currentSlide ? (
                        <img
                            src={slide.avatar_url}
                            alt="Awatar użytkownika"
                            key={slide.id}
                            className="slide"
                        />
                    ) : null
                )}
            </div>
        </>
    );
};

export default Slider;
