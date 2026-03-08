// ══════════════════════════════════════════════════════════════════
//  ITADORI.JS — Yuji Itadori character definition
//
//  📁 Place this file in your game folder (same level as .html)
//  📸 Add character art at:  images/chars/itadori.png
//
//  To customize stats or moves, edit the values below.
//  This file overrides the built-in defaults in jjk_sorcerers_duel.html
// ══════════════════════════════════════════════════════════════════

const CHAR_ITADORI = {
  id:       'itadori',
  name:     'YUJI ITADORI',
  short:    'ITADORI',
  color:    '#ff6622',
  accent:   '#cc3300',

  // ── Stats ──────────────────────────────────────────────────────
  maxHp:   460,
  maxCe:   120,
  ceRegen: 13,
  atk:     148,
  def:     105,
  spatk:   132,
  spdef:   100,
  spd:     158,

  // ── Identity ──────────────────────────────────────────────────
  passive:    'black_flash',
  badge:      "SUKUNA'S VESSEL",
  badgeClr:   'rgba(200,80,0,.1)',
  badgeTxt:   '#ff6622',
  quote:      '"I\'ll save whoever I can. That\'s all."',
  quote2:     'Divergent Fist · Black Flash · Vessel\'s Wrath',

  // ── Abilities ─────────────────────────────────────────────────
  hasSummon:       false,
  hasSimpleDomain: false,

  moves: [
    {
      id: 'basic', name: 'Divergent Fist',
      type: 'Physical', power: 72, acc: 100, ceUse: 0,
      special: false, cd: 0, maxCd: 0,
      color: '#ff6622',
      desc: 'CE burst follow-up after strike',
      effects: [{ t: 'high_crit' }]
    },
    {
      id: 'manji', name: 'Manji Kick',
      type: 'Physical', power: 92, acc: 100, ceUse: 14,
      special: false, cd: 0, maxCd: 0,
      color: '#ff4400',
      desc: 'Heavy roundhouse — stuns 1 turn',
      effects: [{ t: 'status', s: 'stun', turns: 1, who: 'enemy' }]
    },
    {
      id: 'black_flash', name: 'Black Flash',
      type: 'CE', power: 188, acc: 72, ceUse: 0,
      special: true, cd: 0, maxCd: 3,
      color: '#ff2200',
      desc: 'Compressed CE impact — ignores 35% DEF',
      effects: [{ t: 'ignore_def', val: .35 }]
    },
    {
      id: 'barrage', name: 'Divergent Barrage',
      type: 'Physical', power: 54, acc: 90, ceUse: 28,
      special: false, cd: 0, maxCd: 2,
      color: '#cc4400',
      desc: '3-hit combo — DEF -1 per hit',
      effects: [{ t: 'multi_hit' }]
    },
    {
      id: 'vessel', name: "Vessel's Wrath",
      type: 'CE', power: 148, acc: 100, ceUse: 35,
      special: true, cd: 0, maxCd: 4,
      color: '#880000',
      desc: 'Sukuna erupts — pierce 25% DEF, +ATK 2t',
      isDomain: true, noBarrier: true,
      effects: [
        { t: 'ignore_def', val: .25 },
        { t: 'stat', stat: 'atk', stage: 2, who: 'self' }
      ]
    },
    {
      id: 'rcte', name: 'Reverse CE',
      type: 'Heal', power: 0, acc: 100, ceUse: 22,
      special: true, cd: 0, maxCd: 3,
      color: '#ff9966',
      desc: 'Heals 85 HP, cures ailments',
      isHeal: true,
      effects: [{ t: 'heal', val: 85 }, { t: 'cure' }]
    },
  ]
};
