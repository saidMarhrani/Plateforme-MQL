function LaureatService() {
    this.laureats=[];
}

LaureatService.prototype.getSize = function()
{
    return this.laureats.length;
}
LaureatService.prototype.load = function () {
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
};
LaureatService.prototype.filterBySociety = function (society,location="maroc",promo) {
    this.laureats = this.laureats.filter(function (laureat) {
        return laureat.society == society;
    });

}