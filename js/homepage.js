'use strict';
import { fetchSuperheroData } from "./services/services.js";
import { createCards } from "./_helpers/helper_functions.js";

const searchInput = document.getElementById('superhero-name');
const searchResults = document.getElementById('search-results');

async function initializePage() {
  try {
    const superheroResponse = await fetchSuperheroData();

    if (superheroResponse.success) {
      const superheroData = superheroResponse.data;
      
      displayAllHeroes(superheroData);

      searchInput.addEventListener('input', () => updateResults(superheroData));
    } else {
      // Handle unsuccessful response, e.g., display an error message
      alert(`Failed to fetch superhero data: ${superheroResponse.message}`);
    }
  } catch (error) {
    console.error('Error fetching superhero data:', error);
    // Handle other unexpected errors here
  }
}

function displayAllHeroes(superheroNames) {
  const heroesData = superheroNames.map((item) => ({
    imageUrl: item.images.md,
    biography: item.biography,
    name: item.name,
    link: `details.html?id=${item.id}`,
  }));

  createCards(heroesData);
}

function updateResults(superheroNames) {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = ''; // Clear the previous results

  const filteredResults = superheroNames.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  const heroesData = filteredResults.map((item) => ({
    imageUrl: item.images.md,
    biography: item.biography,
    name: item.name,
    link: `details.html?id=${item.id}`,
  }));

  createCards(heroesData);
}

// Call the initializePage 
initializePage();
