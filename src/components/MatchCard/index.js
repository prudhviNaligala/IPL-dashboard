import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  const className = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-card-container">
      <img className="team-logo" src={competingTeamLogo} alt={competingTeam} />
      <h1 className="competing-team">{competingTeam} </h1>
      <p className="result">{result}</p>
      <p className={className}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
