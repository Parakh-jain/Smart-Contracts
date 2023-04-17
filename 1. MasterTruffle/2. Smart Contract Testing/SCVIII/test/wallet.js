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
        console.log(typeof balance); 
        assert(parseInt(balance) === 100); 
    }); 

    it("Should return balance of wallet", async () => { 
        const balance = await wallet.balanceOf(); 
        assert(parseInt(balance) === 100); 
    });
    
    it("Should transfer ether to another address", async () => { 
        const receiver_beforeBalance = await web3.eth.getBalance(accounts[1]);  
        // console.log("Receiver before balance", receiver_beforeBalance); 
        await wallet.send(accounts[1], 10, { from: accounts[0] }); 
        const receiver_afterBalance = await web3.eth.getBalance(accounts[1]); // string 
        // console.log("Receiver after balance", receiver_afterBalance); 
        const finalBalance = web3.utils.toBN(receiver_afterBalance); // object 
        const initialBalance = web3.utils.toBN(receiver_beforeBalance); 
        assert(finalBalance.sub(initialBalance).toNumber() === 10); 
    });     

    it("should NOT transfer ether if tx not sent from the owner", async () => { 
        try { 
            await wallet.send(accounts[1], 10, { from: accounts[0] }); 
        } catch (e) { 
            assert(false, "Only owner should send the tx"); 
        } 
    }); 
});