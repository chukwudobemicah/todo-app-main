'use strict';
const input = document.querySelector('.input');
const completedSection = document.querySelectorAll('.completed');
const clear = document.querySelector('.clear');
const allSection = document.querySelectorAll('.all');
const activeSection = document.querySelectorAll('.active');
const themeSwitch = document.querySelector('#theme-switch');
const todoList = document.querySelector('.todo-list');
const numberOfTodo = document.querySelector('.number-of-todo');

let storedTodo = [];
// let storedTodo = localStorage.setItem('todo',JSON.stringify())

const todo = function () {
  // inserts todo on the interface

  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const markUp = `  <div class="todo-list__list">
        <div class="main__todo-circle">
          <button class="main__todo-circle__button"></button>
        </div>
        <p>${input.value}</p>
        <img class="cancel" src="./images/icon-cross.svg" alt="cancel">
        </div>`;

      if (input.value === '') return;

      todoList.insertAdjacentHTML('afterbegin', markUp);
      // const storeTodo = todoList.insertAdjacentHTML('afterbegin', markUp);
      input.value = '';

      // localStorage failed attempt

      // console.log(markUp);
      // storedTodo.push(markUp);
      // localStorage.setItem('todo', JSON.stringify(markUp));

      // const myArrayString = localStorage.getItem('todo');

      // const myTodo = JSON.parse(myArrayString);
      // // console.log(storedTodo);
      // console.log(myTodo);

      // selecting the cancel button, completed button and todo list from the Dom

      const completedCircle = document.querySelector(
        '.main__todo-circle__button'
      );
      const todoListList = document.querySelectorAll('.todo-list__list');
      const cancel = document.querySelector('.cancel');

      // input.value = '';

      // what happens when i press the completed btn

      completedCircle.addEventListener('click', function () {
        completedCircle.classList.toggle('button-active');
        cancel.classList.toggle('visible');
        completedCircle
          .closest('.main__todo-circle')
          .nextElementSibling.classList.toggle('strike-through');
        completedCircle
          .closest('.todo-list__list')
          .classList.toggle('completed');
      });

      // what happens when i press the cancel btn

      cancel.addEventListener('click', function () {
        cancel.closest('.todo-list__list').style.display = 'none';
      });

      // what happens when i press the completed section btn

      completedSection.forEach(comp => {
        comp.addEventListener('click', function () {
          todoListList.forEach(tdl => {
            if (!tdl.classList.contains('completed')) {
              tdl.classList.add('hidden');
            }
          });
          todoListList.forEach(tdl => {
            if (tdl.classList.contains('completed')) {
              tdl.classList.remove('hidden');
            }
          });
        });
      });

      // what happens when i press the active section btn

      activeSection.forEach(act =>
        act.addEventListener('click', function () {
          todoListList.forEach(tdl => {
            if (tdl.classList.contains('completed')) {
              tdl.classList.add('hidden');
            }
          });
          todoListList.forEach(tdl => {
            if (!tdl.classList.contains('completed')) {
              tdl.classList.remove('hidden');
            }
          });
        })
      );

      // what happens when i press the all section btn

      allSection.forEach(all => {
        all.addEventListener('click', function () {
          todoListList.forEach(tdl => {
            tdl.classList.remove('hidden');
          });
        });
        todoListList.forEach((tdl, i) => {
          let arg = 0;
          if (!tdl.classList.contains('completed')) {
            arg = arg + i;
            numberOfTodo.textContent = arg;
          }
          if (tdl.classList.contains('completed')) {
            arg = arg - i;
            numberOfTodo.textContent = arg;
          }
        });
      });

      // what happens when i press the clear btn

      clear.addEventListener('click', function () {
        todoListList.forEach(tdl => {
          if (tdl.classList.contains('completed')) {
            tdl.style.display = 'none';
          }
        });
      });
    }
  });
};

todo();
const moonThemeBtn = document.querySelector(
  '.header__theme > button .theme__moon'
);
const sunThemeBtn = document.querySelector('.theme__sun');

// theme functions
moonThemeBtn.classList.add('hidden');
themeSwitch.addEventListener('click', function () {
  moonThemeBtn.classList.toggle('hidden');
  sunThemeBtn.classList.toggle('hidden');
  document.documentElement.classList.toggle('light');
});

// const result = todo();
// console.log(result);
// localStorage.setItem('todoList', result);
// const stored = localStorage.getItem('todoList');

// console.log(stored);
