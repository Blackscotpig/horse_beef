/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 98.5,
        y: 45
      })
    ];

    this.sounds = [new Sound("B Guitar", "./Sprite5/sounds/B Guitar.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game click" },
        this.whenIReceiveGameClick
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 0;
    this.goto(0, 0);
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(0.001);
    this.visible = true;
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenthisspriteclicked() {
    this.broadcast("game click");
    yield* this.playSoundUntilDone("B Guitar");
  }

  *whenIReceiveGameClick() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
