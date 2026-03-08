// ═══════════════════════════════════════════════════════════
//  DEBUG.JS  —  JJK SORCERER'S DUEL  v10
//  Drop this file in the game folder to enable the debug panel.
//  Toggle with: ` (backtick) or click DEBUG button bottom-right.
// ═══════════════════════════════════════════════════════════

(function(){
  'use strict';

  // Create toggle button
  const toggle = document.createElement('button');
  toggle.id = 'debug-toggle';
  toggle.textContent = 'DEBUG';
  document.body.appendChild(toggle);

  // Create panel
  const panel = document.createElement('div');
  panel.id = 'debug-panel';
  panel.innerHTML = `
    <div class="dbg-section">⚙ JJK DEBUG PANEL</div>
    <div id="dbg-state"></div>
    <div class="dbg-section">PLAYER</div>
    <div id="dbg-player"></div>
    <div class="dbg-section">ENEMY</div>
    <div id="dbg-enemy"></div>
    <div class="dbg-section">GAME FLAGS</div>
    <div id="dbg-flags"></div>
    <div class="dbg-section">CHEATS</div>
    <div id="dbg-cheats"></div>
  `;
  document.body.appendChild(panel);

  let visible = false;
  function togglePanel(){
    visible = !visible;
    panel.classList.toggle('visible', visible);
    if(visible) updateDebug();
  }
  toggle.addEventListener('click', togglePanel);
  document.addEventListener('keydown', e => { if(e.key === '`') togglePanel(); });

  // ── Cheat buttons ────────────────────────────────────────
  function buildCheats(){
    const c = document.getElementById('dbg-cheats');
    c.innerHTML = '';

    const mkBtn = (label, fn) => {
      const b = document.createElement('button');
      b.className = 'dbg-btn'; b.textContent = label;
      b.addEventListener('click', fn);
      c.appendChild(b);
    };

    mkBtn('▲ +200 HP (player)', () => { if(window.G?.pc){ G.pc.hp=Math.min(G.pc.maxHp,G.pc.hp+200); updateDebug(); if(window.updateHUD)updateHUD(); }});
    mkBtn('▲ +80 CE (player)',  () => { if(window.G?.pc){ G.pc.ce=Math.min(G.pc.maxCe,G.pc.ce+80);   updateDebug(); if(window.updateHUD)updateHUD(); }});
    mkBtn('▼ -200 HP (enemy)', () => { if(window.G?.ec){ G.ec.hp=Math.max(1,G.ec.hp-200);             updateDebug(); if(window.updateHUD)updateHUD(); }});
    mkBtn('▲ All move CDs → 0', () => {
      if(window.G?.pc) G.pc.moves.forEach(m=>m.cd=0);
      if(window.G?.ec) G.ec.moves.forEach(m=>m.cd=0);
      updateDebug(); if(window.setupMoveBtns)setupMoveBtns();
    });
    mkBtn('◈ Clear statuses (player)', () => {
      if(window.G?.pc){ G.pc.statuses=[]; G.pc.stages={atk:0,def:0,spatk:0,spdef:0,spd:0}; }
      updateDebug(); if(window.updateHUD)updateHUD();
    });
    mkBtn('⚡ Skip to next turn',  () => { if(window.G&&!G.busy&&window.executeTurn) executeTurn({type:'defend'}); });
    mkBtn('⚠ Kill enemy (test)',   () => { if(window.G?.ec){ G.ec.hp=1; updateDebug(); if(window.updateHUD)updateHUD(); }});
  }

  // ── Stat display ─────────────────────────────────────────
  function row(label, val){
    return `<div class="dbg-row"><span class="dbg-lbl">${label}</span><span class="dbg-val">${val}</span></div>`;
  }

  function charBlock(f, elId){
    const el = document.getElementById(elId); if(!el||!f) return;
    const statuses = f.statuses.map(s=>`${s.s}(${s.turns}t)`).join(', ') || '—';
    const stages   = Object.entries(f.stages||{}).filter(([,v])=>v!==0).map(([k,v])=>`${k}:${v>0?'+':''}${v}`).join(' ') || '0';
    const cds      = (f.moves||[]).filter(m=>m.cd>0).map(m=>`${m.name}(${m.cd})`).join(', ') || '—';
    const shikis   = f.shikigami ? Object.entries(f.shikigami).filter(([,s])=>s&&s.hp>0).map(([k,s])=>`${s.icon}${s.hp}/${s.maxHp}`).join(' ') : '—';
    el.innerHTML = `
      ${row('ID', f.id||'?')}
      ${row('HP', `${f.hp||0} / ${f.maxHp||0}`)}
      ${row('CE', `${Math.round(f.ce||0)} / ${f.maxCe||0}`)}
      ${row('ATK/DEF', `${f.atk||0} / ${f.def||0}`)}
      ${row('SPD', f.spd||0)}
      ${row('Stages', stages)}
      ${row('Statuses', statuses)}
      ${row('Move CDs', cds)}
      ${row('Shikigami', shikis)}
      ${row('Defending', f.defending?'YES':'—')}
      ${row('Domain', f.domainActive?`YES (${f.domainTurns}t)`:'—')}
    `;
  }

  function updateDebug(){
    if(!visible) return;

    // State block
    const s = document.getElementById('dbg-state');
    if(window.G && G.pc){
      s.innerHTML = row('TURN', G.turn||0) + row('BUSY', G.busy?'YES':'no');
    } else {
      s.innerHTML = '<div style="color:rgba(255,200,0,.4);font-size:8px">No active game</div>';
      return;
    }

    charBlock(G.pc, 'dbg-player');
    charBlock(G.ec, 'dbg-enemy');

    // Flags
    const fl = document.getElementById('dbg-flags');
    fl.innerHTML = `
      ${row('Shrine', G.shrineTurns>0?`${G.shrineTurns}t`:'—')}
      ${row('Void',   G.voidTurns>0?`${G.voidTurns}t`:'—')}
      ${row('Chimera',G.chimeraTurns>0?`${G.chimeraTurns}t`:'—')}
      ${row('Overthrow',G.overthrowTurns>0?`${G.overthrowTurns}t`:'—')}
      ${row('Domain Clash', G.domainClash?'YES':'—')}
    `;

    buildCheats();
  }

  // Auto-update when panel is visible
  setInterval(() => { if(visible) updateDebug(); }, 600);

  console.log('[DEBUG] JJK Debug panel loaded — press ` (backtick) to toggle');
})();
