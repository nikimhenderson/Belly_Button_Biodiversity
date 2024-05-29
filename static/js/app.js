//Get the samples dataset, fetch the JSON data
const url =
  "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";


//starting point that populates dropdown
function start() {
  //put datasets into global variables
  d3.json(url).then(function (data) {
    names = data.names; // samples dataset

    //selecting the id in the dropdown
    let dropdown = d3.select("#selDataset");

    //add each id to the dropdown for the user
    for (let i = 0; i < names.length; i++) {
      dropdown.append("option").text(names[i]).property("value", names[i]);
    }
    display_metadata(names[0]);
    charts(names[0]);
  });
}



start();



//demographic info
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
//bar chart and bubble
function charts(x) {
    d3.json(url).then(function (data) {
      samples = data.samples;
      let result = samples.filter((pez) => pez.id == x)[0];
      console.log(result);
      //initialize variables
      let otuID = result.otu_ids;
      let sampleValues = result.sample_values;
      let otuLabels = result.otu_labels;
      //initialize variables - first 10 results
      let otuIDfirst = result.otu_ids.slice(0,10);
      let sampleValuesfirst = result.sample_values.slice(0,10);
      let otuLabelsfirst = result.otu_labels.slice(0,10);
      //creating bar chart
      let barTrace = {
        x: sampleValuesfirst.reverse(),
        y: otuIDfirst.map(id =>  `OTU ${id}`).reverse(),
        text: otuLabelsfirst.reverse(),
        type: 'bar',
        orientation: 'h'
      };
      let layout1 = {
        title: "Top 10 Bacteria Cultures Found",
        xaxis: {title: "Number of Bacteria"}
      };
      Plotly.newPlot("bar", [barTrace], layout1);
      //creating bubble chart
      let bubbleTrace = {
        x: otuID,
        y: sampleValues,
        text: otuLabels,
        mode: 'markers',
        marker: {
          size: sampleValues,
          color: otuID,
        }
      };
      let layout2 = {
        title: "Bacteria Cultures Per Sample",
        xaxis: {title: 'OTU ID'},
        yaxis: {title: 'Number of Bacteria'}
      };
      Plotly.newPlot("bubble", [bubbleTrace], layout2);
    })
}

