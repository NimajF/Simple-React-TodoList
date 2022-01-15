import React, { useEffect } from "react";
import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import { Paper } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TodoForm from "./TodoForm";
import { Grid } from "@mui/material";





function TodoApp(){
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]")
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos)
    // const initialTodos = [
    //     { id: 1, task: "Clean house", completed: false },
    //     { id: 2, task: "Buy milk", completed: true },
    //     { id: 3, task: "Have dinner", completed: false }
    // ]

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

   

    return (
        <div>
            {/* <h1>TODOS!</h1> */}
            <Paper style={{
                padding: 0,
                maring: 0,
                height: "100vh",
                backgroundColor: "#edf2fb"
            }}
            elevation={0}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position='static' color="primary" style={{ height: "64px" }} >
                        <Toolbar>
                        
                        <Typography color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            TODOS WITH HOOKS
                        </Typography>
                        </Toolbar>
                    </AppBar>
                    
                </Box>
                <Grid container justifyContent="center" style={{marginTop: "5rem"}}>
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm addTodo={addTodo} />
                        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                    </Grid>
                </Grid>
            </Paper>
  
        </div>
    )
}

export default TodoApp;