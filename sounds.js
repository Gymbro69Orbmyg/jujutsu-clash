// ═══════════════════════════════════════════════════════════════
//  SOUNDS.JS — JJK Sorcerer's Duel Sound Loader
//  Drop this file in the jujutsu/ folder alongside the main HTML.
//
//  HOW TO ADD YOUR OWN SOUNDS:
//    1. Put any .mp3 file in the sounds/ folder
//    2. Name it exactly as listed below (e.g. sounds/black_flash.mp3)
//    3. That's it — the game auto-loads it on next play
//
//  If a file is missing: built-in synthesized sound plays instead.
// ═══════════════════════════════════════════════════════════════

// This file runs BEFORE the main script, so it can override the sound map.
// If sounds.js is present, window._EXTRA_SOUNDS is read by the SoundEngine.
window._EXTRA_SOUNDS = {
  // ─ GAME ─────────────────────────────────────────────────────────
  start:              'sounds/start.mp3',

  // ─ CHARACTER SELECT ─────────────────────────────────────────────
  select_gojo:        'sounds/select_gojo.mp3',
  select_sukuna:      'sounds/select_sukuna.mp3',
  select_megumi:      'sounds/select_megumi.mp3',
  select_itadori:     'sounds/select_itadori.mp3',
  select_nanami:      'sounds/select_nanami.mp3',

  // ─ MAHORAGA ─────────────────────────────────────────────────────
  summon_mahoraga:    'sounds/summon_mahoraga.mp3',
  adapt_100:          'sounds/mahoraga.mp3',       // dharma wheel full adaptation
  adapt_sukuna:       'sounds/adapt_sukuna.mp3',
  adapt:              'sounds/adapt.mp3',

  // ─ GOJO MOVES ───────────────────────────────────────────────────
  blue:               'sounds/blue.mp3',
  red:                'sounds/red.mp3',
  hollow:             'sounds/hollow.mp3',
  void_domain:        'sounds/void_domain.mp3',    // Unlimited Void activation

  // ─ SUKUNA MOVES ─────────────────────────────────────────────────
  dismantle:          'sounds/dismantle.mp3',
  cleave:             'sounds/cleave.mp3',
  furnace:            'sounds/furnace.mp3',
  shrine_domain:      'sounds/shrine_domain.mp3',  // Malevolent Shrine activation

  // ─ MEGUMI MOVES ─────────────────────────────────────────────────
  dogs:               'sounds/dogs.mp3',
  nue:                'sounds/nue.mp3',
  serpent:            'sounds/serpent.mp3',
  toad:               'sounds/toad.mp3',
  chimera_domain:     'sounds/chimera_domain.mp3', // Chimera Shadow Garden activation

  // ─ ITADORI MOVES ────────────────────────────────────────────────
  black_flash:        'sounds/black_flash.mp3',
  divergent_fist:     'sounds/divergent_fist.mp3',

  // ─ NANAMI MOVES ─────────────────────────────────────────────────
  ratio:              'sounds/ratio.mp3',
  overtime:           'sounds/overtime.mp3',

  // ─ MAHORAGA MOVES ───────────────────────────────────────────────
  overthrow:          'sounds/overthrow.mp3',      // Divine Overthrow activation

  // ─ COMBAT ───────────────────────────────────────────────────────
  hit:                'sounds/hit.mp3',
  crit:               'sounds/crit.mp3',
  miss:               'sounds/miss.mp3',
  heal:               'sounds/heal.mp3',
  defend:             'sounds/defend.mp3',
  domain:             'sounds/domain.mp3',
  domain_break:       'sounds/domain_break.mp3',
  simple_domain:      'sounds/simple_domain.mp3',
  summon:             'sounds/summon.mp3',
  infinity:           'sounds/infinity.mp3',

  // ─ PASSIVE/DOT ──────────────────────────────────────────────────
  shrine:             'sounds/shrine.mp3',         // Shrine passive tick (every other turn)
  void:               'sounds/void.mp3',           // Void passive tick
  megumi_halfhp:      'sounds/megumi_halfhp.mp3',
};

// NOTE: Add "select_itadori" and "select_nanami" sounds here if you want
// character-specific selection sounds for the new fighters.
