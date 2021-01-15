import { ADDTASK } from "../contants/todoConstants";
import {SETFILTER} from "../contants/todoConstants"
export const addTask = (task) => {
  return {
    type: ADDTASK,
    payload: task,
  };
};
export const setFilter = (filter) => {
  return {
    type: SETFILTER,
    payload: filter,
  };
};
