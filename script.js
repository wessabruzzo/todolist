// Storage- declaring the class where the const storageInput is directed.
const userInput = document.querySelector('.input');
 
// Text- declaring the class where the const text is directed.
const text = document.querySelector('.items');
 
// Submit button- declaring the class where the const button is directed.
const button = document.querySelector('.button');
 
//Submits input to the document
button.addEventListener('click', function submitInput(e) {

    const input = userInput.value;
    e.preventDefault();
    // grab the  <ul>
    const todos = document.querySelector('.todos');
    todos.appendChild(document.createTextNode(userInput.value));


})


//
// Change event is fired for elements when an alteration to the element's value is commited. Unlike input that is fired for every entry
userInput.addEventListener('change', function saveInput(e) {
    
    // Prevents the page from reloading which is the default action of forms
    e.preventDefault();

    // If there is nothing saved at the start then save an empty arraay
    if(localStorage.getItem('data') == null){
        localStorage.setItem('data', '[]');
        }

    newLiText = document.createTextNode(text.textContent = e.target.value);


//Creating an array in localStorage
// Get old data and 
let oldText = JSON.parse(localStorage.getItem('data'));
console.log(oldText);
// Slap it on the new data
oldText.push(text.textContent); // JSON.stringify(e.target.value)
// Save the old and new data to local storage
localStorage.setItem('data', JSON.stringify(oldText));

})

