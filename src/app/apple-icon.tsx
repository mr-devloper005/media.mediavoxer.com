import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: '#0d2233',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Orange glow */}
        <div
          style={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: '#F96E2A',
            opacity: 0.15,
            filter: 'blur(30px)',
          }}
        />
        {/* Blue glow */}
        <div
          style={{
            position: 'absolute',
            bottom: -10,
            left: -10,
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: '#78B3CE',
            opacity: 0.15,
            filter: 'blur(24px)',
          }}
        />

        {/* Newspaper body */}
        <div
          style={{
            position: 'absolute',
            left: 38,
            top: 30,
            width: 104,
            height: 128,
            borderRadius: 14,
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Orange header */}
          <div
            style={{
              width: '100%',
              height: 38,
              borderRadius: '14px 14px 0 0',
              background: '#F96E2A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Live dot */}
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'white' }} />
          </div>
          {/* Content lines */}
          <div style={{ padding: '12px 14px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ width: '100%', height: 8, borderRadius: 4, background: '#C9E6F0' }} />
            <div style={{ width: '75%', height: 8, borderRadius: 4, background: '#C9E6F0' }} />
            <div style={{ width: '100%', height: 8, borderRadius: 4, background: '#C9E6F0' }} />
            <div style={{ width: '60%', height: 8, borderRadius: 4, background: '#C9E6F0' }} />
          </div>
        </div>

        {/* Left signal arc */}
        <div
          style={{
            position: 'absolute',
            left: 18,
            top: 55,
            width: 18,
            height: 40,
            borderLeft: '5px solid #78B3CE',
            borderTop: '5px solid #78B3CE',
            borderRadius: '14px 0 0 0',
            opacity: 0.8,
          }}
        />
        {/* Right signal arc */}
        <div
          style={{
            position: 'absolute',
            right: 18,
            top: 55,
            width: 18,
            height: 40,
            borderRight: '5px solid #78B3CE',
            borderTop: '5px solid #78B3CE',
            borderRadius: '0 14px 0 0',
            opacity: 0.8,
          }}
        />

        {/* Bottom orange accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            left: 38,
            width: 104,
            height: 8,
            borderRadius: 4,
            background: '#F96E2A',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
