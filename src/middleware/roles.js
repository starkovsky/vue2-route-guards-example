import store from "../store";

export const rolesMiddleware = (to, from, next) => {
  if (to.meta?.roles) {
    const hasPermission = to.meta.roles.some(
      role => role === store.state.user.role
    );
    if (hasPermission) {
      next();
    } else {
      next("/");
    }
  }
  next();
};
