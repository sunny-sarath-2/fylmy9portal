import serviceBase from "./serviceBase";

const productService = {
  test: () => serviceBase.get("/api/news"),
  getAllReviews: () => serviceBase.get("/api/review/getall"),
  createReview: payload => serviceBase.post("/api/review", payload),
  updateReview: payload => serviceBase.put("/api/review", payload)
};
export default productService;
