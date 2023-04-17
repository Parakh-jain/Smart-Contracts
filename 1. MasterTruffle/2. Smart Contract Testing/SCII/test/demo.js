const Demo = artifacts.require("Demo");

contract("ABC", () => {
    it("Should set the value of item variable in smart contract", async () => {
        const demo = await Demo.deployed();
        await demo.set("ABC");
        const result = await demo.get();
        assert(result === "ABC");
    });
});