// import express from "express";
// import test from "../controllers/user.control.js";
// // import {test} from "../controllers/user.control.js"

// const router = express.Router();

// router.get('/test', test);

// export default router;

import express from "express";
import test from "../controllers/user.control.js"; // Ensure the path is correct

const router = express.Router();

router.get('/test', test);

export default router;