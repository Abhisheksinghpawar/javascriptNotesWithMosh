function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

//FACTORY FUNCTION

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
    }
    }
}

createCircle(1).draw();