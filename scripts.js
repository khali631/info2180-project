/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    
    const form=document.querySelector('form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
    const messageBox=document.getElementById('message-box');

    const emailInput=document.getElementById('email');
     const email=emailField.value.trim();
        if(email===''){
            messageBox.textContent='Please enter a valid email address.';
          } else; {
            messageBox.textContent='Thank you for adding your emai address!, ${email}has been added to our newsletter ';
          }
         
     });
});