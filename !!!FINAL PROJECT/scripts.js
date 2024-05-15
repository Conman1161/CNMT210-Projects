function playWinton() {
   //Sometimes the audio just randomly doesn't play anymore??? Unsure why, but it usually happens after a few consecutive reloads
   document.getElementById("winton_greetings").play();
   window.alert("Winton welcomes you!");
};

function addToOWDiv() {
   let newHTML = '<p>Fun fact: My highest rank in Overwatch ever has been Grandmaster, which is now the 2nd highest rank possible!</p>'
   document.getElementById('addToMe').innerHTML = newHTML;
}

// Update the count down every 1 second
function startGradTimer() {
   // Set the date we're counting down to
   let countDownDate = new Date("Jun 1, 2026 12:00:00").getTime();

   setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="countdown"
      document.getElementById(
         "countdown"
      ).innerHTML = `Set to graduate in approximately: ${days}d ${hours}h ${minutes}m ${seconds}s`;

      // If the count down is over, write some text
      if (distance < 0) {
         clearInterval(x);
         document.getElementById("countdown").innerHTML = "Congratulations, you should be graduated!";
      }
   }, 1000);
}

function setRankTable() {
   let rankData = {
      seasons: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten (Current)"],
      finalRanks: ["Diamond 5", "Diamond 4", "Masters 5", "Diamond 3", "Diamond 3", "Plat 1", "Masters 5", "Grandmaster 5", "Masters 5", "Masters 5"],
      peakRanks: ["Diamond 4", "Diamond 3", "Masters 4", "Masters 4", "Diamond 3", "Diamond 5", "Masters 5", "Grandmaster 5", "Masters 4", "Masters 5"],
      seasonPlaytime: [68, 46, 33, 38, 2, 36, 41, 42, 46, 10]
   }
   // window.alert('test1')
   let table = document.getElementById('owRanks');
   // window.alert('test2')
   // window.alert('test3')

   let tableHeaderArray = ["Season", "Final Rank", "Peak Rank", "Hours Played"]

   //for head Table Header, loop for relevant data
   let tbl = document.createElement("table");
   let tblHeader = document.createElement("thead");
   let tblBody = document.createElement("tbody");
   let tblFoot = document.createElement("tfoot");

   //header
   for (let i = 0; i < tableHeaderArray.length; i++) {
      let headerRow = document.createElement('th');
      // console.log(tableHeaderArray[i]);
      headerRow.appendChild(document.createTextNode(tableHeaderArray[i]))
      tblHeader.appendChild(headerRow);
   }
   tbl.appendChild(tblHeader);

   //each columns
   for (let rowNumber = 0; rowNumber < rankData.finalRanks.length; rowNumber++) {
      let newTable = document.createElement('tr');
      let seasonItem = document.createElement('td');
      let finalRankItem = document.createElement('td');
      let peakRankItem = document.createElement('td');
      let hoursPlayedItem = document.createElement('td');

      seasonItem.appendChild(document.createTextNode(`${rankData.seasons[rowNumber]}`));
      finalRankItem.appendChild(document.createTextNode(` ${rankData.finalRanks[rowNumber]}`));
      peakRankItem.appendChild(document.createTextNode(`${rankData.peakRanks[rowNumber]}`));
      hoursPlayedItem.appendChild(document.createTextNode(`${rankData.seasonPlaytime[rowNumber]}`));

      newTable.appendChild(seasonItem);
      newTable.appendChild(finalRankItem);
      newTable.appendChild(peakRankItem);
      newTable.appendChild(hoursPlayedItem);
      tblBody.appendChild(newTable);
   }

   tbl.appendChild(tblHeader);
   tbl.appendChild(tblBody);
   tbl.appendChild(tblFoot);
   table.innerHTML = tbl.innerHTML;
}
