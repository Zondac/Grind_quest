import { Box } from "@mui/material";
import { GameGrid } from "../GameGrid";
import { useState, useEffect } from "react";
import {
  ScrapIronLongsword,
  RatFeather,
  GoblinCrown,
  TheOneRing,
  ScrapIronShield,
  RatskinWristbands,
  GiantRatCoat,
  Underpants,
  GoblinWings,
  ScrappyBelt,
} from "../ItemList";
import { Stats } from "../Stats";

export function StatHandler() {
  const [inventory, setInventory] = useState<String[]>([
    "Sharp Rat Fang",
    "Scrap Iron Longsword",
    "Rat Feather",
    "Scrappy Belt",
    "Sharp Rat Fang",
    "Sharp Rat Fang",
    "Sharp Rat Fang",
    "Sharp Rat Fang",
  ]);
  const [playerBaseStats, setPlayerBaseStats] = useState<Stats>({
    Attack: 0,
    Believing: 0,
    Constitution: 0,
    Defense: 0,
    Emotion: 0,
    Forgiving: 0,
    Grit: 0,
    Heart: 0,
    Imagination: 0,
    Jovial: 0,
    Kindness: 0,
    Love: 0,
    Magic: 0,
    Navigation: 0,
    Openness: 0,
    Piety: 0,
    Questioning: 0,
    Responsibility: 0,
    Strength: 0,
    Toughness: 0,
    Utilitarianism: 0,
    Vengefulness: 0,
    Will: 0,
    Xenophobia: 0,
    Yeehaw: 0,
    Zeal: 0,
  });
  const [playerStats, setPlayerStats] = useState<Stats>({
    Attack: 0,
    Believing: 0,
    Constitution: 0,
    Defense: 0,
    Emotion: 0,
    Forgiving: 0,
    Grit: 0,
    Heart: 0,
    Imagination: 0,
    Jovial: 0,
    Kindness: 0,
    Love: 0,
    Magic: 0,
    Navigation: 0,
    Openness: 0,
    Piety: 0,
    Questioning: 0,
    Responsibility: 0,
    Strength: 0,
    Toughness: 0,
    Utilitarianism: 0,
    Vengefulness: 0,
    Will: 0,
    Xenophobia: 0,
    Yeehaw: 0,
    Zeal: 0,
  });
  const [Equipment, setEquipment] = useState({
    Weapon: ScrapIronLongsword,
    Trinket: RatFeather,
    Eyewear: null,
    Headwear: GoblinCrown,
    Necklace: null,
    Choker: null,
    Jewelry: TheOneRing,
    OffHand: ScrapIronShield,
    Wristwear: RatskinWristbands,
    Gloves: null,
    Chest: GiantRatCoat,
    Pants: Underpants,
    Socks: null,
    Shoes: null,
    Backwear: GoblinWings,
    Belt: ScrappyBelt,
    Beltwear: null,
  });

  function updateStats() {
    let AttackTotal = 0;
    let BelievingTotal = 0;
    let ConstitutionTotal = 0;
    let DefenseTotal = 0;
    let EmotionTotal = 0;
    let ForgivingTotal = 0;
    let GritTotal = 0;
    let HeartTotal = 0;
    let ImaginationTotal = 0;
    let JovialTotal = 0;
    let KindnessTotal = 0;
    let LoveTotal = 0;
    let MagicTotal = 0;
    let NavigationTotal = 0;
    let OpennessTotal = 0;
    let PietyTotal = 0;
    let QuestioningTotal = 0;
    let ResponsibilityTotal = 0;
    let StrengthTotal = 0;
    let ToughnessTotal = 0;
    let UtilitarianismTotal = 0;
    let VengefulnessTotal = 0;
    let WillTotal = 0;
    let XenophobiaTotal = 0;
    let YeehawTotal = 0;
    let ZealTotal = 0;

    Object.values(Equipment).forEach((item) => {
      item && item.stats.Attack ? (AttackTotal += item?.stats.Attack) : null;
      item && item.stats.Believing
        ? (BelievingTotal += item?.stats.Believing)
        : null;
      item && item.stats.Constitution
        ? (ConstitutionTotal += item?.stats.Constitution)
        : null;
      item && item.stats.Defense ? (DefenseTotal += item?.stats.Defense) : null;
      item && item.stats.Emotion ? (EmotionTotal += item?.stats.Emotion) : null;
      item && item.stats.Forgiving
        ? (ForgivingTotal += item?.stats.Forgiving)
        : null;
      item && item.stats.Grit ? (GritTotal += item?.stats.Grit) : null;
      item && item.stats.Heart ? (HeartTotal += item?.stats.Heart) : null;
      item && item.stats.Imagination
        ? (ImaginationTotal += item?.stats.Imagination)
        : null;
      item && item.stats.Jovial ? (JovialTotal += item?.stats.Jovial) : null;
      item && item.stats.Kindness
        ? (KindnessTotal += item?.stats.Kindness)
        : null;
      item && item.stats.Love ? (LoveTotal += item?.stats.Love) : null;
      item && item.stats.Magic ? (MagicTotal += item?.stats.Magic) : null;
      item && item.stats.Navigation
        ? (NavigationTotal += item?.stats.Navigation)
        : null;
      item && item.stats.Openness
        ? (OpennessTotal += item?.stats.Openness)
        : null;
      item && item.stats.Piety ? (PietyTotal += item?.stats.Piety) : null;
      item && item.stats.Questioning
        ? (QuestioningTotal += item?.stats.Questioning)
        : null;
      item && item.stats.Responsibility
        ? (ResponsibilityTotal += item?.stats.Responsibility)
        : null;
      item && item.stats.Strength
        ? (StrengthTotal += item?.stats.Strength)
        : null;
      item && item.stats.Toughness
        ? (ToughnessTotal += item?.stats.Toughness)
        : null;
      item && item.stats.Utilitarianism
        ? (UtilitarianismTotal += item?.stats.Utilitarianism)
        : null;
      item && item.stats.Vengefulness
        ? (VengefulnessTotal += item?.stats.Vengefulness)
        : null;
      item && item.stats.Will ? (WillTotal += item?.stats.Will) : null;
      item && item.stats.Xenophobia
        ? (XenophobiaTotal += item?.stats.Xenophobia)
        : null;
      item && item.stats.Yeehaw ? (YeehawTotal += item?.stats.Yeehaw) : null;
      item && item.stats.Zeal ? (ZealTotal += item?.stats.Zeal) : null;
    });

    setPlayerStats({
      Attack: AttackTotal,
      Believing: BelievingTotal,
      Constitution: ConstitutionTotal,
      Defense: DefenseTotal,
      Emotion: EmotionTotal,
      Forgiving: ForgivingTotal,
      Grit: GritTotal,
      Heart: HeartTotal,
      Imagination: ImaginationTotal,
      Jovial: JovialTotal,
      Kindness: KindnessTotal,
      Love: LoveTotal,
      Magic: MagicTotal,
      Navigation: NavigationTotal,
      Openness: OpennessTotal,
      Piety: PietyTotal,
      Questioning: QuestioningTotal,
      Responsibility: ResponsibilityTotal,
      Strength: StrengthTotal,
      Toughness: ToughnessTotal,
      Utilitarianism: UtilitarianismTotal,
      Vengefulness: VengefulnessTotal,
      Will: WillTotal,
      Xenophobia: XenophobiaTotal,
      Yeehaw: YeehawTotal,
      Zeal: ZealTotal,
    });
  }

  useEffect(() => {
    updateStats();
  }, []);

  function addToInventory(item: string) {
    console.log("Added", item, "to inventory");
    setInventory((items) => {
      let newInventory = [...items];
      newInventory.push(item);
      return newInventory;
    });
  }
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <GameGrid
        playerStats={playerStats}
        Equipment={Equipment}
        inventory={inventory}
        addToInventory={addToInventory}
      />
    </Box>
  );
}
