export const commonConstants = {
  defaultImg:
    "http://localhost:3000/default.jpg",
};

export const onErrorLoadingImg = (event) => {
  event.target.src = commonConstants.defaultImg;
};
