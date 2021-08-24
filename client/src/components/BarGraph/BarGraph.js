import React from "react";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";

// Compose together the scale and accessor functions to get point functions
// const compose = (scale, accessor) => (data) => scale(accessor(data));
// const xPoint = compose(xScale, x);
// const yPoint = compose(yScale, y);

// Finally we'll embed it all in an SVG
export default function BarGraph(props) {
  const { projects } = props;

  function extractData(project) {
    let duration = 0;

    for (let item = 0; item < project.list.length; item++) {
      duration += project.list[item].itemDuration;
    }

    return { name: project.projectName, duration: duration };
  }

  const data = projects.map(extractData);

  // Define the graph dimensions and margins
  const width = 500;
  const height = 458 - 12 * 2 - 103;
  const margin = { top: 12, bottom: 12, left: 12, right: 12 };

  // Graph bounds in pixels
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // Extra data points from data object
  const x = (d) => d.name; // X-values
  const y = (d) => +d.duration; // Y-values

  // tickValuesArray
  // const tickValuesArray = data.map(x);

  // And then scale the graph by our data
  const xScale = scaleBand({
    range: [0, xMax], // x-axis in pixels
    round: true,
    domain: data.map(x), // array of x-values
    padding: 0.4, // padding between bars
  });

  const yScale = scaleLinear({
    range: [yMax, 0], // y-axis in pixels
    round: true,
    domain: [0, Math.max(...data.map(y))], // range of Y-values
  });

  return (
    <svg width={width - 24} height={height} style={{ margin: "12px" }}>
      {data.map((d, i) => {
        const x = xScale(d.name);
        const y = yScale(d.duration);
        const barHeight = yMax - y;
        return (
          <Bar
            key={i}
            x={x}
            y={y}
            height={barHeight}
            width={xScale.bandwidth()}
            fill="#f4d160"
          />
        );
      })}
      <AxisLeft
        scale={yScale}
        left={24}
        numTicks={5}
        label="Time spent (in seconds)"
        hideTicks
        hideAxisLine
        tickLabelProps={() => ({
          fill: "#fff",
          textAnchor: "middle",
          fontFamily: "Roboto",
        })}
      />
      <AxisBottom
        scale={xScale}
        top={yMax}
        orientation="bottom"
        hideTicks
        hideAxisLine
        tickLabelProps={() => ({
          fill: "#fff",
          textAnchor: "middle",
          fontFamily: "Roboto",
        })}
      />
    </svg>
  );
}
