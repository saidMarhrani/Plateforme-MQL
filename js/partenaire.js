var view;
function main() {
    var service = new PartnaireService();
    service.load();
    view = new PartenaireComponent(service);
    view.buildCard();
}

