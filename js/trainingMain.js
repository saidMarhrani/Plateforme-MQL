function Trainingmain() {
    this.service = new trainingService();
    this.service.load();


    this.component = new trainingComponent(this.service);
    this.component.buildForm();
    this.component.buildAll();
    var selectElement1 = document.getElementsByClassName("trie")[0];
    var selectElement2 = document.getElementsByClassName("contrat")[0];
    var selectElement3 = document.getElementsByClassName("society")[0];
    var searchButton = document.getElementsByClassName("search-btn")[0];
    var inputSearch = document.getElementsByClassName("input-city")[0];

    selectElement1.addEventListener("change",trie);
    selectElement2.addEventListener("change",filterByContat);
    selectElement3.addEventListener("change",filterBySociety);
    searchButton.addEventListener("click",filterByCity);

}
function filterByCity(event) {
    event.preventDefault();
    var inputSearch = document.getElementsByClassName("input-city")[0];
    if(inputSearch.value=="")
    {
        alert("entrez une ville SVP");
    }
    else
    {
        var service = new trainingService();
        var component = new trainingComponent(service);
        component.filterByCityComponent(inputSearch.value);
    }

}


function trie() {
    console.log(this.value);
    var service = new trainingService();
    var component = new trainingComponent(service);
    component.trieComponent(this.value);

}
function filterByContat() {
    console.log(this.value);
    var service = new trainingService();
    var component = new trainingComponent(service);
    component.filterByContratComponent(this.value);

}
function filterBySociety() {
    console.log(this.value);
    var service = new trainingService();
    var component = new trainingComponent(service);
    component.filterBySocietyComponent(this.value);

}
