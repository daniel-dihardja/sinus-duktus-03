/**
 * Created by danieldihardja on 19.08.19.
 */

import './styles/style.scss';
import {Setup} from "./sinus-duktus/setup";
import { UI } from './sinus-duktus/ui.js';
import { Wave } from "./sinus-duktus/generators/wave";
import { RandomSize } from "./sinus-duktus/modulators";
import { SimpleSize } from './sinus-duktus/modulators/simple-size';

import { CanvasRenderer } from "./sinus-duktus/renderers";



// generator
const wav = new Wave();
wav.onChange = render;

// modulator

const sis = new SimpleSize();
sis.onChange = render;

const rs = new RandomSize();
rs.onChange = render;

// ui for controling params
new UI('ui')
  .add('wave', wav.ui())
  .add('wave', sis.ui())
  .add('random size', rs.ui());

function render() {
  const d = new Setup()
    .setGenerator(wav)
    .addModulator(sis)
    .addModulator(rs)
    .run();

  const cd = new CanvasRenderer('canvas');
  cd.render(d);
}

// initial render
render();
