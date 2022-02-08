import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import { TodosProvider } from "./contexts/todos.context";
import { Paper } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TodoForm from "./TodoForm";
import { Grid } from "@mui/material";





function TodoApp(){

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
                        <TodosProvider>
                            <TodoForm />
                            <TodoList />
                        </TodosProvider>
                    </Grid>
                </Grid>
            </Paper>
  
        </div>
    )
}

export default TodoApp;