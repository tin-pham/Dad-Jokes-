const url = 'https://icanhazdadjoke.com/';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
};
function getNewJoke() {
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Bad HTTP Request');
      }
    })
    .then((data) => {
      //   Apply joke to the page
      const jokeElement = document.getElementById('joke');
      jokeElement.innerHTML = data.joke;
    });
}

// Get our first joke by default
getNewJoke();

//   Click button and change joke
const button = document.querySelector('button');

button.addEventListener('click', () => {
  getNewJoke();
});
