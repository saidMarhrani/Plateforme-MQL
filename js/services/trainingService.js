function trainingService()
{
    this.trainings=[];
}
trainingService.prototype.load = function () {

    for(var i=0;i<trainingDB.length;i++)
    {
        this.trainings.push(
            new training(
                trainingDB[i].title,
                trainingDB[i].city,
                trainingDB[i].desc,
                trainingDB[i].date
            )
        )
    }
}