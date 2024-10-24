enum Grade {
    freshman ="freshman",
    sophomore= "sophomore",
    junior ="junior",
    senior ="senior"
}

class Student {
    name: string;
    age: number;
    yearOfAdmission: number;
    gradelevel: Grade;

    constructor(name: string, age: number, yearOfAdmission: number) {
        this.name = name;
        this.age = age;
        this.yearOfAdmission = yearOfAdmission;

        const currentYear = new Date().getFullYear(); 
        // console.log(currentYear)
        const yearsSinceAdmission = currentYear - this.yearOfAdmission;

        if (yearsSinceAdmission < 1) {
            this.gradelevel = Grade.freshman; 
        } else if (yearsSinceAdmission === 1) {
            this.gradelevel = Grade.sophomore; 
        } else if (yearsSinceAdmission === 2) {
            this.gradelevel = Grade.junior; 
        } else {
            this.gradelevel = Grade.senior; 
        }
    }
    
    displayInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}, Year of Admission: ${this.yearOfAdmission}, Grade Level: ${Grade[this.gradelevel]}`;
    }
}


const student1 = new Student("Alice", 18, 2024);
const student2 = new Student("Bob", 20, 2022);
const student3 = new Student("Charlie", 21, 2021);
const student4 = new Student("Diana", 22, 2020);


console.log(student2.displayInfo());      
console.log(student3.displayInfo());      
console.log(student4.displayInfo());      