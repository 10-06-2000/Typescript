var TodoItem = /** @class */ (function () {
    function TodoItem(description, dueDate, completed) {
        if (completed === void 0) { completed = false; }
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
    }
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addItem = function (item) {
        this.items.push(item);
    };
    TodoList.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    TodoList.prototype.completeItem = function (item) {
        item.completed = true;
    };
    TodoList.prototype.printList = function () {
        console.log('Todo List:');
        this.items.forEach(function (item) {
            console.log("".concat(item.description, " (Due: ").concat(item.dueDate.toDateString(), ") - ").concat(item.completed ? 'Completed' : 'Incomplete'));
        });
    };
    return TodoList;
}());
var todoList = new TodoList();
var item1 = new TodoItem('Buy groceries', new Date('2023-04-05'));
var item2 = new TodoItem('Do laundry', new Date('2023-04-10'));
var item3 = new TodoItem('Pay bills', new Date('2023-04-15'));
todoList.addItem(item1);
todoList.addItem(item2);
todoList.addItem(item3);
todoList.printList(); // Output the list before completing an item
todoList.completeItem(item2); // Mark an item as completed
todoList.removeItem(item3); // Remove an item from the list
todoList.printList(); // Output the updated list
