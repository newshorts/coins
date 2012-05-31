/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var App = function() {
    
    var $;
    
    var marioHand = function() {
        
        var styles =    '<style type="text/css">';
            styles +=       'root { display: block; }';
            styles +=       '#coins-header { width: 100%; height: 200px; background-color: black; }';
            styles +=       '#cursor { position: absolute; }';
            styles +=       '#coins-canvas { position: absolute; top: 1px; left: 1px; }';
            styles +=   '</style>';
        
        $('head').append(styles);
        $('body').prepend('<div id="coins-header"></div>');
        $('body').append('<canvas id="coins-canvas" width="'+$(document).width()+'" height="'+$(document).height()+'"></canvas>');
        
        var easel = document.createElement('script');
        easel.onload = function() {
            // load in coin library
            var coins = document.createElement('script');
            coins.onload = function() {
                // do something
                var c = new Coins();
                c.init();
            }
            coins.src = '//localhost.com/GSP/clients/nintendo/sparkle/production/js/coins.js';
            document.getElementsByTagName('body')[0].appendChild(coins);
        }
        easel.src = 'http://code.createjs.com/easeljs-0.4.2.min.js';
        document.getElementsByTagName('body')[0].appendChild(easel);
        
    }
    
    var cursorTrack = function() {
        $('body').css({'cursor' : 'none'});
        $('body').append('<img id="cursor" src="//localhost.com/GSP/clients/nintendo/sparkle/production/images/cursor.png" alt="cursor" />');
        $('body').append('<link href="//localhost.com/GSP/clients/nintendo/sparkle/production/css/demoStyles.css" rel="stylesheet" type="text/css" />');
        $('body').append('');
        $('body').on('mousemove', function(evt) {
            $('#cursor').css({
                'position' : 'absolute',
                'top' : evt.pageY + 1, 
                'left' : evt.pageX + 1
            });
        });

    }
    
    this.init = function() {
        // do stuff
        if(typeof jQuery == 'undefined') {
            console.debug('jquery no loaded, something went wrong');
        } else {
            console.debug('able to init the app!');
            $ = jQuery;
            marioHand();
            cursorTrack();
        }
    }
}

if (!document.getElementById('coins-style')) {
    var objHead = document.getElementsByTagName('head');
    if (objHead[0]) {
        var objCSS = objHead[0].appendChild(document.createElement('link'));
        objCSS.id = 'coins-style';
        objCSS.rel = 'stylesheet';
        objCSS.href = '//localhost.com/GSP/clients/nintendo/sparkle/production/css/coins.css';
        objCSS.type = 'text/css';
    }
}
// load jquery
var script = document.createElement('script');
script.onload = function() {
    console.debug('jquery loaded just now');
    var a = new App();
    a.init();
};
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";
document.getElementsByTagName('body')[0].appendChild(script);


//if(typeof jQuery == 'undefined') {
//    
//    
//    
//    // load jquery
//    var script = document.createElement('script');
//    script.onload = function() {
//        console.debug('jquery loaded just now');
//        var a = new App();
//        a.init();
//    };
//    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";
//    document.getElementsByTagName('head')[0].appendChild(script);
//} else {
//    // load jquery
//    var script = document.createElement('script');
//    script.onload = function() {
//        console.debug('jquery loaded just now');
//        var a = new App();
//        a.init();
//    };
//    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";
//    document.getElementsByTagName('head')[0].appendChild(script);
//    
//    var a = new App();
//    a.init();
//    console.debug('jquery loaded already');
//}