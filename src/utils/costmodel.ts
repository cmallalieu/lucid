import { C } from '../';

export const costModel = {
  plutusV1: () => {
    const costModel = [
      197209, 0, 1, 1, 396231, 621, 0, 1, 150000, 1000, 0, 1, 150000, 32,
      2477736, 29175, 4, 29773, 100, 29773, 100, 29773, 100, 29773, 100, 29773,
      100, 29773, 100, 100, 100, 29773, 100, 150000, 32, 150000, 32, 150000, 32,
      150000, 1000, 0, 1, 150000, 32, 150000, 1000, 0, 8, 148000, 425507, 118,
      0, 1, 1, 150000, 1000, 0, 8, 150000, 112536, 247, 1, 150000, 10000, 1,
      136542, 1326, 1, 1000, 150000, 1000, 1, 150000, 32, 150000, 32, 150000,
      32, 1, 1, 150000, 1, 150000, 4, 103599, 248, 1, 103599, 248, 1, 145276,
      1366, 1, 179690, 497, 1, 150000, 32, 150000, 32, 150000, 32, 150000, 32,
      150000, 32, 150000, 32, 148000, 425507, 118, 0, 1, 1, 61516, 11218, 0, 1,
      150000, 32, 148000, 425507, 118, 0, 1, 1, 148000, 425507, 118, 0, 1, 1,
      2477736, 29175, 4, 0, 82363, 4, 150000, 5000, 0, 1, 150000, 32, 197209, 0,
      1, 1, 150000, 32, 150000, 32, 150000, 32, 150000, 32, 150000, 32, 150000,
      32, 150000, 32, 3345831, 1, 1,
    ];
    const costmdls = C.Costmdls.new();
    const costmdl = C.CostModel.new();
    costModel.forEach((cost, index) => {
      costmdl.set(index, C.Int.new_i32(cost));
    });
    costmdls.insert(C.Language.new_plutus_v1(), costmdl);
    return costmdls;
  },
};
