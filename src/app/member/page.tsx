import Image from "next/image";
import Link from "next/link";

export default function Member() {
  return (
    <div className="pt-20 flex flex-col items-center">
      <div className="text-4xl font-bold self-center pt-10 lg:pt-20">
        Member
      </div>
      <div className="w-5/6 lg:w-2/3 flex flex-col gap-6 lg:gap-6 mt-10 lg:mt-20 items-center">
        <div className="text-3xl font-bold">STAFF</div>
        <div className="flex flex-col lg:flex-row w-full items-center">
          <Image
            src={"/_images/liu-sensei.jpg"}
            width={200}
            height={200}
            alt="Lijun Liu-sensei"
            className="w-full md:w-2/3 lg:w-1/2 p-10"
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-2xl lg:text-3xl font-bold">
                Lijun Liu, Ph.D.
              </p>
              <p className="text-base lg:text-xl">
                Email: liu@mech.eng.osaka-u.ac.jp
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl lg:text-2xl">Assistant Professor</p>
              <p className="text-base lg:text-lg">
                Department of Mechanical Engineering, 
                The University of Osaka, Japan
              </p>
            </div>
            <div className="self-center lg:self-start">
              <Link
                href={
                  "https://www.cfi.eng.osaka-u.ac.jp/seeds/seeds_list_1/lijun_liu_assist/"
                }
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src={"/_images/OsakaUniv_logo.png"}
                  width={200}
                  height={100}
                  alt="The University of Osaka logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-20">
          <Link
            href={"https://researchmap.jp/kellyliu?lang=en"}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src={"/_images/thumb_researchmap.png"}
              width={200}
              height={100}
              alt="researchmap logo"
            />
          </Link>
          {/* Google Scholarは登録なし */}
          {/* <Link
            href={
              "https://scholar.google.com/citations?user=mKJl64kAAAAJ&hl=en"
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src={"/_images/Google_Scholar_logo_2015.png"}
              width={200}
              height={100}
              alt="Google Scholar logo"
            />
          </Link> */}
        </div>
        <div className="flex flex-col gap-10 mt-8 lg:mt-0">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-2xl font-bold">EMPLOYMENT HISTORY</p>
            </div>
            <div>
              <ul className="list-disc pl-4 text-base lg:text-lg">
                <li>
                  Assistant Professor, Department of Mechanical Engineering, The University of Osaka  (Apr. 2019 – Present)
                </li>
                <li>
                  Visiting Faculty Member, Information technology center, Nagoya University  (Jul. 2018 – Mar. 2019)
                </li>
                <li>
                  Visiting Faculty Member, Information technology center, Nagoya University  (Nov. 2017 – Jun. 2018)
                </li>
                <li>
                  ACT-I Researcher, Japan Science and Technology Agency  (Oct. 2017 – Jun. 2018)
                </li>
                <li>
                  Researcher, Information technology center, Nagoya University  (Sep. 2014 – Sep. 2017)
                </li>
                <li>
                  Technical Assistant, Graduate school of engineering, Nagoya University (Sep. 2014 – Mar. 2015)
                </li>
                <li>
                  Toyota Motor Corporation (Oct. 2012 – Dec. 2013)
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-2xl font-bold">EDUCATION</p>
            </div>
            <div>
              <ul className="list-disc pl-4 text-base lg:text-lg">
                <li>
                  Ph.D., Intelligent Machinery Systems, Graduate school of engineering, Kyushu University , JAPAN
                  (2012)
                </li>

                <li>
                  M.S., Solid Mechanics, South China University of Technology, CHINA
                  (2019)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
