function main() {
    this.service = new eventService();
    this.service.load();
    this.component = new eventComponent(this.service);
    this.component.buildForm();
    this.component.buildEvents();

    var inputDeElement = document.getElementsByClassName("date from")[0];
    var inputDeElement2 = document.getElementsByClassName("date to")[0];
    var selectCategorie = document.getElementsByClassName("catSelect")[0];

    selectCategorie.addEventListener("change",filterByCategorie);
}

function filterByCategorie() {
    var service = new eventService();
    var component = new eventComponent(service);
    component.filterByCatComponent(this.value);
}