import SkillChart from './SkillChart';

const data = [
  {
    skillShortName: "SMLNK",
    skillFullName: "MATLAB SIMULINK",
    level: 95,
    fullMark: 100,
  },
  {
    skillShortName: "SW",
    skillFullName: "SolidWorks",
    level: 85,
    fullMark: 100,
  },
  {
    skillShortName: "Maple",
    skillFullName: "Maple",
    level: 90,
    fullMark: 100,
  },
  {
    skillShortName: "CATIA",
    skillFullName: "CATIA",
    level: 75,
    fullMark: 100,
  },
  {
    skillShortName: "WM",
    skillFullName: "Wolfram Mathematica",
    level: 75,
    fullMark: 100,
  },
  {
    skillShortName: "Nastran",
    skillFullName: "MSC. Nastran",
    level: 75,
    fullMark: 100,
  },
  {
    skillShortName: "Fluent",
    skillFullName: "ANSYS Fluent",
    level: 70,
    fullMark: 100,
  },
  {
    skillShortName: "COMSOL",
    skillFullName: "COMSOL Multiphysics",
    level: 80,
    fullMark: 100,
  },
  {
    skillShortName: "Abaqus",
    skillFullName: "Abaqus FEA",
    level: 75,
    fullMark: 100,
  },
];

export default function SoftwareSkill() {
    return (
      <SkillChart data={data} title="Engineering Software"/>
    );
  }