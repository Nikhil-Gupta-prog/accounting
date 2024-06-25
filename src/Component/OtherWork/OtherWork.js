import React from "react";
import "./OtherWork.css"
import TableComponent from "../UI/Table";


const OtherWork = () => {
  const data = [
    { column1: "Project Report", column2: "7500" },
    { column1: "Projected Balance Sheet", column2: "2000" },
    { column1: "CMA Data  ", column2: "2500" },
    { column1: "MSME Registration", column2: "500" },
    { column1: "PAN Card", column2: "Free" },
    { column1: "TAN Registration", column2: "Free" },
    { column1: "Digital signature Certificare (DSC)", column2: "750" },
    { column1: "Firm Registration", column2: "4000" }, 
    { column1: "Import Export Code Registration", column2: "1500" }, 
    { column1: "ESI & EPF", column2: "-" }, 
    { column1: "Creditors defaulter case", column2: "-" }, 
    { column1: "Gem Registration", column2: "2000" }, 
  ];
  return (
    <div className="OtherWork_parent">
      <span className="OtherWork_title">Other Work</span>
      <h3 className="OtherWork_subheadings">Recovery of Bad Debts</h3>
      <p className="OtherWork_description">
        We, as a service provider, offer assistance to businesses facing unpaid
        dues from their customers or clients under the MSME Law. Our services
        help MSMEs recover bad debts, enabling them to maintain a healthy cash
        flow and focus on growing their operations. <br />
        The MSME Law provides various mechanisms for recovering bad debts,
        including legal remedies and out-of-court settlements, which we can help
        you navigate. Our team of experts can guide you through the process,
        ensuring that you take timely and effective action to recover the debt
        owed to you. <br />
        By availing of our services, you can benefit from our expertise and
        experience in dealing with bad debts. We understand the challenges faced
        by MSMEs and can tailor our services to meet your specific needs. Our
        aim is to help you recover your dues and minimize the impact of bad
        debts on your business. <br />
        <span className="OtherWork_notes">
          If you are an MSME struggling with unpaid bills, contact us today to
          learn how we can help you recover your bad debts under the MSME Law
        </span>
      </p>

      <h3 className="OtherWork_subheadings">Government Subsidy Loan</h3>
      <p className="OtherWork_description">
      We offer a range of services to support new and existing businesses, including government subsidy benefits for capital and interest. These subsidies can be a significant boost for eligible businesses looking to start or expand their operations. <br />
      Our team of experts can help you navigate the complex process of applying for and accessing government subsidies, ensuring that you receive the maximum benefit available to you. We have extensive knowledge of the various schemes and programs offered by the government, and can guide you through the application process, from eligibility assessment to documentation and submission. <br />
      The capital subsidy benefit can provide financial assistance to eligible businesses for purchasing new equipment, machinery, or other fixed assets. This can be particularly helpful for businesses looking to upgrade their operations and increase their productivity. <br />
      The interest subsidy benefit can provide a reduction in the interest rate on loans taken by eligible businesses for a specified period. This can help reduce the cost of borrowing, making it easier for businesses to access much-needed capital for their operations. <br />
      Our goal is to help eligible businesses take advantage of these government subsidy benefits to start or expand their operations, creating new opportunities for growth and development. Contact us today to learn more about how we can help you access these subsidies and take your business to the next level. <br />
      </p>
      <h3 className="OtherWork_subheadings">Projected Balance Sheet</h3>
        <span className="OtherWork_notes">Mainly required for CC/OD Limit (New/ renewal) / Term Loan</span>
        <p className="OtherWork_notes">Required Information:-</p>
        <ul>
            <li className="OtherWork_bullet-list">Basic information about Business</li>
            <li className="OtherWork_bullet-list">Last year Actual Financials</li>
            <li className="OtherWork_bullet-list">Repayment schedule of All Term Loan</li>
            <li className="OtherWork_bullet-list">Currently CC Limit availed/ Proposed CC limit Amount</li>
            <li className="OtherWork_bullet-list">Prepare of 3 Years</li>
        </ul>

      <h3 className="OtherWork_subheadings">CMA Data</h3>
      <span className="OtherWork_notes">Mainly required for CC/OD Limit (New/ renewal) / Term Loan</span>
      <p className="OtherWork_notes">Required Information:-</p>
      <ul>
            <li className="OtherWork_bullet-list">Basic information about Business</li>
            <li className="OtherWork_bullet-list">Last year Actual Financials</li>
            <li className="OtherWork_bullet-list">Repayment schedule of All Term Loan</li>
            <li className="OtherWork_bullet-list">Currently CC Limit availed/ Proposed CC limit Amount</li>
            <li className="OtherWork_bullet-list">Prepare of 5 Years or more</li>
        </ul>
      <h3 className="OtherWork_subheadings">Digital signature Certificate (DSC)</h3>
      <span className="OtherWork_notes">Required documents:-</span>
      <ul>
            <li className="OtherWork_bullet-list">Pan Card Copy</li>
            <li className="OtherWork_bullet-list">Aadhar Card Copy</li>
            <li className="OtherWork_bullet-list">Photo</li>
            <li className="OtherWork_bullet-list">Mobile Number</li>
            <li className="OtherWork_bullet-list">Email Id</li>
        </ul>
      <h3 className="OtherWork_subheadings">Project Report</h3>
        <span>This is depend upon case to case basis.</span>
        <br />
      <br />
      <br />
      <h3 className="OtherWork_subheadings">Charges for Our Services</h3>
      <TableComponent data={data} />
      
    </div>
  );
};

export default OtherWork;
