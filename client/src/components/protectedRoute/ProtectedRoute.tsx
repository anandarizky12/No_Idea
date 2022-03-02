import React, { Component } from "react";
import { Navigate, Route } from "react-router-dom";
import { getCookie } from "../../utils/utils";

export default function ProtectedRoute({ Component, redirectTo }: any) {
  let isAuthenticated = getCookie("token");

  return isAuthenticated ? Component : <Navigate to={redirectTo} />;
}
