import {
  type RouteConfig,
  index,
  layout,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("layouts/PublicLayout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    ...prefix("user", [
      route("register", "routes/register.tsx"),
      route("login", "routes/login.tsx"),
      route("logout", "routes/logout.tsx"),
      route("/logout/confirm", "routes/logoutConfirm.tsx"),
    ]),
  ]),
  layout("layouts/DashboardLayout.tsx", [
    route("dashboard", "routes/dashboard.tsx"),
    ...prefix("club", [
      route("create", "routes/createClub.tsx"),
      route(":slug", "routes/clubRoom.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
