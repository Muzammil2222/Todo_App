var todo_input = document.getElementById('todo_input')
var add_todo_btn = document.getElementById('add_todo_btn')
var delete_all_todo_btn = document.getElementById('delete_all_todo_btn')
var todo_list = document.getElementById('todo_list')

add_todo_btn.addEventListener('click' , function(){
    if(!todo_input.value.trim()) return alert('Todo main kuch Daal do');

    var list_item = `<li><span>${todo_input.value}</span>
    <button onclick="edit(this)" class="btn">Edit</button>
     <button onclick="deleteFun(this)" class="btn">Delete</button>
     
     </li>`
    todo_list.innerHTML += list_item

    todo_input.value = ''
})
function edit(element){
    var previousValue = element.previousElementSibling.innerText
    var updatedValue = prompt('Edit Value' , previousValue)
    element.previousElementSibling.innerText = updatedValue

}

function deleteFun(element){
    element.parentElement.remove();
} 

delete_all_todo_btn.addEventListener('click' , function(){
    todo_list.innerHTML = '';
})