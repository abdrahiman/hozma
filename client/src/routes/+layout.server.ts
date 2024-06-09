import axios from "axios";
import { API_HOST } from "../utils/api.js";

export async function load({ cookies }) {
  let tokenSaved = cookies.get("access_token");
  try {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${tokenSaved}`,
    };
    let req = await fetch(API_HOST + "auth/me", {
      headers: { Authorization: `Bearer ${tokenSaved}` },
    });
    let user = await req.json();

    if (!tokenSaved || !req.ok) {
      return {
        user: null,
        access_token: null,
      };
    }

    return {
      user,
      access_token: tokenSaved,
    };
  } catch (err) {
    return {
      user: null,
      access_token: null,
    };
  }
}
