/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 98.5,
        y: 28.92656249999999
      })
    ];

    this.sounds = [new Sound("B Guitar", "./Sprite8/sounds/B Guitar.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game click" },
        this.whenIReceiveGameClick
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveGameClick() {
    this.goto(130, -140);
    this.visible = true;
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenthisspriteclicked() {
    this.broadcast("cooking step");
    this.visible = false;
    yield* this.playSoundUntilDone("B Guitar");
  }
}
