import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function NotFoundpage() {
  let navigatetohome = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigatetohome("/", { replace: true });
    }, 3000);
  }, [navigatetohome]);
  return (
    <div>
      <h1>Not found</h1>
    </div>
  );
}

export default NotFoundpage;
