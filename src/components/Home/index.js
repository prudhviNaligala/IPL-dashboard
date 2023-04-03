import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'

import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  renderTeamCards = () => {
    const {teamsData} = this.state
    return (
      <ul className="un-order">
        {teamsData.map(eachItem => (
          <TeamCard eachItemDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="background-container">
        <div className="logo-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
          />
          <h1 className="ipl-heading">IPL DASHBOARD</h1>
        </div>
        <div className="team-card-container">
          {isLoading ? this.renderLoader() : this.renderTeamCards()}
        </div>
      </div>
    )
  }
}

export default Home
