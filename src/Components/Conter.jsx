  import { useDispatch, useSelector } from "react-redux";
  import { decrement, increment } from "../Redux/Counterslice";
  import { login, logout } from "../Redux/userSlice";
  import { useState } from "react";
import { Link } from "react-router-dom";

  const Counter = () => {
    const [inputUsername, setInputUsername] = useState("");

    const { count, username } = useSelector((state) => ({
      username: state.user.value.userName,
      count: state.counter.value,
    }));
    
    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
      setInputUsername(e.target.value);
    };

    return (
      <div>
        <Link to='/new'>check</Link>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button> <br />
        <br />
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <hr />

        
        <h1>{username}</h1>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={handleChangeInput}
        />
        <button onClick={() => dispatch(login(inputUsername))}>Login</button>
        <br />
        <br />
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    );
  };

  export default Counter;
