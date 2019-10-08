const fs = require('fs');
const path = require('path');
const format = require('date-fns/format');
const xlsx = require('xlsx');
fs.readFile(path.join(__dirname, '/products.json'), 'utf8', (err, data) => {
	if (!err) {
		let productList = JSON.parse(data);
		console.log(`total number of products is: ${productList.length}`);
		const dataNewUpdated = productList.map(({ dateUpdated, ...cur }) => {
			return {
				...cur,
				updated: format(new Date(dateUpdated), 'MM/dd/yyyy'),
			};
		});
		console.log(dataNewUpdated);
		const ws = xlsx.utils.json_to_sheet(dataNewUpdated);
		const wb = xlsx.utils.book_new();
		xlsx.utils.book_append_sheet(wb, ws, 'Products');
		const buffer = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
		fs.writeFile(path.join(__dirname, '/product.xlsx'), buffer, (err) => console.log(err));
	}
});
//change indent 2
