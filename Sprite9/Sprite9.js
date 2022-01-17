/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite9/costumes/costume1.png", {
        x: 228,
        y: 238
      }),
      new Costume("costume4", "./Sprite9/costumes/costume4.png", {
        x: 453,
        y: 303
      }),
      new Costume("costume2", "./Sprite9/costumes/costume2.png", {
        x: 446,
        y: 290
      }),
      new Costume("costume3", "./Sprite9/costumes/costume3.png", {
        x: 459,
        y: 288
      })
    ];

    this.sounds = [new Sound("recording1", "./Sprite9/sounds/recording1.wav")];

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
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += -10;
      yield;
    }
  }

  *whenthisspriteclicked() {
    yield* this.startSound("recording1");
    this.broadcast("cook meat");
    for (let i = 0; i < 2; i++) {
      this.costume = "costume4";
      yield* this.wait(0.1);
      this.costume = "costume2";
      yield* this.wait(0.1);
      this.costume = "costume3";
      yield* this.wait(0.1);
      yield;
    }
    this.costume = "costume1";
  }

  *whenIReceiveOptionSte() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
