/**
 * Created by danieldihardja on 19.08.19.
 */

import {Wave} from "./sinus-duktus";
import {CanvasRenderer} from "./sinus-duktus/renderers";

const cd = new CanvasRenderer('canvas');

new Wave(0, 1000, .1, 10, .5, 60)
  .render(data => cd.render(data));

