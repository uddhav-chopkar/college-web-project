import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
const DashBoard = () => {
  const [enquiryData, setEnquiryData] = useState([]);

  const enquiry = async () => {
    let url = "http://localhost:7898/user/allenquiries";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setEnquiryData(data);
  };

  useEffect(() => {
    enquiry();
  }, []);

  return (
    <>
      <div className="dashboard">
        <h1 className="dashboardheading">welcome back admin</h1>
        <h2 className="allenquiries">All Enquiry Data</h2>
        {enquiryData.map((en, i) => {
          return (
            <>
              <div className="datacard">
                <div className=" studentinquiry srno">{i + 1}</div>
                <div className=" studentinquiry studentName">{en.name}</div>
                <div className=" studentinquiry studentemail">{en.email}</div>
                <div className=" studentinquiry studentmobile">{en.number}</div>
                <div className=" studentinquiry studentCourse">{en.cour}</div>
                <button className="delete">delete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DashBoard;
