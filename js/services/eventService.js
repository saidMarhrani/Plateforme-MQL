function eventService() {
    this.events = [];
}

eventService.prototype.load = function () {
    for(var i=0;i<eventDB.length;i++)
    {
        this.events.push(
            new eventModel(
                eventDB[i].name,
                eventDB[i].image,
                eventDB[i].cat,
                eventDB[i].date
            )
        )
    }

}
eventService.prototype.filterByCategorie = function (cat) {

    this.load();
    if(cat!="Catégorie")
    {
        this.events = this.events.filter(function (event) {
            return event.cat.toLowerCase() == cat.toLowerCase();
        });
    }

    return this.events;
};
eventService.prototype.filterByDate = function (dateD,dateF) {
    this.load();
    this.events = this.events.filter(function (event) {
        return (event.date>=dateD && event.date<=dateF);
    });
    return this.events;
}
