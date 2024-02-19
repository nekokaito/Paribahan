function Click(Id, call) {
    document.getElementById(Id).addEventListener('click', call);
  }
  function addColor (Id) {
    const me = document.getElementById(Id);
    me.classList.add('bg-green-500');
    me.classList.add("pointer-events-none");
  }
//  A Seats
Click('a1', function() {
    addColor('a1');
    btnCount(); 
    calcValue(); 
    ticketLeft (); 
    ticketList ('A1');
    
});
Click('a2', function() {
    addColor('a2');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
    ticketList ('A2');
});
Click('a3', function() {
    addColor('a3');
    btnCount(); 
    calcValue(); 
    ticketLeft () ;
    ticketList ('A3');
});
Click('a4', function() {
    addColor('a4');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
    ticketList ('A4');
});

// B Seats
Click('b1', function() {
    addColor('b1');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
    ticketList ('B1');
});
Click('b2', function() {
    addColor('b2');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
    ticketList ('B2');
});

Click('b3', function() {
    addColor('b3');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
    ticketList ('B3');
});

Click('b4', function() {
    addColor('b4');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
    ticketList ('B4');
});

// C Seats
Click('c1', function() {
    addColor('c1');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
    ticketList ('C1');
});
Click('c2', function() {
    addColor('c2');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
    ticketList ('C2');
});
Click('c3', function() {
    addColor('c3');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
    ticketList ('C3');
});
Click('c4', function() {
    addColor('c4');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
    ticketList ('C4');
});
