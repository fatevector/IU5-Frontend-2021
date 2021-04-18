import React from "react";

function AddTodo({createTodo}){
    const [note, setNote]=React.useState('');
    function onSubmit(event){
        event.preventDefault();
        if (note.trim()){
            createTodo(note);
            setNote('');
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <input value={note} onChange={event=>setNote(event.target.value)}/>
            <button type="submit">Добавить запись</button>
        </form>
    )
}

export default AddTodo