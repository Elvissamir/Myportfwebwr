import { ChallengeData } from "./ChallengesList"

interface ChallengeCardProps {
    data: ChallengeData
}

const ChallengeCard = ({ data }: ChallengeCardProps) => {
    return (
        <div className="challenge-card-container">
            <div className="challenge-card">
                <img className="challenge-image" src={data.imageUrl} alt={data.name} width="350" height='180' />
                <div className="challenge-info">
                    <p className="challenge-name">{data.name}</p>
                    <a className="action-btn" href={data.link}>Visit</a>
                </div>
            </div>
        </div>
    )
}

export default ChallengeCard