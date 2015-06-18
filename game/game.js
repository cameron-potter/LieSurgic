$(document).ready(function(){

    // 
    var current_animation = [];
    // Running variables 
    var i = 0; 
    var running = [];
    var running = [
        // {
        //     background:"url('redman.gif')0px 648px",
        //     width:"48px",
        //     height:"46px"
        // },
        // {
        //     background:"url('redman.gif')-44px 648px",
        //     width:"48px",
        //     height:"46px"
        // },
        {
            background:"url('redman.gif')-89px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-137px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-185px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-239px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-289px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-343px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-393px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-449px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-498px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-547px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-593px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-644px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-702px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-758px 648px",
            width:"48px",
            height:"46px"
        }
    ];


    // Jumping Variables 

    var ijump;
    var jumping = [];
    jumping = [
        {
            background: "url('redman.gif')-103px 787px",
            width: "44px",
            height: "56px"
        },
        {
            background: "url('redman.gif')-153px 787px",
            width: "43px",
            height: "56px"
        },
        {
            background: "url('redman.gif')-206px 788px",
            width: "43px",
            height: "57px"
        },
        {
            background: "url('redman.gif')-256px 788px",
            width: "43px",
            height: "56px"
        },
        {
            background: "url('redman.gif')-302px 788px",
            width: "39px",
            height: "52px"
        },
        {
            background: "url('redman.gif')-348px 788px",
            width: "40px",
            height: "55px"
        },
        {
            background: "url('redman.gif')-389px 788px",
            width: "36px",
            height: "64px"
        },
        {
            background: "url('redman.gif')-433px 797px",
            width: "35px",
            height: "77px"
        },
        {
            background: "url('redman.gif')-478px 800px",
            width: "35px",
            height: "79px"
        },
        {
            background: "url('redman.gif')-528px 782px",
            width: "40px",
            height: "59px"
        },
    ]


    
    /*
    *
    *
    *
    *
    *
                                                    CONTROLLER
    *
    *
    *
    *
    */

    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
             $('#redman').addClass('run_left');
            break;

            case 39: // right
             $('#redman').removeClass('run_left');
            break;

            case 38: // up
            // $('#redman').addClass('jumping');
            current_animation = jumping;
            // animation(jumping, 50, 10);

            _jumping(jumping, 500, 10);
            break;

            case 40: // down
            current_animation = running;
            _motion(running, 50, 10);
            // motion(running);
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });



    /*
    *
    *
    *
    *
    *
                                                    FUNCTIONS
    *
    *
    *
    *
    */


    function _motion(action, seconds, pixels) {
        var key;

        _animation(action);
        _xaxis(seconds, pixels);

        if(current_animation == action) {
            setTimeout(function(){
                    _motion(action, seconds, pixels)
                }, seconds);

            if(i == action.length) {
                i = 0;
            }
        }
    }



    function _secPerPx(seconds, pixels) {
        return(parseInt(pixels)/parseInt(seconds));
    }



    function _xaxis(seconds, pixels) {
        var xaxis = ($('#redman').css('left')).replace ( /[^\d.]/g, '' );
        var speed = _secPerPx(seconds, pixels);

        if($('#redman').hasClass('run_left')) {
            $('#redman').css('left', (parseInt(xaxis)-1)+'px');
        } else {
            $('#redman').css('left', (parseInt(xaxis)+1)+'px');
        }

        setTimeout(function() {
               _xaxis(seconds, pixels);
            }, _secPerPx(seconds, pixels)
        );
    } 



    function _yaxis(seconds, pixels) {
        var yaxis = ($('#redman').css('bottom')).replace ( /[^\d.]/g, '' );
        var speed = _secPerPx(seconds, pixels);
        var gravity = 20;
        var pos_speed = Math.sqrt(Math.pow(speed, 2));

        $('#redman').css('bottom', (parseInt(yaxis)+(speed/pos_speed))+'px');
        setTimeout(function() {
            seconds = parseInt(seconds) + gravity;
           _yaxis(seconds, pixels);
        },pos_speed );

        console.log(seconds);
    }



    function _jumping(action, seconds, pixels) {
        // _animation(action);
        _yaxis(seconds, pixels);

        if(i == action.length) {
            return false;
        }

        // setTimeout(function(){
        //     _jumping(action, seconds, pixels)
        // }, seconds);
    }



    function _animation(action) {
        if(i<action.length) {
            for(key in action[i]) {
                $('#redman').css(key, action[i][key])
            }
            i++;
        }
    }



    function test_animation(motion) {
        // current x axis of redman, relative to left

        $('#redman').css('background', motion[i]['background']);
        $('#redman').css('width', motion[i]['width']);
        $('#redman').css('height', motion[i]['height']);

        if(i<motion.length){
            $('#redman').css('background', motion[i]);
            i++;
        }
        if(i == motion.length){
            i = 0;
        }

    }

});