const fs = require('fs');
const path = require('path');
const viLocale = require('date-fns/locale/vi');
var formatDistance = require('date-fns/formatDistance');
fs.readFile(path.join(__dirname, '/products.json'), 'utf8', (err, data) => {
	if (!err) {
		let productList = JSON.parse(data);
		console.log(`total number of products is: ${productList.length}`);
		const dataConverted = productList.map((cur) => {
			return { ...cur, dateUpdated: new Date(cur['dateUpdated']) };
		});
		dataConverted.forEach((product) => {
			const fromNow = timeFromNow(product['dateUpdated']);
			const price = formatMoney(product['price']);
			console.log(`${product['name']} - ${price} VND - Cập nhật cách đây: ${fromNow}`);
		});
	}
});
const formatMoney = (money) => {
	return `${money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};

const timeFromNow = (dateUpdated) => {
	return formatDistance(new Date(dateUpdated), new Date(), { locale: viLocale });
};
