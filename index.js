/**
 * Created by danieldihardja on 19.08.19.
 */

import './styles/style.scss';
import { Wave } from "./sinus-duktus/generators/wave";
import { RandomSize } from "./sinus-duktus/modulators";
import { CanvasRenderer } from "./sinus-duktus/renderers";
import { UI } from './sinus-duktus/ui.js';
import * as dat from 'dat.gui';
import {Setup} from "./sinus-duktus/setup";

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

const wav = new Wave();
wav.onChange = render;

const rs = new RandomSize();
rs.onChange = render;



new UI('ui')
  .add('wave')
  .add('random size', rs.ui());




function render() {
  const cd = new CanvasRenderer('canvas');
  new Wave(w)
    .mod(data => rs.mod(data))
    .render(data => cd.render(data));


  const d = new Setup()
    .setGenerator(wav)
    .addModulator(rs)
    .run();

}

// initial render
render();
