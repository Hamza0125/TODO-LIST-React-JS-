import React, {useState} from 'react'
import "../assets/Todo.css"
import TodoList from './TodoList.js';

const Todo = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    const itemEvent = (event) =>{
        setInputList(event.target.value);
    };

    const ItemsList = () =>{
        setItems((oldItems) => {
            return [...oldItems, inputList]
        });
        setInputList("");
    };
    const deleteItems =(id)=>{
        console.log("Deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrElemet, index)=>{
                return index !== id;
            })
        })
    }
    return (
        <>
        <div className="main_div">
            <div className ="container_center">

                <h1>ToDo List</h1>  <br/>
                
            <form>
            <input type="text" required placeholder="Enter text"
            value={inputList}  onChange={itemEvent} ></input>
            <button type="submit" onClick = {ItemsList} > + </button>
            </form>
            
            <ol>
                {
                    Items.map( (ItemsVal, index)  => {
                    return <TodoList
                    key={index}
                    id={index}
                    text={ItemsVal}
                    onSelect={deleteItems}
                     />
                    })
                }
            </ol>
        </div>
        </div>
        </>
    )
}

export default Todo;
