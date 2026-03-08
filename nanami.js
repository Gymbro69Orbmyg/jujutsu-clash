// ══════════════════════════════════════════════════════════════════
//  NANAMI.JS — Kento Nanami character definition
//
//  📁 Place this file in your game folder (same level as .html)
//  📸 Add character art at:  images/chars/nanami.png
//
//  To customize stats or moves, edit the values below.
//  This file overrides the built-in defaults in jjk_sorcerers_duel.html
// ══════════════════════════════════════════════════════════════════

const CHAR_NANAMI = {
  id:       'nanami',
  name:     'KENTO NANAMI',
  short:    'NANAMI',
  color:    '#c8a060',
  accent:   '#886030',

  // ── Stats ──────────────────────────────────────────────────────
  maxHp:   490,
  maxCe:   140,
  ceRegen: 10,
  atk:     158,
  def:     142,
  spatk:   112,
  spdef:   136,
  spd:     118,

  // ── Identity ──────────────────────────────────────────────────
  passive:    'overtime',
  badge:      'GRADE 1 SORCERER',
  badgeClr:   'rgba(180,140,60,.1)',
  badgeTxt:   '#c8a060',
  quote:      '"Overtime. Just this once."',
  quote2:     'Ratio Technique · Binding Vow · Seven-Three',

  // ── Abilities ─────────────────────────────────────────────────
  hasSummon:       false,
  hasSimpleDomain: true,

  moves: [
    {
      id: 'basic', name: 'Ratio Technique',
      type: 'Slash', power: 88, acc: 100, ceUse: 0,
      special: false, cd: 0, maxCd: 0,
      color: '#c8a060',
      desc: 'Weak-point strike — high crit chance',
      effects: [{ t: 'high_crit' }]
    },
    {
      id: 'collapse', name: 'Collapse',
      type: 'Physical', power: 108, acc: 100, ceUse: 18,
      special: false, cd: 0, maxCd: 0,
      color: '#aa8040',
      desc: 'Structural technique — DEF -1 stage',
      effects: [{ t: 'stat', stat: 'def', stage: -1, who: 'enemy' }]
    },
    {
      id: 'overtime', name: 'Overtime Rush',
      type: 'Slash', power: 148, acc: 90, ceUse: 28,
      special: false, cd: 0, maxCd: 2,
      color: '#886030',
      desc: 'Post-overtime burst — pierces barrier 15%',
      effects: [{ t: 'pierce_barrier', val: .15 }]
    },
    {
      id: 'blackout', name: 'Blackout',
      type: 'Slash', power: 168, acc: 82, ceUse: 32,
      special: false, cd: 0, maxCd: 3,
      color: '#664820',
      desc: 'Devastating slash — ignores 30% DEF, high crit',
      effects: [{ t: 'ignore_def', val: .30 }, { t: 'high_crit' }]
    },
    {
      id: 'vow', name: 'Binding Vow',
      type: 'Domain', power: 240, acc: 100, ceUse: 42,
      special: false, cd: 0, maxCd: 99,
      color: '#332010',
      desc: 'SACRIFICE: -100 HP, massive damage',
      isDomain: true, noBarrier: true,
      effects: [{ t: 'self_cost_hp', val: 100 }]
    },
    {
      id: 'rcte', name: 'CE Recovery',
      type: 'Heal', power: 0, acc: 100, ceUse: 15,
      special: true, cd: 0, maxCd: 3,
      color: '#d4a870',
      desc: 'Heals 55 HP, restores 35 CE',
      isHeal: true,
      effects: [{ t: 'heal', val: 55 }, { t: 'ce_restore', val: 35 }]
    },
  ]
};
