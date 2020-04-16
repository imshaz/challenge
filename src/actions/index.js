import { ADD_CONFIG } from "../constants/action-types";

export function addConfig(payload) {
  return { type: ADD_CONFIG, payload };
}
