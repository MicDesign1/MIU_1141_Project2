function btnClicktable (e) {
  var info=e.rowData;
  
  var data=e.row.children[1].text;
  
 // alert(data);
  
  Ti.App.Properties.setString("info",data);
  
  var w = Alloy.createController('vresult').getView();
  $.win.navigationWindow.openWindow(w);
 // w.open();
 	 
}