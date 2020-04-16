import { ADD_CONFIG, UPDATE_CONFIG } from "../constants/action-types";

export function addConfig(payload) {
  return { type: ADD_CONFIG, payload };
}

export function updateConfig(payload) {
  return { type: UPDATE_CONFIG, payload };
}
