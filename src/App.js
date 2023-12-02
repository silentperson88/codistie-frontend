import logo from "./logo.svg";
import "./App.css";
import FormikForm from "./layout/home";
import UserList from "./layout/userList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getAllUser from "./redux/thunk/userThunk";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { userList } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      searchTerm,
    };
    const query = new URLSearchParams(params);
    dispatch(getAllUser(query));
  }, [searchTerm]);
  return (
    <div className="App">
      <FormikForm />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <UserList userList={userList} />
    </div>
  );
}

export default App;
