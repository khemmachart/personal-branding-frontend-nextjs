
---

## 📦 การจัดเก็บ: ควรเก็บที่ CMS

| ข้อดี            | เหตุผล                                                                 |
|------------------|------------------------------------------------------------------------|
| ✅ Centralized   | CMS เป็นจุดรวมข้อมูล ทุกคน (Frontend/Editor/API อื่น) เห็นผลลัพธ์ทันที |
| ✅ Versioning    | CMS ส่วนใหญ่มักมีระบบ draft/history                                    |
| ✅ Editor Friendly | ทีม content แก้ไขต่อได้ใน CMS                                         |
| ✅ Scalable      | ไม่ผูกกับ CronJob Server – ยืดหยุ่นในแง่ infra                         |

> **หมายเหตุ:** ถ้า AI-generated content ยังไม่ควรปล่อยทันที ควรใช้ status เช่น `"ai_drafted"` แทน `"ready"` เพื่อรอ human review

---

## 🛠️ API Design (สำหรับ CronJob)

### 1. GET /cms/contents?status=draft

ดึงรายการเนื้อหาที่ยังไม่ผ่าน AI

```http
GET /cms/contents?status=draft&limit=10
```

**Response:**
```json
[
  {
    "id": "abc123",
    "title": "ต้นฉบับ",
    "body": "นี่คือเนื้อหาที่เขียนแบบ raw",
    "status": "draft"
  }
]
```

---

### 2. POST /ai/refine

CronJob เรียก AI Service (หรือ LLM API Gateway)

```http
POST /ai/refine
Content-Type: application/json

{
  "title": "ต้นฉบับ",
  "body": "นี่คือเนื้อหาที่เขียนแบบ raw"
}
```

**Response:**
```json
{
  "refinedTitle": "หัวข้อใหม่ที่น่าสนใจ",
  "refinedBody": "เนื้อหาที่ได้รับการปรับปรุงโดย AI"
}
```

---

### 3. PUT /cms/contents/:id

อัปเดต content กลับเข้า CMS พร้อมปรับ status

```http
PUT /cms/contents/abc123
Content-Type: application/json

{
  "title": "หัวข้อใหม่ที่น่าสนใจ",
  "body": "เนื้อหาที่ได้รับการปรับปรุงโดย AI",
  "status": "ai_drafted"
}
```

---

## 📌 Status ที่แนะนำใน CMS

| Status       | ความหมาย                        |
|--------------|---------------------------------|
| draft        | Content รอให้ AI แก้ไข          |
| ai_drafted   | AI ปรับแล้ว รอ Human Review     |
| ready        | พร้อมเผยแพร่                    |
| published    | เผยแพร่แล้ว                    |

---

## ✨ Best Practices

- ใช้ `lastModified` หรือ `updatedAt` เพื่อให้ CronJob ดึงเฉพาะ content ที่ยังไม่ถูก process
- ใส่ `sourceContent` แยกไว้ใน CMS ถ้าต้องการเก็บต้นฉบับคู่กับ AI output
- ถ้า CMS ไม่รองรับ field ใหม่ อาจใช้ Metadata field แทน (เช่น `meta.aiVersion`)
- ทำ rate-limit การเรียก AI ถ้า LLM มี cost
- หากใช้ CMS เช่น Strapi, Sanity, Contentful, หรือ Ghost สามารถปรับ API ให้เหมาะกับแต่ละแพลตฟอร์ม

---

## 🧠 Logic สำหรับ High-Level Architecture ควรเก็บที่ไหน?

**ควรวาง Orchestration Logic ไว้ที่ฝั่ง CronJob Service (Backend)**

- **CMS**: เก็บ content, expose API (❌ ไม่ควรใส่ orchestration logic)
- **AI Service**: รับ input → คืนผล (❌ ควรเป็น pure function)
- **CronJob Service / Backend**: ควบคุม flow ทั้งหมด (✅ ควรมี orchestration logic)

### ตัวอย่างโครงสร้าง CronJob Service (Orchestrator)

```ts
async function orchestrateAIRewrite() {
  const contents = await fetchDraftsFromCMS();

  for (const content of contents) {
    try {
      const improved = await callAIRewrite(content);
      await updateContentInCMS(content.id, improved);
    } catch (err) {
      console.error(`❌ Failed to process content ${content.id}:`, err);
      await markErrorInCMS(content.id); // Optional
    }
  }
}
```

### แนะนำการจัดโครงสร้างไฟล์ (ใน CronJob Service)

/cronjobs
  └── refine-contents.job.ts      👈 Entry point ที่ cron เรียก  
/services
  ├── cms.service.ts              👈 รวมการดึง/อัปเดตจาก CMS  
  ├── ai.service.ts               👈 เรียก LLM API  
  └── orchestrator.service.ts     👈 Core Logic: ดึง → ส่ง AI → เขียนกลับ  
/utils
  └── logger.ts / retry.ts        👈 Helper tools  

---

## 🛡️ Optional Enhancements

| แนวทาง                | อธิบาย                                                        |
|-----------------------|---------------------------------------------------------------|
| ✅ ใช้ queue          | ถ้าข้อมูลเยอะมาก ควร queue job แทนทำ loop ตรง                |
| ✅ ใส่ retry/backoff  | ถ้า AI error, อย่า fail ทั้ง batch                            |
| ✅ ทำ audit log       | เก็บ log ว่า content ไหนถูกปรับปรุงเมื่อไร โดย AI version อะไร |

---

## ✍️ สรุป

| คำถาม                | คำตอบ                                                        |
|----------------------|--------------------------------------------------------------|
| Logic ควรเก็บที่ไหน? | 👉 ใน CronJob Service (Orchestration Layer)                  |
| ทำไม?                | Separation of concern ชัดเจน, CMS เก็บข้อมูล, AI แค่ประมวลผล |
| ถ้า scale?           | ค่อย refactor ไปเป็น message-based (queue)                  |

---

> Ref: [ChatGPT Coach Software Development](https://chatgpt.com/g/g-p-680e8a8bedf08191af5e323b172f6f0b-coach-software-development/c/685f7a62-9900-8008-994d-6fffe8ff6b3f)
> Ref: [ChatGPT Coach Software Development] https://chatgpt.com/c/685f7a62-9900-8008-994d-6fffe8ff6b3f