import SkillChart from './SkillChart';

const data = [
  {
    skill: "Full-Stack Web",
    level: 86,
    fullMark: 100,
  },
  {
    skill: "Embedded Systems",
    level: 94,
    fullMark: 100,
  },
  {
    skill: "Parallel Computing",
    level: 74,
    fullMark: 100,
  },
  {
    skill: "Distributed Computing",
    level: 70,
    fullMark: 100,
  },
  {
    skill: "Numerical Optimization",
    level: 96,
    fullMark: 100,
  },
];

export default function SpecialSkill() {
    return (
      <SkillChart data={data} title="Professional Skills"/>
    );
  }