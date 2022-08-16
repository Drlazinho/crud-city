import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/context";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
const {setDrawerOptions} = useDrawerContext()

useEffect(() => {
  setDrawerOptions([
    {
      label: 'Página inicial',
      icon: 'home',
      path: '/pagina-inicial',
    },
  ])
}, []);

  return(
    <Routes>
      <Route path="/home" element={<Dashboard />}/>
      
      <Route path="*" element={<Navigate to="home"/>}/>
    </Routes>
  );
}