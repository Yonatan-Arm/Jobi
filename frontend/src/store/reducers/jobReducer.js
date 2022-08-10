const INITIAL_STATE = {
    jobs: [],

};

export function jobReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.jobs,
      };


    case "ADD_JOB":
      return {
        ...state,
        jobs: [...state.jobs, action.jobs],
      };

    case "REMOVE_JOB":
      return {
        ...state,
        jobs: state.jobs.filter(
          (job) => job._id !== action.jobId
        ),
      };

    default:
      return state;
  }
}
