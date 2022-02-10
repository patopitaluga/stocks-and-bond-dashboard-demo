/**
 * Displays the pie chart. Triggered when the array of investments is available in the vc-total component.
 * Doc: https://www.d3-graph-gallery.com/graph/pie_annotation.html
 *
 * @param {array} _values
 */
const initPieChart = (_values) => {
  if (!_values) return;
  const box = document.querySelector('#piechart');
  const width = box.clientWidth;
  const height = width;
  const margin = 40;

  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  const radius = Math.min(width, height) / 2 - margin;

  d3.selectAll('svg > *').remove();
  box.innerHTML = '';
  const svg = d3.select("#piechart")
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  // set the color scale
  const color = d3.scaleOrdinal()
    .domain(_values.map((_) => _.name))
    .range(d3.schemeSet2);

  // Compute the position of each group on the pie:
  const pie = d3.pie()
    .value(function(d) { return d.value.currentValue; });
  const data_ready = pie(d3.entries(_values));
  // Now I know that group A goes from 0 degrees to x degrees and so on.

  // shape helper to build arcs:
  var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
    .selectAll('mySlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill', function(d) { return(color(d.data.key)); })
    .style('opacity', 0.7);

  // Now add the annotation. Use the centroid method to get the best coordinates
  svg
    .selectAll('mySlices')
    .data(data_ready)
    .enter()
    .append('text')
    .text(function(d){ return d.data.value.name})
    .attr('transform', function(d) { return 'translate(' + arcGenerator.centroid(d) + ')';  })
    .style('text-anchor', 'middle')
    .style('font-size', 11);
};

export { initPieChart };
