import { useState } from "react"
export default function Todo({ item, onUpdate, onDelet }) {

  const [isEdit, setIsEdit] = useState(false);

  function FormEdit(){

    const [newValue, setNewValue] = useState(item.title);
    function handleSubmit(e){
      e.preventDefault();
    }
    
    function handleChange(e){
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpDateTodo(){
        onUpdate(item.id, newValue);
        setIsEdit(false);
    }
    return (
      <form className="todoUpDateForm" onSubmit={handleSubmit}>
        <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
        <button className="button" onClick={handleClickUpDateTodo}>
        Update
        </button>
      </form>
    );
  }

  function TodoElement (){
    return (
      <div className="todoInfo">
      <sapn className="todoTitle">{item.title}</sapn>
        <button className="button"onClick={() => setIsEdit(true)}>Edit</button>
        <button className="buttonDelet"onClick={(e) => onDelet(item.id)}>Delet</button>
      </div>

    )
  }

  return (
    <div className="todo">
      {isEdit ? <FormEdit /> : <TodoElement />}
    </div>
  );
}