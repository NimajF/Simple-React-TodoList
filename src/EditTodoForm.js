import React from "react";
import { TextField } from "@mui/material";
import useInputState from "./hooks/useInputState";

function EditTodoForm(props){
    const [value, handleChange, reset] = useInputState(props.currentText)
    return (
        
            <form onSubmit={(e) => {
                e.preventDefault();
                props.editTodo(props.id, value)
                reset();
                props.toggleEditForm()
                }}
                style={{ marginLeft: "1rem", width: "50%" }}>
                
            <TextField margin="normal" value={value} onChange={handleChange} id="standard-basic" label="Edit" variant="standard" fullWidth autoFocus />
            </form>
        
        
        )
}

export default EditTodoForm;