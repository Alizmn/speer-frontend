import React from "react";
import image2 from "../images/Image2.png";

const styles = {
  slider: {
    width: "100%",
    height: "auto",
  },
};

function ImageSlider() {
  return (
    <div>
      <img src={image2} style={styles.slider} />
    </div>
  );
}

export default ImageSlider;
