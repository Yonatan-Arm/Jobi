import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  const { user } = useSelector(({ userModule }) => userModule);
  const jobs = user.jobs;
  const appliedjobs = jobs.filter((job) => job.status === "applied");
  const rejectedjobs = jobs.filter((job) => job.status === "rejected");
  const interviewsjobs = jobs.filter((job) => job.status === "interviews");

  const data = {
    labels: ["appliedjobs", "rejectedjobs", "interviewsjobs"],
    datasets: [
      {
        data: [(appliedjobs.length / jobs.length) * 100, (rejectedjobs.length / jobs.length) * 100, (interviewsjobs.length / jobs.length) * 100],
        backgroundColor: [
          "#07ca07",
          "red",
          "blue",
        ],
        borderColor: [
          "#07ca07",
          "red",
          "blue",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <section className="dashboard">
      <div className="container flex row wrap">
        <div className="card flex align-center justify-center column">
          <span>Total jobs: </span>
          <span>{jobs.length}</span>
        </div>
        <div className="card flex align-center justify-center column">
          <span>Total applied jobs: </span>
          <span>{appliedjobs.length}</span>
          <CircularProgressWithLabel
            value={(appliedjobs.length / jobs.length) * 100}
            style={{ color: "#07ca07" }}
          />
        </div>
        <div className="card flex align-center justify-center column">
          <span>Total rejected jobs: </span>
          <span>{rejectedjobs.length}</span>
          <CircularProgressWithLabel
            value={(rejectedjobs.length / jobs.length) * 100}
            style={{ color: "red" }}
          />
        </div>
        <div className="card flex align-center justify-center column">
          <span>Total interviews jobs: </span>
          <span>{interviewsjobs.length}</span>
          <CircularProgressWithLabel
            value={(interviewsjobs.length / jobs.length) * 100}
          />
        </div>
      </div>
      <div className="charts flex align-center justify-center ">
      <Doughnut data={data} />
      </div>
    </section>
  );
}
