'use strict';

var findMaxTime = function (arr) {
    var max = -1;

    for (var i = 0; i < arr.length; i++) {
        var time = arr[i];
        if (time > max) {
            max = time;
        }
    }
    return max;
};

window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура, вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
    
    var maxTime = findMaxTime(times);
    var histogramHeight = 150;
    var barWidth = 40;
    var indent = 50;
    var initialX = 120;
    var lowerLevelHistogram = 230;
    var lineHeight = 20;

    for (var i = 0; i < times.length; i++) {
        var time = Math.floor(times[i]);

        if (names[i] === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = 'rgba(0,0,255,' + Math.random() + ')';
        }

        var barHeight = (time * histogramHeight)/maxTime;
        var initialY = lowerLevelHistogram - barHeight;

        ctx.fillRect(initialX + i * (barWidth + indent), initialY, barWidth, barHeight);

        ctx.fillStyle = '#000';
        ctx.font = '12px PT Mono';
        ctx.fillText(time/1000, initialX + i * (barWidth + indent), lowerLevelHistogram + lineHeight);
        ctx.font = '16px PT Mono';
        ctx.fillText(names[i], initialX + i * (barWidth + indent), lowerLevelHistogram + lineHeight * 2);
    }

};