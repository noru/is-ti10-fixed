import axios, { Axios } from 'axios'
import data from '../data/all-ti10-matches.json'


const client = new Axios({
  baseURL: 'https://api.opendota.com/api'
})
class API {
  getMatchById(id: number) {
    return client.get(`matches/${id}`).then(resp => resp.data)
  }

  getMatchByTeamId(teamId: number) {
    return data.filter(m => m.dire_team_id === 15 || m.radiant_team_id === 15)
  }
}

export default new API()