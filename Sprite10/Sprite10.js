/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite10/costumes/costume1.svg", {
        x: 98.5,
        y: 28.92656249999999
      })
    ];

    this.sounds = [new Sound("B Guitar", "./Sprite10/sounds/B Guitar.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cooking step" },
        this.whenIReceiveCookingStep
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "option ste" },
        this.whenIReceiveOptionSte
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCookingStep() {
    this.goto(130, -140);
    this.visible = true;
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenthisspriteclicked() {
    this.broadcast("option ste");
    yield* this.playSoundUntilDone("B Guitar");
  }

  *whenIReceiveOptionSte() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
