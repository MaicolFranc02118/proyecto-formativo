import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@/shared";
import { CreateUserPage, ListUserPage } from "@/features/users";
import { Login } from "@/features/auth";
import { HomePage } from "@/features/home";
import ProtectedRoute from "../shared/auth/protectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth" replace />
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [{ index: true }],
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: "create-user", element: <CreateUserPage /> }, // ✅ relativo
            { path: "auth",        element: <Login /> },           // ✅ relativo
            { path: "userList",    element: <ListUserPage /> },    // ✅ relativo
            { path: "home",        element: <HomePage /> },        // ✅ relativo
        ]
    },
]);

export default router;