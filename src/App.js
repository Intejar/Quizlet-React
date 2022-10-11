import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from './Main/Main';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Analysis from './Components/Analysis/Analysis';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {path:'/home', element:<Home></Home>},
        {path:'/courses', element:<Courses></Courses>},
        {path:'/analysis', element:<Analysis></Analysis>},
        {path:'/blog', element:<Blog></Blog>}
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
