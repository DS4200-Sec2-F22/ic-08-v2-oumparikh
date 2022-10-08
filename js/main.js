const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const FRAME1 = d3.select("#vis1") 
                  .append("svg") 
                    .attr("height", FRAME_HEIGHT)   
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 


d3.csv("data/data.csv").then((data) => { 
  
  console.log(data); 
  const MAX_X2 = d3.max(data, (d) => { return parseInt(d.x); });
          // Note: data read from csv is a string, so you need to
          // cast it to a number if needed 
  
  // Define scale functions that maps our data values 
  // (domain) to pixel values (range)
  const X_SCALE2 = d3.scaleLinear() 
                    .domain([0, (MAX_X2 + 10000)]) // add some padding  
                    .range([0, VIS_WIDTH]);

});