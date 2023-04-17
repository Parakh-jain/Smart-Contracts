const Data = artifacts.require("Data");

contract("Data", (accounts) => {
  it("Should return the new data once it's changed", async() => {

    const data = await Data.new("Hello World");
    assert.equal(await data.requestData(), "Hello World");

    await data.setData("Hello Truffle");
    assert.equal(await data.requestData(), "Hello Truffle");
  });
});