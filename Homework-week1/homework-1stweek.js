const students = [
	{
		name: 'Nam',
		age: 18,
		gender: 'male',
	},
	{
		name: 'Mai',
		age: 22,
		gender: 'female',
	},
	{
		name: 'Trang',
		age: 19,
		gender: 'female',
	},
	{
		name: 'An',
		age: 21,
		gender: 'male',
	},
	{
		name: 'Thien',
		age: 27,
		gender: 'male',
	},
];

function countGender(students, type, result = {}) {
	for (let i = 0; i < students.length; i++) {
		const obj = students[i];
		const currentCountByType = result[obj[type]];
		result[obj['gender']] = currentCountByType ? currentCountByType + 1 : 1;
	}
	return result;
}
const result = countGender(students, 'gender');
console.log(result);

let studentName = students.map((value) => {
	return value['name'];
});
console.log(studentName);
