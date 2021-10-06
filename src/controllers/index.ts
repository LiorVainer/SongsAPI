import { Router } from "express";
import fs from "fs";
import marked from "marked";

const router = Router();

router.get("", (req, res) => {
  console.log(__dirname);

  var path = __dirname + "/../../readme.md";
  var file = fs.readFileSync(path, "utf8");
  res.send(marked(file.toString()));
});

export default router;
