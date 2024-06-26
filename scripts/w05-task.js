/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {

  templesElement.innerHTML = "";

  temples.forEach(temple => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h3>${temple.templeName}</h3>
      <img src="${temple.imageUrl}" alt="${temple.location}" />
    `
    templesElement.appendChild(article);
  });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
  templeList = await response.json();

  displayTemples(templeList);
}

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = (temples) => {
  reset();

  const filter = document.getElementById('sortBy').value;

  switch (filter) {
    case "utah":
      const templesInUtah = temples.filter(temple => temple.location.includes("Utah"));
      displayTemples(templesInUtah)
      break;
    case "notutah":
      const templesOutsideOfUtah = temples.filter(temple => !temple.location.includes("Utah"));
      displayTemples(templesOutsideOfUtah)
      break;
    case "older":
      const templesBuiltBefore1950 = temples.filter(temple => {
        const dedicatedDate = new Date(temple.dedicated);
        const referenceDate = new Date("1950-01-01");
        return dedicatedDate < referenceDate;
      });
      console.log(templesBuiltBefore1950)
      displayTemples(templesBuiltBefore1950)
      break;
    case "all":
      displayTemples(temples)
    default:
      break;
  }
}


getTemples();

/* Event Listener */
const selectFilter = document.getElementById('sortBy');

selectFilter.addEventListener('change', () => {
  sortBy(templeList)
});
