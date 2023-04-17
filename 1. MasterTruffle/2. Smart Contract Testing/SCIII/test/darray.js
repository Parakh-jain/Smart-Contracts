const Darray = artifacts.require("Darray");

contract("Darray", () => { 
    it("Should insert an element into an array arr", async () => { 
        let darray = await Darray.deployed();
        await darray.insert(10); 
        const element = await darray.arr(0); 
        // console.log(element.toNumber()); 
        assert(element.toNumber() === 10); 
    }); 
    it("Should get an element from arr array", async () => { 
        let darray = await Darray.deployed();
        await darray.insert(20); 
        const element = await darray.arr(1); 
        assert(element.toNumber() === 20); 
    }); 
    it("Should return the length of arr", async () => { 
        let darray = await Darray.deployed();
        const length = await darray.length(); 
        assert(length.toNumber() == 2); 
    });
});

