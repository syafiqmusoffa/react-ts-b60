import EditDialog from "./dialog/EditDialog";
import { useUserStore } from "@/stores/auth";

function UserData() {
  const { user } = useUserStore();
  return (
    <section className="text-green-600">
      <h2 className="text-2xl">Logged In User</h2>
      <p>Username : {user.username}</p>
      <p>Password : {user.password}</p>
      <p>Email :{user.email}</p>

      {/* <EditDialog /> */}
    </section>
  );
}

export default UserData;
