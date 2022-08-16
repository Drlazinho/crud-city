import { Button } from "@mui/material";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/context";

export const AppRoutes = () => {
const {toggleDrawerOpen, setDrawerOptions} = useDrawerContext()

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
      <Route path="/home" element={<Button variant='contained'onClick={toggleDrawerOpen} color='primary'>Home</Button>}/>
      
      <Route path="*" element={<Navigate to="home"/>}/>
    </Routes>
  );
}