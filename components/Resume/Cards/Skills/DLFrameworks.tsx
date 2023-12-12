import SkillChart from './SkillChart';

const data = [
  {
    skill: "TensorFlow",
    level: 95,
    fullMark: 100,
  },
  {
    skill: "pyTorch",
    level: 85,
    fullMark: 100,
  },
  {
    skill: "MATLAB",
    level: 90,
    fullMark: 100,
  },
  {
    skill: "Flux",
    level: 80,
    fullMark: 100,
  },
];

export default function DLFrameworkSkill() {
    return (
      <SkillChart data={data} title="ML Frameworks"/>
    );
  }