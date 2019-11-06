/**
 * Created by danieldihardja on 19.08.19.
 */

import './styles/style.scss';
import {Setup} from "./sinus-duktus/setup";
import { UI } from './sinus-duktus/ui.js';
import { Wave } from "./sinus-duktus/generators/wave";
import { RandomSize, SimpleSize, MSize } from "./sinus-duktus/modulators";
import { CanvasRenderer, SVGRenderer } from "./sinus-duktus/renderers";


// generator
const wav = new Wave();
wav.onChange = render;

// modulator
const sis = new SimpleSize();
sis.onChange = render;

const rs = new RandomSize();
rs.onChange = render;

const ms = new MSize();
ms.onChange = render;

// ui for controling params
new UI('ui')
  .add(wav.ui())
  .add(ms.ui());

function render() {
  const d = new Setup()
    .setGenerator(wav)
    .addModulator(ms)
    .run();

  const cd = new CanvasRenderer('canvas');
  cd.render(d);
}

// initial render
render();
