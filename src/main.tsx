import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './global.css'
import { Home } from './pages/Home.tsx';
import { Weapons } from './pages/Weapons.tsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeaponDetail } from './pages/WeaponDetail.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='weapons' element={<Weapons/>}/>
            {/* <Route path='stratagems' element={<Home/>} />
            <Route path='loadouts' element={<Home/>} /> */}
            <Route path='weapons/:id' element={<WeaponDetail/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
