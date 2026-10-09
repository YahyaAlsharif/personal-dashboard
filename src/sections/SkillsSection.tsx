import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/useLanguage';
import { localizedContent } from '../data/content';

export function SkillsSection() {
  const { language } = useLanguage();
  const { skills } = localizedContent[language];

  return (
    <section id="skills" className="section section-band skills-section">
      <div className="page-container skills-layout">
        <SectionHeading title={skills.title} />
        <div className="skill-rows">
          {skills.groups.map((group, index) => (
            <Reveal as="div" key={group.title} delay={index * 60} className="skill-row">
              <h3 className="skill-row-title">{group.title}</h3>
              <ul className="inline-list">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <bdi>{skill}</bdi>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
