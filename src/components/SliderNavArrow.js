import React from "react";

const SliderNavArrow = ({ arrowDirection, sliderRef }) => {
  function navClickHandler() {
    if (arrowDirection === "left") {
      sliderRef.current.goBack();
      return null;
    }

    if (arrowDirection === "right") {
      sliderRef.current.goNext();
      return null;
    }
  }

  return (
    <div className={`nav-arrow ${arrowDirection}`} onClick={navClickHandler}>
      <span className="mdi mdi-apple-keyboard-control" />
    </div>
  );
};

export default SliderNavArrow;
