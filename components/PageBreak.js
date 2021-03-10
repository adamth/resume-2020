import React from 'react';

const PageBreak = () => (
  <div className="page-break">
    <style jsx>
      {`
        @media print {
          .page-break {
            page-break-after: always;
          }
        }
      `}
    </style>
  </div>
);

export default PageBreak;
