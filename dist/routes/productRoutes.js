"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
var express_1 = __importDefault(require("express"));
var productController_1 = require("../controllers/productController");
var router = express_1.default.Router();
exports.ProductRoutes = router;
// router.post('/',CreateVandor);
router.get('/', productController_1.getAllProducts);
//# sourceMappingURL=productRoutes.js.map