import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import Sprite13 from "./Sprite13/Sprite13.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite4: new Sprite4({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite1: new Sprite1({
    x: -103,
    y: -19,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite2: new Sprite2({
    x: 228,
    y: 3,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite3: new Sprite3({
    x: 215,
    y: -1,
    direction: 135,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite5: new Sprite5({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite6: new Sprite6({
    x: -101,
    y: 126,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite7: new Sprite7({
    x: 176,
    y: 142,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false
  }),
  Sprite8: new Sprite8({
    x: 130,
    y: -140,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite9: new Sprite9({
    x: 181,
    y: 37,
    direction: 54.3000250506022,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite10: new Sprite10({
    x: 130,
    y: -140,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite12: new Sprite12({
    x: 7,
    y: 129,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite11: new Sprite11({
    x: -102,
    y: -17,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite13: new Sprite13({
    x: 124,
    y: -17,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
