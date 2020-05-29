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