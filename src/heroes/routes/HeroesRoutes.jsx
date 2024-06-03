import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage } from '../pages'
import { SearchPage } from '../pages/SearchPage'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container py-4'>
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="/" element={<Navigate to="/marvel" />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />
            </Routes>
        </div>

        
    </>
  )
}
