//Initial function when the + button is clicked

var addLiBtn = document.getElementById("addLi");
addLiBtn.addEventListener("click", addEntry);


/*function that creates a new entry. The below is created in order to 
  comply with Zurb Foundation's code structure. So each time a new 
  entry is create the following should happen.
  (1)We need to create a new row,
  (2)A small column for the row number,
  (3)A medium column for paragraph area for the entry,
  (4)A small column for button to remove the entry.
*/


// function to create new row
function addEntry() {
    var mainParagraph = document.getElementById("mainParagraph");
    var newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    newRow.setAttribute("id", "newRow");
    mainParagraph.appendChild(newRow);
    rowNumber();
    
    //function to create small column for the row number.
    function rowNumber() {
        var number = document.createElement("div");
        number.setAttribute("class", "small-1 column");
//        number.setAttribute("id", "rowNumber" + counter)
        var numberPara = document.createElement("p");
        numberPara.setAttribute("class", "numberPara");
        numberPara.innerHTML = ("");
        number.appendChild(numberPara);
        newRow.appendChild(number);
        
    }newEntry();
    
    //function to create a paragraph for each new entry.
    function newEntry() {
        var newToDoEntry = document.createElement("div");
        newToDoEntry.setAttribute("class", "small-8 column");
        var newEntryPara = document.createElement("p");
        newEntryPara.setAttribute("contenteditable", "true");
        newEntryPara.setAttribute("class", "textInput");
        newToDoEntry.appendChild(newEntryPara);
        newRow.appendChild(newToDoEntry);
           
    } removeBtn();
    
    //function to add a remove button on each entry
    function removeBtn() {
        var remove = document.createElement("div");
        remove.setAttribute("class", "small-1 column");
        var removeButton = document.createElement("button");
        removeButton.setAttribute("class", "tiny button");
//        removeButton.setAttribute("id", "remBtn" + counter)
        removeButton.addEventListener("click", removeRow);
        var buttonText = document.createTextNode("Remove");
        removeButton.appendChild(buttonText);
        remove.appendChild(removeButton);
        newRow.appendChild(remove);
        
    }addNumber();
}



//function to remove the selected row.
function removeRow() {
    var b = this.parentElement.parentElement;
    var removeNode = mainParagraph.removeChild(b);
    addNumber();
}

//function to add or refresh the number allocated to each row.
function addNumber() {
    var numberParaArray = document.getElementsByClassName("numberPara");
    for (var i = 0; i < numberParaArray.length; i++) {
        if(numberParaArray.length > 0){
            numberParaArray[i].innerHTML = i+1;
        }
    }
}





