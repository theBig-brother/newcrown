

var ctx = canvas.getContext('2d');
let w = sheng.length * 300;
let h = 3000
canvas.height = h
canvas.width = w;
const yy = 400;
const num = 3;
const jiange = 70
var ctx = canvas.getContext('2d');
let blockarr = [];
let blockarr1 = [];
let cuparr = [];
let down = 1;
let dayliy = 0;
flag = 0;
for (let i = 0; i < sheng.length; i++) {
    for (let index = 0; index < num; index++) {
        let block = new fangkuai(100 + i * 300, 200 - index * jiange, number[i][dayliy + index + 1] - number[i][dayliy + index]);
        blockarr1.push(block)
        block.show();
    }
    blockarr.push(blockarr1);
    blockarr1 = [];
}
for (let index = 0; index < sheng.length; index++) {
    let cup = new Cup(100 + index * 300, yy, number[index][dayliy], 10);
    cuparr.push(cup);
    cup.show();
}
function fn() {
    left.onclick = function () {
        if(dayliy<=0)
        return 0
        dayliy--;
        datesee.innerHTML = date[dayliy]
        dayChangeColor()
        for (let index = 0; index < blockarr.length; index++) {
            for (let j = 0; j < num; j++) {
                blockarr[index][j].textChange(number[index][dayliy + j + 1] - number[index][dayliy + j]);
            }
        }
    }
    right.onclick = function () {
        if(dayliy>=number[0].length)
        return 0
        dayliy++;
        datesee.innerHTML = date[dayliy]
        dayChangeColor()
        for (let index = 0; index < blockarr.length; index++) {
            for (let j = 0; j < num; j++) {
                blockarr[index][j].textChange(number[index][dayliy + j + 1] - number[index][dayliy + j]);
            }
        }
    }
    enter.onclick = function () {
        //补0
        let dayarr = day.value.split('/')
        if(dayarr.length!=3)
        return 0;
        for (let index = 0; index < dayarr.length; index++) {
            dayarr[index] = parseInt(dayarr[index]);
            dayarr[index] = dayarr[index] > 10 ? dayarr[index] : '0' + dayarr[index].toString()
        }
        daytext = dayarr[0] + '/' + dayarr[1] + '/' + dayarr[2]
        if(date.indexOf(daytext)==-1)
        return 0;
        dayChangeColor()
        dayliy = date.indexOf(daytext);
        datesee.innerHTML = daytext
        for (let index = 0; index < blockarr.length; index++) {
            for (let j = 0; j < num; j++) {
                blockarr[index][j].textChange(number[index][dayliy + j + 1] - number[index][dayliy + j]);
            }
        }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    down++;
    if (blockarr[0][0].y + blockarr[0][0].h >= yy) {
        down = 1;
        dayliy++;
        for (let index = 0; index < blockarr.length; index++) {
            let block = new fangkuai(100 + index * 300, yy - 3 * jiange - 50, number[index][dayliy + 3] - number[index][dayliy + 2]);
            blockarr[index].splice(0, 1);
            blockarr[index].push(block);
        }
    }
    datesee.innerHTML = date[dayliy]
    for (let i = 0; i < sheng.length; i++)
        for (let index = 0; index < num; index++) {
            blockarr[i][index].show()
        }
    for (let index = 0; index < sheng.length; index++) {
        cuparr[index].text = number[index][dayliy];
        if (number[0][dayliy] >= 100) {
            cuparr[index].h = number[index][dayliy] / 10;
        } else if (number[0][dayliy] >= 1000) {
            cuparr[index].h = number[index][dayliy] / 0;
        }
        else {
            cuparr[index].h = number[index][dayliy];
        }
        cuparr[index].show();
    }
    for (let i = 0; i < sheng.length; i++) {
        drawtext(sheng[i], 150 + i * 300, 12)
    }
}
let timer = setInterval(fn, 100);
pause.onclick = function () {
    if (flag == 0) {
        flag = !flag;
        // pause.innerHTML = '▶'
        clearInterval(timer)
        clearInterval(run)
    } else {
        flag = !flag;
        // pause.innerHTML = '||'
        timer = setInterval(fn, 100);
        run=setInterval(runfn, 100);
    }
}