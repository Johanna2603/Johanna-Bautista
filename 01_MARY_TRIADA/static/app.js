'use strict';
(() => {
  const body=document.body, menu=document.querySelector('.mobile-menu'), shade=document.querySelector('.drawer-shade');
  function toggleMenu(open){body.classList.toggle('menu-open',open);if(menu)menu.setAttribute('aria-expanded',String(open));if(open)document.querySelector('#sidebar a')?.focus();else menu?.focus();}
  menu?.addEventListener('click',()=>toggleMenu(!body.classList.contains('menu-open')));
  shade?.addEventListener('click',()=>toggleMenu(false));
  document.addEventListener('keydown',e=>{
    if(!body.classList.contains('menu-open'))return;
    if(e.key==='Escape'){toggleMenu(false);return;}
    if(e.key==='Tab'){
      const items=[...document.querySelectorAll('#sidebar a[href], #sidebar button')].filter(x=>x.getClientRects().length);
      if(!items.length)return;
      if(e.shiftKey && document.activeElement===items[0]){e.preventDefault();items[items.length-1].focus();}
      else if(!e.shiftKey && document.activeElement===items[items.length-1]){e.preventDefault();items[0].focus();}
    }
  });
  document.querySelectorAll('[data-confirm]').forEach(form=>form.addEventListener('submit',e=>{if(!window.confirm(form.dataset.confirm))e.preventDefault();}));
  document.querySelectorAll('[data-print]').forEach(b=>b.addEventListener('click',()=>window.print()));
  document.querySelectorAll('[data-back]').forEach(b=>b.addEventListener('click',()=>window.history.length>1?history.back():window.R88_NAV('/resumen/')));
  const kind=document.querySelector('#report-kind');
  function selectPeriod(){document.querySelectorAll('[data-period]').forEach(label=>{let active=label.dataset.period===kind.value;label.hidden=!active;label.querySelectorAll('input').forEach(i=>{i.disabled=!active;i.required=active;});});}
  if(kind){kind.addEventListener('change',selectPeriod);selectPeriod();}
  const team=document.querySelector('#field_team');
  function constrainTeams(){
    document.querySelectorAll('[data-team-dependent],[data-asset-select]').forEach(select=>{
      for(const option of select.options){let hidden=Boolean(option.dataset.team && team.value && option.dataset.team!==team.value);option.hidden=hidden;option.disabled=hidden;}
      if(select.selectedOptions[0]?.disabled)select.value='';
    });
  }
  if(team){team.addEventListener('change',constrainTeams);constrainTeams();}
  const status=document.querySelector('#field_status'),progress=document.querySelector('#field_progress');
  status?.addEventListener('change',()=>{if(progress&&status.value==='Completada')progress.value='100';});
  // Los envíos usan formularios HTML reales. No existe un almacén simulado de registros en el navegador.
  document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',e=>{
    if(e.defaultPrevented || !form.checkValidity())return;
    const button=e.submitter;
    if(button){button.setAttribute('aria-busy','true');setTimeout(()=>button.removeAttribute('aria-busy'),10000);}
  }));
})();
