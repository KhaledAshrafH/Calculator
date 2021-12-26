document.getElementById("Display").value="";
function insertElem(num){
    return document.getElementById("Display").value+=num;
}


function Equal(){
    return document.getElementById("Display").value=eval(document.getElementById("Display").value);
}

function Clear(){
    return document.getElementById("Display").value="";
}

