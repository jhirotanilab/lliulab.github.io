export type NewsType = {
  date: string; // 日付
  description: string; // 内容
  id: number; // id
  imgPath: string; // 写真のパス
  link: string; // リンク先
};

const NEWS_LIST: NewsType[] = [
  {
    date: "May 29, 2026",
    description: "Webpage was opened.",
    id: 1,
    link: "",
    imgPath: "/_images/news/news_logo.png",
  },
];

export default NEWS_LIST;
