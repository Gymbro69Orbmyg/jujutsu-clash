// ════════════════════════════════════════════════════════════════
//  chars/megumi.js — MEGUMI FUSHIGURO
//  Copy this file to add new characters.
// ════════════════════════════════════════════════════════════════

const CHAR_MEGUMI = {
  id:'megumi',
  name:'MEGUMI FUSHIGURO',
  short:'MEGUMI',
  color:'#7766ff',
  accent:'#3322bb',
  maxHp:430,
  maxCe:160,
  ceRegen:12,
  atk:110,
  def:110,
  spatk:140,
  spdef:120,
  spd:145,
  passive:'ten_shadows',
  badge:'GRADE 1',
  badgeClr:'rgba(100,80,220,.1)',
  badgeTxt:'#8877ff',
  quote:'"I will save whoever I choose."',
  quote2:'Ten Shadows · Shikigami · Tactics',
  hasSummon:true,
  hasSimpleDomain:false,
  moves:[
    {id:'basic',   name:'Cursed Strike',       type:'Physical',power:50, acc:100,ceUse:0, special:false,cd:0,maxCd:0,color:'#7766ff',desc:'Basic attack',               effects:[]},
    {id:'shadow',  name:'Shadow Slash',         type:'Shadow',  power:112,acc:95, ceUse:12,special:true, cd:0,maxCd:0,color:'#554499',desc:'+30% dmg if target marked', effects:[{t:'shadow_bonus'}]},
    {id:'sbind',   name:'Serpent Bind',         type:'Shadow',  power:0,  acc:95, ceUse:16,special:true, cd:0,maxCd:3,color:'#2a1a66',desc:'SPD -1, DoT 5%/2t',         effects:[{t:'stat',stat:'spd',stage:-1,who:'enemy'},{t:'dot',val:.05,turns:2,who:'enemy',kind:'void'}]},
    {id:'smerge',  name:'Shadow Merge',         type:'Shadow',  power:0,  acc:100,ceUse:10,special:false,cd:0,maxCd:4,color:'#443388',desc:'Shiki +20% dmg for 2t',     isBuff:true,effects:[{t:'shadow_merge',turns:2}]},
    {id:'chimera', name:'Chimera Shadow Garden', type:'Domain',  power:45, acc:100,ceUse:60,special:false,cd:0,maxCd:5,color:'#1a0a44',desc:'Domain: shiki +40%, free summon',isDomain:true,barrierHp:180,effects:[{t:'chimera',turns:5}]},
    {id:'sreverse',name:'Shadow Reversal',       type:'Heal',    power:0,  acc:100,ceUse:24,special:true, cd:0,maxCd:3,color:'#55aaff',desc:'Heals 100 HP, cures ailments',isHeal:true,effects:[{t:'heal',val:100},{t:'cure'}]},
  ]
};
