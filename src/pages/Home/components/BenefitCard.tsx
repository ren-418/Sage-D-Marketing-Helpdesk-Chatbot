interface BenefitCardProps {
  title: string;
  imgUrl: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  imgUrl,
}) => {
  return (
    <>
      <div className="px-6 flex sm:px-0 w-full sm:w-[375px] max-w-[500px]">
        <div className="flex grow flex-col gap-8">
          <div className="group relative flex flex-col grow justify-center items-center gap-2">
            <div className="image-box">
              <img
                src={imgUrl}
                alt={title}
                className="overflow-hidden object-cover"
              />
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <h4 className="max-w-[220px] text-center transition-colors">
                {title}
              </h4>
            </div>

            {/* <div className="description-box grow absolute top-0 left-0 w-full h-full flex justify-center items-center p-5 shadow-[0px_0px_18px_3px_rgba(0,0,0,0.1)] bg-white text-black rounded-2xl p-4 opacity-0 group-hover:opacity-85 transition-opacity duration-300">
              <p className="text-center">{description}</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
