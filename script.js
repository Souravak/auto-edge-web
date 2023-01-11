var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var windowsList = [];
var tabCount;
function hot_edge(){
    setTimeout(hot_edge, 30000);
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
    setTimeout(closeAllTabs, 30000);
}

// function to close all windows
function closeAllTabs(){
    for(var i=0;i<windowsList.length;i++){
        windowsList[i].close();
    }
    window.open("https://rewards.bing.com/");
}
