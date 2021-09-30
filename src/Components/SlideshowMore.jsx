import React from "react";

const colors = ["https://assets.ajio.com/medias/sys_master/images/images/hf3/hd8/44463106818078/28092021-D-MHP-banner1-P4-brands-upto60.jpg"
, "https://assets.ajio.com/medias/sys_master/images/images/he8/h13/44463106359326/28092021-D-MHP-banner1-P3-brands-upto70.jpg",
"https://assets.ajio.com/medias/sys_master/images/images/hdb/h8f/44463106261022/28092021-D-MHP-banner-p1-gas-upto60.jpg",
"https://assets.ajio.com/medias/sys_master/images/images/h44/he1/44463106326558/28092021-D-MHP-Banner1-P2-starting499.jpg"];
const delay = 2500;

function SlideshowMore() {
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
export default SlideshowMore