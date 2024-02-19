let count = 0;
const GrandTotal = document.getElementById('grand-total');
const Total = document.getElementById('total');
const Ticket = document.getElementById('ticket-left');

function ticketLeft () {
   const domTicket = parseInt(Ticket.textContent);
   let left = domTicket - 1;
   Ticket.innerText = left;
   console.log(left);
    
}

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
        coupon.removeAttribute("disabled");
        
    }
    Total.innerText = sum;
    GrandTotal.innerText = sum;

 }
 function couponClick() {
    let Total = 0;
    const couponInput = document.getElementById('coupon-input').value;
    const claim = document.getElementById('coupon-claim');
    if (couponInput === "NEW15") {
        Total = 2200 - 330;
        GrandTotal.innerText = Total;
        claim.classList.add('hidden');

    }
    else if (couponInput === "Couple 20") {
        Total = 2200 - 440;
        GrandTotal.innerText = Total;
        claim.classList.add('hidden');
    }
    else {
        alert('Invalid');
    }
 }

   
 
  