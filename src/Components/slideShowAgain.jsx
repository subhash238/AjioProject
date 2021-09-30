import React from "react";

const colors = ["https://assets.ajio.com/medias/sys_master/images/images/hba/h5a/44284355182622/16092021-d-unisex-newseason-calvinklein.jpg"
, "https://assets.ajio.com/medias/sys_master/images/images/h42/hc3/44284354789406/16092021-d-unisex-newseason-puma.jpg",
"https://assets.ajio.com/medias/sys_master/images/images/h79/h6b/44284354920478/16092021-d-unisex-newseason-tommyhilfiger.jpg",
"https://assets.ajio.com/medias/sys_master/images/images/h72/hec/44284355051550/16092021-d-unisex-newseason-asics.jpg"];
const delay = 2500;

function SlideShowAgain() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
      console.log(timeoutRef.current)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <img
            className="slide"
            key={index}
            src={ backgroundColor }
          ></img>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default SlideShowAgain