import React,{useState} from "react";

const TodoList = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);
  
    const handleInputChange = (e) => {
    setTask(e.target.value);
    }
    
    const handleAddTodo = () => {
    if(task.trim()){
      const newTodo = {id: crypto.randomUUID(), text: task}
        setTodos([...todos,newTodo]);
        setTask('');
        console.log(id);
      }
    }
  
    const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      handleAddTodo();
    }
    }
  
    const handleDelete = (id) => {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
    }
    
  
    return(
      <form className='flex flex-col items-center  justify-center'>
        <h1 className="flex justify-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-white">
          Welcome to my frist todo list with react and tailwindcss</h1>
        <h2 className="flex justify-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-green-700 ">
          Enter your  task and press enter to add it to the list
        </h2>
        <div className = 'flex justify-center '>
          <div className = 'flex space-x-2 items-center'>
            <input type = 'text' placeholder="Enter task" value = {task} onChange={handleInputChange} onKeyDown={handleKeyDown} className = 'w-80 h-9 rounded-lg bg-white mt-2 mb-2' />
            <button type = 'button' onClick={handleAddTodo} className="text-gray-700 bg-transparent bg-gradient-to-tr from-white to-blue-500 border border-gray-800 rounded w-14 h-9">Add</button>
          </div>
        </div>
        <h3 className="flex justify-center text-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-green-700 ">
            Todo List
        </h3>
        <ul className='list-disc pl-5 text-white flex flex-col items-start justify-center'>
          {todos.map((todo) => (
            <li key = {todo.id} className='mb-2'>
              {todo.text}
              <button className = "text-gray-700 bg-transparent bg-gradient-to-tr from-white to-red-600 border-gray-800 rounded w-14 h-9 ml-4" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
            </li>))}
          </ul>
      </form>
    );
};

export default TodoList;