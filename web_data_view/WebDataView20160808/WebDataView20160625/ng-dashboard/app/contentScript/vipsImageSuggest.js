//Initialization
vips = new VipsAPI(); //our API
globalBlocks = vips.getVisualBlockList(); //the list that contains your data, each item is a data element

//Your algorithm to analyze the data is here
//The following code manually specifies the result as a list of IDs.
//http://infolab.stanford.edu/db_pages/members.html 
/*************************************************************/

alert("just a demo, only works for https://www.rbauction.com/Tandem-Roller-Compactors-Construction?id=ci&s=Y2l8Tj00Mjk0NzQ4MDY5KzQyOTQ5NjIwMjIrNDI5NDc0NTM2NQ==");
ids = [];
ids2 = [];
//leftcolumn: starting "1-6-1"; ending "1-27-1";
s = 1;
e = 7;
for (var i = s; i <= e; i++) {
	ids.push("1-7-"+i+"-1");
}

var a = [24,27,29];
var b = [25,26,28,30,31,32];
var aLength = a.length;
var bLength = b.length;

for (var i = 0; i<aLength; i++ ){
	ids.push("1-"+a[i]+"-2-1");
}

for (var i =0; i<bLength; i++){
	ids.push("1-"+b[i]+"-1-2-1");
}
/*************************************************************/

//Visualize the result
for (var i = 0; i < globalBlocks.length; i++) {
	globalBlocks[i]['-att-box'].style.border = "";
}
for (var i = 0; i < globalBlocks.length; i++) {
	for (var j = 0; j < ids.length; j++) {
		if (globalBlocks[i]['-vips-id']===ids[j])
			globalBlocks[i]['-att-box'].style.border = "4px solid blue";
	}
}
confirm("We think the highlighted blocks are interesting data in this page. Do you want to save it?");
