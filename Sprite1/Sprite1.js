/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.png", {
        x: 181,
        y: 71
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.png", {
        x: 106,
        y: 81
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "meat beat" },
        this.whenIReceiveMeatBeat
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game click" },
        this.whenIReceiveGameClick
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cook meat" },
        this.whenIReceiveCookMeat
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "option ste" },
        this.whenIReceiveOptionSte
      )
    ];
  }

  *whenIReceiveMeatBeat() {
    this.stage.vars.meatBeatness += 5;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.meatBeatness = 0;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      while (true) {
        if (this.stage.vars.meatBeatness > 50) {
          this.stage.vars.meatBeatness = 50;
        }
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.effects.fisheye = this.stage.vars.meatBeatness;
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenGreenFlagClicked5() {
    this.effects.brightness = 0;
    this.visible = false;
  }

  *whenIReceiveGameClick() {
    this.visible = true;
  }

  *whenIReceiveCookMeat() {
    this.effects.brightness += -10;
  }

  *whenIReceiveOptionSte() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = true;
  }
}
