function Click(Id, call) {
    document.getElementById(Id).addEventListener('click', call);
  }

Click('a1', function() {
    btnCount(); 
    calcValue(); 
});
Click('a2', function() {
    btnCount(); 
    calcValue(); 
});
Click('a3', function() {
    btnCount(); 
    calcValue(); 
});
Click('a4', function() {
    btnCount(); 
    calcValue(); 
});