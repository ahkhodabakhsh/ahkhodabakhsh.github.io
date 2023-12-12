import SkillChart from './SkillChart';

const data = [
  {
    skill: "SIMULINK",
    level: 95,
    fullMark: 100,
  },
  {
    skill: "SolidWorks",
    level: 85,
    fullMark: 100,
  },
  {
    skill: "Maple",
    level: 90,
    fullMark: 100,
  },
  {
    skill: "CATIA",
    level: 75,
    fullMark: 100,
  },
  {
    skill: "MATHEMATICA",
    level: 75,
    fullMark: 100,
  },
  {
    skill: "MSC. Nastran",
    level: 75,
    fullMark: 100,
  },
  {
    skill: "Fluent",
    level: 70,
    fullMark: 100,
  },
  {
    skill: "COMSOL",
    level: 80,
    fullMark: 100,
  },
  {
    skill: "ABAQUS",
    level: 75,
    fullMark: 100,
  },
];

export default function SoftwareSkill() {
    return (
      <SkillChart data={data} title="Engineering Software"/>
    );
  }