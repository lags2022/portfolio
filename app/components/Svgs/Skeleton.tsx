import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <div className="w-[250px] h-[250px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] flex items-center justify-center m-0">
      <ContentLoader
        speed={2}
        width={300}
        height={300}
        viewBox="0 0 500 500"
        backgroundColor="#f3f3f300"
        foregroundColor="#ecebeb00"
      >
        <rect x="228" y="390" rx="0" ry="0" width="59" height="28" />
        <rect x="-1" y="0" rx="0" ry="0" width="532" height="588" />
      </ContentLoader>
    </div>
  );
};

export default Skeleton;
