import Header from "../components/Header";
import DefinitionItems from "../components/DefinitionItems";
import Footer from "../components/Footer";
import styles from "./TermsAndConditionsPage.module.css";

const TermsAndConditionsPage = () => {
  return (
    <div className={styles.termsandconditionspage}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.termsAndConditions}>Terms and Conditions</h1>
      </div>
      <main className={styles.definitions}>
        <div className={styles.lilylambKidsWeContainer}>
          <p className={styles.welcomeToYour}>
            Welcome to [Your Gift Card Website]. These terms and conditions
            outline the rules and regulations for the use of our website and the
            purchase and use of our gift cards.
          </p>
          <p className={styles.byAccessingThis}>
            By accessing this website and purchasing our gift cards, you accept
            these terms and conditions in full. Do not continue to use [Your
            Gift Card Website] if you do not accept all of the terms and
            conditions stated on this page.
          </p>
        </div>
        <div className={styles.definitionItems}>
          <h1 className={styles.definitions1}>
            <ol className={styles.definitions2}>
              <li>Definitions</li>
            </ol>
          </h1>
          <div className={styles.definitionDescriptions}>
            <div className={styles.definitionList}>
              <h3 className={styles.giftCard}>1.1 Gift Card</h3>
              <div className={styles.aGiftCard}>
                A gift card is a prepaid stored-value money card issued by [Your
                Company] that can be used to purchase goods or services from
                participating merchants. It represents a monetary value
                equivalent to the amount loaded onto it and can be redeemed only
                at the specified merchants.
              </div>
            </div>
            <div className={styles.definitionAttributes}>
              <h3 className={styles.website}>1.2 Website</h3>
              <div className={styles.theWebsiteOwned}>
                The website owned and operated by [Your Company], located at
                [website URL], serves as the platform for purchasing and
                managing gift cards. The website includes all web pages,
                subdomains, and subparts of the site, and provides information,
                services, and functionalities related to our gift cards.
              </div>
            </div>
            <div className={styles.definitionTypes}>
              <div className={styles.user}>1.3 User</div>
              <div className={styles.anyIndividualOr}>
                Any individual or entity who accesses the website or purchases
                or uses a gift card is considered a user. This includes both
                registered and non-registered users, whether they purchase the
                gift card for themselves or receive it as a gift.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.definitionItems1}>
          <h1 className={styles.generalProvisions}>
            <ol className={styles.generalProvisions1}>
              <li>General Provisions</li>
            </ol>
          </h1>
          <div className={styles.frameParent}>
            <div className={styles.acceptanceOfTermsParent}>
              <h3 className={styles.acceptanceOfTerms}>
                2.1 Acceptance of Terms
              </h3>
              <div className={styles.byAccessingAnd}>
                By accessing and using our website and purchasing our gift
                cards, you agree to be bound by these terms and conditions, as
                well as any other applicable laws and regulations. This
                agreement constitutes a legally binding contract between you and
                [Your Company].
              </div>
            </div>
            <div className={styles.modificationsToTermsParent}>
              <h3 className={styles.modificationsToTerms}>
                2.2 Modifications to Terms
              </h3>
              <div className={styles.yourCompanyReserves}>
                [Your Company] reserves the right to amend these terms and
                conditions at any time without prior notice. Any changes will be
                posted on this page and will take effect immediately upon
                posting. It is your responsibility to review these terms and
                conditions periodically. Continued use of the website or gift
                cards after any such changes shall constitute your consent to
                such changes.
              </div>
            </div>
            <div className={styles.governingLawParent}>
              <h3 className={styles.governingLaw}>2.3 Governing Law</h3>
              <div className={styles.theseTermsAnd}>
                These terms and conditions are governed by and construed in
                accordance with the laws of [Your Jurisdiction]. Any disputes
                arising out of or relating to these terms and conditions or the
                use of the website or gift cards will be subject to the
                exclusive jurisdiction of the courts of [Your Jurisdiction].
              </div>
            </div>
          </div>
        </div>
        <div className={styles.giftCardUse}>
          <h1 className={styles.useOfGiftContainer}>
            <ol className={styles.useOfGiftCards}>
              <li> Use of Gift Cards</li>
            </ol>
          </h1>
          <div className={styles.redemptionItems}>
            <div className={styles.redemptionOptions}>
              <h3 className={styles.redemption}>3.1 Redemption</h3>
              <div className={styles.giftCardsCan}>
                Gift cards can be redeemed at participating merchants listed on
                our website. The list of participating merchants may change from
                time to time without notice. Users should check the website for
                the most current list of participating merchants before
                attempting to use their gift cards.
              </div>
            </div>
            <div className={styles.redemptionOptions1}>
              <h3 className={styles.nonTransferable}>3.2 Non-Transferable</h3>
              <div className={styles.giftCardsAre}>
                Gift cards are non-transferable and can only be used by the
                person to whom they were issued or the person who legitimately
                received them as a gift. They cannot be resold, transferred for
                value, or exchanged for cash, except where required by law.
              </div>
            </div>
            <div className={styles.redemptionOptions2}>
              <h3 className={styles.noCashRedemption}>
                3.3 No Cash Redemption
              </h3>
              <div className={styles.giftCardsAre1}>
                Gift cards are not redeemable for cash and cannot be returned
                for a cash refund, except where required by law. Any attempt to
                redeem a gift card for cash is strictly prohibited and may
                result in the deactivation of the gift card.
              </div>
            </div>
            <div className={styles.redemptionOptions3}>
              <h3 className={styles.expiration}>3.4 Expiration</h3>
              <div className={styles.giftCardsDo}>
                Gift cards do not expire. However, [Your Company] reserves the
                right to change this policy in the future with reasonable notice
                to users. Any changes to the expiration policy will be clearly
                communicated on our website and through other appropriate
                channels.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.purchaseOptions}>
          <h1 className={styles.purchaseOfGiftContainer}>
            <ol className={styles.purchaseOfGiftCards}>
              <li>Purchase of Gift Cards</li>
            </ol>
          </h1>
          <div className={styles.purchaseChannels}>
            <div className={styles.purchaseChannelItems}>
              <h3 className={styles.purchasingChannels}>
                4.1 Purchasing Channels
              </h3>
              <div className={styles.giftCardsCan1}>
                Gift cards can be purchased on our website and at authorized
                retailers. When purchasing online, users must follow the
                instructions provided on the website and provide accurate and
                complete information.
              </div>
            </div>
            <div className={styles.purchaseChannelItems1}>
              <h3 className={styles.loadAmounts}>4.2 Load Amounts</h3>
              <div className={styles.theMinimumAnd}>
                The minimum and maximum amounts that can be loaded onto a gift
                card are determined by [Your Company] and are subject to change.
                The current load limits are specified on our website. Users must
                ensure that they do not exceed the maximum load limit when
                purchasing or reloading a gift card.
              </div>
            </div>
            <div className={styles.purchaseChannelItems2}>
              <h3 className={styles.paymentMethods}>4.3 Payment Methods</h3>
              <div className={styles.acceptedPaymentMethods}>
                Accepted payment methods for purchasing gift cards include
                credit cards, debit cards, and other payment options as
                specified on our website. All transactions are subject to
                authorization and fraud checks. [Your Company] reserves the
                right to decline any purchase at its discretion.
              </div>
            </div>
            <div className={styles.purchaseChannelItems3}>
              <h3 className={styles.confirmation}>4.4 Confirmation</h3>
              <div className={styles.uponSuccessfulCompletion}>
                Upon successful completion of a gift card purchase, users will
                receive a confirmation email with the details of the purchase.
                This email serves as proof of purchase and should be retained
                for future reference. In case of any discrepancies, users should
                contact customer support immediately.
              </div>
            </div>
            <div className={styles.purchaseChannelItems4}>
              <h3 className={styles.usageRestrictions}>
                4.5 Usage Restrictions
              </h3>
              <div className={styles.giftCardsCannot}>
                Gift cards cannot be used for illegal activities, including but
                not limited to the purchase of illegal goods or services. Any
                such use will result in the immediate deactivation of the gift
                card and may be reported to the appropriate authorities.
              </div>
            </div>
          </div>
        </div>
        <DefinitionItems
          lostOrStolenGiftCards="Lost or Stolen Gift Cards"
          responsibility="5.1 Responsibility"
          yourCompanyIsNotResponsib="[Your Company] is not responsible for lost or stolen gift cards. Lost or stolen cards will not be replaced or refunded. Users should treat their gift cards like cash and take appropriate measures to safeguard them."
          safeguarding="5.2 Safeguarding"
          usersShouldKeepTheirGiftC="Users should keep their gift cards in a safe place and not share the card number or security code with anyone. If a gift card is lost or stolen, users should report it immediately to customer support, although replacement or refund cannot be guaranteed."
        />
        <DefinitionItems
          lostOrStolenGiftCards="Refunds and Returns"
          responsibility="6.1 No Cash Refunds"
          yourCompanyIsNotResponsib="Gift cards cannot be returned or exchanged for cash, except as required by law. Once purchased, all sales of gift cards are final. Users should ensure that they understand this policy before making a purchase."
          safeguarding="6.2 Merchant Returns"
          usersShouldKeepTheirGiftC="If a product purchased with a gift card is returned, the return will be processed according to the return policy of the merchant where the purchase was made. Users should contact the merchant directly for any issues related to returns and exchanges."
        />
        <DefinitionItems
          lostOrStolenGiftCards="User Responsibilities"
          responsibility="7.1 Compliance"
          yourCompanyIsNotResponsib="Users must use the gift cards and website in compliance with all applicable laws and regulations. Any use of the gift cards or website that violates these terms and conditions or any applicable law is strictly prohibited."
          safeguarding="7.2 Prohibited Uses"
          usersShouldKeepTheirGiftC="Users must not use the website or gift cards for any unlawful or prohibited purpose. Prohibited uses include, but are not limited to, fraud, money laundering, and the purchase of illegal goods or services. Any such use will result in the immediate deactivation of the gift card and may be reported to the appropriate authorities."
        />
        <DefinitionItems
          lostOrStolenGiftCards="Privacy"
          responsibility="8.1 Data Collection"
          yourCompanyIsNotResponsib="[Your Company] is committed to protecting your privacy. Our [Privacy Policy] outlines how we collect, use, and protect your personal information. By using our website and purchasing our gift cards, you consent to the collection and use of your information as outlined in our [Privacy Policy]."
          safeguarding="8.2 Consent"
          usersShouldKeepTheirGiftC="By using our website and purchasing our gift cards, you consent to the collection and use of your information as outlined in our [Privacy Policy]. If you do not agree with our Privacy Policy, you should not use our website or purchase our gift cards."
        />
        <DefinitionItems
          lostOrStolenGiftCards="Limitation of Liability"
          responsibility="9.1 Indirect Damages"
          yourCompanyIsNotResponsib="[Your Company] is not responsible for any indirect, incidental, or consequential damages arising from the use or inability to use the gift cards or website. This includes, but is not limited to, damages for loss of profits, business interruption, or loss of data."
          safeguarding="9.2 Maximum Liability"
          usersShouldKeepTheirGiftC="[Your Company]'s liability for any claim related to the purchase or use of a gift card is limited to the amount of the gift card. In no event shall [Your Company]'s total liability to you for all damages, losses, and causes of action exceed the amount paid by you for the gift card."
        />
        <DefinitionItems
          lostOrStolenGiftCards="Amendments"
          responsibility="10.1 Right to Amend"
          yourCompanyIsNotResponsib="[Your Company] reserves the right to amend these terms and conditions at any time. Any changes will be posted on this page and will take effect immediately upon posting. Users should review these terms and conditions periodically to ensure that they are aware of any changes."
          safeguarding="10.2 User Responsibility"
          usersShouldKeepTheirGiftC="It is the user's responsibility to review these terms and conditions periodically. Continued use of the website or gift cards after any such changes shall constitute your consent to such changes. If you do not agree with the amended terms and conditions, you should not use the website or purchase gift cards."
        />
        <div className={styles.jurisdictionContainer}>
          <h1 className={styles.governingLaw1}>
            <ol className={styles.governingLaw2}>
              <li>Governing Law</li>
            </ol>
          </h1>
          <div className={styles.contactWrapper}>
            <div className={styles.contact}>
              <h3 className={styles.jurisdiction}>11.1 Jurisdiction</h3>
              <div className={styles.theseTermsAnd1}>
                These terms and conditions are governed by and construed in
                accordance with the laws of [Your Jurisdiction]. Any disputes
                arising out of or relating to these terms and conditions or the
                use of the website or gift cards will be subject to the
                exclusive jurisdiction of the courts of [Your Jurisdiction].
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerContent}>
          <h1 className={styles.contactInformation}>
            <ol className={styles.contactInformation1}>
              <li>Contact Information</li>
            </ol>
          </h1>
          <div className={styles.footerLogoContainer}>
            <div className={styles.ifYouHaveContainer}>
              <p className={styles.ifYouHave}>
                If you have any questions about these Terms or our services,
                please contact us at:
              </p>
              <p
                className={styles.brandnameCustomerSupport}
              >{`BrandName, Customer Support `}</p>
              <p
                className={styles.emailSupportbrandnamecom}
              >{`Email: support@brandname.com `}</p>
              <p
                className={styles.phone18001234567}
              >{`Phone: +1-800-123-4567 `}</p>
              <p className={styles.address123Main}>
                Address: 123 Main Street, Suite 456, City, Country, ZIP Code
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.byUsingBrandnames}>
                By using BrandName's services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and
                Conditions.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer linkF3b1db0fEb9f4b0a89f74="/link--f3b1db0feb9f4b0a89f74d955239e7a2png@2x.png" />
    </div>
  );
};

export default TermsAndConditionsPage;
