var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var windowsList = [];
var tabCount;


function hot_edge(){
    // time gap removed since fully automating
    setTimeout(hot_edge_start, 1000);
}
function hot_edge_start() {
    // is mobile?
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        // mobile
        tabCount = 30;
    } else {
        // desktop
        tabCount = 40;
    }
    // error adjustment
    tabCount+=10;
    for(var i=0;i<tabCount;i++){
        var randomNum = Math.floor(Math.random() * 10);
        var randomWord = '';
        for ( var j = 0; j < randomNum; j++ ) {
            randomWord += characters.charAt(Math.floor(Math.random() * 62));
        }
        windowsList.push(window.open("https://www.bing.com/search?q=" + randomWord));
    }
    // wait for 30 seconds
    setTimeout(closeAllTabs, 45000);
}

// function to close all windows
function closeAllTabs(){
    for(var i=0;i<windowsList.length;i++){
        windowsList[i].close();
    }
    
    // window.open("https://www.youtube.com/watch?v=nmDsfhzXuX4");
    // window.open("https://youtu.be/evQGDpYGjNI")
    // window.open("https://www.youtube.com/watch?v=-4KRllZFaYg");
    // <iframe width="885" height="498" src="https://www.youtube.com/embed/nmDsfhzXuX4" title="EON CAR MODIFICATIONS | PAUL WALKER NISSAN SKYLINE LED STRIP | HOW TO FIT LED STRIP| DIVINE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    // window.open("https://rewards.bing.com/");
    setTimeout(openAds_1, 100);
}

function openAds_1(){
    window.open("https://youtu.be/evQGDpYGjNI")
    setTimeout(openAds_2, 3000);
}

function openAds_2(){
    window.open("https://youtu.be/nmDsfhzXuX4")
    setTimeout(openRewards, 3000);
}

function openRewards(){
    window.open("https://rewards.bing.com/");
}   

// ad player
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    events: {
        'onReady': onPlayerReady
    }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}
