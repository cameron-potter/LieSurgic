

function character () {
    this.xaxis = ($('#redman').css('left')).replace ( /[^\d.]/g, '' );
    this.yaxis = ($('#redman').css('bottom')).replace ( /[^\d.]/g, '' );
    this.lndgFr = 20;
    this.iv = 0;
    this.counter = 0;
    this.fr = 0;
    this.fps = 2;
}

character.prototype.state = function () {
    var state
    this.onSurface() && this.iv == 0 ? state =  'running' : null;
    !this.onSurface() && this.iv > 0 ? state = 'jumping' : null;
    !this.onSurface() && this.iv <= 0 ? state = 'falling' : null;
    console.log(state);
    return state;
}

character.prototype.onSurface = function () {
    for(var i = 0; i < surfaces.length; i++) {
        var floor = surfaces[i]['bottom'];
        var fl_start = surfaces[i]['left'];
        var fl_width = surfaces[i]['width']+surfaces[i]['left'];
        if( this.yaxis == floor && fl_start <= this.xaxis && this.xaxis <= fl_width ) {
            return true;
        }
    }
    return false;
}


character.prototype.animation = function () {
    switch(this.state()) {
        case 'running':
            this.xaxis = parseInt(this.xaxis) + 4;

            if ( $('#redman').hasClass('right') ) {
                $('#redman').css('left', this.xaxis+'px');
            } else if ( $('#redman').hasClass('left')) {
                $('#redman').css('left', this.xaxis-'px');
            }
            if(this.counter<this.fps) {
                this.counter++;
            } else if (this.fr<running.length) {
                this.counter = 0;
                for(key in running[this.fr]) {
                    $('#redman').css(key, running[this.fr][key])
                }
                this.fr++;
            }

            if(this.fr == running.length) {
                this.fr = 0;
            }

        break;

        case 'jumping':
            
        break;

        case 'falling':

        break;

        case 'landing':
           
        break;

        default:

        break
    }
    return true;
}


window.onload = function () {

    start();

};

function start() {

    character = new character();

    update();
}

function update() {

    character.animation();

    requestAnimFrame(update);
}


window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
};

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

var jumping = [
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

var surfaces = [
        {
            width:800,
            bottom: 0,
            left: 0,
        },
    ];

    // line 32... can be removed 