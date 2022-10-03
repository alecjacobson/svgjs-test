
var interval = [];
var draw = [];
function select_onchange()
{
  const container = document.getElementById("container");
      draw.clear();
  fetch(document.getElementById("files").value)
  .then(r => r.text())
    .then(text => {
        draw.svg(text);

        var list = SVG.find('path')
      var count = 0;
        for(var i = 0;i<list.length;i++){
          count += list[i].array().length;
        }
      document.getElementById("msg").innerHTML = "total path-length count: "+count;

      const duration = 1000;
      clearInterval(interval);
      interval = setInterval(function moveall(){
        for(var i = 0;i<list.length;i++){
            list[i].animate(duration).ease('-').move( 
              list[i].x()+20*(2*Math.random()-1), 
              list[i].y()+20*(2*Math.random()-1));
        }
        return moveall;
      }(),duration);
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
  window.draw = draw;
}

function init()
{
  draw = SVG().addTo('body').size(900, 900)
  document.getElementById("files").addEventListener("change",select_onchange);
  select_onchange();
}

window.addEventListener('load', init);
