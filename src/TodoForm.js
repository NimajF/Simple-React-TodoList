import React, { useContext } from "react";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

function TodoForm(){
    const [value, handleChange, reset] = useInputState("")
    const dispatch = useContext(DispatchContext)
    
    return(
        <div>
            <Paper style={{ margin: "1rem 0", padding: "0 1rem" }} sx={{ display: 'flex', justifyContent: 'center' }} >
                <form onSubmit={e => {
                    e.preventDefault();
                    dispatch({ type: "ADD", task: value })
                    reset()
                }}
                style={{ width: "50%" }}
                
                >
                    <TextField id="filled-basic" label="New Todo..." variant="filled" value={value} onChange={handleChange} margin="normal" fullWidth />
                    
                </form>
            </Paper>
        </div>
    )
}
export default TodoForm;