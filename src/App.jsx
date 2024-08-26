import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './layers/RootLayOut';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayOut/>}>
      <Route index element={<Home/>}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App