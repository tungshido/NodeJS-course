const prompts = require('./node_modules/prompts');
const chalk = require('./node_modules/chalk');
const moment = require('./node_modules/moment');
function baitap1(info = {}) {
	const checkAge = new Promise((resolve, reject) => {
		resolve(
			prompts({
				type: 'text',
				name: 'name',
				message: `What's your name?`,
			}),
		);
	});
	const dateOfBirth = checkAge.then((result1) => {
		info['name'] = result1.name;
		return prompts({
			type: 'text',
			name: 'age',
			message: `What's your year of birth?`,
		});
	});
	const hometown = dateOfBirth.then((result2) => {
		info['bod'] = moment(result2.age, 'YYYY')
			.startOf('year')
			.fromNow();
		return prompts({
			type: 'text',
			name: 'town',
			message: `What's your home town?`,
		});
	});
	hometown.then((result3) => {
		info['hometown'] = result3.town;
		console.log(
			`Thank you. Hello ${chalk.blue(info['name'])}, so you are ${chalk.red(
				info['bod'],
			)} year old and from ${chalk.green(info['hometown'])}.`,
		);
	});
}
baitap1();
