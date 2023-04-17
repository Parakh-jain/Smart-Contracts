// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.5.0 < 0.9.0;

contract Data {
    string private data;

    constructor(string memory _data) {
        data = _data;
    }

    function requestData() public view returns (string memory) {
        return data;
    }

    function setData(string memory _data) public {
        data = _data;
    }
}
