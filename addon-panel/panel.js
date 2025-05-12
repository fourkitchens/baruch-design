import React from 'react';
import { useParameter } from '@storybook/manager-api';
import FourKitchensLogo from './assets/fourKitchensLogo';

export const Panel = ({ active }) => {
  const clickupData = useParameter('clickup', {});
  const { ticket, url } = clickupData;

  if (!active) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
      {ticket && url ? (
        <div style={{ padding: '16px' }}>
          {ticket && (
            <div style={{ marginBottom: '8px' }}>
              <strong>Ticket:</strong> {ticket}
            </div>
          )}
          {url && (
            <div>
              <strong>URL:</strong>{' '}
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'var(--link-color, #0066cc)',
                  '@media (prefers-color-scheme: dark)': {
                    '--link-color': '#66b3ff'
                  }
                }}
              >
                {url}
              </a>
            </div>
          )}
        </div>
      ) : (
        <div style={{ padding: '16px' }}>
          No Clickup information available for this story.
        </div>
      )}
      <FourKitchensLogo width={250} height={100} />
    </div>
  );
}; 