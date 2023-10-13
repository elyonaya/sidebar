let menuOuvert = false;

function closeToOpen() {

    if(menuOuvert){
        document.getElementById("aside").style.display = "none";
        menuOuvert = false;
    }else{
        document.getElementById("aside").style.display = "block";
        menuOuvert = true;
}

}
document.getElementById("menu").addEventListener("click", closeToOpen)

function closeWithCross() {

    document.getElementById("aside").style.display = "none";
        
}

document.getElementById("close").addEventListener("click", closeWithCross)