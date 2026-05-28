export type PubType = {
  title: string; // 論文タイトル
  authors: string; // 著者
  publication: string; // 出版社
  id: number; // id(連番)
  link: string; // doiのリンク先
  detail?: string; // 詳細情報あれば(featured article, cover選出)
};

const PUB_LIST: PubType[] = [
  {
    title:
      "Enhancing the precision of thermal conductivity measurement via transducer patterning in frequency-domain thermoreflectance",
    authors:
      "Yuki Akura, Yuki Matsunaga, Lijun Liu, Yasuaki Ikeda, Masaki Shimofuri, Amit Banerjee, Toshiyuki Tsuchiya, Jun Hirotani",
    id: 1,
    link: "https://doi.org/10.1063/5.0272055",
    publication: "Review of Scientific Instruments, 96(8) 084906 (2025)",
    detail: "",
  },
];

export default PUB_LIST;
