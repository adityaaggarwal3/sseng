import Image from "next/image";

const Loading = () => {
  return (
    <div className="loader">
      <Image
        src="/loader.png"
        className="puff-in-center"
        width={150}
        height={150}
      />
    </div>
  );
};

export default Loading;
