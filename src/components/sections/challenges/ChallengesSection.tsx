import sections from "../../../core/sections"
import ChallengesList from "./ChallengesList"
import Section from "../Section"

const ChallengesSection = () => {
    const description = 'Here are some common and cool algorithms and coding challenges with UI: '

    return (
        <Section
            id={sections.challenges.id} 
            title={sections.challenges.name}
            description={description}
            content={<ChallengesList />} />
    )
}

export default ChallengesSection