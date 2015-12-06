/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Custom
//Custom
//Custom

function textCounter(field) {
var len = field.value.length;
	if (len >= 0 ) {
		  $('#stringLength').text(field.value.length);
		  var ordNum = Math.round(len / 20 + 0.45);
			if (ordNum == 1) {
		        document.getElementById('group_3').value = 31;
		        findCombination();getProductAttribute();
		        } else if (ordNum == 2) {
		         document.getElementById('group_3').value = 32;
		        findCombination();getProductAttribute();
		        } else if (ordNum == 3) {
		         document.getElementById('group_3').value = 33;
		        findCombination();getProductAttribute();
		        };
	};
 }


function fontSelected(FontChoice) {
var fontStr = FontChoice;
	//document.getElementById("textField1").value = fontStr;
	document.getElementById("textField0").style.fontFamily = fontStr;
	
	
}

function fontSize(numAmt,fieldId) {
//var cssRuleCode = document.all ? 'rules' : 'cssRules'; //account for IE and FF
//var rule = document.styleSheets[styleIndex][cssRuleCode][ruleIndex];
//var selector = rule.selectorText;  //maybe '#tId'

//var value = rule.value;            //both selectorText and value are settable.
	
	var fntSize = document.getElementById(fieldId).style.fontSize;
if (fntSize==""){fntSize="35 px";};
	if (document.getElementById(fieldId).style.fontSize !== "xx-large") {
	   var fntSizeNum = parseInt(fntSize.replace("px",""));
	   fntSizeNum = Math.round(fntSizeNum * Number(numAmt) / 100);
	   if (fntSizeNum > 225) {
	   	fntSizeNum = 225;
	   	};
	   if (fntSizeNum < 25) {
	   	fntSizeNum = 25;
	   	};
	   fntSize = String(fntSizeNum) + "px";
	 document.getElementById(fieldId).style.fontSize = fntSize;
       } else {
	   fntSize = "35px";
	   document.getElementById(fieldId).style.fontSize = fntSize;	  		
	
	   };
	}

function strCounter(spanName,textAreaName) {
    var text2 = '10';//document.createTextNode('10');
    document.getElementById(spanName).appendChild(text2);
     alert('ran');
   }	
function setFontText(previewString){
	//alert(previewString);
	document.getElementById("Allura").value = previewString;
	document.getElementById("Graduate").value = previewString;	
	var FNames = ['Alex Brush','Allura','Berkshire Swash','Bilbo Swash','Dancing Script','Euphoria Script','Great Vibes','Henny Penny','Macondo','Mystery Quest','Peralta','Ribeye','Tangerine','Clicker Script','Englebert','Handlee','Happy Monkey','Merienda','Stalemate','Graduate','Rum Raisin','Idolwild','New Rocker','Cinzel Decorative','Dafont Scriptina','Montez','Architects Daughter','Luckiest Guy','Unical Antique','Black Ops','Crushed','IM FELL Great Primer','Fontdinger Swanky','Ranchers','Zeyada','Dawning of new day','Coming Soon','Italianno','Nothing you could do','Original Surfer','Bangers','Arizonia','Cherry Cream Soda','Creepster','lobster','Mountains of Christmas','Nosifer','oregano','Pacifico','Quigley','Playball','Rochester','Rock Salt','Shojumaru','Permanent Marker','kingthings_calligraphica_2Rg','Times','Bad Script','Chewy','Cookie','Federo','Glass Antiqua','Parisenne','Spicy Rice','kawoszeh','tenderness','stardos stencil','headhunter','smokum','pixiefont','Magenta','maidenOrange','slapstick comic','Shangri La','Carosel','vanilla','veggieburger','Sniglet','foglighten07','krazynights','Worstveld','snickles','mathlete','kingthings','quileywiggley','freebooter','aguafina','sail','windsong','kaushan script','blackjack','gooddog','cac champange','league gothic','caviar dreams','amatic','roboto','raleway','open sans','Edmunds','Courier new','condiment','SonsieOne','Arial Black','Arial','Comic Sans','Caesar Dressing','Ravie','JennaSue','kingthings Foundation','kingthings spikeless','Zenda'];

	for (var i=0; i<FNames.length;i++) {
		document.getElementById(FNames[i]).value = previewString;
	}
}


function css(selector, property, value) {
    for (var i=0; i<document.styleSheets.length;i++) {//Loop through all styles
        //Try add rule
        try { document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {try { document.styleSheets[i].addRule(selector, property+':'+value);} catch(err) {}}//IE
    }
}

function colorName(fieldName,fieldValue) {
document.getElementById(fieldName).innerHTML= fieldValue;
}