import SkillChart from './SkillChart';

const data = [
  {
    skillShortName: "C/C++",
    skillFullName: "C/C++",
    level: 90,
    fullMark: 100,
  },
  {
    skillShortName: "C#",
    skillFullName: "C#",
    level: 85,
    fullMark: 100,
  },
  {
    skillShortName: "Py",
    skillFullName: "Python",
    level: 100,
    fullMark: 100,
  },
  {
    skillShortName: "JS",
    skillFullName: "JavaScript",
    level: 85,
    fullMark: 100,
  },
  {
    skillShortName: "jl",
    skillFullName: "Julia",
    level: 80,
    fullMark: 100,
  },
  {
    skillShortName: "MATLAB",
    skillFullName: "MATLAB",
    level: 100,
    fullMark: 100,
  },
];

export default function ProgrammingSkill() {
  return (
    <SkillChart data={data} title="Programming Languages"/>
  );
}
