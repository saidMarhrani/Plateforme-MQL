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
                trainingDB[i].date,
                trainingDB[i].salary,
                trainingDB[i].contratType,
                trainingDB[i].society
            )
        )
    }
}
trainingService.prototype.trier = function (trie) {
    this.load();
    console.log(this.trainings);
    if(trie=="Date")
    {
        this.trainings = this.trainings.sort((a, b)=>
        b.date-a.date);
    }
    else if(trie=="Salaire")
    {
        this.trainings = this.trainings.sort((a,b)=>
            b.salary-a.salary);
    }
    console.log(this.trainings);
    return this.trainings;
}
trainingService.prototype.filterByContrat = function (contrat) {

    this.load();
    if(contrat!="Type de contrat")
    {
        console.log(this.trainings);
        this.trainings = this.trainings.filter(function (training) {
            return training.contratType.toLowerCase() == contrat.toLowerCase();
        });
    }

    return this.trainings;
};
trainingService.prototype.filterBySociety = function (society) {

    this.load();
    if(society!="Société")
    {
        console.log(this.trainings);
        this.trainings = this.trainings.filter(function (training) {
            return training.society.toLowerCase() == society.toLowerCase();
        });
    }

    return this.trainings;
};
trainingService.prototype.filterByCity = function (city) {

    console.log(city);
    this.load();
    if(city!="Société")
    {
        console.log(this.trainings);
        this.trainings = this.trainings.filter(function (training) {
            return training.city.toLowerCase() == city.toLowerCase();
        });
    }

    return this.trainings;
};