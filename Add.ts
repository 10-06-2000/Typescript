class TodoItem {
    constructor(
      public description: string,
      public dueDate: Date,
      public completed: boolean = false
    ) {}
  }
  
  class TodoList {
    private items: TodoItem[] = [];
  
    public addItem(item: TodoItem): void {
      this.items.push(item);
    }
  
    public removeItem(item: TodoItem): void {
      const index = this.items.indexOf(item);
  
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    public completeItem(item: TodoItem): void {
      item.completed = true;
    }
  
    public printList(): void {
      console.log('Todo List:');
      this.items.forEach((item) => {
        console.log(
          `${item.description} (Due: ${item.dueDate.toDateString()}) - ${
            item.completed ? 'Completed' : 'Incomplete'
          }`
        );
      });
    }
  }
  
  
  const todoList = new TodoList();
  
  const item1 = new TodoItem('Buy groceries', new Date('2023-04-05'));
  const item2 = new TodoItem('Do laundry', new Date('2023-04-10'));
  const item3 = new TodoItem('Pay bills', new Date('2023-04-15'));
  
  todoList.addItem(item1);
  todoList.addItem(item2);
  todoList.addItem(item3);
  
  todoList.printList(); // Output the list before completing an item
  
  todoList.completeItem(item2); // Mark an item as completed
  
  todoList.removeItem(item3); // Remove an item from the list
  
  todoList.printList(); // Output the updated list
  


