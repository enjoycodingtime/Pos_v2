function GetInput(inputs){
this.inputs = inputs;
};
GetInput.prototype.sort_input = function() {
 	var barcodeNum = {
	};
	allItems = loadAllItems();
	allPromotions = loadPromotions();
	barcodeNum.kele = _.where(this.inputs,'ITEM000000').length;
	barcodeNum.xuebi =_.where(this.inputs,'ITEM000001').length;
	try{
		barcodeNum.apple = _.where(this.inputs,'ITEM000002')[0].substr(11,20);
	}catch(err){
		barcodeNum.apple = '0';
	};
	try{
		barcodeNum.lizhi = _.where(this.inputs,'ITEM000002')[0].substr(11,20);
	}catch(err){
		barcodeNum.lizhi = '0';
	};
	barcodeNum.dianchi =_.where(this.inputs,'ITEM000004').length;
	barcodeNum.noodle =_.where(this.inputs,'ITEM000005').length;
	return barcodeNum;
};
       
