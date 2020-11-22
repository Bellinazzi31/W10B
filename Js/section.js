function clearSelection() {
    Cookies.remove('selection');
    window.open("../index.html", "_self");
}

var userSelection = Cookies.get('selection');

if(userSelection == 'pikachu') {
    document.getElementById("selection-container").innerHTML = "<p> Pikachu </P>";

}
else if(userSelection == 'charmander') {
    document.getElementById("selection-container").innerHTML = "<p> Charmander </P>";

}
else if(userSelection == 'squirtle') {
    document.getElementById("selection-container").innerHTML = "<p> Suirtle </P>";

} 
else {
    document.getElementById("selection-container").innerHTML = "<p> Invalid choice </P>";
}