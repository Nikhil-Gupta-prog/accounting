import React from "react";
import "./BusinessRegistration.css"
import TableComponent from "../UI/Table";

const BusinessRegistration = () => {

  const data = [
    { column1: "Company Registration", column2: "12000" },
    { column1: "Company  Annual Filling", column2: "10000" },
    { column1: "LLP Registration ", column2: "10000" },
    { column1: "LLP Annual Filling", column2: "5000" },
    { column1: "All other ROC Compliances", column2: "-" },
  ];

  return (
    <div className="BR_parent">
      <span className="BR_title"> Business Registration</span>
      <h3 className="BR_heading"> MSME (Udhyam Adhaar) Registration</h3>
      <span className="BR_subheading">Documents for MSME Registration</span>
      <ul>
        <li className="BR_bullet-point" >Pan Card</li>
        <li className="BR_bullet-point">Adhaar Card</li>
        <li className="BR_bullet-point">GST Certificate (If registered)</li>
        <li className="BR_bullet-point">Mobile Number Adhaar Linked</li>
        <li className="BR_bullet-point">E-mail Id</li>
        <li className="BR_bullet-point">Nature of business</li>
        <li className="BR_bullet-point">Address of Place of business</li>
        <li className="BR_bullet-point">Firm Name</li>
      </ul>

      <h3 className="BR_heading">BRN Registration</h3>
      <span className="BR_subheading">Documents for BRN Registration</span>
      <ul>
        <li className="BR_bullet-point">Pan Card</li>
        <li className="BR_bullet-point">Adhaar Card</li>
        <li className="BR_bullet-point">GST Certificate (If registered)</li>
        <li className="BR_bullet-point">Mobile Number Adhaar Linked</li>
        <li className="BR_bullet-point">E-mail Id</li>
        <li className="BR_bullet-point">Nature of business</li>
        <li className="BR_bullet-point">Address of Place of business</li>
        <li className="BR_bullet-point">Firm Name</li>
        <li className="BR_bullet-point">Photo</li>
        <li className="BR_bullet-point">Scanned sign on White paper</li>
      </ul>
      <h3 className="BR_heading">Firm Registration</h3>
      <span className="BR_subheading">Documents required for Partnership registration</span>
      <ul>
        <li className="BR_bullet-point">All Partner’s PAN Card</li>
        <li className="BR_bullet-point">Nature of business</li>
        <li className="BR_bullet-point">Address of Place of business</li>
        <li className="BR_bullet-point">Firm Name</li>
        <li className="BR_bullet-point">Photo</li>
        <li className="BR_bullet-point">Profit loss sharing ratio</li>
        <li className="BR_bullet-point">Firm seal</li>
        <li className="BR_bullet-point">Electricity bill</li>
      </ul>
      <h3 className="BR_heading">Import Export Code Registration</h3>
      <span className="BR_subheading">Documents required for Partnership Registration</span>
      <ul>
        <li className="BR_bullet-point">Pan Card</li>
        <li className="BR_bullet-point">Adhaar Card</li>
        <li className="BR_bullet-point">GST Certificate</li>
        <li className="BR_bullet-point">Mobile Number Adhaar Linked</li>
        <li className="BR_bullet-point">E-mail Id</li>
        <li className="BR_bullet-point">Cancelled Cheque of Firm Name</li>
      </ul>
      <h3 className="BR_heading"> GEM Registration </h3>
      <p>
        GEM registration, which stands for Government e-Marketplace
        registration, is a mandatory requirement for businesses interested in
        participating in online procurement of goods and services by the
        government. GEM is an online platform that facilitates procurement of
        goods and services by various government departments, organizations, and
        public sector units (PSUs) in India. By registering on the GEM platform,
        businesses can access a wide range of procurement opportunities offered
        by the government. This includes tenders, reverse auctions, and direct
        purchase options. Businesses can also use the platform to showcase their
        products and services, interact with government buyers, and access
        information on upcoming procurement opportunities. GEM registration is
        particularly beneficial for small and medium enterprises (SMEs) as it
        offers them an equal opportunity to participate in government
        procurement alongside larger firms. It also helps streamline the
        procurement process, making it easier and more transparent for
        businesses to participate. To register on the GEM platform, businesses
        must meet certain eligibility criteria, including having a valid PAN and
        GST registration. The registration process involves filling out an
        online application form and submitting relevant documents for
        verification. Overall, GEM registration offers a great opportunity for
        businesses to access government procurement opportunities, expand their
        customer base, and grow their business.
      </p>
      <br />
      <br />
      <br />
      <h3 className="BR_heading">Charges for Our Services</h3>
      <TableComponent data={data} />

    </div>
  );
};
export default BusinessRegistration;
