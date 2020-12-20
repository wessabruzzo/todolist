let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', deleteItem);

// Add item
function addItem(e){ 
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Local Storage
    // Convert variable newItem a string
    let newItemSerialized = JSON.stringify(newItem);
    console.log(newItemSerialized);
    // Put variable into local storage
    localStorage.setItem("newItem", newItemSerialized);
    console.log(localStorage);
    // Convert string to a variable
    let newItemDeserialized = JSON.parse(localStorage.getItem("newItem"));
    console.log(newItemDeserialized);

    // Create new li Element
    let li = document.createElement('li');

    // Add class 
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItemDeserialized));

    // Setting destination for text node with input value 
    itemList.appendChild(li);

    // Create delete button
    let deletebtn = document.createElement('button');

    // Add class to delete button
    deletebtn.className = 'delete-btn';

    // Add text node with input value 
    deletebtn.appendChild(document.createTextNode('X'));

    // Set destination for text node with input value 
    li.appendChild(deletebtn)
    
    // Action that deletes the list item
    deletebtn.addEventListener('submit', deleteItem);

    }

        // Delete item function
        function deleteItem(e){
            if(e.target.classList.contains('delete-btn')){
                    var li = e.target.parentElement;
                    itemList.removeChild(li);
                    // Delete from storage
                    localStorage.removeItem("newItem");
                }
            }
        
    // Select input value of the text box 

    //I'm targeting the value of newItem idk how to reset it. It's asking me to create a function for .reset but, I still dont know how. Maybe creating a function that states once the input is larger than 0 and that input is entered to reset the input to 0
  
/*
newItem.reset();       
 resetNewItem.reset('item').value;
    function resetNewItem() {

        for (let i = item.length - 1; i > 0; i-= 1) {

            console.log(`${i}. ${item[i]}`);

    }
*/

    //document.getElementById('item')
    //resetNewItem = document.getElementById('item').reset();
    //resetNewItem = document.getElementById('item').reset();

