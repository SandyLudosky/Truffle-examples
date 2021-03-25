// SPDX-License-Identifier: MIT
pragma solidity ^0.7.4;

contract Greetings {
  string message;

  constructor(string memory _message) {
      message = _message;
  }

  function write(string memory _message) public {
    message = _message;
  }

  function read() public view returns (string memory) {
    return message;
  }
}
