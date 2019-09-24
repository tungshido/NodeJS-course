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
let maleStudentNo = 0;
let femaleStudentNo = 0;

students.forEach((student) => {
	return student.gender === 'male' ? maleStudentNo++ : femaleStudentNo++;
});
const newStudents = students.map((student) => student.name);
console.log(femaleStudentNo);
console.log(maleStudentNo);
console.log(newStudents);
