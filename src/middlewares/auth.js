const express = require("express");

const app = express();

const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorised = token === "xyz";

  console.log("admin auth called");

  if (!isAdminAuthorised) {
    res.status(401).send("Admin unauthorised");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorised = token === "xyz";

  console.log("user auth called");

  if (!isAdminAuthorised) {
    res.status(401).send("User unauthorised");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
