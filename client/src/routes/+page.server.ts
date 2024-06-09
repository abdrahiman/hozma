import type { Load } from "@sveltejs/kit";
import { API_HOST } from "../utils/api";

export const load: Load = async ({ fetch }) => {
  try {
    const response = await fetch(API_HOST + "lessons?_sort=id&_order=desc");
    const lessons = await response.json();

    return {
      lessons: lessons.lessons,
    };
  } catch (er) {
    return {
      lessons: null,
    };
  }
};
