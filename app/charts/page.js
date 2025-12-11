"use client";

export default function Charts() {
  return (
    <div className="charts-page">

      <h1 className="main-title">Analytics & Charts Dashboard</h1>
      <p className="sub-title">
        Here you can track website activity, user behavior, sales growth, and server performance.
      </p>

      {/* Charts Grid */}
      <div className="charts-grid">

        {/* LINE CHART */}
        <div className="chart-card">
          <h3 className="chart-title">Visitors Last Week</h3>
          <p className="chart-desc">This chart shows how visitors increased over the last 7 days.</p>

          <svg width="100%" height="180">
            <polyline
              fill="none"
              stroke="#4F8CF7"
              strokeWidth="4"
              points="30,130 80,90 130,70 180,85 230,50 280,75 330,55"
            />
          </svg>
        </div>

        {/* BAR CHART */}
        <div className="chart-card">
          <h3 className="chart-title">Sales Overview</h3>
          <p className="chart-desc">Monthly product sales comparison.</p>

          <div className="bars">
            <div className="bar" style={{ height: "40%" }}></div>
            <div className="bar" style={{ height: "80%" }}></div>
            <div className="bar" style={{ height: "55%" }}></div>
            <div className="bar" style={{ height: "70%" }}></div>
            <div className="bar" style={{ height: "30%" }}></div>
            <div className="bar" style={{ height: "60%" }}></div>
          </div>
        </div>

        {/* CIRCLE PROGRESS */}
        <div className="chart-card">
          <h3 className="chart-title">Server Usage</h3>
          <p className="chart-desc">Current load on the hosting server.</p>

          <div className="circle-container">
            <svg width="180" height="180">
              <circle
                cx="90"
                cy="90"
                r="70"
                stroke="#444"
                strokeWidth="15"
                fill="none"
              />
              <circle
                cx="90"
                cy="90"
                r="70"
                stroke="#4F8CF7"
                strokeWidth="15"
                fill="none"
                strokeDasharray="440"
                strokeDashoffset="160"
                strokeLinecap="round"
              />
            </svg>
            <p className="percent">65%</p>
          </div>
        </div>

      </div>

      {/* EXTRA LISTS SECTION */}
<div className="lists-section">

  {/* LATEST USERS */}
  <div className="list-card">
    <h3>Latest Users</h3>
    <ul>
      <li>Tarek Eltohamy — Admin</li>
      <li>Ahmed Ali — User</li>
      <li>Hager Ahmed — User</li>
      <li>Mohamed Samir — User</li>
    </ul>
  </div>

  {/* RECENT ORDERS */}
  <div className="list-card">
    <h3>Recent Orders</h3>
    <ul>
      <li>Order #1020 — Completed</li>
      <li>Order #1019 — Pending</li>
      <li>Order #1018 — Canceled</li>
      <li>Order #1017 — Completed</li>
    </ul>
  </div>

  {/* TOP PRODUCTS */}
  <div className="list-card">
    <h3>Top Selling Products</h3>
    <ul>
      <li>Gaming Chair — 120 sales</li>
      <li>Bluetooth Headset — 95 sales</li>
      <li>Smart Watch — 88 sales</li>
      <li>Mechanical Keyboard — 60 sales</li>
    </ul>
  </div>

</div>


    </div>
  );
}
