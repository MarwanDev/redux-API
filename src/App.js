import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/usersSlice";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);

  if (state.user.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchUsers())}>Fetch Users</button>
      {state.user.data && state.user.data.results.map((e) => <li>{e.name.title} {e.name.first} {e.name.last} {e.location.street.number} {e.location.street.name} {e.location.city} {e.location.state} {e.location.country} {e.location.postcode}</li>)}
    </div>
  );
}

export default App;
