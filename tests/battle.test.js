const {battle} = require("../app.js");

describe("battle", () => {
  test("Should return uavgjort when HP is the same", () => {
    expect(battle(100, 50, 100, 50)).toBe("Uavgjort");
  });
});

describe("battle", () => {
  test("Should return du vant when HP is higher than enemy after one attack", () => {
    expect(battle(100, 50, 90, 50)).toBe("Du vant!");
  });
});

describe("battle", () => {
  test("Should return du tapte when HP is lower than enemy after one attack", () => {
    expect(battle(100, 50, 120, 50)).toBe("Du tapte!");
  });
});
