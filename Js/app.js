function select(userSelection) {
    Cookies.set('selection', userSelection);
    window.open("page/selection.html", "_self");
}