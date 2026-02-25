import "@/css/SkillBar.css";

const SkillBar = ({ skillName, skillWidth, Icon }) => {
  return (
    <div className="skillBar">
      <div className="skillName">
        <div className="skillNameHover glass ">{skillName}</div>
        {Icon && <Icon size={30} />}
      </div>
      <div className="skillMainHealth">
        <div className="skillHealth" style={{ width: `${skillWidth}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
