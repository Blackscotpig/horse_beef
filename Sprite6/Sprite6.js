/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 71.25,
        y: 219.2499999999999
      })
    ];

    this.sounds = [new Sound("slap", "./Sprite6/sounds/slap.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game click" },
        this.whenIReceiveGameClick
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVER FLICK" },
        this.whenIReceiveLeverFlick
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cooking step" },
        this.whenIReceiveCookingStep
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 0;
    this.visible = false;
  }

  *whenIReceiveGameClick() {
    this.goto(-101, 126);
    this.visible = true;
  }

  *whenIReceiveLeverFlick() {
    yield* this.glide(0.2, -101, 126);
    this.visible = true;
    yield* this.glide(0.4, -101, 12);
    yield* this.startSound("slap");
    this.broadcast("meat beat");
    yield* this.glide(0.4, -101, 126);
  }

  *whenGreenFlagClicked2() {
    this.goto(-101, 126);
    /* TODO: Implement looks_gotofrontback */ null;
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
  }

  *whenIReceiveCookingStep() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
