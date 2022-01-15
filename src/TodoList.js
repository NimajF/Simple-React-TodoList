import React from "react";
import { Paper } from "@mui/material";
import { List } from "@mui/material";

import { Divider } from "@mui/material";
import Todo from "./Todo";

function TodoList(props){
    if (props.todos.length) {
        return(
        
            <Paper className="Todos">
                <List>
                {props.todos.map((todo, i) => (
                <React.Fragment key={todo.id}>
                    
                        <Todo
                            id={todo.id} 
                            task={todo.task} 
                            status={ todo.completed} 
                            removeTodo={props.removeTodo} 
                            toggleTodo={props.toggleTodo}
                            editTodo={props.editTodo}
                        />
                    
                    {i < props.todos.length - 1 && <Divider/>}
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