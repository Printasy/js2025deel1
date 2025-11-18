// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

const ex2_type = document.getElementById("ex2_type").value;
const ex2_name = document.getElementById("ex2_name").value.trim();
const ex2_age = document.getElementById("ex2_age").value.trim();
const ex2_dep = document.getElementById("ex2_dep").value.trim();
const ex2_team=document.getElementById("ex2_team").value.trim();

class Person {
    constructor(name, age, department, type) {
        this.name = ex2_name;
        this.age = ex2_age;
    }

    info() {
        return `${this.name} (${this.age} jaar)}`;
    }
}

class Employee extends Person {
    constructor(name, age) {
        super(name, age);
        this.type = "Employee";
    }

    info() {
        return `[Employee] ${super.info()}`;
    }
}

class Manager extends Employee {
    constructor(name, age, department, teamSize) {
        super(name, age, department);
        this.teamSize = ex2_team;
    }

    info() {
        return `[Employee] ${super.info()}`;
    }
}





document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ex2_btn")
        ?.addEventListener("click", voegOefToe);
});

// ---------------------------------------------
// Hoofdstuk 20: ES6 Classes + extends + super
// ---------------------------------------------
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     info() {
//         return `${this.name} (${this.age} jaar)`;
//     }
// }
//
// class Admin extends User {
//     constructor(name, age) {
//         super(name, age);
//         this.role = "Admin";
//     }
//
//     info() {
//         return `[ADMIN] ${super.info()}`;
//     }
// }
//
// const clsUsers = [];
//
// function addClassUser() {
//     const name = document.getElementById("cls_name").value.trim();
//     const age = Number(document.getElementById("cls_age").value);
//     const role = document.getElementById("cls_role").value;
//     const list = document.getElementById("cls_list");
//     if (!name || !age) return;
//     const user = role === "admin"
//         ? new Admin(name, age)
//         : new User(name, age);
//     clsUsers.push(user);
//     list.innerHTML = clsUsers
//         .map(u => `<li class="list-group-item">${u.info()}</li>`)
//         .join("");
// }
//
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("cls_btn")
//         ?.addEventListener("click", addClassUser);
// });

// ---------------------------------------------
// Mini-opdracht: Animal base + Dog child (bonus: Cat)
// ---------------------------------------------
// class Animal {
//     constructor(name, soort) {
//         this.name = name;
//         this.soort = soort;
//     }
//
//     speak() {
//         return `🐾 ${this.name} is een ${this.soort}`;
//     }
// }
//
// class Dog extends Animal {
//     constructor(name) {
//         super(name, "hond");
//     }
//
//     speak() {
//         return `🐶 ${this.name} blaft!`;
//     }
// }
//
// // Bonus (emoji per dier)
// class Cat extends Animal {
//     constructor(name) {
//         super(name, "kat");
//     }
//
//     speak() {
//         return `🐱 ${this.name} miauwt!`;
//     }
// }
//
// const pets = [];
//
// function addPet() {
//     const name = document.getElementById("pet_name").value.trim();
//     const type = document.getElementById("pet_type").value;
//     const list = document.getElementById("pet_list");
//     if (!name) return;
//
//     let pet;
//     if (type === "hond") pet = new Dog(name);
//     else if (type === "kat") pet = new Cat(name);
//     else pet = new Animal(name, type);
//
//     pets.push(pet);
//
//     list.innerHTML = pets
//         .map(p => `<li class="list-group-item">${p.speak()}</li>`)
//         .join("");
//
//     document.getElementById("pet_name").value = "";
//     document.getElementById("pet_name").focus();
// }
//
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("pet_btn")?.addEventListener("click", addPet);
//     document.getElementById("pet_name")?.addEventListener("keydown", (e) => {
//         if (e.key === "Enter") addPet();
//     });
// });

