let count = 0;
const GrandTotal = document.getElementById('grand-total');
const Total = document.getElementById('total');
const Ticket = document.getElementById('ticket-left');
const phone = document.getElementById('phone-text');

function ticketLeft () {
   const domTicket = parseInt(Ticket.textContent);
   let left = domTicket - 1;
   Ticket.innerText = left;
   
    
}
function ticketList(seatName) {
    const seat = document.getElementById('seat-container');
    const className = document.getElementById('class');
    const price = document.getElementById('price');
    const s = document.createElement("p");
    const c = document.createElement("p");
    const p = document.createElement("p");
    s.innerText = seatName;
    c.innerText = 'Economy';
    p.innerText = '550';
    seat.appendChild(s);
    className.appendChild(c);
    price.appendChild(p);

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
        my_modal_5.showModal();

    }
    else if (couponInput === "Couple 20") {
        Total = 2200 - 440;
        GrandTotal.innerText = Total;
        claim.classList.add('hidden');
        my_modal_5.showModal();
    }
    else {
        my_modal_1.showModal();
    }
 }



 function phnTextBtn() {
    
    const value = phone.value;
    const nextBtn = document.getElementById('next-btn');
    if (value.length >= 1 && count >= 1) {
        nextBtn.disabled = false;
    }
    else {
        nextBtn.disabled = true;
    }

 }
 phone.addEventListener("input", phnTextBtn);

 

function dialogClose() {
    reload();
}

   
 
  