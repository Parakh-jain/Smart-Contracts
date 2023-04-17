const Darray = artifacts.require("Darray");

contract("Darray", () => { 
    //before after beforeEach afterEach 
    
    // before(() => {
    //     console.log("Before all the test suits");
    // });
    
    // beforeEach(() => { 
        // console.log("Before each test suits"); 
    // });

    // after(() => { 
        // console.log("After all the test suits"); 
    // });

    // afterEach(() => { 
        // console.log("After each test suits"); 
    // }); 

    let darray = null;
    
    before(async () => { 
        darray = await Darray.deployed(); 
    });
    
    it("Should insert an element into an array arr", async () => { 
        await darray.insert(10); 
        const element = await darray.arr(0); 
        // console.log(element.toNumber()); 
        assert(element.toNumber() === 10); 
    }); 
    
    it("Should get an element from arr array", async () => { 
        await darray.insert(20); 
        const element = await darray.arr(1); 
        assert(element.toNumber() === 20); 
    }); 

    it("Should return the length of arr", async () => { 
        const length = await darray.length(); 
        assert(length.toNumber() == 2); 
    });
});