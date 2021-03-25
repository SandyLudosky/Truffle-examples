// SPDX-License-Identifier: MIT
pragma solidity ^0.7.4;

import "./Ownable.sol";

contract Article is Ownable {
  uint count;

  struct Article {
    uint id;
    string date;
    string title;
    string content;
  }
 
  event AddArticle(uint x);
  event RemoveArticle(uint x);
  mapping(uint256 => Article) public articles;

  function write(string memory title, string memory date, string memory content) public {
    //Emit an event
    articles[count] = Article(count, title, date, content);
    emit AddArticle(count);
 
  }
  function remove(uint count) public onlyOwner {
      delete articles[count];
      emit RemoveArticle(count);
      count--;
    }
}
