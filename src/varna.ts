export enum VarnaType {
  Svara = "svara",
  Vyanjana = "vyanjana",
}

export const VARNAS = {
  Virama: "◌்",
  InherentA: "அ",
  Om: ["ஓ", "ம்"],
};

export class Varna {
  readonly type: VarnaType;
  readonly value: string;

  constructor(type: VarnaType, value: string) {
    this.type = type;
    this.value = value;
  }
}
