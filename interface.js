var StatusENUMS = {
    ACTIVE: 'ACTIVE',
    COMPLETE: 'COMPLETE',
    DELETE: 'DELETE'
};
var Todo = /** @class */ (function () {
    // public status: string;
    function Todo() {
        this.todoArray = [];
        // console.log(this.status);
    }
    Todo.prototype.add = function (list) {
        this.todoArray.push(list);
        // this.status = list.status;
    };
    Todo.prototype.display = function () {
        this.todoArray.forEach(function (i) {
            if (i.todostatus != StatusENUMS.DELETE)
                console.log(i.todoItem);
        });
    };
    Todo.prototype.Completed = function (id) {
        this.todoArray[id].todostatus = StatusENUMS.COMPLETE;
    };
    Todo.prototype.Deleted = function (id) {
        this.todoArray[id].todostatus = StatusENUMS.DELETE;
    };
    return Todo;
}());
var list = new Todo();
function addItem(item, status) {
    list.add({
        todoItem: item,
        todostatus: status
    });
}
function displayItem() {
    list.display();
}
function TaskCompleted(id) {
    list.Completed(id);
}
function TaskDeleted(id) {
    list.Deleted(id);
}
