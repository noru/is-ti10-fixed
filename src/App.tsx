import { useState } from 'react'
import api from './api'
import './App.css'
import data from './data/all-lgd-matches.json'
import { orderBy } from 'lodash-es'

function App() {
  // let lgdMatches = api.getMatchByTeamId(15)

  let apms = data.map(m => 
    m.players
      .filter(p => p.name=== 'XinQ')
      .map(p => ({ mid: m.match_id, st: m.start_time, name: p.name, apm: p.actions_per_min }))[0]
    )
  console.error(apms);
  apms = orderBy(apms, 'st')
  console.table(apms)
  return (
    <div className="App">

    </div>
  )
}

export default App
