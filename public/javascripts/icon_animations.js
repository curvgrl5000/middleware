Raphael.el.hoverInBounds = function(inFunc, outFunc) {
    var inBounds = false;

    // Mouseover function. Only execute if `inBounds` is false.
    this.mouseover(function() {
        if (!inBounds) {
            inBounds = true;
            inFunc.call(this);
        }
    });

    // Mouseout function
    this.mouseout(function(e) {
        var x = e.offsetX || e.clientX,
            y = e.offsetY || e.clientY;

        // Return `false` if we're still inside the element's bounds
        if (this.isPointInside(x, y)) return false;

        inBounds = false;
        outFunc.call(this);
    });

    return this;
}


// Icon1: Target
var paper = new Raphael(document.getElementById('target'), 100, 100); //the more verbose option

// Hover in function
function hoverIn() {
  this.animate({
    r: 40
  }, 500);
}

// Hover out function
function hoverOut() {
  this.animate({
    r: 35.5
  }, 500);
}

var target = paper.set();
target.push(paper.circle(50, 50, 35.5).attr({ stroke: "#000", "stroke-width": 14 }));
var dot = paper.set();
dot.push(paper.circle(50, 50, 15).attr("fill", "#000"));
target.push(dot);       
target.hover(hoverIn, hoverOut);
paper.setViewBox(0, 0, 120, 120);

// END Target


