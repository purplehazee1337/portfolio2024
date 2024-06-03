import Image from "next/image";

const Project = (props) => {
  const openUrlInNewWindow = () => {
    window.open(props.url, "_blank", "noopener,noreferrer");
  };

  const openUrlInNewWindow2 = () => {
    window.open(props.github, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="leading-tight text-center lg:text-left">
      <h3 className="font-bold text-5xl md:text-6xl flex flex-col md:flex-row justify-center lg:justify-normal">
        {props.name}
        {props.name === "Projekty" && (
          <div className="flex flex-row justify-center my-4 md:my-0">
            <Image
              className="mx-4 cursor-pointer hover:opacity-50 "
              src="/assets/logos/github.svg"
              width={100 / 2}
              height={100 / 2}
              alt="github"
              onClick={openUrlInNewWindow}
            />
          </div>
        )}
        {props.url && props.name !== "Projekty" && (
          <div className="flex flex-row justify-center lg:justify-normal gap-4 mt-4 md:mt-0 md:ml-4">
            <Image
              className="cursor-pointer hover:opacity-50"
              src="/assets/logos/github.svg"
              width={100 / 2}
              height={100 / 2}
              alt="github"
              onClick={openUrlInNewWindow2}
            />
            <Image
              className="mt-1 cursor-pointer hover:opacity-50"
              src="/assets/icons/webiste.svg"
              width={55}
              height={55}
              alt="website"
              onClick={openUrlInNewWindow}
            />
          </div>
        )}
      </h3>
      <p className="font-semibold text-xl md:text-2xl tracking-tight mt-4">
        {props.description}
      </p>
      {props.name !== "Projekty" && (
        <div className="hidden md:grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4 justify-center items-center">
          {props.stack && props.stack.map((el) => (
            <Image
              key={el}
              src={"/assets/logos/" + el}
              width={100}
              height={100}
              alt={el.slice(0, -4)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
