function Button({ onClick, title }) {
    let btnClassName;
    if (title === "Remove") {
      btnClassName = "removeBtn"
    } else {
      btnClassName = "addBtn"
    }

    return (
      <button type="button" onClick={onClick} className={btnClassName}>
        {title}
      </button>
    );
  }
  
export default Button;