'use strict';
import { appendData, powerStats } from "./_helpers/helper_functions.js";
import { fetchSpecificHeroData } from "./services/services.js";

async function loadContentById(id) {
  try {
    const superheroResponse = await fetchSpecificHeroData(id);
    const data = await superheroResponse.data;

    if (superheroResponse.success) {

      // Title
      const title = document.getElementById("page-title");
      title.innerHTML = data["name"];

      // Card Title
      const cardTitle = document.querySelector(".card-title");
      cardTitle.innerHTML = data["name"];

      // Image
      const heroImage = document.querySelector(".col-md-4 img");
      heroImage.src = data["image"]["url"];
      heroImage.alt = data["name"] + " photo";

      // Appearance
      const appearance = document.querySelector("#flush-collapseOne .accordion-body");
      appendData(appearance, data.appearance);

      // Biography
      const biography = document.querySelector("#flush-collapseTwo .accordion-body");
      appendData(biography, data.biography);

      // Connections
      const connections = document.querySelector("#flush-collapseThree .accordion-body");
      appendData(connections, data.connections);

      // Powerstats
      const powerStatsParent = document.querySelector("#flush-collapseFour .accordion-body");
      powerStats(powerStatsParent, data.powerstats);

      // Work
      const work = document.querySelector("#flush-collapseFive .accordion-body");
      appendData(work, data.work);
    } else {
      
      alert(`Failed to fetch superhero data: ${data.error || superheroResponse.message}`);
      
    }
  } catch (error) {  
    console.error('Error fetching superhero data:', error);
    
  }
}

// Function to get the ID from the query parameter
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Load content based on the ID from the query parameter
const id = getQueryParam("id");
if (id) {
  loadContentById(id);
}
