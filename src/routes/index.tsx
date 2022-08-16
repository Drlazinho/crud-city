import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/context";

export const AppRoutes = () => {
const {toggleDrawerOpen} = useDrawerContext()

  return(
    <Routes>
      <Route path="/home" element={<Button variant='contained'onClick={toggleDrawerOpen} color='primary'>Home</Button>}/>
      
      <Route path="*" element={<Navigate to="home"/>}/>
    </Routes>
  );
}