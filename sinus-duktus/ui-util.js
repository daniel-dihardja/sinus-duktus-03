export function panel(name) {
  const p = document.createElement('fieldset');
  p.setAttribute('class', 'panel-item');
  const l = document.createElement('legend');
  l.innerText = name;
  p.appendChild(l);
  return p;
}

export function ckbox(checked, cb) {
  const a = document.createElement('input');
  a.setAttribute('type', 'checkbox');
  a.setAttribute('checked', checked);
  a.addEventListener('change', e => {
    cb(e.target.checked);
  });
  return a;
}

export function slider(value, min, max, step, cb) {
  const s = document.createElement('input');
  s.setAttribute('type', 'range');
  s.setAttribute('min',  min);
  s.setAttribute('max', max);
  s.setAttribute('step', step);

  s.addEventListener('input', e => {
    cb(parseFloat(e.target.value));
  });

  return s;
}