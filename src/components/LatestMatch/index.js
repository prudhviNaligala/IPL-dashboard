import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div>
      <h1 className="team-heading">Latest Matches</h1>
      <div className="latest-matches-background">
        <div className="latest-match-details">
          <div>
            <p className="all-paras competing-team">{competingTeam}</p>
            <p className="all-paras competing-team">{date}</p>
            <p className="all-paras">{venue}</p>
            <p className="all-paras">{result}</p>
          </div>
          <div>
            <img className="logo" src={competingTeamLogo} alt={competingTeam} />
          </div>
          <div>
            <p className="all-paras">First Innings</p>
            <p className="all-paras">{firstInnings}</p>
            <p className="all-paras">Second Innings</p>
            <p className="all-paras">{secondInnings}</p>
            <p className="all-paras">Man Of The Match</p>
            <p className="all-paras">{manOfTheMatch}</p>
            <p className="all-paras">Umpires</p>
            <p className="all-paras">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
