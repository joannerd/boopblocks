// // handle the logic for user interaction updating the necessary Soundwave objects for render.

const synths = {
  1: {
    width: 100,
    height: 100,
    margin: 20,
    data: {
      a: 1
    }
  },
  2: {
    width: 100,
    height: 100,
    margin: 20,
    data: {
      a: 1,
      b: 1
    }
  },
  3: {
    width: 100,
    height: 100,
    margin: 20,
    data: {
      a: 1,
      b: 1,
      c: 1
    }
  },
  4: {
    width: 100,
    height: 100,
    margin: 20,
    data: {
      a: 1,
      b: 1,
      c: 1,
      d: 1
    }
  },
  5: {
    width: 100,
    height: 100,
    margin: 20,
    data: {
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1
    }
  },
  6: {
    width: 100,
    height: 100,
    margin: 20,
    data: {
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 1
    }
  },
  7: {
    width: 100,
    height: 100,
    margin: 20,
    data: {
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 1,
      g: 1
    }
  },
  8: {
    width: 100,
    height: 100,
    margin: 20,
    data: {
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 1,
      g: 1,
      h: 1
    }
  },
  9: {
    width: 100,
    height: 100,
    margin: 20,
    data: {
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 1,
      g: 1,
      h: 1,
      i: 1
    }
  }
};

for (let i = 1; i <= 9; i++) {
  const { width, height, margin, data } = synths[i];
  const radius = Math.min(width, height) / 2.5 - margin;

  const svg = d3
    .select(`#synth${i}`)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const color = d3
    .scaleOrdinal()
    .domain(data)
    .range(["#F8B195", "#F67280", "#C06C84", "#6C5B7B", "#355C7D", "#2C3E50"]);

  const pie = d3.pie().value(function(d) {
    return d.value;
  });
  const data_ready = pie(d3.entries(data));

  svg
    .selectAll("whatever")
    .data(data_ready)
    .enter()
    .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(65)
          .outerRadius(radius)
      )
      .attr("fill", d => {
        return color(d.data.key);
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px");

  svg
    .append("polygon")
    .attr("class", "play")
    .attr("id", `play-button-${i}`)
    .attr("points", "-5,8 8,0 -5,-8")
    .attr("style", "fill: black;")
}