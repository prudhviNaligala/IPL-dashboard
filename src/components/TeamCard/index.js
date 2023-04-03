import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItemDetails} = props
  const {id, name, teamImageUrl} = eachItemDetails
  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`} className="link">
        <img className="team-image" src={teamImageUrl} alt={id} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
