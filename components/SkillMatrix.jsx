import React from 'react';
import { SKILL_MATRIX } from '../portfolioDta';

export default function SkillMatrix() {
  return (
    <div className="border border-[#00ff41]/20 p-6 bg-[#05080a]/80 rounded-lg">
      <h3 className="text-[#00ff41] text-xs mb-6 tracking-[0.3em] uppercase underline">
        Tactical_Skill_Matrix
      </h3>
      <div className="space-y-4">
        {SKILL_MATRIX.map((matrix, index) => (
          <div key={index} className="border border-[#00ff41]/20 p-3 bg-black/40">
            <span className="text-[#8e9294] text-[10px] uppercase block mb-1">
              {matrix.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {matrix.items.map((skill, sIdx) => (
                <span key={sIdx} className="text-white text-xs bg-[#00ff41]/10 px-2 py-0.5 border border-[#00ff41]/20 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}