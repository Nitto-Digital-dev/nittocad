import React from 'react'
import styles, { layout } from "../style";

const TermsServices = () => {
  return (
    <section id="terms" className={`${layout.section}`}>
    <div className={`${styles.sectionInfo} ${styles.flexStart} flex-col`}>
      <h2 className={styles.heading2}>
        Terms and Services
      </h2>
      <p className={`${styles.paragraph} max-w-[850px] mt-3`}>
        Welcome to Nitto. Please read these terms and services carefully before using our services. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access our services.
      </p>
      <h3 className={`${styles.heading3} mt-5`}>
        1. General Terms
      </h3>
      <p className={`${styles.paragraph} max-w-[850px] mt-2`}>
        These terms apply to all users of the service. Additional terms or requirements may apply for specific services, which will be made available with those services.
      </p>
      <h3 className={`${styles.heading3} mt-5`}>
        2. Accounts
      </h3>
      <p className={`${styles.paragraph} max-w-[850px] mt-2`}>
        When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your account and any activities under it.
      </p>
      <h3 className={`${styles.heading3} mt-5`}>
        3. Services
      </h3>
      <p className={`${styles.paragraph} max-w-[850px] mt-2`}>
        We reserve the right to modify or discontinue our services at any time without prior notice. We are not liable for any modification, suspension, or discontinuation of the services.
      </p>
      <h3 className={`${styles.heading3} mt-5`}>
        4. User Conduct
      </h3>
      <p className={`${styles.paragraph} max-w-[850px] mt-2`}>
        Users are expected to use our services responsibly and not to engage in any illegal or prohibited activities. Any violation may result in termination of your access to our services.
      </p>
      <h3 className={`${styles.heading3} mt-5`}>
        5. Limitation of Liability
      </h3>
      <p className={`${styles.paragraph} max-w-[850px] mt-2`}>
        To the fullest extent permitted by law, Nitto is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.
      </p>
      <h3 className={`${styles.heading3} mt-5`}>
        6. Changes to Terms
      </h3>
      <p className={`${styles.paragraph} max-w-[850px] mt-2`}>
        We may update our terms and services from time to time. We will notify you of any changes by posting the new terms on this page.
      </p>
      <p className={`${styles.paragraph} max-w-[850px] mt-5`}>
        By continuing to use our services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using our services.
      </p>
    </div>
  </section>
  )
}

export default TermsServices
