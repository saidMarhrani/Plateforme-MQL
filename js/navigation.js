function getElementById(id) {
    return document.getElementById(id);
}
function addActiveClass(id) {
    var index = getElementById(id);
    index.classList.add("active");
}
// function goToIndexPage()
// {
//     addActiveClass("index");
// }
// function goToContactusPage() {
//     addActiveClass("")
// }
//
// function goToLaureatsPage() {
//
// }

function goToPage(id)
{
    console.log(id);
    var pageClasses = document.getElementsByClassName("page-hide");
    for(var i in pageClasses)
    {
        if(pageClasses[i].id!=id && pageClasses[i].id!=undefined)
        {
            console.log(pageClasses[i].id);
            console.log(pageClasses[i]);
            pageClasses[i].style.display = "none";
        }
        else
        {
            if(pageClasses[i].id!=undefined)
            {
                pageClasses[i].style.display = "block";
                loadData(pageClasses[i].id);

            }
        }

    }
}
function loadData(pageData) {
    var divElement = getElementById(pageData);
    var allEvents= document.getElementsByClassName("allEvents")[0];
    switch (pageData) {
        case "allAureats" :
            divElement.innerHTML="";
            Laureatmain();
            break;

        case "training" :
            divElement.innerHTML="";
            Trainingmain();
            break;

        case "event-page" :
            allEvents.innerHTML="";
            Eventmain();
            break;

    }
}