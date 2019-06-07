var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var HEIGHT_HISTOGRAM = 150;
var WIDTH_HISTOGRAM_COLUMN = 40;
var GAP_HISTOGRAM_COLUMN = 50;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement;
  if(arr.length == 0) {
    maxElement = 0;
  } else {
    maxElement = arr[0];
      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
    }
  return maxElement;
}

window.renderStatistics = function(ctx, names, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px "PT Mono"';

  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + FONT_GAP * 2);

  for (var i = 0; i < names.length; i++) {
    var histogramColumnX = CLOUD_X + GAP_HISTOGRAM_COLUMN + GAP_HISTOGRAM_COLUMN * i + WIDTH_HISTOGRAM_COLUMN * i;
    var histogramColumnHeight = (HEIGHT_HISTOGRAM * times[i]) / maxTime;
    var histogramColumnColor = (Math.random() * 100) + '%';

    ctx.fillText(Math.round(times[i]), histogramColumnX, CLOUD_HEIGHT - FONT_GAP * 2 - histogramColumnHeight);
    names[i] == 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'hsl(225, '+ histogramColumnColor +', 50%)';
    ctx.fillRect(histogramColumnX, CLOUD_HEIGHT - GAP * 3 , WIDTH_HISTOGRAM_COLUMN, -histogramColumnHeight );
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], histogramColumnX, CLOUD_HEIGHT - GAP);
  }
}
