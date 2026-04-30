import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout }  from "@/shared";
import { CreateUserPage } from "@/features/users"
import { Login  } from "@/features/auth";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth" replace />
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [{index: true}],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            { index: true, element: <CreateUserPage /> },
            {path: "/dashboard/auth", element: <Login />,},
            {path: "usuarios", element: <h1>usuarios</h1>,},
            {path: "productos", element: <h1>Productos</h1>,},
        ]

    },
   
]);
export default router;