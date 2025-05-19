import Layout from "@/layouts/Layout";
import { useUserStore } from "@/stores/auth";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRuoteLayout() {
  const { user } = useUserStore();
  // const isLogin = true;
  useEffect(() => {
    console.log(user);
  }, []);

  if (user.username) {
    return (
      <main>
        <Layout>
          <Outlet />
        </Layout>
      </main>
    );
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default ProtectedRuoteLayout;
