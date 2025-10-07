import { PostHabit } from "../types/habit";
import { api } from "./api";

export const createHabit = async (habit: PostHabit) => {
  try {
    return await api.post("/habit", habit);
  } catch (error) {
    console.log(error);
  }
}