import Image, { StaticImageData } from "next/image";

import OFETImage from "../_images/OFET.jpg";
import MagnesiumImage from "../_images/MagnesiumAlloys.jpg";
import MLandHPCImage from "../_images/MLandHighPerformanceComputing.jpg";

// import FDTRImage from "../_images/fdtr.jpeg";
// import FlexibleImage from "../_images/flexible2.jpg";
// import DeviceImage from "../_images/device.jpeg";
import Bunner2Image from "../_images/JKA_banner2.png";
import Bunner3Image from "../_images/JKA_banner3.png";
import Link from "next/link";

export default function Research() {
  return (
    <div className="pt-20 flex flex-col items-center">
      <div className="w-5/6 md:w-2/3 flex flex-col md:gap-4 lg:gap-10">

        {/* Research Topic Section */}
        <div className="text-4xl font-bold self-center pt-10 md:pt-20">
          Research Topics
        </div>
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-16 mt-4 md:mt-0">
          <div id="ofet">
            <ResearchLi
              image={OFETImage}
              title="Analysis of Organic Field-Effect Transistors"
              details="The Organic Field-Effect Transistor (OFET) is recognized as a pivotal device in applications such as flexible circuits, sensors, and memory storage. However, its performance typically lags behind that of inorganic counterparts. Enhancing the performance of OFETs necessitates precise control over the characteristics of the organic semiconductor layer.
              Recent advancements in molecular-level simulation techniques, including kinetic Monte Carlo methods, have significantly enhanced the capability to replicate the microscopic behavior of charge carriers. Nevertheless, these approaches often depend on two-dimensional Poisson equations, which inadequately capture short-range electrostatic interactions.
              In this research, we successfully employed a three-dimensional partial differential equation solver to model OFET devices, fully accounting for the Coulomb interactions between charge carriers. Our findings reveal that at elevated gate voltages, the transfer characteristics derived from the three-dimensional Poisson equation exhibit a downward curvature and lower values compared to those predicted by two-dimensional Poisson equations, suggesting strong concordance with experimental observations."
            />
          </div>
          <div id="magnesium">
            <ResearchLi
              image={MagnesiumImage}
              title="Evaluation of Mechanical Properties of Magnesium Alloys"
              details="Magnesium (Mg) is recognized as the lightest structural metal and serves as a promising alternative to heavier steels and aluminum alloys. Nevertheless, Mg exhibits limited plastic formability at room temperature and generally displays inferior strength compared to most aluminum alloys. This constraint in formability can be attributed to the significant disparity in critical resolved shear stress (CRSS) between basal slip systems and other slip and twinning systems. Consequently, the low CRSS acts as a limiting factor for the strength of Mg alloys, underscoring the importance of enhancing basal slip to improve their strength, deformability, and fracture toughness.
                      This study presents a theoretical model aimed at predicting the CRSS in single-crystal Mg–Ca alloys. We quantitatively investigated the CRSS of basal dislocation slip along the basal plane using molecular dynamics simulations across a temperature range of 1 K to 500 K. The results obtained from the proposed theoretical model agree well with both simulation findings and micro-pillar compression test results for Mg–0.3 at.% Ca and Mg–0.6 at.% Ca alloys at ambient temperature."
            />
          </div>
          <div id="machine-learning">
            <ResearchLi
              image={MLandHPCImage}
              title="Integration of Machine Learning and High-Performance Computing"
              details="The optimization of material structures and the design of new materials rely on accurate property predictions through high-precision computational methods. While conventional macroscale modeling addresses real-scale simulations, it often depends on empirical approaches that limit accuracy. Conversely, atomistic-level techniques like ab initio molecular dynamics (AIMD) offer high precision but come with high computational costs, restricting the time and spatial scales that can be simulated. As chemical reactions and phase transitions occur on millisecond to microsecond time scales, reproducing these phenomena with AIMD is challenging, highlighting the need for rapid, high-precision analytical methods.
              In this study, we employed a machine learning-based interatomic potential model for optimization on the Fugaku supercomputer, maintaining the accuracy of potential energy and interatomic forces. This approach resulted in a 31.7-fold increase in the computational speed of molecular dynamics (MD) simulations, achieving 149 nanoseconds per day across 12,000 nodes while retaining ab initio calculation accuracy."
            />
          </div>
        </div>

        {/* Acknowledgments Section */}
        <div className="mt-24 flex flex-col">
          <div className="text-2xl lg:text-4xl font-bold self-center">
            Acknowledgments
          </div>
          <div className="mt-2 md:mt-8 text-xl lg:text-3xl font-bold">
            Financial Supports
          </div>
          <div>
            <ul className="md:mt-4 list-disc pl-4 md:text-2xl md:space-y-2">
              <li>JSPS Grant-in-Aid for Scientific Research</li>
              <li>JST PRESTO</li>
              <li>NEDO</li>
              <li>JKA</li>
            </ul>
            <div className="md:mt-2">
              <span className="md:text-xl">etc.</span>
            </div>
          </div>
          <div className="flex flex-row gap-4 md:mt-4 w-full">
            <a href="https://www.jka-cycle.jp" className="w-1/2 md:w-1/4 block h=40">
              <Image
                src={Bunner2Image}
                alt="バナー2"
                className="w-full h-full object-cover"
              />
            </a>
            <a href="https://keirin.jp" className="w-1/2 md:w-1/4 block h=40">
              <Image
                src={Bunner3Image}
                alt="バナー3"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <div className="mt-2 md:mt-5 md:text-xl">
            <Link
              className="hover:text-blue-500 underline"
              href="https://www.cfi.eng.osaka-u.ac.jp/seeds/seeds_list_1/lijun_liu_assist/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Details
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

const ResearchLi = ({
  title,
  image,
  details,
}: {
  title: string;
  image: StaticImageData;
  details: string;
}) => {
  const detailsWithBreaks = details.split('\n').map((line, index, arr) => (
    <div key={index}>
      {line}
      {index < arr.length - 1 && <br />}
    </div>
  ));

  return (
    <>
      <div className="hidden lg:flex flex-col gap-6 mt-20">
        <div className="text-3xl font-bold">{title}</div>
        <div className="flex flex-row gap-8 items-center">
          <Image src={image} alt="" className="w-1/3" />
          <div className="text-justify">{detailsWithBreaks}</div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col items-center gap-6 mt-8">
        <div className="text-2xl lg:text-3xl font-bold text-center">
          {title}
        </div>
        <Image src={image} alt="" className="w-full md:w-4/5" />
        <div className="text-justify lg:text-lg">{detailsWithBreaks}</div>
      </div>
    </>
  );
};
