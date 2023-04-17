const Wallet = artifacts.require("Wallet");

contract("Wallet", (accounts) => { 
    let wallet = null; 
    
    before(async () => { 
        wallet = await Wallet.deployed();
    }); 
    
    it("Should set accouns[0] as owner", async () => { 
        const owner = await wallet.owner(); 
        assert(owner == accounts[0]); 
    });
    
    it("Should deposit ether to wallet", async () => { 
        await wallet.deposit({ from: accounts[0], value: 100 }); // depositing 100 ether to our contract 
        const balance = await web3.eth.getBalance(wallet.address); // calling for the contract balance  
        // console.log(typeof balance); // string
        assert(parseInt(balance) === 100); 
    }); 

    it("Should return balance of wallet", async () => { 
        const balance = await wallet.balanceOf(); 
        assert(parseInt(balance) === 100); 
    });
});