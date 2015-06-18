$(document).ready(function(){

    // 
    var current_animation = [];
    var trigger = true;
    var initial_iv;
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
            background: "url('redman.gif')-59px 787px",
            width: "44px",
            height: "56px"
        },
        {
            background: "url('redman.gif')-110px 787px",
            width: "43px",
            height: "56px"
        },
        {
            background: "url('redman.gif')-163px 788px",
            width: "43px",
            height: "57px"
        },
        {
            background: "url('redman.gif')-213px 788px",
            width: "43px",
            height: "56px"
        },
        {
            background: "url('redman.gif')-263px 788px",
            width: "39px",
            height: "52px"
        },
        {
            background: "url('redman.gif')-308px 788px",
            width: "40px",
            height: "55px"
        },
        {
            background: "url('redman.gif')-353px 788px",
            width: "36px",
            height: "64px"
        },
        {
            background: "url('redman.gif')-398px 797px",
            width: "35px",
            height: "77px"
        },
        {
            background: "url('redman.gif')-443px 800px",
            width: "35px",
            height: "79px"
        },
        {
            background: "url('redman.gif')-488px 782px",
            width: "40px",
            height: "59px"
        },
        {
            background: "url('redman.gif')-541px 768px",
            width: "70px",
            height: "45px"
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

            _jumping(jumping, 50, 10, 100);
            break;

            case 40: // down
            // current_animation = running;
            // motion(running, 50, 10);
            test_animation(jumping)
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


    function motion(action, frame_rate, space) {
        var key;

        animation(action);
        _axis(frame_rate, space);

        if(current_animation == action) {
            setTimeout(function(){
                    motion(action, frame_rate, space)
                }, frame_rate);

            if(i == action.length) {
                i = 0;
            }
        }
    }

    function _space(frame_rate, space) {
        return(10*(parseInt(frame_rate)/parseInt(space)));
    }

    function _axis(frame_rate, space) {
        var xaxis = ($('#redman').css('left')).replace ( /[^\d.]/g, '' );
        var yaxis = ($('#redman').css('bottom')).replace ( /[^\d.]/g, '' );
        var speed = _space(frame_rate, space);

        if($('#redman').hasClass('run_left')) {
            $('#redman').css('left', (parseInt(xaxis)-1)+'px');
        } else {
            $('#redman').css('left', (parseInt(xaxis)+1)+'px');
        }

        setTimeout(function() {
           _axis(frame_rate, space);
        }, 1000);

        console.log(speed);
    }

    function _jumping(action, frame_rate, space, iv) {
        if(trigger == true) {
            trigger = false;
            initial_iv = iv;
        }
        if(initial_iv == (-1 * iv)){
           return false;
        }
        var key;
        var xaxis = ($('#redman').css('left')).replace ( /[^\d.]/g, '' );
        var yaxis = ($('#redman').css('bottom')).replace ( /[^\d.]/g, '' );

        animation(action);

        $('#redman').css('bottom', (parseInt(yaxis)+parseInt(iv))+'px');

        iv = iv - 20;//gravity

        if(parseInt(yaxis) < 0 ) {
            $('#redman').css('bottom', '0px');
            console.log('anything');
            return false;
        }

        if($('#redman').hasClass('run_left')) {
            $('#redman').css('left', (parseInt(xaxis)-parseInt(space))+'px');
        } else {
            $('#redman').css('left', (parseInt(xaxis)+parseInt(space))+'px');
        }

        setTimeout(function(){
                _jumping(action, frame_rate, space, iv)
            }, frame_rate);

        if(i == action.length) {
            i = 0;
        }
    }

    // function seconds_per_pixel (frame_rate, space) {

    //     return seconds
    // }

    // fixing for jumping 
     function animation(action) {
        if(i<action.length) {
            for(key in action[i]) {
                $('#redman').css(key, action[i][key])
            }
            i++;
        }
    }

    // works for running 
    // function animation(action) {
    //     if(i<action.length) {
    //         for(key in action[i]) {
    //             $('#redman').css(key, action[i][key])
    //         }
    //         i++;
    //     }
    // }

    function gravity(iv) {
        console.log('gravity');

        var yaxis = ($('#redman').css('bottom')).replace ( /[^\d.]/g, '' );

        $('#redman').css('bottom', (parseInt(yaxis)+parseInt(iv))+'px');
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