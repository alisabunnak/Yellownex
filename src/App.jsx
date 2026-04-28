import { userProfile, postsData } from "./data/mockData.js";
import SuggestedPeople from "./Components/SuggestedPeople.jsx";
import Navbar from "./Components/Nav-bar.jsx";

function App() {
  return (
    /* 1. Container หลัก: บังคับพื้นหลังดำและกินพื้นที่เต็มหน้าจอ */
    <div style={{
      backgroundColor: '#000',
      minHeight: '100vh',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column', // บังคับให้ Nav อยู่บน แล้ว Content อยู่ล่าง
      margin: 0,
      padding: 0
    }}>

      {/* 2. NAVIGATION BAR: ใช้ Component ที่สร้างไว้ */}
      <Navbar />

      {/* 3. MAIN CONTENT: ส่วนที่แบ่งเป็น 3 คอลัมน์ */}
      <div style={{
        display: 'flex',
        maxWidth: '1200px',
        width: '100%',
        margin: '24px auto',
        padding: '0 20px',
        gap: '24px',
        alignItems: 'flex-start', // ป้องกัน Sidebar ยืดตัวตาม Feed
        boxSizing: 'border-box'
      }}>

        {/* คอลัมน์ซ้าย: Profile Summary */}
        <aside style={{ width: '250px', flexShrink: 0 }} className="hidden md:block">
          <div style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            border: '1px solid #333',
            overflow: 'hidden'
          }}>
            <div style={{ height: '60px', background: 'linear-gradient(to right, #2563eb, #9333ea)' }}></div>
            <div style={{ textAlign: 'center', padding: '16px', marginTop: '-40px' }}>
              <img
                src={userProfile.avatar}
                alt="avatar"
                style={{ width: '64px', height: '64px', borderRadius: '50%', border: '4px solid #1a1a1a' }}
              />
              <h3 style={{ margin: '8px 0 4px', fontSize: '16px' }}>{userProfile.name}</h3>
              <p style={{ fontSize: '11px', color: '#9ca3af', lineHeight: '1.4' }}>{userProfile.headline}</p>
            </div>
            <div style={{ borderTop: '1px solid #333', padding: '12px', fontSize: '12px', color: '#9ca3af' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>การเชื่อมต่อ</span>
                <span style={{ color: '#3b82f6' }}>{userProfile.connections}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* คอลัมน์กลาง: Feed & Start Post */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0 }}>

          {/* Start Post Box */}
          <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', border: '1px solid #333', padding: '16px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <img src={userProfile.avatar} alt="user avatar" style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
              <div style={{
                flex: 1,
                border: '1px solid #333',
                borderRadius: '24px',
                padding: '12px 20px',
                color: '#9ca3af',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#262626'
              }}>
                เริ่มโพสต์ข้อความ...
              </div>
            </div>
          </div>

          {/* Posts List */}
          {postsData.map((post) => (
            <div key={post.id} style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              border: '1px solid #333',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <img src={post.author.avatar} alt={post.author.name} style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{post.author.name}</div>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>{post.author.headline}</div>
                  <div style={{ fontSize: '10px', color: '#666' }}>{post.createdAt}</div>
                </div>
              </div>
              <p style={{ fontSize: '14px', marginBottom: '12px', lineHeight: '1.5', color: '#e5e7eb' }}>
                {post.content}
              </p>
              {post.image && (
                <img src={post.image} alt="post content" style={{ width: '100%', borderRadius: '8px', border: '1px solid #333' }} />
              )}
            </div>
          ))}
        </main>

        {/* คอลัมน์ขวา: Suggested People */}
        <aside style={{ width: '300px', flexShrink: 0 }} className="hidden lg:block">
          <SuggestedPeople />
        </aside>

      </div>
    </div>
  );
}

export default App;