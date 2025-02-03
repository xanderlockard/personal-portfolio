import ExperienceCard from "../../components/Shared/ExperienceCard";

const SAFERIDE_HEALTH_DESCRIPTION = "In this role I am working on full stack development using React, PHP, and MySQL.";
const MODUS_OPERANDI_DESCRIPTION = "In this role I worked on full stack development using Java, Angular, and RDF4J. I also was apart of a working group incorporating large language models into the deployment stack.";

const styles = {
    experienceContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        margin: '5%',
    }
};

const Experience = () => {
    return (
        <div style={styles.experienceContainer}>
            <ul>
                <li style={styles.listItem}>
                    <ExperienceCard
                        imageSrc="https://www.finsmes.com/wp-content/uploads/2023/10/SafeRide-Health-300x300.png"
                        positionTitle="Junior Full Stack Engineer"
                        companyName="SafeRide Health"
                        description={SAFERIDE_HEALTH_DESCRIPTION}
                        dateRange="January 2025 - Present"
                    />
                </li>
                <li style={styles.listItem}>
                    <ExperienceCard
                        imageSrc="https://www.modusoperandi.com/resources/images/layout/default-landscape.jpg"
                        positionTitle="Software Engineering Intern"
                        companyName="Modus Operandi"
                        description={MODUS_OPERANDI_DESCRIPTION}
                        dateRange="June 2023 - October 2024"
                    />
                </li>
            </ul>
        </div>
    );
};

export default Experience;
