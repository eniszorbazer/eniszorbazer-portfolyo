import React from "react";

const skillsContent = [
  { skillClass: "p98", skillPercent: "98", skillName: "PYTHON" },
  { skillClass: "p90", skillPercent: "90", skillName: "GOLANG" },
  { skillClass: "p85", skillPercent: "85", skillName: "NODE.JS" },
  { skillClass: "p90", skillPercent: "90", skillName: "DOCKER" },
  { skillClass: "p70", skillPercent: "70", skillName: "JAVA" },
  { skillClass: "p85", skillPercent: "85", skillName: "VUE.JS" },
  { skillClass: "p75", skillPercent: "75", skillName: "FLUTTER" },
  { skillClass: "p75", skillPercent: "75", skillName: "REACT" },
  { skillClass: "p70", skillPercent: "70", skillName: "REACT NATIVE" },
  { skillClass: "p85", skillPercent: "85", skillName: "HTML" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p95", skillPercent: "95", skillName: "JAVASCRIPT" },
  { skillClass: "p60", skillPercent: "60", skillName: "PHP" },
  { skillClass: "p85", skillPercent: "85", skillName: "SOLIDWORKS" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
