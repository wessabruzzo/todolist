// Storage- declaring the class where the const storageInput is directed.
const storageInput = document.querySelector('.storage');
 
// Text- declaring the class where the const text is directed.
const text = document.querySelector('.items');
 
// Submit button- declaring the class where the const button is directed.
const button = document.querySelector('.button');

function view(){

    // Prevents the page from reloading which is the default action of forms
    e.preventDefault();

    if(localStorage.getItem('data') == null){
        document.getElementsByClassName('.items').textContent = JSON.parse(localStorage.getItem('data'));

}

}
 
// Change event is fired for elements when an alteration to the element's value is commited. Unlike input that is fired for every entry
storageInput.addEventListener('change', function saveInput(e) {

    // Prevents the page from reloading which is the default action of forms
    e.preventDefault();

    // Create new li. <li></>
    let newLi = document.createElement('li');

    // Add class
    newLi.className = '.items';
    //add attr
    newLi.setAttribute('title', 'Hello Li');
    // Create text node (a list item) just the value
    newLiText = document.createTextNode(text.textContent = e.target.value);
    console.log(newLiText);

    // If there is nothing saved at the start then save an empty array
    if(localStorage.getItem('data') == null){
    localStorage.setItem('data', '[]');
    }

    // Get old data and 
    let oldText = JSON.parse(localStorage.getItem('data'));
    console.log(oldText);
    // Slap it on the new data
    oldText.push(text.textContent); // JSON.stringify(e.target.value)
    // Save the old and new data to local storage
    localStorage.setItem('data', JSON.stringify(oldText));
})






/*
// Input the entered value through the text box to storage
storageInput.addEventListener('input', function letter(e) {
 
    // Prevents the page from reloading which is the default action of forms
    //e.preventDefault();
 
    // Create new li. <li></>
    let newLi = document.createElement('li');
    // Add class
    newLi.className = '.items';
    //add attr
    newLi.setAttribute('title', 'Hello Li');
    // Create text node (a list item) just the value
    let newLiText = document.createTextNode(text.textContent = e.target.value);
 
    // Adds item to local storage
    // JSON.stringify turns into string. localStorage only accepts strings
    window.localStorage.setItem(taskArray, 'the var for the changing items in the array');
})
    // Create taskArray with the value of the items in the array
    let taskArray = [
 
        
 
    ]


   
*/
 
/*
    // Get stored item 
    let storedTask = localStorage.getItem('task');
console.log(storedTask);
    // If no stored item, create an array. Otherwise, convert the localStorage string to an array
    storedTask = storedTask ? storedTask.split(',') : [];
 
    // Add new data to localStorage Array
    storedTask.push('JSON.stringify(newLiText.textContent'));
 
    // Save back to localStorage
    localStorage.setItem('New Item', storedTask.toString());
 
    // Create array for inputed to do items to go to
    let arrayLi = [
 
 
 
    ];
 
    // Input to text box
   // text.textContent = e.target.value
 
   //Add to storage
 
 
//console.log(e.target.value)
 
})
   
   
   var newDiv = document.createElement('div');
    newDiv.className = 'hello';
    newDiv.setAttribute('title', 'hello div');
    var newDivText = document.createTextNode('Hello Wess');
    newDiv.appendChild(newDivText);
    var container = document.querySelector('header .container');
    var h1 = document.querySelector('header .h1');
 
    console.log(newDiv);
    container.insertBefore(newDiv, h1);
 
*/
