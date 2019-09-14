/**
 * Created by danieldihardja on 19.08.19.
 */

import {Wave} from "./sinus-duktus";
import {CanvasRenderer} from "./sinus-duktus/renderers";
import {MSize} from "./sinus-duktus/modulators";

// modulator 1 ( size )
const ms = new MSize();
ms.s = 1;

// render to canvas
const cd = new CanvasRenderer('canvas');

// start
new Wave(0, 1000, .1, 10, .5, 60)
  .mod(data => ms.mod(data))
  .render(data => cd.render(data));
