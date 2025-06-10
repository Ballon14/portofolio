import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import ProjectPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";

const routes = [
  {
    name: "main",
    path: "/",
    Component: MainLayout,
    key: "main",
    routes: [
      {
        key: "home",
        name: "home",
        path: "/",
        index: true,
        requireAuth: false,
        Component: HomePage,
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        Component: AboutPage,
      },
      {
        key: "skills",
        name: "skills",
        path: "/skills",
        Component: SkillsPage,
      },
      {
        key: "projects",
        name: "projects",
        path: "/projects",
        Component: ProjectPage,
      },
      {
        key: "contact",
        name: "contact",
        path: "/contact",
        Component: NotFound,
      },
    ],
  },
  {
    name: "404",
    path: "*",
    Component: NotFound,
    key: "404",
  },
];

export default routes;
