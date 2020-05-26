function LaureatService() {
    this.laureats=[];

}

LaureatService.prototype.getSize = function()
{
    return this.laureats.length;
}
LaureatService.prototype.setLaureats = function(laureat)
{
    this.laureats = laureat;
}
LaureatService.prototype.getLaureats = function()
{
    return this.laureats
}
LaureatService.prototype.load = function () {
    console.log(laureatDb);
    for(var i=0;i<laureatDb.length;i++)
    {
        this.laureats.push(
            new Laureat(
                laureatDb[i].id,
                laureatDb[i].firstName,
                laureatDb[i].lastName,
                laureatDb[i].promo,
                laureatDb[i].ville,
                laureatDb[i].society,
                laureatDb[i].location,
                laureatDb[i].image
            )
        )
    }
    this.setLaureats(this.laureats);

};
LaureatService.prototype.filterByPromo = function (promo) {
    this.load();
    console.log(this.laureats);
    this.laureats = this.laureats.filter(function (laureat) {
        return laureat.promo.toLowerCase() == promo.toLowerCase();
    });
    return this.laureats;


}
LaureatService.prototype.filterBySociety = function (society) {

    this.load();
    console.log(this.laureats);
    this.laureats = this.laureats.filter(function (laureat) {
        return laureat.society.toLowerCase() == society.toLowerCase();
    });
    return this.laureats;
};
LaureatService.prototype.filterByLocation = function (location) {
    this.load();
    console.log(this.laureats);
    this.laureats = this.laureats.filter(function (laureat) {
        return laureat.location.toLowerCase() == location.toLowerCase();
    });
    return this.laureats;
}
LaureatService.prototype.checkSelect = function () {
    service.laureats = JSON.parse(localStorage.getItem("allLaureat"));
    component.updateSecondContainer();
    console.log(this.laureats);
}