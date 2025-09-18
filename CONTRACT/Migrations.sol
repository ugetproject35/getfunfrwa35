// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Migrations is Ownable {
    uint256 public lastCompletedMigration;
    function setCompleted(uint256 completed) public onlyOwner {
        lastCompletedMigration = completed;
    }
}
