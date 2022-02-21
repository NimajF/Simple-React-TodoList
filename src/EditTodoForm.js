import React, {useContext} from "react";
import { TextField } from "@mui/material";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

function EditTodoForm(props){
    const dispatch = useContext(DispatchContext)
    const [value, handleChange, reset] = useInputState(props.currentText)
    return (
        
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({ type: "EDIT", id: props.id, newTask: value})
                reset();
                props.toggleEditForm()
                }}
                style={{ marginLeft: "1rem", width: "50%" }}>
                
            <TextField margin="normal" value={value} onChange={handleChange} id="standard-basic" label="Edit" variant="standard" fullWidth autoFocus />
            </form>
        
        
        )
}

export default EditTodoForm;