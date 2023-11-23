<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
    export const color = "#ffffff";
  
    onMount(() => {
      // Set up the SVG container
      const svg = d3.select('svg');
      const width = 1000;
      const height = 150;
  
      svg.attr('width', width*4).attr('height', height);
  
      // Generate sine wave data
      const data = d3.range(0, Math.PI*16, 0.1).map((/** @type {number} */ d) => ({
        x: d,
        y: Math.sin(d),
      }));
  
      // Set up scales
      const xScale = d3.scaleLinear().domain([0, Math.PI*16]).range([0, width*4]);
      const yScale = d3.scaleLinear().domain([-1, 1]).range([height*0.8, 2]);
  
      // Create line function
      const line = d3.line().x((/** @type {{ x: any; }} */ d) => xScale(d.x)).y((/** @type {{ y: any; }} */ d) => yScale(d.y));
  
      // Append the path element to the SVG
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 3)
        .attr('d', line);
    });
  </script>
  
  <style>
    svg {
      margin: auto;
      position:absolute;
      left:0;
      top:00;
      margin-top:20px;
      z-index: 1;
    }
  </style>
  
  <svg></svg>
  