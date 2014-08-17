var printInventory = function(input) {
	var count = 0;
	var offer = 0;
	var bought = new GetInput(input);
	var boutght_information = bought.sort_input();
	allItems = loadAllItems();
	allPromotions = loadPromotions();
	var time = new Time().get_time();
	console.log('***<没钱赚商店>购物清单***\n' +
            '打印时间：' + time + '\n' +
            '----------------------\n' );
		for (var i = 0; i < 6; i++) {
			var items = ['kele','xuebi','apple','lizhi','dianchi','noodle'];
			var number = boutght_information[items[i]];
			if(number !=0){
				console.log('名称:'+allItems[i].name+'，数量：'+number+allItems[i].unit+'，单价：'+
					allItems[i].price.toFixed(2)+'(元)，小计：'+
					(number*allItems[i].price).toFixed(2)+'(元)'+'\n');
				count = count + number*allItems[i].price;
			}

		};
	console.log('----------------------\n' +
            '挥泪赠送商品：\n');
	   	for (var i = 0; i < 6; i++) {
			var items = ['kele','xuebi','apple','lizhi','dianchi','noodle'];
			var number = boutght_information[items[i]];
			if(number !=0 &&allItems[i].barcode == 'ITEM000000' && parseInt(number)>=3 ){
				console.log('名称:可口可乐，数量：'+parseInt(number/3)+'瓶'+'\n');
				offer = offer +parseInt(number/3)*3;
			}

			if(number !=0 &&allItems[i].barcode == 'ITEM000001' && parseInt(number)>=3){
				console.log('名称:雪碧，数量：'+parseInt(number/3)+'瓶'+'\n')
				offer = offer +parseInt(number/3)*3;
			}
			if(number !=0 &&allItems[i].barcode == 'ITEM000005' && parseInt(number)>=3){
				console.log('名称:方便面，数量：'+parseInt(number/3)+'袋'+'\n')
				offer = offer +parseInt(number/3)*4.5;
			}
		};   
        console.log('----------------------\n' +
            '总计：'+count.toFixed(2)+'(元)\n' +
            '节省：'+offer.toFixed(2)+'(元)\n' +
            '**********************');
    }