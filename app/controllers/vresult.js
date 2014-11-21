var data=Ti.App.Properties.getString("info","");


var SGears  = [
    {"GModel":"Gear 2", "GPrice":"$299", "GFunction":"Super AMOLED 1.63 inch touchscreen, camera, voice command, remote controller, SMS/email, music player, Bluetooth, heart rate monitor, dust-proof, water resistant, fast", "GBatt":"2-3 days", "GOpp":"Tizen", "GMemory":"512MB RAM + 4GB internal memory", "GScreen":"320x320px Super AMOLED", "GPower":"1GHz", "GWeight":"2.4 oz", "GCustom":"Band colors, home screen themes, background picture, clock face, font", "GCompat":"Galaxy S5, S4, S3, S4 Zoom, S4 Active, S4 mini, Mega 6.3, Mega 5.8, Note 10.1, Note-PRO, TabPRO, Grand 2, Note 3, Note 3 Neo, Note II", "GReview":"http://www.theverge.com/2014/6/9/5786010/samsung-gear-2-smartwatch-wearable-review"},

    {"GModel":"Gear 2 Neo", "GPrice":"$199", "GFunction":"Super AMOLED 1.63 inch touchscreen, voice command, music player, remote control, dust-proof, water resistant, fast", "GBatt":"2-3 days", "GOpp":"Tizen", "GMemory":"512MB RAM + 4GB internal memory", "GScreen":"320x320px Super AMOLED", "GPower":"1GHz", "GWeight":"1.9 oz", "GCustom":"Band colors, home screen themes, background picture,clock face, font", "GCompat":"Galaxy S5, S4, S3, S4 Zoom, S4 Active, S4 mini, Mega 6.3, Mega 5.8, Note 10.1, Note-PRO, TabPRO, Grand 2, Note3, Note 3 Neo, Note II", "GReview":"http://www.gizmag.com/samsung-gear-2-neo-review/33600/"},

    {"GModel":"Gear Fit", "GPrice":"$149", "GFunction":"Super AMOLED 1.84 inch curved touchscreen, Bluetooth, pedometer, exercise and sleep monitoring, heart rate, notifications, media controller/ audio, timer, stopwatch, Find My Device, dust-proof, water resistant, S Health, fast", "GOpp":"RTOS", "GMemory":"512MB RAM + 4GB internal memory", "GBatt":"3+ days", "GScreen":"Curved Super AMOLED", "GPower":"1GHz", "GWeight":".95 oz", "GCustom":"Band colors, home screen themes, clock face, background colors/wallpapers", "GCompat":"Galaxy S5, S4, S3, S4 Zoom, S4 Active, S4 mini, Mega 6.3, Mega 5.8, Note 10.1, Note- PRO, TabPRO, Grand 2, Note 3, Note 3 Neo, Note II", "GReview":"http://www.engadget.com/2014/04/21/samsung-gear-fit-review/"},

    {"GModel":"Gear Live", "GPrice":"$199", "GFunction":"Always on, Google voice command, light weight, sleek design, Super AMOLED 1.63” touchscreen, pedometer and heart rate monitor, notifications, Google Now, Google Maps & Navigation, dust-proof, water resistant", "GBatt":"1+ days", "GOpp":"Android Wear", "GMemory":"512MB RAM + 4GB internal memory", "GScreen":"320x320px Super AMOLED", "GPower":"1.2 GHz", "GWeight":"2.12 oz", "GCustom":"Band colors, clock designs", "GCompat":"Any Android 4.3 Jelly Bean or higher device", "GReview":"http://www.engadget.com/products/samsung/gear/live/"},

    {"GModel":"Gear 3/S", "GPrice":"TBD", "GFunction":"2G/3G connectivity, music player, QWERTY keyboard", "GBatt":"2 days", "GOpp":"Tizen", "GMemory":"512MB RAM + 4GB internal memory", "GScreen":"320x320px curved Super AMOLED", "GPower":"1.2GHz", "GWeight":"unknown", "GCustom":"unknown", "GCompat":"Standalone/solo or wifi & Bluetooth", "GReview":"http://www.theverge.com/2014/9/3/6098227/samsung-gear-s-wearing-the-most-powerful-smartwatch-yet"}

];

var i;

if(data=="Gear 2"){
	i=0;
	$.image.setImage("/Gear21.jpg");
}
else if(data=="Gear 2 Neo"){
	i=1;
	$.image.setImage("/Gear2Neo1.jpg");
}
else if(data=="Gear Fit"){
	i=2;
	$.image.setImage("/Gear_Fit1.jpg");
}
else if(data=="Gear Live"){
	i=3;
	$.image.setImage("/Gear_Live1.png");
}
else{
	i=4;
	$.image.setImage("/Gear_3s1.png");
}

//alert(SGears[i].GModel);

$.title.text="Samsung "+SGears[i].GModel;

$.price.text="Price:"+"\n"+SGears[i].GPrice;
$.functionality.text="Apps/Functionality:"+"\n"+SGears[i].GFunction;
$.batlife.text="Battery Life Average:"+"\n"+SGears[i].GBatt;

$.os.text="OS:"+"\n"+SGears[i].GOpp;
$.memory.text="Memory:"+"\n"+SGears[i].GMemory;
$.resolution.text="Screen Resolution:"+"\n"+SGears[i].GScreen;
$.ppower.text="Processing Power:"+"\n"+SGears[i].GPower;
$.weight.text="Weight:"+"\n"+SGears[i].GWeight;
$.customization.text="Customization Options:"+"\n"+SGears[i].GCustom;
$.compatibility.text="Compatability:"+"\n"+SGears[i].GCompat;
$.review.text="Review:"+"\n"+SGears[i].GReview;
