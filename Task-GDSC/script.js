document.addEventListener("DOMContentLoaded", function() {
    const text = "Financial metrics are key indicators that quantify a company’s financial performance and stability.";
    const para = document.getElementById("para");
    let index = 0;

    function type() {
        if (index < text.length) {
            para.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust the speed by changing the delay in milliseconds
        }
    }

    type();
});



document.addEventListener("DOMContentLoaded", function() {
    const data = [30, 86, 168, 281, 303, 365];
    const width = 500;
    const height = 350;
    const barPadding = 5;
    const barHeight = height / data.length; // Height for each bar

    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Define xScale for horizontal length of each bar
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width]);

    // Add a div element for the tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip");

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", 0) // Start each bar at the left edge
        .attr("y", (d, i) => i * barHeight) // Position bars vertically
        .attr("width", d => xScale(d)) // Set bar width based on data
        .attr("height", barHeight - barPadding) // Set bar height with padding
        .attr("fill", "teal")
        .on("mouseover", function(event, d) {
            tooltip.style("opacity", 1)
                .html("Value: " + d) // Show the value of d
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 20) + "px");
            d3.select(this).attr("fill", "darkcyan"); // Change color on hover
        })
        .on("mouseout", function() {
            tooltip.style("opacity", 0); // Hide the tooltip
            d3.select(this).attr("fill", "teal"); // Reset color
        });

    // Add labels for each bar
    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(d => d)
        .attr("x", d => xScale(d) + 5) // Position text to the right of each bar
        .attr("y", (d, i) => i * barHeight + (barHeight - barPadding) / 2) // Center text vertically in each bar
        .attr("text-anchor", "start")
        .style("font-size", "12px")
        .attr("alignment-baseline", "middle"); // Center text vertically in each bar
});


//Sign-up page

const id1 = document.querySelector("#ID");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn")
const para = document.querySelector("#p");

btn.addEventListener("click", (event)=>{
    event.preventDefault();
    if(id1.value === '' || email.value === '' || password.value === ''){
           para.innerText = "Please Fill All Mandatory Fields";
    }else{
        para.innerText = "";
        
        id1.value = "";
        email.value = "";
        password.value = ""

    }
})