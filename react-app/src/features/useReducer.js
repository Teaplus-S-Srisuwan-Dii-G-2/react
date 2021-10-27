function Input() {
    const [username, dispatch] = useReducer(reducer, '');
    const onChange = (event) => {
     dispatch({ type: 'CHANGE_NAME', name: event.target.value });
     };
    return (
     <input
     type="text"
     value={username}
     onChange={onChange}
     />
    );
}

