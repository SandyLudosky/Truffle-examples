// SPDX-License-Identifier: MIT
pragma solidity ^0.7.4;

contract TodoList {
 uint taskCount;

  struct Task {
    uint id;
    string content;
    bool completed;
  }
  mapping(uint => Task) public tasks;

  function addTask(string memory _content) public {
    tasks[taskCount] = Task(taskCount, _content, false);
    taskCount ++;
  }
  function toggleTask(uint256 index) public {
    tasks[index].completed = !tasks[index].completed;
  }
  function removeTask(uint256 index) public {
      require(index < taskCount);
      tasks[index] = tasks[taskCount-1];
      delete tasks[taskCount-1];
      taskCount--;
  }
}
