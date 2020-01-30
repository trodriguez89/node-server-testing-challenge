const db = require("../data/dbConfig");

const Jedis = require("./jedi-model");

describe("jedis model", function () {

  describe("test environment", function () {
    it("should use the testing environment", function () {
      expect(process.env.DB_ENV).toBe("testing");
    })
  })

  describe("insert()", function () {
    beforeEach(async () => {
      await db("jedis").truncate();
    })
    it("adds new Jedi to db", async function () {
      await Jedis.insert({ name: "Anakin" })
      await Jedis.insert({ name: "Obi-Wan" })

      const jedis = await db("jedis");
      expect(jedis).toHaveLength(2);
    })
  })
});