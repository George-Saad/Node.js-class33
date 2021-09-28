
import fetch from 'node-fetch';

async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) {
    const jsonData = await response.json();
    return jsonData;
  } else {
    throw new Error('HTTP ERROR ' + response.status);
  }
}

async function printChuckNorrisJoke() {
  try {
    const joke = await fetchData('http://api.icndb.com/jokes/random');
    console.log(joke);
  } catch (err) {
    console.log(err);
  }
}

printChuckNorrisJoke();