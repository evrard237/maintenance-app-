import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function Secureroutes() {
  const [secure, setSecure] = useState(true);
  let val = true;
  return val ? <Outlet /> : <Navigate to={"/login"} />;
}

export default Secureroutes;
