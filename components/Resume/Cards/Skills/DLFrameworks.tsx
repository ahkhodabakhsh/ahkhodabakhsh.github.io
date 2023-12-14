import SkillChart from './SkillChart';

const data = [
  {
    skillShortName: "TF",
    skillFullName: "TensorFlow",
    level: 95,
    fullMark: 100,
  },
  {
    skillShortName: "pyTorch",
    skillFullName: "PyTorch",
    level: 85,
    fullMark: 100,
  },
  {
    skillShortName: "MATLAB",
    skillFullName: "MATLAB",
    level: 90,
    fullMark: 100,
  },
  {
    skillShortName: "Flux",
    skillFullName: "Flux",
    level: 80,
    fullMark: 100,
  },
];

export default function DLFrameworkSkill() {
    return (
      <SkillChart data={data} title="ML Frameworks"/>
    );
  }