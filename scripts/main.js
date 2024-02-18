function Click(Id, call) {
    document.getElementById(Id).addEventListener('click', call);
  }
 
   let count = 0;
     
   function btnCount() {
     count++;
     document.getElementById('countDisplay').textContent = count;
}
 function calcValue() {
    let countText = document.getElementById('countDisplay');
     let count = parseInt(countText.textContent);
    let sum = 550 * count;
    if (count === 4) {
        const seatDiv = document.getElementById('seat-button');
        seatDiv.classList.add("pointer-events-none");
    }

 }
  


   

Click('a1', function() {
    btnCount(); // Increment count and update display when a1 is clicked
    calcValue(); // Recalculate sum after each button click
});
Click('a2', function() {
    btnCount(); // Increment count and update display when a2 is clicked
    calcValue(); // Recalculate sum after each button click
});
Click('a3', function() {
    btnCount(); // Increment count and update display when a3 is clicked
    calcValue(); // Recalculate sum after each button click
});
Click('a4', function() {
    btnCount(); // Increment count and update display when a4 is clicked
    calcValue(); // Recalculate sum after each button click
});
   
 
  