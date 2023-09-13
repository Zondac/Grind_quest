import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { TopBar } from "./TopBar";
import { EquipmentModule } from "./EquipmentModule";
import { MiddleWindow } from "./MiddleWindow";
import {
  BronzeDagger,
  GiantRatCoat,
  GoblinCrown,
  HideArmor,
  Item,
  PoisonedFang,
  RatFeather,
  RatskinWristbands,
  SharpRatFang,
  TheOneRing,
  WoodenPitchfork,
} from "./ItemList";
import { LootModule } from "./Modules/LootModule";
import { Stats } from "./Stats";

export function GameGrid() {
  const [playfield, setPlayfield] = useState<string | null>(null);
  const [playerBaseStats, setPlayerBaseStats] = useState<Stats>({
    Attack: 0,
    Believing: 0,
    Constitution: 0,
    Defense: 0,
    Emotion: 0,
    Forgiving: 0,
    Heart: 0,
    Imagination: 0,
    Magic: 0,
    Muscles: 0,
    Piety: 0,
    Openness: 0,
    Responsibility: 0,
    Toughness: 0,
  });
  const [playerStats, setPlayerStats] = useState<Stats>({
    Attack: 0,
    Believing: 0,
    Constitution: 0,
    Defense: 0,
    Emotion: 0,
    Forgiving: 0,
    Heart: 0,
    Imagination: 0,
    Magic: 0,
    Muscles: 0,
    Piety: 0,
    Openness: 0,
    Responsibility: 0,
    Toughness: 0,
  });
  const [Equipment, setEquipment] = useState({
    Weapon: BronzeDagger,
    Trinket: RatFeather,
    Eyewear: null,
    Headwear: GoblinCrown,
    Necklace: null,
    Choker: null,
    Jewelry: TheOneRing,
    OffHand: null,
    Wristwear: RatskinWristbands,
    Gloves: null,
    Chest: GiantRatCoat,
    Pants: null,
    Socks: null,
    Shoes: null,
    Backwear: null,
    Belt: null,
    Beltwear: null,
  });

  function updateStats() {
    let AttackTotal = 0;
    let BelievingTotal = 0;
    let ConstitutionTotal = 0;
    let DefenseTotal = 0;
    let EmotionTotal = 0;
    let ForgivingTotal = 0;
    let HeartTotal = 0;
    let ImaginationTotal = 0;
    let MagicTotal = 0;
    let MusclesTotal = 0;
    let PietyTotal = 0;
    let SanityTotal = 0;
    let SerenityTotal = 0;
    let ToughnessTotal = 0;

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
      item && item.stats.Heart ? (HeartTotal += item?.stats.Heart) : null;
      item && item.stats.Imagination
        ? (ImaginationTotal += item?.stats.Imagination)
        : null;
      item && item.stats.Magic ? (MagicTotal += item?.stats.Magic) : null;
      item && item.stats.Muscles ? (MusclesTotal += item?.stats.Muscles) : null;
      item && item.stats.Piety ? (PietyTotal += item?.stats.Piety) : null;
      item && item.stats.Openness
        ? (SanityTotal += item?.stats.Openness)
        : null;
      item && item.stats.Responsibility
        ? (SerenityTotal += item?.stats.Responsibility)
        : null;
      item && item.stats.Toughness
        ? (ToughnessTotal += item?.stats.Toughness)
        : null;
    });

    setPlayerStats({
      Attack: AttackTotal,
      Believing: BelievingTotal,
      Constitution: ConstitutionTotal,
      Defense: DefenseTotal,
      Emotion: EmotionTotal,
      Forgiving: ForgivingTotal,
      Heart: HeartTotal,
      Imagination: ImaginationTotal,
      Magic: MagicTotal,
      Muscles: MusclesTotal,
      Piety: PietyTotal,
      Openness: SanityTotal,
      Responsibility: SerenityTotal,
      Toughness: ToughnessTotal,
    });
  }

  useEffect(() => {
    updateStats();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item xs={1}>
          <Stack spacing={2}>
            <Item onClick={() => setPlayfield("stats")}>Stats</Item>
            <Item onClick={() => setPlayfield("fight")}>fight</Item>
            <Item onClick={() => setPlayfield("inventory")}>Inventory</Item>
          </Stack>
        </Grid>
        <Grid item xs={6.5}>
          <MiddleWindow state={playfield} stats={playerStats} />
        </Grid>
        <Grid item xs={4.5}>
          <Stack>
            <Box
              sx={{
                position: "relative",
                px: 2,
                pb: 2,
                backgroundColor: "darkslategrey",
                border: "2px solid lightgrey",
                borderRadius: "16px",
              }}
            >
              EQUIPMENT
              <EquipmentModule Equipment={Equipment} />
            </Box>
            <Box
              sx={{
                mt: 2,
                position: "relative",
                pb: 2,
                px: 2,
                backgroundColor: "darkslategrey",
                border: "2px solid lightgrey",
                borderRadius: "16px",
              }}
            >
              LOOT
              <LootModule />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
