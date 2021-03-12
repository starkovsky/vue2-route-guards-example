import store from "../store";
import { apiRequest } from "../api";

export const authMiddleware = async (to, from, next) => {
  if (store.state.user) {
    next();
  } else {
    try {
      const user = await apiRequest();
      await store.dispatch("setUser", user);
      if (to.path === "/login") {
        next("/");
      } else {
        next();
      }
    } catch (error) {
      if (to.path !== "/login") {
        next("/login");
      } else {
        next();
      }
    }
  }
};
