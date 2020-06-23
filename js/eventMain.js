function Eventmain() {
    this.service = new eventService();
    this.service.load();
    this.component = new eventComponent(this.service);
    this.component.buildForm();
    this.component.buildEvents();


    var selectCategorie = document.getElementsByClassName("catSelect")[0];

    var searchButton = document.getElementsByClassName("search-btn")[0];
    searchButton.addEventListener("click",filterByDate);

    selectCategorie.addEventListener("change",filterByCategorie);
}

function filterByCategorie() {
    var service = new eventService();
    var component = new eventComponent(service);
    component.filterByCatComponent(this.value);
}
function filterByDate(event) {

    event.preventDefault();
    var inputDeElement = document.getElementsByClassName("De")[0].value;
    var inputDeElement2 = document.getElementsByClassName("A")[0].value;
    console.log(inputDeElement);
    if(inputDeElement=="" || inputDeElement2=="")
    {

        alert("entrez la date de début et de fin SVP");
    }
    else
    {
        var dateD = parseDate(inputDeElement);
        var dateF = parseDate(inputDeElement2)
        var service = new eventService();
        var component = new eventComponent(service);
        component.filterByDateComponent(dateD,dateF);
    }
}
function parseDate(s) {
    var b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
}