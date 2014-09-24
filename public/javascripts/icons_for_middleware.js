// Icon1: Target
var paper = new Raphael(document.getElementById('target'), 100, 100); //the more verbose option
var target = paper.set();
target.push(paper.circle(50, 50, 35.5).attr({ stroke: "#000", "stroke-width": 14 }));
var dot = paper.set();
dot.push(paper.circle(50, 50, 15).attr("fill", "#000"));
target.push(dot);       
paper.setViewBox(0, 0, 120, 120);
// END Target


// Icon2: Arrow Right, expressed as a 'path;
var paper = Raphael('arrowright', 100, 100); //this version is tidier and here we're passing an absolute path  

var circled = paper.set();
circled.push(paper.circle(48, 48, 44).attr({ fill: "#000", transform: "T30" }));  

var shape = paper.set();
shape.push(paper.path("M13.665,25.725l-3.536-3.539l6.187-6.187l-6.187-6.187l3.536-3.536l9.724,9.723L13.665,25.725z"))
.attr({
  fill: "#fff", 
  transform: "T33, 32 S2, 2"
  });
var set = paper.set();
set.push(circled);
set.push(shape);

paper.setViewBox(0, 0, 120, 120);  
// END Arrow Right


// Icon3: Arrow Right Alt, expressed as a 'path and was created from the RSR Rapid Conversion Tool
// Seems a bit luggy and not as flexible but if the more complex shapes can be scaled, it could be a good fit.  
var paper = Raphael('arrow-right-wide', 100, 100); 
var group_a = paper.set(); 
group_a.attr({
  'clip-path': 'url(#clp1)',
  'fill': 'none',
  'name': 'group_a'
  }); 

var group_b = paper.set(); 
group_b.attr({
  'clip-path': 'url(#clp1)',
  'fill': 'none',
  'parent': 'group_a',
  'name': 'group_b'
  });
group_b.transform("m1 0 0 1 573.4 125.8232 S1.51 T15, 18");

var group_c = paper.set(); 
group_c.attr({
  'clip-path': 'url(#clp1)',
  'fill': 'none',
  'parent': 'group_a',
  'name': 'group_c'
  });
group_c.transform("m1 0 0 1 -610.8813 -530.927 S1.51 T15, 18"); 

var path_d = paper.path("M-543.125-66.823c15.947,0,28.875-12.928,28.875-28.875s-12.928-28.875-28.875-28.875 S-572-111.645-572-95.698S-559.072-66.823-543.125-66.823z")
.attr({
  fill: '#000000',
  "clip-path": 'url(#clp1)',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1'
  }).transform("m1 0 0 1 573.4 125.8232 S1.51 T15, 18").data('id', 'path_d'); 

var path_e = paper.path("M642.85,545.335l-4.014,4.011l8.845,8.844h-21.432v5.673h21.314l-8.845,8.844l4.012,4.012l15.751-15.75 L642.85,545.335z")
.attr({
  fill: '#FFFFFF',
  "clip-path": 'url(#clp1)',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1'
  }).transform("m1 0 0 1 -610.8813 -530.927 S1.51 T15, 18").data('id', 'path_e'); 

var iconGroups = [group_a,group_b,group_c]; group_a.push( ); group_b.push( path_d ); group_c.push( path_e );
paper.setViewBox(0, 0, 120, 120);  
// END Icon: Arrow Right Alt


// Icon4: Circle Band, expressed as a 'path; 
var paper = Raphael('circleband', 100, 100);
var a = paper.circle(50, 50, 35.5).attr({ stroke: "#000", "stroke-width": 14 });
paper.setViewBox(0, 0, 120, 120);
// END Circle Band 


// Icon5: Arrow Right, expressed as a 'path;
var paper = Raphael('arrowleft', 100, 100); //this version is tidier and here we're passing an absolute path  

var circled = paper.set();
circled.push(paper.circle(48, 48, 44).attr({ fill: "#000", transform: "T30" }));  

var shape = paper.set();
shape.push(paper.path("M18.335,6.276l3.536,3.538l-6.187,6.187l6.187,6.187l-3.536,3.537l-9.723-9.724L18.335,6.276z"))
.attr({
  fill: "#fff", 
  transform: "T30, 32 S2, 2"
  });
var set = paper.set();
set.push(circled);
set.push(shape);

paper.setViewBox(-2, -2, 120, 120);  
// END Arrow Right


// Icon6: Arrow Left Wide, expressed as a 'path;
// This was done by hand and the transform function was used to scale   
var paper = Raphael('arrow-left-wide', 100, 100); 
var arrow = paper.set();
arrow.push(paper.circle(48, 48, 44).attr({ fill: "#000" }));

var shape = paper.set();
shape.push(paper.path("M23,50 L45,28 L49,33 L34,47 L69,47 L69,52 L34,52 L49,65 L46,70 L23,50z"))
.attr({
   fill: "#fff", 
   stroke: "#fff", 
   "stroke-width": "3", 
   transform: "T3,0 s.95"
});
var set = paper.set();
set.push(arrow);
set.push(shape);
paper.setViewBox(-2, -2, 120, 120);
// END Arrow Left

 
//STARTER ICONS
//Icon7: Starting Point from Client Side
var startpoint = Raphael('starting_point', 100, 100);
var group_a = startpoint.set();
group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'});
var group_b = startpoint.set();
var path_e = startpoint.path("M-406.553-52.865c14.491,0,26.239-11.747,26.239-26.239s-11.747-26.239-26.239-26.239    s-26.239,11.747-26.239,26.239S-421.044-52.865-406.553-52.865z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 436.7526 109.3038").data('id', 'path_e');
group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});group_b.transform("m1 0 0 1 436.7526 109.3038");
var group_c = startpoint.set();
var path_f = startpoint.path("M-406.553-52.865c14.491,0,26.239-11.747,26.239-26.239    s-11.747-26.239-26.239-26.239s-26.239,11.747-26.239,26.239S-421.044-52.865-406.553-52.865z").attr({stroke: '#000000',"stroke-width": '5.12',"clip-path": 'url(#clp1)',fill: 'none',parent: 'group_a','stroke-opacity': '1'}).transform("m1 0 0 1 436.7526 109.3038").data('id', 'path_f');
group_c.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_c'});group_c.transform("m1 0 0 1 436.7526 109.3038");
var group_d = startpoint.set();
var path_g = startpoint.path("M-93.217-72.693c0.394,0.381,0.866,0.571,1.417,0.571s1.017-0.19,1.397-0.571    c0.38-0.38,0.571-0.846,0.571-1.397c0-0.551-0.191-1.023-0.571-1.417c-0.381-0.394-0.846-0.59-1.397-0.59s-1.023,0.197-1.417,0.59    c-0.394,0.394-0.59,0.866-0.59,1.417C-93.808-73.539-93.611-73.073-93.217-72.693z M-93.257-86.055    c0.394,0.394,0.866,0.59,1.417,0.59c0.551,0,1.023-0.197,1.417-0.59c0.394-0.394,0.59-0.866,0.59-1.417s-0.197-1.023-0.59-1.417    c-0.394-0.394-0.866-0.59-1.417-0.59c-0.551,0-1.023,0.197-1.417,0.59c-0.394,0.394-0.59,0.866-0.59,1.417    S-93.65-86.449-93.257-86.055z M-93.257-90.503c0.394,0.394,0.866,0.59,1.417,0.59c0.551,0,1.017-0.197,1.397-0.59    c0.38-0.394,0.571-0.866,0.571-1.417c0-0.551-0.191-1.023-0.571-1.417c-0.381-0.394-0.846-0.59-1.397-0.59    c-0.551,0-1.023,0.197-1.417,0.59c-0.394,0.394-0.59,0.866-0.59,1.417C-93.847-91.369-93.65-90.896-93.257-90.503z     M-88.061-68.147c0.394,0.394,0.866,0.59,1.417,0.59c0.551,0,1.017-0.197,1.397-0.59c0.38-0.394,0.571-0.866,0.571-1.417    c0-0.551-0.191-1.017-0.571-1.397c-0.381-0.38-0.846-0.571-1.397-0.571c-0.551,0-1.023,0.191-1.417,0.571    c-0.394,0.381-0.59,0.846-0.59,1.397C-88.652-69.013-88.455-68.541-88.061-68.147z M-88.101-81.51    c0.394,0.381,0.866,0.571,1.417,0.571c0.551,0,1.023-0.19,1.417-0.571c0.394-0.38,0.59-0.846,0.59-1.397    c0-0.551-0.197-1.023-0.59-1.417s-0.866-0.59-1.417-0.59c-0.551,0-1.023,0.197-1.417,0.59s-0.59,0.866-0.59,1.417    C-88.691-82.356-88.494-81.89-88.101-81.51z M-88.12-94.872c0.38,0.394,0.846,0.59,1.397,0.59c0.551,0,1.023-0.197,1.417-0.59    c0.394-0.394,0.59-0.866,0.59-1.417c0-0.551-0.197-1.023-0.59-1.417c-0.394-0.394-0.866-0.59-1.417-0.59    c-0.551,0-1.017,0.197-1.397,0.59c-0.381,0.394-0.571,0.866-0.571,1.417C-88.691-95.738-88.501-95.265-88.12-94.872z     M-82.807-68.265c0.38,0.394,0.846,0.59,1.397,0.59s1.023-0.197,1.417-0.59c0.394-0.394,0.59-0.866,0.59-1.417    c0-0.551-0.197-1.017-0.59-1.397c-0.394-0.38-0.866-0.571-1.417-0.571s-1.017,0.191-1.397,0.571    c-0.381,0.381-0.571,0.846-0.571,1.397C-83.378-69.131-83.188-68.659-82.807-68.265z M-82.827-81.628    c0.394,0.381,0.866,0.571,1.417,0.571s1.017-0.19,1.397-0.571c0.38-0.38,0.571-0.846,0.571-1.397s-0.191-1.023-0.571-1.417    c-0.381-0.394-0.846-0.59-1.397-0.59s-1.023,0.197-1.417,0.59c-0.394,0.394-0.59,0.866-0.59,1.417S-83.22-82.008-82.827-81.628z     M-82.866-94.99c0.394,0.394,0.866,0.59,1.417,0.59s1.023-0.197,1.417-0.59c0.394-0.394,0.59-0.866,0.59-1.417    c0-0.551-0.197-1.023-0.59-1.417c-0.394-0.394-0.866-0.59-1.417-0.59s-1.023,0.197-1.417,0.59c-0.394,0.394-0.59,0.866-0.59,1.417    C-83.456-95.856-83.26-95.383-82.866-94.99z M-77.769-68.265c0.38,0.394,0.846,0.59,1.397,0.59s1.023-0.197,1.417-0.59    c0.394-0.394,0.59-0.866,0.59-1.417c0-0.551-0.197-1.023-0.59-1.417c-0.394-0.394-0.866-0.59-1.417-0.59s-1.017,0.197-1.397,0.59    c-0.381,0.394-0.571,0.866-0.571,1.417C-78.34-69.131-78.15-68.659-77.769-68.265z M-77.808-81.647    c0.38,0.394,0.846,0.59,1.397,0.59s1.023-0.197,1.417-0.59c0.394-0.394,0.59-0.866,0.59-1.417c0-0.551-0.197-1.017-0.59-1.397    c-0.394-0.38-0.866-0.571-1.417-0.571s-1.017,0.191-1.397,0.571c-0.381,0.381-0.571,0.846-0.571,1.397    C-78.379-82.513-78.189-82.041-77.808-81.647z M-77.828-95.009c0.394,0.381,0.866,0.571,1.417,0.571s1.017-0.19,1.397-0.571    c0.38-0.38,0.571-0.846,0.571-1.397c0-0.551-0.191-1.023-0.571-1.417c-0.381-0.394-0.846-0.59-1.397-0.59s-1.023,0.197-1.417,0.59    c-0.394,0.394-0.59,0.866-0.59,1.417C-78.419-95.856-78.222-95.389-77.828-95.009z M-72.593-72.634    c0.394,0.394,0.866,0.59,1.417,0.59c0.551,0,1.017-0.197,1.397-0.59c0.38-0.394,0.571-0.866,0.571-1.417    c0-0.551-0.191-1.023-0.571-1.417c-0.381-0.394-0.846-0.59-1.397-0.59c-0.551,0-1.023,0.197-1.417,0.59s-0.59,0.866-0.59,1.417    C-73.184-73.5-72.987-73.028-72.593-72.634z M-72.613-77.082c0.38,0.394,0.846,0.59,1.397,0.59s1.023-0.197,1.417-0.59    c0.394-0.394,0.59-0.866,0.59-1.417c0-0.551-0.197-1.023-0.59-1.417c-0.394-0.394-0.866-0.59-1.417-0.59s-1.017,0.197-1.397,0.59    c-0.381,0.394-0.571,0.866-0.571,1.417C-73.184-77.948-72.994-77.475-72.613-77.082z M-72.633-90.464    c0.394,0.394,0.866,0.59,1.417,0.59s1.017-0.197,1.397-0.59c0.38-0.394,0.571-0.866,0.571-1.417c0-0.551-0.191-1.017-0.571-1.397    c-0.381-0.38-0.846-0.571-1.397-0.571s-1.023,0.191-1.417,0.571c-0.394,0.381-0.59,0.846-0.59,1.397    C-73.223-91.329-73.026-90.857-72.633-90.464z").attr({fill: '#FFFFFF',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 111.4356 113.2423").data('id', 'path_g');
group_d.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_d'});group_d.transform("m1 0 0 1 111.4356 113.2423");

var startpointGroups = [group_a,group_b,group_c,group_d];
group_a.push(
);
group_b.push(
	path_e 
);
group_c.push(
	path_f 
);
group_d.push(
	path_g 
);
startpoint.setViewBox(0, 0, 77, 77);


//Icon8: Ending Point from Client Side  
var endpoint = Raphael('ending_point', 100, 100);
var group_a = endpoint.set();
group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'});
var group_b = endpoint.set();
var path_d = endpoint.path("M-542.875-66.573c15.947,0,28.875-12.928,28.875-28.875s-12.928-28.875-28.875-28.875    s-28.875,12.928-28.875,28.875S-558.822-66.573-542.875-66.573z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 573 125.5732").data('id', 'path_d');
group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});group_b.transform("m1 0 0 1 573 125.5732");
var group_c = endpoint.set();
var path_e = endpoint.path("M-63.589-38.688c0.401,0.401,0.881,0.601,1.442,0.601s1.041-0.2,1.442-0.601    c0.401-0.401,0.601-0.881,0.601-1.442c0-0.561-0.2-1.041-0.601-1.442c-0.401-0.401-0.881-0.601-1.442-0.601    s-1.041,0.2-1.442,0.601c-0.401,0.401-0.601,0.881-0.601,1.442C-64.19-39.569-63.989-39.089-63.589-38.688z M-63.589-43.234    c0.401,0.387,0.881,0.581,1.442,0.581s1.034-0.193,1.422-0.581c0.387-0.387,0.581-0.861,0.581-1.422s-0.194-1.041-0.581-1.442    c-0.387-0.401-0.861-0.601-1.422-0.601s-1.041,0.2-1.442,0.601c-0.401,0.401-0.601,0.881-0.601,1.442    S-63.989-43.621-63.589-43.234z M-63.609-47.76c0.387,0.387,0.861,0.581,1.422,0.581s1.041-0.193,1.442-0.581    c0.401-0.387,0.601-0.861,0.601-1.422s-0.2-1.041-0.601-1.442c-0.401-0.401-0.881-0.601-1.442-0.601s-1.035,0.2-1.422,0.601    c-0.387,0.401-0.581,0.881-0.581,1.442S-63.996-48.146-63.609-47.76z M-63.629-52.305c0.401,0.401,0.881,0.601,1.442,0.601    s1.041-0.2,1.442-0.601c0.401-0.401,0.601-0.881,0.601-1.442c0-0.561-0.2-1.034-0.601-1.422c-0.401-0.387-0.881-0.581-1.442-0.581    s-1.041,0.194-1.442,0.581c-0.401,0.387-0.601,0.861-0.601,1.422C-64.23-53.186-64.029-52.706-63.629-52.305z M-63.629-56.831    c0.401,0.401,0.881,0.601,1.442,0.601s1.041-0.2,1.442-0.601c0.401-0.401,0.601-0.881,0.601-1.442c0-0.561-0.2-1.041-0.601-1.442    c-0.401-0.401-0.881-0.601-1.442-0.601s-1.041,0.2-1.442,0.601c-0.401,0.401-0.601,0.881-0.601,1.442    C-64.23-57.712-64.029-57.232-63.629-56.831z M-63.629-61.357c0.401,0.401,0.881,0.601,1.442,0.601s1.034-0.2,1.422-0.601    c0.387-0.401,0.581-0.881,0.581-1.442s-0.194-1.041-0.581-1.442c-0.387-0.401-0.861-0.601-1.422-0.601s-1.041,0.2-1.442,0.601    c-0.401,0.401-0.601,0.881-0.601,1.442S-64.029-61.757-63.629-61.357z M-63.649-65.903c0.387,0.387,0.861,0.581,1.422,0.581    s1.041-0.193,1.442-0.581c0.401-0.387,0.601-0.861,0.601-1.422c0-0.561-0.2-1.041-0.601-1.442    c-0.401-0.401-0.881-0.601-1.442-0.601s-1.035,0.2-1.422,0.601c-0.387,0.401-0.581,0.881-0.581,1.442    C-64.23-66.764-64.036-66.289-63.649-65.903z M-58.342-38.608c0.401,0.401,0.881,0.601,1.442,0.601s1.034-0.2,1.422-0.601    c0.387-0.401,0.581-0.881,0.581-1.442s-0.194-1.034-0.581-1.422c-0.387-0.387-0.861-0.581-1.422-0.581s-1.041,0.194-1.442,0.581    c-0.401,0.387-0.601,0.861-0.601,1.422S-58.743-39.008-58.342-38.608z M-58.382-52.205c0.401,0.387,0.881,0.581,1.442,0.581    c0.561,0,1.041-0.193,1.442-0.581c0.401-0.387,0.601-0.861,0.601-1.422s-0.2-1.041-0.601-1.442    c-0.401-0.401-0.881-0.601-1.442-0.601c-0.561,0-1.041,0.2-1.442,0.601c-0.401,0.401-0.601,0.881-0.601,1.442    S-58.783-52.592-58.382-52.205z M-58.402-65.803c0.387,0.401,0.861,0.601,1.422,0.601c0.561,0,1.041-0.2,1.442-0.601    c0.401-0.401,0.601-0.881,0.601-1.442s-0.2-1.041-0.601-1.442c-0.401-0.401-0.881-0.601-1.442-0.601    c-0.561,0-1.035,0.2-1.422,0.601c-0.387,0.401-0.581,0.881-0.581,1.442S-58.79-66.203-58.402-65.803z M-52.995-38.728    c0.387,0.401,0.861,0.601,1.422,0.601s1.041-0.2,1.442-0.601c0.401-0.401,0.601-0.881,0.601-1.442s-0.2-1.034-0.601-1.422    c-0.401-0.387-0.881-0.581-1.442-0.581s-1.035,0.194-1.422,0.581c-0.387,0.387-0.581,0.861-0.581,1.422    S-53.383-39.129-52.995-38.728z M-53.015-52.325c0.401,0.387,0.881,0.581,1.442,0.581s1.034-0.193,1.422-0.581    c0.387-0.387,0.581-0.861,0.581-1.422c0-0.561-0.194-1.041-0.581-1.442c-0.387-0.401-0.861-0.601-1.422-0.601    s-1.041,0.2-1.442,0.601c-0.401,0.401-0.601,0.881-0.601,1.442C-53.616-53.186-53.416-52.712-53.015-52.325z M-53.055-65.923    c0.401,0.401,0.881,0.601,1.442,0.601c0.561,0,1.041-0.2,1.442-0.601c0.401-0.401,0.601-0.881,0.601-1.442s-0.2-1.041-0.601-1.442    c-0.401-0.401-0.881-0.601-1.442-0.601c-0.561,0-1.041,0.2-1.442,0.601c-0.401,0.401-0.601,0.881-0.601,1.442    S-53.456-66.323-53.055-65.923z M-47.869-38.728c0.387,0.401,0.861,0.601,1.422,0.601s1.041-0.2,1.442-0.601    c0.401-0.401,0.601-0.881,0.601-1.442s-0.2-1.041-0.601-1.442c-0.401-0.401-0.881-0.601-1.442-0.601s-1.035,0.2-1.422,0.601    c-0.387,0.401-0.581,0.881-0.581,1.442S-48.256-39.129-47.869-38.728z M-47.909-52.345c0.387,0.401,0.861,0.601,1.422,0.601    s1.041-0.2,1.442-0.601c0.401-0.401,0.601-0.881,0.601-1.442c0-0.561-0.2-1.034-0.601-1.422c-0.401-0.387-0.881-0.581-1.442-0.581    s-1.035,0.194-1.422,0.581c-0.387,0.387-0.581,0.861-0.581,1.422C-48.49-53.227-48.296-52.746-47.909-52.345z M-47.929-65.943    c0.401,0.387,0.881,0.581,1.442,0.581s1.034-0.193,1.422-0.581c0.387-0.387,0.581-0.861,0.581-1.422s-0.194-1.041-0.581-1.442    c-0.387-0.401-0.861-0.601-1.422-0.601s-1.041,0.2-1.442,0.601c-0.401,0.401-0.601,0.881-0.601,1.442    S-48.329-66.329-47.929-65.943z M-42.602-38.648c0.401,0.401,0.881,0.601,1.442,0.601c0.561,0,1.041-0.2,1.442-0.601    c0.401-0.401,0.601-0.881,0.601-1.442c0-0.561-0.2-1.034-0.601-1.422c-0.401-0.387-0.881-0.581-1.442-0.581    c-0.561,0-1.041,0.194-1.442,0.581c-0.401,0.387-0.601,0.861-0.601,1.422C-43.203-39.529-43.003-39.048-42.602-38.648z     M-42.622-52.245c0.387,0.387,0.861,0.581,1.422,0.581c0.561,0,1.041-0.193,1.442-0.581c0.401-0.387,0.601-0.861,0.601-1.422    s-0.2-1.041-0.601-1.442c-0.401-0.401-0.881-0.601-1.442-0.601c-0.561,0-1.035,0.2-1.422,0.601    c-0.387,0.401-0.581,0.881-0.581,1.442S-43.01-52.632-42.622-52.245z M-42.662-65.843c0.387,0.401,0.861,0.601,1.422,0.601    c0.561,0,1.041-0.2,1.442-0.601c0.401-0.401,0.601-0.881,0.601-1.442s-0.2-1.041-0.601-1.442    c-0.401-0.401-0.881-0.601-1.442-0.601c-0.561,0-1.035,0.2-1.422,0.601c-0.387,0.401-0.581,0.881-0.581,1.442    S-43.05-66.243-42.662-65.843z").attr({fill: '#FFFFFF',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 81.4737 84.0071").data('id', 'path_e');
group_c.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_c'});group_c.transform("m1 0 0 1 81.4737 84.0071");

var endpointGroups = [group_a,group_b,group_c];
group_a.push(
);
group_b.push(
	path_d 
);
group_c.push(
	path_e 
);
endpoint.setViewBox(0, 0, 78.15, 78.15);  


// Icon9: Arrow Right Wide Alt, expressed as a 'path;
// This was done by hand and the transform function was used to scale   
var paper = Raphael('arrow-right-wide2', 100, 100); 
var arrow = paper.set();
arrow.push(paper.circle(48, 48, 44).attr({ fill: "#000" }));

var shape = paper.set();
shape.push(paper.path("M23,50 L45,28 L49,33 L34,47 L69,47 L69,52 L34,52 L49,65 L46,70 L23,50z"))
.attr({
  fill: "#fff", 
  stroke: "#fff", 
  "stroke-width": "3", 
  transform: "T3,0 s-.95"
  });
var set = paper.set();
set.push(arrow);
set.push(shape);

// viewbox takes (x, y, w, h);
paper.setViewBox(0, 0, 122, 122);
// END Arrow Right Wide Alternative


// Icon10: OpenTarget
var paper = new Raphael(document.getElementById('open-target'), 100, 100); //the more verbose option
var opentarget = paper.set();
opentarget.push(paper.circle(50, 50, 40).attr({ stroke: "#000", "stroke-width": 10 }));
var dot = paper.set();
dot.push(paper.circle(50, 50, 20).attr({ stroke: "#000", "stroke-width": 10 }));
opentarget.push(dot);       
paper.setViewBox(0, 0, 122, 122);
// END Target


// Icon11: Open Arrow Right, expressed as a 'path;
var paper = Raphael('open-arrowright', 100, 100); //this version is tidier and here we're passing an absolute path  

var circled = paper.set();
circled.push(paper.circle(48, 48, 40).attr({ stroke: "#000", "stroke-width": 10 }));  

var shape = paper.set();
shape.push(paper.path("M13.665,25.725l-3.536-3.539l6.187-6.187l-6.187-6.187l3.536-3.536l9.724,9.723L13.665,25.725z"))
.attr({
  fill: "#000", 
  transform: "T33, 32 S2, 2"
  });
var set = paper.set();
set.push(circled);
set.push(shape);

paper.setViewBox(0, 0, 120, 120);  
// END Arrow Right        


// Icon12: Arrow Right Wide Alt, expressed as a 'path;
// This was done by hand and the transform function was used to scale   
var paper = Raphael('open-arrow-right-wide', 100, 100); 
var arrow = paper.set();
arrow.push(paper.circle(48, 48, 40).attr({ stroke: "#000", "stroke-width": 10 }));

var shape = paper.set();
shape.push(paper.path("M23,50 L45,28 L49,33 L34,47 L69,47 L69,52 L34,52 L49,65 L46,70 L23,50z"))
.attr({
  fill: "#000", 
  stroke: "#000", 
  "stroke-width": "3", 
  transform: "T3,0 s-.95"
  });
var set = paper.set();
set.push(arrow);
set.push(shape);

// viewbox takes (x, y, w, h);
paper.setViewBox(0, 0, 120, 120);
// END Arrow Right Wide Alternative


// Icon13: Circle Band, expressed as a 'path; 
var paper = Raphael('open-circleband', 100, 100);
var a = paper.circle(50, 50, 40).attr({ stroke: "#000", "stroke-width": 10 });
var b = paper.circle(50, 50, 20).attr({ fill: "#000" }); 
paper.setViewBox(0, 0, 122, 122);
// END Circle Band


// Icon14: Open Arrow Right, expressed as a 'path;
var paper = Raphael('open-arrowleft', 100, 100); //this version is tidier and here we're passing an absolute path  

var circled = paper.set();
circled.push(paper.circle(48, 48, 40).attr({ stroke: "#000", "stroke-width": 10 }));  

var shape = paper.set();
shape.push(paper.path("M13.665,25.725l-3.536-3.539l6.187-6.187l-6.187-6.187l3.536-3.536l9.724,9.723L13.665,25.725z"))
.attr({
  fill: "#000", 
  transform: "T30, 32 S-2, 2"
  });
var set = paper.set();
set.push(circled);
set.push(shape);

paper.setViewBox(0, 0, 120, 120);  
// END Arrow Right


// Icon15: Arrow Right Wide Alt, expressed as a 'path;
// This was done by hand and the transform function was used to scale   
var paper = Raphael('open-arrow-left-wide', 100, 100); 
var arrow = paper.set();
arrow.push(paper.circle(48, 48, 40).attr({ stroke: "#000", "stroke-width": 10  }));

var shape = paper.set();
shape.push(paper.path("M23,50 L45,28 L49,33 L34,47 L69,47 L69,52 L34,52 L49,65 L46,70 L23,50z"))
.attr({
  fill: "#000", 
  stroke: "#000", 
  "stroke-width": "3", 
  transform: "T3,0 s.95"
  });
var set = paper.set();
set.push(arrow);
set.push(shape);

// viewbox takes (x, y, w, h);
paper.setViewBox(0, 0, 120, 120);
// END Arrow Right Wide Alternative


// Icon16: Open Arrow Right, expressed as a 'path; using the rsr library
var zoom = Raphael('zoom', 100, 100); 
var group_a = zoom.set(); group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'}); 
var group_b = zoom.set(); var path_c = zoom.path("M878.536,568.364c-16.016,0-28.996,12.98-28.996,28.996c0,16.012,12.98,28.995,28.996,28.995 c16.008,0,28.996-12.982,28.996-28.995C907.533,581.345,894.545,568.364,878.536,568.364z M893.374,600.475h-11.493v11.493h-6.222 v-11.493h-11.493v-6.222h11.493v-11.493h6.222v11.493h11.493V600.475z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -848.4399 -567.2645").data('id', 'path_c'); group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});
group_b.transform("m1 0 0 1 -848.4399 -567.2645"); 
var zoomGroups = [group_a,group_b]; group_a.push( ); group_b.push( path_c );

zoom.setViewBox(-2, -2, 80, 80);  
// END Zoom

// Icon17: Zoomed, expressed as a 'path;
// This was done by hand and the transform function was used to scale  
var paper = Raphael('plus', 100, 100);  
var circled = paper.set();
circled.push(paper.circle(48, 48, 44).attr({ fill: "#000", transform: "T30" }));  
var x = paper.set();
x.push(paper.path("M48,27 L48, 72z"))
.attr({
  stroke: "#fff",
  "stroke-width": "9.5" 
  });
var y = paper.set(); 
y.push(paper.path("M26,50 L70, 50z"))
.attr({
    stroke: "#fff",
    "stroke-width": "9.5" 
});
var set = paper.set();
set.push(circled);
set.push(x);
set.push(y);

paper.setViewBox(0, 0, 120, 120);  
// END Plus


// Icon18: Minus, expressed as a 'path;
// This was done by hand and the transform function was used to scale  
var paper = Raphael('minus', 100, 100);  
var circled = paper.set();
circled.push(paper.circle(48, 48, 44).attr({ fill: "#000", transform: "T30" }));  
var y = paper.set(); 
y.push(paper.path("M26,50 L70, 50z"))
.attr({
    stroke: "#fff",
    "stroke-width": "9.5" 
});
var set = paper.set();
set.push(circled);
set.push(y);

paper.setViewBox(0, 0, 120, 120);  
// END Minus 

// Icon19: Target
var paper = new Raphael(document.getElementById('dot'), 100, 100); //the more verbose option
var target = paper.set();
target.push(paper.circle(50, 50, 44).attr({ fill: "#eb6924", "stroke-width": 0 }));
paper.setViewBox(0, 0, 120, 120);
// END Target 


// Icon20: Happy Face
var h = Raphael('happy', 100, 100);
var group_a = h.set();
group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'});
var group_b = h.set();
var path_f = h.path("M769.503,596.368c-15.945,0-28.871,12.928-28.871,28.875c0,15.947,12.926,28.875,28.871,28.875    c15.949,0,28.879-12.928,28.879-28.875C798.382,609.296,785.452,596.368,769.503,596.368z M769.503,646.252    c-11.603,0-21.006-9.407-21.006-21.009c0-11.603,9.403-21.009,21.006-21.009c11.603,0,21.009,9.406,21.009,21.009    C790.512,636.845,781.106,646.252,769.503,646.252z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -739.4649 -594.9511").data('id', 'path_f');
group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});group_b.transform("m1 0 0 1 -739.4649 -594.9511");
var group_c = h.set();
var path_g = h.path("M764.179,621.764c0-2.552-2.068-4.62-4.621-4.62c-2.549,0-4.617,2.068-4.617,4.62    c0,2.552,2.068,4.62,4.617,4.62C762.111,626.384,764.179,624.316,764.179,621.764z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -739.4649 -594.9511").data('id', 'path_g');
group_c.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_c'});group_c.transform("m1 0 0 1 -739.4649 -594.9511");
var group_d = h.set();
var path_h = h.path("M779.451,617.144c-2.553,0-4.621,2.068-4.621,4.62c0,2.552,2.068,4.62,4.621,4.62    c2.553,0,4.621-2.068,4.621-4.62C784.072,619.212,782.004,617.144,779.451,617.144z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -739.4649 -594.9511").data('id', 'path_h');
group_d.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_d'});group_d.transform("m1 0 0 1 -739.4649 -594.9511");
var group_e = h.set();
var path_i = h.path("M776.737,634.156c-2.038,1.506-4.519,2.401-7.234,2.401c-2.715,0-5.196-0.895-7.23-2.401    c-0.85-0.635-2.056-0.455-2.688,0.397c-0.635,0.854-0.455,2.058,0.395,2.694c2.651,1.973,5.956,3.162,9.523,3.162    c3.568,0,6.873-1.189,9.527-3.162c0.85-0.635,1.026-1.84,0.395-2.694C778.79,633.701,777.586,633.524,776.737,634.156z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -739.4649 -594.9511").data('id', 'path_i');
group_e.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_e'});group_e.transform("m1 0 0 1 -739.4649 -594.9511");

var hGroups = [group_a,group_b,group_c,group_d,group_e];
group_a.push(
);
group_b.push(
	path_f 
);
group_c.push(
	path_g 
);
group_d.push(
	path_h 
);
group_e.push(
	path_i 
);
h.setViewBox(0, 0, 77, 77);   
// END Happy icon 


// Icon21: Sad Face 
var s = Raphael('sad', 100, 100);
var group_a = s.set();
group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'});
var group_b = s.set();
var path_f = s.path("M769.503,596.368c-15.945,0-28.871,12.928-28.871,28.875c0,15.947,12.926,28.875,28.871,28.875    c15.949,0,28.879-12.928,28.879-28.875C798.382,609.296,785.452,596.368,769.503,596.368z M769.503,646.252    c-11.603,0-21.006-9.407-21.006-21.009c0-11.603,9.403-21.009,21.006-21.009c11.603,0,21.009,9.406,21.009,21.009    C790.512,636.845,781.106,646.252,769.503,646.252z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -739.4649 -594.9511").data('id', 'path_f');
group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});group_b.transform("m1 0 0 1 -739.4649 -594.9511");
var group_c = s.set();
var path_g = s.path("M764.179,621.764c0-2.552-2.068-4.62-4.621-4.62c-2.549,0-4.617,2.068-4.617,4.62    c0,2.552,2.068,4.62,4.617,4.62C762.111,626.384,764.179,624.316,764.179,621.764z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -739.4649 -594.9511").data('id', 'path_g');
group_c.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_c'});group_c.transform("m1 0 0 1 -739.4649 -594.9511");
var group_d = s.set();
var path_h = s.path("M779.451,617.144c-2.553,0-4.621,2.068-4.621,4.62c0,2.552,2.068,4.62,4.621,4.62    c2.553,0,4.621-2.068,4.621-4.62C784.072,619.212,782.004,617.144,779.451,617.144z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -739.4649 -594.9511").data('id', 'path_h');
group_d.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_d'});group_d.transform("m1 0 0 1 -739.4649 -594.9511");
var group_e = s.set();
var path_i = s.path("M776.737,634.156c-2.038,1.506-4.519,2.401-7.234,2.401c-2.715,0-5.196-0.895-7.23-2.401    c-0.85-0.635-2.056-0.455-2.688,0.397c-0.635,0.854-0.455,2.058,0.395,2.694c2.651,1.973,5.956,3.162,9.523,3.162    c3.568,0,6.873-1.189,9.527-3.162c0.85-0.635,1.026-1.84,0.395-2.694C778.79,633.701,777.586,633.524,776.737,634.156z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m-1 0 0 -1 799.5431 678.2336").data('id', 'path_i');
group_e.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_e'});group_e.transform("m-1 0 0 -1 799.5431 678.2336");


var sGroups = [group_a,group_b,group_c,group_d,group_e];
group_a.push(
);
group_b.push(
	path_f 
);
group_c.push(
	path_g 
);
group_d.push(
	path_h 
);
group_e.push(
	path_i 
);
s.setViewBox(0, 0, 77, 77);
// END Sad icon 


// Icon22: Code icon   
var code = Raphael('code-tag', 100, 100);
var group_a = code.set();
group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'});
var group_b = code.set();
var path_e = code.path("M611.434,605.268c0,0,24.08,24.08,24.08,24.08l15.911-4.264l4.262-15.913c0,0-24.08-24.08-24.08-24.08    c9.621-2.608,20.323-0.157,27.875,7.394c11.23,11.226,11.23,29.43,0,40.658c-11.226,11.228-29.432,11.228-40.658,0    C611.273,625.59,608.826,614.887,611.434,605.268z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m0.7071 0.7071 -0.7071 0.7071 11.4588 -855.0244").data('id', 'path_e');
group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});
group_b.transform("m0.7071 0.7071 -0.7071 0.7071 11.4588 -855.0244");
var group_c = code.set();
var path_f = code.path("M642.946,724.562l-6.557-0.777l-0.705,5.444l12.249,1.453l1.521-11.722l-5.692-0.676L642.946,724.562z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m0.7934 0.6088 -0.6088 0.7934 -38.8993 -932.9108").data('id', 'path_f');
group_c.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_c'});
group_c.transform("m0.7934 0.6088 -0.6088 0.7934 -38.8993 -932.9108");
var group_d = code.set();
var path_g = code.path("M646.818,729.252l-6.557-0.777l-0.705,5.444l12.249,1.453l1.521-11.722l-5.692-0.676L646.818,729.252z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m-0.7934 -0.6088 0.6088 -0.7934 99.2842 993.9436").data('id', 'path_g');
group_d.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_d'});
group_d.transform("m-0.7934 -0.6088 0.6088 -0.7934 99.2842 993.9436");

var codeGroups = [group_a,group_b,group_c,group_d];
group_a.push(
);
group_b.push(
	path_e 
);
group_c.push(
	path_f 
);
group_d.push(
	path_g 
);
code.setViewBox(0, 0, 77, 77);   
// END Code icon 


// Icon23: Computer icon
var computer = Raphael('computer-tag', 100, 100);
var group_a = computer.set();
group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'});
var group_b = computer.set();
var path_c = computer.path("M232.485,431.693c0,0-50.347,0-50.347,0c-0.794,0-1.439,0.649-1.439,1.439c0,0,0,37.403,0,37.403    c0,0.792,0.645,1.439,1.439,1.439c0,0,16.811,0,16.811,0v5.037c0,0-11.96,0-11.96,0c-0.79,0-1.439,0.647-1.439,1.439    c0,0,0,4.189,0,4.189c0,0.79,0.649,1.439,1.439,1.439c0,0,40.647,0,40.647,0c0.79,0,1.435-0.649,1.435-1.439c0,0,0-4.189,0-4.189    c0-0.792-0.645-1.439-1.435-1.439c0,0-11.96,0-11.96,0v-5.037c0,0,16.808,0,16.808,0c0.792,0,1.441-0.647,1.441-1.439    c0,0,0-37.403,0-37.403C233.926,432.342,233.277,431.693,232.485,431.693z M226.734,463.341c0,0.794-0.649,1.441-1.443,1.441    c0,0-35.962,0-35.962,0c-0.792,0-1.439-0.647-1.439-1.441c0,0,0-23.018,0-23.018c0-0.788,0.647-1.435,1.439-1.435    c0,0,35.962,0,35.962,0c0.794,0,1.443,0.647,1.443,1.435C226.734,440.323,226.734,463.341,226.734,463.341z").attr({fill: '#000000',"clip-path": 'url(#clp1)',
parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -177.8121 -427.7189").data('id', 'path_c');
group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});
group_b.transform("m1 0 0 1 -177.8121 -427.7189");

var computerGroups = [group_a,group_b];
group_a.push(
);
group_b.push(
	path_c 
);
computer.setViewBox(0, 0, 77, 77);   
// END Computer icon    


// Icon24: Burst icon 
var burst = Raphael('burst', 100, 100); 
var group_a = burst.set(); 
group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'}); 
var group_b = burst.set(); 
var path_c = burst.path("M1011.794,376.077l7.197,8.86l-11.028,2.935l0.612,11.401l-10.648-4.107l-6.202,9.579l-6.201-9.579 l-10.649,4.107l0.612-11.401l-11.028-2.935l7.197-8.86l-7.197-8.86l11.028-2.939l-0.612-11.396l10.649,4.107l6.201-9.579 l6.202,9.575l10.648-4.104l-0.616,11.396l11.032,2.939L1011.794,376.077z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -962.0441 -345.9106").data('id', 'path_c'); 
group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});
group_b.transform("m1 0 0 1 -962.0441 -345.9106"); 
var burstGroups = [group_a,group_b]; group_a.push( ); group_b.push( path_c );
burst.setViewBox(0, 0, 75, 75);  
// END Burst icon 


// Icon25: Burst icon 
var burst = Raphael('burst-orange', 100, 100); 
var group_a = burst.set(); 
group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'}); 
var group_b = burst.set(); 
var path_c = burst.path("M1011.794,376.077l7.197,8.86l-11.028,2.935l0.612,11.401l-10.648-4.107l-6.202,9.579l-6.201-9.579 l-10.649,4.107l0.612-11.401l-11.028-2.935l7.197-8.86l-7.197-8.86l11.028-2.939l-0.612-11.396l10.649,4.107l6.201-9.579 l6.202,9.575l10.648-4.104l-0.616,11.396l11.032,2.939L1011.794,376.077z").attr({fill: '#eb6924',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -962.0441 -345.9106").data('id', 'path_c'); 
group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});
group_b.transform("m1 0 0 1 -962.0441 -345.9106"); 
var burstGroups = [group_a,group_b]; group_a.push( ); group_b.push( path_c );
burst.setViewBox(0, 0, 75, 75);  
// END Burst icon


// Icon26: Arrow icon
var arrow = Raphael('arrow-left', 100, 100); 
var group_a = arrow.set(); 
group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'}); 
var group_b = arrow.set(); 
var path_c = arrow.path("M1027.998,439.053l-9.159-20.812c0,0,0-23.747,0-23.747c0-6.374-5.172-11.546-11.553-11.546 c0,0-23.74,0-23.74,0c-6.381,0-11.547,5.172-11.547,11.546c0,0,0,23.747,0,23.747c0,6.378,5.166,11.546,11.547,11.546 c0,0,23.74,0,23.74,0L1027.998,439.053z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m0 1 -1 0 440.835 -970.1126").data('id', 'path_c'); 
group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});
group_b.transform("m0 1 -1 0 440.835 -970.1126"); var rsrGroups = [group_a,group_b]; group_a.push( ); group_b.push( path_c );
arrow.setViewBox(0, 0, 80, 80);  
// END Arrow icon

// Icon27: Arrow icon
var arrowdown = Raphael('arrow-down',100, 100);
var group_a = arrowdown.set();
group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'});
var group_b = arrowdown.set();
var path_c = arrowdown.path("M975.4,602.345c0,0-20.943,0-20.943,0c-4.868,0-8.817,3.948-8.817,8.819c0,0,0,27.919,0,27.919    l19.291,19.291l19.291-19.291c0,0,0-27.919,0-27.919C984.222,606.294,980.273,602.345,975.4,602.345z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 -935.431 -600.3235").data('id', 'path_c');
group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});group_b.transform("m1 0 0 1 -935.431 -600.3235");

var arrowdownGroups = [group_a,group_b];
group_a.push(
);
group_b.push(
	path_c 
);
arrowdown.setViewBox(0, 0, 77, 77);  
// END Arrow icon      