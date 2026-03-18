

const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center sm:h-150 lg:h-120 w-full lg:gap-40">
            <div className="flex flex-col gap-3 items-start h-40 lg:h-55 w-100 sm:w-140 lg:w-140 lg:ml-40 mt-5 sm:mt-10">
                <h1 className="font-title !text-title-small sm:!text-title-med lg:!text-title-full font-semibold">Hi, there!</h1>
                <p className="font-main text-main-small sm:text-main-med lg:text-main-full">I am an aspiring full-stack developer for web and mobile applications. Crafting and deploying solutions using modern technologies to achieve and deliver user-focused applications.
                </p>
            </div>
            <div className="bg-[rgba(246,213,216,1)] h-65 sm:h-90 lg:h-105 w-50 sm:w-70 lg:w-87 mt-5 sm:mt-10 lg:mt-20 rounded-t-[110px]">

            </div>
        </div>
    );
};

export default HeroSection;