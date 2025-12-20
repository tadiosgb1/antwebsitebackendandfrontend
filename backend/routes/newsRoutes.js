const express = require("express");
const router = express.Router();
const controller = require("../controllers/NewsController");

const upload = require("../middleware/uploadMiddleware");
const uploadFields = upload.fields([{ name: "image", maxCount: 1 }, { name: "video", maxCount: 1 }]);


router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", uploadFields, controller.create);
router.put("/:id", uploadFields, controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
