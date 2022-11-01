console.log("inside script file...");
document.getElementById("warning").style.display = "none";
var listView = document.getElementById("list-view");
var count = 0;

document.getElementById("addItem").addEventListener("click", function(event){

    console.log("inside click event");
    var inputValue = document.getElementById("item").value;
    console.log(inputValue);
    if(inputValue == ""){
        document.getElementById("warning").style.display = "inline-block";
    } else {
        document.getElementById("warning").style.display = "none";
        count++;
    
    var listElt = document.createElement("li");
    listElt.innerText = inputValue;
    if(count % 2 === 0) {
        listElt.style.color = "red";
    }
    listView.appendChild(listElt);
    document.getElementById("item").value = "";
}

})