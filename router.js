import Stories from "./pages/stories.js";
import Item from "./pages/item.js";
import Favorites from "./pages/favorites.js";

//initiate navigo router
const router = new Navigo(null, true, "#");

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    //create route paths
    const routes = [
      { path: "/", page: Stories },
      { path: "/new", page: Stories },
      { path: "/ask", page: Stories },
      { path: "/show", page: Stories },
      { path: "/item", page: Item },
      { path: "/favorites", page: Favorites },
    ];

    //define the routes using router.on
    //after the routes, trigger the resolving logic using .resolve()
    routes.forEach(({ path, page }) => {
      router
        .on(path, () => {
          page(path);
        })
        .resolve();
    });
  }
}
