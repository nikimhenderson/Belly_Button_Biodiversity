//Get the samples dataset, fetch the JSON data
const url =
  "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";


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

