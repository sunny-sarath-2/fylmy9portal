let review_service = require("../services/review.service");
let news_service = require("../services/news.service");
const jwt = require("jsonwebtoken");
const common = require("../common/verify");

exports.review_get_all = async (req, res) => {
  let result = await review_service.get_all_service();
  res.status(200).json({ status: 200, result: result, message: "all reviews" });
};
exports.review_get_published = async (req, res) => {
  let result = await review_service.get_published_service();
  res.status(200).json({ status: 200, result: result, message: "all reviews" });
};
exports.review_get_one = (req, res) => {
  let reference_id = req.params._id;
  review_service.get_one_review_service(reference_id, (err, result) => {
    res.status(200).json({
      status: 200,
      result: result,
      message: `result for review id ${reference_id}`
    });
  });
};

exports.review_post = async (req, res) => {
  jwt.verify(req.token, "secret", async (err, authdata) => {
    err = false;
    if (err)
      res.status(400).json({
        status: 400,
        result: [],
        message: "unauthorized"
      });
    else {
      let result = await review_service.post_service(req.body);
      res
        .status(200)
        .json({ status: 200, result: result, message: "review created" });
      let newsupdate = await news_service.news_post({
        reference: result._id,
        collection_name: "reviews",
        created_date: new Date()
      });
      console.log(newsupdate);
    }
  });
};

exports.review_put = async (req, res) => {
  try {
    // let check_authorization = await common.verify(req.token, "secret");
    if (true) {
      //check_authorization.status
      if (req.body._id) {
        let result = await review_service.put_one_service(req.body);
        res.send({
          status: 200,
          result: result,
          message: "updated successfully"
        });
      } else {
        res.send({
          status: 400,
          result: {},
          err: "no id found",
          message: "not found"
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      result: [],
      error: error.err,
      message: "unauthorized"
    });
  }
};

exports.review_delete = async (req, res) => {
  const reference_id = req.params._id;
  let result = await review_service.delete_Service(reference_id);
  res.send({
    status: 200,
    result: reference_id,
    message: `${reference_id} deleted successfully`
  });
};
