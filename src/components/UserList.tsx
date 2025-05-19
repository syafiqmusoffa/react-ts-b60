import { User } from "../types/user";

// interface untuk array user list
interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <div>
      <h1>Daftar User</h1>
      <ul id="user-list">
        {users.map((user) => (
          <li>
            <h2>username: {user.username}</h2>
            <p>email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
