function PartnaireService() {
    this.partenaires = [];
}

PartnaireService.prototype.load = function () {
    for(var i=0;i<partenairesDB.length;i++)
    {
        this.partenaires.push(
            new Partenaire(
                partenairesDB[i].id,
                partenairesDB[i].description,
                partenairesDB[i].image,
                partenairesDB[i].nCollaborateur,
                partenairesDB[i].nClient,
                partenairesDB[i].nPartenaires,
                partenairesDB[i].nCA
            )
        )
    }
}
