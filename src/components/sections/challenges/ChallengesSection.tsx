import sections from "../../../core/sections"
import ChallengesList from "./ChallengesList"
import Section from "../Section"

const ChallengesSection = () => {
    const description = 'Here are some algorithms and coding challenges with UI that I added to AAC:'

    return (
        <Section
            id={sections.challenges.id} 
            title={sections.challenges.name}
            description={description}
            content={<ChallengesList />} />
    )
}

export default ChallengesSection