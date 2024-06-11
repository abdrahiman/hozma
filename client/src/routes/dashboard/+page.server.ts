import { redirect, type Load } from "@sveltejs/kit";
import { API_HOST } from "../../utils/api";

export const load: Load = async ({ fetch }) => {
  let notAllowd = false;
  try {
    let req = await fetch(API_HOST + "auth/me");
    let user = await req.json();
    if (!user || user.role != "admin") {
      notAllowd = true;
      console.log("not");
    } else {
      const response = await fetch(API_HOST + "lessons?_sort=id&_order=desc");
      const lessons = await response.json();

      return {
        lessons: lessons.lessons,
      };
    }
  } catch (err) {
    return {
      lessons: [],
    };
  }
  if (notAllowd) {
    console.log("run");
    redirect(302, "/");
  }
};
