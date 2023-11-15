const express = require("express");
const categoryController = require("../controllers/category.controller");

const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.getCategory);
categoryRouter.get("/:id", categoryController.getCategoryById);
categoryRouter.post("/", () => {});

module.exports = categoryRouter;



// SÁCH

// Lấy tất cả các sách
// GET --> api/v1/books/

// Hiển thị thông tin 1 quyển sách
// GET --> api/v1/books/:id

// Tìm kiếm sách theo tên
// GET --> api/v1/books/search?name=kldd

// Tìm kiếm sách theo thể loại
// GET --> api/v1/books?type=1

// Hiển thị tất cả review theo sách
// Hiển thị tất cả các sách theo điểm review (ví dụ: tất cả các sách có điểm trung bình 8)
// Làm thêm
// Thêm một quyển sách
// Xóa một quyển sách



// TÁC GIẢ
// Lấy dữ liệu tất cả tác giả
// Hiển thị thông tin một tác giả
// Tìm kiếm tác giả theo tên
// Hiển thị tất cả sách theo tác giả
// Làm thêm
// Thêm một tác giả
// Xóa một tác giả
