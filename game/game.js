$(document).ready(function(){

    // General Vars

    var i = 0; 
    var z = 0;
    var current_animation;


    // Running Vars

    var running = [];
    var running = [
        {
            background:"url('redman.gif')0px 648px",
            width:"48px",
            height:"46px"
        },
        {
            background:"url('redman.gif')-44px 648px",
            width:"48px",
            height:"46px"
        },
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
            animation(jumping, 50);
            break;

            case 40: // down
            // movement(running, 50, 10);
            animation(running, 50);
            // animation(jumping, 50);
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

    function running_name() {
        // current x axis of redman, relative to left
        var xaxis = ($('#redman').css('left')).replace ( /[^\d.]/g, '' );
        var space = 10;
        var speed = 50;

        $('#redman').css('background', running[i]['background']);
        $('#redman').css('width', running[i]['width']);
        $('#redman').css('height', running[i]['height']);

        if($('#redman').hasClass('run_left')){
            $('#redman').css('left', (parseInt(xaxis)-parseInt(space))+'px');
        }else{
            $('#redman').css('left', (parseInt(xaxis)+parseInt(space))+'px');
        }

        if(i<running.length){
            $('#redman').css('background', running[i]);
            i++;
            setTimeout(running_name, speed);
        }
        if(i == running.length){
            i = 2;
        }
    }

    function movement(motion, speed, space) {
        // current x axis of redman, relative to left
        var xaxis = ($('#redman').css('left')).replace ( /[^\d.]/g, '' );

        $('#redman').css('background', running[i]['background']);
        $('#redman').css('width', running[i]['width']);
        $('#redman').css('height', running[i]['height']);

        if($('#redman').hasClass('run_left')){
            $('#redman').css('left', (parseInt(xaxis)-parseInt(space))+'px');
        }else{
            $('#redman').css('left', (parseInt(xaxis)+parseInt(space))+'px');
        }

        if(i<running.length){
            $('#redman').css('background', running[i]);
            i++;
            setTimeout(function(){
                movement(motion, speed, space)
            }, speed);
        }
        if(i == running.length){
            i = 2;
        }
    }

    function animation(action, frame_rate) {

        // kill current animation, start new one. 
        if(current_animation == undefined) {
            current_animation = action;
        }

        if(current_animation != action) {
            current_animation = action;
            if(z==1){
                z = 0;
                return false;
            }
            z++;
        }

        var key;

        if(i<action.length){
            for(key in action[i]){
                $('#redman').css(key, action[i][key])
            }
            i++;
        }

        setTimeout(function(){
                animation(action, frame_rate)
            }, frame_rate);

        if(i == action.length){
            i =0;
        }

    }

    function test_animation(motion){
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