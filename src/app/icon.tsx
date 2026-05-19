import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: '#0d2233',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Orange glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -6,
            right: -6,
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#F96E2A',
            opacity: 0.3,
            filter: 'blur(6px)',
          }}
        />
        {/* Newspaper body */}
        <div
          style={{
            position: 'absolute',
            left: 7,
            top: 6,
            width: 18,
            height: 22,
            borderRadius: 3,
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Orange header bar */}
          <div
            style={{
              width: '100%',
              height: 7,
              borderRadius: '3px 3px 0 0',
              background: '#F96E2A',
            }}
          />
          {/* Content lines */}
          <div style={{ padding: '3px 3px 0', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ width: '100%', height: 2, borderRadius: 1, background: '#C9E6F0' }} />
            <div style={{ width: '75%', height: 2, borderRadius: 1, background: '#C9E6F0' }} />
            <div style={{ width: '100%', height: 2, borderRadius: 1, background: '#C9E6F0' }} />
          </div>
        </div>
        {/* Left signal arc */}
        <div
          style={{
            position: 'absolute',
            left: 3,
            top: 10,
            width: 4,
            height: 8,
            borderLeft: '1.5px solid #78B3CE',
            borderTop: '1.5px solid #78B3CE',
            borderRadius: '4px 0 0 0',
            opacity: 0.8,
          }}
        />
        {/* Right signal arc */}
        <div
          style={{
            position: 'absolute',
            right: 3,
            top: 10,
            width: 4,
            height: 8,
            borderRight: '1.5px solid #78B3CE',
            borderTop: '1.5px solid #78B3CE',
            borderRadius: '0 4px 0 0',
            opacity: 0.8,
          }}
        />
        {/* Bottom orange bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 2,
            left: 7,
            width: 18,
            height: 2.5,
            borderRadius: 1.5,
            background: '#F96E2A',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
