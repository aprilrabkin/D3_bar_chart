//Width and height
var w = 800;
var h = 300;
var barPadding = 1;

//var dataset = sqlrows;

//Create SVG element
var svg = d3.select("body")
.append("svg")
.attr("width", w)
.attr("height", h);

svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x", function(d, i) {
	return i * (w / dataset.length);
})
.attr("y", function(d) {
	return h - (d[1]*3);
})
.attr("width", w / dataset.length - barPadding)
.attr("height", function(d) {
	return d[1]*3;
})
.attr("fill", function(d) {
	return "rgb(0, 0, " + (d[1] * 10) + ")";
});

//Adding white percent labels inside the bars
svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(function(d) {
	return (d[1]+ "%");
})
.attr("text-anchor", "middle")
.attr("x", function(d, i) {
	return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
})
.attr("y", function(d) {
	return h - (d[1]*3) + 10;
})
.attr("font-family", "sans-serif")
.attr("font-size", "8px")
.attr("fill", "white");

var padding = 1;

//Create scale functions
var xScale = d3.scale.linear()
					 .domain([0, d3.max(dataset, function(d) { return d[0]; })])
					 .range([padding, w - padding * 2]);

var yScale = d3.scale.linear()
					 .domain([0, d3.max(dataset, function(d) { return d[1]; })])
					 .range([h - padding, padding]);

var rScale = d3.scale.linear()
					 .domain([0, d3.max(dataset, function(d) { return d[1]; })])
					 .range([2, 5]);

//Define X axis
var xAxis = d3.svg.axis()
				  .scale(xScale)
				  .orient("bottom");
				  //.ticks(23);


//Create X axis
svg.append("g")
	.attr("class", "axis")
	.attr("transform", "translate(0," + (h - padding) + ")")
	.call(xAxis);


