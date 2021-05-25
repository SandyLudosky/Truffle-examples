import { createSelector } from "reselect";

const selectTasks = (state) => state.todolist.items;
export const selectTasksCount = createSelector(selectTasks, (tasks) => {
  return !!tasks.length ? `${tasks.length} tasks` : "";
});
