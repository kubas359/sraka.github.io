let word;
document.getElementById("myImage").onclick = function(){
    word = document.getElementById("myText").value;
    console.log(word);
    document.getElementById("myDis").innerHTML = word;
}