
function addelement()
{
    var li = document.createElement("li"); 
    li.className ="checklist";
    var input = document.getElementById("searchbar").value;
    var t = document.createTextNode(input);
    li.appendChild(t);
    if(input=="")
    {
        alert("write something beaach");
    }
    else{
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("searchbar").value="";

    var delet = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    delet.className = "close";
    delet.appendChild(txt);
    li.appendChild(delet);

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}
function clearele()
{
    document.getElementById("list").innerHTML ="";
}
