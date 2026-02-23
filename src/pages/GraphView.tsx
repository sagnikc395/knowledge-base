import React from 'react';

const GraphView: React.FC = () => {
  return (
    <section>
      <h1>Graph View</h1>
      <p>Graph view is coming soon (D3 port in progress).</p>
      <div id="graph-container" style={{ width: '100%', height: '600px', border: '1px solid #eee' }}>
        {/* D3 logic would go here */}
      </div>
    </section>
  );
};

export default GraphView;
