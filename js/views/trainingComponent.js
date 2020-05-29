function trainingComponent(service)
{
    this.service = service;
    this.container = document.getElementsByClassName("container")[0];


}

trainingComponent.prototype.buildElement = function (name,className,content,attributes,values) {
    var element = document.createElement(name);
    if(content!==undefined)
    {
        element.innerHTML = content;
    }
    if(attributes!==undefined)
    {
        for(var i in attributes)
        {
            element.setAttribute(attributes[i],values[i]);
        }
    }
    if(className!==undefined)
    {

        element.className = className;
    }
    // if(src!==undefined)
    // {
    //     element.setAttribute("src",src);
    // }
    // if(type!==undefined)
    // {
    //     element.setAttribute("src",src);
    // }
    return element;
};
trainingComponent.prototype.buildSelectElement = function(classNameDiv,selectClassName,...options)
{
    var divSelectElement = this.buildElement("div",classNameDiv);
    var selectElement = this.buildElement("select",selectClassName);
    for(var i in options)
    {
        var attributes = ["value"];
        var values = [options[i]];
        var optionElement = this.buildElement("option",undefined,options[i],attributes,values);
        selectElement.appendChild(optionElement);

    }
    divSelectElement.appendChild(selectElement);
    return divSelectElement;
};
trainingComponent.prototype.buildSerachCity = function()
{
    var divSearchCity = this.buildElement("div","search-city");
    var pElement = this.buildElement("p",undefined,"Où",["id"],["where"]);
    var pElement2 = this.buildElement("p",undefined,"Ville ou région",["id"],["city"]);
    var inputElement = this.buildElement("input","input-city",undefined,["type"],["text"]);
    var imgElement = this.buildElement("img","map-icon",undefined,
        ["width","height","src"],["15px","15px","../icons/maps-and-flags (2).png"]);
    var buttElement = this.buildElement("button","search-btn","Rechercher");
    divSearchCity.appendChild(pElement);
    divSearchCity.appendChild(pElement2);
    divSearchCity.appendChild(inputElement);
    divSearchCity.appendChild(imgElement);
    divSearchCity.appendChild(buttElement);
    return divSearchCity;


};
trainingComponent.prototype.buildForm = function () {
    var divElement = this.buildElement("div","form");
    var formElement = this.buildElement("form");
    var divSearchCity = this.buildSerachCity();
    formElement.appendChild(divSearchCity);

    var selectElemnt1 = this.buildSelectElement("select-style inline","trie","Tri par","Date","Salaire");
    var selectElemnt2 = this.buildSelectElement("select-style inline","contrat","Type de contrat","CDI","CDD","Stage");
    var selectElemnt3 = this.buildSelectElement("select-style inline","society","Société","Capgemini","CGI FES","Atos","Umanis"
        ,"Cegedime","Accenture","SQLI");
    formElement.appendChild(selectElemnt1);
    formElement.appendChild(selectElemnt2);
    formElement.appendChild(selectElemnt3);
    divElement.appendChild(formElement);
    var hrElement = this.buildElement("hr",undefined,undefined,["style"],
        ["background-color: #ccc; color: #ccc"]);
    this.container.appendChild(divElement);
    this.container.appendChild(hrElement);
}

trainingComponent.prototype.buildTrainingCard = function (training) {

    var trainigDiv = this.buildElement("div","training-notif");
    var divSup = this.buildElement("div");
    var h2Title = this.buildElement("h2","training-title",training.title);
    var pCity =  this.buildElement("p","training-city training-city",training.city);
    var pdesc =  this.buildElement("p","training-desc training-desc",training.desc);
    var pDate =  this.buildElement("p","training-city training-date",training.date);

    divSup.appendChild(h2Title);
    divSup.appendChild(pCity);
    divSup.appendChild(pdesc);
    divSup.appendChild(pDate);

    trainigDiv.appendChild(divSup);
    return trainigDiv;
}
trainingComponent.prototype.buildEmailCard = function () {
    var cardDiv = this.buildElement("div","recieve-emails");
    var pElement = this.buildElement("p",undefined,"Simplifiez-vous la vie ! Recevez par email les nouveaux emplois correspondant à cette recherche.");
    var divForm = this.buildElement("div","create-email-dialog");
    var pElement2 = this.buildElement("p",undefined,"Mon email :");
    var formElement = this.buildElement("form");
    var divInput = this.buildElement("div");
    var inputEl = this.buildElement("input","email-dialog input-city",undefined,
        ["type","placeholder"],["email","Example@gmail.com"]);
    divInput.appendChild(inputEl);
    var divButton = this.buildElement("div");
    var  buttValid = this.buildElement("button","validate-btn search-btn","Valider");
    divButton.appendChild(buttValid);
    formElement.appendChild(divInput);
    formElement.appendChild(divButton);
    divForm.appendChild(pElement2);
    divForm.appendChild(formElement);

    var pElement3 = this.buildElement("p","email-dialog-alert","En créant une alerte emploi ou" +
        " en recevant des emplois recommandés, vous acceptez nos conditions d'utilisation. Vous pouvez revenir à tout moment sur" +
        " cette décision en vous désinscrivant ou en suivant la procédure décrite dans nos conditions d'utilisation.");
    cardDiv.appendChild(pElement);
    cardDiv.appendChild(divForm);
    cardDiv.appendChild(pElement3);
    return cardDiv
}
trainingComponent.prototype.buildAllTraining = function () {
    var divTrainings = this.buildElement("div","trainings");
    var pElment = this.buildElement("p",undefined,"Emplois Stage Pré-embauche - Ville");
    divTrainings.appendChild(pElment);
    for(var i=0;i<this.service.trainings.length;i++)
    {
        var trainingCard = this.buildTrainingCard(this.service.trainings[i]);
        divTrainings.appendChild(trainingCard)
    }
    return divTrainings;
    //this.container.app
}

trainingComponent.prototype.buildAll = function () {
    var divTrainings = this.buildAllTraining();
    var email = this.buildEmailCard();
    var all = this.buildElement("div","inline all");
    all.appendChild(divTrainings);
    all.appendChild(email);
    this.container.appendChild(all);
}
trainingComponent.prototype.trieComponent = function(trie){
    console.log("dddd"+trie);
    this.service.trier(trie);
    this.updateTrainings();
}
trainingComponent.prototype.updateTrainings = function () {
    var divElement = document.getElementsByClassName("all")[0];
    console.log(divElement);
    if(divElement!==undefined)
    {
        console.log("ccccc");
        divElement.remove();
        this.buildAll();
    }
    //this.buildAll();
}
trainingComponent.prototype.filterByContratComponent = function (contraType) {
    this.service.filterByContrat(contraType);
    this.updateTrainings();
}
trainingComponent.prototype.filterBySocietyComponent = function (society) {
    this.service.filterBySociety(society);
    this.updateTrainings();
}
trainingComponent.prototype.filterByCityComponent = function (city) {
    this.service.filterByCity(city);
    this.updateTrainings();
}