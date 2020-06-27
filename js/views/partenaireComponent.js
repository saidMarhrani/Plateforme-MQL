function PartenaireComponent(service) {
    this.service = service;
    this.body = document.getElementById("allCards");
    console.log(this.body);
}

PartenaireComponent.prototype.get=function(className){

    return document.getElementsByClassName(className)[0];
}



PartenaireComponent.prototype.buildElement = function (name,className,src,content) {


    var element = document.createElement(name);
    if(content!==undefined)
    {
        element.innerHTML = content;
    }
    if(className!==undefined)
    {

        element.className = className;
    }
    if(src!==undefined)
    {
        element.setAttribute("src",src);
    }
    return element;

}
PartenaireComponent.prototype.buildCardStructure = function(){

    var card =  this.buildElement("div","societe container");
    this.body.appendChild(card);
    return card;

}
PartenaireComponent.prototype.buildCardHead = function (imageUrl,desc,number) {
    var headDiv = this.buildElement("div","head-societe");
    var imageElement = this.buildElement("img",undefined,imageUrl);
    var pElement = this.buildElement("p",undefined,undefined,desc);
    if(number%2==0)
    {
        headDiv.appendChild(imageElement);
        headDiv.appendChild(pElement);
    }
    else
    {
        headDiv.appendChild(pElement);
        headDiv.appendChild(imageElement);
    }

    return headDiv;
}
PartenaireComponent.prototype.buildStaticDiv = function(staticNumber,staticName){

    var pNumber
    var staticImage = "../icons/addon.png";
    if(staticName=="chiffre d'affaire")
        pNumber= this.buildElement("p","number",undefined,staticNumber+" "+'<span class="turn-over">millions</span>');
    else
        pNumber= this.buildElement("p","number",undefined,staticNumber);

    var pText = this.buildElement("p",undefined,undefined,staticName);


    var spanText = this.buildElement("span","turn-over",undefined,"MILLIONS");
    var divCol = this.buildElement("div","societe-detail-second");
    var imgDetail = this.buildElement("img",undefined,staticImage);
    //pText.appendChild(spanText);
    divCol.appendChild(imgDetail);
    divCol.appendChild(pNumber);
    divCol.appendChild(pText);
    return divCol;
}
PartenaireComponent.prototype.buildCardBody = function (...args) {
    var staticNames = ["collaborateur","clients active","partenaires","chiffre d'affaire"];
    var bodyDive = this.buildElement("div","societe-info");
    for(var i in args)
    {
        var divCol = this.buildStaticDiv(args[i],staticNames[i]);
        bodyDive.appendChild(divCol);
    }
    return bodyDive;
}
PartenaireComponent.prototype.buildFooterCard = function (technologies) {
    var footerDiv = this.buildElement("div","societe-dev-lang");
    var pTitle = this.buildElement("p",undefined,undefined,"Les technologies");
    footerDiv.appendChild(pTitle);
    for(var i in technologies)
    {
        var fouterDivElement = this.buildElement("div","dev-lang "+i);
        var pTech = this.buildElement("p",undefined,undefined,technologies[i]);
        fouterDivElement.appendChild(pTech);
        footerDiv.appendChild(fouterDivElement);
    }
    return footerDiv;
}
PartenaireComponent.prototype.buildCard = function () {
    var allPart = this.service.partenaires;
    console.log(allPart);

    for(var i in allPart)
    {
        var imageUrl = "../images/"+allPart[i].image;
        var card = this.buildCardStructure();
        var cardHead = this.buildCardHead(imageUrl,allPart[i].desc,i);
        var cardBody = this.buildCardBody(allPart[i].nCol,allPart[i].nClient,allPart[i].nPar,
                                            allPart[i].nCA);
        var technologies = {
            dotnet : ".NET",
            java : "Java",
            js : "JavaScript",
            devops : "DevOps",
            bd : "Big Data"
        }
        var cardFooter = this.buildFooterCard(technologies);
        card.appendChild(cardHead);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
        this.body.appendChild(card);
    }
}
