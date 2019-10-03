import serviceBase from "./serviceBase";

const productService = {
  test: () => serviceBase.get("/api/news"),
  login: payload => serviceBase.post("/api/login", payload),
  getAllReviews: () => serviceBase.get("/api/review/getall"),
  createReview: payload => serviceBase.post("/api/review", payload),
  updateReview: payload => serviceBase.put("/api/review", payload),
  deleteReview: id => serviceBase.delete(`/api/review/${id}`)
};
export default productService;
