const {
  getData,
  getDataById,
  getAnswersByCondition,
} = require("../utils/db.util");

class QuestionController {
  async getQuestion(req, res, next) {
    console.log(req.query);
    let conditon;

    if (Object.keys(req.query).length > 0) {
      const { category, level, limit } = req.query;
      conditon = `WHERE category_id=${category} AND level=${level} LIMIT ${limit}`;
    }
    try {
      const data = await getData("question", conditon);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getQuestionById(req, res, next) {
    const params = req.params;
    try {
      const data = await getDataById("question", params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAnswerByIdOfQuestion(req, res, next) {
    const params = req.params;
    try {
      const data = await getAnswersByCondition(params.id);

      // const newData = data.map((item, index) => ({
      //   question: item[0].question_content,
      //   answers: item.map((answer) => ({
      //     content: answer.answer_content,
      //     isTrue: answer.isTrue,
      //   })),
      // }));
      res.status(200).json(data);
    } catch (error) {
      console.log(111, error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new QuestionController();


// SÁCH
// Lấy tất cả các sách

// Hiển thị thông tin 1 quyển sách
// Tìm kiếm sách theo tên
// Tìm kiếm sách theo thể loại
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

// REVIEW





