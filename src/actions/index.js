import { ADD_LOG, DELETE_LOG, FILTER_LOG } from "../constants/action-types";

export function addLog(payload) {
  return { type: ADD_LOG, payload };
}

export function deleteLog(payload) {
  return { type: DELETE_LOG, payload };
}

export function filterLog(payload) {
  return { type: FILTER_LOG, payload };
}
