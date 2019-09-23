import serviceBase from "./serviceBase";

const productService = {
  test: () => serviceBase.get("/api/news"),
  getAllReviews: () => serviceBase.get("/api/review/getall")
};
export default productService;
