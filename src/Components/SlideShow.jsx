import React from "react";

const colors = ["https://assets.ajio.com/medias/sys_master/images/images/h82/ha9/44459913019422/27092021-d-unisex-topcarousel-p5-topwear-min50.jpg"
, "https://assets.ajio.com/medias/sys_master/images/images/hce/hdb/44348041527326/21092021-d-unisex-topcarousel-p2-jiomart-extra30.jpg",
"https://assets.ajio.com/medias/sys_master/images/images/h60/hf7/44459912724510/27092021-d-unisex-topcarousel-p4-superbranddays-upto60extra15.jpg"];
const delay = 2500;

function Slideshow() {
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
export default Slideshow