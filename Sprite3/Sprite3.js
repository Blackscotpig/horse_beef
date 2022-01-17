/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 155.5625,
        y: 3
      })
    ];

    this.sounds = [new Sound("recording1", "./Sprite3/sounds/recording1.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVER FLICK" },
        this.whenIReceiveLeverFlick
      ),
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

  *whenIReceiveLeverFlick() {
    yield* this.startSound("recording1");
    this.direction = 135;
    for (let i = 0; i < 10; i++) {
      this.direction -= 6;
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.direction += 6;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement looks_gotofrontback */ null;
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
    this.goto(215, -1);
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
