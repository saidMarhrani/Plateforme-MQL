function eventService() {
    this.events = [];
}

eventService.prototype.load = function () {
    console.log(eventDB);
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

    console.log(cat);
    this.load();
    if(cat!="Catégorie")
    {
        console.log(this.trainings);
        this.events = this.events.filter(function (event) {
            return event.cat.toLowerCase() == cat.toLowerCase();
        });
    }

    return this.events;
};
eventService.prototype.filterByDate = function (dateD,dateF) {
    this.load();
    console.log(this.events);
    this.events = this.events.filter(function (event) {
        return (event.date>=dateD && event.date<=dateF);
    });
    console.log(this.events);
    return this.events;
}