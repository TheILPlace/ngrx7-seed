import { NEWS } from '../news-data';

export function readAllNews(req, res) {
  setTimeout(() => {
    res.status(200).json(NEWS);
  }, 10000);
}
