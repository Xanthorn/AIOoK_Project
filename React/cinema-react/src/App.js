import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Movies from './Components/Movies/Movies';
import AddMovie from './Components/Movies/AddMovie';
import DeleteMovie from './Components/Movies/DeleteMovie';
import Shows from './Components/Shows/Shows';
import AddShow from "./Components/Shows/AddShow"
import Calendar from './Components/Calendar/Calendar';
import DayInCalendar from './Components/Calendar/DayInCalendar';
import DeleteShow from './Components/Shows/DeleteShow';
import CurrentShows from './Components/Shows/CurrentShows';
import EditMovie from './Components/Movies/EditMovie';
import EditShow from './Components/Shows/EditShow';
import MoviePopularity from './Components/Movies/MoviePopularity';
import BuyTicket from './Components/Shows/BuyTicket';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Kino "Bajka"</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/movies">Filmy</Link>
              <Link className="nav-link" to="/movies/popularity">Popularność filmu</Link>
              <Link className="nav-link" to="/shows">Seanse</Link>
              <Link className="nav-link" to="/shows/now">Trwające seanse</Link>
              <Link className="nav-link" to="/calendar">Kalendarz</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/add" element={<AddMovie />} />
              <Route path="/movies/delete/:id" element={<DeleteMovie />} />
              <Route path="/movies/edit/:id" element={<EditMovie />} />
              <Route path="/movies/popularity" element={<MoviePopularity />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/shows/now" element={<CurrentShows />} />
              <Route path="/shows/add" element={<AddShow />} />
              <Route path="/shows/edit/:id" element={<EditShow />} />
              <Route path="/shows/delete/:id" element={<DeleteShow />} />
              <Route path="/shows/buy-ticket/:id" element={<BuyTicket />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/calendar/:year/:month/:day" element={<DayInCalendar />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
