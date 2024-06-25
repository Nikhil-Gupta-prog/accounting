import React from "react";
import "./Accounting.css";
import TableComponent from "../UI/Table";

const Accounting = () => {
  const data = [
    { column1: "Accounting Work", column2: "-" },
    { column1: "Accounting Supervision", column2: "-" }
  ];
  return (
    <div className="Accounting_parent">
      <span className="Accounting_title"> Accounting</span>
      <h3 className="Accounting_subheading">Accounting Services under CA Supervision</h3>
      <p className="Accounting_description">
        Welcome to Jaipur Accounting Services Pvt Ltd! We provide customized
        accounting and taxation solutions for individuals, small businesses, and
        corporations. With our team of skilled professionals, including a
        Chartered Accountant, you can trust us to handle your finances
        accurately and in compliance with regulations. Let us help you achieve
        success with personalized service tailored to your unique needs.
      </p>
      <span className="Accounting_subheading-2">Here's what we provide: -</span>
      <ul>
        <li className="Accounting_bullet-list">
          We maintain accounting records in Tally software and provide
          accounting services on a daily, weekly, or monthly basis, depending on
          your requirements.
        </li>
        <li className="Accounting_bullet-list">
          We prepare books with inventory and without inventory, as per your
          specific needs.
        </li>
        <li className="Accounting_bullet-list">
          We offer a range of accounting services to ensure compliance with
          various regulatory requirements, including GST, TDS, Income Tax, and
          Business Loan books.
        </li>
      </ul>
      <span className="Accounting_subheading-2">
        Here are the advantages of choosing Jaipur Accounting Services Pvt Ltd
      </span>
      <ul>
        <li className="Accounting_bullet-list">
          You'll receive complimentary accounting and other law-related
          consultancy from our CA.
        </li>
        <li className="Accounting_bullet-list">
          Your books will be maintained under CA supervision, ensuring accuracy
          and compliance
        </li>
        <li className="Accounting_bullet-list">
          You can rely on us for all your tax compliance needs, saving you time
          and resources.
        </li>
        <li className="Accounting_bullet-list">
          With us taking care of your accounting and compliance needs, you can
          focus on growing your business.
        </li>
      </ul>

      <h3 className="Accounting_subheading">Accounting Supervision by Chartered Accountant</h3>
      <span className="Accounting_subheading-2">	Are you struggling with accounting compliance and worried about incorrect financial reporting? </span>
      <p >Our CA-supervised accounting supervision service ensures accurate and compliant financial reporting, preventing any issues related to regulatory non-compliance.</p>

      <span className="Accounting_subheading-2"> Want to ensure that all accounting compliances are being properly taken care of?  </span>
      <p >Our accounting supervision service fills the gap between limited accountant knowledge and time constraints of tax auditors, ensuring proper compliance.</p>

      <span className="Accounting_subheading-2">Are you covered under audit but want periodic checks to ensure proper compliance?  </span>
      <p >Our accounting supervision service provides regular checks to ensure compliance with necessary regulations.</p>

      <span className="Accounting_subheading-2">What can we do for you?  </span>
      <p >Our accounting supervision service includes ensuring timely TDS and GST compliance, checking Income Tax compliance, ensuring compliance with ESI & EPF regulations, preparing detailed debtor and creditor lists, and other required work.</p>

      <span className="Accounting_subheading-2">	Why choose us?  </span>
      <p >We offer a demo supervision service for you to try out and build trust with our services. With our CA-supervised accounting supervision, you can trust that your accounting needs are in good hands.</p>

      <span className="Accounting_note">If you're still unsure about our services, we offer a <strong>FREE DEMO SUPERVISION</strong> so you can see for yourself the quality of our work. With Jaipur Accounting Services, you can trust that you'll receive top-quality accounting services that are tailored to meet your unique business needs.</span>
      <br />
      <br />
      <br />
      <h3 className="Accounting_subheading">Charges for Our Services</h3>
      <TableComponent data={data} />
    </div>
  );
};

export default Accounting;
