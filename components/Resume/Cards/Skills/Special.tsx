import SkillChart from './SkillChart';

const data = [
  {
    skillShortName: "Web",
    skillFullName: "Full-Stack Web Development",
    level: 86,
    fullMark: 100,
  },
  {
    skillShortName: "Embedded",
    skillFullName: "Embedded Systems",
    level: 94,
    fullMark: 100,
  },
  {
    skillShortName: "ParaComp",
    skillFullName: "Parallel Computing",
    level: 74,
    fullMark: 100,
  },
  {
    skillShortName: "DistComp",
    skillFullName: "Distributed Computing",
    level: 70,
    fullMark: 100,
  },
  {
    skillShortName: "Optim",
    skillFullName: "Numerical Optimization",
    level: 96,
    fullMark: 100,
  },
];

export default function SpecialSkill() {
    return (
      <SkillChart data={data} title="Professional Skills"/>
    );
  }