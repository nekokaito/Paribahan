function Click(Id, call) {
    document.getElementById(Id).addEventListener('click', call);
  }
  function addColor (Id) {
    const me = document.getElementById(Id);
    me.classList.add('bg-green-500');
  }

Click('a1', function() {
    addColor('a1');
    btnCount(); 
    calcValue(); 
    ticketLeft (); 
});
Click('a2', function() {
    addColor('a2');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
});
Click('a3', function() {
    addColor('a3');
    btnCount(); 
    calcValue(); 
    ticketLeft () ;
});
Click('a4', function() {
    addColor('a4');
    btnCount(); 
    calcValue(); 
    ticketLeft ();
});