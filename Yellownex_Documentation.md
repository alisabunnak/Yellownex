# Yellownex Project Documentation

โปรเจกต์ **Yellownex** เป็นโซเชียลเน็ตเวิร์กสำหรับมืออาชีพ (LinkedIn Clone) ที่เน้นความทันสมัย สวยงาม และใช้งานได้จริง โดยใช้เทคโนโลยีล่าสุดในปัจจุบัน

---

## 🚀 เทคโนโลยีที่ใช้ (Tech Stack)
- **React 19:** ไลบรารีหลักในการสร้าง UI แบบ Component-based
- **Tailwind CSS v4:** จัดการดีไซน์แบบ Utility-first และรองรับ Dark Theme
- **React Router DOM v7:** จัดการระบบ Navigation และ Routing
- **Lucide-React:** ชุดไอคอนที่สวยงามและใช้งานง่าย
- **Vite:** Build tool ที่รวดเร็วสำหรับการพัฒนา

---

## 📁 โครงสร้างไฟล์และหน้าที่ (File Structure)

### 1. โฟลเดอร์ `src/` (แกนกลางของแอป)
- **`main.jsx`**: จุดเริ่มต้นของโปรแกรม ทำหน้าที่ Render `App.jsx` ลงใน HTML
- **`App.jsx`**: กำหนดเส้นทาง (Routes) ของแอปพลิเคชัน เช่น หน้าแรก หน้าโปรไฟล์ และหน้าเครือข่าย
- **`index.css`**: จัดการ Global Style และการตั้งค่าพื้นฐานของ Tailwind

### 2. โฟลเดอร์ `src/Components/` (ส่วนประกอบ UI)
- **`Layout.jsx`**: โครงสร้างหลักที่ครอบทุกหน้า ประกอบด้วย Navbar, Sidebar, แถบแชท และพื้นที่แสดงเนื้อหาหลัก
- **`Nav-bar.jsx`**: แถบเมนูด้านบนสำหรับการค้นหาและการเข้าถึงหน้าต่างๆ
- **`SideBar.jsx`**: แสดงข้อมูลสรุปของผู้ใช้ที่ด้านซ้าย (ชื่อ, หัวข้อแนะนำ, สถิติ)
- **`StartPost.jsx`**: ส่วนสำหรับสร้างโพสต์ใหม่ รองรับการพิมพ์ข้อความและการอัปโหลดรูปภาพ (Image Preview)
- **`01_PostCard.jsx`**: การ์ดแสดงโพสต์แต่ละอัน มีปุ่ม Like, Comment, และระบบย่อ/ขยายข้อความที่ยาว
- **`02_CommentSection.jsx`**: ส่วนแสดงความคิดเห็นภายใต้โพสต์
- **`03_PostFeed.jsx`**: ทำหน้าที่วนลูปข้อมูลจาก Mock Data มาสร้างเป็นรายการโพสต์
- **`ChatBar.jsx`**: หน้าต่างแชทลอยตัวที่มุมขวาล่าง
- **`SuggestedPeople.jsx`**: รายแนะนำผู้คนที่คุณอาจรู้จักที่ด้านขวา

### 3. โฟลเดอร์ `src/Page/` (หน้าเว็บหลัก)
- **`Home.jsx`**: หน้าฟีดหลักที่รวบรวม StartPost และ PostFeed เข้าด้วยกัน
- **`Landing.jsx`**: หน้าแรกสำหรับผู้ที่ยังไม่ได้ Login (Hero Section)
- **`Network.jsx` / `Profile.jsx`**: หน้าแสดงเครือข่ายและข้อมูลส่วนตัวของผู้ใช้

---

## ⚙️ การทำงานของระบบและคำอธิบายโค้ด (Core Logic)

### 1. ระบบ Routing (`App.jsx`)
ใช้ `createBrowserRouter` เพื่อจัดการหน้าเว็บ:
```javascript
const router = createBrowserRouter([
  { path: "/", element: <Landing /> }, // หน้า Landing
  {
    path: "/", 
    element: <Layout />, // ใช้ Layout ครอบหน้าอื่นๆ เพื่อให้มี Navbar ตลอด
    children: [
      { path: "home", element: <Home /> },
      { path: "profile", element: <Profile /> },
    ]
  }
]);
```

### 2. ระบบ Messaging (`Layout.jsx`)
เป็นหัวใจของการจัดการ State ระดับ Layout:
- `activeChats`: เก็บรายชื่อคนที่กำลังคุยอยู่ (แสดงเป็นหน้าต่างแชท)
- `chatHistories`: เก็บประวัติข้อความของแต่ละคน
- **Logic การเปิดแชท:** ถ้าคลิกชื่อคนในรายชื่อ จะเพิ่มคนนั้นเข้า `activeChats` (จำกัดไม่เกิน 3 หน้าต่าง)

### 3. ระบบการโพสต์ (`StartPost.jsx`)
- **`useState`**: เก็บข้อความ (`postText`) และข้อมูลรูปภาพ (`selectedImage`)
- **`useRef`**: ใช้สำหรับคลิกปุ่มเลือกไฟล์ที่ซ่อนอยู่ (Hidden Input)
- **`FileReader`**: แปลงไฟล์รูปภาพที่เลือกให้กลายเป็น URL (Base64) เพื่อนำมาแสดงตัวอย่าง (Preview) ก่อนโพสต์จริง

### 4. การจัดการ Interaction ในโพสต์ (`01_PostCard.jsx`)
- **ระบบ Like:** ใช้ `useState` สลับค่า true/false และคำนวณจำนวน Like ทันทีในเครื่อง (Local State)
- **การย่อข้อความ:** ตรวจสอบความยาวของเนื้อหา (`content.length > 200`) ถ้าเกินจะตัดคำและแสดงปุ่ม "ดูเพิ่มเติม"

### 5. ข้อมูลจำลอง (`mockData.js`)
สร้างโครงสร้างข้อมูลแบบ Object และ Array เพื่อเลียนแบบ API จริง ทำให้แอปแสดงผลได้สมบูรณ์โดยไม่ต้องมี Backend ในช่วงเริ่มต้น

---

## 🛠 วิธีการพัฒนาต่อ
1.  **การเพิ่มฟีเจอร์:** สามารถสร้าง Component ใหม่ใน `src/Components/` และเรียกใช้ในหน้า `Page/`
2.  **การเปลี่ยนข้อมูล:** แก้ไขข้อมูลใน `src/data/mockData.js` เพื่อเปลี่ยนชื่อ รูปภาพ หรือโพสต์
3.  **การปรับดีไซน์:** ใช้คลาสของ Tailwind CSS (เช่น `bg-blue-500`, `rounded-xl`, `p-4`) แก้ไขที่ตัว Component ได้ทันที

---
*จัดทำโดย Gemini CLI - 28 เมษายน 2026*
