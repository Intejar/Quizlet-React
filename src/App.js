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
import Quiz from './Components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/courses',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Courses></Courses>
        },
        { path: '/analysis', element: <Analysis></Analysis> },
        { path: '/blog', element: <Blog></Blog> },
        {
          path: '/course/:courseId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)
          },
          element: <Quiz></Quiz>
        }
      ]
    },
    {
      path:'*',
      element:<div> Invalid Page </div>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
