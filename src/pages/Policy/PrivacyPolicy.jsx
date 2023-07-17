import React from "react";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy">
      <h1>Privacy policy</h1>
      <p>
        At www.apronsnlove.com, we value the privacy of our users and are
        committed to protecting it. This Privacy Policy outlines how we collect,
        use, and safeguard your personal information when you use our website.
        By accessing or using our website, you agree to the terms of this
        Privacy Policy.
      </p>
      <br />
      <section>
        <h2>01. Information We Collect</h2>
        <br />
        <div className="item">
          <span>1.1 Personal Information: </span>
          <p>
            When you visit our website or make a purchase, we may collect
            personal information such as your name, email address, shipping
            address, billing address, phone number, and payment details. We
            collect this information to process your orders and provide a
            personalized experience.
          </p>
          <br />
          <span>1.2 Log Data:</span>
          <p>
            Like many websites, we collect log data that includes your IP
            address, browser type, internet service provider, referring/exit
            pages, date/time stamps, and clickstream data. We use this
            information to analyze trends, administer the site, track user
            movement, and gather demographic information.
          </p>
          <br />
          <span>1.3 Cookies:</span>
          <p>
            We use cookies and similar tracking technologies to enhance your
            browsing experience and customize our website. Cookies are small
            text files stored on your device that help us remember your
            preferences and optimize our website's performance.
          </p>
        </div>
      </section>

      <section>
        <h2>02. Information Sharing</h2>
        <br />
        <div className="item">
          <span>2.1 Third-Party Service Providers: </span>
          <br />
          <p>
            We may share your personal information with trusted third-party
            service providers who help us operate our website, conduct business
            functions, or provide services on our behalf (e.g., payment
            processors, shipping companies)
          </p>
          <br />
          <span>2.2 Compliance with the Law: </span>
          <p>
            We may disclose your information if required by law, regulation,
            legal process, or government request.
          </p>
          <br />
          <span>2.3 Business Transfers:</span>
          <p>
            In the event of a merger, acquisition, or sale of all or a portion
            of our business assets, your information may be transferred as part
            of the transaction.
          </p>
        </div>
      </section>

      <section>
        <h2>03. How We Use Your Information</h2>
        <br />
        <div className="item">
          <span>3.1 Order Processing:</span>
          <br />
          <p>
            We use your personal information to process and fulfill your orders,
            including shipping, billing, and customer service.
          </p>
          <br />
          <span>3.2 Personalization: </span>
          <p>
            We may use your information to personalize your experience, such as
            recommending products or providing targeted advertisements.
          </p>
          <br />
          <span>3.3 Communication:</span>
          <p>
            We may send you emails or other notifications regarding your orders,
            promotions, or updates about our website. You can opt-out of these
            communications at any time.
          </p>
          <br />
          <span>3.4 Analytics: </span>
          <p>
            We analyze the data we collect to improve our website, enhance user
            experience, and optimize our marketing strategies.
          </p>
          <br />
          <span>3.5 Legal Compliance:</span>
          <p>
            We may use your information to comply with applicable laws,
            regulations, legal processes, or enforceable governmental requests.
          </p>
        </div>
      </section>

      <section>
        <h2>04. Data Security</h2>
        <br />
        <div className="item">
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, please note that no method of transmission
            over the internet or electronic storage is 100% secure, and we
            cannot guarantee absolute security.
          </p>
        </div>
      </section>

      <section>
        <h2>05. Your Choices</h2>
        <br />
        <div className="item">
          <p>
            You have the right to access, update, or delete your personal
            information. You can manage your preferences by logging into your
            account or contacting us directly. You can also choose to disable
            cookies through your browser settings, although this may affect your
            browsing experience.
          </p>
        </div>
      </section>

      <section>
        <h2>06. Children's Privacy</h2>
        <br />
        <div className="item">
          <p>
            Our website is not intended for individuals under the age of 16. We
            do not knowingly collect personal information from children. If you
            believe we have inadvertently collected information from a child,
            please contact us, and we will promptly remove the information.
          </p>
        </div>
      </section>

      <section>
        <h2>07. Changes to the Privacy Policy</h2>
        <br />
        <div className="item">
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be effective immediately upon posting the
            revised policy on our website. We encourage you to review this
            Privacy Policy periodically for any updates.
          </p>
        </div>
      </section>

      <section>
        <h2>08. Contact Us</h2>
        <br />
        <div className="item">
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our privacy practices, please contact us at
            [insert contact information].
            <br />
            <br />
            This Privacy Policy applies solely to information collected by our
            website and does not cover information collected offline or through
            other channels.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
