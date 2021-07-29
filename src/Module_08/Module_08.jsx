import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function Module_08() {
  return (
    <div>
      <AddUser />
      <UserList users={[]} />
    </div>
  )
}

export default Module_08;