import React from "react";
import Heading from "../Typography/heading";
import Paragraph from "../Typography/paragraph";

function Sponsors({ sponsors }) {
  return (
    <div className="sponsor-bg container text-center">
      <div className="py-[80px] flex flex-col items-center">
        <Heading className="text-white">Event and Host Sponsor</Heading>
        <div className="w-[718px] sm:w-full">
          <Paragraph className="mt-[40px]">
            이벤트 주최에 후원과 도움을 주신 모든 분께 깊은 감사를 드립니다.
            <br />
            여러분의 지원과 호의가 이번 이벤트를 빛나게 해주었습니다. 진심으로
            감사드립니다!
          </Paragraph>
        </div>
        <div className="flex justify-center mt-[40px] w-[1300px] sm:w-full sm:flex-col sm:justify-center sm:items-center">
          {sponsors &&
            sponsors.map((sponsor) => (
              <a
                key={sponsor.img}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[1300px] flex items-center sm:mt-6"
              >
                <img src={sponsor.img} alt="Sponsor" className="" />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
