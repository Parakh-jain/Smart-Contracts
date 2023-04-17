const Data = artifacts.require("Data");

describe("Data", function () {
    let accounts;

    before(async() => {
        accounts = web3.eth.getAccounts();
    })

    describe("Deployment", () => {
        it("should return the new data once it's changed", async() => {
            const data = await Data.new("Hello World");
            assert.equal(await data.requestData(), "Hello World");

            await data.setData("Hello Mocha");
            assert.equal(await data.requestData(), "Hello Mocha"); 
        });
    });
});