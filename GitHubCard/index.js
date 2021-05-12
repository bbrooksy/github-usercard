import axios from 'axios';
const entryPoint = document.querySelector('div.cards');
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const myCard = axios.get('https://api.github.com/users/bbrooksy')
.then(data => {
  return data;
});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd','bigknell'];

const list = (arr) => {
  arr.forEach(u => {
    axios.get(`https://api.github.com/users/bbrooksy/followers`)
    .then(({data}) => {
      return data;
    })
  })
}
list(followersArray);
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cardMaker = (obj => {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('card');
  entryPoint.appendChild(mainDiv);
  
  const image = document.createElement('img');
  image.src = `${obj.avatar_url}`;
  mainDiv.appendChild(image);
  
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  mainDiv.appendChild(cardInfo);

  const legalName = document.createElement('h3');
  legalName.classList.add('name');
  legalName.textContent = `${obj.name}`;
  cardInfo.appendChild(legalName);

  const userName = document.createElement('p');
  userName.classList.add('username'); 
  userName.textContent = `${obj.login}`;
  cardInfo.appendChild(userName);

  const userLoc = document.createElement('p');
  userLoc.textContent = `Location: ${obj.location}`;
  cardInfo.appendChild(userLoc);

  const userProfile = document.createElement('p');
  userProfile.textContent = `Profile:`;
  cardInfo.appendChild(userProfile);

  const proLink = document.createElement('a');
  proLink.href = obj.html_url;
  proLink.textContent = obj.html_url; 
  userProfile.appendChild(proLink);

  const followers = document.createElement('p');
  followers.textContent = 'Followers: ' + obj.followers;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = 'Following: ' + obj.following;
  cardInfo.appendChild(following);

  const userBio = document.createElement('p');
  userBio.textContent = 'Bio: ' + obj.bio;
  cardInfo.appendChild(userBio);

  return myCard;
})

cardMaker(myCard)
cardMaker(list)
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
