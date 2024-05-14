import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from './Components/Homepage/Homepage'
import { Authentication } from './Components/Authentication/Authentication'
import { Dashboard } from './Components/Dashboard/Dashboard'
import { GamePlay } from './Components/Gameplay/GamePlay'
import { SettingsPage } from './Components/SettingsPage/SettingsPage'
import { ResultScreen } from './Components/ResultScreen/ResultScreen'
import { Leaderboard } from './Components/Leaderboard/Leaderboard'
import { GameModes } from './Components/Gamemodes/GameModes'
import { Profile } from './Components/ProfilePage/Profile'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
        <Route path='dashboard' element={<Dashboard />}></Route>
        <Route path='play' element={<GamePlay />}></Route>
        <Route path='settings' element={<SettingsPage />}></Route>
        <Route path='result' element={<ResultScreen />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='leaderboard' element={<Leaderboard />}></Route>
        <Route path='profile' element={<ResultScreen />}></Route>
        <Route path='modes' element={<GameModes />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
