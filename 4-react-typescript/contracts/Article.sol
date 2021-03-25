// SPDX-License-Identifier: MIT
pragma solidity ^0.7.4;

import "./Ownable.sol";

contract Article is Ownable {
  uint index;

  struct Article {
    uint id;
    string date;
    string title;
    string content;
  }
 
  event AddArticle(uint x);
  event RemoveArticle(uint x);
  mapping(uint256 => Article) public articles;

  function write(string title, string date, string content) public {
    //Emit an event
    articles[index] = new Article(index, title, date, content);
    emit AddArticle(index);
 
  }
  function remove(uint index) public onlyOwner {
      delete articles[_address];
      emit RemoveArticle(index);
      index++;
    }
}
