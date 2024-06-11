import type { Load } from "@sveltejs/kit";
import { API_HOST } from "../../../utils/api";

export const load: Load = async ({ fetch, params }) => {
  try {
    const response = await fetch(API_HOST + "lessons/" + params.id);
    const lesson = await response.json();

    return {
      lesson,
    };
  } catch (er) {
    return {
      lessons: null,
    };
  }
};
