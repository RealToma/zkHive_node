import { Props } from "./types";

import { TimeLine as TimeLineComponent } from "./style";

export const TimeLine = ({ steps, active, children, setStep }: Props) => (
  <TimeLineComponent>
    <div className="time_line">
      {steps.map((item, index) => (
        <div
          className={`step ${active === index ? "active" : ""} ${
            steps.length - 1 === index ? "last" : ""
          }`}
          key={index}
        >
          <p data-aos="fade-up">{item.label}</p>
          <div
            className="count"
            onClick={active > index ? () => setStep(index) : undefined}
          >
            <p
              style={{
                color:
                  active > index
                    ? "#000000"
                    : active === index
                    ? "#FBDA00"
                    : "#454511",
              }}
            >
              {index + 1}
            </p>
            <img
              src={
                active > index
                  ? "/assets/images/time-line-step-fill.png"
                  : active === index
                  ? "/assets/images/time-line-step-unfill.png"
                  : "/assets/images/time-line-step-desabled.png"
              }
              alt=""
            />
          </div>
        </div>
      ))}
      <div className="line"></div>
    </div>
    {children}
  </TimeLineComponent>
);