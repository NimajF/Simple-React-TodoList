import React, { useContext } from "react";
import { Paper } from "@mui/material";
import { List } from "@mui/material";

import { Divider } from "@mui/material";
import Todo from "./Todo";
import { TodosContext } from "./contexts/todos.context";

function TodoList(){
    const {todos} = useContext(TodosContext)
    if (todos.length) {
        return(
        
            <Paper className="Todos">
                <List>
                {todos.map((todo, i) => (
                <React.Fragment key={todo.id}>
                    
                        <Todo
                            id={todo.id} 
                            task={todo.task} 
                            status={todo.completed} 
                        />
                    
                    {i < todos.length - 1 && <Divider/>}
                </React.Fragment> // To conserve KEYS
                ))}
                </List>
            </Paper>
       
        )
    } else {
    return(
        
            <h2 style={{ textAlign: "center", fontWeight: 'lighter', fontSize: '1.5rem' }}>No Todos at the moment</h2>
       
    )
    }
}

export default TodoList;