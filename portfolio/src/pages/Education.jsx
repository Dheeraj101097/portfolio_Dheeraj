// import React from "react";

// const Education = () => {
//   return (
//     <>
//       <div className="my-6">
//         {/* <!-- Item #1 --> */}
//         <div className="relative pl-8 sm:pl-32 py-6 group">
//           {/* <!-- Purple label --> */}
//           <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
//             The origin
//           </div>
//           {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
//           <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//             <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
//               May, 2020
//             </time>
//             <div className="text-xl font-bold text-slate-900">
//               Acme was founded in Milan, Italy
//             </div>
//           </div>
//           {/* <!-- Content --> */}
//           <div className="text-slate-500">
//             Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
//             Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
//             risus.
//           </div>
//         </div>

//         {/* <!-- Item #2 --> */}
//         <div className="relative pl-8 sm:pl-32 py-6 group">
//           {/* <!-- Purple label --> */}
//           <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
//             The milestone
//           </div>
//           {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
//           <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//             <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
//               May, 2021
//             </time>
//             <div className="text-xl font-bold text-slate-900">
//               Reached 5K customers
//             </div>
//           </div>
//           {/* <!-- Content --> */}
//           <div className="text-slate-500">
//             Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
//             Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
//             risus.
//           </div>
//         </div>

//         {/* <!-- Item #3 --> */}
//         <div className="relative pl-8 sm:pl-32 py-6 group">
//           {/* <!-- Purple label --> */}
//           <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
//             The acquisitions
//           </div>
//           {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
//           <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//             <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
//               May, 2022
//             </time>
//             <div className="text-xl font-bold text-slate-900">
//               Acquired various companies, inluding Technology Inc.
//             </div>
//           </div>
//           {/* <!-- Content --> */}
//           <div className="text-slate-500">
//             Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
//             Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
//             risus.
//           </div>
//         </div>

//         {/* <!-- Item #4 --> */}
//         <div className="relative pl-8 sm:pl-32 py-6 group">
//           {/* <!-- Purple label --> */}
//           <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
//             The IPO
//           </div>
//           {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
//           <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//             <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
//               May, 2023
//             </time>
//             <div className="text-xl font-bold text-slate-900">
//               Acme went public at the New York Stock Exchange
//             </div>
//           </div>
//           {/* <!-- Content --> */}
//           <div classNameName="text-slate-500">
//             Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
//             Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
//             risus.
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Education;

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import { createTheme } from "@mui/material/styles";
import { useTheme } from "../context/ThemeContext";
import LeftComponent from "../components/LeftComponent";

export default function CustomizedTimeline() {
  const theme = useTheme();
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       light: "#757ce8",
  //       main: "#3f50b5",
  //       dark: "#002884",
  //       contrastText: "#fff",
  //     },
  //     secondary: {
  //       light: "#ff7961",
  //       main: "#f44336",
  //       dark: "#ba000d",
  //       contrastText: "#000",
  //     },
  //   },
  // });
  return (
    <div className="flex flex-row ">
      {/* <div className="md:w-1/4">
        <div
          className={`w-48 h-48 rounded-full overflow-hidden border-4 ${theme.border}`}
        >
          <img
            src="src/assets/Display_pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className={`text-2xl font-bold ${theme.text} mt-4`}>Your Name</h1>
        <p className="text-gray-400">Full Stack Developer</p>
        <button className="mt-4 w-full px-4 py-2 bg-github-btn text-white rounded-md hover:bg-opacity-90">
          Follow
        </button>
      </div> */}
      <div className="m-14">
        <LeftComponent />
      </div>

      <Timeline className="my-10" position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2021 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <SchoolRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h5" component="span">
              Under Graduate
            </Typography>
            <Typography>Guru Ghasidas University, Bilaspur</Typography>
            <Typography color="purple" variant="h7">
              Bachelor of Technology<br></br> Electronics And Communications
              Engineering
            </Typography>
            <br></br>
            <Typography color="purple" variant="h7">
              Cgpa - 8.6
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <MenuBookSharpIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              JEE Advanced
            </Typography>
            <Typography>AIR - 27553</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <MenuBookSharpIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Class 12
            </Typography>
            <Typography>Narayana Institutes, Visakhapatnam</Typography>
            <Typography>MPC (98%) </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <AccountBalanceRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Class 10
            </Typography>
            <Typography>St Ann's Convent School</Typography>
            <Typography>ICSE,Delhi (94%) </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
