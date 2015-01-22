// Icon22: Code icon   
var canvas = Raphael('canvas', 100, 100);
var group_a = canvas.set();
group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'});
var group_b = canvas.set();
var path_e = canvas.path("M611.434,605.268c0,0,24.08,24.08,24.08,24.08l15.911-4.264l4.262-15.913c0,0-24.08-24.08-24.08-24.08    c9.621-2.608,20.323-0.157,27.875,7.394c11.23,11.226,11.23,29.43,0,40.658c-11.226,11.228-29.432,11.228-40.658,0    C611.273,625.59,608.826,614.887,611.434,605.268z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m0.7071 0.7071 -0.7071 0.7071 11.4588 -855.0244").data('id', 'path_e');
group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});
group_b.transform("m0.7071 0.7071 -0.7071 0.7071 11.4588 -855.0244");
var group_c = canvas.set();
var path_f = canvas.path("M642.946,724.562l-6.557-0.777l-0.705,5.444l12.249,1.453l1.521-11.722l-5.692-0.676L642.946,724.562z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m0.7934 0.6088 -0.6088 0.7934 -38.8993 -932.9108").data('id', 'path_f');
group_c.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_c'});
group_c.transform("m0.7934 0.6088 -0.6088 0.7934 -38.8993 -932.9108");
var group_d = canvas.set();
var path_g = canvas.path("M646.818,729.252l-6.557-0.777l-0.705,5.444l12.249,1.453l1.521-11.722l-5.692-0.676L646.818,729.252z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m-0.7934 -0.6088 0.6088 -0.7934 99.2842 993.9436").data('id', 'path_g');
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

// for (var i = 1; i < codeGroups.length; i++) {
//   console.log(codeGroups[i].transform()); 
//   codeGroups[i].transform("r90");
//   }
// console.log(codeGroups);  
 
//$.map(codeGroups, function(set) {
//  return set.transform("r90,t30");
//});
//canvas.setViewBox(0, 0, 57, 57);   
// END Code icon 


//STARTER ICONS
//Icon7: Starting Point from Client Side
// var group_a = canvas.set();
// group_a.attr({'clip-path': 'url(#clp1)','fill': 'none','name': 'group_a'});
// var group_b = canvas.set();
// var path_e = canvas.path("M-406.553-52.865c14.491,0,26.239-11.747,26.239-26.239s-11.747-26.239-26.239-26.239    s-26.239,11.747-26.239,26.239S-421.044-52.865-406.553-52.865z").attr({fill: '#000000',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 436.7526 109.3038").data('id', 'path_e');
// group_b.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_b'});group_b.transform("m1 0 0 1 436.7526 109.3038");
// var group_c = canvas.set();
// var path_f = canvas.path("M-406.553-52.865c14.491,0,26.239-11.747,26.239-26.239    s-11.747-26.239-26.239-26.239s-26.239,11.747-26.239,26.239S-421.044-52.865-406.553-52.865z").attr({stroke: '#000000',"stroke-width": '5.12',"clip-path": 'url(#clp1)',fill: 'none',parent: 'group_a','stroke-opacity': '1'}).transform("m1 0 0 1 436.7526 109.3038").data('id', 'path_f');
// group_c.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_c'});group_c.transform("m1 0 0 1 436.7526 109.3038");
// var group_d = canvas.set();
// var path_g = canvas.path("M-93.217-72.693c0.394,0.381,0.866,0.571,1.417,0.571s1.017-0.19,1.397-0.571    c0.38-0.38,0.571-0.846,0.571-1.397c0-0.551-0.191-1.023-0.571-1.417c-0.381-0.394-0.846-0.59-1.397-0.59s-1.023,0.197-1.417,0.59    c-0.394,0.394-0.59,0.866-0.59,1.417C-93.808-73.539-93.611-73.073-93.217-72.693z M-93.257-86.055    c0.394,0.394,0.866,0.59,1.417,0.59c0.551,0,1.023-0.197,1.417-0.59c0.394-0.394,0.59-0.866,0.59-1.417s-0.197-1.023-0.59-1.417    c-0.394-0.394-0.866-0.59-1.417-0.59c-0.551,0-1.023,0.197-1.417,0.59c-0.394,0.394-0.59,0.866-0.59,1.417    S-93.65-86.449-93.257-86.055z M-93.257-90.503c0.394,0.394,0.866,0.59,1.417,0.59c0.551,0,1.017-0.197,1.397-0.59    c0.38-0.394,0.571-0.866,0.571-1.417c0-0.551-0.191-1.023-0.571-1.417c-0.381-0.394-0.846-0.59-1.397-0.59    c-0.551,0-1.023,0.197-1.417,0.59c-0.394,0.394-0.59,0.866-0.59,1.417C-93.847-91.369-93.65-90.896-93.257-90.503z     M-88.061-68.147c0.394,0.394,0.866,0.59,1.417,0.59c0.551,0,1.017-0.197,1.397-0.59c0.38-0.394,0.571-0.866,0.571-1.417    c0-0.551-0.191-1.017-0.571-1.397c-0.381-0.38-0.846-0.571-1.397-0.571c-0.551,0-1.023,0.191-1.417,0.571    c-0.394,0.381-0.59,0.846-0.59,1.397C-88.652-69.013-88.455-68.541-88.061-68.147z M-88.101-81.51    c0.394,0.381,0.866,0.571,1.417,0.571c0.551,0,1.023-0.19,1.417-0.571c0.394-0.38,0.59-0.846,0.59-1.397    c0-0.551-0.197-1.023-0.59-1.417s-0.866-0.59-1.417-0.59c-0.551,0-1.023,0.197-1.417,0.59s-0.59,0.866-0.59,1.417    C-88.691-82.356-88.494-81.89-88.101-81.51z M-88.12-94.872c0.38,0.394,0.846,0.59,1.397,0.59c0.551,0,1.023-0.197,1.417-0.59    c0.394-0.394,0.59-0.866,0.59-1.417c0-0.551-0.197-1.023-0.59-1.417c-0.394-0.394-0.866-0.59-1.417-0.59    c-0.551,0-1.017,0.197-1.397,0.59c-0.381,0.394-0.571,0.866-0.571,1.417C-88.691-95.738-88.501-95.265-88.12-94.872z     M-82.807-68.265c0.38,0.394,0.846,0.59,1.397,0.59s1.023-0.197,1.417-0.59c0.394-0.394,0.59-0.866,0.59-1.417    c0-0.551-0.197-1.017-0.59-1.397c-0.394-0.38-0.866-0.571-1.417-0.571s-1.017,0.191-1.397,0.571    c-0.381,0.381-0.571,0.846-0.571,1.397C-83.378-69.131-83.188-68.659-82.807-68.265z M-82.827-81.628    c0.394,0.381,0.866,0.571,1.417,0.571s1.017-0.19,1.397-0.571c0.38-0.38,0.571-0.846,0.571-1.397s-0.191-1.023-0.571-1.417    c-0.381-0.394-0.846-0.59-1.397-0.59s-1.023,0.197-1.417,0.59c-0.394,0.394-0.59,0.866-0.59,1.417S-83.22-82.008-82.827-81.628z     M-82.866-94.99c0.394,0.394,0.866,0.59,1.417,0.59s1.023-0.197,1.417-0.59c0.394-0.394,0.59-0.866,0.59-1.417    c0-0.551-0.197-1.023-0.59-1.417c-0.394-0.394-0.866-0.59-1.417-0.59s-1.023,0.197-1.417,0.59c-0.394,0.394-0.59,0.866-0.59,1.417    C-83.456-95.856-83.26-95.383-82.866-94.99z M-77.769-68.265c0.38,0.394,0.846,0.59,1.397,0.59s1.023-0.197,1.417-0.59    c0.394-0.394,0.59-0.866,0.59-1.417c0-0.551-0.197-1.023-0.59-1.417c-0.394-0.394-0.866-0.59-1.417-0.59s-1.017,0.197-1.397,0.59    c-0.381,0.394-0.571,0.866-0.571,1.417C-78.34-69.131-78.15-68.659-77.769-68.265z M-77.808-81.647    c0.38,0.394,0.846,0.59,1.397,0.59s1.023-0.197,1.417-0.59c0.394-0.394,0.59-0.866,0.59-1.417c0-0.551-0.197-1.017-0.59-1.397    c-0.394-0.38-0.866-0.571-1.417-0.571s-1.017,0.191-1.397,0.571c-0.381,0.381-0.571,0.846-0.571,1.397    C-78.379-82.513-78.189-82.041-77.808-81.647z M-77.828-95.009c0.394,0.381,0.866,0.571,1.417,0.571s1.017-0.19,1.397-0.571    c0.38-0.38,0.571-0.846,0.571-1.397c0-0.551-0.191-1.023-0.571-1.417c-0.381-0.394-0.846-0.59-1.397-0.59s-1.023,0.197-1.417,0.59    c-0.394,0.394-0.59,0.866-0.59,1.417C-78.419-95.856-78.222-95.389-77.828-95.009z M-72.593-72.634    c0.394,0.394,0.866,0.59,1.417,0.59c0.551,0,1.017-0.197,1.397-0.59c0.38-0.394,0.571-0.866,0.571-1.417    c0-0.551-0.191-1.023-0.571-1.417c-0.381-0.394-0.846-0.59-1.397-0.59c-0.551,0-1.023,0.197-1.417,0.59s-0.59,0.866-0.59,1.417    C-73.184-73.5-72.987-73.028-72.593-72.634z M-72.613-77.082c0.38,0.394,0.846,0.59,1.397,0.59s1.023-0.197,1.417-0.59    c0.394-0.394,0.59-0.866,0.59-1.417c0-0.551-0.197-1.023-0.59-1.417c-0.394-0.394-0.866-0.59-1.417-0.59s-1.017,0.197-1.397,0.59    c-0.381,0.394-0.571,0.866-0.571,1.417C-73.184-77.948-72.994-77.475-72.613-77.082z M-72.633-90.464    c0.394,0.394,0.866,0.59,1.417,0.59s1.017-0.197,1.397-0.59c0.38-0.394,0.571-0.866,0.571-1.417c0-0.551-0.191-1.017-0.571-1.397    c-0.381-0.38-0.846-0.571-1.397-0.571s-1.023,0.191-1.417,0.571c-0.394,0.381-0.59,0.846-0.59,1.397    C-73.223-91.329-73.026-90.857-72.633-90.464z").attr({fill: '#FFFFFF',"clip-path": 'url(#clp1)',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 111.4356 113.2423").data('id', 'path_g');
// group_d.attr({'clip-path': 'url(#clp1)','fill': 'none','parent': 'group_a','name': 'group_d'});group_d.transform("m1 0 0 1 111.4356 113.2423");
// 
// var starthereGroups = [group_a,group_b,group_c,group_d];
// group_a.push(
// );
// group_b.push(
//  path_e 
// );
// group_c.push(
//  path_f 
// );
// group_d.push(
//  path_g 
// );                      
canvas.setViewBox(-5, -5, 180, 180);
