"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var news_data_1 = require("../news-data");
function readAllNews(req, res) {
    setTimeout(function () {
        res.status(200).json(news_data_1.NEWS);
    }, 10000);
}
exports.readAllNews = readAllNews;
//# sourceMappingURL=read-all-news.route.js.map