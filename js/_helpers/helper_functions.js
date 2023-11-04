
'use strict'
export function createCards(cardData) {

  // Delete all elements inside div
  $('#card-container').empty();

  // Iterate over the cardData array and create card divs
  cardData.forEach((cardInfo, index) => {


    // Create a new card div element
    const cardDiv = document.createElement("div");
    cardDiv.className = "card mx-auto my-3";
    cardDiv.style.width = "18rem";

    // Add a data attribute to identify the card
    cardDiv.setAttribute("data-card-id", index);

    // Create the card image element
    const cardImage = document.createElement("img");
    cardImage.src = cardInfo.imageUrl;
    cardImage.className = "card-img-top";
    cardImage.alt = `${cardInfo.name} Image`;

    // Create the card body element
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Create individual <p> elements for each piece of information
    const fullNameParagraph = document.createElement("p");
    fullNameParagraph.className = "card-text";
    const firstAppearanceParagraph = document.createElement("p");
    firstAppearanceParagraph.className = "card-text";
    const placeOfBirthParagraph = document.createElement("p");
    placeOfBirthParagraph.className = "card-text";
    const alterEgosParagraph = document.createElement("p");
    alterEgosParagraph.className = "card-text";

    // Set the text content for each <p> element
    fullNameParagraph.textContent = `Name: ${cardInfo.name || cardInfo["biography"]["fullName"]}`;
    firstAppearanceParagraph.textContent = `First Appearance: ${cardInfo["biography"]["firstAppearance"]}`;
    placeOfBirthParagraph.textContent = `Place Of Birth: ${cardInfo["biography"]["placeOfBirth"]}`;
    alterEgosParagraph.textContent = `Alter Egos: ${cardInfo["biography"]["alterEgos"]}`;


    // Append each <p> element to the card body
    cardBody.appendChild(fullNameParagraph);
    cardBody.appendChild(firstAppearanceParagraph);
    cardBody.appendChild(placeOfBirthParagraph);
    cardBody.appendChild(alterEgosParagraph);

    // Add link to description
    const link = document.createElement("a");
    link.href = cardInfo.link;
    link.textContent = "See more"
    cardBody.appendChild(link)

    // Append elements to the card div
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardBody);



    // Append the card div to the card container
    const cardContainer = document.getElementById("card-container");
    cardContainer.appendChild(cardDiv);
  });
}



export function appendData(parent, dataObject) {
  let skipIteration = false;
  let counter = 0;

  for (let key in dataObject) {
    skipIteration = false;

    // If there is noSet the flag to true to skip this iteration
    if (Array.isArray(dataObject[key]) && dataObject[key][0][0] === "-") {

      skipIteration = true;
    }

    if (!skipIteration && dataObject[key] !== "-" && dataObject[key] !== "" && dataObject[key] !== "null") {
      // Create element and append it
      const p = document.createElement("p");
      p.classList.add("text-content");
      p.innerHTML = `${key.toUpperCase()}: ${dataObject[key]}`;
      parent.appendChild(p);
      // Counter
      counter += 1;
    }

  }

  // If no element was appended there isn't any data
  if (counter === 0) {
    const p = document.createElement("p");
    p.classList.add("text-content");
    p.innerHTML = "No Data";
    parent.appendChild(p);
  }
}

export function powerStats(parent, statsObject) {

  for (let stat in statsObject) {
    // Parent div
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("progress", "my-2");
    parentDiv.role = "progresbar";

    // Child div
    const childDiv = document.createElement("div");

    // Set color based on stat level
    if (statsObject[stat] < 25) {
      childDiv.classList.add("progress-bar", "bg-danger");
    }
    else if (statsObject[stat] > 25 && statsObject[stat] <= 50) {
      childDiv.classList.add("progress-bar", "bg-warning");
    }
    else if (statsObject[stat] > 50 && statsObject[stat] < 75) {
      childDiv.classList.add("progress-bar");
    }
    else {
      childDiv.classList.add("progress-bar", "bg-success");
    }

    // Set stat level
    childDiv.style.width = `${statsObject[stat]}%`;
    childDiv.innerHTML = `${stat}`;

    parentDiv.appendChild(childDiv);
    parent.appendChild(parentDiv);
  }

}
