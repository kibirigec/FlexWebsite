import React from "react";

const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] bg-[#F5F5F7]">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
              </span>
              {/* <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2> */}
              <p className="text-base text-gray-600 dark:text-[#86868B]">
              Our team is composed of skilled professionals who are passionate about delivering high-quality events. From event planners to technical experts, we bring together a wealth of knowledge to ensure the success of your event."
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Charles Lwanga"
            profession="Founder & CEO with over 25 years in event planning, Charles leads our team in ensuring every event is executed flawlessly"
            imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
          />
          <TeamCard
            name="John Mukasa"
            profession="Creative Designer John’s creative vision transforms every event into a breathtaking experience"
            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
          />
          <TeamCard
            name="Mark Johnson"
            profession="Project Manager"
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
          <TeamCard
            name="Sophia Kim"
            profession="Marketing Specialist"
            imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
      <div className="mx-auto mb-10 w-full max-w-[370px]">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img src={imageSrc} alt={name} className="w-full object-cover" />
          <div className="absolute bottom-5 left-0 w-full text-center">
            <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-gray-800">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {profession}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
