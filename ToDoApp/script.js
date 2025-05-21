let todos = []; // En tom array. "Todos" betyder ofta "Array"
const buttonElem = document.querySelector('#add-todo-button'); //leta efter detta.
console.log(buttonElem); 

function displayTodos() {
for (let i = 0; i < 5; i++) {
console.log('i är: ', i);
}
}
buttonElem.addEventListener('click', function () {
/*
Måsvingarna ska vara inom parentesen, som ovan!
console.log('Nu klickade du på knappen!');
});
ovanstående är ett event där man klickar på nånting 
och det läggs till i arrayen, och sparas, element efter element.*/
const todo = prompt('Vad vill du göra?');

todos.push(todo);//pushar in 'Vad vill du göra' i den tomma arrayen

console.log(todos);/*Funktionen körs allt som allt om gång på gång,
pga functionen */
});
