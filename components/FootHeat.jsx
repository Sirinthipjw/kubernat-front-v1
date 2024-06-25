"use client";
// components/FootShape.js
import { useEffect } from "react";
import * as d3 from "d3";

const FootShape = () => {
  useEffect(() => {
    const width = 500;
    const height = 500;

    const data = [
      // Define points for the left foot
      { x: 200, y: 450 },
      { x: 150, y: 400 },
      { x: 130, y: 350 },
      { x: 120, y: 300 },
      { x: 130, y: 250 },
      { x: 140, y: 200 },
      { x: 160, y: 150 },
      { x: 180, y: 100 },
      { x: 200, y: 50 },
      { x: 220, y: 100 },
      { x: 240, y: 150 },
      { x: 260, y: 200 },
      { x: 270, y: 250 },
      { x: 280, y: 300 },
      { x: 270, y: 350 },
      { x: 250, y: 400 },
      { x: 200, y: 450 },
      // Define points for the right foot (mirror image)
      { x: 300, y: 450 },
      { x: 350, y: 400 },
      { x: 370, y: 350 },
      { x: 380, y: 300 },
      { x: 370, y: 250 },
      { x: 360, y: 200 },
      { x: 340, y: 150 },
      { x: 320, y: 100 },
      { x: 300, y: 50 },
      { x: 280, y: 100 },
      { x: 260, y: 150 },
      { x: 240, y: 200 },
      { x: 230, y: 250 },
      { x: 220, y: 300 },
      { x: 230, y: 350 },
      { x: 250, y: 400 },
      { x: 300, y: 450 },
    ];

    const svg = d3
      .select("#foot-shape")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const line = d3
      .line()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(d3.curveCardinalClosed);

    svg
      .append("path")
      .datum(data)
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "black");
  }, []);

  return <div id="foot-shape" className="flex justify-center items-center h-screen"></div>;
};

export default FootShape;
