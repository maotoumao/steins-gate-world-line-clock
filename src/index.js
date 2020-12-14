let ctx;

function calPos(origin, unit, coordinate) {
    return [
        origin[0] + coordinate[0] * unit,
        origin[1] + coordinate[1] * unit
    ]
}



/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {*} number 
 * @param {number} unit
 * @param {string} color 
 * @param {object} origin
 */
function drawNum(ctx, number, unit, origin) {
    ctx.save();
    ctx.lineWidth = unit;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#f8ac3a';
    ctx.shadowColor = '#ff8c3a';
    ctx.shadowBlur = 30;
    ctx.beginPath();
    if (number === 1) {
        ctx.moveTo(...calPos(origin, unit, [2, 3]));
        ctx.lineTo(...calPos(origin, unit, [5, 0]));
        ctx.lineTo(...calPos(origin, unit, [5, 21]));
    }
    if (number === 2) {
        ctx.moveTo(...calPos(origin, unit, [10, 21]));
        ctx.lineTo(...calPos(origin, unit, [0, 21]));
        ctx.arc(...calPos(origin, unit, [5, 5.25]), 5 * unit, 0.12 * Math.PI, -1.05 * Math.PI, true)
    }
    if (number === 3) {
        ctx.moveTo(...calPos(origin, unit, [2, 1]));
        ctx.lineTo(...calPos(origin, unit, [10, 1]));
        ctx.arc(...calPos(origin, unit, [5, 15.75]), 5.25 * unit, -0.5 * Math.PI, Math.PI)
    }
    if (number === 4) {
        ctx.moveTo(...calPos(origin, unit, [6.5, 0]));
        ctx.lineTo(...calPos(origin, unit, [0, 15.75]));
        ctx.lineTo(...calPos(origin, unit, [6.5, 15.75]));
        ctx.moveTo(...calPos(origin, unit, [6.5, 0]));
        ctx.lineTo(...calPos(origin, unit, [6.5, 21]));
        ctx.stroke();

        ctx.lineWidth = unit / 2;
        ctx.moveTo(...calPos(origin, unit, [6.5, 15.75]));
        ctx.lineTo(...calPos(origin, unit, [10, 15.75]));
    }
    if (number === 5) {
        ctx.moveTo(...calPos(origin, unit, [10, 1]));
        ctx.lineTo(...calPos(origin, unit, [3, 1]));
        ctx.arc(...calPos(origin, unit, [5, 15.75]), 5.25 * unit, -0.7 * Math.PI, Math.PI);
    }
    if (number === 6) {
        // 画个6
        ctx.moveTo(...calPos(origin, unit, [5, 0]));
        ctx.lineTo(...calPos(origin, unit, [5 - 5 * Math.cos(Math.asin(5 / 15.75)), 15.75 - 25 / 15.75]));
        ctx.moveTo(...calPos(origin, unit, [10, 15.75]));
        ctx.arc(...calPos(origin, unit, [5, 15.75]), 5 * unit, 0, Math.PI * 2);
        ctx.stroke();
        ctx.moveTo(...calPos(origin, unit, [0, 15.875]));
        // ctx.lineWidth = unit / 4;
        // ctx.lineTo(...calPos(origin, unit, [10, 15.875]))
    }
    if (number === 7) {
        ctx.moveTo(...calPos(origin, unit, [2, 1]));
        ctx.lineTo(...calPos(origin, unit, [10, 1]));
        ctx.lineTo(...calPos(origin, unit, [4, 21]));
    }
    if (number === 8) {
        ctx.arc(...calPos(origin, unit, [5, 3.5]), 3.5 * unit, -1.45 * Math.PI, 0.45 * Math.PI);
        ctx.ellipse(...calPos(origin, unit, [5, 14]), 4.5 * unit, 7 * unit, 0, -0.45 * Math.PI, 1.45 * Math.PI)
    }
    if (number === 9) {
        ctx.arc(...calPos(origin, unit, [5, 5]), 4.5 * unit, 0.15 * Math.PI, 2.15 * Math.PI);
        ctx.lineTo(...calPos(origin, unit, [4.5, 21]));
    }
    if (number === 0) {
        ctx.ellipse(...calPos(origin, unit, [5, 10.5]), 5 * unit, 10.25 * unit, 0, 0, 2 * Math.PI);
    }
    if (number === ':') {
        ctx.arc(...calPos(origin, unit, [5, 4]), 0.5 * unit, 0, 2 * Math.PI);
        ctx.moveTo(...calPos(origin, unit, [5, 17]));
        ctx.arc(...calPos(origin, unit, [5, 17]), 0.5 * unit, 0, 2 * Math.PI);
    }
    ctx.stroke();
    ctx.restore();
    // 每一个辉光管的宽度是10个格子 高度是20-21个格子的样子，先按20算吧



}

function resize(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function init() {
    const canvas = document.querySelector('canvas');
    resize(canvas);
    window.onresize = () => { resize(canvas) }
    ctx = canvas.getContext('2d');
}

function run() {
    const [width, height] = [window.innerWidth, window.innerHeight];
    const unit = width * 0.8 / 8 / 12;
    const dt = new Date();
    const [h, m, s] = [dt.getHours(), dt.getMinutes(), dt.getSeconds()];
    // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle='#1b0b08'
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    drawNum(ctx, Math.floor(h / 10), unit, [width * 0.1 + 0.1 / 12 * width, (height - 0.2 * width) / 2]);
    drawNum(ctx, h % 10, unit, [width * 0.2 + 0.1 / 12 * width, (height - 0.2 * width) / 2]);
    drawNum(ctx, ':', unit, [width * 0.3 + 0.1 / 12 * width, (height - 0.2 * width) / 2]);
    drawNum(ctx, Math.floor(m / 10), unit, [width * 0.4 + 0.1 / 12 * width, (height - 0.2 * width) / 2]);
    drawNum(ctx, m % 10, unit, [width * 0.5 + 0.1 / 12 * width, (height - 0.2 * width) / 2]);
    drawNum(ctx, ':', unit, [width * 0.6 + 0.1 / 12 * width, (height - 0.2 * width) / 2]);
    drawNum(ctx, Math.floor(s / 10), unit, [width * 0.7 + 0.1 / 12 * width, (height - 0.2 * width) / 2]);
    drawNum(ctx, s % 10, unit, [width * 0.8 + 0.1 / 12 * width, (height - 0.2 * width) / 2]);
    requestAnimationFrame(run)
}

init();
run();
