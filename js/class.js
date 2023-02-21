function fangkuai(x, y, text, color) {
    this.w = text>40?200: text*5;
    this.h = 50
    this.x = x;
    this.y = y;
    this.text = text;
    this.ySpeed = 3;
    this.color = color || 'skyblue';
    this.run = function () {
        this.y += this.ySpeed;
    }
    this.textChange=function(text1)
    {
        this.text = text1;
        this.w = parseInt( text1)*20
        if(parseInt( text1)>=10)
        this.w = 200
    }
    this.show = function () {
        this.run()
        drawblock(this.x, this.y, this.w, this.h, this.color);
        drawtext(this.text, this.x + this.w / 2, this.y + this.h / 2)
    }
}
function Cup(x, y, text,h, color) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.w = 100;
    this.h = h,
    this.color = color || 'pink';
}
Cup.prototype.show = function () {
    drawblock(this.x, this.y, this.w, this.h, this.color);
    drawtext(this.text, this.x + this.w / 2, this.y + 20 )
}
function Days(text) {
    this.x=0;
this.y=0;
this.w=200;
this.h=100;
this.text=text;
this.show=function(){
    drawblock(this.x, this.y, this.w, this.h, 'pink');
    drawtext(this.text, this.x + this.w / 2, this.y + this.h / 2)
}
}
//小球类
function r(num) {
    return Math.random() * num;
}
function Ball(text){
        this.x = r(380) + 60,
        this.y = r(380) + 60,
        this.r = r(50) + 10,
        this.xSpeed = r(3) + 2,
        this.ySpeed = r(3) + 1,
        this.text=text;
        this.color = '#' + parseInt(Math.random() * 0xffffff).toString(16);
        //run碰撞检测
        this.run = function () {
            if (this.x - this.r <= 0 || this.x + this.r >= w) {
                this.xSpeed *= -1;
            }
            this.x = this.x + this.xSpeed;
            if (this.y - this.r <= 0 || this.y + this.r >= h) {
                this.ySpeed *= -1;
            }
            this.y += this.ySpeed;
        }
}
Ball.prototype.show = function () {
    this.run()
    drawball(this.x, this.y, this.r ,this.color)
    drawtext(this.text,this.x+2*this.r,this.y);
}