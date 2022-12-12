import p5Types from "p5";
import Sketch from "../../../../atoms/Sketch";

const BrushNormal = () => {
  const preload = () => {
    // ここは今回使わない
  };

  const setup = (p5: p5Types) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.stroke(255);
    p5.background(0);
    p5.strokeWeight(2);
  };

  const draw = (p5: p5Types) => {
    if (p5.mouseIsPressed) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      windowResized={windowResized}
    />
  );
};

export default BrushNormal;
