const students = [
    {
        name: "Lucas",
        grade: 10
    },
    {
        name: "Joao",
        grade: 4
    },
    {
        name: "Julia",
        grade: 5
    },
    {
        name: "Livia",
        grade: 8
    },
    {
        name: "Ana",
        grade: 7
    },
];

const getApprovedStudents = (studentsList) => studentsList.filter(student => student.grade >=7);

console.log("\nLista de alunos aprovados: ", getApprovedStudents(students));

console.log("\nLista de alunos: ");
console.log(students);
