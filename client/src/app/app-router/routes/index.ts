import publicRoute from "./public-routes";
import privateRoute from "./private-routes";
import publicVerifieRoute from "./public-verifie-routes";

const routes = {
  public: publicRoute,
  private: privateRoute,
  publicVerifie: publicVerifieRoute,
};

export default routes;
