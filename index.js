/**
 * Created by danieldihardja on 19.08.19.
 */

import './styles/style.scss';
import {config} from "./config";
import {Setup} from "./sinus-duktus/setup";
import { UI } from './sinus-duktus/ui.js';
import { Wave } from "./sinus-duktus/generators/wave";
import { RandomSize, SimpleSize, MSize } from "./sinus-duktus/modulators";
import { CanvasRenderer, SVGRenderer } from "./sinus-duktus/renderers";

let state = {
  config: {},
  items: []
};

function setState(obj) {
  state = {...state, ...obj};
}

// set config
setState({config: {...config}});


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

// svg renderer
const svgRenderer = new SVGRenderer();
svgRenderer.onExport = exportSVG;

// ui for controling params
new UI('ui')
  .add(wav.ui())
  .add(ms.ui())
  .add(svgRenderer.ui());

// svg export
function exportSVG() {
  svgRenderer.render(state);
}

// default canvas render
function render() {
  const d = new Setup()
    .setGenerator(wav)
    .addModulator(ms)
    .run();

  setState({items: [...d]});

  // render state into canvas
  const cd = new CanvasRenderer('canvas');
  cd.render(state);
}

// initial render
render();
