// Description: This file contains the client-side JavaScript code for the front-end of the application.
import { Chessground } from './chessground.min.js';
let currentFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const board = document.getElementById('board');
const chessground = Chessground(board, {
   highlight: {
    lastMove: false
   },
   animation: {
    enabled: true,
    duration: 500

  },
  events: {
     move: (orig, dest) => {
       console.log("from: ", orig , "to: ", dest);
      if (orig == "g1" && (dest !== "f3" && dest !== "h3")) {
          chessground.set({
            fen: currentFen
          });         
      }else{
         currentFen = chessground.getFen();
      }
      const audio = new Audio('./sound/move.wav');
      audio.play();
    },

    select: function (key) {
      console.log("selected: ", key);
    }

  }
});
const textInput = document.getElementById('textInput');
const applyButton = document.getElementById('ApplyButton');

applyButton.addEventListener('click', async () => {
  // Get the input value
  const inputText = textInput.value;

  // Create the POST request payload
  const payload = { FEN:inputText };
  const apiEndpoint = 'http://localhost:5005/api/fen';

 
    // Send the POST request using fetch
    const response = await fetch(apiEndpoint, {
      method: 'POST', // HTTP method
      headers: {
        'Content-Type': 'application/json', // Specify JSON content type
      },
      body: JSON.stringify(payload), // Convert the payload to a JSON string
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse JSON response
    }).then(data => {
      const fen = data.fen; // Extract the FEN string
      console.log("Fetched FEN from API:", fen);
      
       

      chessground.set({
        fen: fen
      });
      // console.log(chessground.getFen());

    })


});
  