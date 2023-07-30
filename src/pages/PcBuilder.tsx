import BuildProduct from "@/components/part/BuildProduct";
import { cpu } from "@/components/type/cpu";
import { removeAll } from "@/redux/features/buildPc/BuildPc";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { GetStaticProps } from "next";
import Image from "next/image";

const categories = [
  {
    name: "CPU",
    link: "/cpu.jpg",
  },
  {
    name: "Motherboard",
    link: "/motherboard.jpg",
  },
  {
    name: "RAM",
    link: "/ram.jpg",
  },
  {
    name: "PSU",
    link: "/psu.jpg",
  },
  {
    name: "Storage",
    link: "/storage.jpg",
  },
  {
    name: "Monitor",
    link: "/monitor.jpg",
  },
  {
    name: "Mouse",
    link: "/mouse.jpg",
  },
  {
    name: "Keyboard",
    link: "/keyboard.jpg",
  },
];

interface featuredProps {
  data: cpu[];
}

export const getStaticProps: GetStaticProps<featuredProps> = async () => {
  const res = await fetch(`http://localhost:3000/api/getdata`);
  const data = await res.json();

  return {
    props: { data },
  };
};
function PcBuilder({ data }: { data: cpu[] }) {
  const build = useAppSelector((state) => state.build);
  const dispatch = useAppDispatch();
  const allValuesNonZero = Object.values(build).every((value) => value !== 0);
  const handleButtonClick = () => {
    if (allValuesNonZero) {
      alert("pc build successfully");
    }
    dispatch(removeAll());
  };

  return (
    <>
      <div className="">
        <h1 className="text-center mt-10 mb-16 text-6xl font-medium text-indigo-600">
          Build you dream PC
        </h1>
        {categories.map((category) => (
          <div
            key={category.name}
            className=" flex justify-center items-center mx-auto w-full max-w-screen-xl mb-7 "
          >
            <div className="flex flex-col items-center  bg-white border border-gray-200  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-auto hover:shadow-xl  rounded-lg">
              <Image src={category.link} width={200} height={500} alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {category.name}
                </h5>
                <BuildProduct category={category.name} data={data} />
              </div>
            </div>
          </div>
        ))}
        <div className="mt-14 flex justify-center align-middle">
          <button
            onClick={handleButtonClick}
            disabled={!allValuesNonZero}
            className={`inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-800  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-60 ${
              allValuesNonZero ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            Build
          </button>
        </div>
      </div>
    </>
  );
}

export default PcBuilder;
