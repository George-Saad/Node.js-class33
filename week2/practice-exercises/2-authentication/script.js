
import fetch from "node-fetch";

async function printBooks() {
  try {
    const response = await fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
      headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
    });
    const books = await response.json();
    console.log(books);
  } catch(err) {
    console.log(err);
  }
}

printBooks();