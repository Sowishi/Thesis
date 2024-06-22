import { Button } from "flowbite-react";
import ThesisChart from "../../components/thesisChart";
import AdminLayout from "../../layout/adminLayout";
import { HiAdjustments } from "react-icons/hi";
import ThesisDrawer from "../../components/thesisDrawer";
import { useState } from "react";

const Dashboard = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Number of burrowed books",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const doughnutData = {
    labels: ["Harry Potter", "February", "March"],
    datasets: [
      {
        label: "Number of burrowed books",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80],
      },
    ],
  };

  return (
    <AdminLayout>
      <ThesisDrawer
        isOpen={openFilter}
        handleClose={() => setOpenFilter(false)}
      />
      <div className="container min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="wrapper md:col-span-2 flex justify-between items-center">
          <h1 className="text-6xl text-white mt-3 font-bold">Dashboard</h1>
          <Button
            gradientDuoTone="greenToBlue"
            onClick={() => setOpenFilter(true)}
          >
            Filter Date
            <HiAdjustments className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div
          style={{ height: 430 }}
          className="wrapper flex justify-center items-center border border-red-500"
        >
          <ThesisChart type={"line"} data={lineData} />
        </div>
        <div
          style={{ height: 430 }}
          className="wrapper flex justify-center items-center border border-red-500"
        >
          <ThesisChart type={"doughnut"} data={doughnutData} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
