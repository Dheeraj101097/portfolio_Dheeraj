import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const ExperienceCard = ({ elem }) => {
  const theme = useTheme();

  return (
    <>
      <div>
        {elem.map((exp, i) => (
          <div className={`mb-4 `}>
            <StyledWrapper key={exp.id || i}>
              <div className="notification ">
                <div className="notiglow" />
                <div className="notiborderglow" />
                <div className="notititle flex flex-row justify-between ">
                  {exp.organization} | {exp.position}
                  <p className="text-gray-200 font-extralight text-sm pt-1 ml-3">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <div className="notibody">
                  <ul>
                    {exp.responsibilities.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </StyledWrapper>
          </div>
        ))}
      </div>
    </>
  );
};

const StyledWrapper = styled.div`
  .notification {
    display: flex;
    flex-direction: column;
    isolation: isolate;
    position: relative;
    width: 100%;
    max-width: 52rem;
    height: auto;
    background: #29292c;
    border-radius: 1rem;
    overflow: hidden;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 16px;
    --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
    --color: #32a6ff;
    padding: 1rem;
  }
  @media (max-width: 768px) {
    .notification {
      width: 90%; /* Slightly smaller width on small screens */
      padding: 1rem; /* Reduced padding for better fit */
    }
  }

  .notification:before {
    position: absolute;
    content: "";
    inset: 0.0625rem;
    border-radius: 0.9375rem;
    background: #18181b;
    z-index: 2;
  }

  .notification:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;
    border-radius: 0.125rem;
    background: var(--gradient);
    transition: transform 300ms ease;
    z-index: 4;
  }

  .notification:hover:after {
    transform: translateX(0.15rem);
  }

  .notititle {
    color: var(--color);
    padding: 0.1rem 0.25rem 0.4rem 1.25rem;
    font-weight: 500;
    font-size: 1.1rem;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notititle {
    transform: translateX(0.15rem);
  }

  .notibody {
    color: #99999d;
    padding: 0 1.25rem;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notibody {
    transform: translateX(0.25rem);
  }

  .notiglow,
  .notiborderglow {
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle closest-side at center,
      white,
      transparent
    );
    opacity: 0;
    transition: opacity 300ms ease;
  }

  .notiglow {
    z-index: 3;
  }

  .notiborderglow {
    z-index: 1;
  }

  .notification:hover .notiglow {
    opacity: 0.1;
  }

  .notification:hover .notiborderglow {
    opacity: 0.1;
  }

  .note {
    color: var(--color);
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 0.9rem;
    width: 75%;
  }
`;

export default ExperienceCard;

// const StyledWrapper = styled.div`
//   /* Made the card responsive with max-width and full width fallback */
//   .notification {
//     display: flex;
//     flex-direction: column; /* Stacking content vertically */
//     isolation: isolate;
//     position: relative;
//     width: 100%; /* Adjusted for full-width on all devices */
//     max-width: 36rem; /* Limit the maximum width */
//     height: auto; /* Allow height to adjust based on content */
//     padding: 1.5rem; /* Added padding for better spacing */
//     background: #29292c;
//     border-radius: 1rem;
//     overflow: hidden;
//     font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
//       sans-serif;
//     font-size: 16px;
//     --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
//     --color: #32a6ff;
//     margin-bottom: 1rem; /* Space between cards */
//   }

//   /* Adjustments for smaller devices (Mobile-first approach) */
//   @media (max-width: 768px) {
//     .notification {
//       width: 90%; /* Slightly smaller width on small screens */
//       padding: 1rem; /* Reduced padding for better fit */
//     }
//   }

//   .notititle {
//     color: var(--color);
//     padding: 0.65rem 0.25rem 0.4rem 1.25rem;
//     font-weight: 500;
//     font-size: 1.1rem;
//   }

//   .notibody {
//     color: #99999d;
//     padding: 0 1.25rem;
//   }

//   .notiglow,
//   .notiborderglow {
//     position: absolute;
//     width: 20rem;
//     height: 20rem;
//     transform: translate(-50%, -50%);
//     background: radial-gradient(
//       circle closest-side at center,
//       white,
//       transparent
//     );
//     opacity: 0;
//     transition: opacity 300ms ease;
//   }

//   .notiglow {
//     z-index: 3;
//   }

//   .notiborderglow {
//     z-index: 1;
//   }

//   .notification:hover .notiglow,
//   .notification:hover .notiborderglow {
//     opacity: 0.1;
//   }
// `;
