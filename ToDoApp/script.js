let todos = []; // En tom array.

const buttonElem = document.querySelector('#add-todo-button'); 
//Ovanstående ska söka efter add-todo-button.
//console.log(document); //visar var den ligger.
buttonElem.addEventListener('click', () => {
    console.log('Nu klickade du på knappen!');
}
//ovanstående är ett event där man klickar på nånting.
const todo = prompt('Vad vill du göra?');

todos.push(todo);//pushar in 'Vad vill du göra' i den tomma arrayen

console.log(todos);//Vad händer nu?