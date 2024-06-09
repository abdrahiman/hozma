import type { Load } from "@sveltejs/kit";
import { API_HOST } from "../../utils/api";

export const load: Load = async ({ fetch, url }) => {
  try {
    // const response = await fetch(API_HOST + "lessons?_sort=id&_order=desc");
    let query = API_HOST + "lessons";
    if (url.searchParams.get("q")) {
      query += url.search;
    }
    const response = await fetch(query);
    const lessons = await response.json();

    return {
      props: {
        lessons: lessons.lessons,
      },
    };
  } catch (er) {
    return {
      props: {
        lessons: null,
      },
    };
  }
};
