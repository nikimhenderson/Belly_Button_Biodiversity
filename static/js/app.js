//Get the samples dataset, fetch the JSON data
const url =
  "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

/*let metadata = null;
let names = null;
let samples = null;

//put datasets into global variables
d3.json(url).then(function(data){ 
    metadata = data["metadata"];
    names = data["names"];
    samples = data.samples; // samples dataset
    console.log(samples)
});
*/
//Horizontal bar chart w dropdown menu to display top 10 OTUs
let otuIds = [];
let sampleValues = [];

//starting point that populates dropdown
function start() {
  //put datasets into global variables
  d3.json(url).then(function (data) {
    samples = data.names; // samples dataset

    //selecting the id in the dropdown
    let dropdown = d3.select("#selDataset");

    //add each id to the dropdown for the user
    for (let i = 0; i < samples.length; i++) {
      dropdown.append("option").text(samples[i]).property("value", samples[i]);
    }
    display_metadata(samples[0]);
    charts(samples[0]);
  });
}



start();



//dropdown metadata
function optionChanged(sample_id) {
  display_metadata(sample_id);
  charts(sample_id);
}



function display_metadata(x) {
  d3.json(url).then(function (data) {
    metadata = data.metadata;
    let result = metadata.filter((pez) => pez.id == x)[0];
    console.log(result);
    let demographic = d3.select("#sample-metadata");
    demographic.html("")
    for (key in result) {
      demographic.append("h6").text(`${key}: ${result[key]}`);
    }
  });
}
function charts(x) {
    
}
//let sampleValues = samples["sample_values"].slice(0,10);
/*let trace1 = {
    x:
}*/
