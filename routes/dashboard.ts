import * as express from "express";
const dashboard = express.Router();
import faker from "faker";

dashboard.get("/users/quantity", (req, res) => {
  const labels: Array<string> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  res.statusCode = 200;
  res.json({
    labels: labels,
    datasets: [
      {
        label: "Users",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  });
});

dashboard.get("/orders/by-product", (req: any, res) => {
  res.statusCode = 200;
  res.json({
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });
  dashboard.get("/categories/best"),
    (req: any, res: any) => {
      res.statusCode = 200;
      res.json({
        labels: [
          "Thing 1",
          "Thing 2",
          "Thing 3",
          "Thing 4",
          "Thing 5",
          "Thing 6",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [2, 9, 3, 5, 2, 3],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      });
    };
});

export { dashboard };
