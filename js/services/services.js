import { HttpClient } from "./http-client.js";
import { ServiceResponse } from "./ServiceResponse.js";

// All heroes service
const heroesApiUrl = 'https://superhero-search.p.rapidapi.com';
const rapidApiKey = '139dd869d3msh35f91ca9aa8cf39p13150ejsnd462abd1548c';
const rapidApiHost = 'superhero-search.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': rapidApiKey,
    'X-RapidAPI-Host': rapidApiHost,
  },
};

const allSuperheroesHttpClient = new HttpClient(heroesApiUrl);

async function fetchSuperheroData() {
  try {
    const response = await allSuperheroesHttpClient.request("GET", "api/heroes", options);
    let json_response = await response.json();


    if (response.status === 200) {
      if (json_response.error) {
        return new ServiceResponse(false, json_response, `Error: ${json_response}`, null);
      }
      return new ServiceResponse(true, json_response, "Data fetched successfully", null);
    } else {
      return new ServiceResponse(false, null, `Failed to fetch data. Status: ${response.status}`, null);
    }
  } catch (error) {
    return new ServiceResponse(false, null, `Error: error`, error);
  }
}



// Specific hero service
const specificHeroApiUrl = 'https://superheroapi.com';
const accessToken = "321406566979053";
const specificHeroHttpClient = new HttpClient(specificHeroApiUrl);

async function fetchSpecificHeroData(id) {
  try {
    const response = await specificHeroHttpClient.request("GET", `api.php/${accessToken}/${id}`);
    let json_response = await response.json();

    if (response.status === 200) {
      if (json_response.error) {
        return new ServiceResponse(false, json_response, `Error: ${json_response}`, null);
      }
      return new ServiceResponse(true, json_response, "Data fetched successfully", null);
    } else {
      return new ServiceResponse(false, null, `Failed to fetch data. Status: ${response.status}`, null);
    }
  } catch (error) {
    return new ServiceResponse(false, null, `Error: error`, error);
  }
}


export { fetchSuperheroData, fetchSpecificHeroData };
