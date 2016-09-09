//Initialization
vips = new VipsAPI(); //our API
globalBlocks = vips.getVisualBlockList(); //the list that contains your data, each item is a data element

//hard coded visualization

// This is one example, you have to copy paste the result from python to visualize it.
ids = ['1-2',
  '1-5',
  '1-41',
  '1-42',
  '1-43',
  '1-44',
  '1-45',
  '1-46',
  '1-47',
  '1-3-1',
  '1-4-1',
  '1-4-2',
  '1-4-3',
  '1-4-4',
  '1-4-5',
  '1-4-6',
  '1-5-1',
  '1-6-1',
  '1-8-1',
  '1-41-3',
  '1-41-4',
  '1-3-2-1',
  '1-3-2-2',
  '1-3-2-3',
  '1-3-2-4',
  '1-8-1-1',
  '1-8-1-2'];
ids2 = ['1-8-4',
  '1-15-1',
  '1-29-4',
  '1-9-1-1',
  '1-9-2-1',
  '1-9-2-2',
  '1-10-1-1',
  '1-10-2-1',
  '1-10-2-2',
  '1-11-2-1',
  '1-11-2-2',
  '1-12-1-1',
  '1-12-2-1',
  '1-12-2-2',
  '1-13-1-1',
  '1-13-2-1',
  '1-13-2-2',
  '1-14-1-1',
  '1-14-2-1',
  '1-14-2-2',
  '1-15-2-1',
  '1-15-2-2',
  '1-16-1-1',
  '1-16-2-1',
  '1-16-2-2',
  '1-17-1-1',
  '1-17-2-1',
  '1-17-2-2',
  '1-18-1-1',
  '1-18-2-1',
  '1-18-2-2',
  '1-19-1-1',
  '1-19-2-1',
  '1-19-2-2',
  '1-20-1-1',
  '1-20-2-1',
  '1-20-2-2',
  '1-21-1-1',
  '1-21-2-1',
  '1-21-2-2',
  '1-22-1-1',
  '1-22-2-1',
  '1-22-2-2',
  '1-23-1-1',
  '1-23-2-1',
  '1-23-2-2',
  '1-24-1-1',
  '1-24-2-1',
  '1-24-2-2',
  '1-25-1-1',
  '1-25-2-1',
  '1-25-2-2',
  '1-26-1-1',
  '1-26-2-1',
  '1-26-2-2',
  '1-27-1-1',
  '1-27-2-1',
  '1-27-2-2',
  '1-28-1-1',
  '1-28-2-1',
  '1-28-2-2',
  '1-11-1-1-1'];
ids3 = ['1-10-2',
  '1-14-2',
  '1-15-2',
  '1-16-2',
  '1-19-2',
  '1-20-2',
  '1-21-2',
  '1-22-2',
  '1-25-2',
  '1-26-2'];
ids4 = ['1-49',
  '1-9-1',
  '1-10-1',
  '1-12-1',
  '1-13-1',
  '1-14-1',
  '1-16-1',
  '1-17-1',
  '1-18-1',
  '1-19-1',
  '1-20-1',
  '1-21-1',
  '1-22-1',
  '1-23-1',
  '1-24-1',
  '1-25-1',
  '1-26-1',
  '1-27-1',
  '1-28-1',
  '1-11-1-1'];
ids5 = ['1-36-1',
  '1-36-2',
  '1-36-3',
  '1-36-4',
  '1-36-5',
  '1-36-6',
  '1-36-7',
  '1-36-8',
  '1-36-9',
  '1-36-10',
  '1-36-11'];
ids6 = ['1-37-1',
  '1-37-3',
  '1-37-2-1',
  '1-37-2-2',
  '1-37-2-3',
  '1-37-4-1',
  '1-37-4-2',
  '1-37-4-3',
  '1-37-4-4',
  '1-37-4-5'];
ids7 = ['1-38-1',
  '1-38-3',
  '1-38-2-1',
  '1-38-2-2',
  '1-38-2-3',
  '1-38-2-4',
  '1-38-2-5',
  '1-38-4-1',
  '1-38-4-2',
  '1-38-4-3',
  '1-38-4-4'];
ids8 = ['1-41-1', '1-41-2', '1-48-2', '1-48-3', '1-48-4', '1-48-5'];
 

//Visualization
for (var i = 0; i < globalBlocks.length; i++) {
  globalBlocks[i]['-att-box'].style.border = "";
}
for (var i = 0; i < globalBlocks.length; i++) {
  for (var j = 0; j < ids.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid blue";
     }
  }

  for (var j = 0; j < ids2.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids2[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid yellow";
     }
  }
  for (var j = 0; j < ids3.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids3[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid black";
     }
  }
  for (var j = 0; j < ids4.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids4[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid green";
     }
  }
  for (var j = 0; j < ids5.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids5[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid red";
     }
  }
  for (var j = 0; j < ids6.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids6[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid gray";
     }
  }
  for (var j = 0; j < ids7.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids7[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid teal";
     }
  }
  for (var j = 0; j < ids8.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids8[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid aqua";
     }
  }
  /*
    for (var j = 0; j < ids16.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids16[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid maroon";
     }
  }
    for (var j = 0; j < ids17.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids17[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid brown";
     }
  }
    for (var j = 0; j < ids18.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids18[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid #2B65EC";
     }
  }
  */
}

/*
for (var i = 0; i < globalBlocks.length; i++) {
	globalBlocks[i]['-att-box'].style.border = "";
}
for (var i = 0; i < globalBlocks.length; i++) {
	for (var j = 0; j < ids.length; j++) {
    for (var k = 0; k < ids[j].length; k++){
		  if (globalBlocks[i]['-vips-id']===ids[j][k]){
         globalBlocks[i]['-att-box'].style.border = "4px solid";
         globalBlocks[i]['-att-box'].style.border.color = '#'+Math.floor(Math.random()*16777215).toString(16);
       }
    }
	}
}
  for (var j = 0; j < ids2.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids2[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid yellow";
     }
  }
  for (var j = 0; j < ids3.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids3[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid black";
     }
  }
  for (var j = 0; j < ids4.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids4[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid green";
     }
  }
  for (var j = 0; j < ids5.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids5[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid red";
     }
  }
  for (var j = 0; j < ids6.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids6[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid gray";
     }
  }
  for (var j = 0; j < ids7.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids7[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid teal";
     }
  }
  for (var j = 0; j < ids8.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids8[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid aqua";
     }
  }
  for (var j = 0; j < ids9.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids9[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid cyan";
     }
  }
  for (var j = 0; j < ids10.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids10[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid lime";
     }
  }

  for (var j = 0; j < ids11.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids11[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid fuchsia";
     }
  }
  for (var j = 0; j < ids12.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids12[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid orange";
     }
  }


  for (var j = 0; j < ids8.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids11[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid magenta";
     }
  }
  for (var j = 0; j < ids8.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids12[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid orange";
     }
  }

  for (var j = 0; j < ids9.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids9[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid cyan";
     }
  }
  for (var j = 0; j < ids10.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids10[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid lime";
     }
  }

  for (var j = 0; j < ids11.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids11[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid fuchsia";
     }
  }
  for (var j = 0; j < ids12.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids12[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid orange";
     }
  }
    for (var j = 0; j < ids13.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids13[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid olive";
     }
  }
    for (var j = 0; j < ids14.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids14[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid silver";
     }
  }
    for (var j = 0; j < ids15.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids15[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid navy";
      }
  }
    for (var j = 0; j < ids16.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids16[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid maroon";
     }
  }
    for (var j = 0; j < ids17.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids17[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid brown";
     }
  }
    for (var j = 0; j < ids17.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids17[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid #2B65EC";
     }
  }
    for (var j = 0; j < ids18.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids18[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid #728C00";
     }
  }
    for (var j = 0; j < ids19.length; j++) {
     if (globalBlocks[i]['-vips-id']===ids19[j]){
        globalBlocks[i]['-att-box'].style.border = "4px solid #FFF380";
     }
  }
}
*/