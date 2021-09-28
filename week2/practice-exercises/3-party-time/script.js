
import fetch from "node-fetch";

async function makeReservation() {
  const reservationBody = {
    name: "George Saad",
    numberOfPeople: 2
  };

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservationBody)
  };

  try {
    const response = await (await fetch('https://reservation100-sandbox.mxapps.io/api/reservations', fetchOptions)).json();
    //const reservationResponse = await response.json();
    console.log(response.message);
  } catch(err) {
    console.log(err);
  }
  
}

makeReservation();