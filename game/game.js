$(document).ready(function(){

    // 
    var current_animation = [];
    var trigger = true;
    var initial_iv;
    var kill = 1;
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
        // {
        //     background: "url('redman.gif')-541px 768px",
        //     width: "70px",
        //     height: "45px"
        // },
        {
            background:"url('redman.gif')0px 648px",
            width:"48px",
            height:"46px"
        },
    ];

    var surfaces = [];
    surfaces = [
        {
            width:"800px",
            bottom: "0",
            left: "0"
        },
    ];


    
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
                $('#redman').addClass('move_left');
                $('#redman').removeClass('move_right');
            break;

            case 39: // right
                $('#redman').addClass('move_right');
                $('#redman').removeClass('move_left');
            break;

            case 38: // up
            kill ++;
            i = 0;
             
            current_animation = jumping;
            _jumping(jumping, 50, 10, 100, kill);
            break;

            case 40: // down
            i = 0;
           
            current_animation = running;
            _running(running, 50, 10);
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


    function _running(action, frame_rate, space) {

        if($('#redman').hasClass('jumping')) {
            return false;
        }

         $('#redman').addClass('running');

        var xaxis = ($('#redman').css('left')).replace ( /[^\d.]/g, '' );

        //  if(current_animation != action) {
        //     return false;
        // }

        _animation(action);
        _xaxis(space);

        if(i == action.length) {
            i = 0;
        }

        setTimeout(function(){
            _running(action, frame_rate, space)
        }, frame_rate);
    }

    function _jumping(action, frame_rate, space, iv, loop) {
        if(kill != loop){
            return false;
        }

        $('#redman').addClass('jumping');

        var yaxis = ($('#redman').css('bottom')).replace ( /[^\d.]/g, '' );

        if(i == 9 && (parseInt(yaxis)+parseInt(iv)) > 0){}else{
            _animation(action);
        }
        _xaxis(space);
        // _landing(space, iv);




        var yaxis = ($('#redman').css('bottom')).replace ( /[^\d.]/g, '' );
        var xaxis = ($('#redman').css('left')).replace ( /[^\d.]/g, '' );
        var distanceToFloor = parseInt(yaxis)+parseInt(iv);
        var surface_floor = parseInt(surfaces[0]['bottom']);
        var surface_start = parseInt(surfaces[0]['left']);
        var surface_width = parseInt(surfaces[0]['width']);
        var surface_end = surface_start + surface_width;

        // console.log(surface_end);
        if($('#redman').hasClass('move_left')) {
           var xaxisInOneFrame = parseInt(xaxis) - parseInt(space);
        }else{
           var xaxisInOneFrame = parseInt(xaxis) + parseInt(space);
        }
        console.log(xaxisInOneFrame);

        if( distanceToFloor <  surface_floor && surface_start < xaxisInOneFrame < surface_end) {
            $('#redman').removeClass('jumping');
            _landing();
            return false;
        }  










        // if( (parseInt(yaxis)+parseInt(iv)) < 0 ) {
        //     $('#redman').removeClass('jumping');
        //     _landing();
        //     return false;
        // }

        $('#redman').css('bottom', (parseInt(yaxis)+parseInt(iv))+'px');
        iv = iv - 20;//gravity

        setTimeout(function(){
            _jumping(action, frame_rate, space, iv, loop)
        }, frame_rate);
    }

    // function _landing(space, iv) {

    //     var yaxis = ($('#redman').css('bottom')).replace ( /[^\d.]/g, '' );
    //     var xaxis = ($('#redman').css('left')).replace ( /[^\d.]/g, '' );
    //     var distanceToFloor = parseInt(yaxis)+parseInt(iv);
    //     var surface_floor = parseInt(surfaces[0]['bottom']);
    //     var surface_start = parseInt(surfaces[0]['left']);
    //     var surface_width = parseInt(surfaces[0]['width']);
    //     var surface_end = surface_start + surface_width;


    //     if($('#redman').hasClass('move_left')) {
    //        var xaxisInOneFrame = parseInt(xaxis) - parseInt(space);
    //     }else if($('#redman').hasClass('move_right')) {
    //        var xaxisInOneFrame = parseInt(xaxis) + parseInt(space);
    //     }

    //     if( distanceToFloor < surface_floor /*&& surface_start <= xaxisInOneFrame <= surface_end*/ ) {
    //         console.log('not here yet');
    //         kill++;
    //         $('#redman').removeClass('jumping');
    //         $('#redman').css('bottom', '0px');
    //         i = 0;
    //         current_animation = running;
    //         _running(running, 50, 10);
    //     }             
    // }
    function _landing() {
        $('#redman').css('bottom', '0px');
        i = 0;
        current_animation = running;
        _running(running, 50, 10);
    }


     function _animation(action) {
        if(i<action.length) {
            for(key in action[i]) {
                $('#redman').css(key, action[i][key])
            }
            i++;
        }
    }

    function _xaxis(space) {
        var xaxis = ($('#redman').css('left')).replace ( /[^\d.]/g, '' );

        if($('#redman').hasClass('move_left')) {
            $('#redman').css('left', (parseInt(xaxis)-parseInt(space))+'px');
        } else {
            $('#redman').css('left', (parseInt(xaxis)+parseInt(space))+'px');
        }
    }


    // function _gravity(iv) {
    //     // if(!_onsurface($('#redman')));
    // }

    // function _onsurface() {
    //    var xaxis = ($('#redman').css('left')).replace ( /[^\d.]/g, '' ); 
    //    var yaxis = ($('#redman').css('bottom')).replace ( /[^\d.]/g, '' );
    // }



    function _test_animation(motion) {
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

    var v = 15;
    while(v--) console.log('decreasing');
});