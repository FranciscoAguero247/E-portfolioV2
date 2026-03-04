const SkillMatrix = ({ skills }) => (
  <div className="space-y-4 md:space-y-0 md:border md:border-[#8e9294]/20">
    {skills.map((skill, index) => (
      <div key={index} className="border border-[#00ff41]/40 p-4 md:grid md:grid-cols-3 bg-black/40">
        <span className="text-[#8e9294] text-[10px] uppercase">{skill.cat}</span>
        <span className="text-white text-sm">{skill.stack}</span>
        <span className="text-[#00ff41] text-xs md:text-right font-mono">{skill.val}</span>
      </div>
    ))}
  </div>
);