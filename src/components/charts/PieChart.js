import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = () => {
  const chartRef = useRef(null);
  const data = [
    { name: 'TRY', value: 100 },
    { name: 'EREGL', value: 400 },
    { name: 'ASELS', value: 600 },
  ];

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;
    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    const pie = d3.pie().value((d) => d.value);

    const chart = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const g = chart
      .selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    g.append('path')
      .attr('d', arc)
      .style('fill', (d, i) => colors(i));

    g.append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('dy', '.35em')
      .style('text-anchor', 'middle')
      .text((d) => d.data.name);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <svg ref={chartRef} height="300" width="300"></svg>
  );
};

export default PieChart;
