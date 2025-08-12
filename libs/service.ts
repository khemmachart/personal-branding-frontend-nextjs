import { Download } from 'react-feather';
import { Project } from './model';
import { v4 as uuidv4 } from 'uuid';
import { ExceptionMap } from 'antd/lib/result';

export const selfImprovementData: Project = {
  id: "mock-uuid-1",
  parent_id: null,
  title: "Self Improvement",
  details: "โครงการเพื่อพัฒนาทักษะ ความสามารถ และปรับปรุงพฤติกรรมที่ช่วยสร้างชีวิตที่ดีขึ้น",
  dates: {
    scheduledDate: "2025-01-01",
    dueDate: "2026-12-31",
  },
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-2",
      parent_id: "mock-uuid-1",
      title: "อ่านหนังสือ 1 สัปดาห์ 2 บท",
      details: "สร้างนิสัยการอ่านหนังสือเพื่อพัฒนาความรู้และมุมมองใหม่ ๆ",
      tasks: [
        {
          id: "mock-uuid-3",
          parent_id: "mock-uuid-2",
          title: "เลือกหนังสือที่ต้องการอ่าน",
          details: "เลือกหนังสือที่สนใจและกำหนดเป้าหมายการอ่าน",
          dates: {
            scheduledDate: "2026-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-4",
          parent_id: "mock-uuid-2",
          title: "อ่านหนังสือบทที่ 1-2",
          details: "เริ่มอ่านบทแรกและบทที่สองในสัปดาห์แรก",
          dates: {
            scheduledDate: "2026-01-21",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-5",
          parent_id: "mock-uuid-2",
          title: "อ่านหนังสือบทที่ 3-4",
          details: "อ่านบทที่สามและสี่ในสัปดาห์ถัดไป",
          dates: {
            scheduledDate: "2026-01-28",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-6",
          parent_id: "mock-uuid-2",
          title: "ติดตามผลการอ่าน",
          details: "บันทึกความก้าวหน้าและสรุปสิ่งที่ได้เรียนรู้จากหนังสือทุกเดือน",
          dates: {
            scheduledDate: "2026-12-31",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-7",
      parent_id: "mock-uuid-1",
      title: "ลดการใช้โซเชียลมีเดีย",
      details: "สร้างสมดุลระหว่างชีวิตออนไลน์และออฟไลน์เพื่อเพิ่มประสิทธิภาพในชีวิตประจำวัน",
      tasks: [
        {
          id: "mock-uuid-8",
          parent_id: "mock-uuid-7",
          title: "กำหนดเวลาใช้งานโซเชียลมีเดีย",
          details: "กำหนดเวลาใช้งานโซเชียลมีเดีย เช่น ไม่เกิน 1 ชั่วโมงต่อวัน",
          dates: {
            scheduledDate: "2026-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-9",
          parent_id: "mock-uuid-7",
          title: "หากิจกรรมที่ทำแทนการใช้โซเชียลมีเดีย",
          details: "เช่น การอ่านหนังสือ การออกกำลังกาย หรือทำงานอดิเรก",
          dates: {
            scheduledDate: "2026-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-10",
          parent_id: "mock-uuid-7",
          title: "ติดตามการใช้งาน",
          details: "บันทึกเวลาที่ใช้และลดลงอย่างต่อเนื่อง",
          dates: {
            scheduledDate: "2026-12-31",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const personalBrandingData: Project = {
  id: "mock-uuid-7-personal-branding",
  parent_id: "mock-uuid-1",
  title: "Personal Branding & Profile Development",
  details: `
    <ul>
      <li>พัฒนาและปรับปรุงการนำเสนอตัวตนทางวิชาชีพผ่านช่องทางต่างๆ เพื่อสร้างภาพลักษณ์ที่ดีและโอกาสทางอาชีพ</li>
      <li><a href='https://th.techcal.dev'>Tech event/meetup calendar</a></li>
    </ul>
  `,
  tasks: [
  ],
  subProjects: [
    {
      id: "mock-uuid-7-personal-branding-tech-event-calendar",
      parent_id: "mock-uuid-7-personal-branding",
      title: "Tech event/meetup calendar",
      details: `
        <ul>
          <li><a href='https://th.techcal.dev'>Tech event/meetup calendar</a></li>
        </ul>
      `,
      tasks: [
        {
          id: "mock-uuid-7-personal-branding-tech-event-calendar-01",
          parent_id: "mock-uuid-7-personal-branding-tech-event-calendar",
          title: "LINE Developer Meetup #6",
          details: `
            <h3>LINE Developer Meetup #6</h3>
            <p>Gaysorn Tower 127 Ratchadamri Rd., Lumphini, Pathum Wan, Bangkok 10330, Thailand</p>
            <p>13 มี.ค. - 30 มี.ค.</p>
            <p>LINE DEV เตรียมตัว! LINE DEV Meetup #6 กลับมาแล้ว มาอัปเดตเทคโนโลยี API ใหม่ๆ พร้อมเปิดบ้าน LINE Thailand Office โซนใหม่ให้ทุกคนได้ Wow และเช็คอินก่อนใคร!</p>
            <p>พบกับคู่หูนักพัฒนา คุณตี๋ และ คุณแทน ที่จะมาเล่าเรื่องเทคโนโลยีให้ฟังแบบสนุก เข้าใจง่าย พร้อมเจาะลึกการใช้ LINE x AI จาก Use Case ที่น่าสนใจ รวมไปถึงอัปเดตล่าสุดเกี่ยวกับ MINI APP โดย LINE API Expert คนล่าสุดทั้ง อาจารย์เณร และ คุณบีท มาเจอกัน มาคุยกัน มาแชร์ไอเดียกัน ลงทะเบียนโล้ด!</p>
            <ul>
              <li>🗓 วันพฤหัสบดีที่ 20 มีนาคม 2568</li>
              <li>🕣 เวลา 18.00 - 21.00 น.</li>
              <li>📍 ออฟฟิศ LINE Thailand (Gaysorn Tower) ชั้น 18</li>
              <li>บรรยาย: ภาษาไทย 🇹🇭</li>
            </ul>
            <p>ลงทะเบียน FREE: line-website.com/linedevmeetup</p>
            <h4>📲 ขั้นตอนการลงทะเบียน</h4>
            <ul>
              <li>ลงทะเบียนผ่าน Official Account - LINE Developer TH @linedevth ตามลิงก์ด้านบนได้ตั้งแต่วันนี้ - 16 มีนาคม 2568</li>
              <li>ทางทีมงานจะประกาศผลการลงทะเบียนภายในวันจันทร์ที่ 17 มีนาคม 2568 โดยจะมีการส่งข้อความผ่าน Official Account LINE Developer TH เป็นตั๋วเข้างานเพื่อยืนยันการเข้าร่วมงานอีกครั้ง</li>
            </ul>
            <p>❗หมายเหตุ: ที่นั่งมีจำนวนจำกัด ทีมงานขออนุญาตจำกัดสิทธิ์ให้แก่ผู้ได้รับข้อความยืนยันจาก LINE Official Account เท่านั้น (ไม่รับ Walk-in)</p>
          `,
          dates: {
            scheduledDate: "2025-02-20T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-7-personal-branding-resume",
      parent_id: "mock-uuid-7-personal-branding", 
      title: "Professional Profile Development",
      details: `
        <ul>
          <li>Create and maintain professional profiles across key platforms</li>
          <li>Ensure consistent personal branding and up-to-date information</li>
          <li>Highlight key achievements and skills effectively</li>
        </ul>
      `,
      tasks: [
        {
          id: "mock-uuid-7-personal-branding-resume-01",
          parent_id: "mock-uuid-7-personal-branding-resume",
          title: "Update Resume and CV",
          details: "Update work history, skills, and achievements to be current",
          dates: {
            scheduledDate: "2025-02-16T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-7-personal-branding-resume-02", 
          parent_id: "mock-uuid-7-personal-branding-resume",
          title: "Enhance LinkedIn Profile",
          details: "Update profile information, showcase work, and increase professional community engagement",
          dates: {
            scheduledDate: "2025-02-20T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-7-personal-branding-resume-03",
          parent_id: "mock-uuid-7-personal-branding-resume", 
          title: "Develop Online Portfolio",
          details: "Compile and present key projects through personal website",
          dates: {
            scheduledDate: "2025-03-01T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const relationshipGirlfriendData: Project = {
  id: "mock-uuid-11",
  parent_id: null,
  title: "แฟน",
  details: "สร้างความสัมพันธ์ที่แน่นแฟ้นผ่านกิจกรรมร่วมกันทุก 2 สัปดาห์",
  tasks: [
    {
      id: "mock-uuid-12",
      parent_id: "mock-uuid-11",
      title: "หาร้านที่เจอตอนเดินทางไปบ้านพี่อิ้ด (แถว ๆ เรียบด่วน)",
      dates: {
        dueDate: "2025-01-15",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-13",
      parent_id: "mock-uuid-11",
      title: "หาข้อมูลร้านอาหารที่ไปทานกับพี่เชฟ พี่ปอ",
      dates: {
        dueDate: "2025-01-15",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-14",
      parent_id: "mock-uuid-11",
      title: "วางแผนกิจกรรมร่วมกัน",
      details: "หาไอเดียสำหรับกิจกรรม เช่น ดูหนัง ออกกำลังกาย หรือท่องเที่ยว",
      dates: {
        dueDate: "2025-01-15",
      },
      isCompleted: false
    },
  ],
  subProjects: [
    {
      id: "mock-uuid-15",
      parent_id: "mock-uuid-11",
      title: "ทานข้าวนอกสถานที่",
      details: "",
      tasks: [
        {
          id: "mock-uuid-dining-outdoor-01",
          parent_id: "mock-uuid-15",
          title: "Shushiro",
          dates: {
            scheduledDate: "2025-01-26T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-dining-outdoor-02",
          parent_id: "mock-uuid-15",
          title: "MK Restaurant",
          dates: {
            scheduledDate: "2025-02-09T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-dining-outdoor-03",
          parent_id: "mock-uuid-15",
          title: "Shushiro",
          dates: {
            scheduledDate: "2025-02-12T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-dining-outdoor-04",
          parent_id: "mock-uuid-15",
          title: "Yakiniku Like",
          dates: {
            scheduledDate: "2025-02-13T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-dining-outdoor-05",
          parent_id: "mock-uuid-15",
          title: "Kinlenn Eatery & Play Ari",
          dates: {
            scheduledDate: "2025-02-15T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-dining-outdoor-06",
          parent_id: "mock-uuid-15", 
          title: "อันกึม อันก๋า อารีย์",
          dates: {
            scheduledDate: "2025-05-25T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-dining-outdoor-07",
          parent_id: "mock-uuid-15",
          title: "ดูหนัง How to train your dragon (Live Action)",
          dates: {
            scheduledDate: "2025-06-22T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-dining-outdoor-08",
          parent_id: "mock-uuid-15",
          title: "ทานข้าว on the table",
          dates: {
            scheduledDate: "2025-06-29T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-dining-outdoor-09",
          parent_id: "mock-uuid-15",
          title: "ดูหนัง F1",
          dates: {
            scheduledDate: "2025-06-29T00:00:00+07:00",
          },
          isCompleted: true
        },
      ]
    },
    {
      id: "mock-uuid-16",
      parent_id: "mock-uuid-11",
      title: "วาเลนไทน์",
      details: "",
      tasks: [
        {
          id: "mock-uuid-valentine01",
          parent_id: "mock-uuid-16",
          title: "สั่งช่อดอกไม้ (จัดส่ง 14 กุมภาพันธ์ 08:00-12:00)",
          details: "",
          dates: {
            scheduledDate: "2025-01-24",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-valentine02",
          parent_id: "mock-uuid-16",
          title: "สั่งตุ๊กตา (จัดส่ง 7-10 วัน)",
          details: "",
          dates: {
            scheduledDate: "2025-01-24",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-valentine03",
          parent_id: "mock-uuid-16",
          title: "จัดงานวาเลนไทน์",
          details: "",
          dates: {
            scheduledDate: "2025-02-14T00:00:00+07:00",
          },
          isCompleted: true
        }
        ,
        {
          id: "mock-uuid-valentine04",
          parent_id: "mock-uuid-16",
          title: "ลงรูปภาพถ่ายร่วม",
          details: "",
          dates: {
            scheduledDate: "2025-02-14T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-17",
      parent_id: "mock-uuid-11",
      title: "กิจกรรมอื่น ๆ ร่วมกัน",
      details: "",
      tasks: [
        {
          id: "mock-uuid-17-2",
          parent_id: "mock-uuid-17",
          title: "นิทรรศกาลงานเจ้าชายน้อย",
          details: "https://www.ticketmelon.com/madmotionstudio/the-little-prince-universe, https://thematter.co/brief/236663/236663, https://www.facebook.com/people/Mad-Motion-The-Little-Prince-Universe/61571038075217/",
          dates: {
            scheduledDate: "2025-03-27T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-17-3",
          parent_id: "mock-uuid-17",
          title: "ตรุษจีน",
          details: "https://www.ticketmelon.com/madmotionstudio/the-little-prince-universe, https://thematter.co/brief/236663/236663, https://www.facebook.com/people/Mad-Motion-The-Little-Prince-Universe/61571038075217/",
          dates: {
            scheduledDate: "2025-01-28T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-17-4",
          parent_id: "mock-uuid-17", 
          title: "Yunomori Onsen & Spa",
          details: "Yunomori Onsen & Spa Sukhumvit Soi 26",
          dates: {
            scheduledDate: "2025-03-16T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-17-5",
          parent_id: "mock-uuid-17",
          title: "ดู Conan the movie 28 ปริศนาภาพติดตามรณะ",
          details: "",
          dates: {
            scheduledDate: "2025-05-10T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-18-gift",
      parent_id: "mock-uuid-11",
      title: "ของขวัญตามเทศกาล / วันสำคัญ",
      details: "",
      tasks: [
        {
          id: "mock-uuid-18-gift-01",
          parent_id: "mock-uuid-18-gift",
          title: "แว่นกันแดด",
          details: "",
          dates: {
            scheduledDate: "2025-02-10T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-18-gift-02",
          parent_id: "mock-uuid-18-gift",
          title: "Name Tag (ที่ห้อยบัตรพนักงาน)",
          details: "",
          dates: {
            scheduledDate: "2025-07-05T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-18-gift-03",
          parent_id: "mock-uuid-18-gift",
          title: "เข็มขัด Dior",
          details: "",
          dates: {
            scheduledDate: "2025-07-10T00:00:00+07:00",
          },
        }
      ]
    }
  ]
}

export const relationshipFamilyData: Project = {
  id: "mock-uuid-18",
  parent_id: null,
  title: "ครอบครัว",
  details: "",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-19",
      parent_id: "mock-uuid-18",
      title: "Event: ครอบครัวบูม",
      details: "",
      tasks: [
        {
          id: "mock-uuid-19",
          parent_id: "mock-uuid-19",
          title: "Event: ทานข้าวเปิดบ้านพี่ปอ",
          details: "",
          tasks: [],
          isCompleted: true
        },
        {
          id: "mock-uuid-191",
          parent_id: "mock-uuid-19",
          title: "Event: ทานเข้าวันเกิดแม่เปิ้ล",
          details: "",
          tasks: [],
          isCompleted: true
        },
        {
          id: "mock-uuid-19-1",
          parent_id: "mock-uuid-19",
          title: "Event: ทานข้าวบ้านพี่ปอ",
          details: "",
          dates: {
            scheduledDate: "2025-03-02T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-19-2",
          parent_id: "mock-uuid-19",
          title: "Event: ทานข้าวนอกสถานที่ ร้านตรงสวนตรงสะพานพระราม 8",
          details: "",
          dates: {
            scheduledDate: "2025-03-08T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-19-3",
          parent_id: "mock-uuid-19",
          title: "Event: ทานข้าวกับแม่เปิ้ลที่ Yunomori Onsen & Spa Sukhumvit Soi 26",
          details: "",
          dates: {
            scheduledDate: "2025-03-16T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-19-4",
          parent_id: "mock-uuid-19",
          title: "Event: ทานบุฟเฟ่ต์ปิ้งย่าง",
          details: "",
          dates: {
            scheduledDate: "2025-05-17T00:00:00+07:00"
          },
          isCompleted: true
        }
      ],
      isCompleted: true
    },
    {
      id: "mock-uuid-19-2",
      parent_id: "mock-uuid-18",
      title: "Event: ครอบครัวเก้า",
      details: "",
      tasks: [
        {
          id: "mock-uuid-19-2-1",
          parent_id: "mock-uuid-19-2",
          title: "Event: ทานข้าวที่บ้านเก้า",
          details: "",
          dates: {
            scheduledDate: "2025-02-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-19-2-2",
          parent_id: "mock-uuid-19-2",
          title: "Event: ทานข้าวกับพ่อแม่เก้า",
          details: "",
          dates: {
            scheduledDate: "2025-03-01T00:00:00+07:00"
          },
          isCompleted: false
        }
      ],
    },
    {
      id: "mock-uuid-20",
      parent_id: "mock-uuid-18",
      title: "Event: ประจำปีกับครอบครัว: ตรุษจีน",
      details: "",
      tasks: [
        {
          id: "mock-uuid-21",
          parent_id: "mock-uuid-20",
          title: "ไหว้ตรุษจีนกับที่บ้าน",
          details: "",
          dates: {
            scheduledDate: "2025-01-28T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-22",
          parent_id: "mock-uuid-20",
          title: "อั่งเปาบูม",
          details: "",
          dates: {
            scheduledDate: "2025-01-31T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-23",
          parent_id: "mock-uuid-20",
          title: "อั่งเปา เจแปน ฟูจิ",
          details: "",
          dates: {
            scheduledDate: "2025-01-31T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-24",
          parent_id: "mock-uuid-20",
          title: "อั่งเปา เรน่า",
          details: "",
          dates: {
            scheduledDate: "2025-01-31T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-25",
      parent_id: "mock-uuid-18",
      title: "Event: ประจำปีกับครอบครัว: วันคริสมาสและปีใหม่",
      details: "",
      tasks: [
        {
          id: "mock-uuid-25-1",
          parent_id: "mock-uuid-25",
          title: "ซื้อของขวัญคริสมาส",
          details: "",
          dates: {
            scheduledDate: "2025-12-20T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-2",
          parent_id: "mock-uuid-25",
          title: "จัดเตรียมงานฉลองคริสมาส",
          details: "",
          dates: {
            scheduledDate: "2025-12-24T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-3",
          parent_id: "mock-uuid-25",
          title: "ฉลองคริสมาสกับครอบครัว",
          details: "",
          dates: {
            scheduledDate: "2025-12-25T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-4",
          parent_id: "mock-uuid-25",
          title: "จัดเตรียมงานฉลองปีใหม่",
          details: "",
          dates: {
            scheduledDate: "2025-12-31T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-5",
          parent_id: "mock-uuid-25",
          title: "ฉลองปีใหม่กับครอบครัว",
          details: "",
          dates: {
            scheduledDate: "2025-12-31T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-25-6",
      parent_id: "mock-uuid-25",
      title: "ช่วยจัดสรรค์บ้านให้พ่อกับย่า",
      details: "จัดเตรียมและปรับปรุงพื้นที่บ้านให้เหมาะสมสำหรับพ่อกับย่า",
      tasks: [
        {
          id: "mock-uuid-25-6-1",
          parent_id: "mock-uuid-25-6", 
          title: "นัดคุยกับพ่อกับย่า",
          details: "พูดคุยเกี่ยวกับความต้องการและการจัดสรรพื้นที่",
          dates: {
            scheduledDate: "2025-05-05T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-25-6-2",
          parent_id: "mock-uuid-25-6",
          title: "Follow up พ่อตรวจสุขภาพ",
          details: "ติดตามผลการตรวจสุขภาพของพ่อเพื่อเตรียมความพร้อม",
          dates: {
            scheduledDate: "2025-05-31T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-6-3", 
          parent_id: "mock-uuid-25-6",
          title: "ซื้อของเข้าบ้านพ่อกับย่า + ให้พี่ฟ้ารีวิว [1]",
          details: `
            <p>จัดหาสิ่งของจำเป็นและให้พี่ฟ้าช่วยตรวจสอบความเหมาะสม</p>
            <p>Checklist: <a href="https://khemmachart.notion.site/1ebcd45f383d80ec8f7be9d13cd13e58?pvs=4">Link</a></p>
          `,
          dates: {
            scheduledDate: "2025-05-08T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-25-6-3", 
          parent_id: "mock-uuid-25-6",
          title: "ซื้อของเข้าบ้านพ่อกับย่า + ให้พี่ฟ้ารีวิว [2]",
          details: `
            <p>จัดหาสิ่งของจำเป็นและให้พี่ฟ้าช่วยตรวจสอบความเหมาะสม</p>
            <p>Checklist: <a href="https://khemmachart.notion.site/1ebcd45f383d80ec8f7be9d13cd13e58?pvs=4">Link</a></p>
          `,
          dates: {
            scheduledDate: "2025-05-31T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-6-4",
          parent_id: "mock-uuid-25-6",
          title: "จัดสรรค์บ้านพี่ฟ้า ให้พื้นที่พ่อกับย่า",
          details: "ปรับปรุงและจัดสรรพื้นที่บ้านให้เหมาะสม",
          dates: {
            scheduledDate: "2025-07-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-6-5",
          parent_id: "mock-uuid-25-6",
          title: "ย้ายของ",
          details: "ดำเนินการย้ายข้าวของเครื่องใช้เข้าพื้นที่ที่จัดเตรียมไว้",
          dates: {
            scheduledDate: "2025-07-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-25-7",
      parent_id: "mock-uuid-18",
      title: "กิจกรรมฝึกสมองสำหรับผู้สูงอายุ",
      details: "จัดกิจกรรมเพื่อช่วยฝึกความจำและการทำงานของสมองให้กับผู้สูงอายุในครอบครัว",
      tasks: [
        {
          id: "mock-uuid-25-7-1",
          parent_id: "mock-uuid-25-7",
          title: "สร้างอัลบั้มรูปครอบครัว",
          details: `
            <p>รวบรวมรูปถ่ายครอบครัวและทำเป็นอัลบั้มเพื่อช่วยฝึกความจำ:</p>
            <ul>
              <li>จัดเรียงรูปตามลำดับเหตุการณ์</li>
              <li>เขียนชื่อสมาชิกครอบครัวกำกับใต้รูป</li>
              <li>เพิ่มคำบรรยายเกี่ยวกับเหตุการณ์ในรูป</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-08-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-7-2",
          parent_id: "mock-uuid-25-7",
          title: "เกมจับคู่รูปภาพครอบครัว",
          details: `
            <p>สร้างเกมจับคู่รูปภาพสมาชิกครอบครัว:</p>
            <ul>
              <li>ทำการ์ดรูปคู่เหมือน</li>
              <li>เขียนชื่อและความสัมพันธ์ด้านหลังการ์ด</li>
              <li>เล่นเกมจับคู่พร้อมทบทวนชื่อและความสัมพันธ์</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-08-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-7-3",
          parent_id: "mock-uuid-25-7",
          title: "กิจกรรมเล่าเรื่องราวครอบครัว",
          details: `
            <p>จัดกิจกรรมแลกเปลี่ยนเรื่องราวครอบครัว:</p>
            <ul>
              <li>ให้ผู้สูงอายุเล่าเรื่องราวในอดีต</li>
              <li>ลูกหลานช่วยเติมเต็มความทรงจำ</li>
              <li>บันทึกเรื่องราวเป็นสมุดความทรงจำครอบครัว</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-09-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-7-4",
          parent_id: "mock-uuid-25-7",
          title: "สร้างแผนผังครอบครัว",
          details: `
            <p>ทำแผนผังครอบครัวแบบมีส่วนร่วม:</p>
            <ul>
              <li>วาดแผนผังครอบครัวขนาดใหญ่</li>
              <li>ติดรูปถ่ายพร้อมชื่อสมาชิก</li>
              <li>ระบุความสัมพันธ์ระหว่างสมาชิก</li>
              <li>ทบทวนแผนผังเป็นประจำ</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-09-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-25-8",
      parent_id: "mock-uuid-18",
      title: "ดูแลเรื่องโภชนาการอาหารสำหรับผู้สูงอายุ",
      details: "วางแผนและจัดการอาหารที่เหมาะสมกับผู้สูงอายุในครอบครัว เพื่อสุขภาพที่ดีและการมีคุณภาพชีวิตที่ดี",
      tasks: [
        {
          id: "mock-uuid-25-8-1",
          parent_id: "mock-uuid-25-8",
          title: "ศึกษาหลักโภชนาการสำหรับผู้สูงอายุ",
          details: `
            <p>รวบรวมข้อมูลด้านโภชนาการที่จำเป็น:</p>
            <ul>
              <li>ปริมาณแคลอรี่ที่เหมาะสมต่อวัน</li>
              <li>สารอาหารที่จำเป็นสำหรับผู้สูงอายุ</li>
              <li>อาหารที่ควรหลีกเลี่ยง</li>
              <li>การจัดการมื้ออาหารให้เหมาะสมกับสุขภาพ</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-07-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-8-2",
          parent_id: "mock-uuid-25-8",
          title: "วางแผนเมนูอาหารประจำสัปดาห์",
          details: `
            <p>จัดทำแผนเมนูอาหารที่หลากหลายและมีประโยชน์:</p>
            <ul>
              <li>เมนูอาหารที่มีโปรตีนคุณภาพดี</li>
              <li>อาหารที่มีผักและผลไม้ตามฤดูกาล</li>
              <li>เมนูที่เคี้ยวง่ายและย่อยง่าย</li>
              <li>คำนวณสัดส่วนอาหารให้เหมาะสม</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-07-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-8-3",
          parent_id: "mock-uuid-25-8",
          title: "จัดการมื้ออาหารและการรับประทาน",
          details: `
            <p>ดูแลการรับประทานอาหารประจำวัน:</p>
            <ul>
              <li>จัดเวลามื้ออาหารที่เหมาะสม</li>
              <li>ดูแลปริมาณน้ำที่ดื่มต่อวัน</li>
              <li>สังเกตการรับประทานอาหาร</li>
              <li>จดบันทึกปัญหาหรือข้อจำกัดในการรับประทาน</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-08-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-25-8-4",
          parent_id: "mock-uuid-25-8",
          title: "ติดตามและประเมินผล",
          details: `
            <p>ประเมินผลการดูแลด้านโภชนาการ:</p>
            <ul>
              <li>บันทึกน้ำหนักและสุขภาพโดยรวม</li>
              <li>สอบถามความพึงพอใจในมื้ออาหาร</li>
              <li>ปรับปรุงเมนูตามความเหมาะสม</li>
              <li>ปรึกษาแพทย์หรือนักโภชนาการเมื่อจำเป็น</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-08-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-26",
      parent_id: "mock-uuid-18",
      title: "ใช้เวลาอยู่กับครอบครัวมากขึ้น",
      details: "สร้างความสัมพันธ์ที่ดีในครอบครัวผ่านการทำกิจกรรมร่วมกัน",
      tasks: [
        {
          id: "mock-uuid-27",
          parent_id: "mock-uuid-26",
          title: "วางแผนนัดทานข้าวเย็น",
          details: "กำหนดวันและเวลาที่เหมาะสมสำหรับมื้อเย็นกับครอบครัวทุกสัปดาห์",
          dates: {
            scheduledDate: "2026-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-28",
          parent_id: "mock-uuid-26",
          title: "หาไอเดียกิจกรรมร่วมกัน",
          details: "เช่น เล่นเกม ดูหนัง หรือทำอาหารด้วยกัน",
          dates: {
            scheduledDate: "2026-01-31",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-29",
          parent_id: "mock-uuid-26",
          title: "ติดตามความถี่ของกิจกรรม",
          details: "บันทึกกิจกรรมที่ทำร่วมกันเพื่อประเมินผล",
          dates: {
            scheduledDate: "2026-12-31",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const relationshipWorkData: Project = {
  id: "mock-uuid-30",
  parent_id: null,
  title: "ที่ทำงาน (สร้างความสัมพันธ์ที่ดีกับเพื่อนร่วมงานใหม่)",
  details: "",
  tasks: [
    {
      id: "mock-uuid-41-05-01",
      parent_id: "mock-uuid-30",
      title: "ชวนเพื่อนร่วมงานไปดื่มกาแฟ",
      details: "แนะนำร้านกาแฟที่ชอบ และพูดคุยเรื่องงานอย่างไม่เป็นทางการ",
      dates: {
        scheduledDate: "2026-02-21T00:00:00+07:00",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-41-05-02",
      parent_id: "mock-uuid-30",
      title: "จัด One Piece Reading Club",
      details: "ชวนเพื่อนที่ชอบวันพีชมาแลกเปลี่ยนความคิดเห็นเกี่ยวกับการ์ตูน",
      dates: {
        scheduledDate: "2026-02-21T00:00:00+07:00",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-41-05-03",
      parent_id: "mock-uuid-30",
      title: "After-work Beer Session",
      details: "ชวนเพื่อนร่วมงานไปดื่มเบียร์หลังเลิกงาน สร้างบรรยากาศสบายๆ",
      dates: {
        scheduledDate: "2026-02-21T00:00:00+07:00",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-41-05-04",
      parent_id: "mock-uuid-30",
      title: "Tech Talk & Coffee",
      details: "จัดมินิ session แลกเปลี่ยนความรู้ด้านเทคโนโลยีพร้อมดื่มกาแฟ",
      dates: {
        scheduledDate: "2026-02-21T00:00:00+07:00",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-41-05-05",
      parent_id: "mock-uuid-30",
      title: "Hiking Club",
      details: "จัดกลุ่มเดินเขาสำหรับคนที่สนใจการเดินป่าและธรรมชาติ",
      dates: {
        scheduledDate: "2026-02-21T00:00:00+07:00",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-41-05-06",
      parent_id: "mock-uuid-30",
      title: "Workout Buddy Program",
      details: "หาเพื่อนออกกำลังกายที่มีเป้าหมายคล้ายกัน เพื่อสร้างแรงจูงใจและความสนุก",
      dates: {
        scheduledDate: "2026-02-21T00:00:00+07:00",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-41-05-07",
      parent_id: "mock-uuid-30",
      title: "PS5 Gaming Night",
      details: "จัดงานเล่นเกม PS5 หลังเลิกงาน เน้นเกมที่เล่นหลายคนได้เพื่อสร้างความสนุกร่วมกัน",
      dates: {
        scheduledDate: "2026-02-21T00:00:00+07:00",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-41-05-08",
      parent_id: "mock-uuid-30",
      title: "Board Game Night",
      details: "จัดงานเล่นบอร์ดเกมหลังเลิกงาน เพื่อสร้างความสนุกและกระชับความสัมพันธ์ผ่านการเล่นเกม",
      dates: {
        scheduledDate: "2026-02-21T00:00:00+07:00",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-41-05-09",
      parent_id: "mock-uuid-30",
      title: "Movie Night",
      details: "จัดฉายภาพยนตร์หลังเลิกงาน เลือกหนังที่น่าสนใจและเปิดโอกาสให้แลกเปลี่ยนความคิดเห็นหลังชม",
      dates: {
        scheduledDate: "2026-02-21T00:00:00+07:00",
      },
      isCompleted: false
    }
  ],
  subProjects: []
}

export const relationshipEventsData: Project = {
  id: "mock-uuid-31",
  parent_id: null,
  title: "Events",
  details: "",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-37",
      parent_id: "mock-uuid-31",
      title: "งานแต่งพี่นัท",
      isCompleted: true,
      details: "",
      tasks: [
        {
          id: "mock-uuid-38",
          parent_id: "mock-uuid-37",
          title: "ดูเรื่องงานพี่นัท + สถานที่งาน + สอบถามบูมว่าจะไปไหม",
          details: "",
          dates: {
            scheduledDate: "2025-12-31",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-39",
          parent_id: "mock-uuid-37",
          title: "เตรียมชุดสำหรับงานพี่นัท",
          details: "",
          dates: {
            scheduledDate: "2025-12-31",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-pnutt011",
          parent_id: "mock-uuid-37",
          title: "ติดต่อพี่นัทว่าจะไปไหม",
          details: "",
          dates: {
            scheduledDate: "2025-01-10",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-pnutt012",
          parent_id: "mock-uuid-37", 
          title: "ร่วมงานแต่งพี่นัท",
          details: "",
          dates: {
            scheduledDate: "2025-01-25T00:00:00+0700",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-32",
      parent_id: "mock-uuid-31",
      title: "งานแต่งมิ้นท์",
      details: "",
      dates: {
        scheduledDate: "2025-02-08T00:00:00+07:00",
      },
      tasks: [
        {
          id: "mock-uuid-33",
          parent_id: "mock-uuid-32",
          title: "เตรียมเสื้อเชิ้ต",
          details: "",
          dates: {
            scheduledDate: "2025-01-10T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-35",
          parent_id: "mock-uuid-32",
          title: "Follow up เรื่องแม่บูมไปงานไหม",
          details: "",
          dates: {
            scheduledDate: "2025-12-11",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-33",
          parent_id: "mock-uuid-32",
          title: "รีดเสื้อเชิ้ต",
          details: "",
          dates: {
            scheduledDate: "2025-02-07T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-36",
          parent_id: "mock-uuid-32",
          title: "ดูแผน/ตารางงาน",
          details: "",
          dates: {
            scheduledDate: "2025-02-07T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-37",
          parent_id: "mock-uuid-32",
          title: "เข้าร่วมงานแต่งมิ้นท์",
          details: "",
          dates: {
            scheduledDate: "2025-02-08T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-38",
          parent_id: "mock-uuid-32",
          title: "ลงรูปภาพถ่ายร่วม",
          details: "",
          dates: {
            scheduledDate: "2025-02-16T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-event-wedding-01",
      parent_id: "mock-uuid-31",
      title: "งานแต่งพี่กาว",
      details: "<div>เสาร์ที่ 8 มีนาคม 2568</div>\n" +
      "<div>สถานที่: ห้อง Lily of the Valley at The Park Nine Hotel Suvarnabhumi (<a href='https://maps.app.goo.gl/pzDhAqqcWTxdMe5m6'>แผนที่</a>)</div>\n" +
      "<div>14:09: แห่ขันหมาก</div>\n" +
      "<div>14:29: พิธีหมั้นยกน้ำชา</div>\n" +
      "<div>15:09: พิธีรดน้ำสังข์</div>\n" +
      "<div>18:30: ฉลองมงคลสมรส (International Buffet)</div>",
      dates: {
        scheduledDate: "2025-03-08T00:00:00+07:00",
      },
      isCompleted: true,
      tasks: [
        {
          id: "mock-uuid-event-wedding-01-01",
          parent_id: "mock-uuid-event-wedding-01",
          title: "เข้าร่วมงานแต่งพี่กาว",
          details: "",
          dates: {
            scheduledDate: "2025-03-08T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-work-02",
      parent_id: "mock-uuid-31",
      title: "Appsynth's Farewell Party",
      details: "",
      dates: {
        scheduledDate: "2025-02-19T00:00:00+07:00",
      },
      isCompleted: true,
      tasks: [
        {
          id: "mock-uuid-work-02-01-01",
          parent_id: "mock-uuid-work-02",
          title: "ขอบคุณพี่นิว",
          details: "",
          dates: {
            scheduledDate: "2025-02-19T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-work-02-03-03",
          parent_id: "mock-uuid-work-02",
          title: "ขอบคุณพี่บูม",
          details: "",
          dates: {
            scheduledDate: "2025-02-19T00:00:00+07:00",
          },
          isCompleted: true
        },
      ]
    },
    {
      id: "mock-uuid-work-03",
      parent_id: "mock-uuid-31",
      title: "Appsynth's Outing EL กาญจนบุรี",
      details: "",
      dates: {
        scheduledDate: "2025-03-04T00:00:00+07:00",
      },
      isCompleted: true,
      tasks: [
        {
          id: "mock-uuid-work-03-01",
          parent_id: "mock-uuid-work-03",
          title: "เข้าร่วมงาน Appsynth's EL Outing",
          details: "",
          dates: {
            scheduledDate: "2025-03-15T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-work-05555",
      parent_id: "mock-uuid-31",
      title: "Appsynth's Outing นครนายก",
      details: "",
      dates: {
        scheduledDate: "2025-03-04T00:00:00+07:00",
      },
      isCompleted: true,
      tasks: [
        {
          id: "mock-uuid-work-03-01",
          parent_id: "mock-uuid-work-03",
          title: "เข้าร่วมงาน Appsynth's Outing นครนายก",
          details: "",
          dates: {
            scheduledDate: "2025-03-04T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    }
  ]
}

export const relationshipFriendData: Project = {
  id: "mock-uuid-40",
  parent_id: null,
  title: "เพื่อน",
  details: "",
  tasks: [
    {
      id: "mock-uuid-40-1",
      parent_id: "mock-uuid-40",
      title: "ขอบคุณพี่ปัง",
      details: "ที่ช่วยหา Macbook ให้",
      dates: {
        scheduledDate: "2025-02-04T00:00:00+07:00",
      },
      isCompleted: false
    }
  ],
  subProjects: [
    {
      id: "mock-uuid-40-2",
      parent_id: "mock-uuid-40",
      title: "เพื่อนบูม",
      details: "",
      tasks: [
        {
          id: "mock-uuid-40-2-01",
          parent_id: "mock-uuid-40-2",
          title: "Partty: ร้านชงเจริญ The Parq",
          details: "",
          dates: {
            scheduledDate: "2025-03-07T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-41",
      parent_id: "mock-uuid-40",
      title: "ติดต่อเพื่อนเก่าทุกเดือน",
      details: "ฟื้นฟูความสัมพันธ์กับเพื่อนเก่าที่ไม่ได้ติดต่อกันนาน",
      tasks: [
        {
          id: "mock-uuid-42",
          parent_id: "mock-uuid-41",
          title: "สร้างรายชื่อเพื่อนเก่าที่ต้องการติดต่อ",
          details: "เขียนรายชื่อเพื่อนเก่าและจัดลำดับความสำคัญ",
          dates: {
            scheduledDate: "2025-01-10",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-43",
          parent_id: "mock-uuid-41",
          title: "ติดต่อเพื่อนเก่า",
          details: "ส่งข้อความหรือโทรหาเพื่อนเก่าอย่างน้อย 1 คนทุกเดือน",
          dates: {
            scheduledDate: "2025-12-31",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-44",
          parent_id: "mock-uuid-41",
          title: "วางแผนนัดพบปะ",
          details: "ชวนเพื่อนเก่ามาพบปะกันในโอกาสพิเศษ",
          dates: {
            scheduledDate: "2025-06-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-41-01",
      parent_id: "mock-uuid-40",
      title: "เพื่อนประถม",
      details: "",
      tasks: []
    },
    {
      id: "mock-uuid-41-02",
      parent_id: "mock-uuid-40",
      title: "เพื่อนมัธยม / เพื่อนหมวดคอม",
      details: "",
      tasks: []
    },
    {
      id: "mock-uuid-41-03",
      parent_id: "mock-uuid-40",
      title: "เพื่อนมหาวิทยาลัย / เพื่อน Computer Science",
      details: "",
      tasks: [
        {
          id: "mock-uuid-41-02-01",
          parent_id: "mock-uuid-41-03",
          title: "ทานกาแฟกับ Pete",
          details: "FIX Pradipat",
          dates: {
            scheduledDate: "2025-02-15T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-41-02-01",
          parent_id: "mock-uuid-41-03",
          title: "ทานข้าวกับ Pete",
          details: "Kinlenn Eatery & Play Ari",
          dates: {
            scheduledDate: "2025-02-15T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-41-04",
      parent_id: "mock-uuid-40",
      title: "เพื่อนที่ทำงาน (Nextzy, Appsynth, Panya, Fastwork, Deloitte, etc.)",
      details: "",
      tasks: [
        {
          id: "mock-uuid-30-1-relationship-work-01",
          parent_id: "mock-uuid-41-04",
          title: "ชวนอิดเดียร์ทานซูชิโระ",
          details: "",
          dates: {
            scheduledDate: "2025-01-28T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-30-2",
          parent_id: "mock-uuid-41-04",
          title: "บัตรรับเลี้ยงลูก พี่อิ้ด",
          details: "รายละเอียดอยู่ใน ChatGPT",
          dates: {
            scheduledDate: "2025-02-28T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-30-3",
          parent_id: "mock-uuid-41-04",
          title: "ขนมขอบคุณฮานะ",
          details: "เนื่องในโอกาสที่ให้ข้อมูลให้เก้ารู้ตัวและได้มีเวลาเตรียมตัวมากกว่าคนอื่น ๆ",
          dates: {
            scheduledDate: "2025-02-19T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-work-project-01",
          parent_id: "mock-uuid-41-04",
          title: "ทานอาหารร่วมกัน",
          isCompleted: true,
          details: "",
          tasks: [
            {
              id: "mock-uuid-work-00",
              parent_id: "mock-work-project-01",
              title: "ร้านดาดฟ้า",
              details: "",
              dates: {
                scheduledDate: "2025-02-05T00:00:00+07:00",
              },
              isCompleted: true
            },
            {
              id: "mock-uuid-work-01",
              parent_id: "mock-work-project-01",
              title: "Yakiniku Like",
              details: "",
              dates: {
                scheduledDate: "2025-02-13T00:00:00+07:00",
              },
              isCompleted: true
            }
          ]
        },
        {
          id: "mock-uuid-work-02",
          parent_id: "mock-work-project-01", 
          title: "ทานข้าว ทานกาแฟกับ พี่บูม PM, อิด",
          details: `
            <ul>
              <li>ข้าว: อันเกิม อันก๋า อารีย์</li>
              <li>กาแฟ: Yellowlane</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-05-25T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    }
  ]
}

export const relationshipGeneralData: Project = {
  id: "mock-uuid-45",
  parent_id: null,
  title: "พัฒนาความสัมพันธ์ทั่วไป",
  details: "โครงการเพื่อเสริมสร้างความสัมพันธ์ที่ดีกับครอบครัว เพื่อน และคนรัก",
  dates: {
    scheduledDate: "2025-01-01",
    dueDate: "2025-12-31",
  },
  tasks: [
  ],
  subProjects: [
    {
      id: "mock-uuid-46",
      parent_id: "mock-uuid-45",
      title: "เรียนรู้การสื่อสารที่ดีขึ้น",
      details: "พัฒนาทักษะการสื่อสารเพื่อสร้างความสัมพันธ์ที่เข้าใจกันมากขึ้น",
      tasks: [
        {
          id: "mock-uuid-47",
          parent_id: "mock-uuid-46",
          title: "ศึกษาเทคนิคการสื่อสาร",
          details: "อ่านบทความหรือหนังสือเกี่ยวกับการสื่อสารอย่างมีประสิทธิภาพ",
          dates: {
            scheduledDate: "2025-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-48",
          parent_id: "mock-uuid-46",
          title: "ฝึกพูดจาอย่างใส่ใจ",
          details: "เน้นฟังและตอบสนองความรู้สึกของผู้อื่น",
          dates: {
            scheduledDate: "2026-03-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-49",
          parent_id: "mock-uuid-46",
          title: "ประเมินผลการสื่อสาร",
          details: "สอบถามความคิดเห็นจากคนใกล้ชิดเกี่ยวกับการสื่อสารของคุณ",
          dates: {
            scheduledDate: "2026-06-01",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const technicalSelfLearningProject: Project = {
  id: "mock-uuid-50",
  parent_id: null,
  title: "Technical Skill Improvement",
  details: "การเรียนรู้ด้านเทคนิคที่จำเป็นสำหรับการทำงานหรือการศึกษาในด้านต่าง ๆ",
  dates: {
    scheduledDate: "2025-01-01",
    dueDate: "2025-12-31",
  },
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-50-01",
      parent_id: "mock-uuid-50",
      title: "AI",
      details: "",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-50-01-01",
          parent_id: "mock-uuid-50-01",
          title: "อ่าน 22365_3_Prompt Engineering_v7 (1).pdf ของพี่นัท",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-51",
      parent_id: "mock-uuid-50",
      title: "Infrastructure",
      details: "",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-52",
          parent_id: "mock-uuid-51",
          title: "อ่านของพี่โก้ https://appsynth.slack.com/archives/C034M5ZBJ8Y/p1735441201052849",
          details: "พักหลังๆจะเห็นโพสของ Rocky Bhatia ขึ้นในหน้า linkedin บ่อยมาก เป็นพวก infographic ที่อธิบายเกี่ยวกับ web, backend/frontend, network ต่างๆ โดยทำออกมาได้สวยและเข้าใจง่ายดี ลองหาข้อมูลดู เค้าเป็น SA ของบริษัท Adobe และมักจะไปพูดในงาน conference บ่อยๆ ตัวอย่าง infographic ที่คนสนใจเยอะๆ เผื่อไปตามอ่าน เรียนรู้กัน https://media.licdn.com/dms/image/v2/D5622AQFsUZKJ_Nh2gg/feedshare-shrink_2048_1536/[…]38195200&v=beta&t=1LCqG4MdQ8Zrw0Z-N0ydJMmR_RFluc7aslL9do6Iaxw https://media.licdn.com/dms/image/v2/D5622AQFkEUzUT26qhw/feedshare-shrink_800/B56ZO8[…]38195200&v=beta&t=xZCc3UuG8P416Wwveua8dziJ-K6OxNcUNSqJsDs20PY ช่องทางตาม https://www.linkedin.com/in/rocky-bhatia-a4801010/recent-activity/all/",
          dates: {
            scheduledDate: "2025-07-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-53",
          parent_id: "mock-uuid-51",
          title: "อ่านของพี่นิว https://appsynth.slack.com/archives/C034M5ZBJ8Y/p1735791916286069",
          details: "อ่านอันนี้มาก่อนจะเข้าใจมากขึ้น https://nopnithi.medium.com/%E0%B8%AA%E0%B8%AD%E0%B8%99-aws-networking-%E0%B9%80%E0%B8[…]%AD%E0%B8%87%E0%B8%95%E0%B9%89%E0%B8%99-part-1-7d10673923d7 ใครที่กำลังศึกษาเรื่อง DevOps + solution แบบ Cloud practitioner มีสองคอสนี้ [NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025 - ของ Stephane อันนี้ย่อยง่าย แต่ละ clip สั้น อธิบายดี  AWS Certified Solutions Architect - Associate 2020 - ของ Cloud Guru อันนี้เนื้อหาไม่ต่างกัน แทบจะเหมือนกับอันบน 80-90% ลงลึกกว่าหน่อยนึง แนะนำว่าใครไหวมาอันนี้เลย",
          dates: {
            scheduledDate: "2025-07-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-agile",
      parent_id: "mock-uuid-50",
      title: "Agile & Scrum Mastery",
      details: "เรียนรู้และฝึกฝนหลักการ Agile, Scrum และ LeSS เพื่อพัฒนาทักษะการบริหารโครงการแบบคล่องตัว",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-agile-01",
          parent_id: "mock-uuid-agile",
          title: "Agile Fundamentals",
          details: "ศึกษาหลักการพื้นฐานของ Agile Manifesto, Values และ Principles รวมถึงการประยุกต์ใช้ในสถานการณ์จริง",
          dates: {
            scheduledDate: "2026-02-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-agile-02",
          parent_id: "mock-uuid-agile",
          title: "Scrum Framework Deep Dive",
          details: "เรียนรู้เชิงลึกเกี่ยวกับ Scrum Framework, Roles, Events และ Artifacts พร้อมทั้งศึกษากรณีตัวอย่างการใช้งานจริง",
          dates: {
            scheduledDate: "2026-03-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-agile-03",
          parent_id: "mock-uuid-agile",
          title: "LeSS Framework Study",
          details: "ศึกษา Large-Scale Scrum (LeSS) Framework สำหรับการทำ Scrum ในทีมขนาดใหญ่ รวมถึงหลักการและแนวทางการปรับใช้",
          dates: {
            scheduledDate: "2026-04-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-agile-04",
          parent_id: "mock-uuid-agile",
          title: "Agile Certifications",
          details: "เตรียมตัวและสอบใบรับรองด้าน Agile เช่น PSM I, PSPO I หรือ SAFe certifications",
          dates: {
            scheduledDate: "2026-06-01T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-pm",
      parent_id: "mock-uuid-50",
      title: "Project Management Excellence",
      details: "พัฒนาทักษะการบริหารโครงการแบบมืออาชีพ ครอบคลุมทั้งด้านการวางแผน การจัดการทรัพยากร และการติดตามผล",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-pm-01",
          parent_id: "mock-uuid-pm",
          title: "Project Management Fundamentals",
          details: "ศึกษาหลักการพื้นฐานของการบริหารโครงการ เช่น Project Life Cycle, Knowledge Areas และ Process Groups",
          dates: {
            scheduledDate: "2025-02-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-pm-02",
          parent_id: "mock-uuid-pm",
          title: "Risk Management & Mitigation",
          details: "เรียนรู้การระบุ วิเคราะห์ และจัดการความเสี่ยงในโครงการ รวมถึงการวางแผนรับมือกับสถานการณ์ฉุกเฉิน",
          dates: {
            scheduledDate: "2025-03-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-pm-03",
          parent_id: "mock-uuid-pm",
          title: "Stakeholder Management",
          details: "พัฒนาทักษะการจัดการผู้มีส่วนได้ส่วนเสีย การสื่อสาร และการสร้างความสัมพันธ์ที่ดีกับทุกฝ่าย",
          dates: {
            scheduledDate: "2025-04-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-pm-04",
          parent_id: "mock-uuid-pm",
          title: "Project Management Tools Mastery",
          details: "ฝึกใช้เครื่องมือบริหารโครงการต่างๆ เช่น JIRA, Trello, MS Project และ collaboration tools อื่นๆ",
          dates: {
            scheduledDate: "2025-05-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-157-1123123",
      title: "Career Ladder",
      details: "https://medium.com/fastworkco/fastwork-engineering-career-ladder-with-trident-and-snowflake-model-b4a85f4b309e",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: []
    },
    {
      id: "mock-uuid-157-11231asdasd23", 
      title: "OKRs Learning & Implementation",
      details: "เรียนรู้และทดสองปฏิบัติการใช้ OKRs (Objectives and Key Results) เพื่อการวางแผนและติดตามเป้าหมายอย่างมีประสิทธิภาพ",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-okr-01",
          title: "OKRs Fundamentals",
          details: "ศึกษาหลักการพื้นฐานของ OKRs, การตั้งเป้าหมายที่ดี, และความแตกต่างระหว่าง OKRs กับ KPIs ผ่านหนังสือ 'Measure What Matters' โดย John Doerr",
          dates: {
            scheduledDate: "2025-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-okr-02",
          title: "OKRs Workshop Participation",
          details: "เข้าร่วม Workshop เกี่ยวกับการนำ OKRs ไปใช้ในองค์กรและทีม เพื่อเรียนรู้จากประสบการณ์จริงและแนวทางปฏิบัติที่ดี",
          dates: {
            scheduledDate: "2025-03-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-okr-03",
          title: "OKRs Implementation Practice",
          details: "ศึกษาการเขียน OKRs สำหรับโครงการส่วนตัวและทีม รวมถึงการติดตามและประเมินผล OKRs อย่างมีประสิทธิภาพ",
          dates: {
            scheduledDate: "2025-04-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-157-product-eng",
      title: "Product Software Engineer Development",
      details: "แผนพัฒนาตนเองเพื่อเป็น Product Software Engineer ที่สามารถช่วย Product Owner ได้ดีขึ้น โดยเน้นการพัฒนาทั้งด้าน Product Development และ Business Perspective เพื่อเชื่อมโยงความเข้าใจระหว่างด้านเทคนิคและธุรกิจ",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [],
      subProjects: [
        {
          id: "mock-uuid-prod-01",
          title: "Product Thinking & Product Management",
          details: "พัฒนาความเข้าใจในด้าน Product Management และกระบวนการคิดเชิงผลิตภัณฑ์ เพื่อสามารถมองเห็นภาพรวมและเป้าหมายของผลิตภัณฑ์ได้ชัดเจนขึ้น",
          dates: {
            dueDate: "2025-12-31",
          },
          tasks: [
            {
              id: "mock-uuid-prod-01-01",
              title: "Understanding Users & Problems",
              details: "ศึกษาและปฏิบัติเกี่ยวกับ User Research Methods, Customer Journey Mapping, User Personas, User Interviews, Empathy Mapping และ Problem Statement Definition เพื่อเข้าใจความต้องการและปัญหาที่แท้จริงของผู้ใช้ รวมถึงการใช้เครื่องมือต่างๆ เช่น Miro, Figma ในการทำ Research",
              dates: {
                scheduledDate: "2025-03-01",
              },
              isCompleted: false
            },
            {
              id: "mock-uuid-prod-01-02",
              title: "Product Strategy",
              details: "เรียนรู้การกำหนด Product Vision, การสร้าง Product Roadmap, การตั้ง OKRs & KPIs ที่มีประสิทธิภาพ, การวิเคราะห์ Market & Competitive Analysis, การทำ Product Positioning และการใช้ข้อมูลเหล่านี้ในการตัดสินใจของ Product Owner ผ่านการอ่านหนังสือ 'Inspired' by Marty Cagan และเข้าร่วม Product Management Courses",
              dates: {
                scheduledDate: "2025-04-01",
              },
              isCompleted: false
            },
            {
              id: "mock-uuid-prod-01-03",
              title: "Agile & Lean Thinking",
              details: "ศึกษาและประยุกต์ใช้หลักการ Agile (Scrum, Kanban), Lean Startup Methodology, Build-Measure-Learn Feedback Loop, Continuous Integration/Deployment และการทำ Retrospectives ที่มีประสิทธิภาพ ผ่านการอ่านหนังสือ 'The Lean Startup' by Eric Ries และการเข้าร่วม Agile Workshops",
              dates: {
                scheduledDate: "2025-05-01",
              },
              isCompleted: false
            }
          ]
        },
        {
          id: "mock-uuid-prod-02",
          title: "Technical Product Development",
          details: "พัฒนาทักษะในการตัดสินใจทางเทคนิคที่สอดคล้องกับเป้าหมายทางธุรกิจ โดยคำนึงถึงผลกระทบระยะยาวและการเติบโตของผลิตภัณฑ์",
          dates: {
            dueDate: "2025-12-31",
          },
          tasks: [
            {
              id: "mock-uuid-prod-02-01",
              title: "MVP Mindset Development",
              details: "คิดและออกแบบ MVP โดยใช้เทคนิค Feature Prioritization (MoSCoW, RICE), การทำ Rapid Prototyping, การวิเคราะห์ Feature Impact vs Effort และการทำ User Feedback Collection เพื่อให้ได้ผลลัพธ์เร็วที่สุดและเรียนรู้จากผู้ใช้จริง",
              dates: {
                scheduledDate: "2025-06-01",
              },
              isCompleted: false
            },
            {
              id: "mock-uuid-prod-02-02",
              title: "Technical Trade-offs Analysis",
              details: "วิเคราะห์ผลกระทบของการตัดสินใจทางเทคนิคในด้าน Scalability (Load Handling, Data Growth), Performance (Response Time, Resource Usage), Maintainability (Code Quality, Documentation), Security และ Cost Implications โดยใช้ Decision Matrix และ Impact Analysis Tools",
              dates: {
                scheduledDate: "2025-07-01",
              },
              isCompleted: false
            },
            {
              id: "mock-uuid-prod-02-03",
              title: "Cross-Functional Collaboration",
              details: "พัฒนาทักษะการทำงานร่วมกับ UX/UI Designers (Design Systems, Prototyping), Marketing Team (Feature Launches, Analytics), Sales Team (Technical Sales Support) และ Business Stakeholders (ROI Analysis, Business Impact) ผ่านการทำ Joint Workshops และ Cross-functional Projects",
              dates: {
                scheduledDate: "2025-08-01",
              },
              isCompleted: false
            }
          ]
        },
        {
          id: "mock-uuid-prod-03",
          title: "Business & Data-Driven Thinking",
          details: "พัฒนาความเข้าใจในการใช้ข้อมูลเพื่อตัดสินใจทางธุรกิจ และการวัดผลความสำเร็จของผลิตภัณฑ์",
          dates: {
            dueDate: "2025-12-31",
          },
          tasks: [
            {
              id: "mock-uuid-prod-03-01",
              title: "Product Metrics & Analytics",
              details: "เรียนรู้การวัดและวิเคราะห์ Product Metrics (DAU, MAU, Retention Rate, Churn Rate, ARPU), User Behavior Analytics, Funnel Analysis, Cohort Analysis โดยใช้เครื่องมือเช่น Google Analytics, Mixpanel, Amplitude และการสร้าง Custom Dashboards",
              dates: {
                scheduledDate: "2025-09-01",
              },
              isCompleted: false
            },
            {
              id: "mock-uuid-prod-03-02",
              title: "A/B Testing & Experimentation",
              details: "ศึกษาการออกแบบและดำเนินการ A/B Tests, Multivariate Testing, Feature Flags Implementation, Statistical Analysis (Confidence Intervals, P-values) และการใช้ Experimentation Platforms เช่น Optimizely, LaunchDarkly",
              dates: {
                scheduledDate: "2025-10-01",
              },
              isCompleted: false
            },
            {
              id: "mock-uuid-prod-03-03",
              title: "Revenue Models & Business Analysis",
              details: "เรียนรู้โมเดลรายได้ของ Software Products (Subscription, Freemium, Marketplace, Ads), Pricing Strategies, Unit Economics, Customer Acquisition Cost (CAC), Lifetime Value (LTV) และการวิเคราะห์ Business Metrics ผ่านการศึกษา Case Studies และการทำ Business Model Canvas",
              dates: {
                scheduledDate: "2025-11-01",
              },
              isCompleted: false
            }
          ]
        },
        {
          id: "mock-uuid-prod-04",
          title: "Soft Skills & Communication",
          details: "พัฒนาทักษะการสื่อสารและการทำงานร่วมกับผู้อื่น เพื่อสร้างความเข้าใจและความร่วมมือที่ดีในทีม",
          dates: {
            dueDate: "2025-12-31",
          },
          tasks: [
            {
              id: "mock-uuid-prod-04-01",
              title: "Storytelling & Technical Communication",
              details: "ฝึกการนำเสนอ Technical Concepts ให้เข้าใจง่าย, การสร้าง Technical Documentation ที่มีประสิทธิภาพ, การทำ Product Demos และการสื่อสาร Technical Trade-offs กับ Non-technical Stakeholders ผ่านการใช้ Analogies และ Visual Aids",
              dates: {
                scheduledDate: "2025-12-01",
              },
              isCompleted: false
            },
            {
              id: "mock-uuid-prod-04-02",
              title: "Negotiation & Problem-Solving",
              details: "พัฒนาทักษะการเจรจาต่อรอง, Conflict Resolution, การจัดลำดับความสำคัญของ Features โดยใช้ Prioritization Frameworks, การทำ Root Cause Analysis และการใช้ Problem-Solving Techniques เช่น 5 Whys, Ishikawa Diagram",
              dates: {
                scheduledDate: "2025-12-15",
              },
              isCompleted: false
            }
          ]
        }
      ]
    },
    {
      id: "mock-uuid-seo-01",
      title: "Search Engine Optimization (SEO) Learning",
      details: `
        <h3>SEO Mastery Journey</h3>
        
        <p>A comprehensive learning path to understand and implement SEO best practices for better search engine rankings and visibility, covering both Technical SEO and Content SEO aspects.</p>
        
        <h4>Key Focus Areas</h4>
        <ul>
          <li>Technical SEO fundamentals and implementation</li>
          <li>Content optimization and keyword research</li>
          <li>On-page and off-page SEO strategies</li>
          <li>Analytics and performance measurement</li>
          <li>Link building and authority development</li>
        </ul>
    
        <h4>Expected Outcomes</h4>
        <ul>
          <li>Ability to optimize web applications for search engines</li>
          <li>Understanding of SEO best practices and ranking factors</li>
          <li>Practical experience with SEO tools and analytics</li>
          <li>Skills to improve website visibility and traffic</li>
          <li>Mastery of both technical and content aspects of SEO</li>
        </ul>
      `,
      dates: {
        dueDate: "2025-12-31"
      },
      tasks: [
        {
          id: "mock-uuid-seo-02",
          title: "Technical SEO Fundamentals",
          details: `
            <h4>Learning Objectives</h4>
            <ul>
              <li>Site structure and crawlability optimization</li>
              <li>Mobile-first indexing and responsive design</li>
              <li>Page speed optimization techniques</li>
              <li>XML sitemaps and robots.txt configuration</li>
              <li>Core Web Vitals optimization (LCP, FID, CLS)</li>
              <li>Schema markup and structured data implementation</li>
              <li>SEO-friendly URL structure design</li>
            </ul>
            
            <h4>Resources</h4>
            <ul>
              <li>Google Search Console documentation</li>
              <li>Web.dev performance guides</li>
              <li>Google's Mobile-Friendly Test tool</li>
              <li>Schema.org documentation</li>
              <li>Lighthouse performance tools</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-01"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-seo-06",
          title: "On-Page SEO Optimization",
          details: `
            <h4>Technical Optimization</h4>
            <ul>
              <li>URL structure optimization</li>
              <li>Meta tags and descriptions</li>
              <li>Header tag hierarchy (H1-H6)</li>
              <li>Image optimization and alt texts</li>
              <li>Internal linking structure</li>
              <li>Schema markup implementation</li>
            </ul>
            
            <h4>Content Optimization</h4>
            <ul>
              <li>Keyword research and mapping</li>
              <li>Content gap analysis</li>
              <li>Content optimization for featured snippets</li>
              <li>Mobile-first content strategy</li>
              <li>User intent alignment</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-10-15"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-seo-07",
          title: "Off-Page SEO and Link Building",
          details: `
            <h4>Link Building Fundamentals</h4>
            <ul>
              <li>Natural link building strategies</li>
              <li>Link quality assessment</li>
              <li>Competitor backlink analysis</li>
              <li>Anchor text optimization</li>
              <li>Link velocity monitoring</li>
            </ul>
            
            <h4>Outreach and Relationship Building</h4>
            <ul>
              <li>Blogger and influencer outreach</li>
              <li>Digital PR campaigns</li>
              <li>Content promotion strategies</li>
              <li>Social media engagement</li>
              <li>Community building tactics</li>
            </ul>

            <h4>Tools and Analysis</h4>
            <ul>
              <li>Backlink analysis tools (Ahrefs, Majestic)</li>
              <li>Outreach management platforms</li>
              <li>Link monitoring tools</li>
              <li>Domain authority checkers</li>
              <li>Competitor analysis tools</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-11-15"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-seo-03",
          title: "Content SEO and Keyword Research",
          details: `
            <h4>Study Areas</h4>
            <ul>
              <li>Keyword research methodologies and tools</li>
              <li>Content optimization techniques</li>
              <li>Meta tags and structured data implementation</li>
              <li>User intent analysis and mapping</li>
              <li>LSI Keywords implementation</li>
              <li>Content structure and hierarchy</li>
            </ul>
            
            <h4>Tools to Master</h4>
            <ul>
              <li>Google Keyword Planner</li>
              <li>SEMrush / Ahrefs</li>
              <li>Google Trends</li>
              <li>Surfer SEO</li>
              <li>Yoast SEO</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-06-01"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-seo-04",
          title: "Analytics and Performance Tracking",
          details: `
            <h4>Key Metrics to Track</h4>
            <ul>
              <li>Organic traffic and rankings</li>
              <li>Conversion rates and user behavior</li>
              <li>Core Web Vitals</li>
              <li>Backlink profile analysis</li>
              <li>User engagement metrics</li>
              <li>SERP position tracking</li>
            </ul>
            
            <h4>Implementation Tasks</h4>
            <ul>
              <li>Set up Google Analytics 4</li>
              <li>Configure Search Console monitoring</li>
              <li>Implement performance tracking tools</li>
              <li>Create custom dashboards</li>
              <li>Set up conversion tracking</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-09-01"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-seo-05",
          title: "Link Building and Off-Page SEO",
          details: `
            <h4>Strategy Development</h4>
            <ul>
              <li>Guest posting strategies</li>
              <li>Broken link building techniques</li>
              <li>Digital PR and outreach</li>
              <li>Social signals optimization</li>
              <li>Authority building techniques</li>
            </ul>
            
            <h4>Tools and Resources</h4>
            <ul>
              <li>Ahrefs for backlink analysis</li>
              <li>HARO for PR opportunities</li>
              <li>Outreach tools and templates</li>
              <li>Link quality assessment tools</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-12-01"
          },
          isCompleted: false
        }
      ]
    }
  ]
}
  
export const financialFreedomPlanningProject: Project = {
  id: "mock-uuid-54",
  parent_id: null,
  title: "Financial Freedom",
  details: "แนวทางการสร้างอิสรภาพทางการเงินที่ยั่งยืน ครอบคลุมการจัดการหนี้ การสร้างรายได้เพิ่มเติม และการสร้างความมั่นคงทางการเงินในระยะยาว โดยเน้นการตั้งเป้าหมายที่ชัดเจนและการลงมือทำที่เป็นรูปธรรม เพื่อให้สามารถควบคุมการเงินของตนเองและสร้างเสรีภาพที่แท้จริง",
  dates: {
    scheduledDate: "2025-01-01",
    dueDate: "2025-12-31",
  },
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-55",
      parent_id: "mock-uuid-54",
      title: "ปิดหนี้บัตรเครดิต",
      details: "วางแผนและจัดการเพื่อลดและปิดหนี้บัตรเครดิตอย่างมีประสิทธิภาพ ลดภาระดอกเบี้ย และปลดหนี้ที่เป็นอุปสรรคต่อการสร้างอิสรภาพทางการเงิน",
      dates: {
        dueDate: "2025-06-01",
      },
      tasks: [
        {
          id: "mock-uuid-56",
          parent_id: "mock-uuid-55",
          title: "รวบรวมข้อมูลหนี้",
          details: "ตรวจสอบยอดหนี้ในบัตรเครดิตแต่ละใบ อัตราดอกเบี้ย และกำหนดการชำระเงิน",
          dates: {
            scheduledDate: "2025-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-57",
          parent_id: "mock-uuid-55",
          title: "จัดลำดับความสำคัญของการชำระหนี้",
          details: "เลือกชำระหนี้ที่มีดอกเบี้ยสูงที่สุดก่อน หรือใช้วิธี Snowball โดยชำระหนี้ที่มียอดต่ำสุดก่อน",
          dates: {
            scheduledDate: "2025-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-58",
          parent_id: "mock-uuid-55",
          title: "กำหนดงบประมาณเพื่อลดหนี้",
          details: "จัดทำงบประมาณรายเดือนเพื่อสำรองเงินสำหรับการชำระหนี้ และลดค่าใช้จ่ายที่ไม่จำเป็น",
          dates: {
            scheduledDate: "2025-03-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-59",
          parent_id: "mock-uuid-55",
          title: "ติดตามและประเมินผล",
          details: "ติดตามการชำระหนี้อย่างต่อเนื่องและปรับแผนหากจำเป็น",
          dates: {
            scheduledDate: "2025-06-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-60",
      parent_id: "mock-uuid-54",
      title: "สร้างรายได้จากโปรเจกต์การจอง",
      details: "พัฒนารายได้จากโปรเจกต์ที่เกี่ยวข้องกับการให้บริการ การขาย หรือการจองออนไลน์ เช่น การจัดการการจองโรงแรม ที่พัก หรือบริการต่าง ๆ",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-61",
          parent_id: "mock-uuid-60",
          title: "ค้นหาโอกาสในโปรเจกต์การจอง",
          details: "วิจัยตลาดและเลือกประเภทของบริการหรือผลิตภัณฑ์ที่เหมาะสมสำหรับการจอง เช่น การจัดการที่พัก การจัดกิจกรรม หรือบริการท่องเที่ยว",
          dates: {
            scheduledDate: "2025-03-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-62",
          title: "พัฒนาแพลตฟอร์มการจอง",
          details: "สร้างเว็บไซต์หรือใช้แพลตฟอร์มที่มีอยู่ เช่น Airbnb, Booking.com หรือแอปพลิเคชันจองอื่น ๆ",
          dates: {
            scheduledDate: "2025-04-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-63",
          title: "โปรโมทและสร้างเครือข่ายลูกค้า",
          details: "ใช้การตลาดดิจิทัลและโซเชียลมีเดียเพื่อเข้าถึงกลุ่มเป้าหมายและสร้างฐานลูกค้าที่แข็งแกร่ง",
          dates: {
            scheduledDate: "2025-06-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-64",
          title: "วิเคราะห์รายได้และปรับปรุงบริการ",
          details: "ติดตามรายได้และผลตอบรับของลูกค้า พร้อมปรับปรุงบริการเพื่อเพิ่มความพึงพอใจและรายได้",
          dates: {
            scheduledDate: "2025-12-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-65",
      title: "สร้างเงินล้านแรก",
      details: "วางแผนและดำเนินการเพื่อสร้างรายได้รวมหนึ่งล้านบาท โดยการวางเป้าหมายการเงิน การจัดการรายได้ และการลงทุนอย่างมีประสิทธิภาพ",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-66",
          title: "กำหนดเป้าหมายรายได้",
          details: "วิเคราะห์ความสามารถทางการเงินในปัจจุบันและตั้งเป้าหมายสำหรับการสร้างรายได้รวมหนึ่งล้านบาท",
          dates: {
            scheduledDate: "2025-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-67",
          title: "เพิ่มรายได้จากแหล่งที่มีอยู่",
          details: "สำรวจโอกาสการเพิ่มรายได้ เช่น การเลื่อนตำแหน่ง การทำงานเสริม หรือการขายสินค้าที่มีอยู่",
          dates: {
            scheduledDate: "2025-04-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-68",
          title: "เริ่มต้นการลงทุน",
          details: "นำรายได้ส่วนหนึ่งไปลงทุนในสินทรัพย์ที่มีความเสี่ยงต่ำถึงปานกลาง เช่น กองทุนรวม หุ้น หรืออสังหาริมทรัพย์",
          dates: {
            scheduledDate: "2025-06-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-69",
          title: "ติดตามความก้าวหน้า",
          details: "ตรวจสอบรายได้และผลตอบแทนจากการลงทุน พร้อมปรับแผนเพื่อเพิ่มโอกาสในการบรรลุเป้าหมาย",
          dates: {
            scheduledDate: "2025-12-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-70",
      title: "ปิดหนี้บ้าน",
      details: "วางแผนและดำเนินการชำระหนี้บ้านให้หมดเร็วขึ้น เพื่อลดภาระดอกเบี้ยและสร้างอิสรภาพทางการเงิน",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-71",
          title: "ตรวจสอบยอดหนี้บ้าน",
          details: "ตรวจสอบยอดหนี้บ้านทั้งหมด อัตราดอกเบี้ย และระยะเวลาการชำระหนี้",
          dates: {
            scheduledDate: "2025-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-72",
          title: "เพิ่มการชำระเงินต้น",
          details: "จัดทำแผนการเพิ่มการชำระเงินต้น เพื่อช่วยลดดอกเบี้ยรวม",
          dates: {
            scheduledDate: "2025-03-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-73",
          title: "เจรจาเงื่อนไขดอกเบี้ยกับธนาคาร",
          details: "ติดต่อธนาคารเพื่อเจรจาอัตราดอกเบี้ยที่ต่ำลงหรือปรับโครงสร้างหนี้",
          dates: {
            scheduledDate: "2025-06-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-74",
          title: "ติดตามการลดหนี้",
          details: "ตรวจสอบยอดหนี้และประเมินความก้าวหน้าในการชำระเงินทุกไตรมาส",
          dates: {
            scheduledDate: "2025-12-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-75",
      title: "วางแผนความมั่นคงทางการเงินในระยะยาว",
      details: "สร้างแผนการออมและการลงทุนที่เหมาะสมเพื่อให้เกิดความมั่นคงทางการเงินและเตรียมตัวสำหรับอนาคต",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-76",
          title: "กำหนดเป้าหมายการเงินระยะยาว",
          details: "ตั้งเป้าหมายที่ชัดเจน เช่น การเกษียณ การซื้อบ้าน หรือการลงทุน",
          dates: {
            scheduledDate: "2025-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-77",
          title: "สร้างกองทุนสำรองฉุกเฉิน",
          details: "สะสมเงินสำรองฉุกเฉินที่สามารถครอบคลุมค่าใช้จ่ายได้ 3-6 เดือน",
          dates: {
            scheduledDate: "2025-04-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-78",
          title: "เริ่มลงทุนในสินทรัพย์ที่เหมาะสม",
          details: "ศึกษาการลงทุนในหุ้น กองทุนรวม อสังหาริมทรัพย์ หรือสินทรัพย์อื่น ๆ ที่มีศักยภาพ",
          dates: {
            scheduledDate: "2025-06-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-79",
          title: "ติดตามและปรับแผนการเงิน",
          details: "ตรวจสอบสถานะการเงินและการลงทุนอย่างสม่ำเสมอ พร้อมปรับเปลี่ยนแผนหากจำเป็น",
          dates: {
            scheduledDate: "2025-12-01",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const weddingPlanningData: Project = {
  id: "mock-uuid-1-wedding-planning",
  title: "การวางแผนแต่งงาน",
  details: "แนวทางการจัดการและวางแผนแต่งงานอย่างเป็นระเบียบ ครอบคลุมตั้งแต่การขอแต่งงาน การวางแผนงบประมาณและสถานที่จัดงาน จนถึงการเตรียมความพร้อมในวันแต่งงาน รายละเอียดทุกขั้นตอนเพื่อให้คู่รักสามารถเพลิดเพลินกับช่วงเวลาพิเศษของพวกเขาได้อย่างเต็มที่",
  dates: {
    scheduledDate: "2025-01-01",
    dueDate: "2025-12-31",
  },
  tasks: [
    {
      id: "mock-uuid-2",
      title: "หาข้อมูลจากเพื่อนที่มีประสบการณ์ มิ้นท์ โจ้ พี่นัท",
      details: "กาข้อมูลจากเพื่อนที่มีประสบการณ์ มิ้นท์ โจ้",
      dates: {
        dueDate: "2025-07-01",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-3-wedding-planning",
      title: "แหวนแต่งงาน หรือ สร้อยแต่งานคาร์เทียร์",
      details: "",
      dates: {
        dueDate: "2025-07-01",
      },
      isCompleted: false
    }
  ],
  subProjects: [
    {
      id: "mock-uuid-3",
      title: "แผนการขอแต่งงาน",
      details: "วางแผนการขอแต่งงานอย่างรอบคอบเพื่อให้เกิดความหมายและเป็นที่น่าจดจำ รวมถึงการเลือกสถานที่ การเตรียมตัวด้านอารมณ์และการจัดการรายละเอียดต่าง ๆ",
      dates: {
        dueDate: "2025-04-04T00:00:00+07:00",
        scheduledDate: "2024-04-03T00:00:00+07:00",
      },
      tasks: [
        {
          id: "mock-uuid-4",
          title: "แนวคิดในการขอแต่งงาน",
          details: "ตัดสินใจเกี่ยวกับธีมหรือแนวคิดที่สะท้อนถึงความสัมพันธ์ของคู่รัก เช่น ดินเนอร์สุดโรแมนติก การผจญภัยกลางแจ้ง หรือการขอแต่งงานในที่สาธารณะ",
          dates: {
            scheduledDate: "2024-04-03T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-5",
          title: "การเลือกสถานที่",
          details: "เลือกสถานที่ที่มีความหมายต่อความสัมพันธ์หรือเป็นฉากหลังที่สวยงามสำหรับการขอแต่งงาน",
          dates: {
            scheduledDate: "2024-04-03T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-6",
          title: "การเลือกแหวนหมั้น",
          details: "ค้นคว้าและซื้อแหวนที่เหมาะกับสไตล์และความชอบของอีกฝ่าย รวมถึงการตรวจสอบขนาดให้ถูกต้อง",
          dates: {
            scheduledDate: "2024-04-03T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-7",
          title: "การเตรียมคำพูดและรายละเอียด",
          details: "เตรียมคำพูดที่จริงใจและซ้อมการขอแต่งงาน พร้อมประสานงานเกี่ยวกับเวลา ช่างภาพ หรือองค์ประกอบเซอร์ไพรส์อื่น ๆ",
          dates: {
            scheduledDate: "2024-04-03T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-proposal-parents",
          title: "ขอแม่แฟนแบบเป็นทางการ",
          details: `
            <p>ขอพ่อแม่แฟนอย่างเป็นทางการเพื่อขอแต่งงาน</p>
            <p>อ้างอิง: <a href="https://chatgpt.com/g/g-p-67fcd037cf5081918e53823db42da123-coach-gentleman/c/6816765f-aef0-8008-a862-1cc002835989">ChatGPT Discussion</a></p>
          `,
          dates: {
            scheduledDate: "2024-05-04T00:00:00+07:00"
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-8",
      title: "การวางแผนงานแต่ง/งบประมาณ/สถานที่",
      details: "จัดการทุกด้านของงานแต่งงาน ตั้งแต่การวางแผนงบประมาณ รายชื่อแขก ไปจนถึงการเลือกสถานที่ที่เหมาะสม รวมถึงการสร้างภาพรวมของงานและการค้นหาผู้เชี่ยวชาญที่เหมาะสม",
      dates: {
        dueDate: "2025-09-01",
      },
      tasks: [
        {
          id: "mock-uuid-9",
          title: "กำหนดวันเวลาคร่าว ๆ ของงานแต่งงาน",
          details: "กำหนดงันเวลาคร่าว ๆ ของงานแต่งงาน เช่น วันที่ เวลา และโซนสถานที่คร่าว ๆ",
          dates: {
            scheduledDate: "2025-07-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-10",
          title: "การวางแผนงบประมาณ",
          details: "กำหนดงบประมาณทั้งหมดและแบ่งสัดส่วนสำหรับส่วนสำคัญ เช่น สถานที่ อาหาร ชุดแต่งงาน และความบันเทิง",
          dates: {
            scheduledDate: "2025-07-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-11",
          title: "การวางแผนธีมและการตกแต่ง",
          details: "ตัดสินใจเกี่ยวกับธีม สีหลัก และองค์ประกอบการตกแต่ง ประสานงานกับร้านดอกไม้และนักตกแต่ง",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-wedding-songs",
          title: "เลือกเพลงสำหรับงานแต่งงาน",
          details: `
            <h3>รายชื่อเพลงที่สนใจ</h3>
            <ul>
              <li>เพลงรัก Three Man Download</li>
              <li>Bird of a feather</li>
              <li>paramore - The only Exception</li>
              <li>Dad Harmony - Beautiful Things (<a href="https://youtu.be/UNyk5YjqQjU?si=bGbZvRbLtOrmzCKb">YouTube</a>)</li>
              <li>Lauv - Paris in the rain</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-08-01"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-12",
          title: "การเลือกชุดแต่งงานและการฟิตติ้ง",
          details: "เลือกชุดแต่งงานสำหรับคู่รักและทีมเพื่อนเจ้าสาว พร้อมนัดหมายและเข้ารับการปรับแก้ชุด",
          dates: {
            scheduledDate: "2025-08-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-13",
          title: "การเลือกสถานที่",
          details: "ค้นคว้าและจองสถานที่ที่สอดคล้องกับธีมงานแต่งและจำนวนแขก",
          dates: {
            scheduledDate: "2024-08-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-14",
          title: "การสร้างรายชื่อแขก",
          details: "รวบรวมรายชื่อแขกที่ต้องการเชิญและตรวจสอบให้แน่ใจว่าครอบครัวและเพื่อนที่สำคัญทั้งหมดรวมอยู่ในนั้น",
          dates: {
            scheduledDate: "2025-08-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-15",
          title: "การเลือกผู้ให้บริการ",
          details: "จองผู้จัดอาหาร ช่างภาพ และผู้ให้บริการความบันเทิงต่าง ๆ ทำสัญญาเพื่อรับประกันการให้บริการ",
          dates: {
            scheduledDate: "2025-10-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-16",
      title: "การเตรียมตัวสำหรับงานแต่งงาน",
      details: "จัดการเตรียมความพร้อมทั้งหมดเพื่อให้งานแต่งงานเป็นไปอย่างราบรื่น รวมถึงการฟิตติ้งชุด การซ้อมพิธี และการยืนยันแผนการจัดงานทั้งหมด",
      dates: {
        dueDate: "2025-12-01",
      },
      tasks: [
        {
          id: "mock-uuid-17",
          title: "การวางแผนการซ้อมพิธี",
          details: "จัดและดำเนินการซ้อมพิธีแต่งงาน รวมถึงผู้เข้าร่วมสำคัญ เช่น ผู้ทำพิธีและทีมเพื่อนเจ้าสาว",
          dates: {
            scheduledDate: "2025-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-18",
          title: "การยืนยันแผนงานขั้นสุดท้าย",
          details: "ยืนยันกับผู้ให้บริการและทีมงานสถานที่ ตรวจสอบกำหนดการ ความพร้อมของแขก และแผนสำรอง",
          dates: {
            scheduledDate: "2025-03-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-19",
          title: "การเตรียมชุดอุปกรณ์ฉุกเฉินในวันแต่งงาน",
          details: "จัดเตรียมชุดอุปกรณ์ฉุกเฉินที่มีสิ่งจำเป็น เช่น อุปกรณ์ปฐมพยาบาล ชุดเย็บผ้า และของว่าง",
          dates: {
            scheduledDate: "2025-04-01",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const houseRenovationTopic: Project = {
  id: "mock-uuid-20",
  title: "House Renovation",
  details: "A comprehensive plan for renovating and upgrading the home environment. This includes structural improvements, aesthetic enhancements, and functional upgrades to create a more comfortable and efficient living space. The renovation process covers everything from initial planning and budgeting to contractor selection and project execution, ensuring each modification adds value while maintaining the home's character. Whether focusing on specific rooms like kitchen and bathrooms or undertaking whole-house improvements, this framework helps organize and track all aspects of home renovation projects.",
  dates: {
    scheduledDate: "2025-01-01",
    dueDate: "2025-12-31",
  },
  tasks: [],
  subProjects: [
    
    {
      id: "mock-uuid-200000",
      title: "แจ้งซ่อมบ้าน",
      details: `<p><a href="https://www.notion.so/khemmachart/SB-1379d9cf89994dce99187f045e5c5c78?pvs=4">Notion: รายละเอียดการแจ้งซ่อมบ้าน</a></p>`,
      dates: {
        dueDate: "2025-05-05T00:00:00+07:00",
      },
      tasks: []
    },
    {
      id: "mock-uuid-earthquake-repair",
      title: "แจ้งซ่อมและติดตามความคืบหน้าการซ่อมแผ่นดินไหว",
      details: `<p>รายละเอียดการซ่อมแซมความเสียหายจากแผ่นดินไหว: <a href="https://drive.google.com/drive/folders/1tlNuoI2TR-qbsVhS4VK81rwAIVLL7YID?usp=share_link">Google Drive</a></p>`,
      tasks: [
        {
          id: "mock-uuid-earthquake-repair-01",
          title: "ติดต่อวิศวกรประเมินความเสียหาย",
          details: `<p>รายละเอียดการซ่อมแซมความเสียหายจากแผ่นดินไหว: <a href="https://drive.google.com/drive/folders/1tlNuoI2TR-qbsVhS4VK81rwAIVLL7YID?usp=share_link">Google Drive</a></p>`,
          dates: {
            scheduledDate: "2025-05-01T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-earthquake-repair-02", 
          title: "ประสานงานนิติและส่งเรื่องประเมินความเสียหาย",
          details: `<p>รายละเอียดการซ่อมแซมความเสียหายจากแผ่นดินไหว: <a href="https://drive.google.com/drive/folders/1tlNuoI2TR-qbsVhS4VK81rwAIVLL7YID?usp=share_link">Google Drive</a></p>`,
          dates: {
            scheduledDate: "2025-05-05T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-earthquake-repair-03",
          title: "ติดตามการดำเนินงาน",
          details: "",
          dates: {
            scheduledDate: "2025-05-10T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-earthquake-repair-04",
          title: "จัดหาผู้รับเหมา",
          details: "",
          dates: {
            scheduledDate: "2025-05-10T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-earthquake-repair-05",
          title: "ดำเนินการซ่อม",
          details: "",
          dates: {
            scheduledDate: "2025-05-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-21",
      title: "Overall Renovation",
      details: "",
      dates: {
        dueDate: "2025-01-01",
      },
      tasks: [
        {
          id: "mock-uuid-22",
          title: "Digital Door Lock",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-23",
          title: "พื้นไม้/บัว",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-24",
          title: "ม่าน/หน้าต่างอลูมิเนียมกรอบบาง",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-rabbit-pen-123",
      title: "คอกกระต่าย",
      details: "https://www.instagram.com/achie_pet/, https://www.instagram.com/p/DEcZ9BOT5tA/?img_index=1",
      dates: {
        dueDate: "2025-01-01",
      },
      tasks: []
    },
    {
      id: "mock-uuid-26",
      title: "Kitchen Renovation",
      details: ".",
      dates: {
        dueDate: "2025-01-01",
      },
      tasks: [
        {
          id: "mock-uuid-26",
          title: "เครื่องล้างจาน",
          details: ".",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-27",
          title: "ตู้เย็นดี ๆ หรือไม่ก็ Built-in",
          details: ".",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-28",
          title: "Coffee Corner and Coffee Machine",
          details: ".",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-29",
      title: "ห้องนอน",
      details: "",
      dates: {
        dueDate: "2025-01-01",
      },
      tasks: [
        {
          id: "mock-uuid-30",
          title: "แอร์ฝังฝ้า",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-31",
          title: "เตียงยกได้ สามารถใส่กระเป๋าเดินทางใบใหญ่ได้",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-32",
      title: "ห้องน้ำ",
      details: "",
      dates: {
        dueDate: "2025-01-01",
      },
      tasks: [
        {
          id: "mock-uuid-33",
          title: "อ่างล้างหน้าชิ้นเดียวสวย ๆ",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-34",
      title: "Working Room - ห้องทำงาน",
      details: "",
      dates: {
        dueDate: "2025-01-01",
      },
      tasks: [
        {
          id: "mock-uuid-35",
          title: "โต๊ะทำงานสวย ๆ + ถ้าปรับระดับได้ด้วยกั็ดี",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-36",
          title: "ชั้นวางหนังสือ",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-37",
          title: "โซฟาเอนได้ของมูจิ",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-38",
          title: "โซฟาที่เป็นตัว L ที่ยับ ๆ",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-39",
          title: "NAS",
          details: `
          <a href="https://chatgpt.com/g/g-p-680e8a8bedf08191af5e323b172f6f0b-coach-software-development/c/68139cfc-6038-8008-9d1b-e2c480bb13fa">
            https://chatgpt.com/g/g-p-680e8a8bedf08191af5e323b172f6f0b-coach-software-development/c/68139cfc-6038-8008-9d1b-e2c480bb13fa
          </a>
          `,
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-40",
          title: "ตู้สำรองไฟฟ้า",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-41",
          title: "Herman Miller Chair",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-42",
      title: "Living Room ห้องนั่งเล่น Renovation",
      details: "",
      dates: {
        dueDate: "2025-01-01",
      },
      tasks: [
        {
          id: "mock-uuid-43",
          title: "Home Theater / Soundbar / Acoustic Panel (แผ่นซับเสียง)",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-44",
          title: "Game Console Corner",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-45",
          title: "โซฟาเอนได้ของมูจิ",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-46",
          title: "โซฟาเอนได้ของมูจิ",
          details: "",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

// Example of restructured mock data
export const travellingData: Project = {
  id: "mock-uuid-100",
  title: "Travelling",
  details: "<ul><li>Fjallraven Keb Eco-shell <a href='https://www.youtube.com/watch?v=Lmixzz3xJgE'>Link</a></li><li>Fjallraven Kaipak Jacket เสื้อ jacket เดินป่าเที่ยวทั่วโลก ที่เท่และ ฟั่งชั่นครบเครื่อง <a href='https://www.youtube.com/watch?v=mGdrX_sfjYc'>Link</a></li><li>เสื้อ long john ขนแกะ Base Layer Super Merino Wool (Montbell) - <a href='https://www.facebook.com/montbellthai/posts/862183979352245/'>Link</a></li><li>แต้งตัวเป็น layer <a href='https://youtu.be/xZEsLSfzR34?si=UodMceJWBXrmT9lJ'>Link</a></li><li>แต่งตัวเป็น Layers 1 <a href='https://youtu.be/JH0hgsyC4DI?si=lhRlFZrUw5Ga1x68'>Link</a></li><li>แต่งตัวเป็น Layers 2 <a href='https://youtu.be/8ySr3Uqpepk?si=T0LKtThl-3sk6kct'>Link</a></li><li>เสื้อเดินป่า <a href='https://youtu.be/bPxDBRznD84?si=5262fVRQqrDBFrQK'>Link</a></li><li>ชุดสกี <a href='https://youtu.be/Be5WJV_xL50?si=q3RgfDnWWgdysutP'>Link</a></li></ul>",
  dates: {
    scheduledDate: "2025-01-01",
    dueDate: "2025-12-31",
  },
  tasks: [
    {
      id: "mock-uuid-100",
      title: "SALOMON Quest 4 GTX ",
      details: "https://www.thepuffinhouse.com/product/backpacking-shoes-salomon-quest4-gtx/11000379603008127?srsltid=AfmBOorqI32I4zcVk_01f4ZHTwZmqqP0EAod5w_I5fz_6mOjqVxsdwSf",
      dates: {
        scheduledDate: "2025-02-02",
      },
      isCompleted: true
    },
    {
      id: "mock-uuid-101",
      title: "Research ชุดสกี",
      details: "Watch and take notes from: https://youtu.be/Be5WJV_xL50?si=q3RgfDnWWgdysutP",
      dates: {
        dueDate: "2024-03-01",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-102",
      title: "Research เสื้อเดินป่า", 
      details: "Watch and take notes from: https://youtu.be/bPxDBRznD84?si=5262fVRQqrDBFrQK",
      dates: {
        dueDate: "2024-03-01",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-103",
      title: "Research การแต่งตัวเป็น layer",
      details: "Watch and take notes from: https://youtu.be/xZEsLSfzR34?si=UodMceJWBXrmT9lJ",
      dates: {
        dueDate: "2024-03-01", 
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-104",
      title: "Research แต่งตัวลุยหิมะ",
      details: "Watch and take notes from:\n- https://youtu.be/JH0hgsyC4DI?si=lhRlFZrUw5Ga1x68\n- https://youtu.be/8ySr3Uqpepk?si=T0LKtThl-3sk6kct",
      dates: {
        dueDate: "2024-03-01",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-105",
      title: "Destination Research",
      details: "Choose and research dream destinations, identify cultural landmarks and attractions, check weather conditions and local traditions",
      dates: {
        dueDate: "2024-03-01",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-106",
      title: "Budget Planning",
      details: "Estimate costs for flights, accommodation, and daily expenses, set aside funds for unexpected expenses, plan savings timeline and explore travel deals",
      dates: {
        dueDate: "2024-04-01",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-107",
      title: "Packing Essentials",
      details: "Clothing suitable for the destination's climate, specialized gear (e.g., tents, sleeping bags for camping trips), travel documents, chargers, and medical kits",
      dates: {
        dueDate: "2024-05-01",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-108",
      title: "Travel Documents and Insurance",
      details: "Ensure passports and visas are valid, purchase travel insurance covering medical and cancellation",
      dates: {
        dueDate: "2025-07-01",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-109",
      title: "Itinerary Planning",
      details: "Draft detailed schedules, allocate time for exploration and relaxation, pre-book tickets for popular attractions if necessary",
      dates: {
        dueDate: "2024-07-01",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-110",
      title: "Health and Safety Preparation",
      details: "Get necessary vaccinations, pack medications and first-aid kits, research emergency contacts at the destination",
      dates: {
        dueDate: "2024-08-01",
      },
      isCompleted: false
    }
  ],
  subProjects: [
    {
      id: "mock-uuid-136",
      title: "2025 Paris - Italy (Venice, Florence, Rome)",
      details: "Experience the romance of Paris and the cultural richness of Italy's historic cities - Venice, Florence, and Rome.",
      tasks: [
        {
          id: "mock-uuid-136-11111",
          title: "ขอหนังสือรับรองการทำงาน (Employment Certificate)",
          details: "Documents -> เอกสารการทำงาน -> Employment Letter_ESS001_02022025.pdf",
          dates: {
            scheduledDate: "2025-01-28T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-136-11111-0112344",
          title: "ขอหนังสือรับรองการทำงาน เพื่อใช้ในการขอวีซ่า (Visa Employment Letter)",
          details: "Documents -> เอกสารการทำงาน -> Visa Employment Letter_ESS001_02022025.pdf",
          dates: {
            scheduledDate: "2025-01-28T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-136-11112-011102",
          title: "ขอหนังสือรับรองสถานะทางการเงิน (Bank Certificate) ระบุยอดเงินในบัญชีในสกุลเงิน ยูโร (EUR) และระบุสถานทูตเป็นอิตาลี่",
          details: "1. หนังสือรับรองสถานะทางการเงิน (Bank Certificate) 2. Statements (รายงานยอดบัญชีทั้งหมด) โดยเตรียมบัตรประชาชน บัญชีธนาคาร และเงินประมาณ 500 บาท",
          dates: {
            scheduledDate: "2025-02-02T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-136-11112",
          title: "(Rework) ขอหนังสือรับรองสถานะทางการเงิน (Bank Certificate) ระบุยอดเงินในบัญชีในสกุลเงิน ยูโร (EUR) และระบุสถานทูตเป็นอิตาลี่",
          details: "1. หนังสือรับรองสถานะทางการเงิน (Bank Certificate) 2. Statements (รายงานยอดบัญชีทั้งหมด) โดยเตรียมบัตรประชาชน บัญชีธนาคาร และเงินประมาณ 500 บาท",
          dates: {
            scheduledDate: "2025-02-09T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-136-11112-01",
          title: "Contact Embassy for Visa Application",
          details: "",
          dates: {
            scheduledDate: "2025-02-14T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-136-11112-01-123",
          title: "ซื้อเสื้อผ้า",
          details: `
            <ul>
              <li>Base Layer (ชั้นในสุด) – คุมความชื้น
                <ul>
                  <li>เสื้อ-กางเกง Merino Wool แบรนด์ Montbell 2nd Floor CentralWorld ราคาประมาณตัวละ 3,500 บาท</li>
                  <li>Heattech</li>
                </ul>
              </li>
              <li>Middle Layer (ชั้นกลาง) – ให้ความอบอุ่น เสื้อ Fleece, Down jacket บาง, หรือเสื้อไหมพรม
                <ul>
                  <li>เสื้อ Sweater สีขาว</li>
                  <li>เสื้อ Sweater สีดำ</li>
                  <li>Montbell down jacket</li>
                </ul>
              </li>
              <li>Outer Layer (ชั้นนอก) – ป้องกันลม น้ำ หิมะ
                <ul>
                  <li>Overcoat</li>
                  <li>Light Down Jacket - Fill Power 800-1,000</li>
                  <li>Parka, Gore-Tex jacket, หรือเสื้อโค้ทยาวสำหรับอุณหภูมิต่ำมาก</li>
                  <li>ตึกแดงวินเทจ ชั้น 3 โซน B หน้าบรรไดเลื่อน B4</li>
                  <li>ตึกแดงวินเทจ ชั้น 4 โซน 4A151</li>
                  <li>เสื้อโค้ทยาว Uniqlo</li>
                  <li>เสื้อโค้ทยาว H&M</li>
                </ul>
              </li>
              <li>หมวก
                <ul>
                  <li>หมวกเบเร่ต์</li>
                  <li>หมวกไหมพรม</li>
                </ul>
              </li>
              <li>รองเท้า/ถุงเท้า หลาย ๆ คู่เน้นใช้แล้วทิ้ง</li>
              <li>หมอนรองคอมูจิ</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-04-01T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-137",
          title: "Financial Planning",
          details: "<a href='https://docs.google.com/spreadsheets/d/1_6JRVUijZBUvIvZ4XhyHMGEcoOCqitHHByy9PvooBVI/edit?gid=0#gid=0'>Financial Planning Spreadsheet</a>",
          dates: {
            scheduledDate: "2024-10-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-138",
          title: "Reserach Must-See Landmarks",
          details: "",
          dates: {
            scheduledDate: "2024-11-01",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-140",
          title: "Packing List",
          details: "",
          dates: {
            scheduledDate: "2024-12-01",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-141",
          title: "Shopping List: ของฝาก",
          details: `
          <h3>ของที่ต้องการซื้อ</h3>
          <ul>
            <li>Biscotti (ขนมอบกรอบสไตล์อิตาลี)</li>
            <li>Limoncello (ลิเคียวรสเลมอน)</li>
            <li>Moka Pod</li>
            <li>เมล็ดกาแฟอิตาเลียน</li>
            <li>ช็อกโกแลต Perugina หรือ Venchi</li>
            <li>ไวน์อิตาเลียน</li>
            <li>เครื่องหนังจากฟลอเรนซ์ (กระเป๋า, เข็มขัด)</li>
            <li>เครื่องแก้ว Murano จากเวนิส</li>
            <li>งานฝีมือท้องถิ่น</li>
          </ul>
          <h3>ของฝากไปยัง</h3>
          <ul>
            <li>ฝากทีม / ออฟฟิส / พี่อิ้ด พี่นิว พี่นัท</li>
            <li>ฝากนิติ</li>
            <li>ฝากพี่ฟ้า หลาน พ่อ ย่า</li>
            <li>หมอหมู</li>
            <li>ฝากขวาน มิ้นท์ พรีม</li>
          </ul>`,
          dates: {
            scheduledDate: "2025-04-05T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-142",
          title: "Shopping List: สำหรับตัวเอง",
          details: "https://chatgpt.com/c/67af88a3-519c-8008-879a-320d1f938e22",
          dates: {
            scheduledDate: "2025-04-05T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-11101",
      title: "2025 Japan Fuji Mount Hiking",
      details: `
        <h3>วิธีปีนภูเขาไฟฟูจิ</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=-ffUT5Ht_us">
              ปีนฟูจิคนเดียวแบบไม่มีพัก ! ต้องเตรียมตัวยังไงบ้าง? | Amko Diary
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=AS5bmzPqLDU">
              RatchetBoy: ปีนภูเขาที่สูงที่สุดในญี่ปุ่น!
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=X9la5fknsYA&t=784s">
              พิชิตยอดภูเขาไฟที่สูงที่สุดในญี่ปุ่น 3,776 เมตร 26 ชม.ไม่นอน เกือบตุย | มาร์คติดป่า EP.1
            </a>
          </li>
          <li>
            <a href="https://youtu.be/SJqTxWboaZM?si=wkgNqH-8uiaoZzN4">
              Fuji Climbing 2023 - Yoshida Trail | Tomoekan 8th station เดินขึ้นภูเขาไฟฟูจิซังจะรอดไหมไปดูกัน 🇯🇵
            </a>
          </li>
          <li>
            <a href="https://youtu.be/kNFqICNU8M4">
              FUJI | ลุยขึ้นยอดฟูจิซัง เดินไม่ยาก วิวสวยกว่าที่คิดไว้มาก | Country PEAK Series
            </a>
          </li>
          <li>
            <a href="https://youtu.be/AJgHFUvud0E">
              Runnimal: เที่ยวญี่ปุ่น วิธี ปีน ภูเขาไฟฟูจิ Mount Fuji Climbing ตอน 1
            </a>
          </li>
          <li>
            <a href="https://youtu.be/AaiS8bezFFY">
              Runnimal: รีวิวปีนภูเขาไฟฟูจิ Mount Fuji Climbing ตอนที่ 2
            </a>
        </ul>
        <h3>หาข้อมูลเพิ่มเติม</h3>
        <ul>
          </li>
          <li>หาข้อมูล: Treking มีกี่ Trace</li>
          <li>หาข้อมูล: การจองตั๋วฟูจิและจองตั๋วรถทัวร์ล่วงหน้า</li>
          <li>หาข้อมูล: Checklist การเตรียมตัว อุปกรณ์ ออกซิเจน</li>
          <li>หาข้อมูล: จองที่พักล่วงหน้า อยากได้วิวสวย ๆ (เค้าเรียกว่า Hut)</li>
        </ul>
      `,
      dates: {
        scheduledDate: "2025-07-01T00:00:00+07:00",
      },
      tasks: [
        {
          id: "mock-uuid-111-7",
          title: "แจ้งลางาน",
          details: "set calendar, submit leave request, บันทึกใน google sheet",
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-8",
          title: "จองตั๋วเครื่องบิน",
          details: "",
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-9",
          title: "จองที่พักโตเกียว",
          details: "LANDABOUT TOKYO",
          dates: {
            scheduledDate: "2025-06-25T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-111-10",
          title: "จองที่พักคาวากุจิโกะ",
          details: "",
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-11",
          title: "วางแผนตารางเที่ยว",
          details: `<a href="https://www.notion.so/khemmachart/Tokyo-1f7cd45f383d80cd8533cfb734cd987e?pvs=4">Notion: Tokyo Trip Planning</a>`,
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-12",
          title: "วางแผนการเงิน",
          details: `<a href="https://www.notion.so/khemmachart/Financial-Planning-1ffcd45f383d801f9369c5d915360093?pvs=4">Notion: Financial Planning</a>`,
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-13",
          title: "ซื้อตั๋วแฮร์รี่ พอตเตอร์",
          details: "",
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-14",
          title: "ซื้อตั๋วดิสนีย์แลนด์",
          details: "",
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-1",
          title: "Research Mt. Fuji Climbing Season",
          details: "Check official climbing season dates, weather conditions, and best time to climb",
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-2", 
          title: "Obtain Climbing Permits",
          details: "Research and obtain necessary climbing permits and registrations",
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-3",
          title: "Book Mountain Hut (จองที่พักล่วงหน้า)",
          details: `<p>Taishikan Hut ชั้น 8 ใกล้ ๆ 8th Sta First Aid</p>
<p>Reserve space at mountain hut for overnight stay during climb</p>`,
          dates: {
            scheduledDate: "2025-05-01T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-111-4",
          title: "Gather Climbing Equipment",
          details: "Purchase/rent necessary climbing gear: hiking boots, warm layers, headlamp, etc",
          dates: {
            scheduledDate: "2025-06-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-5",
          title: "Physical Training",
          details: "Begin cardio and strength training program to prepare for high altitude climbing",
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-6",
          title: "Study Climbing Route",
          details: "Research different trails, difficulty levels, and create climbing plan",
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-111-7",
          title: "Packing List",
          details: "https://www.notion.so/khemmachart/Checklist-1ffcd45f383d80828f6ac412b528aa40?pvs=4",
          dates: {
            scheduledDate: "2025-06-15T00:00:00+07:00"
          },
          isCompleted: false
        },
      ]
    },
    {
      id: "mock-uuid-111",
      title: "2025 Ski Trip at Japan",
      details: "",
      dates: {
        dueDate: "2026-09-01",
      },
      tasks: [
        {
          id: "mock-uuid-112",
          title: "Financial Planning",
          details: "Flights: Compare fares for Tokyo and Osaka. Accommodation: Budget hotels vs. traditional ryokans. Transportation: Purchase a JR Rail Pass for seamless travel",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-113",
          title: "Must-See Landmarks",
          details: "Kyoto: Discover over 1,600 Buddhist temples, hundreds of Shinto shrines, and 17 UNESCO World Heritage sites",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-114",
          title: "Research Winter Clothing",
          details: "Research and prepare appropriate winter clothing and ski gear for Japan's cold weather conditions",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-115",
          title: "Research Ski Resorts",
          details: "Research and compare nearby ski resorts in Japan for accessibility, difficulty levels, and facilities",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-116",
          title: "Ski Practice",
          details: "Practice basic skiing skills at Future Park Rangsit to prepare for the trip",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-117",
          title: "Learn Basic Japanese Ski Terms",
          details: "Study essential Japanese phrases and vocabulary related to skiing, ski resorts, and emergency situations",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-118",
          title: "Book Ski Equipment Rental",
          details: "Research and reserve ski equipment including skis, boots, poles, and protective gear",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-119",
          title: "Schedule Ski Lessons",
          details: "Book beginner ski lessons with an English-speaking instructor at the chosen resort",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-120",
          title: "Purchase Ski Insurance",
          details: "Get comprehensive travel insurance that covers winter sports and ski-related activities",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-121",
          title: "Plan Post-Ski Activities",
          details: "Research onsen (hot springs) and après-ski activities near the resort",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-122",
          title: "Compare Ski Resort Packages",
          details: "Research and compare different Japanese ski resorts for beginners, including lift passes and accommodation packages",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-123",
      title: "2025 Japan",
          details: `
        <h3>Journey Through Japan</h3>
        
        <p>Embark on an unforgettable exploration of Japan's diverse landscapes and rich cultural heritage. This carefully planned journey will take you through:</p>
        
        <h4>Urban Adventures</h4>
        <ul>
          <li>Tokyo: Experience the perfect blend of ultramodern and traditional, from neon-lit Shibuya to ancient temples</li>
          <li>Osaka: Dive into Japan's kitchen, exploring street food paradise and vibrant nightlife</li>
            </ul>
            
        <h4>Cultural Heritage</h4>
        <ul>
          <li>Kyoto: Discover over 1,600 Buddhist temples, hundreds of Shinto shrines, and 17 UNESCO World Heritage sites</li>
          <li>Nara: Visit Japan's first permanent capital with its famous deer park and massive bronze Buddha</li>
            </ul>

        <h4>Natural Wonders</h4>
        <ul>
          <li>Hokkaido: Explore pristine landscapes, from volcanic mountains to flower-filled meadows</li>
          <li>Mount Fuji: Witness Japan's iconic symbol and explore the surrounding Five Lakes region</li>
        </ul>

        <h4>Modern Experiences</h4>
        <ul>
          <li>Bullet Train Adventures: Travel in style on the world-famous Shinkansen network</li>
          <li>Technology: Experience cutting-edge innovations in electronics, robotics, and entertainment</li>
        </ul>

        <p>This journey combines traditional experiences like staying in ryokans and participating in tea ceremonies with modern Japanese culture, creating a perfect balance of old and new Japan.</p>
          `,
          dates: {
        dueDate: "2025-03-01",
      },
      tasks: [
        {
          id: "mock-uuid-124",
          title: "Financial Planning",
          details: "Flights: Compare fares for Tokyo and Osaka. Accommodation: Budget hotels vs. traditional ryokans. Transportation: Purchase a JR Rail Pass for seamless travel",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-124-1",
          title: "Research Hotels Around Mount Fuji",
          details: "Research and compare accommodation options near Mount Fuji, including traditional ryokans and modern hotels. Reference: https://youtu.be/HX7HVVyY4qU - Focus on location, price range, and amenities that support hiking activities.",
          dates: {
            scheduledDate: "2024-09-15"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-125",
      title: "2025 New Zealand",
      details: "A breathtaking adventure in New Zealand, exploring its stunning landscapes, Maori culture, and thrilling outdoor activities.",
      dates: {
        dueDate: "2025-03-01",
      },
      tasks: [
        {
          id: "mock-uuid-126",
          title: "Financial Planning",
          details: "Flights: Search for affordable fares to Auckland or Christchurch. Accommodation: Mix of budget-friendly hostels and scenic lodges. Transportation: Rent a camper van for flexible travel",
          dates: {
            scheduledDate: "2024-10-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-127",
          title: "Must-See Landmarks",
          details: "North Island: Hobbiton, Tongariro National Park. South Island: Milford Sound, Franz Josef Glacier. Rotorua: Geothermal parks and Maori cultural shows",
          dates: {
            scheduledDate: "2024-11-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-128",
          title: "Cultural Activities",
          details: "Attend a Maori cultural evening and feast on a traditional Hangi meal. Visit Te Papa Museum to learn about New Zealand's history. Try local wines in the Marlborough region",
          dates: {
            scheduledDate: "2024-12-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-129",
          title: "Packing List",
          details: "Sturdy hiking boots for trekking trails. Waterproof gear for unpredictable weather. Camera or drone for capturing scenic views",
          dates: {
            scheduledDate: "2024-12-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-130",
      title: "Everest Base Camp Trek",
      details: "An unforgettable exploration of South America's vibrant cultures, ancient civilizations, and natural wonders.",
      dates: {
        dueDate: "2025-03-01",
      },
      tasks: []
    },
    {
      id: "mock-uuid-131",
      title: "2025 South America",
      details: "An unforgettable exploration of South America's vibrant cultures, ancient civilizations, and natural wonders.",
      tasks: [
        {
          id: "mock-uuid-132",
          title: "Financial Planning",
          details: "Flights: Look for deals to hubs like Lima or Buenos Aires. Accommodation: Economical options like hostels and local guesthouses. Transportation: Budget for intercity flights or long-distance buses",
          dates: {
            scheduledDate: "2024-10-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-133",
          title: "Must-See Landmarks",
          details: "Peru: Machu Picchu, Sacred Valley. Brazil: Christ the Redeemer, Amazon Rainforest. Argentina: Iguazu Falls, Patagonia",
          dates: {
            scheduledDate: "2024-11-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-134",
          title: "Cultural Activities",
          details: "Learn to dance the tango in Buenos Aires. Explore local markets and taste Peruvian ceviche. Attend Carnival in Rio de Janeiro for a vibrant celebration",
          dates: {
            scheduledDate: "2024-12-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-135",
          title: "Packing List",
          details: "Lightweight clothing for tropical climates and layers for cooler regions. Hiking gear for treks in Peru or Patagonia. Travel-size sunscreen and insect repellent for jungle visits",
          dates: {
            scheduledDate: "2024-12-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-141",
      title: "2025 Southeast Asia",
      details: "A vibrant journey through Southeast Asia's temples, bustling cities, and tranquil beaches.",
      tasks: [
        {
          id: "mock-uuid-142",
          title: "Financial Planning",
          details: "Flights: Book low-cost carriers for hopping between countries. Accommodation: Affordable options like guesthouses or boutique hotels. Transportation: Budget for tuk-tuks, ferries, and domestic flights",
          dates: {
            scheduledDate: "2024-10-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-143",
          title: "Must-See Landmarks",
          details: "Thailand: Grand Palace, Phi Phi Islands. Vietnam: Ha Long Bay, Hoi An Ancient Town. Cambodia: Angkor Wat, Tonle Sap Lake",
          dates: {
            scheduledDate: "2024-11-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-144",
          title: "Cultural Activities",
          details: "Take a Thai cooking class in Bangkok. Cruise the Mekong Delta in Vietnam. Witness sunrise at Angkor Wat in Cambodia",
          dates: {
            scheduledDate: "2024-12-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-145",
          title: "Packing List",
          details: "Lightweight and breathable clothing for tropical heat. Compact raincoat or umbrella for monsoon seasons. Power banks and universal adapters for electronics",
          dates: {
            scheduledDate: "2024-12-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-146",
      title: "2025 Africa Safari",
      details: "An exhilarating safari adventure across Africa's majestic landscapes and wildlife reserves.",
      tasks: [
        {
          id: "mock-uuid-147",
          title: "Financial Planning",
          details: "Flights: Research fares to Nairobi, Johannesburg, or Cape Town. Accommodation: Safari lodges, tented camps, or budget hotels. Transportation: Budget for guided safaris and park entry fees",
          dates: {
            scheduledDate: "2024-10-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-148",
          title: "Must-See Landmarks",
          details: "Kenya: Maasai Mara, Amboseli National Park. Tanzania: Serengeti, Ngorongoro Crater. South Africa: Kruger National Park, Table Mountain",
          dates: {
            scheduledDate: "2024-11-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-149",
          title: "Cultural Activities",
          details: "Visit local Maasai villages and learn about their traditions. Taste local dishes like Ugali or Bunny Chow. Explore Cape Town's cultural hubs and history",
          dates: {
            scheduledDate: "2024-12-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-150",
          title: "Packing List",
          details: "Neutral-colored clothing for safaris. Binoculars for wildlife spotting. Sturdy hats and sunscreen for the African sun",
          dates: {
            scheduledDate: "2024-12-01",
          },
          isCompleted: false
        }
      ]
    }
  ]
};

export const hobbyAndInterestData: Project = {
  id: "mock-uuid-151",
  title: "ความสนใจ/งานอดิเรก",
  details: "",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-152",
      title: "Photography",
      details: "",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: []
    },
    {
      id: "mock-uuid-153", 
      title: "Board Game",
      details: "<ul><li>D&D Character Origins: <a href='https://dnd-th.com/free-rules/character-origins/#OriginComponents'>Link</a></li><li>D&D Buyer's Guide: <a href='https://www.goldengoblingames.com/th/dungeons-and-dragons-buyers-guide?srsltid=AfmBOorvlIllEKMJJPMA8zEcziAzD3GU09U8RzZpTaZNVlTjinZX_PPT'>Link</a></li></ul>",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: []
    },
    {
      id: "mock-uuid-154",
      title: "Keyboard",
      details: "",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: []
    },
    {
      id: "mock-uuid-155",
      title: "ศึกษา: เรื่องการดื่มไวน์",
      details: "https://chatgpt.com/c/67b1d9f4-22c0-8008-bd43-7f61446008f9",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: []
    },
    {
      id: "mock-uuid-156",
      title: "ศึกษา: เรื่องการดื่มกาแฟ",
      details: "https://chatgpt.com/c/67b216c8-86e8-8008-a2af-2060f2c43e18",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-156-1",
          parent_id: "mock-uuid-156",
          title: "เรียนรู้พื้นฐานเกี่ยวกับกาแฟ",
          details: "ทำความเข้าใจเรื่องต้นกำเนิดกาแฟ สายพันธุ์ แหล่งปลูก กระบวนการแปรรูป และระดับการคั่ว",
          dates: {
            scheduledDate: "2025-01-31",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-156-2", 
          parent_id: "mock-uuid-156",
          title: "ศึกษาวิธีการชงกาแฟด้วยวิธีต่างๆ",
          details: "เรียนรู้วิธีการชงแบบต่างๆ (Espresso, Pour Over, French Press, Cold Brew, Moka Pot), อัตราส่วนการชง และการปรับตัวแปรการชง",
          dates: {
            scheduledDate: "2025-02-28",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-156-3",
          parent_id: "mock-uuid-156", 
          title: "พัฒนาทักษะการชิมกาแฟ",
          details: "เรียนรู้วิธีชิมกาแฟแบบ Cupping, ใช้ Coffee Flavor Wheel, และเปรียบเทียบกาแฟ Specialty กับ Commercial",
          dates: {
            scheduledDate: "2025-03-31",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-156-4",
          parent_id: "mock-uuid-156",
          title: "ศึกษาเรื่องกาแฟระดับลึก",
          details: "เรียนรู้วิทยาศาสตร์กาแฟ, Single Origin & Blend, และการคั่วกาแฟ",
          dates: {
            scheduledDate: "2025-04-30",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-156-5",
          parent_id: "mock-uuid-156",
          title: "ศึกษาวิธีการเป็น Barista หรือ Q Grader",
          details: "เรียนรู้ Latte Art, การชง Espresso, ศึกษาเส้นทางอาชีพ และหลักสูตรกาแฟระดับสากล",
          dates: {
            scheduledDate: "2025-05-31",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-156-6",
          parent_id: "mock-uuid-156",
          title: "เปิดร้านกาแฟหรือสร้างแบรนด์",
          details: "ศึกษาการตั้งร้านกาแฟ, การคั่วกาแฟเชิงพาณิชย์ และการสร้างแบรนด์",
          dates: {
            scheduledDate: "2025-06-30",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-157-1",
      title: "ศึกษา: เรื่องการดื่มเบียร์",
      details: `
        <ul>
          <li><a href="https://chatgpt.com/c/67b216db-31ec-8008-b6e3-67aa9860d761">Link 1</a></li>
          <li><a href="https://chatgpt.com/c/68204978-9e78-8008-a656-033bd9656cfd">Link 2</a></li>
          <li><a href="https://chatgpt.com/g/g-p-67fcd037cf5081918e53823db42da123-coach-gentleman/c/68204a06-7b44-8008-9fb3-8020fb4aef67">Link 3</a></li>
        </ul>
      `,
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: []
    },
    {
      id: "mock-uuid-157-1-1",
      title: "ศึกษา: เรื่องการดื่ม Cocktail",
      details: "https://chatgpt.com/c/67de5ebb-8adc-8008-a983-97c845098424",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: []
    },
    {
      id: "mock-uuid-157-1-2",
      title: "ศึกษา: เรื่องการดื่มเหล้า",
      details: "https://chatgpt.com/c/67de5dfb-dab8-8008-9858-8900251f16ba",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: []
    },
    {
      id: "mock-uuid-157-2",
      title: "ศึกษา: ชุดสูท",
      details: "https://youtu.be/ToEdeaaTUHI?si=Y-dy7GO1AtKpFk4q",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: []
    },
    {
      id: "mock-uuid-157-santorial",
      title: "ศึกษา: Santorial Clothing and Classic Menswear",
      details: `
        <p><img src="/images/Screenshot 2568-03-20 at 12.31.24.png" alt="Santorial clothing screenshot" /></p>
        <ul>
          <li><a href='https://youtu.be/yww8in9GDr4?si=3Gn_m_pyz1f0e6tx'>Video 1</a></li>
          <li><a href='https://youtu.be/4BpnAXIXpFY?si=v7O0CNbptH6gfzl4'>Video 2</a></li>
          <li><a href='https://youtu.be/AfsJT6TanHg?si=2_guiHn1lm_wIH0e'>Classic Trouser</a></li>
          <li><a href='https://youtu.be/glZdCiMs4dw?si=SqOd1gozIAS5xMyq'>The Manner</a></li>
          <li><a href='https://youtu.be/dfcmt1kamPs?si=BkMVfLPnj35lQUCa'>Video 5</a></li>
          <li><a href='https://chatgpt.com/c/67cc8206-c178-8008-95c3-8eec2e6a03f0'>ศึกษาเรื่องสูท และ Classic Menswear</a></li>
          <li><a href='https://chatgpt.com/c/67d4ecf6-8acc-8008-b6e5-0136b995f1b7'>การดูแลรักษาเสื้อและกางเกงผ้าวูล</a></li>
          <li><a href='https://chatgpt.com/c/67d4ecc6-7a24-8008-9778-9e82bc597399'>ดูแลรักษาเสื้อและกางเกงผ้าคอตตอน</a></li>
          <li><a href='https://chatgpt.com/c/67d4ec9e-ab34-8008-a752-b28650bb72cf'>การดูแลรักษาเสื้อไหมพรม</a></li>
          <li><a href='https://chatgpt.com/c/67d4ec69-9eb8-8008-975a-df7bc3db5bf3'>การดูแลรักษาเสื้อลินิน</a></li>
          <li><a href='https://chatgpt.com/c/67d4488f-1970-8008-9b9f-ed933bca971d'>ผ้าลินินซักแล้วหดไหม</a></li>
          <li><a href='https://chatgpt.com/c/67d709bb-06bc-8008-88a3-f5d4f8aa6ec5'>วิธีการดูแลและรักษาความสะอาดรองเท้าหนังและกระเป๋าหนัง</a></li>
          <li><a href='https://chatgpt.com/c/67d70c69-6230-8008-aa10-649ec2bd0960'>เตารีดไอน้ำหม้อต้ม ใช้ได้กับเสื้อผ้าทุกชนิดไหม</a></li>
        </ul>
      `,
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-157-santorial-0",
          title: "เอาสูทสีดำไปแก้ทรงให้เอวกว้างขึ้น + ติดกระดุม 2 เม็ด",
          details: "",
          dates: {
            scheduledDate: "2025-12-31",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-157-santorial-1",
          title: "กางเกงสั่งตัด suitcube https://www.youtube.com/watch?v=QqrhOcUDiMg",
          details: "<ul><li>ไม่เอาหูเข็มขัด ปรับที่รัดเอวให้ยาวขึ้นหน่อย ปรับความสูงของขอบเอวให้เยอะขึ้น 0.5 นิ้ว ไม่เอากระเป๋่าหลัง</li><li>สีกรม, สีชาโคล (เทียบกับกางเกงของ Erawon), สีดำ, สีครีม, สีขาว off-white</li></ul>",
          dates: {
            scheduledDate: "2025-12-31",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-157-santorial-2",
          title: "กางเกงสั่งตัด ragandlance",
          details: "",
          dates: {
            scheduledDate: "2025-12-31",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-157-santorial-3.5",
          title: "กางเกงสั่งตัดยีนส์ contemp https://youtu.be/HLHq0Jn061g?si=EsUquHL3l9X147jr",
          details: "",
          dates: {
            scheduledDate: "2025-12-31",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-157-santorial-3",
          title: "เกงยีนส์ jin tonic",
          details: "https://youtu.be/yww8in9GDr4?si=3Gn_m_pyz1f0e6tx, https://youtu.be/4BpnAXIXpFY?si=v7O0CNbptH6gfzl4",
          dates: {
            scheduledDate: "2025-12-31",
          },
          isCompleted: false
        },
      ]
    },
    {
      id: "mock-uuid-157-3123123",
      title: "ศึกษา: นาฬิกา",
      details: "https://chatgpt.com/c/67cc82ad-76cc-8008-8555-e8cf6416e6c3",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: []
    }
  ]
}

export const general: Project = {
  id: "mock-uuid-157",
  title: "ทั่วไป",
  details: "",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-158",
      title: "Wishlist",
      details: "",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-158-0",
          title: "Macbook Air",
          details: "Chip M2, 8GB RAM, 512 SSD",
          dates: {
            scheduledDate: "2025-02-16T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-159",
      title: "Reminder",
      details: "",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-159-0-reminder-00",
          title: "ชำระเงินบัตร UOB 55,969",
          details: "",
          dates: {
            scheduledDate: "2025-03-30T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-17-1",
          title: "ซื้อบัตรเข้าร่วมงานเจ้าชายน้อย",
          details: "https://www.ticketmelon.com/madmotionstudio/the-little-prince-universe, https://thematter.co/brief/236663/236663, https://www.facebook.com/people/Mad-Motion-The-Little-Prince-Universe/61571038075217/",
          dates: {
            scheduledDate: "2025-01-27T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-159-0-reminder-00",
          title: "เอากางกางไปตัดขา + เข้าเอา",
          details: "",
          dates: {
            scheduledDate: "2025-01-29T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-159-1-reminder-01",
          title: "ทำบัตรประชาชนใหม่ (Renewal the citizen card)",
          details: "",
          dates: {
            scheduledDate: "2025-06-30T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-7-personal-branding-04",
          title: "เตรียมเอกสาร Deloitte",
          details: "",
          dates: {
            scheduledDate: "2025-02-15T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-7-personal-branding-04",
          title: "Submit Deloitte employee information",
          details: "",
          dates: {
            scheduledDate: "2025-02-15T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-7-personal-branding-04",
          title: "Deloitte employee information, have a good day!",
          details: "",
          dates: {
            scheduledDate: "2025-02-21T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-159-2-reminder-deloitte-02",
          title: "Deloitte townhall registeration",
          details: "",
          dates: {
            scheduledDate: "2025-03-02T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-159-3-reminder-deloitte-03",
          title: "Deloitte leave request submission",
          details: "",
          dates: {
            scheduledDate: "2025-03-03T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-159-4-reminder-deloitte-04",
          title: "Deloitte timesheet submission",
          details: "",
          dates: {
            scheduledDate: "2025-03-03T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-159-5-reminder-deloitte-05",
          title: "Deloitte request for banking documents",
          details: "",
          dates: {
            scheduledDate: "2025-03-03T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-159-5-reminder-deloitte-06",
          title: "Submit leave request",
          details: "",
          dates: {
            scheduledDate: "2025-03-20T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-159-5-reminder-deloitte-0446",
          title: "เบิกค่าเดินทาง",
          details: "",
          dates: {
            scheduledDate: "2025-03-20T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-159-5-reminder-deloitte-07",
          title: "ซักผ้าขาว",
          details: "",
          dates: {
            scheduledDate: "2025-03-19T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-159-5-reminder-deloitte-08",
          title: "ซักพรมที่ห้องนั่งเล่น",
          details: "",
          dates: {
            scheduledDate: "2025-03-22T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-159-5-reminder-deloitte-09",
          title: "จ้างแม่บ้านทำความสะอาด",
          details: "",
          dates: {
            scheduledDate: "2025-03-23T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-159-5-reminder-deloitte-10",
          title: "จ้างแม่บ้านรีดผ้า",
          details: "",
          dates: {
            scheduledDate: "2025-03-23T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-159-5-reminder-deloitte-11",
          title: "ซักผ้าสีดำ",
          details: "",
          dates: {
            scheduledDate: "2025-03-22T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-159-5-reminder-deloitte-1ๅ",
          title: "ซักถุงเท้า",
          details: "",
          dates: {
            scheduledDate: "2025-03-22T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-159-5-reminder-deloitte-11/",
          title: "ซักพรมรองกรง",
          details: "",
          dates: {
            scheduledDate: "2025-03-22T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-159-5-reminder-deloitte-13",
          title: "ซักผ้าปูรองกรง",
          details: "",
          dates: {
            scheduledDate: "2025-03-22T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const stressManagement: Project = {
  id: "mock-uuid-160",
  title: "การจัดการความเครียด",
  details: "Practicing meditation and finding activities for relaxation",
  tasks: [],
  subProjects: []
}

export const healthySleepHabits: Project = {
  id: "mock-uuid-161",
  title: "การสร้างนิสัยการนอนที่ดี",
  details: "Setting appropriate sleep and wake times",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-162",
      title: "นอนหลับให้ครบ 7-8 ชั่วโมงทุกวัน",
      details: "แผนการสร้างพฤติกรรมนอนหลับที่ดีและมีคุณภาพ เพื่อเสริมสร้างการฟื้นฟูร่างกายและสมอง",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-163",
          title: "กำหนดเวลาเข้านอนและตื่นนอน",
          details: "ตั้งเวลาเข้านอนและตื่นนอนที่สม่ำเสมอในแต่ละวัน",
          dates: {
            scheduledDate: "2025-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-164",
          title: "ลดการใช้หน้าจอก่อนนอน",
          details: "หลีกเลี่ยงการใช้โทรศัพท์หรือคอมพิวเตอร์ก่อนเข้านอน 1 ชั่วโมง",
          dates: {
            scheduledDate: "2025-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-165",
          title: "ติดตามคุณภาพการนอน",
          details: "ใช้แอปพลิเคชันหรืออุปกรณ์เพื่อวัดคุณภาพการนอนหลับ",
          dates: {
            scheduledDate: "2025-03-01",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const sustainableNutrition: Project = {
  id: "mock-uuid-166",
  title: "โภชนาการที่ยั่งยืน",
  details: "Learning to cook healthy meals",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-166-1",
      title: "Chicken Breast Smoothie (อกไก่ปั่น)",
      details: "เพิ่มโปรตีนจากอกไก่ปั่นเพื่อสร้างกล้ามเนื้อและฟื้นฟูร่างกาย",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-166-2",
          title: "ศึกษาประโยชน์และคุณค่าทางโภชนาการ",
          details: "รวบรวมข้อมูลเกี่ยวกับปริมาณโปรตีน วิธีการเตรียม และประโยชน์ต่อร่างกาย",
          dates: {
            scheduledDate: "2025-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-166-3",
          title: "หาร้านที่ขายอกไก่ปั่นคุณภาพดี",
          details: "ค้นหาและอ่านรีวิวร้านที่ขายอกไก่ปั่นสด สะอาด และมีคุณภาพ",
          dates: {
            scheduledDate: "2025-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-166-4",
          title: "วางแผนการบริโภค",
          details: "กำหนดปริมาณและความถี่ในการดื่มอกไก่ปั่นที่เหมาะสมกับเป้าหมายสุขภาพ",
          dates: {
            scheduledDate: "2025-02-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-166-5",
          title: "ซื้อและทดลองดื่ม",
          details: "เริ่มทดลองดื่มและบันทึกผลลัพธ์ที่เกิดขึ้นกับร่างกาย",
          dates: {
            scheduledDate: "2025-03-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-vitamin-study",
      title: "Vitamin Supplementation and Study (การศึกษาและการรับประทานวิตามินเสริม)",
      details: "แผนการศึกษาและการรับประทานวิตามินเสริมอย่างเหมาะสมเพื่อสุขภาพที่ดี",
      dates: {
        dueDate: "2025-12-31"
      },
      tasks: [
        {
          id: "mock-uuid-vitamin-study-0",
          title: "ศึกษาข้อมูลผักอัดเม็ด",
          details: "ค้นคว้าข้อมูลเกี่ยวกับผักอัดเม็ดที่มีในท้องตลาด ประโยชน์ และข้อควรระวังในการรับประทาน",
          dates: {
            scheduledDate: "2025-02-01"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-vitamin-study-1",
          title: "ศึกษาประเภทวิตามินที่จำเป็น",
          details: "ค้นคว้าข้อมูลเกี่ยวกับวิตามินที่จำเป็นต่อร่างกาย และปริมาณที่ควรได้รับในแต่ละวัน",
          dates: {
            scheduledDate: "2025-02-15"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-vitamin-study-2", 
          title: "ปรึกษาแพทย์เรื่องการทานวิตามิน",
          details: "นัดพบแพทย์เพื่อปรึกษาเรื่องการรับประทานวิตามินเสริมที่เหมาะสมกับร่างกาย",
          dates: {
            scheduledDate: "2025-03-01"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-vitamin-study-3",
          title: "ตรวจวัดระดับวิตามินในร่างกาย",
          details: "ตรวจเลือดเพื่อวัดระดับวิตามินต่างๆ ในร่างกาย เช่น วิตามินดี วิตามินบี12",
          dates: {
            scheduledDate: "2025-03-15"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-vitamin-study-4",
          title: "จัดตารางการรับประทานวิตามิน",
          details: "วางแผนและจัดตารางการรับประทานวิตามินแต่ละชนิดให้เหมาะสม",
          dates: {
            scheduledDate: "2025-04-01"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-vitamin-study-5",
          title: "ติดตามผลและปรับปรุง",
          details: "บันทึกผลการรับประทานวิตามินและผลกระทบต่อร่างกาย เพื่อปรับปรุงแผนการรับประทาน",
          dates: {
            scheduledDate: "2025-06-01"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-166-6",
      title: "Vegetable Smoothies (น้ำผักปั่น)",
      details: "เพิ่มการบริโภคผักและผลไม้ผ่านการดื่มน้ำผักปั่นเพื่อสุขภาพที่ดี",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-166-7",
          title: "ศึกษาส่วนผสมและประโยชน์",
          details: "รวบรวมข้อมูลเกี่ยวกับส่วนผสมที่เหมาะสม วิตามิน และแร่ธาตุที่จะได้รับ",
          dates: {
            scheduledDate: "2025-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-166-8",
          title: "สำรวจร้านน้ำผักปั่น",
          details: "ค้นหาร้านที่ใช้ผักออร์แกนิคและมีสูตรน้ำผักปั่นที่มีประโยชน์",
          dates: {
            scheduledDate: "2025-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-166-9",
          title: "วางแผนการดื่มประจำวัน",
          details: "กำหนดช่วงเวลาและความถี่ในการดื่มน้ำผักปั่นที่เหมาะสม",
          dates: {
            scheduledDate: "2025-02-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-166-10",
          title: "เริ่มดื่มและติดตามผล",
          details: "ทดลองดื่มและจดบันทึกการเปลี่ยนแปลงของร่างกาย",
          dates: {
            scheduledDate: "2025-03-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-167",
      title: "ดื่มน้ำให้เพียงพอในแต่ละวัน",
      details: "สร้างนิสัยการดื่มน้ำ 2-3 ลิตรต่อวันเพื่อสนับสนุนการทำงานของระบบร่างกาย",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-168",
          title: "ตั้งเป้าการดื่มน้ำรายวัน",
          details: "ตั้งเป้าหมายการดื่มน้ำ 8-10 แก้วต่อวัน",
          dates: {
            scheduledDate: "2026-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-169",
          title: "ใช้ขวดน้ำแบบพกพา",
          details: "พกขวดน้ำเพื่อช่วยติดตามปริมาณน้ำที่ดื่มในแต่ละวัน",
          dates: {
            scheduledDate: "2026-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-170",
          title: "บันทึกการดื่มน้ำ",
          details: "ใช้แอปพลิเคชันหรือการบันทึกเพื่อติดตามปริมาณน้ำดื่มในแต่ละวัน",
          dates: {
            scheduledDate: "2026-03-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-171",
      title: "โภชนาการและการกินเพื่อสุขภาพ",
      details: "แผนการปรับเปลี่ยนพฤติกรรมการกินเพื่อให้ได้สารอาหารที่เหมาะสมสำหรับการเสริมสร้างสุขภาพและฟื้นฟูร่างกาย",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-172",
          title: "วางแผนมื้ออาหาร",
          details: "ออกแบบมื้ออาหารที่มีสารอาหารครบถ้วน เช่น โปรตีน คาร์โบไฮเดรต และไขมันดี",
          dates: {
            scheduledDate: "2026-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-173",
          title: "ลดการบริโภคอาหารที่ไม่ดีต่อสุขภาพ",
          details: "ลดการบริโภคน้ำตาล อาหารแปรรูป และไขมันอิ่มตัว",
          dates: {
            scheduledDate: "2026-03-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-174",
          title: "เพิ่มการบริโภคผักและผลไม้",
          details: "เน้นการกินผักและผลไม้ให้ครบ 5 สีในแต่ละวัน",
          dates: {
            scheduledDate: "2026-04-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-175",
          title: "ติดตามพฤติกรรมการกิน",
          details: "บันทึกมื้ออาหารและประเมินผลเพื่อปรับปรุงพฤติกรรมการกิน",
          dates: {
            scheduledDate: "2026-06-01",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const facialRejuvenationTreatments: Project = {
  id: "mock-uuid-177",
  title: "Facial Rejuvenation Treatments: การฟื้นฟูและปรับปรุงผิวหน้า",
  details: "แผนการดูแลและปรับปรุงผิวหน้าด้วยวิธีการทางการแพทย์ เพื่อลดริ้วรอยและฟื้นฟูความอ่อนเยาว์",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-178",
      title: "Botox Treatment",
      details: "การฉีดโบท็อกซ์เพื่อช่วยลดริ้วรอยและปรับรูปหน้า",
      tasks: [
        {
          id: "mock-uuid-179",
          title: "ศึกษาข้อมูลและค้นหาคลินิก",
          details: "รวบรวมข้อมูลเกี่ยวกับการฉีดโบท็อกซ์และค้นหาคลินิกที่น่าเชื่อถือ",
          dates: {
            scheduledDate: "2025-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-180",
          title: "ปรึกษาแพทย์ผู้เชี่ยวชาญ",
          details: "นัดปรึกษาแพทย์เพื่อประเมินความเหมาะสมและวางแผนการรักษา",
          dates: {
            scheduledDate: "2025-03-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-181",
      title: "Under-eye Filler",
      details: "การฉีดฟิลเลอร์บริเวณใต้ตาเพื่อลดร่องน้ำตาและความหมองคล้ำ",
      tasks: [
        {
          id: "mock-uuid-182",
          title: "ศึกษาประเภทฟิลเลอร์",
          details: "รวบรวมข้อมูลเกี่ยวกับประเภทและแบรนด์ฟิลเลอร์ที่เหมาะสม",
          dates: {
            scheduledDate: "2025-02-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-183",
          title: "ปรึกษาแพทย์ผู้เชี่ยวชาญ",
          details: "นัดปรึกษาเพื่อประเมินความเหมาะสมและวางแผนการรักษา",
          dates: {
            scheduledDate: "2025-03-15",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-184",
      title: "Dermal Fillers",
      details: "การฉีดฟิลเลอร์เพื่อเพิ่มปริมาตรและปรับรูปหน้า",
      tasks: [
        {
          id: "mock-uuid-185",
          title: "ศึกษาตำแหน่งการฉีดที่เหมาะสม",
          details: "รวบรวมข้อมูลเกี่ยวกับตำแหน่งที่ควรฉีดและผลลัพธ์ที่ต้องการ",
          dates: {
            scheduledDate: "2025-04-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-186",
          title: "ปรึกษาแพทย์ผู้เชี่ยวชาญ",
          details: "นัดปรึกษาเพื่อประเมินความเหมาะสมและวางแผนการรักษา",
          dates: {
            scheduledDate: "2025-05-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-184-1",
      title: "Lip Fillers",
      details: "การฉีดฟิลเลอร์ริมฝีปากเพื่อเพิ่มความอวบอิ่มและลดรอยย่นรอบปาก",
      tasks: [
        {
          id: "mock-uuid-184-2",
          title: "ศึกษาประเภทฟิลเลอร์สำหรับริมฝีปาก",
          details: "รวบรวมข้อมูลเกี่ยวกับประเภทและแบรนด์ฟิลเลอร์ที่เหมาะสมสำหรับริมฝีปาก เช่น Juvederm, Restylane",
          dates: {
            scheduledDate: "2025-06-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-184-3", 
          title: "ปรึกษาแพทย์ผู้เชี่ยวชาญด้านการฉีดฟิลเลอร์ริมฝีปาก",
          details: "นัดปรึกษาเพื่อประเมินรูปทรงปากที่เหมาะสม และวางแผนการรักษาเพื่อให้ได้ริมฝีปากที่ดูเป็นธรรมชาติ",
          dates: {
            scheduledDate: "2025-07-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-184-4",
          title: "ทำการรักษาฉีดฟิลเลอร์ริมฝีปาก",
          details: "เข้ารับการฉีดฟิลเลอร์ตามแผนการรักษาที่วางไว้",
          dates: {
            scheduledDate: "2025-08-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-184-5",
          title: "ติดตามผลและดูแลหลังการรักษา",
          details: "นัดติดตามผลกับแพทย์และปฏิบัติตามคำแนะนำในการดูแลหลังการรักษา",
          dates: {
            scheduledDate: "2025-08-15",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-184-6",
      title: "Eyebrow Microblading",
      details: "การสักคิ้วเพื่อเพิ่มความคมชัดและลดเวลาในการแต่งหน้า",
      tasks: [
        {
          id: "mock-uuid-184-7",
          title: "ศึกษาเทคนิคการสักคิ้วแบบต่างๆ",
          details: "รวบรวมข้อมูลเกี่ยวกับเทคนิคการสักคิ้ว เช่น Microblading, Ombre Brows, Powder Brows และข้อดีข้อเสียของแต่ละแบบ",
          dates: {
            scheduledDate: "2025-09-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-184-8",
          title: "หาร้านที่มีความน่าเชื่อถือ",
          details: "ค้นหาและรีวิวร้านสักคิ้วที่มีชื่อเสียง ดูผลงาน ใบรับรอง และความสะอาดของสถานที่",
          dates: {
            scheduledDate: "2025-09-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-184-9",
          title: "ปรึกษาช่างสักคิ้ว",
          details: "นัดปรึกษาเพื่อเลือกรูปทรงคิ้วที่เหมาะกับรูปหน้า และวางแผนการสักคิ้ว",
          dates: {
            scheduledDate: "2025-10-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-184-10",
          title: "ทำการสักคิ้ว",
          details: "เข้ารับการสักคิ้วตามแบบที่เลือกไว้",
          dates: {
            scheduledDate: "2025-10-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-184-11",
          title: "ดูแลหลังการสักคิ้ว",
          details: "ปฏิบัติตามคำแนะนำในการดูแลคิ้วหลังการสัก และนัดติดตามผล",
          dates: {
            scheduledDate: "2025-10-30",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const workout: Project = {
  id: "mock-uuid-187",
  title: "Workout and Body Building: เพิ่มความแข็งแรงและความทนทานของกล้ามเนื้อ",
  details: "Incorporating regular exercise routines into daily life",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-187-1",
      title: "Calisthenics: การออกกำลังกายด้วยน้ำหนักตัว",
      details: `
        <p>พัฒนาความแข็งแรงและการควบคุมร่างกายผ่านการออกกำลังกายด้วยน้ำหนักตัว โดยเน้นการพัฒนาท่าพื้นฐานอย่าง Push-ups, Pull-ups, Dips และ Squats ไปจนถึงท่าขั้นสูงอย่าง Planche, Front Lever และ Human Flag เพื่อพัฒนาความแข็งแรง ความยืดหยุ่น การทรงตัว และการควบคุมร่างกาย โดยไม่จำเป็นต้องใช้อุปกรณ์มากมาย เหมาะสำหรับการออกกำลังกายได้ทุกที่ทุกเวลา</p>
        <br>
        <p>แหล่งเรียนรู้เพิ่มเติม:</p>
        <ul>
          <li><a href="https://www.youtube.com/@Tualeklenklam">Tua Lek Len Klam</a></li>
          <li><a href="https://www.youtube.com/@CHRISHERIA">Chris Heria</a></li>
        </ul>
      `,
      tasks: [
        {
          id: "mock-uuid-187-1-1",
          title: "Pull-ups ให้ทำได้ 15 ครั้งต่อเซ็ต",
          details: "เริ่มจากการทำ Negative Pull-ups และค่อยๆ พัฒนาไปสู่ Pull-ups แบบเต็มรูปแบบ",
          dates: {
            scheduledDate: "2025-03-01T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-187-1-2",
          title: "Handstand ให้ยืนได้นาน 30 วินาที",
          details: "เริ่มจาก Wall Handstand และพัฒนาไปสู่ Free Handstand",
          dates: {
            scheduledDate: "2025-04-15T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-187-1-3",
          title: "Muscle-up ให้ทำได้อย่างสมบูรณ์",
          details: "พัฒนาความแข็งแรงผ่าน False Grip, Explosive Pull-ups และ Deep Dips",
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-187-1-4",
          title: "Front Lever ให้ทำได้ 10 วินาที",
          details: "เริ่มจาก Tuck Front Lever และค่อยๆ พัฒนาไปสู่ Full Front Lever",
          dates: {
            scheduledDate: "2025-08-15T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-187-1-5",
          title: "Planche ให้ทำได้ 5 วินาที",
          details: "พัฒนาจาก Planche Leans ไปสู่ Tuck Planche และ Straddle Planche",
          dates: {
            scheduledDate: "2025-10-30T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-188",
      title: "Weight Training: เพิ่มน้ำหนักที่ยกได้ 40%",
      details: "แผนการฝึกน้ำหนักเพื่อเพิ่มความแข็งแรงและความทนทานของกล้ามเนื้อ วัดผลจากการเพิ่มน้ำหนักที่ยกได้ในระยะเวลา 1 ปี",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-189",
          title: "กำหนดเป้าหมายการยกน้ำหนัก -> Bicep curl / Hammer curl from 12Kg to 16Kg",
          details: "วัดน้ำหนักที่ยกได้ในปัจจุบัน เช่น Bench Press, Deadlift, Squat และตั้งเป้าหมายเพิ่มขึ้น 20%",
          dates: {
            scheduledDate: "2025-01-15",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-190",
          title: "สร้างตารางฝึก",
          details: "สร้างตารางการฝึกสำหรับกล้ามเนื้อส่วนต่าง ๆ เช่น อก หลัง ขา แขน พร้อมเพิ่ม Progressive Overload ทุก 4 สัปดาห์",
          dates: {
            scheduledDate: "2025-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-191",
          title: "ติดตามและวัดผลทุก 3 เดือน",
          details: "วัดน้ำหนักที่ยกได้ทุก 3 เดือนและปรับโปรแกรมการฝึกให้เหมาะสม",
          dates: {
            scheduledDate: "2025-04-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-200",
      title: "Muscle Mass: เพิ่มมวลกล้ามเนื้อ 5 กิโลกรัม",
      details: "แผนการเพิ่มมวลกล้ามเนื้อผ่านการออกกำลังกายและโภชนาการที่เหมาะสม",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-201", 
          title: "คำนวณแคลอรี่และโปรตีนที่ต้องการ",
          details: "คำนวณปริมาณแคลอรี่และโปรตีนที่ต้องการต่อวันเพื่อการเพิ่มกล้ามเนื้อ (โปรตีน 1.6-2.2g/kg)",
          dates: {
            scheduledDate: "2026-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-202",
          title: "วางแผนมื้ออาหาร",
          details: "จัดตารางมื้ออาหารที่มีโปรตีนสูงและแคลอรี่เพียงพอ รวมถึงอาหารเสริมที่จำเป็น",
          dates: {
            scheduledDate: "2026-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-203",
          title: "ติดตามการเปลี่ยนแปลงของร่างกาย",
          details: "วัดน้ำหนัก วัดรอบเอว และถ่ายรูปความก้าวหน้าทุกเดือน",
          dates: {
            scheduledDate: "2026-03-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-204",
      title: "Cardio Strength: เพิ่มความทนทานของระบบหัวใจและหลอดเลือด",
      details: "แผนการพัฒนาความทนทานของระบบหัวใจและหลอดเลือดผ่านการออกกำลังกายแบบ HIIT และ Circuit Training",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-205",
          title: "เริ่มต้น HIIT Workout",
          details: "ทำ High-Intensity Interval Training 2-3 ครั้งต่อสัปดาห์ เริ่มจาก 15 นาทีและเพิ่มเป็น 30 นาที",
          dates: {
            scheduledDate: "2026-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-206",
          title: "Circuit Training Program",
          details: "สร้างโปรแกรม Circuit Training ที่ผสมผสานการฝึกกล้ามเนื้อและคาร์ดิโอ",
          dates: {
            scheduledDate: "2026-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-207",
          title: "ทดสอบสมรรถภาพ",
          details: "ทำการทดสอบสมรรถภาพทุก 2 เดือน (วิ่ง 2.4 กม., Burpees 1 นาที, Mountain Climbers 1 นาที)",
          dates: {
            scheduledDate: "2026-03-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-208",
      title: "Flexibility & Recovery: เพิ่มความยืดหยุ่นและการฟื้นตัว",
      details: "แผนการพัฒนาความยืดหยุ่นของกล้ามเนื้อและการฟื้นตัวหลังการออกกำลังกาย",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-209",
          title: "Stretching Routine",
          details: "สร้างตารางการยืดกล้ามเนื้อก่อนและหลังการออกกำลังกาย รวมถึง Dynamic และ Static Stretching",
          dates: {
            scheduledDate: "2026-01-15",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-210",
          title: "Mobility Work",
          details: "ฝึก Mobility Exercise สำหรับข้อต่อหลัก (ไหล่, สะโพก, เข่า, ข้อเท้า)",
          dates: {
            scheduledDate: "2026-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-211",
          title: "Recovery Techniques",
          details: "เรียนรู้และปฏิบัติเทคนิคการฟื้นตัว เช่น Foam Rolling, Massage, Ice Bath",
          dates: {
            scheduledDate: "2026-03-01",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const running: Project = {
  id: "mock-uuid-192",
  title: "Running & Walking: การเดินและวิ่งเพื่อสุขภาพ",
  details: "Setting running goals, such as distance or frequency, to stay active and improve endurance",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-193",
      title: "เดิน/วิ่งครบ 200 ครั้ง ภายใน 1 ปี",
      details: "แผนการเดินและวิ่งสะสมระยะทางเพื่อสร้างสมรรถภาพทางกายและทดสอบความอดทนของร่างกาย",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-194",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-195",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-01-02",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-196",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-01-03",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-197",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-01-04",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-198",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-01-05",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-199",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-01-06",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-200",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-01-07",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-201",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-01-08",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-202",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-01-09",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-203",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-01-10",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-203",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-01-26T00:00:00+0700",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-203",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-05-11T00:00:00+0700",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-203",
          title: "เดินออกกำลังกาย",
          details: "เดินออกกำลังกายทุกวัน ที่ยิน, สวนสาธารณะ, หรือสถานที่ใกล้บ้าน",
          dates: {
            scheduledDate: "2025-05-25T00:00:00+0700",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-204",
      title: "เดิน/วิ่งครบ 1,000 กิโลเมตร ภายใน 1 ปี",
      details: "แผนการเดินและวิ่งสะสมระยะทางเพื่อสร้างสมรรถภาพทางกายและทดสอบความอดทนของร่างกาย",
      dates: {
        dueDate: "2025-12-31",
      },
      tasks: [
        {
          id: "mock-uuid-205",
          title: "กำหนดเป้าหมายรายเดือน",
          details: "ตั้งเป้าหมายการเดิน/วิ่งให้ได้ 84 กิโลเมตรต่อเดือน (เฉลี่ย 3 กิโลเมตรต่อวัน)",
          dates: {
            scheduledDate: "2026-01-31",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-206",
          title: "วางแผนเส้นทางการวิ่ง",
          details: "เลือกเส้นทางในสวนสาธารณะหรือสถานที่ใกล้บ้านเพื่อการเดินและวิ่งอย่างต่อเนื่อง",
          dates: {
            scheduledDate: "2026-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-207",
          title: "ติดตามผลระยะทางสะสม",
          details: "ใช้แอปพลิเคชันหรือสมาร์ทวอทช์บันทึกระยะทางที่เดิน/วิ่งในแต่ละวัน",
          dates: {
            scheduledDate: "2026-01-01",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-208",
      title: "ลงวิ่ง Mini Marathon",
      details: "แผนการเตรียมตัวและเข้าร่วมการแข่งขัน Mini Marathon ระยะทาง 10 กิโลเมตร",
      dates: {
        dueDate: "2025-06-30",
      },
      tasks: [
        {
          id: "mock-uuid-209",
          title: "เลือกงานวิ่ง Mini Marathon",
          details: "ค้นหางานวิ่ง Mini Marathon ในพื้นที่ที่น่าสนใจและกำหนดวันแข่ง",
          dates: {
            scheduledDate: "2026-02-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-210",
          title: "วางแผนการฝึกซ้อม",
          details: "สร้างตารางฝึกซ้อมระยะทางและความเร็ว เช่น การวิ่งเพิ่มขึ้นทีละ 1 กิโลเมตรต่อสัปดาห์",
          dates: {
            scheduledDate: "2026-03-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-211",
          title: "ฝึกซ้อมวิ่งเต็มระยะ 10 กิโลเมตร",
          details: "ทดสอบวิ่งเต็มระยะ 10 กิโลเมตรก่อนวันงานจริงอย่างน้อย 2 ครั้ง",
          dates: {
            scheduledDate: "2026-05-01",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-212",
          title: "เตรียมตัวสำหรับวันงาน",
          details: "ตรวจสอบอุปกรณ์การวิ่ง เช่น รองเท้าสำหรับวิ่ง และจัดเตรียมอาหารที่เหมาะสมก่อนแข่ง",
          dates: {
            scheduledDate: "2026-06-15",
          },
          isCompleted: false
        }
      ]
    },
  ]
}

export const workNissan: Project = {
  id: "mock-uuid-213",
  title: "Nissan",
  details: `
    <h3>Admin Accounts</h3>
    <ul>
      <li>
        <div>nonvoice-nmt@zanroo.com</div>
        <div>0inE#Ae5!7cS</div>
      </li>
      <li>
        <div>admin@nissan.co.th</div>
        <div>gCpn9YaPaq!H</div>
      </li>
      <li>
        <div>admin@appsynth.net</div>
        <div>appsynth2010</div>
      </li>
    </ul>
  `,
  tasks: [
    {
      id: "mock-uuid-nissan-213-1-1-1",
      title: "Meeting with K.Tee and the client for security and code scanning",
      details: "",
      dates: {
        scheduledDate: "2025-03-03T00:00:00+07:00",
      },
      isCompleted: true
    },
    {
      id: "mock-uuid-nissan-213-1-2",
      title: "Update remaining tasks and plans before moving to Honda project",
      details: `
        <a href='https://appsynth.atlassian.net/wiki/spaces/Nissan/pages/2857075020/Remaining+Tasks'>Slack: Remaining Tasks</a>
        <ul>
          <li>Recalls feature implementation</li>
          <li>Merge code scanning results and fixes</li>
          <li>Coupon campaign setup and management</li>
          <li>Analytics implementation and tracking</li>
          <li>Client's Github repository setup and management</li>
        </ul>
      `,
      dates: {
        scheduledDate: "2025-03-20T00:00:00+07:00"
      },
      isCompleted: false
    }
  ],
  subProjects: [
    {
      id: "mock-uuid-nissan-release-213-1-1",
      title: "Release: 1.1.0",
      details: "",
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-1-2",
          title: "Deploy API and CMS",
          details: "",
          dates: {
            scheduledDate: "2025-03-05T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-1-1",
          title: "AppStoreConnect and PlayStoreConsole submission",
          details: "",
          dates: {
            scheduledDate: "2025-03-04T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-1-1",
          title: "Clear test data / mocked data from prod database",
          details: "<a href='https://docs.google.com/spreadsheets/d/1_1M2DYXnvewqzfZnNNnYJnZw7J0_lqyitteGNzMJN2c/edit?gid=0#gid=0'>Google Sheet: Check list before go live</a>",
          dates: {
            scheduledDate: "2025-03-10T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-1-1-release",
          title: "Distribute and release mobile application 1.1.0",
          details: "",
          dates: {
            scheduledDate: "2025-03-10T00:00:00+07:00",
          },
          isCompleted: true
        },
      ]
    },
    {
      id: "mock-uuid-nissan-release-213-1-2",
      title: "Release: 1.2.0",
      details: "",
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-2-1",
          title: "Deploy API, vault, and CMS",
          details: "เพราะ LMS จะยังไม่ Deploy และเราจะไม่มี Vault ทำให้ ณ จังหวะที่เรียก Get Booking List เพื่อ Count Badge มันจะพัง แต่ไม่อยากให้เป็น Blocker",
          dates: {
            scheduledDate: "2025-03-19T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-2-2",
          title: "Submit new version to AppStore and PlayStore",
          details: "",
          dates: {
            scheduledDate: "2025-03-19T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-2-3",
          title: "Update vault values for the LMS My Documents",
          details: "",
          dates: {
            scheduledDate: "2025-03-21T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-nissan-213-1-1-1-content",
      title: "Content",
      details: "Prepare content for MyNISSAN Applicaiton",
      dates: {
        scheduledDate: "2025-03-05T00:00:00+07:00",
      },
      isCompleted: false,
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-1-1-content-1",
          title: "Check older Disclaimer version with the new Serana with a new application version",
          details: "เช็คกับพี่บูมว่า Serena version ใหม่ ถูก Set บน Staging แล้วหรือยัง / แล้วไป Build App Version เก่ามาเช็ค",
          dates: {
            scheduledDate: "2025-03-05T00:00:00+07:00",
          },
          isCompleted: false
        },
      ]
    },
    {
      id: "mock-uuid-nissan-213-1",
      title: "Project and Credential Transfer/Handover",
      details: `
      <ul>
        <li>
          Email thread: Request for AppSynth Deliverables (@deloitte.com)
        </li>
        <li>
          <a href='https://appsynth.slack.com/archives/C083SGUQV7X/p1741862544041369?thread_ts=1741855602.061459&cid=C083SGUQV7X'>Slack: Project and Credential Transfer/Handover</a>
        </li>
      </ul>
      `,
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-1",
          title: "AppStoreConnect and PlayStoreConsole Permission",
          details: `
            <ul>
              <li>
                <a href='https://chatgpt.com/c/67c406a6-e5f4-8008-8d14-1849b110f66c'>ChatGTP: New email permission request</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-03T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-1-1-2123",
          title: "Let's engieer create/link Github account and let's NMT invite to join the organization",
          details: `
          `,
          dates: {
            scheduledDate: "2025-03-14T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-nissan-213-1-1",
          title: "Create repository and move source code from Appsynth's repositories to NMT's repositories",
          details: `
          `,
          dates: {
            scheduledDate: "2025-03-14T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-nissan-213-1-1-2123-2",
          title: "Create database password and other credentials",
          details: `
            <ul>
              <li>
                <a href="https://appsynth.slack.com/archives/C083SGUQV7X/p1741862808886939?thread_ts=1741855602.061459&cid=C083SGUQV7X">Slack: Database password and credentials</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-14T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-nissan-213-1-1-1-2123",
          title: "Transfer and handover how to access and manager credentials",
          details: `
          `,
          dates: {
            scheduledDate: "2025-03-14T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-nissan-213-1-1-1-2123-1",
          title: "Integrate with the CI/CD pipeline if need",
          details: `
          `,
          dates: {
            scheduledDate: "2025-03-14T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-nissan-213-1-2",
      title: "Feature: PIN and Passcode verification",
      details: `
        <ul>
          <li>
            <a href='https://chatgpt.com/c/67c4137f-9808-8008-91c5-8122ab67785b'>ChatGTP: PIN and Passcode verification flow</a>
          </li>
          <li>
            <a href='https://app.diagrams.net/#G1IbvmltKymanGbWfL5BiFUlyjCllkt43j#%7B%22pageId%22%3A%22jxEwmSrhu9PeQRLoU5as%22%7D'>Draw.io: Flow and diagrams</a>
          </li>
          <li>
            <a href='https://appsynth.atlassian.net/wiki/spaces/Nissan/pages/2889416880/PIN+Passcode'>Confluence: PIN/Passcode</a>
          </li>
        </ul>
      `,
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-2-1",
          title: "Flow and documentation",
          details: `
          <ul>
            <li>
              <a href='https://app.diagrams.net/#G1IbvmltKymanGbWfL5BiFUlyjCllkt43j#%7B%22pageId%22%3A%22jxEwmSrhu9PeQRLoU5as%22%7D'>Draw.io: Flow and diagrams</a>
            </li>
            <li>
              <a href='https://appsynth.atlassian.net/wiki/spaces/Nissan/pages/2889416880/PIN+Passcode'>Confluence: PIN/Passcode</a>
            </li>
          </ul>
          `,
          dates: {
            scheduledDate: "2025-03-02T00:00:00+07:00",
          },
          isCompleted: true
        } 
      ]
    },
    {
      id: "mock-uuid-nissan-213-1 2-2",
      title: "Feature: Service History",
      details: `
      `,
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-2-2-1",
          title: "NMT Data Platform Deployment by Kyndryl",
          details: "",
          dates: {
            scheduledDate: "2025-02-28T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-nissan-213-1 2-2",
      title: "Feature: Service Booking",
      details: `
      `,
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-2-2-1",
          title: "Follow up LMS Deployment and Integration Testing",
          details: "",
          dates: {
            scheduledDate: "2025-03-06T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-2-2-2",
          title: "Update credentials (Refresh token) and Drop Lead API",
          details: "",
          dates: {
            scheduledDate: "2025-03-06T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-nissan-213-1-2-2",
      title: "Feature: Pentest and Code Scanning",
      details: `
      `,
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-2-2-1",
          title: "Task breaking down by P'Bas",
          details: "",
          dates: {
            scheduledDate: "2025-03-03T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-2-2-2",
          title: "Email about timeline and plan to K.Tee",
          details: "Email topic: MyNISSAN Thailand - Request for Official Access & Scope Confirmation of the code-scanning",
          dates: {
            scheduledDate: "2025-03-03T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-2-2-3",
          title: "Sync branch with the team for code scanning",
          details: "Branch: code-scanning/2025-03-04",
          dates: {
            scheduledDate: "2025-03-04T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-2-2-4",
          title: "[API] Update dependency version based on the 'Software Composition Analysis'",
          details: "",
          dates: {
            scheduledDate: "2025-03-04T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-2-2-5",
          title: "Update information to the client along with the new confluence (added branch to pull)",
          details: `
            <ul>
              <li>
                <a href='https://appsynth.atlassian.net/wiki/spaces/Nissan/pages/edit-v2/2889678904'>Confluence: Bitbucket API Tokens</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-04T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-2-2-5-2",
          title: "Merge API source code from the code scaning into the main branch",
          details: "",
          dates: {
            scheduledDate: "2025-03-17T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-2-2-5",
          title: "Review latest test result and clarify with K.Tee",
          details: "",
          dates: {
            scheduledDate: "2025-04-20T00:00:00+07:00",
          },
          isCompleted: false
        },
      ]
    },
    {
      id: "mock-uuid-nissan-recall",
      title: "Feature: Service Recall",
      details: `
      `,
      tasks: [
        {
          id: "mock-uuid-nissan-recall-1",
          title: "Testing Data (from real data)",
          details: "",
          dates: {
            scheduledDate: "2025-03-06T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-recall-2",
          title: "S3: Integrate S2 to fetch the data from S3",
          details: "",
          dates: {
            scheduledDate: "2025-03-06T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-recall-3",
          title: "Flow and logic to process records",
          details: "",
          dates: {
            scheduledDate: "2025-03-06T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-recall-12",
          title: "S3: Repository and cronjob to auto fetch data from S3 automatically",
          details: "",
          dates: {
            scheduledDate: "2025-03-10T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-merge-dev-for-logic-testing",
          title: "Logic to INSERT recall transaction: Verify recall transaction (CHASSIC_NO (VIN), PFP, CREATED_DATE, EFFECTIVE_DATE, EXPIRATION_DATE)",
          details: "",
          dates: {
            scheduledDate: "2025-03-12T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-merge-dev-for-logic-testing",
          title: "Logic to REMOVE recall transaction: Verify recall transaction (CHASSIC_NO (VIN), PFP, CREATED_DATE, EFFECTIVE_DATE, EXPIRATION_DATE)",
          details: `
            To confirm with K.Tee
            <a href="https://app.diagrams.net/#G1IbvmltKymanGbWfL5BiFUlyjCllkt43j#%7B%22pageId%22%3A%22iZiPmICgJi0utMMXGkDf%22%7D">Flow diagram</a>
          `,
          dates: {
            scheduledDate: "2025-03-14T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-nissan-recall-10",
          title: "S3: Enhance logic to fetch the file with naming convention (with date format)",
          details: "",
          dates: {
            scheduledDate: "2025-03-12T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-recall-11",
          title: "S3: Move file to archive folder after processing",
          details: "",
          dates: {
            scheduledDate: "2025-03-12T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-recall-4",
          title: "Database: Replica database for process records and performance testing",
          details: "สอบถามจากน้องมิ้นท์ว่ามี Error log อะไรบ้างไหม เพื่อจะได้ทำการตรวจสอบก่อน / ถ้า Staging พังไม่เป็นไร แต่ถ้า Prod พัง จะต้องแจ้งคุณตี๋ว่าจำเป็นจะต้องมี Replica Database (เพราะ MyNISSAN ไม่ได้แค่ Import fiel แล้วจบ แต่จำเป็นจะต้องมีการ Process records เพื่อนำข้อมูลไปแสดงผลต่อผู้ใช้งาน) ",
          dates: {
            scheduledDate: "2025-03-13T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-nissan-213-1-2",
      title: "Feature: Booking Document",
      details: `
        <ul>
          <li>
            <a href='https://www.figma.com/design/6S81AR8EL3Yo3ueWOE1C0f/Nissan-Thai-App?node-id=7792-13108&t=lynaHE3tcxCbMm3G-0'>Figma: UI Flow</a>
          </li>
          <li>
            <a href='https://app.diagrams.net/#G1IbvmltKymanGbWfL5BiFUlyjCllkt43j#%7B%22pageId%22%3A%22ZBnOTXF4zyYeF5VZW4tX%22%7D'>Draw.io: Information</a>
          </li>
          <li>
            <a href='https://app.diagrams.net/#G1IbvmltKymanGbWfL5BiFUlyjCllkt43j#%7B%22pageId%22%3A%22Pk1dCpO5u0RJzux7ZnaQ%22%7D'>Draw.io: Flow and diagrams</a>
          </li>
           <li>
            <a href='https://appsynth.atlassian.net/wiki/spaces/Nissan/pages/2884337699/API+Specification'>Confluence: API Specification</a>
          </li>
        </ul>
      `,
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-2-1",
          title: "Document Password flow",
          details: `
            <ul>
              <li>
                <a href='https://app.diagrams.net/#G1IbvmltKymanGbWfL5BiFUlyjCllkt43j#%7B%22pageId%22%3A%22ZBnOTXF4zyYeF5VZW4tX%22%7D'>Draw.io: Flow and diagrams</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-03T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-booking-document-01",
          title: "API Specification",
          details: `
            <ul>
              <li>
                <a href='https://appsynth.atlassian.net/wiki/spaces/Nissan/pages/2884337699/API+Specification'>Confluence: API Specification</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-04T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-booking-document-02",
          title: "Confirm API Solution",
          details: `
          `,
          dates: {
            scheduledDate: "2025-03-05T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-booking-document-02",
          title: "Design / Mobile Implementation / Backend Implementation",
          details: `
          `,
          dates: {
            scheduledDate: "2025-03-05T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-booking-document-02",
          title: "Deploy / Submit / Release",
          details: `
          `,
          dates: {
            scheduledDate: "2025-03-19T00:00:00+07:00",
          },
          isCompleted: true
        }
      ]
    },
    {
      id: "mock-uuid-nissan-213-1-service-1",
      title: "Request: Update Privacy Policy",
      details: `
        <ul>
          <li>
            <a href='https://appsynth.atlassian.net/browse/NIS-838'>Jira: NIS-838</a>
          </li>
          <li>
            <a href='https://appsynth.slack.com/archives/C07J1AKSSMP/p1741750749215079'>Slack: Privacy notice update request</a>
          </li>
        </ul>
      `,
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-service-1-1",
          title: "Update privacy notices",
          details: `
          <ul>
            <li>
              <a href="https://appsynth.slack.com/archives/C07J1AKSSMP/p1741750749215079">Slack: Privacy notice update request</a>
            </li>
          </ul>
          <h3>DEV:</h3>
            <ul>
              <li>EN: <a href="https://mynissan-app-dev-pdpaweb.nissan.co.th/nissan_privacy_notice_en.html">https://mynissan-app-dev-pdpaweb.nissan.co.th/nissan_privacy_notice_en.html</a></li>
              <li>TH: <a href="https://mynissan-app-dev-pdpaweb.nissan.co.th/nissan_privacy_notice_th.html">https://mynissan-app-dev-pdpaweb.nissan.co.th/nissan_privacy_notice_th.html</a></li>
            </ul>

            <h3>QA:</h3>
            <ul>
              <li>EN: <a href="https://mynissan-app-qa-pdpaweb.nissan.co.th/nissan_privacy_notice_en.html">https://mynissan-app-qa-pdpaweb.nissan.co.th/nissan_privacy_notice_en.html</a></li>
              <li>TH: <a href="https://mynissan-app-qa-pdpaweb.nissan.co.th/nissan_privacy_notice_th.html">https://mynissan-app-qa-pdpaweb.nissan.co.th/nissan_privacy_notice_th.html</a></li>
            </ul>

            <h3>PROD:</h3>
            <ul>
              <li>EN: <a href="https://mynissan-app-pdpaweb.nissan.co.th/nissan_privacy_notice_en.html">https://mynissan-app-pdpaweb.nissan.co.th/nissan_privacy_notice_en.html</a></li>
              <li>TH: <a href="https://mynissan-app-pdpaweb.nissan.co.th/nissan_privacy_notice_th.html">https://mynissan-app-pdpaweb.nissan.co.th/nissan_privacy_notice_th.html</a></li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-12T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-service-1-2-1",
          title: "Add link to privacy policy page",
          details: `
            <a href="https://appsynth.atlassian.net/browse/NIS-838">เพิ่ม Link ให้กับหน้า Privacy Policy โดยอิงจาก Link เก่า</a>
            <ul>
              <li>EN: <a href="https://mynissan-app-dev-pdpaweb.nissan.co.th/nissan_privacy_notice_en.html">https://mynissan-app-dev-pdpaweb.nissan.co.th/nissan_privacy_notice_en.html</a></li>
              <li>TH: <a href="https://mynissan-app-dev-pdpaweb.nissan.co.th/nissan_privacy_notice_th.html">https://mynissan-app-dev-pdpaweb.nissan.co.th/nissan_privacy_notice_th.html</a></li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-19T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-service-1-2",
          title: "Update upload privacy notics to development and staging",
          details: `
            <ul>
              <li>
                <a href="https://appsynth.atlassian.net/browse/DEVOPS-3048">DEVOPS-3048: Request to DevOsp</a>
              </li>
              <li>
                <a href="https://appsynth.atlassian.net/browse/DEVOPS-3055">DEVOPS-3055: Request to DevOsp</a>
              </li>
            </ul>
            `,
          dates: {
            scheduledDate: "2025-03-19T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-service-1-3",
          title: "Update upload privacy notics to production",
          details: `
              <ul>
                <li>
                  <a href="https://appsynth.atlassian.net/browse/DEVOPS-3055">DEVOPS-3055: Request to DevOsp</a>
                </li>
              </ul>
            `,
          dates: {
            scheduledDate: "2025-03-19T00:00:00+07:00",
          },
          isCompleted: true
        }
      ],
      isCompleted: false,
      dates: {
        scheduledDate: "2025-03-19T00:00:00+07:00",
      }
    },
    {
      id: "mock-uuid-nissan-213-1-service-2",
      title: "Request: Create new coupon campaign",
      details: "",
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-service-2-1",
          title: "Remove current 20K coupon codes from campaign",
          details: "",
          dates: {
            scheduledDate: "2025-03-13T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-service-2-123132",
          title: "Recheck issueing coupon codes with multiple campaings with re-register user",
          details: "ลองสร้างหลาย Campaign แล้วลองลบ Account ดูว่าสามารถได้คูปองอีกรอบ ได้หรือไม่",
          dates: {
            scheduledDate: "2025-03-23T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-nissan-213-1-service-2-2", 
          title: "Create new campaign (April 1-30)",
          details: `
            <ul>
              <li>Wait for new 20K codes from client</li>
              <li>Format the file and Import new coupon codes from <a href="https://apcdeloitte-my.sharepoint.com/personal/skhamhan_deloitte_com/_layouts/15/onedrive.aspx?csf=1&web=1&e=C2lmjT&CID=021f216f%2D4d10%2D4de4%2D9623%2D5f5c818d1f7b&id=%2Fpersonal%2Fskhamhan%5Fdeloitte%5Fcom%2FDocuments%2FDocuments%2FNissan%20gg%20drive%2FCodes%2050K%2F13Mar25%5F20K%2FUpdate%2Fcsv&FolderCTID=0x01200090A9CA7DA47BF548B6DCA0A9DB8D5457&view=0">Google Sheet: New Coupon Codes (MyNissan-Coupon-Code-L2)</a></li>
              <li>Add new coupon T&C for new campaign <a href="https://apcdeloitte-my.sharepoint.com/:w:/r/personal/skhamhan_deloitte_com/_layouts/15/Doc.aspx?sourcedoc=%7BEB0DA10D-ABFE-4800-BE42-6B04490F3D22%7D&file=%5BMyNISSAN%5D%25u0e02%25u0e49%25u0e2d%25u0e01%25u0e33%25u0e2b%25u0e19%25u0e14%25u0e41%25u0e25%25u0e30%25u0e40%25u0e07%25u0e37%25u0e48%25u0e2d%25u0e19%25u0e44%25u0e02%25u0e01%25u0e32%25u0e23%25u0e02%25u0e22%25u0e32%25u0e22%25u0e40%25u0e27%25u0e25%25u0e32%25u0e04%25u0e39%25u0e1b%25u0e2d%25u0e07for-App.docx&action=default&mobileredirect=true&isSPOFile=1&ovuser=36da45f1-dd2c-4d1f-af13-5abe46b99921%2Ckchutapetch%40deloitte.com&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTAzMDIwMTAwOCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D">New Terms and Conditions</a></li>
              <li>Current campaign T&C examples:
                <ul>
                  <li>Dev:
                    <ul>
                      <li><a href="https://mynissan-app-dev-content.nissan.co.th/T%26C+EN.html">https://mynissan-app-dev-content.nissan.co.th/T%26C+EN.html</a></li>
                      <li><a href="https://mynissan-app-dev-content.nissan.co.th/T%26C+TH.html">https://mynissan-app-dev-content.nissan.co.th/T%26C+TH.html</a></li>
                    </ul>
                  </li>
                  <li>Staging:
                    <ul>
                      <li><a href="https://mynissan-app-qa-content.nissan.co.th/T%26C+EN.html">https://mynissan-app-qa-content.nissan.co.th/T%26C+EN.html</a></li>
                      <li><a href="https://mynissan-app-qa-content.nissan.co.th/T%26C+TH.html">https://mynissan-app-qa-content.nissan.co.th/T%26C+TH.html</a></li>
                    </ul>
                  </li>
                  <li>Prod:
                    <ul>
                      <li><a href="https://mynissan-app-content.nissan.co.th/T%26C+EN.html">https://mynissan-app-content.nissan.co.th/T%26C+EN.html</a></li>
                      <li><a href="https://mynissan-app-content.nissan.co.th/T%26C+TH.html">https://mynissan-app-content.nissan.co.th/T%26C+TH.html</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-31T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-nissan-213-1-service-2-3",
          title: "Update and deploy API for new SMS message to extend coupon code expiration dates to May 30 (both old and new coupon codes)",
          details: `
            <div>
              <p>TH: Code ส่วนลด 200 บาท ใช้ได้ที่นิสสันทุกสาขา XXXXXXX หมดเขต 31 พ.ค. 68</p>
              <p>EN: Discount code 200 THB for all Nissan centers XXXXXXX Exp 31/5/25</p>
            </div>
          `,
          dates: {
            scheduledDate: "2025-03-18T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-service-2-4",
          title: "Fix bug uploading coupon codes",
          details: `
            <h3>Bug</h3>
            <ul>
              <li>ตอนอัพโหลดสำเร็จแต่ Toast Message แสดง Failed</li>
              <li>ตอน Upload มันติด header ไปด้วย ต้อง Filter ออก</li>
            </ul>
            <h3>Performance</h3>
            <ul>
              <li>ตอนนี้เป็น Insert 1:1 อยู่ ควรจะ Builk insert ด้วย</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-31T00:00:00+07:00",
          },
          isCompleted: false
        }
      ],
      isCompleted: false,
      dates: {
        scheduledDate: "2025-03-12T00:00:00+07:00",
      }
    },
    {
      id: "mock-uuid-nissan-213-1-service-3",
      title: "Request: Update recall transaction",
      details: `<p>Run a Python script with a virtual environment (env): <a href="https://chatgpt.com/c/67f4c793-295c-8008-96a9-297855ec346a">Link</a></p>`,
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-service-3-1",
          title: "Update recall transaction (วันที่ 13 มีนาคม 2568)",
          details: `
            <a href="https://nissangroup.sharepoint.com/teams/JAO_NMT_000408_NMTSingleCustomerMobileApp/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=N3wH7o&ovuser=4617a0ae%2D1a92%2D4482%2Da833%2D7bad535b3292%2Ckao%2Eappsynth%40outlook%2Ecom&OR=Teams%2DHL&CT=1741845628345&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNTAxMzEwNjAxMyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&CID=3d048aa1%2D80f9%2D4000%2Dbb99%2Db0fe1ed536ee&cidOR=SPO&FolderCTID=0x012000405CE58436FAF649A4CE1362D7B6B1BA&id=%2Fteams%2FJAO%5FNMT%5F000408%5FNMTSingleCustomerMobileApp%2FShared%20Documents%2FSingle%20Customer%20Mobile%20Application%2FRequirement%2FRecall%20Campaign%2FFinal%20Service%20Campaign">SharePoint: Final Service Campaign</a>
          `,
          dates: {
            scheduledDate: "2025-03-16T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-service-3-2",
          title: "Update recall transaction (วันที่ 10 เมษายน 2568)",
          details: `
            <a href="https://nissangroup.sharepoint.com/teams/JAO_NMT_000408_NMTSingleCustomerMobileApp/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=N3wH7o&ovuser=4617a0ae%2D1a92%2D4482%2Da833%2D7bad535b3292%2Ckao%2Eappsynth%40outlook%2Ecom&OR=Teams%2DHL&CT=1741845628345&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNTAxMzEwNjAxMyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&CID=3d048aa1%2D80f9%2D4000%2Dbb99%2Db0fe1ed536ee&cidOR=SPO&FolderCTID=0x012000405CE58436FAF649A4CE1362D7B6B1BA&id=%2Fteams%2FJAO%5FNMT%5F000408%5FNMTSingleCustomerMobileApp%2FShared%20Documents%2FSingle%20Customer%20Mobile%20Application%2FRequirement%2FRecall%20Campaign%2FFinal%20Service%20Campaign">SharePoint: Final Service Campaign</a>
          `,
          dates: {
            scheduledDate: "2025-04-10T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-service-3-2123",
          title: "Update recall transaction (วันที่ 11 เมษายน 2568)",
          details: `
            <a href="https://nissangroup.sharepoint.com/teams/JAO_NMT_000408_NMTSingleCustomerMobileApp/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=N3wH7o&ovuser=4617a0ae%2D1a92%2D4482%2Da833%2D7bad535b3292%2Ckao%2Eappsynth%40outlook%2Ecom&OR=Teams%2DHL&CT=1741845628345&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNTAxMzEwNjAxMyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&CID=3d048aa1%2D80f9%2D4000%2Dbb99%2Db0fe1ed536ee&cidOR=SPO&FolderCTID=0x012000405CE58436FAF649A4CE1362D7B6B1BA&id=%2Fteams%2FJAO%5FNMT%5F000408%5FNMTSingleCustomerMobileApp%2FShared%20Documents%2FSingle%20Customer%20Mobile%20Application%2FRequirement%2FRecall%20Campaign%2FFinal%20Service%20Campaign">SharePoint: Final Service Campaign</a>
          `,
          dates: {
            scheduledDate: "2025-04-15T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-service-3-2123",
          title: "Update recall transaction (วันที่ 5 พฤษภาคม 2568)",
          details: `
            <a href="https://nissangroup.sharepoint.com/teams/JAO_NMT_000408_NMTSingleCustomerMobileApp/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=N3wH7o&ovuser=4617a0ae%2D1a92%2D4482%2Da833%2D7bad535b3292%2Ckao%2Eappsynth%40outlook%2Ecom&OR=Teams%2DHL&CT=1741845628345&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNTAxMzEwNjAxMyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&CID=3d048aa1%2D80f9%2D4000%2Dbb99%2Db0fe1ed536ee&cidOR=SPO&FolderCTID=0x012000405CE58436FAF649A4CE1362D7B6B1BA&id=%2Fteams%2FJAO%5FNMT%5F000408%5FNMTSingleCustomerMobileApp%2FShared%20Documents%2FSingle%20Customer%20Mobile%20Application%2FRequirement%2FRecall%20Campaign%2FFinal%20Service%20Campaign">SharePoint: Final Service Campaign</a>
          `,
          dates: {
            scheduledDate: "2025-05-05T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-service-3-2123",
          title: "Update recall transaction (วันที่ [x] มีนาคม 2568)",
          details: `
            <a href="https://nissangroup.sharepoint.com/teams/JAO_NMT_000408_NMTSingleCustomerMobileApp/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=N3wH7o&ovuser=4617a0ae%2D1a92%2D4482%2Da833%2D7bad535b3292%2Ckao%2Eappsynth%40outlook%2Ecom&OR=Teams%2DHL&CT=1741845628345&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNTAxMzEwNjAxMyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&CID=3d048aa1%2D80f9%2D4000%2Dbb99%2Db0fe1ed536ee&cidOR=SPO&FolderCTID=0x012000405CE58436FAF649A4CE1362D7B6B1BA&id=%2Fteams%2FJAO%5FNMT%5F000408%5FNMTSingleCustomerMobileApp%2FShared%20Documents%2FSingle%20Customer%20Mobile%20Application%2FRequirement%2FRecall%20Campaign%2FFinal%20Service%20Campaign">SharePoint: Final Service Campaign</a>
          `,
          dates: {
            scheduledDate: "2025-04-16T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-nissan-213-1-service-3-5",
      title: "Request: Enhance infrastructure",
      details: `
        <ul>
          <li>
            <a href='https://appsynth.atlassian.net/wiki/spaces/Nissan/pages/2889678904/MyNISSAN+Thailand+-+Architecture'>Confluence: MyNISSAN Thailand - Architecture</a>
          </li>
          <li>
            <a href='https://appsynth.slack.com/archives/C083SGUQV7X/p1742359016061799'>Slack Thread: Enhance infrastructure</a>
          </li>
        </ul>
      `,
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-service-3-5-1", 
          title: "Review architecture document",
          details: "",
          dates: {
            scheduledDate: "2025-03-20T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]

    },
    {
      id: "mock-uuid-nissan-213-1-service-4",
      title: "Issue: Recheck user profile from NMT (missing user profile data)",
      details: "Fwd: FW: [Ticket ID : 274836][CRM] C25030819,C25030862/ไม่สามารถเพิ่มรถใน App My Nissan ได้ ระบบแจ้ง Error \"หมายเลขตัวถังนี้ถูกลงทะเบียนแล้ว\"",
      tasks: [
        {
          id: "mock-uuid-nissan-213-1-service-4-1",
          title: "Recheck user profile from NMT",
          details: "",
          dates: {
            scheduledDate: "2025-03-17T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-nissan-213-1-service-4-2",
          title: "Sned the email confirmation",
          details: "",
          dates: {
            scheduledDate: "2025-03-17T00:00:00+07:00",
          },
          isCompleted: true
        }
      ],
      isCompleted: false,
      dates: {
        scheduledDate: "2025-03-17T00:00:00+07:00",
      }
    },
    {
      id: "mock-uuid-214-2-2-booking-project-product-management-05",
      title: "Enhancement: CMS User Management System",
      details: "",
      dates: {
        scheduledDate: "2025-03-31T00:00:00+07:00",
      },
      tasks: [
        {
          id: "mock-uuid-214-2-2-booking-project-product-management-05-01",
          title: "สามารถดูข้อมูลของลูกค้าคร่าว ๆ ได้ แต่ปกปิด Personal Information Data ไว้",
          details: "",
          dates: {
            scheduledDate: "2025-03-31T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-2-2-booking-project-product-management-05-02",
          title: "สามารถดูรถของลูกค้าที่เพิ่มไว้ในระบบได้ (ดูในมุมมองของลูกค้า)",
          details: "",
          dates: {
            scheduledDate: "2025-03-31T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-2-2-booking-project-product-management-05-03",
          title: "สามารถดูรถของลูกค้าที่เพิ่มไว้ในระบบได้ (ดูในมุมมองของรถ ว่ามีเจ้าของกี่คนบ้าง)",
          details: "",
          dates: {
            scheduledDate: "2025-03-31T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-2-2-booking-project-product-management-05-04",
          title: "Troubleshooting: ลูกค้าไม่สามารถเพิ่มรถได้",
          details: `
            <h3>Reproduct Steps</h3>
            <ol>
              <li>อาจจะต้องมี API login with admin token -> เพื่อให้ user token ออกมา เพื่อใช้ในการ investigate</li>
              <li>ยิง API customer profile (MyNISSAN)</li>
              <li>ยิง API customer profile (NMT)</li>
              <li>ยิง API Service hsitry (NMT)</li>
            </ol>
          `,
          dates: {
            scheduledDate: "2025-03-31T00:00:00+07:00",
          },
          isCompleted: false
        }
      ],
      isCompleted: false
    }
  ]
}

export const workBookingProject: Project = {
  id: "mock-uuid-214",
  title: "Booking Project",
  details: "",
  tasks: [
    {
      id: "mock-uuid-214-1-booking-project-content",
      title: "สร้างบ้านพักหลังใหม่ บางแสน 1 หลัง",
      details: "jiradchaya.pal@gmail.com ขอส่งเมลมาก่อนค่ะ สำหรับบ้านหลังใหม่ บางแสน 1 หลังค่ะ รายละเอียดบ้านยังไม่มีนะคะ",
      tasks: [],
      dates: {
        scheduledDate: "2025-03-29T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-214-1-booking-project-facebook-appeal",
      title: "อุทธรณ์ Facebook",
      details: `
        <a href="https://chatgpt.com/c/67f68497-bc84-8008-bbd1-6b9c223e1766">ChatGPT: Facebook Appeal Request</a>
      `,
      dates: {
        scheduledDate: "2025-05-31T00:00:00+07:00"
      },
      isCompleted: false
    }
  ],
  subProjects: [
    {
      id: "mock-uuid-214-3-social-media-security",
      title: "Social Media Security Updates",
      details: "Enhance security and permission management for social media accounts",
      tasks: [
        {
          id: "mock-uuid-214-3-1-meta-business-check",
          title: "Check Meta Business Manager Access",
          details: `
            <p>
              <a href='https://chatgpt.com/c/68201536-0448-8008-afcf-3ec6cb83299b'>ChatGPT: How to add user to Meta Business Manager</a>
            </p>
            <ul>
              <li>Check if I can access to the Meta Business Manager</li>
              <li>Check with P'Fah how to grant the user access</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-05-11T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-3-1-meta-business-setup", 
          title: "Setup Meta Business Manager",
          details: `
            <p>
              <a href='https://chatgpt.com/c/68201536-0448-8008-afcf-3ec6cb83299b'>ChatGPT: How to add user to Meta Business Manager</a>
            </p>
            <ul>
              <li>Create Meta Business Manager account</li>
              <li>Add Facebook Page and Instagram account to Business Manager</li>
              <li>Set up user roles and permissions</li>
              <li>Transfer existing page admin access</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-05-11T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-3-2-2fa",
          title: "Enable 2FA on Facebook Account",
          details: `
            <ul>
              <li>Set up authentication app</li>
              <li>Generate backup codes</li>
              <li>Add trusted contacts</li>
              <li>Review login alerts settings</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-04-20T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-3-3-security-audit",
          title: "Conduct Security Audit",
          details: `
            <ul>
              <li>Review connected apps and websites</li>
              <li>Check active sessions</li>
              <li>Update password policy</li>
              <li>Document security procedures</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-04-25T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-214-1-booking-project-content",
      title: "Content Creation",
      details: "",
      tasks: [
        {
          id: "mock-uuid-214-1-1-booking-project-content-01",
          title: "Blog: บทความบ้านพักสำหรับสัตว์เลี้ยง",
          details: "",
          dates: {
            scheduledDate: "2025-01-29T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-214-1-2-booking-project-content-02",
          title: "Blog: 10 เหตุผลที่ควรเลือกพักบ้านพูลวิลล่าแทนโรงแรม",
          details: `
            <ul>
              <li>
                <a href='https://chatgpt.com/c/67caf507-f580-8008-abef-9cdd52089c03'>ChatGPT: Blog content</a>
              </li>
              <li>
                <a href='https://www.isarapoolvilla.com/blogs/benefits-of-pool-villas-over-hotels-11'>Isara Pool Villa: 10 เหตุผลที่ควรเลือกพักบ้านพูลวิลล่าแทนโรงแรม</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-08T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-214-1-3-booking-project-content-03.4",
          title: "Checklist อุปกรณ์ปีนเขา + CTA ประมานว่าถ้าอยากหาบ้านพักเพื่อรวมตัวก่อนปีนเขา เรามีแนะนำ",
          details: `
            <ul>
              <li>
                <a href='https://chatgpt.com/c/680ce5f3-d05c-8008-8527-f4747745b723'>ChatGPT: Hiking checklist</a>
              </li>
              <li>
                <a href='https://chatgpt.com/g/g-p-67fb952507b881918d4893f18003331e-pool-villa-copy-writer/c/68134e8a-a7cc-8008-b8da-cc3049358828'>เช็คลิสต์จัดกระเป๋าเดินป่าและปีนเขา: พร้อมลุยทุกเส้นทางธรรมชาติ</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-05-01T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-214-1-3-booking-project-content-03.5",
          title: "Blog: เทคนิคถ่ายรูปในพูลวิลล่ายังไงให้ดูแพง",
          details: `
            <ul>
              <li>
                <a href='https://chatgpt.com/c/67c9eec9-be3c-8008-be71-d560e823c941'>ChatGPT: Blog ideas</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-07T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-1-4-booking-project-content-04",
          title: "Blog: ไอเดียกิจกรรม Team Building ในพูลวิลล่า",
          details: `
            <ul>
              <li>
                <a href='https://chatgpt.com/c/6742045a-7d50-8008-946d-0f4b4a17d042'>ChatGPT: Team building Ideas</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-15T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-1-5-booking-project-content-05", 
          title: "Blog: ฉลองเทศกาลปีใหม่และคริสต์มาสในพูลวิลล่า",
          details: `
            <ul>
              <li>
                <a href='https://chatgpt.com/c/6741d26b-89d8-8008-b9a6-36dbc9c6e114'>ChatGPT: เทศกาลปีใหม่และคริสมาสต์</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-09-22T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-1-3-booking-project-content-03",
          title: "คิดหาไอเดียสำหรับบล็อกใหม่ ๆ",
          details: `
            <ul>
              <li>
                <a href='https://chatgpt.com/c/67c9e4d8-6948-8008-aca1-5f109fb3159c'>ไอเดีย</a>
              </li>
              <li>
                <a href='https://chatgpt.com/c/67d9a90e-999c-8008-8002-5b449abeefed'>ไอเดีย 2 (อันนี้น่าสนใจ)</a>
              </li>
              <li>
                <a href='https://chatgpt.com/c/67c9f20a-90a8-8008-b417-dead25122159'>วิธีโปรโมท</a>
              </li>
              <li>
                <a href='https://chatgpt.com/c/67c9f285-22b4-8008-863e-1f6cd8962013'>Backlink</a>
              </li>
              <li>
                <a href='https://www.notion.so/khemmachart/Project-Categories-of-Blog-Content-16acd45f383d807ab64ecc89806e55b6?pvs=4'>Project Categories of Blog Content</a>
              </li>
              <li>
                <a href='https://chatgpt.com/c/67faaf5e-9880-8008-a4d1-b167890dc5ef'>หัวข้อเพื่อเขียนบทความทำ SEO</a>
              </li>
              <li>
                <a href="https://www.notion.so/khemmachart/Project-Categories-of-Blog-Content-16acd45f383d807ab64ecc89806e55b6?pvs=4">Project: Categories of Blog Content</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-07T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-1-6-booking-project-content-06",
          title: "Blog: Checklist สิ่งของจำเป็นสำหรับทริปเที่ยวต่างประเทศ พักโรงแรม พักพูลวิลล่า",
          details: `
            <ul>
              <li>
                <a href='https://chatgpt.com/g/g-p-67fb952507b881918d4893f18003331e-pool-villa-copy-writer/c/67fc14ba-9b24-8008-9326-0c4194c57529'>ChatGPT: Content</a>
              </li>
              <li>
                <a href='https://chatgpt.com/canvas/shared/67fc2113173c8191bc710e739ac98343'>Share Link</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-05-01T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-214-1-7-booking-project-content-07",
          title: "Blog: เทคนิคการจองพูวิลล่าเพื่อให้ได้โปรโมชั่นและราคาที่ดี",
          details: "",
          dates: {
            scheduledDate: "2025-04-16T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-2-booking-project-product-management",
          title: "Blog: Staycation คืออะไร และทำไมต้อง Pool Villa",
          details: "https://chatgpt.com/c/67d9a9db-8d70-8008-a2a5-6e46975d8749",
          tasks: [],
          dates: {
            scheduledDate: "2025-03-22T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-214-2-booking-project-staycation",
          title: "Blog: Staycation ที่บางแสน",
          details: "https://chatgpt.com/c/67d9b018-6a44-8008-a778-035145084bdd",
          tasks: [],
          dates: {
            scheduledDate: "2025-03-22T00:00:00+07:00",
          },
          isCompleted: true

        },
        {
          id: "mock-uuid-214-2-booking-project-product-management",
          title: "Blog: Pool Villa vs Airbnb",
          details: "https://chatgpt.com/c/67d9a9d4-1a60-8008-a3a8-378694d8003f",
          tasks: [],
          dates: {
            scheduledDate: "2025-03-22T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-214-2-booking-project-product-management",
          title: "Revise category บ้านพักพูลวิลล่าบางแสน บ้านพักพูลวิลล่าพัทยา บ้านพักพูลวิลล่าราคาถูก",
          details: `
          <ul>
            <li>
              <a href="https://www.isarapoolvilla.com/categories/บ้านพักพูลวิลล่าบางแสน-4">บ้านพักพูลวิลล่าบางแสน</a>
            </li>
            <li>
              <a href="https://www.isarapoolvilla.com/categories/บ้านพักพูลวิลล่าพัทยา-5">บ้านพักพูลวิลล่าพัทยา</a>
            </li>
          </ul>`,
          tasks: [],
          dates: {
            scheduledDate: "2025-03-22T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-214-2-checklist",
          title: "Checklist สิ่งของที่ต้องเตรียม เมื่อไปพูลวิลล่า",
          details: "https://chatgpt.com/c/67d9b132-a534-8008-bd3d-5bceb67f76f1",
          tasks: [],
          dates: {
            scheduledDate: "2025-03-29T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-2-staycation",
          title: "เตรียมตัว และเตรียมกิจกรรมไป Staycation!",
          details: "https://chatgpt.com/c/67d9b0db-97e4-8008-b6c5-e25bf9a7fef3",
          tasks: [],
          dates: {
            scheduledDate: "2025-03-29T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-2-team-building",
          title: "[Idea] ไอเดียสำหรับทำ Outing และ Team building ของบริษั ที่พูลวิลล่า",
          details: "ข้อดี / ไอเดียกิจกรรม",
          tasks: [],
          dates: {
            scheduledDate: "2025-03-29T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-214-2-booking-project-product-management",
      title: "Product Management",
      details: "",
      tasks: [
        {
          id: "mock-uuid-214-2-1-booking-project-product-management-01",
          title: "อัพเดทกฏของบ้านพัก",
          details: "",
          dates: {
            scheduledDate: "2025-01-28T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-214-2-2-booking-project-product-management-02",
          title: "ลงบ้านพักหลักใหม่ ๆ",
          details: "",
          dates: {
            scheduledDate: "2025-01-28T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-2-2-booking-project-product-management-03",
          title: "Feature: อัพเดท Google Map",
          details: "",
          dates: {
            scheduledDate: "2025-03-10T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-214-2-2-booking-project-product-management-04",
          title: "Feature: Website Category, Product Category, Blog Category",
          details: `
            <ul>
              <li>
                <a href='https://chatgpt.com/c/67c9efc0-d1e0-8008-9f94-0afd7f7913b1'>หมวดหมู่ของบ้านพัก</a>
              </li>
              <li>
                <a href='https://chatgpt.com/c/67c9e5a6-eb00-8008-9318-5222ac89d888'>หมวดหมู่ของบล็อก</a>
              </li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-03-10T00:00:00+07:00",
          },
          isCompleted: false
        },
      ]
    },
    {
      id: "mock-uuid-214-3-booking-project-web-scraping",
      title: "Web Scraping",
      details: `
        <p>
          Based on the error message, you're using a Mac with Python installed via Homebrew, which is using an externally managed environment. The recommended way to handle this is to create a virtual environment. Here are the step-by-step instructions to fix this:
        </p>
        <h3>Virtual Environment Setup</h3>
        <ol>
          <li>create a virtual environment in your project directory:
            <pre>python3 -m venv venv</pre>
          </li>
          <li>Activate the virtual environment:
            <pre>source venv/bin/activate</pre>
          </li>
          <li>Now install the requests package in your virtual environment:
            <pre>pip install requests</pre>
          </li>
          <li>Run your script (while the virtual environment is activat):
            <pre>python scrapping_image_gallery.py</pre>
          </li>
          <li>When you're done working on your project, you can deactivate the virtual environment by typing:
            <pre>deactivate</pre>
          </li>
        </ol>

        <p>Note: Virtual environment must be activated before running script. Terminal prompt will show (venv) when activated:</p>
        <pre>(venv) khemmachart@personal scrape-image-gallery %</pre>
      `,
      tasks: [ 
      ],
      isCompleted: false
    },
    {
      id: "mock-uuid-campaign-retention",
      title: "Campaign: Retention Program",
      details: `
        <ul>
          <li>
            <a href='https://www.notion.so/khemmachart/Campaign-Welcome-Set-1d3cd45f383d80fe830eff7ee66e1a5e?pvs=4'>Welcome Set</a>
          </li>
          <li>
            <a href='https://www.notion.so/khemmachart/Campaign-Landing-Pages-Template-message-1d3cd45f383d80838a7de9bb2f522a6f?pvs=4'>Details</a>
          </li>
        </ul>
      `,
      isCompleted: false,
      tasks: [
        {
          id: "mock-uuid-campaign-retention-01",
          title: "Welcome Set - Card",
          details: "",
          dates: {
            scheduledDate: "2025-04-17T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-campaign-retention-01",
          title: "Template Message",
          details: "",
          dates: {
            scheduledDate: "2025-04-17T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-campaign-referral", 
      title: "Campaign: Referral Program",
      details: `
        <ul>
          <li>
            <a href='https://www.notion.so/khemmachart/Campaign-Welcome-Set-1d3cd45f383d80fe830eff7ee66e1a5e?pvs=4'>Welcome Set</a>
          </li>
          <li>
            <a href='https://www.notion.so/khemmachart/Campaign-Landing-Pages-Template-message-1d3cd45f383d80838a7de9bb2f522a6f?pvs=4'>Details</a>
          </li>
        </ul>
      `,
      isCompleted: false,
      tasks: [
        {
          id: "mock-uuid-campaign-retention-01",
          title: "Welcome Set - Card",
          details: "",
          dates: {
            scheduledDate: "2025-04-17T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-campaign-retention-01",
          title: "Template Message",
          details: "",
          dates: {
            scheduledDate: "2025-04-17T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-campaign-loyalty",
      title: "Campaign: Loyalty Program", 
      details: `
        <ul>
          <li>
            <a href='https://www.notion.so/khemmachart/Campaign-Welcome-Set-1d3cd45f383d80fe830eff7ee66e1a5e?pvs=4'>Welcome Set</a>
          </li>
          <li>
            <a href='https://www.notion.so/khemmachart/Loyalty-Program-1d3cd45f383d801ebb3fecc3a6d3ca07?pvs=4'>Details</a>
          </li>
        </ul>
      `,
      isCompleted: false
    },
    {
      id: "mock-uuid-campaign-birthday",
      title: "Campaign: Birthday Program",
      details: `
        <ul>
          <li>
            <a href='https://www.notion.so/khemmachart/Campaign-Welcome-Set-1d3cd45f383d80fe830eff7ee66e1a5e?pvs=4'>Welcome Set</a>
          </li>
          <li>
            <a href='https://www.notion.so/khemmachart/Campaign-Landing-Pages-Template-message-1d3cd45f383d80838a7de9bb2f522a6f?pvs=4'>Details</a>
          </li>
        </ul>
      `,
      isCompleted: false,
      tasks: [
        {
          id: "mock-uuid-campaign-retention-01",
          title: "Welcome Set - Card",
          details: "",
          dates: {
            scheduledDate: "2025-04-17T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-campaign-retention-01",
          title: "Template Message",
          details: "",
          dates: {
            scheduledDate: "2025-04-17T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-technical-enhancement-order-management-system",
      title: "Technical Enhancement: Order Management System",
      details: `
        <h3>Order Management System Design</h3>

        <h4>Reference Links</h4>
        <ul>
          <li><a href='https://chatgpt.com/c/67e19983-db4c-8008-acfa-0c11d03b8b62'>Order Detail / Booking Detail</a></li>
          <li><a href='https://chatgpt.com/c/67e278d0-c628-8008-883b-f138938199fc'>eCommerce Database Design</a></li>
          <li><a href='https://chatgpt.com/c/66e09ff3-b3ec-8008-a5f0-fc90873b8e27'>Booking Price Details API</a></li>
          <li><a href='https://chatgpt.com/c/67e19cd0-305c-8008-9698-205b6a84d327'>Payment Commission API Examples</a></li>
          <li><a href='https://chatgpt.com/c/67e19983-db4c-8008-acfa-0c11d03b8b62'>Booking Detail API Response</a></li>
          <li><a href='https://chatgpt.com/c/67e10a74-35e8-8008-8052-a51b92327006'>Commission Types Inquiry</a></li>
          <li><a href='https://chatgpt.com/c/66e1648a-741c-8008-bff8-dc4e9891fd4e'>eCommerce Booking Fees</a></li>
          <li><a href='https://chatgpt.com/c/59298025-a876-45b3-b047-e676af0bc443'>Airbnb Cost Breakdown</a></li>
          <li><a href='https://chatgpt.com/c/001dcfeb-978b-4631-afce-fdbbc7b57dc8'>Food Delivery Fee Breakdown</a></li>
          <li><a href='https://chatgpt.com/g/g-p-680e8a8bedf08191af5e323b172f6f0b-coach-software-development/c/68285cf2-50c8-8008-bf19-6528995440ca'>Booking Detail API Design</a></li>
        </ul>

        <h4>Booking Response Structure</h4>
        <ul>
          <li>Product Details
            <ul>
              <li>Description</li>
              <li>Location</li>
              <li>Contact</li>
              <li>Supplier
                <pre>
{
  supplier_id: "HOST-7890",
  name: "Green Hill Resort", 
  contact: {
    phone: "+66xxxxxxx",
    email: "greenhill@example.com"
  },
  rating: 4.8
}</pre>
              </li>
            </ul>
          </li>
          <li>Customer Details</li>
          <li>Booking Details
            <ul>
              <li>Check-in</li>
              <li>Check-out</li>
            </ul>
          </li>
          <li>Order Details
            <ul>
              <li>Price Breakdown
                <ul>
                  <li>base_price</li>
                  <li>system_fee
                    <ul>
                      <li>type: flat_rate | percentage</li>
                    </ul>
                  </li>
                  <li>commission_fee
                    <ul>
                      <li>type: flat_rate | percentage</li>
                    </ul>
                  </li>
                  <li>addons
                    <pre>
[
  { name: "Extra Guest", qty: 2, price: 300 },
  { name: "Pet Fee", qty: 1, price: 150 },
  { name: "Cleaning Fee", price: 200 }
]</pre>
                  </li>
                  <li>discount
                    <ul>
                      <li>coupon
                        <ul>
                          <li>coupon detail</li>
                        </ul>
                      </li>
                      <li>promotion
                        <ul>
                          <li>promotion detail</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>affiliate</li>
                </ul>
              </li>
              <li>Invoices
                <ul>
                  <li>[1] Reservation Deposit 60%
                    <ul>
                      <li>invoice_number</li>
                      <li>status: pending | paid | refunded | refunded_partially</li>
                    </ul>
                  </li>
                  <li>[2] Remaining Balance on Arrival 40%
                    <ul>
                      <li>invoice_number</li>
                      <li>status: pending | paid | refunded | refunded_partially</li>
                    </ul>
                  </li>
                  <li>[3] Security Deposit
                    <ul>
                      <li>invoice_number</li>
                      <li>status: pending | paid | refunded | refunded_partially</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>coupon_applied: new_user</li>
              <li>promotion_applied
                <ul>
                  <li>retention_campaign
                    <ul>
                      <li>detail</li>
                    </ul>
                  </li>
                  <li>early_checkin
                    <ul>
                      <li>detail</li>
                    </ul>
                  </li>
                  <li>late_checkout
                    <ul>
                      <li>detail</li>
                    </ul>
                  </li>
                  <li>cancellation
                    <ul>
                      <li>detail</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      `,
      tasks: [],
      isCompleted: false
    },
    {
      id: "mock-uuid-technical-enhancement-auth",
      title: "Technical Enhancement: Product Authorization",
      details: `
        <h3>Authorization System Enhancement</h3>
        <p><a href="https://chatgpt.com/c/68345862-3a1c-8008-adf9-ac7d3d2ca248">ChatGTP: Product Authorization</a></p>
        <ul>
          <li>Research and implement role-based access control (RBAC)</li>
          <li>Define permission levels and access scopes</li>
          <li>Design authorization workflow and user management</li>
          <li>Implement security best practices</li>
        </ul>
      `,
      tasks: [
        {
          id: "mock-uuid-auth-task-1",
          title: "Research and Design Authorization System",
          details: `
            <ul>
              <li>Research RBAC implementation approaches</li>
              <li>Design permission hierarchy and role structure</li>
              <li>Document authorization flows and access patterns</li>
              <li>Create technical design document</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-04-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-auth-task-2.1",
          title: "Design a database schema for authorization, role, and permission",
          details: `
            <a href="https://chatgpt.com/c/68345862-3a1c-8008-adf9-ac7d3d2ca248">ChatGTP: Product Authorization</a>
            <ul>
              <li>Design Database
                <ul>
                  <li>partners</li>
                  <li>partner_users</li>
                  <li>partner user level { owner, staff, financial }</li>
                  <li>product_partners</li>
                </ul>
              </li>
              <li>Create a repo to fetch a products by user_id from database and redis</li>
              <li>Create a middleware</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-05-31T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-auth-task-2",
          title: "Implement Core Authorization Features",
          details: `
            <ul>
              <li>Set up role and permission management</li>
              <li>Implement access control middleware</li>
              <li>Create role assignment functionality</li>
              <li>Add permission validation logic</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-04-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-auth-task-3",
          title: "Testing and Security Audit",
          details: `
            <ul>
              <li>Write unit tests for authorization logic</li>
              <li>Perform security testing and vulnerability assessment</li>
              <li>Conduct authorization flow testing</li>
              <li>Document security recommendations</li>
            </ul>
          `,
          dates: {
            scheduledDate: "2025-04-30T00:00:00+07:00"
          },
          isCompleted: false
        }
      ],
      dates: {
        scheduledDate: "2025-05-15T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-line-notification-enhancement",
      title: "Technical Enhancement: LINE Push Notification Enhancement for each partner",
      details: "Split each supplier/partner to store the LINE group ID",
      tasks: [
        {
          id: "mock-uuid-line-notification-enhancement-task-1",
          title: "Split each supplier/partner to store the LINE group ID",
          details: "",
          dates: {
            scheduledDate: "2025-05-31T00:00:00+07:00"
          },
          isCompleted: false
        }
      ],
      dates: {
        scheduledDate: "2025-05-31T00:00:00+07:00"
      },
      isCompleted: false
    }
  ]
}

export const writingNovelProject: Project = {
  id: "mock-uuid-214123123123",
  title: "Novel Writing Project (Passive Income)",
  details: `<a href="https://chatgpt.com/c/68299154-a08c-8008-9603-b76edbd8ccd8">Research + Process + Ideas</a>`,
  tasks: [
    {
      id: "mock-uuid-214-1",
      title: "วิจัยตลาดและช่องทางการขาย",
      details: "ศึกษาแพลตฟอร์มขายนิยายออนไลน์ (Jamsai, Fictionlog, Readawrite), ประเภทนิยายที่ได้รับความนิยม, และกลุ่มผู้อ่านเป้าหมาย",
      dates: {
        scheduledDate: "2025-02-01",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-214-2",
      title: "กำหนดแนวเรื่องและประเภทนิยาย",
      details: "เลือกประเภทนิยาย (Romance, Fantasy, Mystery) และวางธีมหลัก กลุ่มผู้อ่านเป้าหมาย และสไตล์การเขียน",
      dates: {
        scheduledDate: "2025-02-10",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-214-3",
      title: "วางโครงเรื่องและพัฒนาตัวละคร",
      details: "สร้าง Plot outline, Character profile, Story arc และ Timeline หลัก",
      dates: {
        scheduledDate: "2025-02-20",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-214-4",
      title: "เขียน First Draft",
      details: "เริ่มเขียนฉบับร่างแรก กำหนดเป้าหมายจำนวนคำต่อวัน (1,000-2,000 คำ) และตารางเขียนประจำวัน",
      dates: {
        scheduledDate: "2025-03-01",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-214-5",
      title: "แก้ไขและพัฒนาบท",
      details: "ตรวจแก้ไขเนื้อหา ภาษา การดำเนินเรื่อง และส่งให้ Beta Reader อ่าน",
      dates: {
        scheduledDate: "2025-03-15",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-214-6",
      title: "เตรียมช่องทางการขายบนแพลตฟอร์มอ่านหนังสือออนไลน์",
      details: "สร้างบัญชีและอัปโหลดนิยายบนแพลตฟอร์มต่างๆ เช่น Jamsai, Fictionlog, Readawrite, Meb และเตรียมระบบการชำระเงินและสิทธิ์การเข้าถึงเนื้อหา",
      dates: {
        scheduledDate: "2025-04-01",
      },
      isCompleted: false
    }
  ],
  subProjects: [
    {
      id: "mock-uuid-214-sub-1",
      title: "เรื่อง [1]",
      details: "",
      tasks: [
      ]
    },
    {
      id: "mock-uuid-214-sub-2",
      title: "เรื่อง [2]",
      details: "",
      tasks: [
      ]
    },
  ]
}


export const workGCCSuperAppProject: Project = {
  id: "mock-uuid-215",
  title: "GCC Super App Project",
  details: "",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-2161",
      title: "การชำระเงิน",
      details: "",
      tasks: [
        {
          id: "mock-uuid-2161",
          title: "Follow up บัญชีกับบัตรเครดิตกับน้องพรีม",
          details: "",
          dates: {
            scheduledDate: "2025-01-27",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2162",
          title: "สอบถามเรื่องการชำระเงิน กับ การเซ็นสัญญากับพี่ยอด",
          details: "",
          dates: {
            scheduledDate: "2025-01-27",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-payment-2163",
          title: "1st Payment: การชำระเงินงวดแรก",
          details: "",
          dates: {
            scheduledDate: "2025-02-10",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-payment-2164",
          title: "2nd Payment: การชำระเงินงวดที่สอง",
          details: "",
          dates: {
            scheduledDate: "2025-04-10",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-payment-2165",
          title: "Commission Payment: หักค่าหัวคิวให้ตูน 4,000 บาท",
          details: "",
          dates: {
            scheduledDate: "2025-04-10",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-payment-2166",
          title: "เปิดใบแจ้งหนี้อันใหม่ สำหรับงานที่เป็น CR",
          details: "",
          dates: {
            scheduledDate: "2025-03-22T00:00:00+07:00",
          },
          isCompleted: false
        }
      ] 
    },
    {
      id: "mock-uuid-2161-1-booking-project-defect-report-pages-01",
      title: "Defect Report",
      details: "",
      tasks: [
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-00",
          title: "แก้ไข router_list.dart",
          details: "แก้ไขให้รองรับของเก่าด้วย MaterialPageRoute ReportStatusPageNavigator(dynamic argument) => MaterialPageRoute(settings: RouteSettings(name: '/ReportStatusPage'), builder: (context) => ReportStatusPage(argument: argument));",
          dates: {
            scheduledDate: "2025-01-27T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-01",
          title: "เปิดงาน By User",
          details: "ทดสอบการเปิดงานโดย user ในระบบ",
          dates: {
            scheduledDate: "2025-03-21T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-02", 
          title: "Assign งานแบบบุคคล By OM",
          details: "ทดสอบการ assign งานให้บุคคลโดย om",
          dates: {
            scheduledDate: "2025-03-21T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-03",
          title: "Assign งานแบบกลุ่ม By OM",
          details: "ทดสอบการ assign งานให้กลุ่มโดย om",
          dates: {
            scheduledDate: "2025-03-21T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-04",
          title: "เปลี่ยนประเภทงาน By OM",
          details: "ทดสอบการเปลี่ยนประเภทงานโดย om",
          dates: {
            scheduledDate: "2025-03-21T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-05",
          title: "ขยายเวลาดำเนินงาน By Operation",
          details: "ทดสอบการขยายเวลาดำเนินงานโดย operation",
          dates: {
            scheduledDate: "2025-03-21T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-06",
          title: "ส่งมอบงาน By Operation",
          details: "ทดสอบการส่งมอบงานโดย operation",
          dates: {
            scheduledDate: "2025-03-21T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-07",
          title: "ประเมินงาน By User",
          details: "ทดสอบการประเมินงานโดย user",
          dates: {
            scheduledDate: "2025-03-21T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-08",
          title: "ปิดงาน By OM",
          details: "ทดสอบการปิดงานโดย om",
          dates: {
            scheduledDate: "2025-03-21T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-09",
          title: "งานสำหรับ Feature ที่ต้องทำเพิ่ม (รอ Functions จากพี่ยอด)",
          details: "",
          dates: {
            scheduledDate: "2025-03-23T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-2161-1-booking-project-defect-report-pages-01",
      title: "Parking",
      details: "",
      tasks: [
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-01--0011",
          title: "Parking Landing Page",
          details: "",
          dates: {
            scheduledDate: "2025-02-02T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-2161-1-1-booking-project-defect-report-pages-01-01--0012",
          title: "Parking Detail Page",
          details: "",
          dates: {
            scheduledDate: "2025-02-02T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-2161-1-2-booking-project-defect-report-pages-01-02-01",
          title: "Parking Booking Page",
          details: "",
          dates: {
            scheduledDate: "2025-02-02T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-2161-1-2-booking-project-defect-report-pages-01-02-02",
          title: "Parking Booking Detail Page",
          details: "",
          dates: {
            scheduledDate: "2025-02-02T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-2161-1-2-booking-project-defect-report-pages-01-02-03",
          title: "Parking Booking History Page",
          details: "",
          dates: {
            scheduledDate: "2025-02-02T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-2161-1-2-booking-project-defect-report-pages-01-02-04",
          title: "Gradle configuration",
          details: "",
          dates: {
            scheduledDate: "2025-02-02T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2161-1-2-booking-project-defect-report-pages-01-02-05",
          title: "New parking API integration",
          details: "",
          dates: {
            scheduledDate: "2025-02-02T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-2161-1-2-booking-project-defect-report-pages-01-02-06",
          title: "แก้ไขให้เอาชื่อของลูกค้ามาแสดงในหน้า Booking",
          details: "",
          dates: {
            scheduledDate: "2025-03-24T00:00:00+07:00",
          },
          isCompleted: true
        }
      ],
      isCompleted: false
    },
    {
      id: "mock-uuid-2161-1-booking-project-defect-report-pages-01",
      title: "Authentication",
      details: "Login, Register, Forgot Password",
      tasks: [],
      dates: {
        scheduledDate: "2025-03-25T00:00:00+07:00",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-2161-1-booking-project-defect-report-pages-01",
      title: "Profile",
      details: "",
      tasks: [],
      dates: {
        scheduledDate: "2025-03-25T00:00:00+07:00",
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-2161-1-booking-project-defect-report-pages-01",
      title: "Weather",
      details: "",
      tasks: [],
      dates: {
        scheduledDate: "2025-03-25T00:00:00+07:00",
      },
      isCompleted: false
    }
  ]
}

export const NASProject: Project = {
  id: "mock-uuid-nas-project",
  title: "NAS Project",
  details: `
    <ul>
      <li>สามารถนำไปใช้เป็น OnPremise ได้ (UAT Server ของ NoteTaking กับ Booking ได้)</li>
      <li>ใช้เป็น Server ของ n8n ได้</li>
      <li><b>UGREEN NASync ข้อดี ข้อเสีย การติดตั้ง การใช้งานเป็น OnPremise </b><a href="https://chatgpt.com/c/68139cfc-6038-8008-9d1b-e2c480bb13fa">Reference Link</a></li>
    </ul>
  `,
  tasks: [],
  dates: {
    scheduledDate: "2025-03-25T00:00:00+07:00"
  },
  isCompleted: false
}

export const socialContentManagementAndCreationProject: Project = {
  id: "mock-uuid-social-content-management-and-creation-project",
  title: "Social Content Management and Creation Project",
  details: `
    <p>
      Ideas of Content management workflow and processes:
    </p>

    <ul>
      <li>Draft content management flow</li>
      <li>ใช้ AI: Perfecity research -> ChatGPT สรุปข้อมูล -> วางไว้ใน Notion Ideation</li>
      <li>หน้า Content Management มี topics, desc, status (public, draft, in review) เรียงตาม project/categories(ทำ relation แยก), content type (post, image, vdo, blog)
        <ul>
          <li>ถ้าเป็น blog คือ จะเป็น process เขียนบล็อคก่อน แล้วค่อยโพสลงโซเชียล</li>
          <li>ถ้าโพสลงโซเชียล จะแบ่งเป็นหลาย ๆ columns by channel เพื่อให้สามารถ tracking ได้ แล้วมึ status แยกกันraft ออกมาเป็นหลย ๆ หัวข้อ</li>
        </ul>
      </li>
      <li>รีวิวได้ ด้วยการคอมเม้น แล้วมีุ่มให้กด regenerate แล้วเอาคอมเม้นไปปรับปรุง</li>
    </ul>
    
    <h3>More details</h3>
    <ul>
      <li>
        <a href="https://chatgpt.com/c/680544a9-2f98-8008-9b8f-1aa07642497b">n8n เชื่อมต่อ Social Network</a>
      </li>
      <li>
        <a href="https://chatgpt.com/c/680d2fae-f170-8008-99a4-6b1cc2b36d31">n8n with Medium</a>
      </li>
      <li>
        <a href="https://chatgpt.com/c/68077c58-5b1c-8008-8f1e-c181b477a1e8">n8n with workflow with Notion Database</a>
      </li>
      <li>
        <a href="https://chatgpt.com/c/6804d3bf-a294-8008-bc0c-3d890cbfaaf2">Midjournet alternative</a>
      </li>
    </ul>
  `,
  tasks: [
    {
      id: "mock-uuid-create-tasks-for-setting-up-docker-and-n8n",
      title: "Create tasks for setting up Docker and n8n",
      details: `
        <ul>
          <li><a href="https://www.youtube.com/watch?v=l4Pr8UuWkhY&t=436s">YouTube: เริ่มต้นใช้งาน n8n และการทำ Workflow เบื้องต้น ดูจบบรรลุ</a></li>
          <li><a href="https://www.youtube.com/watch?v=fop18sDeEU4">YouTube: สอน สร้าง workflow โพสต์อัตโนมัติด้วย n8n บน facebook ง่ายๆ ในคลิปเดียวจบ</a></li>
        </ul>
      `,
      dates: {
        scheduledDate: "2024-05-10T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-creation-project-task-1",
      title: "Learn about n8n automation platform",
      details: `
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=UVpRiNpyE08"><b>[YouTube] Autopost Facebook ด้วย n8n Automation!! (ละเอียดกว่านี้ก็มาลงเรียนกันเถอะ😃)</b></a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=SzqETJYmMog&list=PLFVkditTmggj4fRnH_xr-1C3a3Puu6gB7&index=4">[YouTube] The ULTIMATE AI Social Media Automation System (NO CODE!)</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=HvFMezJC9-M&list=PLFVkditTmggj4fRnH_xr-1C3a3Puu6gB7">[YouTube] Ai Automation ที่กำลังมาแรงแซง MAKE.COM | ขี้เกียจศาสตร์ PODCAST EP61</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=MbQv8zoNEfY&list=PLFVkditTmggjWir7VCGkK2w8RGor121Ck">[YouTube] Create CONSISTENT CHARACTERS for your projects with FLUX! (ComfyUI Tutorial)</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=MNYx_0a2XqI&list=PLFVkditTmggjWir7VCGkK2w8RGor121Ck&index=9">[YouTube] The ULTIMATE Agent to Auto-Publish Content Hourly - 9 Social Platforms in 1! (n8n NO-CODE tutorial🥚)</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=xjEhGkC7Qz4&list=PLFVkditTmggj4fRnH_xr-1C3a3Puu6gB7&index=18&t=317s"><b>[YouTube] (ข้างในมีตัวอย่าง Workflow) ใช้ n8n ทำ YouTube Shorts แบบอัตโนมัติ มันจะ viral วันไหน ? | n8n + json2video api</b></a>
          </li>
          <li>
            <p>Learn more about this in the <a href="https://www.youtube.com/playlist?list=PLFVkditTmggj4fRnH_xr-1C3a3Puu6gB7">AI and AI Agent Playlist</a> in the YouTube channel:</p>
          </li>
        </ul>  
        <p>
          Goals: หาตัวอย่าง Workflow สำหรับ Post social media ด้วย AI
        </p>
      `,
      dates: {
        scheduledDate: "2024-05-11T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-creation-project-task-1.1",
      title: "Setup n8n on Cloud Platform",
      details: `
        <ul>
          <li>Setup and configure n8n cloud instance</li>
          <li>Create organized folder structure for workflow management</li>
          <li>Set up initial workflows and configure social media integrations</li>
        </ul>
      `,
      dates: {
        scheduledDate: "2024-05-12T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-creation-project-task-1.2",
      title: "Draft Content Publishing Workflow",
      details: `
        <p>Create comprehensive workflow documentation for:</p>
        <ul>
          <li>Publishing to multiple social media platforms:
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>TikTok</li>
              <li>YouTube</li>
              <li>YouTube Shorts</li>
              <li>Pinterest</li>
              <li>LinkedIn</li>
              <li>Telegram</li>
              <li>Medium</li>
            </ul>
          </li>
          <li>Content creation and image generation process</li>
          <li>Content review system using Notion Database</li>
        </ul>
      `,
      dates: {
        scheduledDate: "2024-05-13T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-creation-project-task-1.5",
      title: "Setup n8n automation workflows",
      details: `
        <p>Setup and configure n8n automation platform:</p>
        <ul>
          <li>Deploy n8n instance to cloud hosting</li>
          <li>Create content publishing workflows:
            <ul>
              <li>AI-assisted social media post generation</li>
              <li>Scheduled post publishing across platforms with Notion</li>
            </ul>
          </li>
        </ul>
      `,
      dates: {
        scheduledDate: "2024-05-15T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-creation-project-task-2", 
      title: "Research cross-platform social media publishing",
      details: "Learn best practices for publishing content across Facebook, Instagram, TikTok and other platforms",
      dates: {
        scheduledDate: "2024-05-01T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-nas-task",
      title: "Research and Setup NAS",
      details: `
        <ul>
          <li>Research NAS options and requirements: <a href="https://chatgpt.com/g/g-p-680e8a8bedf08191af5e323b172f6f0b-coach-software-development/c/68139cfc-6038-8008-9d1b-e2c480bb13fa">Reference Link</a></li>
          <li><b>UGREEN NASync ข้อดี ข้อเสีย การติดตั้ง การใช้งานเป็น OnPremise </b><a href="https://chatgpt.com/c/68139cfc-6038-8008-9d1b-e2c480bb13fa">Reference Link</a></li>
          <li>Purchase selected NAS system</li>
          <li>Set up and configure NAS</li>
        </ul>
      `,
      dates: {
        scheduledDate: "2024-05-01T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-creation-project-task-3",
      title: "Study Medium.com publishing workflow",
      details: "Learn about Medium's publishing platform, formatting, and distribution options",
      dates: {
        scheduledDate: "2024-05-01T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-creation-project-task-3.1",
      title: "Create Medium accounts for projects",
      details: `
        <p>Set up dedicated Medium publication accounts for each project:</p>
        <ul>
          <li>Pool Villa content publication</li>
          <li>Gentleman Lifestyle publication</li>
          <li>Technical blog publication</li>
          <li>Personal development publication</li>
        </ul>
        <p>Configure profile settings, branding and initial publication setup for each account.</p>
      `,
      dates: {
        scheduledDate: "2024-05-01T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-creation-project-task-4",
      title: "Organize Google Drive content structure",
      details: "Create folder hierarchy and naming conventions for content assets",
      dates: {
        scheduledDate: "2024-05-01T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-creation-project-task-5",
      title: "Set up Notion content management system",
      details: "Create databases and templates for content planning and tracking",
      dates: {
        scheduledDate: "2024-05-01T00:00:00+07:00"
      },
      isCompleted: false
    }
  ],
  subProjects: [
    {
      id: "mock-uuid-social-content-pool-villa",
      title: "Pool Villa Playbook Content",
      details: `
        <h3>Medium.com: <a href="https://medium.com/the-pool-villa-playbook">https://medium.com/the-pool-villa-playbook</a></h3>
        <a href="https://chatgpt.com/g/g-p-67fa47484fe08191a7bdff7dfd89110b-pool-villa-consulting/c/6820c3d3-d270-8008-8811-64e86e23621c">ChatGPT: Medium Account Name</a>
        <a href="https://chatgpt.com/c/68209d63-32b4-8008-8400-4b15396274fe">ChatGPT: Weekly Content Series / โครงสร้างบทความ Series: ปั้นเจ้าสู่ Grandmaster บน Medium / Publication Slogan</a>
        <ul>
          <li>Username: @thepoolvillaist</li>
          <li>Writer name: The Pool Villaist</li>
          <li>Publication: The Pool Villa Playbook</li>
          <li>Description: "คู่มือการสร้างพูลวิลล่าแบบเป็นระบบ แผนที่ของคนที่ไม่อยากแค่พัก…แต่อยากรวยด้วยที่พัก</li>
        </ul>
        <ul>
          <li>
            <a href="https://chatgpt.com/g/g-p-67fa47484fe08191a7bdff7dfd89110b-pool-villa-project-consulting/c/680dc776-7498-8008-8d9a-7cb9f9bd6962">ChatGPT Canvas</a>
          </li>
          <li>
            <a href="https://chatgpt.com/c/680d36c5-9dd0-8008-9f42-a75eb35d19d0">ChatGPT Link (ที่เคยขอไอเดีย)</a>
          </li>
          <li>
            บทความอื่น ๆ เช่น วิธีการวัดว่พูลวิลล่าเป็นที่นิยมแค่ไหน อยู่ภายใน ChatGPT Project 
            <a href="https://chatgpt.com/g/g-p-67fa47484fe08191a7bdff7dfd89110b-pool-villa-project-consulting/project">Project Link</a>
          </li>
          <li>
            และเอา Notion มาหนวกรวมไปด้วย เช่น Back-to-Back booking
          </li>
        </ul>
      `,
      tasks: [],
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-gentleman",
      title: "Gentleman Lifestyle Content",
      details: `
       <h3>Medium.com</h3>
       <a href="https://chatgpt.com/g/g-p-67fcd037cf5081918e53823db42da123-coach-gentleman/c/68110764-7610-8008-88af-a9ca06da8639">ChatGPT: Medium Account Name</a>
       <ul>
         <li>Username: @gentleohart</li>
         <li>Writer name: Gent Leohart</li>
         <li>Publication: The Gentleman's Code</li>
         <li>Description: "The Letter to the Young Gentlemen" — เปรียบดังบันทึกแห่งเกียรติ ที่จะส่งต่อจากรุ่นสู่รุ่น</li>
      </ul>

      <ul>
        <li>
          <a href="https://chatgpt.com/g/g-p-67fcd037cf5081918e53823db42da123-gentleman/c/680dc725-0c48-8008-9a0d-cb3cf17b96db">ChatGPT Canvas</a>
        </li>
        <li>
          <a href="https://chatgpt.com/c/680d35fe-b7e0-8008-9055-79077ae78722">ChatGPT Link (ที่เคยขอไอเดีย)</a>
        </li>
        <li>
          บทความอื่น ๆ เช่น ถอดความเป็นสุภาพบุรุษของ xxxx อยู่ภายใน ChatGPT Project 
          <a href="https://chatgpt.com/g/g-p-67fcd037cf5081918e53823db42da123-gentleman/project">Project Link</a>
        </li>
      </ul>
      `,
      tasks: [],
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-buddhism",
      title: "Buddhism/Dhamma Content",
      details: "Educational content about Buddhist teachings and philosophy",
      tasks: [],
      isCompleted: false
    },
    {
      id: "mock-uuid-social-content-one-piece",
      title: "One Piece Content",
      details: "Content related to One Piece anime/manga series",
      tasks: [],
      isCompleted: false
    }
  ]
}

export const workOnePieceProject: Project = {
  id: "mock-uuid-216",
  title: "One Piece Project",
  details: "",
  tasks: [],
  subProjects: []
}

export const workNoteTakingProject: Project = {
  id: "mock-uuid-217",
  title: "Note Taking Project",
  details: "",
  tasks: [],
  subProjects: []
}

export const blogContentCreation: Project = {
  id: "mock-uuid-218",
  title: "Blog Content Creation",
  details: "",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-218-1",
      title: "Medium: Basic SEO",
      details: "Content creation and optimization focused on search engine optimization fundamentals",
      tasks: [
        {
          id: "mock-uuid-218-1-1",
          title: "Keyword Research",
          details: "Research and analyze relevant keywords for software engineering and technical topics",
          dates: {
            scheduledDate: "2024-03-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-218-1-2", 
          title: "On-Page SEO Implementation",
          details: "Optimize meta titles, descriptions, headers, and content structure",
          dates: {
            scheduledDate: "2024-03-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-218-2",
      title: "Medium: Problem Resolution in Software Engineering",
      details: "Articles and guides focused on common software engineering challenges and solutions",
      tasks: [
        {
          id: "mock-uuid-218-2-1",
          title: "Debugging Strategies",
          details: "Write comprehensive guide on effective debugging approaches and tools",
          dates: {
            scheduledDate: "2024-04-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-218-2-2",
          title: "Performance Optimization",
          details: "Create content about identifying and resolving performance bottlenecks",
          dates: {
            scheduledDate: "2024-04-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-218-3",
      title: "Medium: Software Engineering Consultancy & Digital Transformation",
      details: "Content focused on modern software practices and digital transformation strategies",
      tasks: [
        {
          id: "mock-uuid-218-3-1",
          title: "Cloud Migration Strategies",
          details: "Write about best practices for migrating legacy systems to cloud infrastructure",
          dates: {
            scheduledDate: "2024-05-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-218-3-2",
          title: "Agile Transformation",
          details: "Create guide on implementing agile methodologies in traditional organizations",
          dates: {
            scheduledDate: "2024-05-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const thaiHondaProject: Project = {
  id: "mock-uuid-thai-honda",
  title: "Thai Honda",
  details: `<ul>
    <li>Notebook: <a href="https://apcdeloitte.sharepoint.com/sites/ThaiHondaCXPJT/_layouts/15/Doc.aspx?sourcedoc={077b93f4-64fe-4bab-a565-97e219685bd9}&action=edit&wd=target%28Backend.one%7C7feaecda-3a0b-4476-802a-3a5f2e1a72fb%2FMyHonda-SDK%7C82e5ff4c-8397-4f31-899f-08933e65aa60%2F%29&wdorigin=NavigationUrl">Link</a></li>
    <li>Tools and Permissions: <a href="https://apcdeloitte-my.sharepoint.com/:x:/r/personal/kchutapetch_deloitte_com/_layouts/15/doc2.aspx?sourcedoc=%7B32014B5E-4A8A-45E9-85BA-60970BC775E7%7D&file=%5BThai%20Honda%5D%20Tools-n-Permission%20Checklist.xlsx&action=default&mobileredirect=true&ovuser=4617a0ae-1a92-4482-a833-7bad535b3292%2Ckao.appsynth%40outlook.com&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNTA0MDMxOTExMSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D">Link</a></li>
    <li>Jira: <a href="https://deloitte-team-w31luwlzauig.atlassian.net/jira/software/projects/THAIHONDA/boards/1/backlog?epics=visible&issueParent=12978&selectedIssue=THAIHONDA-2679">Link</a></li>
    <li>Data Flow (House Keeping): <a href="https://apcdeloitte.sharepoint.com/:p:/r/sites/ThaiHondaCXPJT/_layouts/15/doc2.aspx?sourcedoc=%7B8FD77B90-3256-4CAD-9280-6B802875C148%7D&file=Da%20Vinci_To-Be%20Data%20Flow_1.3.pptx&action=edit&mobileredirect=true&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1742200302955&web=1">Link</a></li>
    <li>Figma: <a href="https://www.figma.com/design/I9SEdMDeUmVKDVLXEqIRZX/TH-Honda---My-Honda-Moto-App---HiFi-Design-(Client%27s-Copy)?node-id=2270-21290&p=f&t=1Udv0PPpupBHJNVJ-0">Link</a></li>
    <li>AWS: <a href="https://myhonda.signin.aws.amazon.com/console">Link</a></li>
    <li>Git/CodeCommit: <a href="https://ap-southeast-1.console.aws.amazon.com/codesuite/codecommit/repositories/myhonda-app/browse?region=ap-southeast-1">Link</a></li>
  </ul>`,
  tasks: [
  ],
  subProjects: [
    {
      id: "mock-uuid-thai-honda-access",
      title: "Gain Knowledge and Access", 
      details: "",
      tasks: [
        {
          id: "mock-uuid-thai-honda-access-01",
          title: "Request access and setup Facebook developer account",
          details: `<p>MS Team Message: <a href="https://teams.microsoft.com/l/message/19:meeting_NzYwZWUyMzQtMGQzYi00MDExLWFiNmItNmNiYzEzMzFmMjQ2@thread.v2/1742445830456?context=%7B%22contextType%22%3A%22chat%22%7D">Link</a></p>`,
          dates: {
            scheduledDate: "2025-03-20T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-thai-honda-access-02", 
          title: "Complete tool and permission checklist",
          details: "",
          dates: {
            scheduledDate: "2025-03-20T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-thai-honda-access-03",
          title: "Review Figma flow",
          details: `<p>Figma: <a href="https://www.figma.com/design/I9SEdMDeUmVKDVLXEqIRZX/TH-Honda---My-Honda-Moto-App---HiFi-Design-(Client%27s-Copy)?node-id=2270-21290&p=f&t=1Udv0PPpupBHJNVJ-0">Link</a></p>`,
          dates: {
            scheduledDate: "2025-03-20T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-thai-honda-access-03b",
          title: "Review Jira board and tickets",
          details: `<p>Review current Jira tickets and project board to understand:</p>
            <ul>
              <li>Existing issues and blockers</li>
              <li>Development timeline and milestones</li>
              <li>Task dependencies and priorities</li>
              <li>Team assignments and capacity</li>
            </ul>`,
          dates: {
            scheduledDate: "2025-03-20T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-thai-honda-access-04",
          title: "Review plan and breakdown tasks",
          details: `
            <h3>Access & Setup</h3>
            <ul>
              <li>Permissions needed:
                <ul>
                  <li>Root account access</li>
                  <li>Create new AWS accounts</li>
                  <li>Oracle DB access</li>
                </ul>
              </li>
              <li>Knowledge required:
                <ul>
                  <li>Review Figma flows and designs</li>
                  <li>Understand existing architecture</li>
                  <li>Study deployment processes</li>
                </ul>
              </li>
            </ul>

            <h3>Infrastructure & CI/CD</h3>
            <ul>
              <li>Current Issues:
                <ul>
                  <li>UAT and Production environments misaligned (config + DB)</li>
                  <li>Manual deployments via console without scripts</li>
                  <li>API Gateway configuration differences</li>
                  <li>No proper deployment validation process</li>
                </ul>
              </li>
              <li>Action Plan:
                <ul>
                  <li>Move from CodeCommit to Github + Github Actions (using Appsynth org)</li>
                  <li>Setup scalable EKS on AWS (1-2 weeks, target before April 9)</li>
                  <li>Create new non-prod environment instead of fixing UAT</li>
                  <li>Focus on Production stability as source of truth</li>
                  <li>Andhika to support Production deployments (handling restarts and issues)</li>
                </ul>
              </li>
            </ul>

            <h3>Mobile</h3>
            <ul>
              <li>Current Status:
                <ul>
                  <li>Dev/Prod environments now aligned</li>
                  <li>UAT still different from Production</li>
                  <li>Manual deployments requiring dependency fixes</li>
                  <li>Environment management done in branches</li>
                </ul>
              </li>
              <li>Plan:
                <ul>
                  <li>Migrate to Github + Bitrise (using Appsynth org)</li>
                  <li>Implement proper environment management</li>
                </ul>
              </li>
            </ul>

            <h3>Technical Investigation Needed</h3>
            <ul>
              <li>Performance Issues:
                <ul>
                  <li>ETL data cycling problems</li>
                  <li>High Mongo CPU usage (70% higher than AWS)</li>
                  <li>Cronjob impact on resources</li>
                </ul>
              </li>
              <li>Data Management:
                <ul>
                  <li>Oracle to MongoDB dump frequency and content</li>
                  <li>Honda model data handling</li>
                  <li>Daily stock update process</li>
                  <li>Warranty data in MongoDB</li>
                </ul>
              </li>
            </ul>

            <h3>Design</h3>
            <ul>
              <li>Priorities:
                <ul>
                  <li>Review new Figma designs (split into 2 parts)</li>
                  <li>Design system deadline: April 9</li>
                  <li>Reorganize Figma workspace for better collaboration</li>
                  <li>Focus on Phase 2 features, avoid legacy changes</li>
                  <li>Possibly postpone Countdown feature past April 9 to focus on CI/CD</li>
                </ul>
              </li>
            </ul>

            <h3>Phase 2 Features</h3>
            <ul>
              <li>EV Charging implementation</li>
              <li>Marketplace Development:
                <ul>
                  <li>Vendor portal</li>
                  <li>Vehicle sales platform</li>
                  <li>Honda accessories store</li>
                  <li>Integration with existing components</li>
                </ul>
              </li>
              <li>Notes:
                <ul>
                  <li>Need deeper understanding of flows</li>
                  <li>Direct questions to Khun Fon</li>
                </ul>
              </li>
            </ul>`,
          dates: {
            scheduledDate: "2025-03-20T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-thai-honda-access-05",
          title: "Clone and build the project, check the log",
          details: `
          `,
          dates: {
            scheduledDate: "2025-03-25T00:00:00+07:00"
          },
          isCompleted: false
        }
      ],
      isCompleted: false
    },
    {
      id: "mock-uuid-thai-honda-issues-011",
      title: "Ph2 scope and funtionality",
      details: `<ul>
        <li><a href="https://apcdeloitte-my.sharepoint.com/:w:/g/personal/pwittayabundit_deloitte_com/Eb57uf4UfbpEnnT-Q2wh0J0BzB7aup4Te3pwAxwvHfj9rA?wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1742868314684&web=1">Phase 2 Scope and Functionality</a></li>
      </ul>`,
      dates: {
        scheduledDate: "2025-03-20T00:00:00+07:00"
      },
      isCompleted: false
    },
    {
      id: "mock-uuid-thai-honda-issues-012",
      title: "Knowledge: ETL System",
      details: `
      <img src="/image (4).png" alt="ETL System Diagram" width="100%" />
      <h3>ETL: Meeting สอบถามข้อมูลเกี่ยวกับ ETL System</h3>
      <ul>
        <li>อยู่บน OnPrem ของลูกค้า</li>
        <li>มี Data loader</li>
        <li>ไปเรียก Sale Force</li>
        <li>Mongo DB บวม</li>
      </ul>

      <h3>คำถามที่ต้องสอบถามเพิ่มเติม</h3>
      <ul>
        <li>Oracle เอาไว้ทำอะไร ? ใช่ Warrenty Information หรือเปล่า</li>
        <li>MongoDB Collection ไหน ใน Database ไหนบ้างมาจาก Oracle</li>
        <li>MongoDB Collection ไหน ใน Database ไหนบ้างมาจาก SaleForce</li>
        <li>ETL เก็บ Sourcecode อยู่ที่ไหน</li>
        <li>UAT กับ prod ต่างกัน
          <ul>
            <li>Prod ตื่นมายิงทุกวัน</li>
            <li>UAT ต้องเดินไปคลิก / มี Webserver หรือ UI ให้คลิกไหม / หรือ Execute ยังไง</li>
            <li>มีอะรไบ้างที่แตกต่างกันอีก</li>
          </ul>
        </li>
        <li><a href="https://apcdeloitte-my.sharepoint.com/:w:/r/personal/trungruangknokkul_deloitte_com/Documents/Questions%20for%20ETL%20Session.docx?d=w0d3da013e6bb4670ad050abd3fa0d954&csf=1&web=1&e=jE9HVO">Questions for ETL Session</a></li>
      </ul>`,
      tasks: [
        {
          id: "mock-uuid-thai-honda-issues-01-00",
          title: "Meeting with the K.Mos for knowledge sharing about ETL System",
          details: `
          <h3>Shortnote</h3>

          <ul>
            <li>ETL ไม่ได้เป็น real time เป็น cronjob ซะส่วนใหญ่</li>

            <li>NIDS to SaleForce: Cronjob ตี 3 -> Sync data จาก NIDS เป็นข้อมูลหลักของ Honda ทั้งหมด ่เช่น Warranty / Active bike / ข้อมูลการซื้อขาย / Questionair -> SaleForce CRM</li>

            <li>SaleForce to Mongo, Mongo to SaleForce: เป็น Campaign ซะส่วนใหญ่
              <ul>
                <li>ทุก ๆ 30 นาที: เช่น campaign campaign member, campaign activity, campaign member acitivyu,</li>
                <li>ทุกตี 2 voucher, product, etc</li>
              </ul>
            </li>

            <li>Vehicle model: cronjob</li>

            <li>Mongo 2 cluster
              <ul>
                <li>cluster 1 = user (core/non-core)</li>
              </ul>
            </li>
          </ul>
          `,
          dates: {
            scheduledDate: "2025-03-26T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-thai-honda-issues-01-01",
          title: "Follow up with the K.Mos for the updating diagram",
          details: `
           <ul>
             <li>คุณมอสบอกว่าจะส่ง Diagram ตัวใหม่มาให้</li>
             <li>เก้าอยากให้ใส่ Information/Table ไปด้วย ว่ามี Feature/Data อะไรบ้างที่เรา Sync เข้ามาที่ MongoDB</li>
           </ul>
          `,
          dates: {
            scheduledDate: "2025-04-01T00:00:00+07:00"
          },
          isCompleted: false
        }
      ],
      isCompleted: false
    },
    {
      id: "mock-uuid-thai-honda-issues-01",
      title: "Issue: User cannot receive OTP with login by email",
      details: `
        <h3>Meeting Summary</h3>
        <ul>
          <li>MS Teams Message: <a href=\"https://teams.microsoft.com/l/message/19:meeting_MjA4MDU5MDgtZjM0Ny00MDUwLTg3YWYtYTFmZjY0MmVjZTIw@thread.v2/1742459570985?context=%7B%22contextType%22%3A%22chat%22%7D\">Link</a></li>
          <li>CMP: <a href="https://apcdeloitte-my.sharepoint.com/:w:/g/personal/trungruangknokkul_deloitte_com/Ec8jLlNFpa9HrpbvT-dbTFQB8d9_KtAmT_7mGPpsyw5vjA?e=r4zxIm&isSPOFile=1">Link</a></li>
          <li>Script: <a href="https://apcdeloitte-my.sharepoint.com/personal/trungruangknokkul_deloitte_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftrungruangknokkul_deloitte_com%2FDocuments%2FHonda%20Project%2Fupdate-verified-email&ct=1742868647372&or=Teams-HL&ga=1&LOF=1">Mongo update script to is_verify_email</a></li>
          <li>CMP: Update records on the user collection in Mongo db for the 'User cannot receive OTP issue'</li>
        <ul>
          <li>330K records -> Marjority of users records -> จาก 490K</li>
          <li>RefId not null = มาจาก SaleForce</li>
          <li>มี Email แสดงว่าเป็นการสมัครสมาชิกด้วย Email</li>
          <li>แต่ Verify: false</li>
          <li>Backend จะไม่ส่ง Email ไป เพราะถือว่ายังไม่ได้ Verify Email</li>
          <li>rollout plan:
            <ul>
              <li>verfy: true</li>
              <li>is_fix_24march:</li>
            </ul>
          </li>
          <li>Validate: 330 records -> 0</li>
          <li>rollback plan
            <ul>
              <li>query is_fix_24march</li>
              <li>set verfy: true</li>
              <li>is_fix_24march:</li>
            </ul>
          </li>
          <li>อยากทำ Data test ขึ้นมา เพื่อจะ Prove ว่ามันใช้ได้จริง ๆ -> Production ได้ก้ดี</li>
        </ul>
        </ul>`,
      dates: {
        scheduledDate: "2025-03-20T00:00:00+07:00"
      },
      tasks: [
        {
          id: "mock-uuid-thai-honda-issues-01-00",
          title: "Meeting with the client for discussing the issue",
          details: ``,
          dates: {
            scheduledDate: "2025-03-20T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-thai-honda-issues-01-02",
          title: "CMP plan for API/CMS Deployment",
          details: ``,
          dates: {
            scheduledDate: "2025-03-24T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-thai-honda-issues-01-022",
          title: "Discuss with the client about the issue",
          details: ``,
          dates: {
            scheduledDate: "2025-03-25T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-thai-honda-issues-01-023",
          title: "Execute the script to update the is_verify_email field",
          details: ``,
          dates: {
            scheduledDate: "2025-03-26T00:00:00+07:00"
          },
          isCompleted: true
        }
      ],
      isCompleted: false
    },
    {
      id: "mock-uuid-thai-honda-issues-01-024",
      title: "Issue: Dealer not found",
      details: `<p>When user is registeration page and select a dealer</p>
      <p>**Flow is on the Window App</p>
      <h4>Details:</h4>
      <p>Issue dealer/branch code</p>
      <ul>
        <li>มีการส่งข้อมูล branch number ไป</li>
        <li>มีการส่งไปแล้ว ระบบรับไม่ได้</li>
        <li>Mobile ส่ง 7 หลัก พังได้ Error 400
          <ul>
            <li>UAT ผ่าน Prod พัง</li>
          </ul>
        </li>
        <li>Mobile ส่ง 5 หลัก ผ่าน</li>
        <li>ส่งไปที่ CDP</li>
        <li>Q: Error message: Dealer not found มาจาก backend หรือเปล่า</li>
        <li>Q: Logic การเช็ค Dealer อยู่ที่ไหน</li>
        <li>Q: การส่ง Dealer brach_code มาจากไหน? เติมเองหรือเปล่า</li>
        <li>!: ข้อสังเกต: Error code: Dealer Not Found</li>
      </ul>`,
      dates: {
        scheduledDate: "2025-03-26T00:00:00+07:00"
      },
      tasks: [
        {
          id: "mock-uuid-thai-honda-issues-01-024-00",
          title: "honda-core deployment",
          details: ``,
          dates: {
            scheduledDate: "2025-03-26T00:00:00+07:00"
          },
          isCompleted: true
        }
      ],
      isCompleted: true
    },
    {
      id: "mock-uuid-thai-honda-design-workshop",
      title: "Design Workshop",
      details: `
        <h3>Content Workshop</h3>
        <p>จัดทำเนื้อหาเพื่อใช้ใน Content Workshop</p>
        <p>จัดทำเนื้อหาไปได้ 2 ด้าน</p>

        <ul>
          <li>ฝั่งของ โปรแกรม</li>
          <li>Break ว่าจะ run เวลา 15 นาที แล้วปรับอีกราว 30 นาที</li>
          <li>วิธีทำงาน workshop ดังต่อไปนี้
            <ul>
              <li>ต้องมีการนำเสนอก่อน แล้วจึง
                <ul>
                  <li>ให้ทำงานร่วมกัน เพื่อให้เกิดการ เรียนรู้ สร้างความเข้าใจ ว่า จะทำอย่างไร</li>
                </ul>
              </li>
              <li>โจทย์มาจากที่ได้ ได้มาจากการ Review ไปแล้ว เพื่อที่จะได้มี engagement และ participation จากทีม
                <ul>
                  <li>Dynamic ของทีมที่จะได้ทำ ทดลองทำ</li>
                </ul>
              </li>
              <li>ทำ systems ต้องสามารถ learn ได้และ แล้วสามารถทำงานได้ ผลลัพธ์ feature</li>
            </ul>
          </li>
        </ul>

        <h3>เนื้อหาที่จะนำมา Review ดังนี้</h3>
        <ul>
          <li>Introduction
            <ul>
              <li>gap ที่มาจาก Production issue</li>
              <li>ต้องไม่ทิ้งไป APP</li>
              <li>ระบบ ไม่ควรหายไป</li>
              <li>เพิ่มเติม feature ใน Phase 2.4</li>
              <li>Phase 2.5 Marketplace and login</li>
              <li>ต้องมีการ Maintain</li>
            </ul>
          </li>
          <li>ประเด็นที่จะต้องทำ
            <ul>
              <li>ต้องมี Ground Rules ดังนี้
                <ul>
                  <li>ต้องมีการ ดูแลรักษาไว้ให้ได้ / Expert ต้องรู้เรื่องนี้</li>
                </ul>
              </li>
              <li>ทำงานร่วมกัน
                <ul>
                  <li>ผู้เชี่ยวชาญ ได้แสดงศักยภาพ</li>
                  <li>ผู้ที่ต้องเรียนรู้ได้เรียนรู้จากงาน (เพื่อให้ได้ success ได้)</li>
                  <li>ต้องมีการ request ก่อนทำ</li>
                  <li>ต้อง review ให้ได้มากที่สุดเท่าที่ possible priority ผลลัพธ์ที่จะทำได้ดีขึ้น</li>
                </ul>
              </li>
      `,
      tasks: [
        {
          id: "mock-uuid-thai-honda-design-workshop-task-1",
          title: "Schedule the workshop at 29th April",
          details: "",
          dates: {
            scheduledDate: "2025-04-29T00:00:00+07:00"
          }
        }
      ],
      isCompleted: false
    },
    {
      id: "mock-uuid-thai-honda-issues-01-0255",
      title: "Feature: Car Booking and purchase intent",
      details: `รายละเอียดแปะไว้ใน Team: ASH-Honda, Channel: 0-General`,
      dates: {
        scheduledDate: "2025-04-23T00:00:00+07:00"
      },
      tasks: [
        {
          id: "mock-uuid-thai-honda-issues-01-025-00",
          title: "Task breakdown and estimation",
          details: `รายละเอียดแปะไว้ใน Team: ASH-Honda, Channel: 0-General`,
          dates: {
            scheduledDate: "2025-04-23T00:00:00+07:00"
          },
          isCompleted: false
        }
      ],
      isCompleted: false
    },
    {
      id: "mock-uuid-thai-honda-issues-01-025",
      title: "Issue: Duplicated email on the onboarding flow",
      details: `
        <h3>Problem</h3>
        <ul>
          <li>Ticket Susu เค้ากรอก OTP แล้วมันพาไปหน้า onboarding</li>
          <li>API เส้น validate regitration</li>
          <li>เพราะเค้าไม่มีเบอร์ ระบบเลยให้กรอกเบอร์</li>
          <li>แต่ตอนเค้า submit เข้ามา request ส่งเบอร์กับ email มาด้วย</li>
          <li>พอระบบเจอว่า email ซ้ำเลย thrown error ออกมาให้</li>
        </ul>

        <h3>วิธีแก้</h3>
        <ul>
          <li>ต้องเพิ่ม logic ในการอัพเดทเบอร์โทรศัพท์</li>
        </ul>

        <h3>Question</h3>
        <ul>
          <li>ทำไมถึงมีเคสนี้ได้ ? ต้นกล้าลอง query เคสประมานนี้ พบว่ามี user อยู่จำเป็นจำนวนมาก</li>
        </ul>`,
      dates: {
        scheduledDate: "2025-03-26T00:00:00+07:00"
      },
      tasks: [
        {
          id: "mock-uuid-thai-honda-issues-01-025-00",
          title: "Meeting with the K.Fon to share the issue",
          details: `<h3>Problem</h3>
            <ul>
              <li>Ticket Susu เค้ากรอก OTP แล้วมันพาไปหน้า onboarding</li>
              <li>API เส้น validate regitration</li>
              <li>เพราะเค้าไม่มีเบอร์ ระบบเลยให้กรอกเบอร์</li>
              <li>แต่ตอนเค้า submit เข้ามา request ส่งเบอร์กับ email มาด้วย</li>
              <li>พอระบบเจอว่า email ซ้ำเลย thrown error ออกมาให้</li>
            </ul>

            <h3>วิธีแก้</h3>
            <ul>
              <li>ต้องเพิ่ม logic ในการอัพเดทเบอร์โทรศัพท์</li>
            </ul>

            <h3>Question</h3>
            <ul>
              <li>ทำไมถึงมีเคสนี้ได้ ? ต้นกล้าลอง query เคสประมานนี้ พบว่ามี user อยู่จำเป็นจำนวนมาก</li>
            </ul>`,
          dates: {
            scheduledDate: "2025-03-26T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-thai-honda-issues-01-025-01",
          title: "Enhance and implement the flow of the onboarding",
          details: "",
          dates: {
            scheduledDate: "2025-05-01T00:00:00+07:00"
          },
          isCompleted: false
        }
      ],
      isCompleted: false
    },
    {
      id: "mock-uuid-thai-honda-ev",
      title: "Feature: eVolve - EV Charger Integration",
      details: `
        <p>ChatGPT Discussion: <a href="https://chatgpt.com/c/67dd9ce7-eeb4-8008-8430-836c8ebd9317">Link</a></p>
        <h2>Meeting Summary</h2>
        <h3>สถาปัตยกรรมระบบ Backend ของแพลตฟอร์ม eVolve</h3>
        <ul>
          <li>พัฒนาบน AWS พร้อมรองรับ WebSocket</li>
          <li>ให้บริการทั้ง streaming data และ REST APIs</li>
          <li>ฟังก์ชันหลัก:
            <ul>
              <li>ตำแหน่งสถานีชาร์จและสถานะความพร้อมใช้งาน</li>
              <li>รายละเอียดการชาร์จ</li>
              <li>ข้อมูลแบบเรียลไทม์</li>
              <li>เริ่ม/หยุดการชาร์จ</li>
              <li>ระบบการจอง</li>
            </ul>
          </li>
        </ul>

        <h3>ฟังก์ชันการทำงานของ Smart Plug</h3>
        <ul>
          <li>ข้อจำกัด:
            <ul>
              <li>ไม่สามารถตรวจจับเปอร์เซ็นต์แบตเตอรี่ได้ (ขึ้นอยู่กับรถแต่ละรุ่น)</li>
              <li>สามารถประมาณค่าได้แต่ไม่มีข้อมูลแบตเตอรี่ดิบ</li>
            </ul>
          </li>
          <li>ฟีเจอร์หยุดชาร์จอัตโนมัติ:
            <ul>
              <li>ตรวจจับเมื่อกระแสไฟฟ้าใกล้ 0 (สันนิษฐานว่าแบตเตอรี่เต็ม)</li>
              <li>จัดการกรณีถอดปลั๊ก</li>
              <li>ตัดการเชื่อมต่อบัญชีอัตโนมัติเพื่อความปลอดภัย</li>
            </ul>
          </li>
          <li>เก็บประวัติการชาร์จ</li>
        </ul>

        <h3>การแจ้งเตือน</h3>
        <ul>
          <li>รองรับหลายช่องทาง:
            <ul>
              <li>Webhooks</li>
              <li>Event listeners</li>
              <li>Push notifications</li>
              <li>LINE API messaging</li>
            </ul>
          </li>
        </ul>

        <h3>การระบุตัวตนยานพาหนะ</h3>
        <ul>
          <li>มีโอกาสรองรับ ISO 15118 + โปรโตคอล Plug & Charge</li>
          <li>ใช้การยืนยันตัวตนผู้ใช้:
            <ul>
              <li>ระบุตัวตนผู้ใช้แทนที่จะเป็นยานพาหนะเฉพาะ</li>
              <li>การจับคู่ระหว่าง UUID ผู้ใช้และ VIN ยานพาหนะในระบบ Backend</li>
            </ul>
          </li>
        </ul>

        <h3>การผสานรวมระบบชำระเงิน</h3>
        <ul>
          <li>ผสานรวมกับ KBank (ไม่มีค่าธรรมเนียมการทำธุรกรรม)</li>
          <li>รองรับ PromptPay</li>
          <li>ระบบกระเป๋าเงิน:
            <ul>
              <li>การเติมเงินจัดการโดยผู้ดูแลระบบ</li>
              <li>ความสามารถในการคืนเงิน</li>
              <li>จำเป็นสำหรับผู้ใช้ทุกคน</li>
            </ul>
          </li>
          <li>รองรับระบบชำระเงินหลายระบบ</li>
          <li>มีตัวเลือกชาร์จฟรี</li>
        </ul>

        <h3>การผสานรวมระบบ</h3>
        <ul>
          <li>ต้องการการผสานรวมการยืนยันตัวตนกับ Honda</li>
          <li>การติดตามผู้ใช้ด้วย UUID</li>
        </ul>

        <h3>การสนับสนุนลูกค้า</h3>
        <ul>
          <li>eVolve ให้การสนับสนุนลูกค้าโดยตรง</li>
          <li>การเข้าถึงข้อมูลผู้ใช้สำหรับการตรวจสอบ/สนับสนุน</li>
          <li>พิจารณาการปฏิบัติตาม PDPA สำหรับข้อมูลส่วนบุคคล</li>
        </ul>

        <h3>คุณสมบัติเพิ่มเติม</h3>
        <ul>
          <li>มีสถิติการใช้งานสถานีพื้นฐาน</li>
          <li>ยังไม่มีระบบการให้คะแนน</li>
        </ul>

        <h3>ระยะเวลาการดำเนินการ</h3>
        <ul>
          <li>คาดว่าจะได้เอกสาร API ภายในวันที่ 29 มีนาคม</li>
          <li>มีสภาพแวดล้อมทดสอบ OCDB พร้อมใช้งาน</li>
          <li>ระยะเวลาดำเนินการ: ประมาณ 2 เดือน</li>
        </ul>
      `,
      tasks: [
        {
          id: "mock-uuid-thai-honda-ev-00",
          title: "Search about eVolve EV Charger and provide the questions for the client, and forward the questions to the team",
          details: "https://chatgpt.com/c/67dd9ce7-eeb4-8008-8430-836c8ebd9317",
          dates: {
            scheduledDate: "2025-03-24T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-thai-honda-ev-01",
          title: "Research eVolve EV Charger system",
          details: `<p>Research and document:</p>
            <ul>
              <li>Evolt ใช้ Virta เป็น OCPP/OCPI management software นะครับ</li>
              <li>ที่พี่เคยใช้ มันต้อง Top-Up ก่อน ถึงจะชาร์ทได้ ไม่รู้ว่าเปลี่ยนไปหรือยัง</li>
              <li>Payment gateway คือ 2C2P</li>
              <li>https://www.virta.global/ อันนี้คือ Virta</li>
              <li>EV charging software | Virta</li>
              <li>EV charging software for electric vehicle charging gives you a cost-effective channel to launch, operate, and grow an EV charging business.</li>
            </ul>`,
          dates: {
            scheduledDate: "2025-03-24T00:00:00+07:00"
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-thai-honda-ev-02", 
          title: "Prepare integration questions for client (eVolve บอกว่าจะส่งมอบ API ให้เราในวันที่ 29 มีนาคม)",
          details: `<p>Compile list of technical questions regarding:</p>
            <ul>
              <li>API access and credentials</li>
              <li>Expected data flows</li>
              <li>Integration requirements and constraints</li>
              <li>Testing environment availability</li>
            </ul>`,
          dates: {
            scheduledDate: "2025-03-29T00:00:00+07:00"
          },
          isCompleted: false
        },
      ],
      isCompleted: false
    },
    {
      id: "mock-uuid-thai-honda-infra",
      title: "Feature: Optimize Infrastructure/Architecture",
      details: `
        <h3>Information</h3>
        <ul>
          <li>MS Teams Message: <a href="https://teams.microsoft.com/l/message/19:32572782ba16429e9c2f4e7c42852c94@thread.v2/1742465728581?context=%7B%22contextType%22%3A%22chat%22%7D">Link</a></li>
          <li>MS Teams Message: <a href="https://teams.microsoft.com/l/message/19:3e31d6f59e01403da59941a5875c05b0@thread.v2/1742359186670?context=%7B%22contextType%22%3A%22chat%22%7D">Link</a></li>
          <li>Cost: <a href="https://apcdeloitte.sharepoint.com/:x:/r/sites/DevOpsTH/_layouts/15/Doc.aspx?sourcedoc=%7B7036F2B9-239A-43FE-A709-69F73089A4EF%7D&file=New%20Infra.xlsx&action=default&mobileredirect=true">Link</a></li>
          <li>Diagram: <a href="https://apcdeloitte-my.sharepoint.com/:p:/r/personal/aklammeng_deloitte_com/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7Be1f6db8d-cecc-41a5-89ef-a7e5294b9db1%7D&wdOrigin=TEAMS-MAGLEV.undefined_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1742909346056&web=1">Link</a></li>
          <li>Request subnet and IPs from P'Tan and team: อันนี้เป็น Sheet IP Address ที่เราต้องการใช้งานในอนาคตครับ <a href="https://apcdeloitte-my.sharepoint.com/:x:/r/personal/kboontrigratn_deloitte_com/Documents/MyHonda%20-%20IP%20Address.xlsx?d=wee0ad152f5a54d8597e9ac091e7d53f0&csf=1&web=1&e=DS3m2o">Link</a></li>
        </ul>
        <h3>การปรับจูนทรัพยากรเพื่อเพิ่มประสิทธิภาพหลังใช้งานจริง</h3>
        <ul>
          <li>ย้ายระบบจาก ECS ไปยัง EKS เพื่อ Scalable, Maintainable, Deployment ได้ง่ายขึ้น <a href="https://chatgpt.com/c/67e2147e-db78-8008-a329-7fa9d500b754">ChatGPT</a></li></li>
          <li>? ใช้เวลา 1-2 สัปดาห์ เป้าหมายก่อนวันที่ 9 เมษายน</li>
          <li>หลังจากระบบใหม่ถูกนำมาใช้งานจริงอย่างต่อเนื่องในช่วง 2 เดือนที่ผ่านมา พบว่าเรามีโอกาสในการปรับแต่งขนาดของ infrastructure ให้เหมาะสมยิ่งขึ้นกับพฤติกรรมการใช้งานจริง</li>
          <li>วางแผนค่อย ๆ ปรับลดการ provision ทรัพยากรในจุดที่ไม่จำเป็น โดยไม่กระทบกับเสถียรภาพหรือประสิทธิภาพของระบบ</li>
          <li>แนวทางนี้จะช่วยเรื่อง cost efficiency และทำให้ระบบ lean มากยิ่งขึ้น</li>
          <li>ครอบคลุมทั้งระบบ production และ non-production</li>
        </ul>
        <h3>Follow up</h3>
        <ul>
          <li>เราต้องการได้ certificate ภายในวันที่ 2 อยู่ไหมนะ หรือเราเปลี่ยนวิธีการแล้ว ถ้าเปลี่ยนเค้าต้องทำไรอะไรให้เรานะ
            <ul>
              <li>Prod อาจจะไม่ทันวันที่ 2 เพราะ IPs จาก Honda ยังไม่ได้มา, เรื่อง cert / dns สิ่งที่เราต้องการคือ contact person ครับว่าเราสามารถ request เพื่อ add DNS records ผ่านใครถึงจะทำให้เราได้เร็ว และไม่เสียเวลารอนาน เพราะเราจะสร้าง cert บน AWS จากนั้นให้เค้า add record เพื่อ verify cert ผ่าน DNS server ของเค้าครับ และอนาคตอาจจะต้องมี add/edit record(s) อีกหลายครั้ง เลยคิดว่าถ้าเป็นไปได้อยากได้ช่องทางที่เราสามารถติดต่อเค้าด้วยตัวเองได้ครับ</li>
            </ul>
          </li>
          <li>เราจะทำทันหรือทั้ง Dev กับ Pord ภายในวันที่ 2 หรือป่าว เพราะตอนนี้พี่เข้าใจว่าถ้าเค้ายังไม่ได้ใช้ IP มา เราก็ยัง ติดเรื่องเอา prod infra ขึ้นไม่ได้ถูกมะ แต่ dev ยังขึ้นได้ก่อน
            <ul>
              <li>Dev สามารถขึ้นได้ก่อนแต่อาจจะต้องหาทางทำ workaround เพื่อต่อไป on-prem ครับ ซึ่งตรงนี้อาจจะ take time เพิ่มประมาณนึงถ้าต้องทำ work around</li>
              <li>เราทำเรื่องขอ IP + ส่งให้ทีม IT ไปแล้ว ซึ่งเค้าจะ Feedback กลับมาให้เราถายในวันที่ 2 เลยคิดว่าเราไม่ทันวันที่ 2</li>
              <li>รวมถึง Dev เอง ก็ไม่ได้ด้วยเพราะรอ IP อยู่เช่นกัน</li>
              <li>Dev มีวิธีทำ Proxy/Forward ไปก่อนได้ แต่ทีมคุยกันแล้วว่าไม่คุ้มที่จะทำ เพื่อใช้แค่วันที่ 28-2 ครับ (สุดท้ายได้ IP มา เราก้ต้องมาแก้ตรงนี้อีกที เลยงั้นขอรอ IP ดีกว่า)</li>[x]
            </ul>
          </li>
          <li>เรื่อง site to site VPN ตัวแดงๆ เรานัดเค้ามาทำพร้อมกันได้ทั้ง prod และ dev เลยไหม หรือต้องแยกกัน ถ้าพร้อมกันได้จะเอาวันไหน เพระาตอนนี้ใส่วันที่ 13 May เราจะทำทันใช่ไหม
            <ul>
              <li>20 May พร้อมกัน dev/prod ได้ครับ</li>
            </ul>
          </li>
        </ul>
      `,  
      tasks: [
        {
          id: "mock-uuid-thai-honda-infra-task-1",
          title: "Request accounts and laptops",
          details: `<ul>
            <li>Confirm availability of 5 laptops and accounts</li>
            <li>Currently K.Punn needs to check with the IT team and then confirm with the us</li>
          </ul>`,
          dates: {
            scheduledDate: "2025-03-26T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-thai-honda-infra-task-2", 
          title: "Private IP range /23 (2 subnets)",
          details: `<ul>
            <li>Information from ChatGPT: <a href="https://chatgpt.com/c/6808919d-cc00-8008-8943-c62e5fd2bd47">Link</a></li>
            <li>Request subnet and IPs from P'Tan and team: อันนี้เป็น Sheet IP Address ที่เราต้องการใช้งานในอนาคตครับ <a href="https://apcdeloitte-my.sharepoint.com/:x:/r/personal/kboontrigratn_deloitte_com/Documents/MyHonda%20-%20IP%20Address.xlsx?d=wee0ad152f5a54d8597e9ac091e7d53f0&csf=1&web=1&e=DS3m2o">Link</a></li>
          </ul>`,
          dates: {
            scheduledDate: "2025-03-26T00:00:00+07:00"
          },
          isCompleted: false
        },
      ],
      subProjects: [],
      isCompleted: false
    },
    {
      id: "mock-uuid-thai-honda-analytics-and-event-tracking",
      title: "Feature: Analytics and Event Tracking",
      details: `  
      <h3>Information</h3>
      <ul>
        <li>Event Tracking: <a href="https://apcdeloitte.sharepoint.com/:x:/r/sites/ThaiHondaCXPJT/_layouts/15/Doc.aspx?sourcedoc=%7BB558A236-7D57-44DD-8C53-3F218AB913C0%7D&file=Da_Vinci_CDP_Event_Tagging_Plan_v0.1.xlsx&action=default&mobileredirect=true">Link</a></li>
        <li>Taxonomy: <a href="https://apcdeloitte.sharepoint.com/:x:/r/sites/ThaiHondaCXPJT/_layouts/15/Doc.aspx?sourcedoc=%7B311108BF-5246-47B1-B8C0-3D0E6696D5CB%7D&file=MyHondaMoto%20Firebase%20Analytics%20Taxonomy.xlsx&action=default&mobileredirect=true&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1745806872411&web=1">Link</a></li>
        <li>เอกสารคุย อังคาร เรื่อง GA4 analytics: <a href="https://apcdeloitte.sharepoint.com/:p:/r/sites/ThaiHondaCXPJT/_layouts/15/Doc.aspx?sourcedoc=%7BE6E22792-2C4A-4A1A-9F5D-1EF6619F2746%7D&file=20250224_Action%20Plan%20for%20App_Marketing%20Operation_HI.pptx&action=edit&mobileredirect=true">Link</a></li>
      </ul>`,
      dates: {
        scheduledDate: "2025-04-28T00:00:00+07:00"
      },
      isCompleted: false,
      tasks: [
        {
          id: "mock-uuid-thai-honda-analytics-task-1",
          title: "Planning taxonomy for features on step 1",
          details: "",
          dates: {
            scheduledDate: "2025-04-28T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-thai-honda-analytics-task-2", 
          title: "Moving to connect to new Google Analytic account (Mid of May)",
          details: "",
          dates: {
            scheduledDate: "2025-04-28T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-thai-honda-analytics-task-3",
          title: "Aligned plan with CX to make sure that tracking data will support marketing cloud",
          details: "",
          dates: {
            scheduledDate: "2025-04-28T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-thai-honda-feature-direct-booking",
      title: "Feature: Direct Booking",
      details: `<ul>
        <li>Estimation: <a href="https://apcdeloitte-my.sharepoint.com/:x:/g/personal/trungruangknokkul_deloitte_com/EY8xhZiBj_VOv3nBwLJHZrgBtXupl4KJ6Dx5E3HmDDlk2A?wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1745512710525&web=1&ovuser=4617a0ae-1a92-4482-a833-7bad535b3292%2Ckao.appsynth%40outlook.com&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNTA0MDMxOTExMSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D">Link</a></li>
        <li>Open Question: <a href="https://apcdeloitte-my.sharepoint.com/:x:/g/personal/trungruangknokkul_deloitte_com/EY8xhZiBj_VOv3nBwLJHZrgBtXupl4KJ6Dx5E3HmDDlk2A?wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1745512710525&web=1&ovuser=4617a0ae-1a92-4482-a833-7bad535b3292%2Ckao.appsynth%40outlook.com&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNTA0MDMxOTExMSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D">Link</a></li>
        <li>Slide to discuss with client: <a href="https://apcdeloitte.sharepoint.com/:p:/r/sites/ThaiHondaCXPJT/_layouts/15/Doc.aspx?sourcedoc=%7B79566714-4C6B-4E9F-86BF-61E7C2C9FAF3%7D&file=250428_Da%20Vinci%20STEP2_Weekly%20Status%20Report.pptx&action=edit&mobileredirect=true">Link</a></li>
      </ul>`,
      dates: {
        scheduledDate: "2025-04-28T00:00:00+07:00"
      },
      isCompleted: false
    }

  ]
}

export const pushNexProject: Project = {
  id: "mock-uuid-temp",
  title: "PushNex",
  details: "A Notification Service for Push Notification",
  tasks: [
    {
      id: "mock-uuid-temp-task-1",
      title: "ย้าย Confluence และ Draw.io ไปใน Personal Google Drive",
      details: "",
      dates: {
        scheduledDate: "2025-03-30T00:00:00+07:00"
      },
      isCompleted: false
    }
  ],
  subProjects: []
}

export const generatlDeloitte: Project = {
  id: "mock-uuid-general-deloitte",
  title: "General: Deloitte",
  details: `
    <ul>
      <li>Handbook for New Joiner (Reimbursement, Timesheet, etc.): <a href="https://apcdeloitte.sharepoint.com/sites/Ex-Appsynth/_layouts/15/Doc.aspx?sourcedoc={c8f35c28-412c-4cc1-90c9-2ebb7bde238a}&action=view&wd=target%28For%20New%20Joiner.one%7C2c6c9713-04b6-4602-95eb-769ab4b1a33b%2FFAQ%7C283fe18f-940d-486b-92e5-d3baf4280835%2F%29&wdorigin=NavigationUrl">Handbook for New Joiner (Reimbursement, Timesheet, etc.)</a></li>
      <li>T&T Portal (Technology & Transformation): <a href="https://seaportal.deloitteresources.com/sites/TT/SitePages/Home.aspx">https://seaportal.deloitteresources.com/sites/TT/SitePages/Home.aspx</a></li>
      <li>Learning Hours (Cornerstone Saba: Home): <a href="https://sabacloud.deloitteresources.com/Saba/Web_spf/E103PRD0001/app/dashboard">https://sabacloud.deloitteresources.com/Saba/Web_spf/E103PRD0001/app/dashboard</a></li>
      <li>Request Performance snapshot (Project: 4) (Other tasks: 2): <a href="https://rpm.deloitteresources.com/web/dashboard">https://rpm.deloitteresources.com/web/dashboard</a></li>
    </ul>
  `,
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-deloitte-elearning",
      title: "eLearning",
      details: "",
      tasks: [
        
      ]
    },
    {
      id: "mock-uuid-deloitte-training",
      title: "Training Registration",
      details: "",
      tasks: [
        {
          id: "mock-uuid-deloitte-training-01",
          title: "Register for Deloitte Onboarding Training",
          details: "Complete registration for mandatory new hire onboarding training sessions",
          dates: {
            scheduledDate: "2025-03-15T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-deloitte-training-02", 
          title: "Register for Technical Skills Training",
          details: "Sign up for relevant technical training programs offered by Deloitte University",
          dates: {
            scheduledDate: "2025-04-01T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-deloitte-training-03",
          title: "Register for Professional Development Courses",
          details: "Enroll in soft skills and professional development training sessions",
          dates: {
            scheduledDate: "2025-04-15T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-219-1",
      title: "Loan Banking Document",
      details: "<ul><li><a href='https://chatgpt.com/c/67baea02-fdec-8008-b4e5-fdca894510b5'>ChatGPT: Request for Employment Docs</a></li></ul>",
      tasks: [
        {
          id: "mock-uuid-219-1-1",
          title: "Request for Employment Docs",
          details: "",
          dates: {
            scheduledDate: "2025-03-03T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-Load-2-1-1",
          title: "ติดต่อธนาคารกสิกรไทย (LINE) สำหรับ THE MUVE",
          details: "",
          dates: {
            scheduledDate: "2025-03-03T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-load-2-1-2",
          title: "ติดต่อ juzmatch.com/th, reference Bloom",
          details: "",
          dates: {
            scheduledDate: "2025-03-04T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const workTeamManagement: Project = {
  id: "mock-uuid-219",
  title: "Team Management",
  details: "",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-220",
      title: "Ize",
      details: "",
      tasks: [
        {
          id: "mock-uuid-221",
          title: "Feedback ความเป็น Ownership อย่าให้ใครมาชี้นำเราได้ + เรื่องความมั่นใจ เช่น ตอนเสนอ Solution ตอนอยู่ AO ไม่ควรคล้อยตามใคร",
          details: "Feedback ความเป็น Ownership อย่าให้ใครมาชี้นำเราได้ + เรื่องความมั่นใจ เช่น ตอนเสนอ Solution ตอนอยู่ AO ไม่ควรคล้อยตามใคร",
          dates: {
            scheduledDate: "2025-01-01",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const physicalTherapy: Project = {
  id: "mock-uuid-222", 
  title: "Physical Recovery & Rehabilitation: การฟื้นฟูและซ่อมแซมร่างกาย",
  details: "การดูแลและฟื้นฟูร่างกายให้กลับมาแข็งแรงและทำงานได้เป็นปกติ",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-223-1-dental-checkup",
      title: "การตรวจสุขภาพช่องปากประจำปี",
      details: "การดูแลสุขภาพช่องปากและฟันเพื่อป้องกันปัญหาในระยะยาว",
      tasks: [
        {
          id: "mock-uuid-223-1-1-dental-cleaning",
          title: "ขูดหินปูนและทำความสะอาดฟัน",
          details: "การขูดหินปูนเพื่อป้องกันปัญหาเหงือกอักเสบและโรคปริทันต์",
          dates: {
            scheduledDate: "2025-04-22T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-223-1-2-cavity-check",
          title: "ตรวจและอุดฟัน",
          details: "ตรวจหาฟันผุและทำการอุดฟันเพื่อป้องกันการลุกลามของโรค",
          dates: {
            scheduledDate: "2025-03-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-223-1-3-teeth-whitening",
          title: "ฟอกสีฟัน",
          details: "การฟอกสีฟันเพื่อกำจัดคราบเหลืองและเพิ่มความสวยงาม",
          dates: {
            scheduledDate: "2025-06-22T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-223-1-4-xray",
          title: "เอ็กซเรย์ฟัน",
          details: "ตรวจสอบสภาพรากฟันและโครงสร้างกระดูกขากรรไกร",
          dates: {
            scheduledDate: "2025-03-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-223-1-5-gum-health",
          title: "ตรวจสุขภาพเหงือก",
          details: "ประเมินสุขภาพเหงือกและการรักษาในกรณีที่พบปัญหา",
          dates: {
            scheduledDate: "2025-03-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-223-1-6-retainer-check",
          title: "ตรวจสอบรีเทนเนอร์",
          details: "ตรวจสอบสภาพและการใส่รีเทนเนอร์ เพื่อรักษาตำแหน่งฟันหลังการจัดฟัน",
          dates: {
            scheduledDate: "2025-03-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-223-2-annual-checkup",
      title: "การตรวจสุขภาพประจำปี",
      details: "ตรวจสุขภาพร่างกายทั่วไปและตรวจคัดกรองโรคที่สำคัญ",
      tasks: [
        {
          id: "mock-uuid-223-2-1-general-checkup",
          title: "ตรวจร่างกายทั่วไป",
          details: "ตรวจวัดความดัน น้ำหนัก ส่วนสูง และสัญญาณชีพพื้นฐาน",
          dates: {
            scheduledDate: "2025-04-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-223-2-2-blood-test",
          title: "ตรวจเลือด",
          details: "ตรวจระดับน้ำตาล ไขมัน การทำงานของตับและไต เอนไซม์ตับ (AST, ALT, GGT) และค่าการอักเสบ",
          dates: {
            scheduledDate: "2025-04-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-223-2-3-xray",
          title: "เอ็กซเรย์ปอดและทรวงอก",
          details: "ตรวจคัดกรองความผิดปกติของปอด ทรวงอก และผลกระทบจากการสูบบุหรี่ และฝุ่น",
          dates: {
            scheduledDate: "2025-04-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-223-2-4-heart",
          title: "ตรวจคลื่นไฟฟ้าหัวใจและระบบหลอดเลือด",
          details: "ตรวจการทำงานของหัวใจด้วย EKG และประเมินสุขภาพหลอดเลือด",
          dates: {
            scheduledDate: "2025-04-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-223-2-5-liver-scan",
          title: "อัลตราซาวด์ตับ",
          details: "ตรวจประเมินสภาพตับและการสะสมของไขมันในตับจากการดื่มแอลกอฮอล์",
          dates: {
            scheduledDate: "2025-04-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-223-2-6-followup",
          title: "รับผลตรวจและปรึกษาแพทย์",
          details: "พบแพทย์เพื่อรับฟังผลการตรวจ คำแนะนำในการดูแลสุขภาพ และแผนการลดความเสี่ยงจากการดื่มและสูบบุหรี่",
          dates: {
            scheduledDate: "2025-04-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-223-1-7-chiropractic",
      title: "Chiropractic Treatment: การจัดกระดูก",
      details: "การรักษาและปรับสมดุลกระดูกสันหลังเพื่อบรรเทาอาการปวดและเพิ่มประสิทธิภาพการทำงานของระบบประสาท",
      tasks: [
        {
          id: "mock-uuid-223-1-7-1",
          title: "ตรวจประเมินสภาพกระดูกสันหลัง",
          details: "ตรวจวินิจฉัยความผิดปกติของกระดูกสันหลังและระบบกล้ามเนื้อ",
          dates: {
            scheduledDate: "2025-05-20T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-223-1-7-2", 
          title: "จัดกระดูกสันหลังส่วนคอ",
          details: "ปรับสมดุลกระดูกคอเพื่อลดอาการปวดคอและไหล่",
          isCompleted: false
        },
        {
          id: "mock-uuid-223-1-7-3",
          title: "จัดกระดูกสันหลังส่วนหลัง",
          details: "ปรับสมดุลกระดูกสันหลังส่วนกลางและล่างเพื่อแก้ไขท่าทางและลดอาการปวด",
          isCompleted: false
        },
        {
          id: "mock-uuid-223-1-7-4",
          title: "ติดตามผลและปรับแผนการรักษา",
          details: "ประเมินผลการรักษาและปรับแผนการดูแลตามความเหมาะสม",
          dates: {
            scheduledDate: "2025-04-10T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-physical-therapy-1",
      parent_id: "mock-uuid-222",
      title: "Physical Therapy & Muscle Rehabilitation: กายภาพบำบัดและการฟื้นฟูกล้ามเนื้อ",
      details: "การทำกายภาพบำบัดเพื่อฟื้นฟูความแข็งแรงของกล้ามเนื้อและการเคลื่อนไหว",
      tasks: [
        {
          id: "mock-uuid-physical-therapy-1-01",
          parent_id: "mock-uuid-physical-therapy-1",
          title: "ประเมินอาการและวางแผนการรักษา",
          details: "พบนักกายภาพบำบัดเพื่อประเมินอาการและวางแผนการรักษาที่เหมาะสม",
          dates: {
            scheduledDate: "2025-01-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-physical-therapy-1-02", 
          parent_id: "mock-uuid-physical-therapy-1",
          title: "ทำกายภาพบำบัดตามแผน",
          details: "เข้ารับการทำกายภาพบำบัดตามแผนการรักษาที่วางไว้อย่างสม่ำเสมอ",
          dates: {
            scheduledDate: "2025-02-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-physical-therapy-1-03",
          parent_id: "mock-uuid-physical-therapy-1", 
          title: "ฝึกท่าบริหารที่บ้าน",
          details: "ทำท่าบริหารและการยืดกล้ามเนื้อที่ได้รับคำแนะนำจากนักกายภาพบำบัดที่บ้านอย่างต่อเนื่อง",
          dates: {
            scheduledDate: "2025-02-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-physical-therapy-1-04",
          parent_id: "mock-uuid-physical-therapy-1",
          title: "ติดตามผลการรักษา",
          details: "พบนักกายภาพบำบัดเพื่อประเมินความก้าวหน้าและปรับแผนการรักษาตามความเหมาะสม",
          dates: {
            scheduledDate: "2025-03-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-physical-therapy-1-05",
          parent_id: "mock-uuid-physical-therapy-1",
          title: "ป้องกันการบาดเจ็บซ้ำ",
          details: "เรียนรู้และปฏิบัติตามคำแนะนำในการป้องกันการบาดเจ็บซ้ำ รวมถึงการปรับท่าทางในชีวิตประจำวัน",
          dates: {
            scheduledDate: "2025-03-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-lasik",
      parent_id: "mock-uuid-222",
      title: "LASIK Surgery: การผ่าตัดเลเซอร์แก้ไขสายตา เลสิก",
      details: "การผ่าตัดแก้ไขสายตาด้วยเลเซอร์เพื่อปรับปรุงคุณภาพการมองเห็นและคุณภาพชีวิต",
      tasks: [
        {
          id: "mock-uuid-lasik-01",
          parent_id: "mock-uuid-lasik", 
          title: "ศึกษาข้อมูลและเปรียบเทียบสถานพยาบาล",
          details: "รวบรวมข้อมูลเกี่ยวกับการทำ LASIK จากแหล่งที่น่าเชื่อถือ และเปรียบเทียบสถานพยาบาลต่างๆ",
          dates: {
            scheduledDate: "2025-03-01T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-lasik-02",
          parent_id: "mock-uuid-lasik",
          title: "ตรวจประเมินสภาพสายตาเบื้องต้น",
          details: "เข้ารับการตรวจประเมินความเหมาะสมในการทำ LASIK และรับคำปรึกษาจากแพทย์",
          dates: {
            scheduledDate: "2025-03-15T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-lasik-03",
          parent_id: "mock-uuid-lasik",
          title: "วางแผนการเงินและการลางาน",
          details: "จัดเตรียมค่าใช้จ่ายและวางแผนการลาพักฟื้น",
          dates: {
            scheduledDate: "2025-04-01T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-lasik-04",
          parent_id: "mock-uuid-lasik",
          title: "ทำการผ่าตัด LASIK",
          details: "เข้ารับการผ่าตัดตามแผนที่วางไว้",
          dates: {
            scheduledDate: "2025-04-15T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-lasik-05",
          parent_id: "mock-uuid-lasik",
          title: "การดูแลและติดตามผลหลังผ่าตัด",
          details: "ปฏิบัติตามคำแนะนำของแพทย์ในการดูแลดวงตาและเข้ารับการตรวจติดตามผลตามนัด",
          dates: {
            scheduledDate: "2025-05-15T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-biohack",
      title: "Physical & Biological Optimization: การเพิ่มประสิทธิภาพทางร่างกายและชีวภาพ",
      details: "การปรับปรุงและเพิ่มประสิทธิภาพร่างกายผ่านวิธีการทางวิทยาศาสตร์และการแพทย์สมัยใหม่ เพื่อชะลอวัยและเพิ่มคุณภาพชีวิต",
      dates: {
        scheduledDate: "2025-01-01",
        dueDate: "2025-12-31"
      },
      tasks: [
        {
          id: "mock-uuid-biohack-01",
          parent_id: "mock-uuid-biohack",
          title: "การตรวจวิเคราะห์ทางพันธุกรรม",
          details: "ทำการตรวจ DNA เพื่อวิเคราะห์ความเสี่ยงทางสุขภาพและวางแผนการดูแลสุขภาพเฉพาะบุคคล",
          dates: {
            scheduledDate: "2025-02-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-biohack-02",
          parent_id: "mock-uuid-biohack",
          title: "การปรับสมดุลฮอร์โมน",
          details: "ตรวจวัดระดับฮอร์โมนและปรับสมดุลผ่านการรักษาทางการแพทย์และการปรับเปลี่ยนไลฟ์สไตล์",
          dates: {
            scheduledDate: "2025-03-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-biohack-03",
          parent_id: "mock-uuid-biohack",
          title: "การบำบัดด้วยออกซิเจนความดันสูง",
          details: "เข้ารับการบำบัดด้วย Hyperbaric Oxygen Therapy เพื่อฟื้นฟูเซลล์และเพิ่มการไหลเวียนเลือด",
          dates: {
            scheduledDate: "2025-04-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-biohack-04",
          parent_id: "mock-uuid-biohack",
          title: "การปรับโภชนาการแบบ Precision Nutrition",
          details: "วางแผนโภชนาการเฉพาะบุคคลตามผลการตรวจทางพันธุกรรมและการเผาผลาญ",
          dates: {
            scheduledDate: "2025-02-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-biohack-05",
          parent_id: "mock-uuid-biohack",
          title: "การฝึก Neuroplasticity",
          details: "ฝึกสมองผ่านเทคนิค Neurofeedback และการฝึกสมาธิขั้นสูงเพื่อเพิ่มประสิทธิภาพการทำงานของสมอง",
          dates: {
            scheduledDate: "2025-05-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-biohack-06",
          parent_id: "mock-uuid-biohack",
          title: "การบำบัดด้วยแสง Red Light Therapy",
          details: "ใช้การบำบัดด้วยแสงเพื่อกระตุ้นการทำงานของไมโตคอนเดรียและการฟื้นฟูเซลล์",
          dates: {
            scheduledDate: "2025-06-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-biohack-07",
          parent_id: "mock-uuid-biohack",
          title: "การจัดการความเครียดขั้นสูง",
          details: "ใช้เทคโนโลยี Biofeedback และการฝึก Heart Rate Variability เพื่อควบคุมการตอบสนองต่อความเครียด",
          dates: {
            scheduledDate: "2025-03-15T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-ice-bath",
      parent_id: "mock-uuid-1",
      title: "Ice Bath Training & Cold Exposure: การฝึกแช่น้ำแข็งและการสัมผัสความเย็น",
      details: "การฝึกฝนร่างกายให้คุ้นเคยกับความเย็นและการแช่น้ำแข็งเพื่อเสริมสร้างภูมิคุ้มกันและความแข็งแรงทั้งร่างกายและจิตใจ",
      tasks: [
        {
          id: "mock-uuid-ice-bath-01",
          parent_id: "mock-uuid-ice-bath",
          title: "เริ่มต้นด้วยการอาบน้ำเย็น",
          details: "ฝึกการอาบน้ำเย็นเป็นเวลา 30 วินาทีในตอนเช้า เพิ่มเวลาขึ้นทีละน้อย",
          dates: {
            scheduledDate: "2025-01-15T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-ice-bath-02",
          parent_id: "mock-uuid-ice-bath",
          title: "ทดลอง Ice Bath ครั้งแรก",
          details: "แช่น้ำแข็งที่อุณหภูมิ 10-15 องศาเป็นเวลา 1-2 นาที ภายใต้การดูแลของผู้เชี่ยวชาญ",
          dates: {
            scheduledDate: "2025-02-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-ice-bath-03",
          parent_id: "mock-uuid-ice-bath",
          title: "ฝึกการหายใจ Wim Hof",
          details: "เรียนรู้และฝึกเทคนิคการหายใจแบบ Wim Hof เพื่อควบคุมการตอบสนองต่อความเย็น",
          dates: {
            scheduledDate: "2025-01-20T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-ice-bath-04",
          parent_id: "mock-uuid-ice-bath",
          title: "เพิ่มระยะเวลาการแช่น้ำแข็ง",
          details: "ค่อยๆ เพิ่มเวลาการแช่น้ำแข็งเป็น 3-5 นาที พร้อมบันทึกการตอบสนองของร่างกาย",
          dates: {
            scheduledDate: "2025-03-01T00:00:00+07:00"
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-ice-bath-05",
          parent_id: "mock-uuid-ice-bath",
          title: "ติดตามผลและปรับแผน",
          details: "บันทึกผลลัพธ์ที่ได้ เช่น การฟื้นตัวของกล้ามเนื้อ ระดับพลังงาน และคุณภาพการนอน",
          dates: {
            scheduledDate: "2025-12-31T00:00:00+07:00"
          },
          isCompleted: false
        }
      ]
    },
  ]
}

export const petTherapy: Project = {
  id: "mock-uuid-224",
  title: "Pet Therapy",
  details: "",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-224-1-pet-health-checkup",
      title: "Pet Health Checkup (การตรวจสุขภาพสัตว์เลี้ยงระจำปี)",
      details: "",
      tasks: [
        {
          id: "mock-uuid-224-1-1-pet-health-checkup-091",
          title: "นัดหมอหมู ตรวจสุขภาพสัตว์เลี้ยง กลางปี (ก่อนไปออสเตรีย) + สอบถามขอส่วนลดสำหรับสัตว์เลี้ยง",
          details: "",
          dates: {
            scheduledDate: "2025-03-09T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const cleanAndHealthyLivingMaintenance: Project = {
  id: "mock-uuid-225",
  title: "การบำรุงรักษาเพื่อความสะอาดและการอยู่อาศัยที่ดีต่อสุขภาพ",
  details: "",
  tasks: [],
  subProjects: [
    {
      id: "mock-uuid-226",
      title: "Home Cleaning Services: บริการทำความสะอาดบ้านทั่วไป",
      details: "",
      tasks: [
        {
          id: "mock-uuid-226-1-1-home-cleaning-services-01",
          title: "แม่บ้านทำความสะอาดบ้าน",
          details: "",
          dates: {
            scheduledDate: "2025-02-18T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-227",
      title: "Deep Cleaning: การทำความสะอาดแบบล้ำลึก (ทำความสะอาดโซฟา)",
      details: "",
      tasks: [
        {
          id: "mock-uuid-228-11111",
          title: "ติดตามการทำความสะอาดโซฟาของ De Hygienique",
          details: "",
          dates: {
            scheduledDate: "2025-01-27T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-228-11111",
          title: "ทำความสะอาดโซฟาของ De Hygienique",
          details: "",
          dates: {
            scheduledDate: "2025-01-30T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-228-11111-deep-cleaning-01",
          title: "ติดต่อทำความสะอาดโซฟาของ De Hygienique",
          details: "",
          dates: {
            scheduledDate: "2025-03-01T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-228",
      title: "HVAC Maintenance: การบำรุงรักษาระบบปรับอากาศและการระบายอากาศ (เปลี่ยนไส้กรองเครื่องฟอกอากาศและล้างแอร์)",
      details: "",
      tasks: [
        {
          id: "mock-uuid-228-HVAC-01",
          title: "ล้างแอร์ - ช่างกิตติธัช",
          details: "",
          dates: {
            scheduledDate: "2025-01-28T00:00:00+07:00",
          },
          isCompleted: true
        },
        {
          id: "mock-uuid-228-HVAC-02",
          title: "ติดต่อช่างล้างแอร์ - ช่างกิตติธัช",
          details: "",
          dates: {
            scheduledDate: "2025-06-28T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-228-HVAC-03",
          title: "เปลี่ยนไส้กรองเครื่องฟอกอากาศ",
          details: "2S, 4Lite, Dyson",
          dates: {
            scheduledDate: "2025-02-22T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    },
    {
      id: "mock-uuid-229",
      title: "Allergen Removal Services: บริการกำจัดสารก่อภูมิแพ้ เช่น ไรฝุ่นในที่นอน",
      details: "",
      tasks: []
    },
    {
      id: "mock-uuid-230",
      title: "Face Masks: ซื้อหน้ากากอนามัย",
      details: "",
      tasks: [
        {
          id: "mock-uuid-230-01",
          title: "ซื้อหน้ากากอนามัย 3M N95",
          details: "สำหรับใส่ในที่แออัดหรือโรงพยาบาล",
          dates: {
            scheduledDate: "2025-02-28T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-230-02",
          title: "ซื้อหน้ากากกัน PM2.5",
          details: "สำหรับใส่ในวันที่ค่าฝุ่นสูง",
          dates: {
            scheduledDate: "2025-02-28T00:00:00+07:00",
          },
          isCompleted: false
        },
        {
          id: "mock-uuid-230-03", 
          title: "ซื้อหน้ากากอนามัยทางการแพทย์",
          details: "สำหรับใช้ในชีวิตประจำวัน",
          dates: {
            scheduledDate: "2025-02-28T00:00:00+07:00",
          },
          isCompleted: false
        }
      ]
    }
  ]
}

export const restaurantBusinessLearning = {
  id: "mock-uuid-restaurant-business",
  title: "เรียนรู้ธุรกิจร้านอาหาร",
  details: `
    <p>การทำธุรกิจร้านอาหารให้ประสบความสำเร็จในกรุงเทพฯ ต้องอาศัยทั้ง "ความคิดสร้างสรรค์ + กลยุทธ์ที่ดี + การบริหารจัดการที่แข็งแรง" เพราะการแข่งขันสูงมาก และผู้บริโภคก็มีทางเลือกเยอะ</p>

    <h3>องค์ประกอบสำคัญสู่ความสำเร็จ</h3>
    <ul>
      <li>✅ 1. รู้จักกลุ่มเป้าหมายของตัวเองชัดเจน
        <ul>
          <li>เข้าใจว่าใครคือ "ลูกค้า" ของร้านคุณ (วัยรุ่น? คนทำงาน? นักท่องเที่ยว?)</li>
          <li>ศึกษาพฤติกรรมผู้บริโภค เช่น เวลาที่นิยมมาทาน เมนูโปรด งบประมาณเฉลี่ย</li>
        </ul>
      </li>
      <li>✅ 2. โลเคชันคือหัวใจ
        <ul>
          <li>ทำเลที่ดี = มีคนเดินผ่านเยอะ + เข้าออกสะดวก + มีที่จอดรถ</li>
          <li>ทำเลที่ตอบโจทย์ เช่น ใกล้มหาวิทยาลัย, ออฟฟิศ, ย่านท่องเที่ยว</li>
        </ul>
      </li>
      <li>✅ 3. เมนูต้องมีเอกลักษณ์
        <ul>
          <li>มีจุดขาย เช่น เมนูซิกเนเจอร์, รสชาติที่แตกต่าง, การตกแต่งจาน</li>
          <li>คิดราคาที่คุ้มค่าเมื่อเทียบกับรสชาติและปริมาณ</li>
        </ul>
      </li>
      <li>✅ 4. การตลาดออนไลน์ต้องมา
        <ul>
          <li>ใช้ Facebook, Instagram, LINE OA, TikTok อย่างจริงจัง</li>
          <li>ลงคอนเทนต์สม่ำเสมอ และใช้ Influencer ช่วยโปรโมต</li>
        </ul>
      </li>
      <li>✅ 5. บริการดี มีชัยไปกว่าครึ่ง
        <ul>
          <li>พนักงานยิ้มแย้ม ใส่ใจ และแก้ปัญหาเฉพาะหน้าได้</li>
          <li>บรรยากาศร้าน: สะอาด เป็นมิตร ถ่ายรูปได้</li>
        </ul>
      </li>
      <li>✅ 6. ควบคุมต้นทุน + ระบบหลังบ้าน
        <ul>
          <li>คุมต้นทุนวัตถุดิบและวางระบบสต๊อก</li>
          <li>ใช้ระบบ POS เพื่อเก็บข้อมูลยอดขาย</li>
        </ul>
      </li>
      <li>✅ 7. พร้อมปรับตัวอยู่เสมอ
        <ul>
          <li>ปรับเมนูตามฤดูกาล/กระแส</li>
          <li>ทดลองจัดโปรโมชั่นและฟังเสียงลูกค้า</li>
        </ul>
      </li>
    </ul>

    <h3>หัวใจสำคัญของร้านอาหาร</h3>
    <ol>
      <li>รสชาติอาหาร
        <ul>
          <li>อร่อย สะอาด และมีเอกลักษณ์</li>
          <li>คงคุณภาพได้เสมอ</li>
        </ul>
      </li>
      <li>บริการ
        <ul>
          <li>พนักงานต้องมีใจบริการ</li>
          <li>ความเร็วและความแม่นยำในการเสิร์ฟ</li>
        </ul>
      </li>
      <li>บรรยากาศ
        <ul>
          <li>ตกแต่งให้เข้ากับคอนเซปต์ร้าน</li>
          <li>สะอาด น่านั่ง มีพื้นที่สบาย ๆ</li>
        </ul>
      </li>
      <li>ความใส่ใจในรายละเอียด
        <ul>
          <li>ใส่ใจทุกองค์ประกอบในร้าน</li>
          <li>อัปเดตเทรนด์ตลอดเวลา</li>
        </ul>
      </li>
      <li>ความคุ้มค่า
        <ul>
          <li>ลูกค้ารู้สึกว่า "จ่ายแล้วคุ้ม"</li>
          <li>คุณภาพและปริมาณต้องสมดุล</li>
        </ul>
      </li>
    </ol>
  `,
  tasks: [
    {
      id: "mock-uuid-restaurant-business-01",
      title: "ศึกษาการบริหารจัดการร้านอาหาร",
      details: `
        <h3>หัวข้อที่ต้องศึกษา</h3>
        <ul>
          <li>การวางแผนเมนูและการตั้งราคา</li>
          <li>การควบคุมต้นทุนวัตถุดิบ</li>
          <li>การจัดการพนักงาน</li>
          <li>ระบบการจัดการสต็อก</li>
          <li>มาตรฐานความสะอาดและสุขอนามัย</li>
        </ul>
      `,
      isCompleted: false
    },
    {
      id: "mock-uuid-restaurant-business-02", 
      title: "เข้าอบรมหลักสูตรการทำอาหาร",
      details: "เรียนรู้เทคนิคการทำอาหารและการจัดจาน",
      isCompleted: false
    },
    {
      id: "mock-uuid-restaurant-business-03",
      title: "ศึกษากฎหมายและใบอนุญาตที่เกี่ยวข้อง",
      details: `
        <ul>
          <li>ใบอนุญาตประกอบกิจการร้านอาหาร</li>
          <li>ใบรับรองด้านสุขอนามัย</li>
          <li>การจดทะเบียนธุรกิจ</li>
          <li>การจัดการด้านภาษี</li>
        </ul>
      `,
      isCompleted: false
    },
    {
      id: "mock-uuid-restaurant-business-04",
      title: "เรียนรู้งงานในร้านอาหารที่ประสบความสำเร็จ",
      details: "เรียนรู้การทำงานจริงและสังเกตการบริหารจัดการ",
      isCompleted: false
    },
    {
      id: "mock-uuid-restaurant-business-05",
      title: "จัดทำแผนธุรกิจร้านอาหาร",
      details: `
        <h3>องค์ประกอบของแผนธุรกิจ</h3>
        <ul>
          <li>การวิเคราะห์ตลาดและคู่แข่ง</li>
          <li>แผนการตลาดและการประชาสัมพันธ์</li>
          <li>แผนการเงินและการลงทุน</li>
          <li>การวางแผนด้านทำเลที่ตั้ง</li>
          <li>กลยุทธ์การดำเนินธุรกิจ</li>
        </ul>
      `,
      isCompleted: false
    }
  ],
  isCompleted: false
}


export const areas: Project[] = [
  {
    id: "mock-uuid-230",
    title: "การมีสุขภาพที่ดี",
    subProjects: [
      workout,
      running,
      healthySleepHabits,
      sustainableNutrition,
      cleanAndHealthyLivingMaintenance,
      facialRejuvenationTreatments,
      physicalTherapy,
    ]
  },
  {
    id: "mock-uuid-231",
    title: "ความสัมพันธ์",
    subProjects: [
      relationshipEventsData,
      relationshipGirlfriendData,
      relationshipFriendData,
      relationshipFamilyData,
      relationshipWorkData,
      relationshipGeneralData,
      petTherapy
    ]
  },
  {
    id: "mock-uuid-232",
    title: "เรื่องส่วนตัว",
    subProjects: [
      selfImprovementData,
      personalBrandingData,
      technicalSelfLearningProject,
      financialFreedomPlanningProject,
      travellingData,
      weddingPlanningData,
      houseRenovationTopic,
      hobbyAndInterestData,
      general,
    ]
  },
  {
    id: "mock-uuid-233",
    title: "งาน",
    subProjects: [
      thaiHondaProject,
      workNissan,
      workBookingProject,
      workGCCSuperAppProject,
      writingNovelProject,
      NASProject,
      socialContentManagementAndCreationProject,
      workOnePieceProject,
      workNoteTakingProject,
      pushNexProject,
      blogContentCreation,
      workTeamManagement,
      restaurantBusinessLearning,
      generatlDeloitte
    ]
  }
]
