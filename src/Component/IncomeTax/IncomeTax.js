import React from "react";
import "./IncomeTax.css";
import TableComponent from "../UI/Table";


const IncomeTax = () => {
  const data = [
    { column1: "Income Tax return", column2: "1k - 2.5k" },
    { column1: "Income Tax Planning Consultancy", column2: "500" },
    { column1: "Form 15CA -15CB ", column2: "-" },
    { column1: "TDS Return", column2: "4k" },
    { column1: "TDS Other Compliances", column2: "-" },
  ];
  return (
    <div className="Income_Tax_parent">
      <span className="Income_Tax_title">Income Tax</span>
      <h3 className="Income_Tax_subheading">Introduction</h3>
      <p className="Income_Tax_description">
        In India, there are two types of taxes one is direct tax which is
        directly levied upon the income of the individual and another is
        indirect tax which is levied indirectly upon an individual. Example of
        direct tax is income tax and of indirect tax is Goods and Services Tax,
        service tax etc. <br />
        Every individual who receives income in India is subject to income tax
        under the Income Tax Act, 1961. Under Income Tax Act there can be income
        from 5 different heads which are Income from salary, house property,
        capital gains, business and profession and other sources.Income of
        individuals, Hindu undivided family, association of person, body of
        individuals firms and companies are taxed under the Income tax act.
      </p>

      <h3 className="Income_Tax_subheading">What is Income Tax eFiling ?</h3>
      <p className="Income_Tax_description">
        Income Tax can be filed by the two way i.e is the Online Method and
        another offline Method. Now as per the Government Instructions all the
        income tax return will be filed only through ITR eFiling Method. Offline
        Method is not available.
      </p>
      <h3 className="Income_Tax_subheading"> So in the following cases, ITR Online eFiling is Mandatory From 1stApril 2022 –
      </h3>
      <ul>
        <li className="bullet-list"> if your taxable income is more than 2.5 lakh Rupees in a year</li>
        <li className="bullet-list">if your want to claim any TDS Refund</li>
        <li className="bullet-list">if you want to take the benefits of carry forward of the losses</li>
        <li className="bullet-list">if foregin travel expenses is more than 2 lakh rupees in a year</li>
        <li className="bullet-list">if electricity bill expenses more than 1 lakh rupees in a year</li>
        <li className="bullet-list">if total business sales or turnover more than 60 lakh rupees in a year</li>
        <li className="bullet-list">if you have TDS more than 25000 rupees in a year. </li>
      </ul>

      <h3 className="Income_Tax_subheading">Documents required for ITR</h3>
      <ul>
        <li className="bullet-list">Pan Card Copy</li>
        <li className="bullet-list">Adhaar Card Copy</li>
        <li className="bullet-list">All Bank Statements of relevant Financial year</li>
        <li className="bullet-list">Nature of Income (Documents if any) :- Form 16, GST Returns/ books (if maintain)</li>
        <li className="bullet-list">Capital gain statement (if)</li>
        <li className="bullet-list">Any Other Income e.g. Interest income, Dividend income, Rental Income etc.</li>
        <li className="bullet-list">Deductions certificate:- LIC, Tax Saver Mutual Fund, Home loan Interest Certificate, PPF, Tuition Fees, Health Insurance, Term Insurance, Donation U/s 80G and any other deductions.</li>
      </ul>
      <h3 className="Income_Tax_subheading">TDS Compliances</h3>
      <ul>
        <li  className="bullet-list">TDS return filling (Form 24Q, 26Q, 27EQ) </li>
        <li  className="bullet-list">Deposit of TDS</li>
        <li  className="bullet-list">Generate form 16 & 16A</li>
        <li  className="bullet-list">Filling form 26QB in case of Purchase of property</li>
      </ul>
      <br />
      <br />
      <br />
      <h3 className="Income_Tax_subheading">Charges for Our Services</h3>
      <TableComponent data={data} />

    </div>
  );
};

export default IncomeTax;
