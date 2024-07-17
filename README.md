# Belly_Button_Biodiversity
## Purpose
The purpose of this project was to create a web application dashboard using Javascript and Plotly to display an individual test subjects belly button bacteria data from the [Belly Button Bio Diversity Dataset](http://robdunnlab.com/projects/belly-button-biodiversity/) from the Rob Dunn Lab. Each test subjects data can be selected and viewed. The results to be displayed were:
1. Demographic Information
2. Bar chart of the top 10 bacteria cultures found
3. Bubble chart of bacteria cultures per sample

![Screenshot 2024-07-17 103326](https://github.com/user-attachments/assets/1418efbe-710b-4d24-8943-8d131e41a0fa)

## Resources
Data Source: samples.json <br/>
Software: VS Code, Javascript, Plotly, D3, HTML

## How to use
To view the webpage go to: [https://nikimhenderson.github.io/Belly_Button_Biodiversity/](https://nikimhenderson.github.io/Belly_Button_Biodiversity/)
<br/>Select the test subject ID no. to see one test subject's data
<br/>Hover over the charts to see other details such as the bacteria cultures

## Creation
1. Use the D3 library to read in samples.json from the URL [https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json) <br/>
![Screenshot 2024-07-17 103945](https://github.com/user-attachments/assets/3feeba30-20da-4024-ace2-ce6e20080d70)

2. Create a dropdown menu to display data from one test subject <br/>
![Screenshot 2024-07-17 104036](https://github.com/user-attachments/assets/2b909bea-9371-4e7f-a3df-9fb2e13d12fb)

3. Initialize the demographic info to the page <br/>
![Screenshot 2024-07-17 104230](https://github.com/user-attachments/assets/b28e88e0-1792-435c-9d65-1e6ae3609800)<br/>
![Screenshot 2024-07-17 104453](https://github.com/user-attachments/assets/2f402cf6-beb3-4412-9572-cff8e7498235)

4. Initialize the bar chart & bubble chart <br/>
![Screenshot 2024-07-17 104723](https://github.com/user-attachments/assets/f723db5d-0cf3-4825-90b6-28d96bacf85c)<br/>
![Screenshot 2024-07-17 104740](https://github.com/user-attachments/assets/dbfffde7-78c5-4b93-866e-f72f5bcc0422)

## Results
The data reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

