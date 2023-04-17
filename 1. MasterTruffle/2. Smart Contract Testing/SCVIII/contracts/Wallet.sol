// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

contract Wallet {
    address payable public owner;

    constructor(address payable _owner) {
        owner = _owner;
    }

    function deposit() public payable {}

    function balanceOf() public view returns (uint256) {
        return address(this).balance;
    }

    function send(address payable to, uint256 amount) public {
        if(msg.sender == owner) {
            to.transfer(amount);
            return;
        }
        revert("sender is not allowed");
    }
    
    // Above function is similar to below function
    // function send(address payable to, uint256 amount) public {
    //     require(msg.sender == owner, "sender is not allowed");
    //     to.transfer(amount);
    // }
}