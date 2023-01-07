import { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import useSWR from "swr";
import { Bar, Pie, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const col = {
  width: "50%",
  float: "left",
  boxSizing: "border-box",
  padding: "5px",
  color: "#555",
};
const item = {
  width: "100%",
  background: "#ede7ed",
  height: "200px",
  color: "#1323",
};

const input = {
  padding: "5px",
  fontSize: "1em",
};

export const optionsUsersQuantity = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Users by Months",
    },
  },
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectDate, setSelectDate] = useState("7");
  const { data: dataUsersQuantity } = useSWR(
    `http://localhost:3000/dashboard/users/quantity?start_date=${startDate}&end_date=${endDate}&select_date=${selectDate}`,
    fetcher
  );
  const { data: ordersByProduct } = useSWR(
    `http://localhost:3000/dashboard/orders/by-product?start_date=${startDate}&end_date=${endDate}&select_date=${selectDate}`,
    fetcher
  );
  const { data: dataCategories } = useSWR(
    `http://localhost:3000/dashboard/categories/best?start_date=${startDate}&end_date=${endDate}&select_date=${selectDate}`,
    fetcher
  );

  useEffect(() => {
    if (selectDate !== "custom") {
      setStartDate("");
      setEndDate("");
    }
  }, [selectDate]);

  useEffect(() => {
    setTimeout(() => {
      setId(2);
    }, 5000);
  });
  return (
    <div className={"container-fluid"}>
      <div
        style={{
          display: "block",
          textAlign: "right",
          padding: "15px",
          boxSizing: "border-box",
        }}
      >
        {/* {data?.key}
        <button onClick={mutate}>Mutação</button> */}
        <input
          disabled={selectDate !== "custom"}
          value={startDate}
          type="date"
          style={input}
          max={endDate !== "" ? endDate : moment().format("YYYY-MM-DD")}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          min={startDate !== "" ? startDate : null}
          max={moment().format("YYYY-MM-DD")}
          disabled={selectDate !== "custom"}
          value={endDate}
          type="date"
          style={input}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <select style={input} onChange={(e) => setSelectDate(e.target.value)}>
          <option value="all">Opções</option>
          <option value="custom">Customizado</option>
          <option value="7">7 dias</option>
          <option value="15">15 dias</option>
          <option value="30">1 mês</option>
          <option value="180">6 meses</option>
          <option value="365">1 ano</option>
        </select>
      </div>
      {dataUsersQuantity ? (
        <div style={col}>
          <div style={item}>
            <Bar options={optionsUsersQuantity} data={dataUsersQuantity} />
          </div>
        </div>
      ) : (
        "Não há dados para esse Dashboard."
      )}
      <div style={col}>
        <div style={item}>
          {ordersByProduct ? (
            <Pie
              width={300}
              height={300}
              options={{
                maintainAspectRatio: false,
              }}
              data={ordersByProduct}
            />
          ) : (
            "Não há dados para esse Dashboard."
          )}
        </div>
      </div>
      <div
        style={{
          ...col,
          width: "100%",
        }}
      >
        <div style={item}>
          {dataCategories ? (
            <Radar
              width={400}
              height={400}
              data={dataCategories}
              options={{
                maintainAspectRatio: false,
              }}
            />
          ) : (
            "Não há dados para esse dashboard."
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
