/**
 * Created by danieldihardja on 19.08.19.
 */

import './styles/style.scss';
import { Wave } from "./sinus-duktus/generators/wave";
import { RandomSize } from "./sinus-duktus/modulators";
import { CanvasRenderer } from "./sinus-duktus/renderers";
import { UI } from './sinus-duktus/ui.js';
import {Setup} from "./sinus-duktus/setup";

// generator
const wav = new Wave();
wav.onChange = render;

// modulator
const rs = new RandomSize();
rs.onChange = render;

// ui for controling params
new UI('ui')
  .add('wave', wav.ui())
  .add('random size', rs.ui());


function render() {
  const d = new Setup()
    .setGenerator(wav)
    .addModulator(rs)
    .run();

  const cd = new CanvasRenderer('canvas');
  cd.render(d);
}

// initial render
render();
