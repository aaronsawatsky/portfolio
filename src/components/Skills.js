import { skills } from './data'


export default function Skills() {
    return (
        <section id="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <h2>Skills</h2>
                </div>
                <div className="skills-grid">
                {skills.map((skill) => (
                            <div className="skill">
                                <p>{skill.title}</p>
                                <img src={skill.logo} alt="" className="skill-logo"/>
                            </div>
                ))}
                </div>
            </div>
        </section>
    )
}