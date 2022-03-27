import arrow from "../assets/arrow.png";

export const Arrow = ({ className, setCurrentSlide }) => {
    const handleSlideChange = className => {
        return className === "arrow arrow--left"
            ? setCurrentSlide(prev => prev - 1)
            : setCurrentSlide(prev => prev + 1);
    };

    return (
        <div className={className} onClick={() => handleSlideChange(className)}>
            <img src={arrow} alt="Strzałka" />
        </div>
    );
};
