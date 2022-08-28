import { Route, Routes } from "react-router-dom";
import BuisnessPage from "../Pages/BuisnessPage";
import CityPage from "../Pages/CityPage";
import CovidNewsPage from "../Pages/CovidPage";
import EntertainPage from "../Pages/EntertainPage";
import HomePage from "../Pages/HomePage";
import { IndiaPages } from "../Pages/IndiaPage";
import LatestNewsPage from "../Pages/LatestPage";
import LivePage from "../Pages/LivePage";
import OffbeatPage from "../Pages/OffbeatPage";
import SciencePage from "../Pages/SciencePage";
import SearchPage from "../Pages/SearchPage";
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
                <Route path="/offbeatnews" element={<OffbeatPage/> } />
                <Route path="/entertainnews" element={<EntertainPage/>} />
                <Route path="/sciencenews" element={<SciencePage/>} />
                <Route path="/buisnessnews" element={<BuisnessPage/>} />
                <Route path="/livenews" element={ <LivePage/>}/>
                <Route path="/searchpage" element={<SearchPage/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes;