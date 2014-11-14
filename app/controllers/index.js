function btnClick(e) {
     var w = Alloy.createController('tblView').getView();
     w.navigationWindow=$.nav;
     
     $.nav.openWindow(w);
     
 	 //w.open();
}


$.label.text="Samsung has vigorously expanded its"+"\n"+"Gear line in just a year and now has a full"+"\n"+"family of devices."+"\n"+"Select from the list of devices to learn more.";
							

$.nav.open();
