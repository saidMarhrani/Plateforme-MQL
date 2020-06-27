function Laureatmain() {
    this.service = new LaureatService();
    this.service.load();
    this.component = new  LaureatComponent(this.service);
   this.component.buildFirstContainer();
   this.component.buildSecondContainer();
    this.element = document.getElementsByClassName("promo")[0];

    this.element.addEventListener('change',selectByPromo);
    this.element2 = document.getElementsByClassName("society")[0];
    this.element3 = document.getElementsByClassName("location")[0];

    this.element2.addEventListener('change',selectBySociety);
    this.element3.addEventListener('change',selectByLocation);

    
}

function selectByPromo() {

    var service = new LaureatService();
    var component = new  LaureatComponent(service);
    component.filterByPromo(this.value);

}
function selectBySociety() {
    var service = new LaureatService();
    var component = new  LaureatComponent(service);
    component.filterBySociety(this.value);
}
function selectByLocation() {
    var service = new LaureatService();
    var component = new  LaureatComponent(service);
    component.filterByLocation(this.value);

}
