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

        $('#redman').css('background', motion[i]['background']);
        $('#redman').css('width', motion[i]['width']);
        $('#redman').css('height', motion[i]['height']);

        if(i<motion.length){
            $('#redman').css('background', motion[i]);
            i++;
            setTimeout(movement, speed);
        }

        if(i == motion.length){
            i = 0;
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