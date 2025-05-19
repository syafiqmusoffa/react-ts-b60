// import React, { useContext, useState } from "react";
// import "../assets/styles/form-style.css";
// import { AuthContext } from "../contexts/auth";

// interface MyFormState {
//   username: string;
//   phone: string;
//   email: string;
// }

// function MyForm() {
//   const { user, setUser } = useContext(AuthContext);
//   const [formState, setFormState] = useState<MyFormState>({
//     username: "",
//     phone: "",
//     email: "",
//   });
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(event.target.name, event.target.value);
//     setFormState({ ...formState, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     console.log(`Halo ini data saya :`, formState);
//     setUser(formState);
//   };
//   return (
//     <form className="my-form bg-amber-200 " onSubmit={handleSubmit}>
//       <h1>My Form</h1>
//       <input
//         className="w-full border-2 p-1 rounded-2xl border-gray-500 text-m"
//         type="text"
//         name="username"
//         id="username"
//         onChange={handleChange}
//         placeholder="masukkan nama ..."
//       />
//       <input
//         className="w-full border-2 p-1 rounded-2xl border-gray-500 text-m"
//         type="text"
//         name="email"
//         id="email"
//         onChange={handleChange}
//         placeholder="masukkan email ..."
//       />
//       <input
//         className="w-full border-2 p-1 rounded-2xl border-gray-500 text-m"
//         type="tel"
//         name="phone"
//         id="phone"
//         onChange={handleChange}
//         placeholder="masukkan nomor ponsel ..."
//       />
//       <button
//         className="bg-gray-500 text-white px-7 py-2 rounded-2xl"
//         type="submit"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

// export default MyForm;
