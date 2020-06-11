import { Router, Response } from "https://deno.land/x/oak/mod.ts";
import * as serverCtrl from "../controllers/server.controller.ts";

const router = new Router();

router.get("/", ({ response }: { response: Response }) => {
  response.body = "Countries API V2.0";
});

router
  .get("/countries", serverCtrl.getCountries)
  .get("/country/:id", serverCtrl.getCountry)
  .get("/states/:id", serverCtrl.getStates)
  .get("/state/:id", serverCtrl.getState);

export default router;
