//  Variables
var originalDoc = app.activeDocument
var bedeName = originalDoc.name.replace(".psd","");
var caseNbr = 1;
var bedeWidth = 1050;
var bedeHeight = 1500;

pngOptions = new PNGSaveOptions()
pngOptions.compression = 0
pngOptions.interlaced = false


// x, y, width, height
// x & y position from top left corner of document
// width & height of selection
//
// makeSelection(10,50,200,100);

function makeSelection(x,y,sw,sh){
    app.activeDocument.selection.select([ [x,y], [x,y+sh], [x+sw,y+sh], [x+sw,y] ]);
}

function caseFromSelection() {

  originalDoc.selection.copy(true);

  var fileName = bedeName + " - C" + caseNbr;

  var newDoc = app.documents.add(1050, 1500, 72, fileName, NewDocumentMode.RGB)
  newDoc.paste();
  newDoc.flatten();
  newDoc.resizeImage(945, 1350);
  newDoc.resizeCanvas(1080, 1350);

  // Set up destination path.
  savePath = File(originalDoc.path + "/insta/" + newDoc.name + ".png");

  // Save!
  newDoc.saveAs(savePath, pngOptions, false, Extension.LOWERCASE);

  // Close the duplicate.
  newDoc.close();

  // Just in case, make sure the active document is the orignal one.
  app.activeDocument=originalDoc;

  caseNbr++;
}

makeSelection(250,200,bedeWidth,bedeHeight);
caseFromSelection();

makeSelection(1300,200,bedeWidth,bedeHeight);
caseFromSelection();

makeSelection(250,1700,bedeWidth,bedeHeight);
caseFromSelection();

makeSelection(1300,1700,bedeWidth,bedeHeight);
caseFromSelection();


// -------- For tumblr

var fileName = "Tumblr - " + bedeName;

makeSelection(200, 150, 2200, 3100);
originalDoc.selection.copy(true);

var newDoc = app.documents.add(2200, 3100, 72, fileName, NewDocumentMode.RGB)
newDoc.paste();
newDoc.flatten();

// Set up destination path.
savePath = File(originalDoc.path + "/Tumblr/" + newDoc.name + ".png");

// Save!
newDoc.saveAs(savePath, pngOptions, false, Extension.LOWERCASE);

// Close the duplicate.
newDoc.close();

// Just in case, make sure the active document is the orignal one.
app.activeDocument=originalDoc;


//Uncomment the line below if you want to close the document.
originalDoc.close(SaveOptions.DONOTSAVECHANGES);
