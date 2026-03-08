// ════════════════════════════════════════════════════════════════
//  chars/gojo.js — SATORU GOJO
//  To add a new character: copy this file, rename, adjust stats,
//  then include it in jjk_sorcerers_duel_v10.html via <script src="chars/newchar.js">
//  and register in buildSelectCards() and DATA object.
// ════════════════════════════════════════════════════════════════

const CHAR_GOJO = {
  id:'gojo',
  name:'SATORU GOJO',
  short:'GOJO',
  color:'#00d4ff',
  accent:'#6600ff',
  maxHp:420,
  maxCe:80,
  ceRegen:18,
  atk:80,
  def:120,
  spatk:165,
  spdef:150,
  spd:150,
  passive:'infinito',
  badge:'SPECIAL GRADE',
  badgeClr:'rgba(0,150,255,.1)',
  badgeTxt:'#00aaff',
  quote:'"The strongest in the world."',
  quote2:'Infinity · Six Eyes · Limitless',
  hasSummon:false,
  hasSimpleDomain:true,
  moves:[
    {id:'basic',    name:'Cursed Strike',  type:'Physical',power:52, acc:100,ceUse:0, special:false,cd:0,maxCd:0,color:'#5588ff',desc:'Fast strike',                      effects:[]},
    {id:'blue',     name:'Blue',           type:'CE',      power:95, acc:100,ceUse:15,special:true, cd:0,maxCd:0,color:'#00d4ff',desc:'Gravitational pull, -SPD',          effects:[{t:'stat',stat:'spd',stage:-1,who:'enemy'}]},
    {id:'red',      name:'Red',            type:'CE',      power:135,acc:95, ceUse:20,special:true, cd:0,maxCd:0,color:'#ff2255',desc:'Repulsion, pierces Infinity, stuns',effects:[{t:'pierce_inf',val:1.0},{t:'status',s:'stun',turns:1,who:'enemy'}]},
    {id:'hollow',   name:'Hollow Purple',  type:'CE',      power:220,acc:90, ceUse:25,special:true, cd:0,maxCd:3,color:'#cc44ff',desc:'Void annihilation, ignores DEF',    effects:[{t:'ignore_def',val:.35}]},
    {id:'void',     name:'Unlimited Void', type:'Domain',  power:60, acc:100,ceUse:30,special:false,cd:0,maxCd:5,color:'#003388',desc:'Domain: paralysis + mental dmg',   isDomain:true,barrierHp:200,effects:[{t:'void',turns:5}]},
    {id:'rcte',     name:'Reverse CE',     type:'Heal',    power:0,  acc:100,ceUse:15,special:true, cd:0,maxCd:2,color:'#44ffaa',desc:'Heals 90 HP, cures ailments',       isHeal:true,effects:[{t:'heal',val:90},{t:'cure'}]},
  ]
};
