import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const New = () => {
  const { count, username } = useSelector((state) => ({
    count: state.counter.value,
    username: state.user.value.userName,
  }));


  return (
    <div>
        <Link to='/counter'>back</Link>
      <h1>{count}</h1>
      <h1>{username}</h1>
    </div>
  );
};

export default New;
