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
import { useState, useEffect } from "react";

export default function CustomizedTimeline() {
  const [count, setCount] = useState();
  const theme = useTheme();
  useEffect(() => {
    setCount(localStorage.getItem("Likecount", count));
  }, []);
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row items-start">
        <LeftComponent />

        <Timeline className="" position="alternate">
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
    </div>
  );
}
