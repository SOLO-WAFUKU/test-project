let todoList = [];

function addTask(task) {
  todoList.push(task);
  console.log(`タスク「${task}」を追加しました。`);
}

function displayTasks() {
  console.log('\n--- ToDoリスト ---');
  if (todoList.length === 0) {
    console.log('タスクはありません。');
  } else {
    todoList.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  console.log('----------------\n');
}

addTask('買い物をする');
addTask('洗濯をする');
addTask('宿題をする');

displayTasks();

addTask('掃除をする');
displayTasks();