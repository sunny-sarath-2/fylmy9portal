let news_service = require("../services/news.service");
let reviews_service = require("../services/review.service");
let articles_service = require("../services/article.service");

exports.news_get_all = async (req, res) => {
  let result = await news_service.news_get();
  result.map(e => console.log(e));
  let ids = [[], [], [], [], [], []];
  result.forEach(element => {
    if (element.collection_name == "reviews") ids[0].push(element.reference);
    else if (element.collection_name == "gossips")
      ids[1].push(element.reference);
    else if (element.collection_name == "interview")
      ids[2].push(element.reference);
    else if (element.collection_name == "gallery")
      ids[3].push(element.reference);
    else if (element.collection_name == "trailers")
      ids[4].push(element.reference);
    else if (element.collection_name == "articles")
      ids[5].push(element.reference);
  });
  console.time("news");
  let data = [];
  data[0] = reviews_service.get_many_by_id_service(ids[0]);
  data[1] = reviews_service.get_many_by_id_service(ids[1]);
  data[2] = reviews_service.get_many_by_id_service(ids[2]);
  data[3] = reviews_service.get_many_by_id_service(ids[3]);
  data[4] = reviews_service.get_many_by_id_service(ids[4]);
  data[5] = articles_service.get_many_by_id_service(ids[5]);
  data = await Promise.all([
    data[0],
    data[1],
    data[2],
    data[3],
    data[4],
    data[5]
  ]);

  data = [].concat.apply([], data);
  sorter(data);
  console.timeEnd("news");
  res.status(200).json({ data: data });
};

const sorter = data => {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    // console.log(element.created_date);
  }
};
