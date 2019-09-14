/**
 * Created by danieldihardja on 19.08.19.
 */

import {Wave} from "./sinus-duktus";
import {CanvasRenderer} from "./sinus-duktus/renderers";
import {MSize, RandomSize} from "./sinus-duktus/modulators";
import * as dat from 'dat.gui';

const w = {
  d1: .1,
  d2: 10,
  o: .5,
  a: 70
};

const gui = new dat.GUI();
const wd = gui.addFolder('wave');

wd.add(w, 'd1', 0.1, 1).onChange(e => render());
wd.add(w, 'd2', 0.1, 1).onChange(e => render());
wd.add(w, 'o', 0.1, 1).onChange(e => render());
wd.add(w, 'a', 0.1, 100).onChange(e => render());

const render = () => {
  const cd = new CanvasRenderer('canvas');
  const ms = new MSize();
  const rs = new RandomSize();

  new Wave(w)
  .mod(data => rs.mod(data))
  .render(data => cd.render(data));
};
