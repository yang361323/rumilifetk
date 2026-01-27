
export default function RumilifePage() {
  return (
    <s-page heading="Rumilife">
      <s-box>
        <s-grid gridTemplateColumns="repeat(4, 1fr)">
          <s-date-field defaultView="2025-09" defaultValue="2025-09-01" />
          <s-date-field defaultView="2025-09" defaultValue="2025-09-01" />
        </s-grid>
      </s-box>

      {/* total layout */}
      <s-grid
        gridTemplateColumns="repeat(4, 1fr)"
        gap="small"
        justifyContent="center"
      >
        <s-section heading="Total Money">17654258.63</s-section>
        <s-section heading="total number">5692359</s-section>
        <s-section heading="person Money">59.36</s-section>
        <s-section heading="person number">12.56</s-section>
      </s-grid>

      {/* table content */}
      <s-section heading="">
        <s-table>
          <s-table-header-row>
            <s-table-header listSlot="primary">Puzzle</s-table-header>
            <s-table-header format="numeric">Pieces</s-table-header>
            <s-table-header>Created</s-table-header>
            <s-table-header listSlot="secondary">Status</s-table-header>
          </s-table-header-row>
          <s-table-body>
            <s-table-row clickDelegate="mountain-view-checkbox">
              <s-table-cell>
                <s-stack direction="inline" gap="small" alignItems="center">
                  <s-checkbox id="mountain-view-checkbox" />
                  <s-clickable
                    href=""
                    accessibilityLabel="Mountain View puzzle thumbnail"
                    border="base"
                    borderRadius="base"
                    overflow="hidden"
                    inlineSize="40px"
                    blockSize="40px"
                  >
                    <s-image
                      objectFit="cover"
                      src="https://picsum.photos/id/29/80/80"
                    />
                  </s-clickable>
                  <s-link href="">Mountain View</s-link>
                </s-stack>
              </s-table-cell>
              <s-table-cell>16</s-table-cell>
              <s-table-cell>Today</s-table-cell>
              <s-table-cell>
                <s-badge color="base" tone="success">
                  Active
                </s-badge>
              </s-table-cell>
            </s-table-row>
            <s-table-row clickDelegate="ocean-sunset-checkbox">
              <s-table-cell>
                <s-stack direction="inline" gap="small" alignItems="center">
                  <s-checkbox id="ocean-sunset-checkbox" />
                  <s-clickable
                    href=""
                    accessibilityLabel="Ocean Sunset puzzle thumbnail"
                    border="base"
                    borderRadius="base"
                    overflow="hidden"
                    inlineSize="40px"
                    blockSize="40px"
                  >
                    <s-image
                      objectFit="cover"
                      src="https://picsum.photos/id/12/80/80"
                    />
                  </s-clickable>
                  <s-link href="">Ocean Sunset</s-link>
                </s-stack>
              </s-table-cell>
              <s-table-cell>9</s-table-cell>
              <s-table-cell>Yesterday</s-table-cell>
              <s-table-cell>
                <s-badge color="base" tone="success">
                  Active
                </s-badge>
              </s-table-cell>
            </s-table-row>
            <s-table-row clickDelegate="forest-animals-checkbox">
              <s-table-cell>
                <s-stack direction="inline" gap="small" alignItems="center">
                  <s-checkbox id="forest-animals-checkbox" />
                  <s-clickable
                    href=""
                    accessibilityLabel="Forest Animals puzzle thumbnail"
                    border="base"
                    borderRadius="base"
                    overflow="hidden"
                    inlineSize="40px"
                    blockSize="40px"
                  >
                    <s-image
                      objectFit="cover"
                      src="https://picsum.photos/id/324/80/80"
                    />
                  </s-clickable>
                  <s-link href="">Forest Animals</s-link>
                </s-stack>
              </s-table-cell>
              <s-table-cell>25</s-table-cell>
              <s-table-cell>Last week</s-table-cell>
              <s-table-cell>
                <s-badge color="base" tone="neutral">
                  Draft
                </s-badge>
              </s-table-cell>
            </s-table-row>
          </s-table-body>
        </s-table>
      </s-section>
    </s-page>
  );
}
