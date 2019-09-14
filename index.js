/**
 * Created by danieldihardja on 19.08.19.
 */

import {Wave} from "./sinus-duktus";
import {CanvasRenderer} from "./sinus-duktus/renderers";
import {MSize} from "./sinus-duktus/modulators";
import * as dat from 'dat.gui';

const wave = new Wave(0, 1000, .1, 10, .5, 60);

// modulator 1 ( size )
const ms = new MSize();
ms.s = 1;

// render to canvas
const cd = new CanvasRenderer('canvas');

const gui = new dat.GUI();
const wd = gui.addFolder('wave');

wd.add(wave, 'd1', 0.1, 1).onChange(e => render());
wd.add(wave, 'd2', 0.1, 1);
wd.add(wave, 'o', 0.1, 1);
wd.add(wave, 'a', 0.1, 100);

const render = () => {
  wave.mod(data => ms.mod(data));
  wave.render(data => cd.render(data));
};