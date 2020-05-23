
 function onNavClick(){
    var k = document.getElementById("navClick");
    if (k.className === "list"){
        k.className+=" responsive";
    }
    else{
        k.className = "list";
    }

}