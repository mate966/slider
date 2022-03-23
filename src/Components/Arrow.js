import arrow from "../assets/arrow.png";

export const Arrow = ({ className }) => {
    const handleSlideChange = className => {
        className === "arrow arrow--left"
            ? console.log("siema")
            : console.log("nara");
    };

    return (
        <div className={className} onClick={() => handleSlideChange(className)}>
            <img src={arrow} alt="Strzałka" />
        </div>
    );
};
