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
ids.push("1-17-1-3");
ids.push("1-22-1-3");
ids.push("1-18-1-3-1");
ids.push("1-19-1-3-1");
ids.push("1-23-1-3-1");
ids.push("1-20-1-2");
ids.push("1-21-1-2-1");
ids.push("1-24-3-2");
ids.push("1-25-1-4-1");
ids.push("1-26-1-4-1");
ids.push("1-27-3-3");
ids.push("1-28-1-5-1");
ids.push("1-29-3-3");
ids.push("1-30-1-5");
ids.push("1-31-1-3-2");
ids.push("1-31-1-3-3");
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
