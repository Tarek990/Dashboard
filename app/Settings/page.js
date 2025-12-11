"use client";

export default function Settings() {
  return (
    <div className="settings-page">
      {/* Header */}
      <div className="settings-header">
        <h2>Settings</h2>
        <p>Customize your account and system preferences</p>
      </div>

      {/* Grid */}
      <div className="settings-grid">

        {/* Account */}
        <div className="settings-box">
          <h3>Account Info</h3>

          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <button className="settings-btn">Save Info</button>
        </div>

        {/* Security */}
        <div className="settings-box">
          <h3>Security</h3>

          <div className="input-group">
            <label>New Password</label>
            <input type="password" placeholder="********" />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="********" />
          </div>

          <button className="settings-btn">Update Password</button>
        </div>

        {/* Preferences */}
        <div className="settings-box">
          <h3>Preferences</h3>

          <div className="toggle-item">
            <span>Enable Notifications</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>

          <div className="toggle-item">
            <span>Dark Mode</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}
