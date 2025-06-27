import React from 'react';
import Header from '../Header/header';

export default function Dashboard() {

  type DashboardCardProps = {
    title: String,
    content: String,
  }

  const DashboardCard: React.FC<DashboardCardProps> = ({ title, content }) => {
    return (
      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 w-80 h-80 flex flex-col  hover:bg-neutral-200 hover:bg-opacity-50 dark:hover:bg-neutral-600">
        <h3 className="font-medium transition-opacity duration-200 whitespace-nowrap text-neutral-950 dark:text-neutral-50 mb-2 text-center">{title}</h3>
        <div className="h-40 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded flex-1">
          <p className="text-neutral-900 dark:text-neutral-50 text-xs">{content}</p>
        </div>
      </div>
    )
  }

  return (
    <>
    <Header title={"Dashboard"} />
      <div className="flex flex-wrap gap-4 p-6">
      <DashboardCard title={"Total Users"}  content={"User statistics chart will appear here"}/>
      <DashboardCard title={"Sales Overview"} content={"Sales data chart will appear here"} />
      <DashboardCard title={"Sales Distribution"}  content={"Sales distribution chart will appear here"} />
      <DashboardCard title={"Top Categories"}  content={"Category distribution chart will appear here"} />
      <DashboardCard title={"Recent Orders"} content={"Recent orders chart will appear here"} />
      <DashboardCard title={"Others"} content={"Others"} />
      <DashboardCard title={"Others"} content={"Others"} />
      <DashboardCard title={"Others"} content={"Others"} />
      <DashboardCard title={"Others"} content={"Others"} />
      <DashboardCard title={"Others"} content={"Others"} />
      <DashboardCard title={"Others"} content={"Others"} />
    </div>
    </>
  );
};