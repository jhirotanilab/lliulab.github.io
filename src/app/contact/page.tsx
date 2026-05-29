import Link from "next/link";

export default function Contact() {
  return (
    <div className="pt-20 flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-bold self-center pt-10 lg:pt-20">
        Contact & Access Info.
      </div>
      <div className="w-5/6 lg:w-2/3 flex flex-col lg:flex-row gap-10 mt-10 lg:mt-20 items-center">
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.3492760332133!2d135.521764!3d34.8223098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fb6160c2f0b5%3A0x8a2481e3b7b5e05e!2z5bel5a2m6YOoL-Wkp-WtpumZouW3peWtpueglOeptuenkSBNMeajnw!5e0!3m2!1sja!2sjp!4v1779982633393!5m2!1sja!2sjp"
            height="450"
            loading="lazy"
            className="w-full"
          ></iframe>
          <Link
            className="btn btn-primary"
            href="http://www2.mech.eng.osaka-u.ac.jp/en/access/"
          >
            Link to Detail Access Info.
          </Link>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col font-bold gap-2">
            <p>【English】</p>
            <p>〒 565-0871</p>
            <p>
              The University of Osaka, Suita Campus, Bldg. No. M1, Room 726,
              2-1 Yamadaoka, Suita, Osaka, JAPAN
            </p>
            <p>
              Department of Mechanical Engineering, Graduate School of Engineering,
              The University of Osaka
            </p>
            <p>Functional Structural Engineering | Solid Mechanics Division, Matsumoto Laboratory</p>
            <p>TEL: +81) 6-6879-4121</p>
            <p>E-mail: liu@mech.eng.osaka-u.ac.jp</p>
          </div>

          <div className="flex flex-col font-bold gap-2">
            <p>【Japanese】</p>
            <p>〒 565-0871</p>
            <p>大阪府吹田市山田丘2-1 大阪大学吹田キャンパスM1棟726室</p>
            <p>大阪大学工学研究科機械工学専攻</p>
            <p>機能構造学系｜固体力学領域 松本研究室</p>
            <p>電話番号： 06-6879-4121</p>
            <p>メールアドレス： liu@mech.eng.osaka-u.ac.jp</p>
          </div>
        </div>
      </div>
    </div>
  );
}
