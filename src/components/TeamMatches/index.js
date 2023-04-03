import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

import './index.css'

class TeamMatches extends Component {
  state = {teamBanner: '', latestMatch: {}, recentMatches: [], isLoading: true}

  componentDidMount() {
    this.getMatchData()
  }

  renderRecentMatchCards = () => {
    const {recentMatches} = this.state
    return (
      <ul className="un-order">
        {recentMatches.map(eachMatch => (
          <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  RenderLatestMatch = () => {
    const {latestMatch, teamBanner} = this.state
    return (
      <div className="latest-match-container">
        <img className="banner" src={teamBanner} alt="team banner" />
        <LatestMatch latestMatchDetails={latestMatch} />
        {this.renderRecentMatchCards()}
      </div>
    )
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const updatedRecent = recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    this.setState({
      teamBanner: teamBannerUrl,
      latestMatch: updatedLatestMatchDetails,
      recentMatches: updatedRecent,
      isLoading: false,
    })
    console.log(updatedRecent, updatedLatestMatchDetails)
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading} = this.state
    return (
      <div className={`bg-container ${id}`}>
        {isLoading ? this.renderLoader() : this.RenderLatestMatch()}
      </div>
    )
  }
}

export default TeamMatches
