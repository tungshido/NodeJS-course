const students = [
	{
		name: 'Nam',
		age: 24,
		gender: 'male',
	},
	{
		name: 'Mai',
		age: 22,
		gender: 'female',
	},
	{
		name: 'Trang',
		age: 23,
		gender: 'female',
	},
	{
		name: 'An',
		age: 20,
		gender: 'male',
	},
	{
		name: 'Thien',
		age: 27,
		gender: 'male',
	},
];
const studentGender = { male: 0, female: 0 };
students.forEach((student) => {
	// eslint-disable-next-line no-return-assign
	return student.gender === 'male' ? (studentGender.male += 1) : (studentGender.female += 1);
});
const newStudentNAme = students.map((student) => student.name);
console.log(studentGender);
console.log(newStudentNAme);
