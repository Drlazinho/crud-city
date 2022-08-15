import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/context";

export const AppRoutes = () => {
const {toggleTheme} = useAppThemeContext()

  return(
    <Routes>
      <Route path="/home" element={<Button variant='contained'onClick={toggleTheme} color='primary'>Home</Button>}/>
      
      <Route path="*" element={<Navigate to="home"/>}/>
    </Routes>
  );
}