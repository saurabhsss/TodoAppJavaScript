window.onload = function() {
    var input = document.getElementById('inp');
    var btn = document.getElementById('btn');

    // var price = 50;

    btn.onclick = function () {
        var value = input.value;
        addItem(value, StatusENUMS.ACTIVE);
        TodoElements()
        //displayItem();
    }
   // TodoElements();
}
function TodoElements() {
    var parent = document.getElementById("app");
    parent.innerHTML = "";
    if(parent){
        Object.keys(list.todoArray).forEach(function (key) {
                if(list.todoArray[key].todostatus != StatusENUMS.DELETE){
                    //console.log("000000000000000");
                    //console.log(list.todoArray[key]);
                    //console.log('111111111111111111')
                    var todo_element = Elements(key, list.todoArray[key]);
                    console.log(todo_element);
                    console.log("pri");
                     parent.append(todo_element);
                }
            }
        );

    }
}
function Elements(key,obj) {
    var cparent  = document.createElement("div");
    cparent.style.clear = "both";
    cparent.style.marginBottom = "10px";
    cparent.setAttribute("class", obj.todostatus+"-todo");
    var tName = document.createElement("text");
    tName.setAttribute('id','spanid')
    tName.innerText =obj.todoItem;
    cparent.appendChild(tName);
   // console.log(cparent);

    var buttonComplete = document.createElement("button");
    buttonComplete.setAttribute('id','completeButton');
    buttonComplete.setAttribute('class','completebutton button');
    buttonComplete.innerText= "COMPLETE";
    cparent.appendChild(buttonComplete);

    var buttonEdit = document.createElement("button");
    buttonEdit.setAttribute('id','editButton');
    buttonEdit.setAttribute("class", "editbutton button");
    //buttonComplete
    buttonEdit.innerText= "Edit"
    cparent.appendChild(buttonEdit);


    var buttonDelete = document.createElement("button");
    buttonDelete.setAttribute('id','deleteButton');
    buttonDelete.setAttribute("class", "deletebutton button");
    buttonDelete.innerText= "delete"
    cparent.appendChild(buttonDelete);

    if(obj.todostatus == StatusENUMS.ACTIVE){
        buttonComplete.onclick = function () {
        TaskCompleted(key);
            TodoElements();
        }
    }
    if(obj.todostatus == StatusENUMS.COMPLETE){
        buttonComplete.onclick = function () {
            buttonComplete.disabled = true;
        }
    }
    buttonDelete.onclick = function () {
        TaskDeleted(key);
        TodoElements();
    }

   buttonEdit.addEventListener('click',function () {
        var editable = document.createElement("input");
        editable.type = "text";
        editable.setAttribute("id","edit");
        var change = document.createElement("button");
        //change.type =
        change.setAttribute("class","button");
        change.innerText = "EDIT TODO";
        /*console.log("check");
        console.log(this.parent);
        console.log(parent);
        console.log(this.parentNode);*/
        this.parentNode.appendChild(editable);
        this.parentNode.appendChild(change);
        
        change.addEventListener('click',function () {
            var newText = document.getElementById("edit").value;
            this.parentNode.childNodes[0].innerHTML = newText;
            var child1 = this.parentNode.childNodes[4];

            var child2 = this.parentNode.childNodes[5];
            child1.parentNode.removeChild(child1)
            child2.parentNode.removeChild(child2);

        })
    })
return cparent;
}

