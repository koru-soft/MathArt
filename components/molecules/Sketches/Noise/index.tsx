import p5Types from "p5";
import Sketch from "../../../atoms/Sketch";

const Noise = () => {
  const preload = () => {
    // ここは今回使わない
  };

  const setup = (p5: p5Types) => {
    p5.createCanvas(innerWidth, innerHeight);
  };

  const draw = (p5: p5Types) => {
    p5.colorMode(p5.HSB);
    p5.background(100, 200, 0);
    p5.noFill();

    const lineNum = 100;
    const segmentNum = 100;

    [...Array(lineNum).keys()].forEach((j) => {
      const time = Date.now() / 5000;
      const coefficient = 50 + j;

      const h = Math.round((j / lineNum) * 60) + 150; // 色相
      const s = 100; // 彩度
      const l = Math.round((j / lineNum) * 75) + 50; // 明度

      p5.beginShape();
      p5.stroke(h, s, l);

      [...Array(segmentNum).keys()].forEach((i) => {
        const x = (i / (segmentNum - 1)) * p5.width;

        const px = i / coefficient;
        const py = j / 50 + time;

        const randomValue = p5.noise(px, py);
        const y = randomValue * p5.height;
        p5.vertex(x, y);
      });

      p5.endShape();
    });
  };

  return <Sketch preload={preload} setup={setup} draw={draw} />;
};

export default Noise;
