function LaureatComponent(service) {
    this.service=service;
    this.body = document.getElementById("allAureats");
    this.promoElement = this.get("promo");
    this.societyElement = this.get("society");
    this.locaElement = this.get("location");
}

LaureatComponent.prototype.get = function(className)
{
    var element = document.getElementsByClassName(className)[0];
    return element;
}

LaureatComponent.prototype.buildElement = function (name,content,className,src,attributes,values) {
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
    if(src!==undefined)
    {
        element.setAttribute("src",src);
    }
    // if(type!==undefined)
    // {
    //     element.setAttribute("src",src);
    // }
    return element;
};
LaureatComponent.prototype.buildSelectElement = function(name,className,...options)
{
    var divSelectElement = this.buildElement("div",undefined,"select-style inline");
    var selectElement = this.buildElement(name,undefined,className);


    for(var i in options)
    {

        var attributes = ["value"];
        var values = [options[i]];
        var optionElement = this.buildElement("option",options[i],undefined,undefined,attributes,values);
        selectElement.appendChild(optionElement);
        selectElement.addEventListener("onchange",this.filterByPromo);
    }
    divSelectElement.appendChild(selectElement);
    return divSelectElement;
};

LaureatComponent.prototype.buildFirstContainer = function () {
    var containerDiv = this.buildElement("div",undefined,"container");
    var promoSelectDiv = this.buildSelectElement("select","promo","Promotion","2019-2021","2017-2019","2015-2017","2013-2015");
    var locaSelectDiv = this.buildSelectElement("select","location","Lieu","Maroc","Etranger");
        var societySelectDiv = this.buildSelectElement("select","society","Société","Capgemini","CGI FES","Atos","Umanis"
                        ,"Cegedime","Accenture","SQLI");
    var nbLaureat = this.service.getSize();
    var numberDiv = this.buildElement("div",undefined,"persons-number");
    var pNumber = this.buildElement("p",nbLaureat+" personnes trouvées","nbLaureat");
    numberDiv.appendChild(pNumber);

    containerDiv.appendChild(promoSelectDiv);
    containerDiv.appendChild(locaSelectDiv);
    containerDiv.appendChild(societySelectDiv);
    containerDiv.appendChild(numberDiv);
    this.body.appendChild(containerDiv);
    var element = document.getElementsByClassName("promo")[0];
    //element.addEventListener("onchange",this.filterByPromo(element.value));
};

LaureatComponent.prototype.buildLaureatDiv = function (laureat) {
    var imgUrl = "../icons/";
    var imgElement = this.buildElement("img",undefined,undefined,imgUrl +laureat.image);
    var imgDiv = this.buildElement("div",undefined,"laureat-img");
    var h2Element = this.buildElement("h2",laureat.lastName+" "+laureat.firstName);

    var pPromo = this.buildElement("p","Promo : ");
    var spanPromo = this.buildElement("span",laureat.promo);

    var psociety = this.buildElement("p","Société : ");
    var spanociety = this.buildElement("span",laureat.society);

    var pville = this.buildElement("p","Ville : ");
    var spanville = this.buildElement("span",laureat.ville);

    var divInfo = this.buildElement("div",undefined,"laureat-info");

    var laureatDiv = this.buildElement("div",undefined,"laureats");
    imgDiv.appendChild(imgElement);
    pPromo.appendChild(spanPromo);
    psociety.appendChild(spanociety);
    pville.appendChild(spanville);

    divInfo.appendChild(h2Element);
    divInfo.appendChild(pPromo);
    divInfo.appendChild(psociety);
    divInfo.appendChild(pville);

    laureatDiv.appendChild(imgDiv);
    laureatDiv.appendChild(divInfo);
    return laureatDiv;

}
LaureatComponent.prototype.buildSecondContainer = function () {

    var laureatsDiv = this.buildElement("div",undefined,"container second");
    for(var i in this.service.laureats)
    {
        var laureat = this.buildLaureatDiv(this.service.laureats[i]);
        laureatsDiv.appendChild(laureat);
    }
    this.body.appendChild(laureatsDiv);
}
LaureatComponent.prototype.buildAll = function () {
    var firstContainerDiv = this.buildFirstContainer();
    var secondContainerDiv = this.buildSecondContainer();
    // if(firstTime==true)
    // {
    //     this.body.appendChild(firstContainerDiv);
    //     this.body.appendChild(secondContainerDiv);
    // }
    // else
    // {
    //     this.body.appendChild(secondContainerDiv);
    // }

}
LaureatComponent.prototype.updateSecondContainer = function(){
    var divContainer = document.getElementsByClassName("container second")[0];
    var number = document.getElementsByClassName("nbLaureat")[0];
    number.innerHTML = this.service.getSize()+" personnes trouvées";
    if(divContainer!==undefined)
    {
        divContainer.remove();
    }
    this.buildSecondContainer();
}

LaureatComponent.prototype.filterBySociety = function (society) {
    console.log( this.service.laureats);
    this.service.setLaureats(this.service.filterBySociety(society));
    this.updateSecondContainer();
    console.log( this.service.laureats);
}
LaureatComponent.prototype.filterByPromo = function (promo) {

    // var tab=["Promotion","Lieu","Société"];
    // if(promo=="Promotion")
    // {
    //     this.filterByPromo(this.value);
    // }
    // else if(tab.includes(element2.value) )
    // {
    //     console.log("je suis entreer");
    //     this.service.load();
    //     this.updateSecondContainer();
    // }
    // else
    // {
    //     this.service.laureats = JSON.parse(sessionStorage.getItem("allLaureat"));
    //     console.log(this.service.laureats);
    //     this.updateSecondContainer();
    // }
    // this.service.filterByPromo(promo);
    // this.updateSecondContainer();
    console.log( this.service.laureats);
    this.service.setLaureats(this.service.filterByPromo(promo));
    this.updateSecondContainer();
    console.log( this.service.laureats);

}
LaureatComponent.prototype.filterByLocation = function (location) {
    console.log( this.service.laureats);
    this.service.laureats=this.service.filterByLocation(location);
    this.updateSecondContainer();
    console.log( this.service.laureats);
}