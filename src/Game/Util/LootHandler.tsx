import lootTable from "./LootTables.json";

const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

type ResultType = {
  Common: number;
  Uncommon: number;
  Rare: number;
  VeryRare: number;
  SuperRare: number;
  UnholyRare: number;
  MythicRare: number;
  AncientRare: number;
  LegendaryRare: number;
  PrimalRare: number;
  MaxRare: number;
};

function rollAllItems() {
  var result: ResultType = {
    Common: randomNumberInRange(1, 10),
    Uncommon: randomNumberInRange(1, 50),
    Rare: randomNumberInRange(1, 100),
    VeryRare: randomNumberInRange(1, 200),
    SuperRare: randomNumberInRange(1, 500),
    UnholyRare: randomNumberInRange(1, 666),
    MythicRare: randomNumberInRange(1, 1000),
    AncientRare: randomNumberInRange(1, 2000),
    LegendaryRare: randomNumberInRange(1, 5000),
    PrimalRare: randomNumberInRange(1, 10000),
    MaxRare: randomNumberInRange(1, 15000),
  };
  return result;
}

export function LootHandler(enemy: string) {
  const result = rollAllItems();
  return result;
  switch (enemy) {
    case "Rat":
      break;

    default:
      break;
  }
}
