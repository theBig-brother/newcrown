function drawblock(sx,sy,ex,ey,color) {
    ctx.beginPath();
    ctx.rect(sx,sy,ex,ey);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawtext(text, x, y, size = 20) {
    ctx.font = size + 'px 微软雅黑';
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle='black'
    ctx.fillText(text, x, y)
}
function drawball(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, false);
    ctx.fillStyle = color || '#000';
    
    //新方法默认参数
    
    ctx.fill()
    ctx.closePath();
}