import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/context";
import { Dashboard, ListagemDeCidade } from "../pages";

export const AppRoutes = () => {
const {setDrawerOptions} = useDrawerContext()

useEffect(() => {
  setDrawerOptions([
    {
      label: 'Página inicial',
      icon: 'home',
      path: '/pagina-inicial',
    },
    {
      label: 'Cidades',
      icon: 'city',
      path: '/cidades',
    },
  ])
}, []);

  return(
    <Routes>
      <Route path="/home" element={<Dashboard />}/>
      <Route path="/cidades" element={<ListagemDeCidade />}/>
      {/* <Route path="/cidades/detalhe/:id" element={<Dashboard />}/> */}
      
      <Route path="*" element={<Navigate to="home"/>}/>
    </Routes>
  );
}