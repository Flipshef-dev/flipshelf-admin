import React from 'react';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 p-6">
      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 w-80 h-80 flex flex-col  hover:bg-neutral-200 hover:bg-opacity-50 dark:hover:bg-neutral-600">
     

        <h3 className="font-medium transition-opacity duration-200 whitespace-nowrap text-neutral-950 dark:text-neutral-50 mb-2 text-center">Total Users</h3>
        <div className="h-40 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded flex-1">
          <p className="text-neutral-900 dark:text-neutral-50 text-xs">User statistics chart will appear here</p>
        </div>
      </div>

    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 w-80 h-80 flex flex-col  hover:bg-neutral-200 hover:bg-opacity-50 dark:hover:bg-neutral-600">
        <h3 className="font-medium transition-opacity duration-200 whitespace-nowrap text-black-950 dark:text-neutral-50 mb-2 text-center">Sales Overview</h3>
        <div className="h-40 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded flex-1">
          <p className="text-neutral-900 dark:text-neutral-50 text-xs">Sales data chart will appear here</p>
        </div>
      </div>
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 w-80 h-80 flex flex-col  hover:bg-neutral-200 hover:bg-opacity-50 dark:hover:bg-neutral-600">
  <h3 className="font-medium transition-opacity duration-200 whitespace-nowrap text-black-950 dark:text-neutral-50 mb-2 text-center">Sales Distribution</h3>
  <div className="h-40 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded flex-1">
    <p className="text-neutral-900 dark:text-neutral-50 text-xs">Sales distribution chart will appear here</p>
  </div>
</div>

      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 w-80 h-80 flex flex-col  hover:bg-neutral-200 hover:bg-opacity-50 dark:hover:bg-neutral-600">
        <h3 className="font-medium transition-opacity duration-200 whitespace-nowrap text-black-950 dark:text-neutral-50 mb-2 text-center">Top Categories</h3>
        <div className="h-40 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded flex-1">
          <p className="text-neutral-900 dark:text-neutral-50 text-xs">Category distribution chart will appear here</p>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 w-80 h-80 flex flex-col  hover:bg-neutral-200 hover:bg-opacity-50 dark:hover:bg-neutral-600">
        <h3 className="font-medium transition-opacity duration-200 whitespace-nowrap text-black-950 dark:text-neutral-50 mb-2 text-center">Recent Orders</h3>
        <div className="h-40 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded flex-1">
          <p className="text-neutral-900 dark:text-neutral-50 text-xs">Recent orders chart will appear here</p>
        </div>
      </div>
    </div>
    );
  };