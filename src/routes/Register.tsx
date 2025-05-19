import AuthRegister from "@/components/auth/AuthRegister";
import "@/assets/styles/form-style.css";
function Register() {
  return (
    <body className="fixed inset-0 bg-gray-900 ">
      <div>
        <AuthRegister />;
      </div>
    </body>
  );
}

export default Register;
