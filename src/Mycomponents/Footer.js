import React from "react";
// import './footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-6">
            <h5>Todo List</h5>
            <p className="mb-0">
              Manage your daily tasks easily and stay organized.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <h5>Quick Links</h5>
            <a href="/" className="text-light text-decoration-none me-3">
              Home
            </a>
            <a href="/about" className="text-light text-decoration-none">
              About
            </a>
          </div>

        </div>

        <hr />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">
            © 2026 Todo List. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;