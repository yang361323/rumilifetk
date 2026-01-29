export default function Index() {
  return (
    <s-page heading="Rumilife Information">
      <s-button slot="primary-action">Edit</s-button>

      <s-heading>Store</s-heading>
      <s-section>
        <s-paragraph>
          <s-text>Rumilife</s-text>
        </s-paragraph>
        {/* <s-paragraph> */}
        <s-unordered-list>
          <s-list-item>
            <s-link href="https://rumilifeshop.com/" target="_blank">
              Visit the website
            </s-link>
          </s-list-item>
        </s-unordered-list>
        {/* </s-paragraph> */}
      </s-section>

      <s-heading>Seller Information</s-heading>
      <s-section>
        <s-paragraph>
          <s-text>Business Name: </s-text>
          <s-link href="https://rumilifeshop.com/" target="_blank">
            RUMI ONLINE INC.
          </s-link>
        </s-paragraph>
        <s-paragraph>
          <s-text>Business Address: </s-text>
          <s-link href="https://rumilifeshop.com/" target="_blank">
            686 Grand AVE Richfield, NJ 07657
          </s-link>
        </s-paragraph>
        <s-paragraph>
          <s-text>Tax: </s-text>
          <s-link
            href="http://www.nj.gov/treasury/taxation/prntsale.shtml"
            target="_blank"
          >
            N.J. State Sales Tax
          </s-link>
        </s-paragraph>
      </s-section>

      <s-section>
        <s-grid
          gridTemplateColumns="repeat(24, 1fr)"
          gap="small"
          justifyContent="center"
          alignItems="center"
        >
          <s-grid-item gridColumn="span 23">
            <s-text>Shipping Policies</s-text>
          </s-grid-item>
          <s-grid-item >
            <s-icon type="arrow-down-circle" tone="auto" />
          </s-grid-item>
        </s-grid>
        <s-divider />

        <s-grid
          gridTemplateColumns="repeat(24, 1fr)"
          gap="small"
          justifyContent="center"
          alignItems="center"
        >
          <s-grid-item gridColumn="span 23">
            <s-text>Other Policies</s-text>
          </s-grid-item>
          <s-grid-item >
            <s-icon type="arrow-down-circle" tone="auto" />
          </s-grid-item>
        </s-grid>
        <s-divider />

        <s-grid
          gridTemplateColumns="repeat(24, 1fr)"
          gap="small"
          justifyContent="center"
          alignItems="center"
        >
          <s-grid-item gridColumn="span 23">
            <s-text>Help</s-text>
          </s-grid-item>
          <s-grid-item >
            <s-icon type="arrow-down-circle" tone="auto" />
          </s-grid-item>
        </s-grid>
        <s-divider />
      </s-section>
    </s-page>
  );
}
