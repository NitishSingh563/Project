const buttons = document.querySelectorAll ('.button');
const body = document.querySelector("body");

buttons.forEach(function(button) {
     button.addEventListener('click', function(e){
          if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;   
          }
          if (e.target.id === 'Green') {
            body.style.backgroundColor = e.target.id;   
          }
          if (e.target.id === 'Orange') {
            body.style.backgroundColor = e.target.id;   
          }
          if (e.target.id === 'Yellow') {
            body.style.backgroundColor = e.target.id;   
          }
          if (e.target.id === 'Purple') {
            body.style.backgroundColor = e.target.id;   
          }
          if (e.target.id === 'Brown') {
            body.style.backgroundColor = e.target.id;   
          }
     });
});