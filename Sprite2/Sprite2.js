/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.png", {
        x: 67,
        y: 120
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game click" },
        this.whenIReceiveGameClick
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cooking step" },
        this.whenIReceiveCookingStep
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("LEVER FLICK");
  }

  *whenGreenFlagClicked() {
    this.goto(228, 3);
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveGameClick() {
    this.visible = true;
  }

  *whenIReceiveCookingStep() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    this.effects.ghost = 0;
  }
}
