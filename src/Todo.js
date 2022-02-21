import React, { useContext } from "react";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Checkbox } from "@mui/material";
import { IconButton } from "@mui/material";
import { ListItemSecondaryAction } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "./contexts/todos.context";

function Todo(props) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState();
  return (
    <div>
      <ListItem style={{ height: "64px" }}>
        {isEditing ? (
          <EditTodoForm
            id={props.id}
            currentText={props.task}
            toggleEditForm={toggle}
          />
        ) : (
          <React.Fragment>
            <Checkbox
              tabIndex={-1}
              checked={props.status}
              onClick={() => dispatch({ type: "TOGGLE", id: props.id })}
            />
            <ListItemText
              style={{ textDecoration: props.status ? "line-through" : "none" }}
            >
              <p>{props.task}</p>
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => dispatch({ type: "REMOVE", id: props.id })}
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit" onClick={() => toggle()}>
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItemText>
          </React.Fragment>
        )}
      </ListItem>
    </div>
  );
}

export default Todo;
