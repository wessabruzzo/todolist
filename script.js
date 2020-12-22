// Storage- declaring the class where the const storageInput is directed.
const storageInput = document.querySelector('.storage');

// Text- declaring the class where the const text is directed.
const text = document.querySelector('.items');

// Submit button- declaring the class where the const button is directed.
const button = document.querySelector('.button');

// Input the entered value through the text box to storage
storageInput.addEventListener('input', function letter(e) {

    // Conditional to create new li for each new To Do item. If 


    // Create new li
    let newLi = document.createElement('li');
    // Add class
    newLi.className = '.items';
    //add attr
    newLi.setAttribute('title', 'Hello Li');
    console.log(newLi);
    // Create text node (a list item)
    let newLiText = document.createTextNode(text.textContent = e.target.value);
    console.log(newLiText);

    // Turn to string localStorage only accepts strings
    window.localStorage.setItem('A to do item', JSON.stringify(newLiText.textContent));

    // Create an array for the To Do items to be listed in
    // = newLiText.textContent 

    // Input to text box
   // text.textContent = e.target.value

   //Add to storage
    //window.localStorage.setItem('To Do Item', '')
console.log(e.target.value)

})
   /* 
   
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
