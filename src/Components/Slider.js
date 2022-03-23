import { useState } from "react";

import { Loader } from "./Loader";
import { GetData } from "./sliderData";
import { Arrow } from "./Arrow";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { content, isLoading, error } = GetData();

    if (isLoading) return <Loader />;
    if (error) return <div>Błąd!</div>;

    return (
        <>
            <Arrow className="arrow arrow--left" />
            <Arrow className="arrow arrow--right" />
            <div className="slider">
                {content.map((slide, index) => (
                    <img
                        src={slide.avatar_url}
                        alt="Awatar użytkownika"
                        key={slide.id}
                        className="slide"
                    />
                ))}
            </div>
        </>
    );
};

export default Slider;
