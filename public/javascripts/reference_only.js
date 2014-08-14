window.onload = function() {
  
  //That first experiment
  var paper = new Raphael(document.getElementById('canvas_container'), 631, 500);
  paper.w = 631;
  paper.h = 500;
  var path = "M" + paper.w / 2 + " " + paper.h / 2;
  for (var i = 0; i < 100; i++){
          var x = Math.random() * paper.w;
          var y = Math.random() * paper.h;
          
          paper.circle(x,y,
                       Math.random() * 60 + 2).
                       attr("fill", "rgb("+Math.random() * 255+",0,0)").
                       attr("opacity", 0.5);
          path += "L" + x + " " + y + " ";
        }
  paper.path(path).attr("stroke","#ffffff").attr("stroke-opacity", 0.2);
  paper.text(310,240,"Circling Our Waggons").attr("font","55px Arial").attr("fill","#ffffff"); 
  
  
  //That second experiment
  var paper = new Raphael(document.getElementById('canvas_container_2'), 631, 500);
  var circ = paper.circle(125, 100, 70); // first circle
  circ.attr({fill: '#000', stroke: 'none'});
  var texty = paper.text(125, 100, 'salam')
          texty.attr({opacity: 1, 'font-size': 20, 'fill': '#ce7312'}).toFront();

  var text = paper.text(125, 100, 'kodafez!')
          text.attr({opacity: 0, 'font-size': 20, 'fill': '#e1dfdc'}).toBack();
          
          circ.node.onmouseover = function(){
            this.style.cursor = 'pointer';
          }
  circ.node.onclick = function() {
          text.animate({opacity: 1}, 2000);
          texty.animate({opacity: 0}, 2000); 
          circ.animate({opacity: 0}, 2000, function() {
            this.remove();
          }); // end of text.animate
  
        } // end of circ.node
  
  var circ2 = paper.circle(310, 100, 70); // second circle
  circ2.attr({fill: '#000', stroke: 'none'});
  var texty2 = paper.text(310, 100, 'namaste')
          texty2.attr({opacity: 1, 'font-size': 20, 'fill': '#ce7312'}).toFront();
  
  var text2 = paper.text(310, 100, 'alvida!')
          text2.attr({opacity: 0, 'font-size': 20, 'fill': '#e1dfdc'}).toBack();
          
          circ2.node.onmouseover = function(){
            this.style.cursor = 'pointer';
          }
  circ2.node.onclick = function() {
          text2.animate({opacity: 1}, 2000);
          texty2.animate({opacity: 0}, 2000); 
          circ2.animate({opacity: 0}, 2000, function() {
            this.remove();
          }); // end of text.animate
  
        } // end of circ.node
  
  var circ3 = paper.circle(495, 100, 70); // third circle
  circ3.attr({fill: '#000', stroke: 'none'});
  var texty3 = paper.text(495, 100, 'ossu')
          texty3.attr({opacity: 1, 'font-size': 20, 'fill': '#ce7312'}).toFront();
    
  var text3 = paper.text(495, 100, 'sayonara!')
          text3.attr({opacity: 0, 'font-size': 20, 'fill': '#e1dfdc'}).toBack();
          
          circ3.node.onmouseover = function(){
            this.style.cursor = 'pointer';
          }
  circ3.node.onclick = function() {
          text3.animate({opacity: 1}, 2000);
          texty3.animate({opacity: 0}, 2000); 
          circ3.animate({opacity: 0}, 2000, function() {
            this.remove();
          }); // end of text.animate
  
        } // end of circ.node
  
  var circ4 = paper.circle(125, 260, 70); // fourth circle
  circ4.attr({fill: '#000', stroke: 'none'});
  var texty4 = paper.text(125, 260, 'hola')
          texty4.attr({opacity: 1, 'font-size': 20, 'fill': '#ce7312'}).toFront();
  
  var text4 = paper.text(125, 260, 'adios!')
          text4.attr({opacity: 0, 'font-size': 20, 'fill': '#e1dfdc'}).toBack();
          
          circ4.node.onmouseover = function(){
            this.style.cursor = 'pointer';
          }
  circ4.node.onclick = function() {
          text4.animate({opacity: 1}, 2000);
          texty4.animate({opacity: 0}, 2000); 
          circ4.animate({opacity: 0}, 2000, function() {
            this.remove();
          }); // end of text.animate
  
        } // end of circ.node
  
    
  var circ5 = paper.circle(310, 260, 70); // five circle
  circ5.attr({fill: '#000', stroke: 'none'});
  var texty5 = paper.text(310, 260, 'hey')
          texty5.attr({opacity: 1, 'font-size': 20, 'fill': '#ce7312'}).toFront();
  
  var text5 = paper.text(310, 260, 'later!')
          text5.attr({opacity: 0, 'font-size': 20, 'fill': '#e1dfdc'}).toBack();
          
          circ5.node.onmouseover = function(){
            this.style.cursor = 'pointer';
          }
  circ5.node.onclick = function() {
          text5.animate({opacity: 1}, 2000);
          texty5.animate({opacity: 0}, 2000); 
          circ5.animate({opacity: 0}, 2000, function() {
            this.remove();
          }); // end of text.animate
  
        } // end of circ.node
  
    
  var circ6 = paper.circle(495, 260, 70); // six circle
  circ6.attr({fill: '#000', stroke: 'none'});        
  var texty6 = paper.text(495, 260, 'salve')
          texty6.attr({opacity: 1, 'font-size': 20, 'fill': '#ce7312'}).toFront();
  
  var text6 = paper.text(495, 260, 'ciao!')
          text6.attr({opacity: 0, 'font-size': 20, 'fill': '#e1dfdc'}).toBack();
          
          circ6.node.onmouseover = function(){
            this.style.cursor = 'pointer';
          }
  circ6.node.onclick = function() {
          text6.animate({opacity: 1}, 2000);
          texty6.animate({opacity: 0}, 2000); 
          circ6.animate({opacity: 0}, 2000, function() {
            this.remove();
          }); // end of text.animate
        } // end of circ.node
  paper.text(310,410,"hello & goodbye").attr("font","30px Arial").attr("fill","#ce7312"); 
  
  // Here's the fourth one experiment
  $(function(){
  //var p = new Raphael(0,0,"100%","100%");
  var p = new Raphael(document.getElementById('canvas_container_4'), 631, 500);
 
  // give raphael guide and along custom attributes
        p.addGuides();
 
        var white = {stroke : "white"};
        var path;
 
        var path1 = p.path("M 75 250 Q 200 450 350 130").attr(white);
 
        var path2 = p.path("M 350 130 Q 400 55 560 250").attr(white);
 
        var circ1 = p.circle(0, 0, 20).attr({fill: white, stroke: 'none', opacity: .5});
        var circ2 = p.circle(0, 0, 20).attr({fill: white, stroke: 'none', opacity: .5});
 
        
        $('#canvas_container_4').on("click", function(){
          // animate along a path
          circ1.attr({guide : path1, along : 0})
            .animate({along : 1}, 3000, "ease-out");
 
          circ2.attr({guide : path2, along : 1})
            .animate({along : 0}, 3000, "ease-out");
        });  
        p.text(310,400,"click me to see it come together").attr("font","22px Arial").attr("fill","#ffffff");
    });
    
    
    // Here's the last one experiment   
    var paper = new Raphael(document.getElementById('canvas_container_5'), 631, 500);
    var tiny = paper.path("M21.25,8.375V28h6.5V8.375H21.25zM12.25,28h6.5V4.125h-6.5V28zM3.25,28h6.5V12.625h-6.5V28z")
      .attr({fill: "#000", stroke: "none"});
      
    
} //End of the whole enchilada  