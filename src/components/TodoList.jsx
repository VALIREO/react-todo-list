import React, { useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoList = () => {
  const [data, setData] = useState([]);
  const txt = useRef();

  const Ajouter = () => {
    const message = txt.current.value;
    if (message) 
        {setData([...data, message]);
      txt.current.value = "";
    } else {
      alert("C'est obligatoire remplaire le champs");
    }
  };

  const Supprime = (p) => {
    if (window.confirm("estez-vous sur supprime cette liste")) {
      const x = [...data]; 
      x.splice(p, 1); 
      setData(x); 
    }
  };
  
  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h2 className="h5 mb-0">My tasks</h2>
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add new task"
            ref={txt}
          />
          <input
            type="button"
            value="Add"
            className="btn btn-primary"
            onClick={Ajouter}
          />
        </div>
        <ul className="list-group">
          {data.map((f, p) => (
            <li
              key={p}
              className="list-group-item d-flex justify-content-between align-items-center task-item"
            >
              {f}
              <RiDeleteBin6Line
                className="delete-icon"
                size={20}
                onClick={() => Supprime(p)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
