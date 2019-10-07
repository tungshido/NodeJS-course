const prompts = require('prompts');
const chalk = require('chalk');
const moment = require('moment');

//Using Promise
function commandLineUsingPromise(info = {}) {
	const checkAge = new Promise((resolve, reject) => {
		resolve(
			prompts({
				type: 'text',
				name: 'name',
				message: `What's your name?`,
			}),
		);
	});
	const dateOfBirth = checkAge.then((nameInput) => {
		info['name'] = nameInput['name'];
		return prompts({
			type: 'text',
			name: 'age',
			message: `What's your year of birth?`,
		});
	});
	const hometown = dateOfBirth.then((ageInput) => {
		info['bod'] = ageInput['age'];
		return prompts({
			type: 'text',
			name: 'town',
			message: `What's your home town?`,
		});
	});
	hometown.then((townInput) => {
		info['hometown'] = townInput['town'];
		const date = new Date();
		console.log(
			`Thank you. Hello ${chalk.blue(info['name'])}, so you are ${chalk.red(
				date.getFullYear() - info['bod'],
			)} year old and from ${chalk.green(info['hometown'])}.`,
		);
	});
}
//commandLineUsingPromise();

//Using Async/Await

async function commandLineUsingAsync() {
	const questions = [
		{
			type: 'text',
			name: 'name',
			message: `What's your name?`,
		},
		{
			type: 'number',
			name: 'birthday',
			message: `What's your year of birth?`,
		},
		{
			type: 'text',
			name: 'hometown',
			message: `What's your home town?`,
		},
	];
	const answers = await prompts(questions);
	const date = new Date();
	const greet = `Thank you. Hello ${chalk.blue(answers['name'])}, so you are ${chalk.red(
		date.getFullYear() - answers['birthday'],
	)} years old and from ${chalk.green(answers['hometown'])}`;
	console.log(greet);
}
commandLineUsingAsync();
