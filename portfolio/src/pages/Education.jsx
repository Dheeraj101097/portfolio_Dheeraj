import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import { useTheme } from "../context/ThemeContext";
import LeftComponent from "../components/LeftComponent";
import { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export default function CustomizedTimeline() {
  const [count, setCount] = useState();
  const theme = useTheme();
  useEffect(() => {
    setCount(localStorage.getItem("Likecount", count));
  }, []);
  const theme2 = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row items-start">
        <LeftComponent />
        <div className=" mx-auto max-w-7xl ">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="teal"
              >
                2021 - Present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.light" }} />
                <TimelineDot color="secondary">
                  <SchoolRoundedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant=""
                  color="blue"
                  className="text-xl"
                  component="span"
                >
                  Under Graduate
                </Typography>
                <br></br>
                <Typography color="grey" variant="" className={`text-sm`}>
                  Guru Ghasidas University, Bilaspur
                </Typography>
                <br></br>
                <Typography
                  variant=""
                  color=""
                  className={`text-xs text-opacity-70`}
                >
                  Bachelor of Technology<br></br> Electronics And Communications
                  Engineering
                </Typography>
                <br></br>
                <Typography color="lightblue" variant="" className={`text-sm `}>
                  CGPA - 8.6
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="teal"
              >
                2021
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <MenuBookSharpIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.light" }} />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant=""
                  color="orange"
                  className="text-xl"
                  component="span"
                >
                  JEE Advanced
                </Typography>
                <br />
                <Typography color="lightblue" variant="" className={`text-sm `}>
                  AIR - 27553
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="teal"
              >
                2019
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.light" }} />
                <TimelineDot color="primary" variant="outlined">
                  <MenuBookSharpIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant=""
                  color="blue"
                  className="text-xl"
                  component="span"
                >
                  Class 12
                </Typography>
                <br />
                <Typography color="grey" variant="" className={`text-sm`}>
                  Narayana Institutes, Visakhapatnam
                </Typography>
                <br />
                <Typography color="lightblue" variant="" className={`text-sm `}>
                  MPC (98%)
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="teal"
              >
                2019 - 2007
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary" }} />
                <TimelineDot color="secondary">
                  <AccountBalanceRoundedIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.light" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant=""
                  color="orange"
                  className="text-xl"
                  component="span"
                >
                  Class 10
                </Typography>
                <br />
                <Typography color="grey" variant="" className={`text-sm`}>
                  St Ann's Convent School
                </Typography>
                <br />
                <Typography color="lightblue" variant="" className={`text-sm `}>
                  ICSE (94%)
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
