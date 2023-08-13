import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";

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
    labels: ["Applied-jobs", "Rejected-jobs", "Interviews-jobs"],
    datasets: [
      {
        data: [
          (appliedjobs.length / jobs.length) * 100,
          (rejectedjobs.length / jobs.length) * 100,
          (interviewsjobs.length / jobs.length) * 100,
        ],
        backgroundColor: ["#00C6B0", "#D3567F", "#0085DD"],
        borderColor: ["#00C6B0", "#D3567F", "#0085DD"],
        borderWidth: 1,
      },
    ],
  };
  const options= {
    plugins: { 
    legend: {
      labels: {
        color: "white", 
        font: {
          size: 16
        }
      }
    }
  }
  }
  return (
    <section className="dashboard">
      <h1 className="text-center">Hello {user.username}</h1>
      <div className="container flex justify-center align-center">
        <div className="card flex align-center justify-center row">
          <span>Total jobs: </span>
          <span>{jobs.length}</span>
        </div>
        <div className="card flex align-center justify-center column">
          <span>Total applied jobs : {appliedjobs.length} </span>
          <CircularProgressWithLabel
            value={(appliedjobs.length / jobs.length) * 100}
            style={{ color: "#00C6B0" }}
          />
        </div>
        <div className="card flex align-center justify-center column">
          <span>Total rejected jobs : {rejectedjobs.length} </span>
          <CircularProgressWithLabel
            value={(rejectedjobs.length / jobs.length) * 100}
            style={{ color: "#D3567F" }}
          />
        </div>
        <div className="card flex align-center justify-center column">
          <span>Total interviews jobs : {interviewsjobs.length} </span>
          <CircularProgressWithLabel
            value={(interviewsjobs.length / jobs.length) * 100}
            style={{color:'#0085DD'}}
          />
        </div>
      </div>
      <div className="charts flex align-center justify-center ">
        <Doughnut data={data} options={options}  />
      </div>
    </section>
  );
}
