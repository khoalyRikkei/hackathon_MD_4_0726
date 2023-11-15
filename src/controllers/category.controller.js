const { getData, getDataById } = require("../utils/db.util");

class CategoryController {
  async getCategory(req, res, next) {
    try {
      const data = await getData("category");
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getCategoryById(req, res, next) {
    const params = req.params;
    try {
      const data = await getDataById("category", params.id);
      res.status(200).json(data);
    } catch (error) {
        
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new CategoryController();
