function LaureatComponent(service) {
    this.service=service;
    this.body = document.getElementById("allAureats");
}

LaureatComponent.prototype.buildElement = function (name,content,className,src,attributes,values) {
    var element = document.createElement(name);
    if(content!==undefined)
    {
        element.innerHTML = content;
    }
    if(attributes!==undefined)
    {
        console.log("if");
        for(var i in attributes)
        {
            console.log("boucl");
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
LaureatComponent.prototype.buildSelectElement = function(name,...options)
{

    var divSelectElement = this.buildElement("div",undefined,"select-style inline");
    var selectElement = this.buildElement(name);
    for(var i in options)
    {

        var atts = ["value"];
        var values = [options[i]];
        var optionElement = this.buildElement("option",options[i],atts,values);
        selectElement.appendChild(optionElement);
    }
    divSelectElement.appendChild(selectElement);
    return divSelectElement;
};

LaureatComponent.prototype.buildFirstContainer = function () {
    var containerDiv = this.buildElement("div",undefined,"container");
    var promoSelectDiv = this.buildSelectElement("select","2020","2019","2018","2017");
    var locaSelectDiv = this.buildSelectElement("select","Maroc","Etranger");
    var societySelectDiv = this.buildSelectElement("select","Société","Capgemini","CGI FES","ATOS","Umanis"
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
LaureatComponent.prototype.clearData = function(){

}

LaureatComponent.prototype.filterBySociety = function () {
    this.service.filterBySociety("atos");
    console.log(this.service.laureats);
    var divContainer = document.getElementsByClassName("container second")[0];
    var number = document.getElementsByClassName("nbLaureat")[0];
    number.innerHTML = this.service.getSize()+" personnes trouvées";
    divContainer.remove();
    this.buildSecondContainer();

}
