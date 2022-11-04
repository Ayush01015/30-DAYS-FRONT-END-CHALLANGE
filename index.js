

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    duration: 800,
})
.setTween('#liquid',{
    attr:{
        scale: 500
    }
})
.addTo(controller);