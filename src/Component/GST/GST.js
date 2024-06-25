import React from "react";
import "./GST.css";
import TableComponent from "../UI/Table";

const GST = () => {
  const data = [
    { column1: "GST Registration", column2: "1500" },
    { column1: "GST Return", column2: "12k - 18k" },
    { column1: "GST Reconcliation (GSTR-1, GSTR-2A & GSTR-3B)", column2: "3k" },
    { column1: "GST Annual Return (GSTR-9 & 9C)", column2: "10k" },
    { column1: "GST Refund (Cash & Credit)", column2: "-" },
  ];

  return (
    <div className="GST_Parent">
      <span className="GST_title">Goods and Services Tax (GST)</span>
      <h4 className="GST_subheadings">
        1. Required Documents of GST Registration :-
      </h4>
      <ul>
        <li className="GST_bullet-list">Business Name</li>
        <li className="GST_bullet-list">Nature of Business</li>
        <li className="GST_bullet-list">Photographs of the authorized signatory</li>
        <li className="GST_bullet-list">Copy of Pan Card of Applican</li>
        <li className="GST_bullet-list">Copy of Adhaar Card of Applicant</li>
        <li className="GST_bullet-list">Complete address of Principle Place of Business</li>
        <li className="GST_bullet-list">Electricity Bill for Proof of Business address</li>
        <li className="GST_bullet-list">
          Rent/Lease agreement (If rented), NOC (if consent) for second proof of
          business address
        </li>
        <li className="GST_bullet-list">Cancel cheque</li>
      </ul>
      Note:-
      <li className="GST_bullet-list">
        All Partners KYC in case of Partnership Firm along with Partner Deed
      </li>
      <li className="GST_bullet-list">
        All Directors KYC in case of Company/ LLP along with Company
        Incorporation Certificate
      </li>
      <h4 className="GST_subheadings">2. GST Returns:- </h4>
      <span className="GST_subpoints">a. GST Regular Return includes:- </span>
      <ul>
        <li className="GST_bullet-list">GSTR-1 (Monthly / Quarterly)</li>
        <li className="GST_bullet-list">GSTR-3B (Monthly / Quarterly)</li>
        <li className="GST_bullet-list">GSTR-2A & 2B Reconciliation </li>
        <li className="GST_bullet-list">
          TCS/TDS Return filling (In case of Sales by E-Commerce Operator/ Govt
          Contracts)
        </li>
        <li className="GST_bullet-list">ITC-04 (In case of Job Work)</li>
        <li className="GST_bullet-list">Any Other Returns/ Compliances required by GST Law</li>
      </ul>
      <span className="GST_subpoints">
        b. GST Composition Returns includes:-{" "}
      </span>
      <ul>
        <li className="GST_bullet-list">GSTR-4 (Quarterly)</li>
        <li className="GST_bullet-list">GST Annual Return </li>
      </ul>
      <h4 className="GST_subheadings">
        3. GST Reconciliation (GSTR-1, GSTR-2A & GSTR-3B):-
      </h4>
      <span className="GST_subpoints">
        Here are the key points regarding our GST reconciliation services:
      </span>
      <figure>
        <figcaption>Sales Reconciliation: </figcaption>
        <ul>
          <li className="GST_bullet-list">
            We will check and reconcile your sales data from books with GSTR-1 &
            GSTR-3B.
          </li>
          <li className="GST_bullet-list">
            Our team will verify the GSTIN, GST rate, HSN wise summary, and
            documents summary to ensure accuracy.
          </li>
          <li className="GST_bullet-list">
            We will also check the party-wise GSTIN to ensure correct levy
          </li>
          <li className="GST_bullet-list">
            We will also check the party-wise GSTIN to ensure correct levy
          </li>
        </ul>
        <figcaption>Purchase Reconciliation: </figcaption>
        <ul>
          <li className="GST_bullet-list">
            We will reconcile your purchase data (ITC) from GSTR-3B & GSTR-2A.
          </li>
          <li className="GST_bullet-list">
            Our team will ensure that all ITC claimed by you is correctly
            matched with eligible purchases.
          </li>
          <li className="GST_bullet-list">
            We will check for missing invoices or discrepancies in data and make
            necessary adjustments.
          </li>
          <li className="GST_bullet-list">
            We will verify the GSTIN, GST rate, HSN wise summary, and documents
            summary to ensure accuracy
          </li>
        </ul>
      </figure>
      <span className="GST_para">
        Our goal as a third-party GST reconciliation services provider. Our
        primary objective is to help our clients build confidence in their GST
        returns and mitigate any potential compliance risks.
      </span>
      <h4 className="GST_subheadings">4. GST Annual Return (GSTR-9 & 9C):-</h4>
      <span className="GST_para">
        GST Annual Return is a comprehensive summary of all the transactions
        undertaken by a registered taxpayer during a financial year under the
        Goods and Services Tax (GST) regime. The GST Annual Return consists of
        two parts - GSTR-9 and GSTR-9C. GSTR-9 is a consolidated annual return
        that provides a detailed summary of all the outward and inward supplies
        made and received during the financial year. It includes information
        about the input tax credit (ITC) availed and reversed, taxable supplies
        made, exempt supplies made, and other relevant details. It is required
        to be filed by all regular taxpayers registered under GST, except for
        those registered under the Composition Scheme.
      </span>
      <div className="GST_subpoints"> Who required to File:-</div>
      <span className="GST_para">
        Whose aggregate turnover exceeds Rs. 2 crores during a financial year
        Due Date:- 31st December after end of relevant Financial year GSTR-9C is
        a reconciliation statement that is required to be filed along with
        GSTR-9 by taxpayers whose aggregate turnover exceeds Rs. 5 crores during
        a financial year. It includes a Self certified reconciliation statement,
        which reconciles the figures declared in the annual return with the
        audited annual financial statements of the taxpayer. It helps to ensure
        that the figures declared in the GSTR-9 are accurate and free from any
        discrepancies. It is essential to file the GST Annual Return accurately
        and within the specified due date to avoid any penalties or legal
        consequences.
      </span>
      <h4 className="GST_subheadings">5. GST Refund (Cash & Credit):-</h4>
      <span className="GST_para">
        We help eligible taxpayers claim their GST refunds by ensuring
        compliance with the GST law. We verify your eligibility for a refund,
        prepare the necessary documents, and file them accurately within the due
        date. Our goal is to help you receive your eligible GST refund smoothly
        and quickly.
      </span>
      <br />
      <br />
      <br />
      <h3 className="GST_subheading">Charges for Our Services</h3>
      <TableComponent data={data} />
    </div>
  );
};

export default GST;
