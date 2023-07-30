import { useSession } from "next-auth/react";
import Image from "next/image";

function Profile() {
  const { data: session } = useSession();
  // const [user, loading, error] = useAuthState(auth);
  // console.log("from honse", user);

  const img = session?.user?.image || "";
  const alt = session?.user?.name || "";
  return (
    <div className="mt-24">
      <div className="mb-10 flex justify-center align-middle">
        <Image src={img} width={100} height={100} alt={alt} />
      </div>

      <div className=" text-center">
        <p>
          {" "}
          <span className="text-2xl font-bold"> Name:</span>{" "}
          {session?.user?.name}
        </p>
        <br />
        <p>
          {" "}
          <span className="text-2xl font-bold"> Email:</span>{" "}
          {session?.user?.email}
        </p>
      </div>
    </div>
  );
}

export default Profile;
