var StatusENUMS = {
    ACTIVE:'ACTIVE',
    COMPLETE:'COMPLETE',
    DELETE:'DELETE'
}
interface TodoList {
    todoItem: string
    todostatus: string
}
class Todo{
    public todoArray: TodoList[];
   // public status: string;
    constructor() {
        this.todoArray = [];
       // console.log(this.status);

    }

    add(list : TodoList) {
        this.todoArray.push(list);
       // this.status = list.status;
    }

    display()
    {
        this.todoArray.forEach(function (i) {
            if(i.todostatus != StatusENUMS.DELETE)
                console.log(i.todoItem);
        })
    }
    Completed(id:number){
        this.todoArray[id].todostatus = StatusENUMS.COMPLETE;
    }
    Deleted(id:number){
        this.todoArray[id].todostatus = StatusENUMS.DELETE;
    }
}

var list = new Todo();

function addItem(item: string,status:string) {
    list.add({
        todoItem:  item,
        todostatus: status
    });
}
function displayItem() {
    list.display();
}
function  TaskCompleted(id:number){
    list.Completed(id);
}
function  TaskDeleted(id:number){
    list.Deleted(id);
}


