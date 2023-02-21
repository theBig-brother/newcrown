var ctx2 = enter.getContext('2d');
var text = '确定'
wid = 200
hei = 100
function drawball(x, y, r, color) {
    ctx2.beginPath();
    ctx2.arc(x, y, r, 0, Math.PI * 2, false);
    ctx2.fillStyle = color || '#000';
    //新方法默认参数
    ctx2.fill()
    ctx2.closePath();
}
var leap = 3;
var size = 50;
var r = 3

var ballArr = [];
var runTime = 100;
//小球类
function ran(num) {
    return Math.random() * num;
}

function speed(a, b, times) {
    return (a - b) / times;
}
function Ball(xEnd, yEnd) {
    this.xStart = ran(wid),
    this.yStart = ran(hei),
    this.r = 1,
    this.xEnd = xEnd;
    this.yEnd = yEnd
    this.xSpeed = speed(this.xEnd, this.xStart, runTime),
    this.ySpeed = speed(this.yEnd, this.yStart, runTime),
    // this.color = '#' + parseInt(Math.random() * 0xffffff).toString(16);
    this.x = this.xStart,
    this.y = this.yStart

}
Ball.prototype.show = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    drawball(this.x, this.y, this.r, 'red')
}
ctx2.beginPath();
ctx2.font = size + 'px 微软雅黑';
ctx2.fillText(text, wid / 2-size/2, hei / 2, wid);
ctx2.closePath();
var copy = ctx2.getImageData(0, 0, wid, hei);
//清楚画布
ctx2.clearRect(0, 0, wid, hei)
for (let y = 0; y < hei; y += leap) {
    for (let x = 0; x < wid; x += leap) {
        var index = x + y * wid;
        var a = copy.data[index * 4 + 3];
        if (a > 128) {
            var ball = new Ball(x, y)
            ballArr.push(ball)
            ball.show()
        }
    }
}
var times = 0
var timer123 = setInterval(() => {
    times++;
    ctx2.clearRect(0, 0, wid, hei)
    for (let index = 0; index < ballArr.length; index++) {
        ballArr[index].show()
    }
    if (times >= runTime - 1)
        clearInterval(timer123)
}, 10);