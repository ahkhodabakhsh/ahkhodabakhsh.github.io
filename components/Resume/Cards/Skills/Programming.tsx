import SkillChart from './SkillChart';

const data = [
  {
    skill: "C/C++",
    level: 90,
    fullMark: 100,
  },
  {
    skill: "C#",
    level: 85,
    fullMark: 100,
  },
  {
    skill: "Python",
    level: 100,
    fullMark: 100,
  },
  {
    skill: "JavaScript",
    level: 85,
    fullMark: 100,
  },
  {
    skill: "Julia",
    level: 80,
    fullMark: 100,
  },
  {
    skill: "MATLAB",
    level: 100,
    fullMark: 100,
  },
];

export default function ProgrammingSkill() {
  return (
    <SkillChart data={data} title="Programming Languages"/>
  );
}
