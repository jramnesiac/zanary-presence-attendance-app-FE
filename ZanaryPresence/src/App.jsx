import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { LoginPage } from "./pages/login";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { setValue } from "./redux/userSlice";
import { useEffect } from "react";
import { RegisterPage } from "./pages/register";
import { EmployeePage } from "./pages/employee";
import { HomeContent } from "./pages/home";
import { LogHistory } from "./pages/logHistory";
import { Profile } from "./pages/profile";
import { SalaryPage } from "./pages/salary";


const router = createBrowserRouter([
  {path: "/", element: <HomePage />, children: [
    {path: "", element: <HomeContent />},
    {path: "employee", element: <EmployeePage />},
    {path: "loghistory", element: <LogHistory />},
    {path: "profile", element: <Profile />},
    {path: "salary", element: <SalaryPage />}
  ]},
  {path: "/login", element: <LoginPage />},
  {path: "/register/:token", element: <RegisterPage />}
])

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    const session = async () => {
      if (token) {
        try {
          const res = await Axios.get(
            "http://localhost:3006/api/auth/",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          dispatch(setValue(res.data));
          console.log(res.data);
        } catch (error) {
          console.error("Error fetching session:", error);
        }
      }
    };

    session();
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
