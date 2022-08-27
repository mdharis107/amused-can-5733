import { Route, Routes } from "react-router-dom";
import CityPage from "../Pages/CityPage";
import CovidNewsPage from "../Pages/CovidPage";
import HomePage from "../Pages/HomePage";
import { IndiaPages } from "../Pages/IndiaPage";
import LatestNewsPage from "../Pages/LatestPage";
import SportsPage from "../Pages/SportsPage";
import WorldNewsPage from "../Pages/WorldnewsPage";

export { Routes, Route } from "react-router-dom"

function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/latest" element={<LatestNewsPage/> } />
                <Route path="/indianews" element={<IndiaPages /> } />
                <Route path="/citynews" element={ <CityPage/> } />
                <Route path="/worldnews" element={<WorldNewsPage/> } />
                <Route path="/sportsnews" element={<SportsPage/> } />
                <Route path="/covidnews" element={<CovidNewsPage/> }/>
                <Route/>

            </Routes>
        </div>
    )
}

export default AllRoutes;