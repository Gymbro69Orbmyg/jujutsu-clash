// ════════════════════════════════════════════════════════════════
//  chars/sukuna.js — RYOMEN SUKUNA
//  Copy this file to add new characters.
// ════════════════════════════════════════════════════════════════

const CHAR_SUKUNA = {
  id:'sukuna',
  name:'RYOMEN SUKUNA',
  short:'SUKUNA',
  color:'#e01030',
  accent:'#ff4400',
  maxHp:480,
  maxCe:200,
  ceRegen:14,
  atk:175,
  def:130,
  spatk:120,
  spdef:115,
  spd:140,
  passive:'rei',
  badge:'KING OF CURSES',
  badgeClr:'rgba(180,0,20,.1)',
  badgeTxt:'#cc1122',
  quote:'"Bow before the king."',
  quote2:'Dismantle · Cleave · Malevolent Shrine',
  hasSummon:false,
  hasSimpleDomain:true,
  moves:[
    {id:'basic',    name:'Cursed Strike',    type:'Physical',power:50, acc:100,ceUse:0, special:false,cd:0,maxCd:0,color:'#cc4444',desc:'Basic attack',                           effects:[]},
    {id:'dismantle',name:'Dismantle',         type:'Slash',   power:88, acc:100,ceUse:15,special:false,cd:0,maxCd:0,color:'#cc1122',desc:'High crit chance',                      effects:[{t:'high_crit'}]},
    {id:'cleave',   name:'Cleave',            type:'Slash',   power:0,  acc:100,ceUse:25,special:false,cd:0,maxCd:0,color:'#880011',desc:'Adaptive dmg, pierces Infinity',        effects:[{t:'adaptive'},{t:'pierce_inf',val:.5}]},
    {id:'furnace',  name:'Furnace',           type:'Fire',    power:148,acc:95, ceUse:30,special:true, cd:0,maxCd:3,color:'#ff4400',desc:'AoE fire — burns 3t, hits ALL',         isAoe:true,effects:[{t:'status',s:'burn',turns:3,who:'enemy'},{t:'dot',val:.08,turns:3,who:'enemy',kind:'burn'}]},
    {id:'shrine',   name:'Malevolent Shrine', type:'Domain',  power:72, acc:100,ceUse:40,special:false,cd:0,maxCd:4,color:'#330000',desc:'Open domain — AoE slashes, no barrier', isDomain:true,isAoe:true,noBarrier:true,effects:[{t:'shrine',turns:4}]},
    {id:'rcte',     name:'Reverse CE',        type:'Heal',    power:0,  acc:100,ceUse:25,special:true, cd:0,maxCd:2,color:'#ff8844',desc:'Heals 80 HP, cures ailments',           isHeal:true,effects:[{t:'heal',val:80},{t:'cure'}]},
  ]
};
