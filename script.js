

// var targetpos = 1000;

// var currentpos = 0;

// var scrollinter = setInterval(function ()
//  { if (currentpos >= targetpos)
//      {
//          clearInterval(scrollinter);
//           return; }
//            currentpos += 50;
//             window.scrollBy(0, 50);
//          }, 50);

// for scrolling it to a target pos




var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        // not move abruptly because it is prevented
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


// var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
// for(var i=0;i<navMenuAnchorTags.length;i++)
// {
//     navMenuAnchorTags[i].addEventListener('click',function(event)
//     {
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         console.log(targetSectionID);
//         var targetSection=document.getElementById(targetSectionID);
//         console.log(targetSection);


//        var interval=setInterval(function(){
//         var targetSectionCoordinates =targetSection.getBoundingClientRect();
//         if(targetSectionCoordinates.top<=0)
//         {
//             clearInterval(interval);
//             return;
//         }
//         window.scrollBy(0,50);
//        },20);
//     });
// }





// for the animations 
var progressBars=document.querySelectorAll('.skill-progress>div');
console.log(progressBars);
var skillsContainer=document.getElementById('skills-container');
console.log(skillsContainer);
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBars()
{
    for(let bar of progressBars)
    {
        bar.style.width=0+'%';
    }
}
initialiseBars();

function fillBars()
{
    for(let bar of progressBars)
    {
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentwidth=0;
        let interval=setInterval(function(){
            if(currentwidth>targetWidth)
            {
                clearInterval(interval);
                return;
            }
            currentwidth++;
            bar.style.width=currentwidth+ '%';
        },3);
    }
}


function checkScroll()
{
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight){
        animationDone=true;
        console.log("skills secctiooooon visible");
        fillBars();
    }
    else if(coordinates.top>window.innerHeight)
    {
        animationDone=false;
        initialiseBars();
    }
}



// var progressBars = document.querySelectorAll('.skill-progress>div');
// console.log(progressBars);
// window.addEventListener('scroll',checkscroll);
// var animationDone=false;



// function initialiseBars() {
//     for (let bar of progressBars) {
//         bar.style.width = 0 + "%";
//     }
// }

// function fillbar(  bar) {

//     for (let bar of progressBars) {
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currentwidth = 0;
//         let interval = setInterval(function () {
//             if (currentwidth > targetWidth) {
//                 clearInterval(interval);
//                 return;
//             }
//             currentwidth++;
//             bar.style.width = currentwidth + '%';
//         }, 1);
//         console.log(targetWidth);
//     }
// }

// function checkscroll()
// {
//     for(let bar of progressBars)
//     {
//         var coordinates=bar.getBoundingClientRect();
//         if(!animationDone && coordinates.top<window.innerHeight){
//                     animationDone=true;
//                     console.log("skills secctiooooon visible");
//                     fillbar(bar);
//                 }
//                 else if(coordinates.top>window.innerHeight)
//                 {
//                     animationDone=false;
//                     initialiseBars();
//                 }
//     }
// }


