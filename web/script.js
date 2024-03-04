function drawHeart() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var width = 50;
        var height = 50;

        ctx.beginPath();
        ctx.moveTo(x, y + height / 4);
        ctx.bezierCurveTo(x, y, x - width / 2, y - height / 2, x - width, y - height / 4);
        ctx.bezierCurveTo(x - width * 3 / 4, y, x - width / 2, y + height / 2, x, y + height);
        ctx.bezierCurveTo(x + width / 2, y + height / 2, x + width * 3 / 4, y, x + width, y - height / 4);
        ctx.bezierCurveTo(x + width / 2, y - height / 2, x, y, x, y + height / 4);
        ctx.fillStyle = 'red';
        ctx.fill();

        // Utwórz żółwia
        var turtle = new Turtle(canvas);
        turtle.penDown();
        turtle.penColor('red');

        // Rysuj serce przez żółwia z opóźnieniem
        turtle.moveForward(50);
        setTimeout((0.15) => {
            turtle.turnRight(140);
            turtle.moveForward(50);
        }, 1000);
        setTimeout(() => {
            turtle.turnRight(140);
            turtle.moveForward(50);
        }, 2000);
        setTimeout(() => {
            turtle.turnRight(40);
            turtle.moveForward(50);
        }, 3000);
    }
}
