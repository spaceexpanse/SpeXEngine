// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdSpriteObject extends gdObjectConfiguration {
  constructor(): void;
  addAnimation(animation: gdAnimation): void;
  getAnimation(index: number): gdAnimation;
  getAnimationsCount(): number;
  removeAnimation(index: number): void;
  removeAllAnimations(): void;
  hasNoAnimations(): boolean;
  swapAnimations(first: number, second: number): void;
  moveAnimation(oldIndex: number, newIndex: number): void;
  setUpdateIfNotVisible(updateIfNotVisible: boolean): void;
  getUpdateIfNotVisible(): boolean;
  adaptCollisionMaskAutomatically(): boolean;
  setAdaptCollisionMaskAutomatically(adaptCollisionMaskAutomatically: boolean): void;
  delete(): void;
  ptr: number;
};