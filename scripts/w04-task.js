/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: 'Dalia Rojas',
    photo: 'images/profilepic.jpg',
    favoriteFoods: ['Papa a la Huancaina', 'Tacos', 'Italian Food'],
    hobbies: ['Reading', 'Scrapbooking', 'Playing Video Games', 'Outdoors'],
    placesLived: [],
  
  };
  
  /* Populate Profile Object with placesLive objects */
  myProfile.placesLived.push(
    {
      place: 'Orlando, Florida',
      length: '11 years'
    },
  );
  
  
  
  /* DOM Manipulation - Output */
  
  /* Name */
  let profileName = document.getElementById('name');
  profileName.textContent = myProfile.name;
  
  /* Photo with attributes */
  let profilePhoto = document.getElementById('photo');
  profilePhoto.setAttribute('alt', myProfile.name);
  profilePhoto.setAttribute('src', myProfile.photo);
  
  /* Favorite Foods List*/
  let favoriteFoods = document.getElementById('favorite-foods');
  
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    favoriteFoods.appendChild(li);
  });
  
  /* Hobbies List */
  let hobbies = document.getElementById('hobbies');
  
  myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    hobbies.appendChild(li);
  });
  
  /* Places Lived DataList */
  
  let placesLive = document.getElementById('places-lived');
  
  myProfile.placesLived.forEach(places => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
  
    dt.textContent = '🏡 '+places.place;
    dd.textContent = places.length;
  
    placesLive.appendChild(dt);
    placesLive.appendChild(dd);
  });

