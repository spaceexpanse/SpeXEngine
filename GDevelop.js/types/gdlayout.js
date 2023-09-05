// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdLayout extends gdObjectsContainer {
  constructor(): void;
  setName(name: string): void;
  getName(): string;
  setBackgroundColor(r: number, g: number, b: number): void;
  getBackgroundColorRed(): number;
  getBackgroundColorGreen(): number;
  getBackgroundColorBlue(): number;
  setWindowDefaultTitle(name: string): void;
  getWindowDefaultTitle(): string;
  getInitialInstances(): gdInitialInstancesContainer;
  getVariables(): gdVariablesContainer;
  getEvents(): gdEventsList;
  updateBehaviorsSharedData(project: gdProject): void;
  getAllBehaviorSharedDataNames(): gdVectorString;
  hasBehaviorSharedData(behaviorName: string): boolean;
  getBehaviorSharedData(behaviorName: string): gdBehaviorsSharedData;
  insertNewLayer(name: string, position: number): void;
  insertLayer(layer: gdLayer, position: number): void;
  getLayer(name: string): gdLayer;
  getLayerAt(pos: number): gdLayer;
  hasLayerNamed(name: string): boolean;
  removeLayer(name: string): void;
  getLayersCount(): number;
  swapLayers(firstLayerIndex: number, secondLayerIndex: number): void;
  moveLayer(oldIndex: number, newIndex: number): void;
  serializeLayersTo(element: gdSerializerElement): void;
  unserializeLayersFrom(element: gdSerializerElement): void;
  getAssociatedEditorSettings(): gdEditorSettings;
  serializeTo(element: gdSerializerElement): void;
  unserializeFrom(project: gdProject, element: gdSerializerElement): void;
  setStopSoundsOnStartup(enable: boolean): void;
  stopSoundsOnStartup(): boolean;
  insertNewObject(project: gdProject, type: string, name: string, pos: number): gdObject;
  insertObject(obj: gdObject, pos: number): gdObject;
  hasObjectNamed(name: string): boolean;
  getObject(name: string): gdObject;
  getObjectAt(pos: number): gdObject;
  getObjectPosition(name: string): number;
  removeObject(name: string): void;
  swapObjects(first: number, second: number): void;
  moveObject(oldIndex: number, newIndex: number): void;
  moveObjectToAnotherContainer(name: string, newObjectsContainer: gdObjectsContainer, newPosition: number): void;
  getObjectsCount(): number;
  getObjectGroups(): gdObjectGroupsContainer;
  delete(): void;
  ptr: number;
};