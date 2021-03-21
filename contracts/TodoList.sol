// SPDX-License-Identifier: MIT
pragma solidity ^0.7.4;

contract TodoList {
 uint public taskCount;
 event Add(string content);
 event Removed(uint256 index);
 event Toggled(uint256 index);

  struct Task {
    uint id;
    string content;
    bool completed;
  }
  mapping(uint => Task) public tasks;

  function addTask(string memory _content) public {
    tasks[taskCount] = Task(taskCount, _content, false);
    taskCount ++;
    emit Add(_content);
  }
  function toggleTask(uint256 index, bool completed) public {
    tasks[index].completed = completed;
    emit Toggled(index);
  }
  function removeTask(uint256 index) public {
      require(index < taskCount);
      tasks[index] = tasks[taskCount-1];
      delete tasks[taskCount-1];
      taskCount--;
      emit Removed(index);
  }
}
