import Image from "next/image";
import Link from "next/link";
import { cpu } from "../type/cpu";

interface CartProps {
  data: cpu[];
}

// export const getStaticProps: GetStaticProps<{ data: cpu[] }> = async () => {
//   const res = await fetch("http://localhost:5000/cpu");
//   const data = await res.json();
//   return { props: { data } };
// };

function Cart({ data }: CartProps) {
  // const { data, error, isError, isFetching, isLoading, isSuccess } =
  //   useGetCpuQuery(undefined);

  console.log(data);

  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumbers: number[] = [];

  while (randomNumbers.length < 11) {
    const randomNumber: number = getRandomNumber(1, 92);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  const dataWithRandomIds = data.filter((item) =>
    randomNumbers.includes(item.id)
  );

  console.log(dataWithRandomIds);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24 ">
      {dataWithRandomIds?.map((product: cpu) => (
        <div
          key={product?.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl "
        >
          <Link href={`/productDetails/${product?.id}`}>
            <div className="flex flex-col justify-start">
              <div className="">
                {" "}
                <Image
                  src={product?.image}
                  width={350}
                  height={200}
                  alt="cart pic"
                />
              </div>

              <div className="p-5 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product?.Name}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Category: {product?.category}
                  <br />
                  Price: ${product?.price}
                  <br />
                  Rating: {product?.rating} *
                  <br />
                  Staus: {product?.status}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Cart;
