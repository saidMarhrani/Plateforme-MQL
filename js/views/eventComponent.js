function eventComponent(service) {
    this.service = service;
    this.container = document.getElementsByClassName("container")[0];
}
eventComponent.prototype.buildElement = function (name,className,content,attributes,values) {
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
eventComponent.prototype.buildSelectElement = function(className,selectClassName,...options)
{
    var divSelectElement = this.buildElement("div",className);
    var selectElement = this.buildElement("select",selectClassName);


    for(var i in options)
    {

        var attributes = ["value"];
        var values = [options[i]];
        var optionElement = this.buildElement("option",undefined,options[i],attributes,values);
        selectElement.appendChild(optionElement);
        selectElement.addEventListener("onchange",this.filterByPromo);
    }
    divSelectElement.appendChild(selectElement);
    return divSelectElement;
};
eventComponent.prototype.buildInput = function(className,content,inputType)
{
    var div=this.buildElement("div",className);
    var pElement = this.buildElement("p",undefined,content);
    var inputElemet = this.buildElement("input",className+" "+content,undefined,["type"],[inputType]);
    div.appendChild(pElement);
    div.appendChild(inputElemet);
    return div;
}
eventComponent.prototype.buildForm = function () {
    var divForm = this.buildElement("div","form-div");
    var formElement = this.buildElement("form");
    var inputDiv = this.buildInput("date from","De","date");
    var inputDiv2 = this.buildInput("date to","A","date");
    var selectElement = this.buildSelectElement("select-style inline","catSelect","Catégorie","Compagne de stage","Tests psychotechniques"
    ,"Tests Techniques","Entretiens","Remise des Diplomes");
    var searchBtn = this.buildElement("button","search-btn","Rechercher");
    formElement.appendChild(inputDiv);
    formElement.appendChild(inputDiv2);
    formElement.appendChild(selectElement);
    formElement.appendChild(searchBtn);
    divForm.appendChild(formElement);
    this.container.appendChild(divForm);
}

eventComponent.prototype.buildEventCard = function (event) {
    var  divALL= this.buildElement("div","event-element");
    var divImg = this.buildElement("div","event-img");
    var imgElemet = this.buildElement("img",undefined,undefined,["src"],["../images/events/"+event.image]);
    divImg.appendChild(imgElemet);
    var divInfo = this.buildElement("div","event-info");
    var pTitle = this.buildElement("p",undefined,event.name);
    var spanElement = this.buildElement("span","date-event");
    var spanImg = this.buildElement("img","icon-event",undefined,["src"],["../icons/calendar.png"]);

    var date = document.createTextNode(event.date.getDay()+"-"+event.date.getMonth()+"-"+event.date.getFullYear());
    spanElement.appendChild(spanImg);
    spanElement.appendChild(date);


    divInfo.appendChild(pTitle);
    divInfo.appendChild(spanElement);

    divALL.appendChild(divImg);
    divALL.appendChild(divInfo);

    return divALL;
}

eventComponent.prototype.buildEvents = function () {
    var divEvents = this.buildElement("div","events");
    var pElement = this.buildElement("p",undefined,"Sélectionnez vos dates et découvrez les événements organisés par les MQListes.");
    divEvents.appendChild(pElement);
    for(var i=0;i<this.service.events.length;i++)
    {
        var eventDiv = this.buildEventCard(this.service.events[i]);
        divEvents.appendChild(eventDiv);
    }
    this.container.appendChild(divEvents);
}
eventComponent.prototype.updateEvents = function () {
    var eventsDiv = document.getElementsByClassName("events")[0];
    if(eventsDiv!==undefined)
    {
        eventsDiv.remove();
        this.buildEvents();
    }
}
eventComponent.prototype.filterByCatComponent = function (cat) {
    this.service.filterByCategorie(cat);
    this.updateEvents();
}
eventComponent.prototype.filterByDateComponent= function (dateD,dateF) {
    this.service.filterByDate(dateD,dateF);
    this.updateEvents();
}














