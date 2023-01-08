import * as express from "express";
const dashboard = express.Router();
import ReportCategoryController from "../controllers/ReportCategoryController";
import ReportProductController from "../controllers/ReportProductController";
import ReportUserController from "../controllers/ReportUserController";
import moment from "moment";

dashboard.get("/users/quantity", async (req, res) => {
  const reportUserCtrl = new ReportUserController();
  const result = await reportUserCtrl.get(req.query);
  const data = result.map((r: any) => r.sum);
  let labels: any = result.map((r: any) => moment(r._id).format("DD/MM/YYYY"));

  res.statusCode = 200;
  res.json({
    labels,
    datasets: [
      {
        label: "Users",
        data,
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  });
});

dashboard.get("/orders/by-product", async (req: any, res) => {
  const productCtrl = new ReportProductController();
  const result = await productCtrl.get(req.query);

  const data = result.map((r: any) => r.sum);
  const labels = result.map((r: any) => moment(r._id).format("DD/MM/YYYY"));

  res.statusCode = 200;
  res.json({
    labels,
    datasets: [
      {
        label: "Products",
        data,
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

  dashboard.get("/categories/best-sellers", async (req: any, res) => {
    const categoryCtrl = new ReportCategoryController();
    const result = await categoryCtrl.get(req.query);

    const data = result.map((r: any) => r.sum);
    const labels = result.map((r: any) => r._id);

    res.statusCode = 200;
    res.json({
      labels,
      datasets: [
        {
          label: "Best Sellers Categories",
          data,
          backgroundColor: "rgba(255,99,132,0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    });
  });
});

export { dashboard };
