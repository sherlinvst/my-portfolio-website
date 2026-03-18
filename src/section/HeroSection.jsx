

const HeroSection = () => {
    return (
        <div className="flex flex-row justify-between items-star h-120 w-full">
            <div className="flex flex-col gap-3 items-start h-55 w-140 ml-35 mt-20">
                <h1 className="font-title !text-title-full font-semibold">Hi, there!</h1>
                <p className="font-main text-main-full">I am an aspiring full-stack developer for web and mobile applications. Crafting and deploying solutions using modern technologies to achieve and deliver user-focused applications.
                </p>
            </div>
            <div className="bg-amber-500 h-40 w-10 mr-35 mt-20">

            </div>
        </div>
    );
};

export default HeroSection;