import React, { useState } from 'react';

interface BaseItem {
  title: string;
  detail?: string;
  scheduledDate?: string;
  dueDate?: string;
}

interface Task extends BaseItem {
  completed: boolean;
}

interface Project extends BaseItem {
  tasks: Task[];
}

interface Topic extends BaseItem {
  tasks: Task[];
  projects: Project[];
}

const gettingHealthyData: Topic = {
  "title": "การมีสุขภาพที่ดี",
  "detail": "แนวทางการสร้างและรักษาสุขภาพที่ดีอย่างครบวงจร ครอบคลุมการออกกำลังกาย การจัดการความเครียด การนอนหลับ และพฤติกรรมการกินที่เหมาะสม เพื่อเสริมสร้างสุขภาพทั้งภายในและภายนอก",
  "scheduledDate": "2025-01-01",
  "dueDate": "2025-12-31",
  "tasks": [],
  "projects": [
    {
      "title": "Weight Training: เพิ่มน้ำหนักที่ยกได้ 20%",
      "detail": "แผนการฝึกน้ำหนักเพื่อเพิ่มความแข็งแรงและความทนทานของกล้ามเนื้อ วัดผลจากการเพิ่มน้ำหนักที่ยกได้ในระยะเวลา 1 ปี",
      "dueDate": "2025-12-31",
      "tasks": [
        {
          "title": "กำหนดเป้าหมายการยกน้ำหนัก",
          "detail": "วัดน้ำหนักที่ยกได้ในปัจจุบัน เช่น Bench Press, Deadlift, Squat และตั้งเป้าหมายเพิ่มขึ้น 20%",
          "dueDate": "2025-01-15",
          "completed": false
        },
        {
          "title": "สร้างตารางฝึก",
          "detail": "สร้างตารางการฝึกสำหรับกล้ามเนื้อส่วนต่าง ๆ เช่น อก หลัง ขา แขน พร้อมเพิ่ม Progressive Overload ทุก 4 สัปดาห์",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "ติดตามและวัดผลทุก 3 เดือน",
          "detail": "วัดน้ำหนักที่ยกได้ทุก 3 เดือนและปรับโปรแกรมการฝึกให้เหมาะสม",
          "dueDate": "2025-04-01",
          "completed": false
        }
      ]
    },
    {
      "title": "เดิน/วิ่งครบ 1,000 กิโลเมตร ภายใน 1 ปี",
      "detail": "แผนการเดินและวิ่งสะสมระยะทางเพื่อสร้างสมรรถภาพทางกายและทดสอบความอดทนของร่างกาย",
      "dueDate": "2025-12-31",
      "tasks": [
        {
          "title": "กำหนดเป้าหมายรายเดือน",
          "detail": "ตั้งเป้าหมายการเดิน/วิ่งให้ได้ 84 กิโลเมตรต่อเดือน (เฉลี่ย 3 กิโลเมตรต่อวัน)",
          "dueDate": "2025-01-31",
          "completed": false
        },
        {
          "title": "วางแผนเส้นทางการวิ่ง",
          "detail": "เลือกเส้นทางในสวนสาธารณะหรือสถานที่ใกล้บ้านเพื่อการเดินและวิ่งอย่างต่อเนื่อง",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "ติดตามผลระยะทางสะสม",
          "detail": "ใช้แอปพลิเคชันหรือสมาร์ทวอทช์บันทึกระยะทางที่เดิน/วิ่งในแต่ละวัน",
          "dueDate": "2025-12-31",
          "completed": false
        }
      ]
    },
    {
      "title": "ลงวิ่ง Mini Marathon",
      "detail": "แผนการเตรียมตัวและเข้าร่วมการแข่งขัน Mini Marathon ระยะทาง 10 กิโลเมตร",
      "dueDate": "2025-06-30",
      "tasks": [
        {
          "title": "เลือกงานวิ่ง Mini Marathon",
          "detail": "ค้นหางานวิ่ง Mini Marathon ในพื้นที่ที่น่าสนใจและกำหนดวันแข่ง",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "วางแผนการฝึกซ้อม",
          "detail": "สร้างตารางฝึกซ้อมระยะทางและความเร็ว เช่น การวิ่งเพิ่มขึ้นทีละ 1 กิโลเมตรต่อสัปดาห์",
          "dueDate": "2025-03-01",
          "completed": false
        },
        {
          "title": "ฝึกซ้อมวิ่งเต็มระยะ 10 กิโลเมตร",
          "detail": "ทดสอบวิ่งเต็มระยะ 10 กิโลเมตรก่อนวันงานจริงอย่างน้อย 2 ครั้ง",
          "dueDate": "2025-05-01",
          "completed": false
        },
        {
          "title": "เตรียมตัวสำหรับวันงาน",
          "detail": "ตรวจสอบอุปกรณ์การวิ่ง เช่น รองเท้าสำหรับวิ่ง และจัดเตรียมอาหารที่เหมาะสมก่อนแข่ง",
          "dueDate": "2025-06-15",
          "completed": false
        }
      ]
    },
    {
      "title": "โภชนาการและการกินเพื่อสุขภาพ",
      "detail": "แผนการปรับเปลี่ยนพฤติกรรมการกินเพื่อให้ได้สารอาหารที่เหมาะสมสำหรับการเสริมสร้างสุขภาพและฟื้นฟูร่างกาย",
      "dueDate": "2025-12-31",
      "tasks": [
        {
          "title": "วางแผนมื้ออาหาร",
          "detail": "ออกแบบมื้ออาหารที่มีสารอาหารครบถ้วน เช่น โปรตีน คาร์โบไฮเดรต และไขมันดี",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "ลดการบริโภคอาหารที่ไม่ดีต่อสุขภาพ",
          "detail": "ลดการบริโภคน้ำตาล อาหารแปรรูป และไขมันอิ่มตัว",
          "dueDate": "2025-03-01",
          "completed": false
        },
        {
          "title": "เพิ่มการบริโภคผักและผลไม้",
          "detail": "เน้นการกินผักและผลไม้ให้ครบ 5 สีในแต่ละวัน",
          "dueDate": "2025-04-01",
          "completed": false
        },
        {
          "title": "ติดตามพฤติกรรมการกิน",
          "detail": "บันทึกมื้ออาหารและประเมินผลเพื่อปรับปรุงพฤติกรรมการกิน",
          "dueDate": "2025-06-01",
          "completed": false
        }
      ]
    },
    {
      "title": "นอนหลับให้ครบ 7-8 ชั่วโมงทุกวัน",
      "detail": "แผนการสร้างพฤติกรรมนอนหลับที่ดีและมีคุณภาพ เพื่อเสริมสร้างการฟื้นฟูร่างกายและสมอง",
      "dueDate": "2025-12-31",
      "tasks": [
        {
          "title": "กำหนดเวลาเข้านอนและตื่นนอน",
          "detail": "ตั้งเวลาเข้านอนและตื่นนอนที่สม่ำเสมอในแต่ละวัน",
          "dueDate": "2025-01-15",
          "completed": false
        },
        {
          "title": "ลดการใช้หน้าจอก่อนนอน",
          "detail": "หลีกเลี่ยงการใช้โทรศัพท์หรือคอมพิวเตอร์ก่อนเข้านอน 1 ชั่วโมง",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "ติดตามคุณภาพการนอน",
          "detail": "ใช้แอปพลิเคชันหรืออุปกรณ์เพื่อวัดคุณภาพการนอนหลับ",
          "dueDate": "2025-03-01",
          "completed": false
        }
      ]
    },
    {
      "title": "ลดน้ำหนักอย่างยั่งยืน",
      "detail": "แผนการลดน้ำหนักด้วยวิธีที่ยั่งยืน เช่น การออกกำลังกายและการควบคุมอาหาร",
      "dueDate": "2025-06-30",
      "tasks": [
        {
          "title": "ตั้งเป้าหมายการลดน้ำหนัก",
          "detail": "ตั้งเป้าหมาย เช่น ลดน้ำหนัก 5 กิโลกรัมภายใน 6 เดือน",
          "dueDate": "2025-01-15",
          "completed": false
        },
        {
          "title": "วางแผนการออกกำลังกาย",
          "detail": "สร้างตารางออกกำลังกาย เช่น คาร์ดิโอ 3 ครั้งต่อสัปดาห์ และเวทเทรนนิ่ง 2 ครั้งต่อสัปดาห์",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "ปรับพฤติกรรมการกิน",
          "detail": "ลดอาหารที่มีแคลอรีสูง เช่น น้ำอัดลม และเพิ่มการบริโภคโปรตีนและผัก",
          "dueDate": "2025-03-01",
          "completed": false
        }
      ]
    },
    {
      "title": "ทำสมาธิและลดความเครียด",
      "detail": "ฝึกทำสมาธิหรือโยคะวันละ 15 นาที เพื่อลดความเครียดและเสริมสุขภาพจิตใจ",
      "dueDate": "2025-12-31",
      "tasks": [
        {
          "title": "กำหนดเวลาในการทำสมาธิ",
          "detail": "จัดตารางเวลา 15 นาทีในแต่ละวันสำหรับทำสมาธิ",
          "dueDate": "2025-01-15",
          "completed": false
        },
        {
          "title": "ฝึกโยคะสัปดาห์ละ 2 ครั้ง",
          "detail": "เริ่มฝึกโยคะเพื่อเสริมสร้างสมดุลของร่างกายและจิตใจ",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "ติดตามระดับความเครียด",
          "detail": "ใช้แอปพลิเคชันหรือการประเมินตนเองเพื่อวัดความเครียดเป็นระยะ",
          "dueDate": "2025-06-01",
          "completed": false
        }
      ]
    },
    {
      "title": "ดื่มน้ำให้เพียงพอในแต่ละวัน",
      "detail": "สร้างนิสัยการดื่มน้ำ 2-3 ลิตรต่อวันเพื่อสนับสนุนการทำงานของระบบร่างกาย",
      "dueDate": "2025-12-31",
      "tasks": [
        {
          "title": "ตั้งเป้าการดื่มน้ำรายวัน",
          "detail": "ตั้งเป้าหมายการดื่มน้ำ 8-10 แก้วต่อวัน",
          "dueDate": "2025-01-15",
          "completed": false
        },
        {
          "title": "ใช้ขวดน้ำแบบพกพา",
          "detail": "พกขวดน้ำเพื่อช่วยติดตามปริมาณน้ำที่ดื่มในแต่ละวัน",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "บันทึกการดื่มน้ำ",
          "detail": "ใช้แอปพลิเคชันหรือการบันทึกเพื่อติดตามปริมาณน้ำดื่มในแต่ละวัน",
          "dueDate": "2025-03-01",
          "completed": false
        }
      ]
    }
  ]
}

const financialFreedomPlanningData: Topic = {
  "title": "อิสรภาพทางการเงิน",
  "detail": "แนวทางการสร้างอิสรภาพทางการเงินที่ยั่งยืน ครอบคลุมการจัดการหนี้ การสร้างรายได้เพิ่มเติม และการสร้างความมั่นคงทางการเงินในระยะยาว โดยเน้นการตั้งเป้าหมายที่ชัดเจนและการลงมือทำที่เป็นรูปธรรม เพื่อให้สามารถควบคุมการเงินของตนเองและสร้างเสรีภาพที่แท้จริง",
  "scheduledDate": "2025-01-01",
  "dueDate": "2025-12-31",
  "tasks": [],
  "projects": [
    {
      "title": "ปิดหนี้บัตรเครดิต",
      "detail": "วางแผนและจัดการเพื่อลดและปิดหนี้บัตรเครดิตอย่างมีประสิทธิภาพ ลดภาระดอกเบี้ย และปลดหนี้ที่เป็นอุปสรรคต่อการสร้างอิสรภาพทางการเงิน",
      "dueDate": "2025-06-01",
      "tasks": [
        {
          "title": "รวบรวมข้อมูลหนี้",
          "detail": "ตรวจสอบยอดหนี้ในบัตรเครดิตแต่ละใบ อัตราดอกเบี้ย และกำหนดการชำระเงิน",
          "dueDate": "2025-01-15",
          "completed": false
        },
        {
          "title": "จัดลำดับความสำคัญของการชำระหนี้",
          "detail": "เลือกชำระหนี้ที่มีดอกเบี้ยสูงที่สุดก่อน หรือใช้วิธี Snowball โดยชำระหนี้ที่มียอดต่ำสุดก่อน",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "กำหนดงบประมาณเพื่อลดหนี้",
          "detail": "จัดทำงบประมาณรายเดือนเพื่อสำรองเงินสำหรับการชำระหนี้ และลดค่าใช้จ่ายที่ไม่จำเป็น",
          "dueDate": "2025-03-01",
          "completed": false
        },
        {
          "title": "ติดตามและประเมินผล",
          "detail": "ติดตามการชำระหนี้อย่างต่อเนื่องและปรับแผนหากจำเป็น",
          "dueDate": "2025-06-01",
          "completed": false
        }
      ]
    },
    {
      "title": "สร้างรายได้จากโปรเจกต์การจอง",
      "detail": "พัฒนารายได้จากโปรเจกต์ที่เกี่ยวข้องกับการให้บริการ การขาย หรือการจองออนไลน์ เช่น การจัดการการจองโรงแรม ที่พัก หรือบริการต่าง ๆ",
      "dueDate": "2025-12-31",
      "tasks": [
        {
          "title": "ค้นหาโอกาสในโปรเจกต์การจอง",
          "detail": "วิจัยตลาดและเลือกประเภทของบริการหรือผลิตภัณฑ์ที่เหมาะสมสำหรับการจอง เช่น การจัดการที่พัก การจัดกิจกรรม หรือบริการท่องเที่ยว",
          "dueDate": "2025-03-01",
          "completed": false
        },
        {
          "title": "พัฒนาแพลตฟอร์มการจอง",
          "detail": "สร้างเว็บไซต์หรือใช้แพลตฟอร์มที่มีอยู่ เช่น Airbnb, Booking.com หรือแอปพลิเคชันจองอื่น ๆ",
          "dueDate": "2025-04-01",
          "completed": false
        },
        {
          "title": "โปรโมทและสร้างเครือข่ายลูกค้า",
          "detail": "ใช้การตลาดดิจิทัลและโซเชียลมีเดียเพื่อเข้าถึงกลุ่มเป้าหมายและสร้างฐานลูกค้าที่แข็งแกร่ง",
          "dueDate": "2025-06-01",
          "completed": false
        },
        {
          "title": "วิเคราะห์รายได้และปรับปรุงบริการ",
          "detail": "ติดตามรายได้และผลตอบรับของลูกค้า พร้อมปรับปรุงบริการเพื่อเพิ่มความพึงพอใจและรายได้",
          "dueDate": "2025-12-01",
          "completed": false
        }
      ]
    },
    {
      "title": "สร้างเงินล้านแรก",
      "detail": "วางแผนและดำเนินการเพื่อสร้างรายได้รวมหนึ่งล้านบาท โดยการวางเป้าหมายการเงิน การจัดการรายได้ และการลงทุนอย่างมีประสิทธิภาพ",
      "dueDate": "2025-12-31",
      "tasks": [
        {
          "title": "กำหนดเป้าหมายรายได้",
          "detail": "วิเคราะห์ความสามารถทางการเงินในปัจจุบันและตั้งเป้าหมายสำหรับการสร้างรายได้รวมหนึ่งล้านบาท",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "เพิ่มรายได้จากแหล่งที่มีอยู่",
          "detail": "สำรวจโอกาสการเพิ่มรายได้ เช่น การเลื่อนตำแหน่ง การทำงานเสริม หรือการขายสินค้าที่มีอยู่",
          "dueDate": "2025-04-01",
          "completed": false
        },
        {
          "title": "เริ่มต้นการลงทุน",
          "detail": "นำรายได้ส่วนหนึ่งไปลงทุนในสินทรัพย์ที่มีความเสี่ยงต่ำถึงปานกลาง เช่น กองทุนรวม หุ้น หรืออสังหาริมทรัพย์",
          "dueDate": "2025-06-01",
          "completed": false
        },
        {
          "title": "ติดตามความก้าวหน้า",
          "detail": "ตรวจสอบรายได้และผลตอบแทนจากการลงทุน พร้อมปรับแผนเพื่อเพิ่มโอกาสในการบรรลุเป้าหมาย",
          "dueDate": "2025-12-01",
          "completed": false
        }
      ]
    },
    {
      "title": "ปิดหนี้บ้าน",
      "detail": "วางแผนและดำเนินการชำระหนี้บ้านให้หมดเร็วขึ้น เพื่อลดภาระดอกเบี้ยและสร้างอิสรภาพทางการเงิน",
      "dueDate": "2025-12-31",
      "tasks": [
        {
          "title": "ตรวจสอบยอดหนี้บ้าน",
          "detail": "ตรวจสอบยอดหนี้บ้านทั้งหมด อัตราดอกเบี้ย และระยะเวลาการชำระหนี้",
          "dueDate": "2025-01-15",
          "completed": false
        },
        {
          "title": "เพิ่มการชำระเงินต้น",
          "detail": "จัดทำแผนการเพิ่มการชำระเงินต้น เพื่อช่วยลดดอกเบี้ยรวม",
          "dueDate": "2025-03-01",
          "completed": false
        },
        {
          "title": "เจรจาเงื่อนไขดอกเบี้ยกับธนาคาร",
          "detail": "ติดต่อธนาคารเพื่อเจรจาอัตราดอกเบี้ยที่ต่ำลงหรือปรับโครงสร้างหนี้",
          "dueDate": "2025-06-01",
          "completed": false
        },
        {
          "title": "ติดตามการลดหนี้",
          "detail": "ตรวจสอบยอดหนี้และประเมินความก้าวหน้าในการชำระเงินทุกไตรมาส",
          "dueDate": "2025-12-01",
          "completed": false
        }
      ]
    },
    {
      "title": "วางแผนความมั่นคงทางการเงินในระยะยาว",
      "detail": "สร้างแผนการออมและการลงทุนที่เหมาะสมเพื่อให้เกิดความมั่นคงทางการเงินและเตรียมตัวสำหรับอนาคต",
      "dueDate": "2025-12-31",
      "tasks": [
        {
          "title": "กำหนดเป้าหมายการเงินระยะยาว",
          "detail": "ตั้งเป้าหมายที่ชัดเจน เช่น การเกษียณ การซื้อบ้าน หรือการลงทุน",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "สร้างกองทุนสำรองฉุกเฉิน",
          "detail": "สะสมเงินสำรองฉุกเฉินที่สามารถครอบคลุมค่าใช้จ่ายได้ 3-6 เดือน",
          "dueDate": "2025-04-01",
          "completed": false
        },
        {
          "title": "เริ่มลงทุนในสินทรัพย์ที่เหมาะสม",
          "detail": "ศึกษาการลงทุนในหุ้น กองทุนรวม อสังหาริมทรัพย์ หรือสินทรัพย์อื่น ๆ ที่มีศักยภาพ",
          "dueDate": "2025-06-01",
          "completed": false
        },
        {
          "title": "ติดตามและปรับแผนการเงิน",
          "detail": "ตรวจสอบสถานะการเงินและการลงทุนอย่างสม่ำเสมอ พร้อมปรับเปลี่ยนแผนหากจำเป็น",
          "dueDate": "2025-12-01",
          "completed": false
        }
      ]
    }
  ]
}

const weddingPlanningData: Topic = {
  "title": "การวางแผนแต่งงาน",
  "detail": "แนวทางการจัดการและวางแผนแต่งงานอย่างเป็นระเบียบ ครอบคลุมตั้งแต่การขอแต่งงาน การวางแผนงบประมาณและสถานที่จัดงาน จนถึงการเตรียมความพร้อมในวันแต่งงาน รายละเอียดทุกขั้นตอนเพื่อให้คู่รักสามารถเพลิดเพลินกับช่วงเวลาพิเศษของพวกเขาได้อย่างเต็มที่",
  "scheduledDate": "2025-01-01",
  "dueDate": "2025-12-31",
  "tasks": [
    {
      "title": "หาข้อมูลจากเพื่อนที่มีประสบการณ์ มิ้นท์ โจ้",
      "detail": "กาข้อมูลจากเพื่อนที่มีประสบการณ์ มิ้นท์ โจ้",
      "dueDate": "2024-06-01",
      "completed": false
    }
  ],
  "projects": [
    {
      "title": "แผนการขอแต่งงาน",
      "detail": "วางแผนการขอแต่งงานอย่างรอบคอบเพื่อให้เกิดความหมายและเป็นที่น่าจดจำ รวมถึงการเลือกสถานที่ การเตรียมตัวด้านอารมณ์และการจัดการรายละเอียดต่าง ๆ",
      "dueDate": "2025-03-01",
      "tasks": [
        {
          "title": "แนวคิดในการขอแต่งงาน",
          "detail": "ตัดสินใจเกี่ยวกับธีมหรือแนวคิดที่สะท้อนถึงความสัมพันธ์ของคู่รัก เช่น ดินเนอร์สุดโรแมนติก การผจญภัยกลางแจ้ง หรือการขอแต่งงานในที่สาธารณะ",
          "dueDate": "2024-02-01",
          "completed": false
        },
        {
          "title": "การเลือกสถานที่",
          "detail": "เลือกสถานที่ที่มีความหมายต่อความสัมพันธ์หรือเป็นฉากหลังที่สวยงามสำหรับการขอแต่งงาน",
          "dueDate": "2024-03-01",
          "completed": false
        },
        {
          "title": "การเลือกแหวนหมั้น",
          "detail": "ค้นคว้าและซื้อแหวนที่เหมาะกับสไตล์และความชอบของอีกฝ่าย รวมถึงการตรวจสอบขนาดให้ถูกต้อง",
          "dueDate": "2024-04-01",
          "completed": false
        },
        {
          "title": "การเตรียมคำพูดและรายละเอียด",
          "detail": "เตรียมคำพูดที่จริงใจและซ้อมการขอแต่งงาน พร้อมประสานงานเกี่ยวกับเวลา ช่างภาพ หรือองค์ประกอบเซอร์ไพรส์อื่น ๆ",
          "dueDate": "2024-05-01",
          "completed": false
        }
      ]
    },
    {
      "title": "การวางแผนงานแต่ง/งบประมาณ/สถานที่",
      "detail": "จัดการทุกด้านของงานแต่งงาน ตั้งแต่การวางแผนงบประมาณ รายชื่อแขก ไปจนถึงการเลือกสถานที่ที่เหมาะสม รวมถึงการสร้างภาพรวมของงานและการค้นหาผู้เชี่ยวชาญที่เหมาะสม",
      "dueDate": "2025-09-01",
      "tasks": [
        {
          "title": "กำหนดวันเวลาคร่าว ๆ ของงานแต่งงาน",
          "detail": "กำหนดงันเวลาคร่าว ๆ ของงานแต่งงาน เช่น วันที่ เวลา และโซนสถานที่คร่าว ๆ",
          "dueDate": "2024-06-01",
          "completed": false
        },
        {
          "title": "การวางแผนงบประมาณ",
          "detail": "กำหนดงบประมาณทั้งหมดและแบ่งสัดส่วนสำหรับส่วนสำคัญ เช่น สถานที่ อาหาร ชุดแต่งงาน และความบันเทิง",
          "dueDate": "2024-06-01",
          "completed": false
        },
        {
          "title": "การวางแผนธีมและการตกแต่ง",
          "detail": "ตัดสินใจเกี่ยวกับธีม สีหลัก และองค์ประกอบการตกแต่ง ประสานงานกับร้านดอกไม้และนักตกแต่ง",
          "dueDate": "2024-09-01",
          "completed": false
        },
        {
          "title": "การเลือกชุดแต่งงานและการฟิตติ้ง",
          "detail": "เลือกชุดแต่งงานสำหรับคู่รักและทีมเพื่อนเจ้าสาว พร้อมนัดหมายและเข้ารับการปรับแก้ชุด",
          "dueDate": "2025-01-01",
          "completed": false
        },
        {
          "title": "การเลือกสถานที่",
          "detail": "ค้นคว้าและจองสถานที่ที่สอดคล้องกับธีมงานแต่งและจำนวนแขก",
          "dueDate": "2024-07-01",
          "completed": false
        },
        {
          "title": "การสร้างรายชื่อแขก",
          "detail": "รวบรวมรายชื่อแขกที่ต้องการเชิญและตรวจสอบให้แน่ใจว่าครอบครัวและเพื่อนที่สำคัญทั้งหมดรวมอยู่ในนั้น",
          "dueDate": "2024-08-01",
          "completed": false
        },
        {
          "title": "การเลือกผู้ให้บริการ",
          "detail": "จองผู้จัดอาหาร ช่างภาพ และผู้ให้บริการความบันเทิงต่าง ๆ ทำสัญญาเพื่อรับประกันการให้บริการ",
          "dueDate": "2024-10-01",
          "completed": false
        }
      ]
    },
    {
      "title": "การเตรียมตัวสำหรับงานแต่งงาน",
      "detail": "จัดการเตรียมความพร้อมทั้งหมดเพื่อให้งานแต่งงานเป็นไปอย่างราบรื่น รวมถึงการฟิตติ้งชุด การซ้อมพิธี และการยืนยันแผนการจัดงานทั้งหมด",
      "dueDate": "2025-12-01",
      "tasks": [
        {
          "title": "การวางแผนการซ้อมพิธี",
          "detail": "จัดและดำเนินการซ้อมพิธีแต่งงาน รวมถึงผู้เข้าร่วมสำคัญ เช่น ผู้ทำพิธีและทีมเพื่อนเจ้าสาว",
          "dueDate": "2025-02-01",
          "completed": false
        },
        {
          "title": "การยืนยันแผนงานขั้นสุดท้าย",
          "detail": "ยืนยันกับผู้ให้บริการและทีมงานสถานที่ ตรวจสอบกำหนดการ ความพร้อมของแขก และแผนสำรอง",
          "dueDate": "2025-03-01",
          "completed": false
        },
        {
          "title": "การเตรียมชุดอุปกรณ์ฉุกเฉินในวันแต่งงาน",
          "detail": "จัดเตรียมชุดอุปกรณ์ฉุกเฉินที่มีสิ่งจำเป็น เช่น อุปกรณ์ปฐมพยาบาล ชุดเย็บผ้า และของว่าง",
          "dueDate": "2025-04-01",
          "completed": false
        }
      ]
    }
  ]
}


// Example of restructured mock data
const travellingData: Topic = {
  title: "Travelling",
  detail: "A comprehensive guide to planning and executing unforgettable travel experiences. From researching dream destinations and creating detailed budgets to organizing logistics and immersing in local cultures. This topic covers everything needed to transform travel aspirations into reality, ensuring memorable adventures while maintaining safety and financial responsibility. Whether planning solo backpacking trips, luxury vacations, or family holidays, this framework helps organize all aspects of travel preparation and execution.",
  scheduledDate: "2025-01-01",
  dueDate: "2025-12-31",
  tasks: [
    {
      title: "Destination Research",
      detail: "Choose and research dream destinations, identify cultural landmarks and attractions, check weather conditions and local traditions",
      dueDate: "2024-03-01",
      completed: false
    },
    {
      title: "Budget Planning",
      detail: "Estimate costs for flights, accommodation, and daily expenses, set aside funds for unexpected expenses, plan savings timeline and explore travel deals",
      dueDate: "2024-04-01",
      completed: false
    },
    {
      title: "Packing Essentials",
      detail: "Clothing suitable for the destination's climate, specialized gear (e.g., tents, sleeping bags for camping trips), travel documents, chargers, and medical kits",
      dueDate: "2024-05-01",
      completed: false
    },
    {
      title: "Travel Documents and Insurance",
      detail: "Ensure passports and visas are valid, purchase travel insurance covering medical and cancellation",
      dueDate: "2024-06-01",
      completed: false
    },
    {
      title: "Itinerary Planning",
      detail: "Draft detailed schedules, allocate time for exploration and relaxation, pre-book tickets for popular attractions if necessary",
      dueDate: "2024-07-01",
      completed: false
    },
    {
      title: "Health and Safety Preparation",
      detail: "Get necessary vaccinations, pack medications and first-aid kits, research emergency contacts at the destination",
      dueDate: "2024-08-01",
      completed: false
    }
  ],
  projects: [
    {
      title: "2025 Japan",
      detail: `
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
      dueDate: "2025-03-01",
      tasks: [
        {
          title: "Financial Planning",
          detail: "Flights: Compare fares for Tokyo and Osaka. Accommodation: Budget hotels vs. traditional ryokans. Transportation: Purchase a JR Rail Pass for seamless travel",
          dueDate: "2024-09-01",
          completed: false
        },
      ]
    },
    {
      title: "2025 New Zealand",
      detail: "A breathtaking adventure in New Zealand, exploring its stunning landscapes, Maori culture, and thrilling outdoor activities.",
      tasks: [
        {
          title: "Financial Planning",
          detail: "Flights: Search for affordable fares to Auckland or Christchurch. Accommodation: Mix of budget-friendly hostels and scenic lodges. Transportation: Rent a camper van for flexible travel",
          dueDate: "2024-10-01",
          completed: false
        },
        {
          title: "Must-See Landmarks",
          detail: "North Island: Hobbiton, Tongariro National Park. South Island: Milford Sound, Franz Josef Glacier. Rotorua: Geothermal parks and Maori cultural shows",
          dueDate: "2024-11-01",
          completed: false
        },
        {
          title: "Cultural Activities",
          detail: "Attend a Maori cultural evening and feast on a traditional Hangi meal. Visit Te Papa Museum to learn about New Zealand's history. Try local wines in the Marlborough region",
          dueDate: "2024-12-01",
          completed: false
        },
        {
          title: "Packing List",
          detail: "Sturdy hiking boots for trekking trails. Waterproof gear for unpredictable weather. Camera or drone for capturing scenic views",
          dueDate: "2024-12-01",
          completed: false
        }
      ]
    },
    {
      title: "2025 South America",
      detail: "An unforgettable exploration of South America's vibrant cultures, ancient civilizations, and natural wonders.",
      tasks: [
        {
          title: "Financial Planning",
          detail: "Flights: Look for deals to hubs like Lima or Buenos Aires. Accommodation: Economical options like hostels and local guesthouses. Transportation: Budget for intercity flights or long-distance buses",
          dueDate: "2024-10-01",
          completed: false
        },
        {
          title: "Must-See Landmarks",
          detail: "Peru: Machu Picchu, Sacred Valley. Brazil: Christ the Redeemer, Amazon Rainforest. Argentina: Iguazu Falls, Patagonia",
          dueDate: "2024-11-01",
          completed: false
        },
        {
          title: "Cultural Activities",
          detail: "Learn to dance the tango in Buenos Aires. Explore local markets and taste Peruvian ceviche. Attend Carnival in Rio de Janeiro for a vibrant celebration",
          dueDate: "2024-12-01",
          completed: false
        },
        {
          title: "Packing List",
          detail: "Lightweight clothing for tropical climates and layers for cooler regions. Hiking gear for treks in Peru or Patagonia. Travel-size sunscreen and insect repellent for jungle visits",
          dueDate: "2024-12-01",
          completed: false
        }
      ]
    },
    {
      title: "2025 Australia",
      detail: "Dive into Australia's diverse landscapes, unique wildlife, and cosmopolitan cities.",
      tasks: [
        {
          title: "Financial Planning",
          detail: "Flights: Research options to Sydney, Melbourne, or Brisbane. Accommodation: Consider eco-lodges or beachside hostels. Transportation: Plan for a road trip with a rented car or camper van",
          dueDate: "2024-10-01",
          completed: false
        },
        {
          title: "Must-See Landmarks",
          detail: "Sydney: Sydney Opera House, Bondi Beach. Great Barrier Reef: Snorkeling and diving. Outback: Uluru, Kings Canyon",
          dueDate: "2024-11-01",
          completed: false
        },
        {
          title: "Cultural Activities",
          detail: "Visit Aboriginal art galleries and learn about their heritage. Indulge in Aussie classics like meat pies and lamingtons. Attend a cricket match or surf competition",
          dueDate: "2024-12-01",
          completed: false
        },
        {
          title: "Packing List",
          detail: "Beachwear and snorkel gear. Sunscreen and wide-brimmed hats for sun protection. Comfortable shoes for exploring cities and hiking trails",
          dueDate: "2024-12-01",
          completed: false
        }
      ]
    },
    {
      title: "2025 Southeast Asia",
      detail: "A vibrant journey through Southeast Asia's temples, bustling cities, and tranquil beaches.",
      tasks: [
        {
          title: "Financial Planning",
          detail: "Flights: Book low-cost carriers for hopping between countries. Accommodation: Affordable options like guesthouses or boutique hotels. Transportation: Budget for tuk-tuks, ferries, and domestic flights",
          dueDate: "2024-10-01",
          completed: false
        },
        {
          title: "Must-See Landmarks",
          detail: "Thailand: Grand Palace, Phi Phi Islands. Vietnam: Ha Long Bay, Hoi An Ancient Town. Cambodia: Angkor Wat, Tonle Sap Lake",
          dueDate: "2024-11-01",
          completed: false
        },
        {
          title: "Cultural Activities",
          detail: "Take a Thai cooking class in Bangkok. Cruise the Mekong Delta in Vietnam. Witness sunrise at Angkor Wat in Cambodia",
          dueDate: "2024-12-01",
          completed: false
        },
        {
          title: "Packing List",
          detail: "Lightweight and breathable clothing for tropical heat. Compact raincoat or umbrella for monsoon seasons. Power banks and universal adapters for electronics",
          dueDate: "2024-12-01",
          completed: false
        }
      ]
    },
    {
      title: "2025 Africa Safari",
      detail: "An exhilarating safari adventure across Africa's majestic landscapes and wildlife reserves.",
      tasks: [
        {
          title: "Financial Planning",
          detail: "Flights: Research fares to Nairobi, Johannesburg, or Cape Town. Accommodation: Safari lodges, tented camps, or budget hotels. Transportation: Budget for guided safaris and park entry fees",
          dueDate: "2024-10-01",
          completed: false
        },
        {
          title: "Must-See Landmarks",
          detail: "Kenya: Maasai Mara, Amboseli National Park. Tanzania: Serengeti, Ngorongoro Crater. South Africa: Kruger National Park, Table Mountain",
          dueDate: "2024-11-01",
          completed: false
        },
        {
          title: "Cultural Activities",
          detail: "Visit local Maasai villages and learn about their traditions. Taste local dishes like Ugali or Bunny Chow. Explore Cape Town's cultural hubs and history",
          dueDate: "2024-12-01",
          completed: false
        },
        {
          title: "Packing List",
          detail: "Neutral-colored clothing for safaris. Binoculars for wildlife spotting. Sturdy hats and sunscreen for the African sun",
          dueDate: "2024-12-01",
          completed: false
        }
      ]
    }
  ]
};

// Create a reusable TaskList component
const TaskList = ({ tasks, onTaskToggle }: { 
  tasks: Task[], 
  onTaskToggle: (taskIndex: number, newTask?: Task) => void 
}) => {
  const [expandedTasks, setExpandedTasks] = useState<number[]>([]);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: '',
    completed: false
  });
  
  // Add this ref for the input
  const titleInputRef = React.useRef<HTMLInputElement>(null);

  // Modify the existing click handler
  const handleAddTaskClick = () => {
    setIsAddingTask(true);
    // Use setTimeout to ensure the input exists when we try to focus it
    setTimeout(() => {
      titleInputRef.current?.focus();
    }, 0);
  };

  const handleAddTask = () => {
    if (newTask.title) {
      onTaskToggle(-1, { ...newTask as Task }); // Now matches the updated signature
      setNewTask({ title: '', detail: '', completed: false });
      setIsAddingTask(false);
    }
  };

  const toggleTask = (taskIndex: number) => {
    setExpandedTasks(prev => 
      prev.includes(taskIndex) 
        ? prev.filter(i => i !== taskIndex)
        : [...prev, taskIndex]
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddTask();
    }
  };

  return (
    <div className="task-list">
      {tasks?.map((task, taskIndex) => (
        <div key={taskIndex} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <div className="task-header" onClick={() => toggleTask(taskIndex)}>
            <div className="task-main-row">
              <div className="task-left">
                <div className="custom-checkbox" onClick={(e) => {
                  e.stopPropagation();
                  onTaskToggle(taskIndex);
                }}>
                  {task.completed && <span className="checkmark">✓</span>}
                </div>
                <span className="task-title">{task.title}</span>
              </div>
              <div className="task-right">
                {task.dueDate && (
                  <span className="due-date">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                )}
                <span className={`expand-icon ${expandedTasks.includes(taskIndex) ? 'expanded' : ''}`}>
                  ▼
                </span>
              </div>
            </div>
          </div>
          {expandedTasks.includes(taskIndex) && (
            <div className="task-detail">
              {task.detail}
            </div>
          )}
        </div>
      ))}
      
      {isAddingTask ? (
        <div className="new-task-form">
          <div className="task-input-row">
            <input
              ref={titleInputRef}
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
              onKeyDown={handleKeyPress}
              className="task-input"
            />
            <button onClick={handleAddTask} className="save-button">Save</button>
          </div>
        </div>
      ) : (
        <button 
          className="add-task-button" 
          onClick={handleAddTaskClick}
        >
          <span className="plus-icon">+</span>
          Add Task
        </button>
      )}

      <style jsx>{`
        .task-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .task-item {
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
          background: white;
          transition: all 0.2s ease;
        }

        .task-item:hover {
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .task-header {
          padding: 12px 16px;
          cursor: pointer;
        }

        .task-main-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .task-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .task-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .custom-checkbox {
          width: 20px;
          height: 20px;
          border: 2px solid #666;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .custom-checkbox:hover {
          border-color: #4CAF50;
        }

        .completed .custom-checkbox {
          background: #4CAF50;
          border-color: #4CAF50;
        }

        .checkmark {
          color: white;
          font-size: 14px;
        }

        .task-title {
          font-size: 15px;
        }

        .completed .task-title {
          font-size: 16px;
          color: #888;
          text-decoration: line-through;
        }

        .due-date {
          color: #666;
          font-size: 14px;
        }

        .expand-icon {
          font-size: 12px;
          color: #666;
          transition: transform 0.2s ease;
        }

        .expand-icon.expanded {
          transform: rotate(180deg);
        }

        .task-detail {
          padding: 12px 16px;
          border-top: 1px solid #e0e0e0;
          color: #666;
          font-size: 14px;
          line-height: 1.5;
        }

        .add-task-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: transparent;
          border: 2px dashed #ccc;
          border-radius: 4px;
          color: #666;
          cursor: pointer;
          width: 100%;
          font-size: 15px;
          transition: all 0.2s ease;
        }

        .add-task-button:hover {
          border-color: #4CAF50;
          color: #4CAF50;
          background: rgba(76, 175, 80, 0.05);
        }

        .plus-icon {
          font-size: 20px;
          font-weight: bold;
        }

        .new-task-form {
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 16px;
          background: white;
        }

        .task-input-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .task-input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 2px;
          font-size: 14px;
        }

        .save-button {
          padding: 8px 16px;
          background: #4CAF50;
          color: white;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          font-size: 14px;
        }

        .save-button:hover {
          background: #45a049;
        }

        .task-item.completed {
          opacity: 0.5;
        }

        .completed .task-title {
          color: #999;
          text-decoration: line-through;
        }

        .completed .task-detail {
          color: #999;
        }

        .completed .due-date {
          color: #999;
        }
      `}</style>
    </div>
  );
};

// Add a helper function to calculate progress
const calculateProgress = (tasks: Task[]) => {
  const completedTasks = tasks?.filter(task => task?.completed).length;
  return tasks?.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;
};

// Updated NoteTakingPage component
export default function NoteTakingPage() {
  const [data, setData] = useState<Topic>(gettingHealthyData);
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    detail: '',
    tasks: []
  });

  const handleGeneralTaskToggle = (taskIndex: number, newTask?: Task) => {
    setData(prev => ({
      ...prev,
      tasks: taskIndex === -1 && newTask
        ? [...prev.tasks, newTask]
        : prev.tasks.map((task, i) => 
            i === taskIndex ? { ...task, completed: !task.completed } : task
          )
    }));
  };

  const handleProjectTaskToggle = (projectIndex: number, taskIndex: number, newTask?: Task) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map((project, i) => 
        i === projectIndex ? {
          ...project,
          tasks: taskIndex === -1 && newTask
            ? [...project.tasks, newTask]
            : project.tasks.map((task, j) => 
                j === taskIndex ? { ...task, completed: !task.completed } : task
              )
        } : project
      )
    }));
  };

  const toggleProject = (projectIndex: number) => {
    setExpandedProjects(prev => 
      prev.includes(projectIndex) 
        ? prev.filter(i => i !== projectIndex)
        : [...prev, projectIndex]
    );
  };

  const handleAddProject = () => {
    if (newProject.title) {
      setData(prev => ({
        ...prev,
        projects: [...prev.projects, { ...newProject as Project, tasks: [] }]
      }));
      setNewProject({ title: '', detail: '', tasks: [] });
      setIsAddingProject(false);
    }
  };

  return (
    <div className="container">
      <div className="area-topic-project-task" style={{ marginBottom: '24px' }}>
        <p>{`Area: Personal > Topic: Financial Freedom Planning > Project: สร้างล้านแรก > Task: วางแผนหนี้`}</p>
      </div>
      <h1>{data.title}</h1>
      <div className="description">
        {data.scheduledDate && (
          <p>Scheduled for {new Date(data.scheduledDate).toLocaleDateString()}</p>
        )}
        {data.dueDate && (
          <p>Due for {new Date(data.dueDate).toLocaleDateString()}</p>
        )}
        <p>{data.detail}</p>
      </div>

      <h2>Tasks</h2>
      <TaskList 
        tasks={data.tasks}
        onTaskToggle={handleGeneralTaskToggle}
      />

      <h2>Projects</h2>
      <div className="accordion-container">
        {data.projects.map((project, index) => (
          <div key={index} className="accordion">
            <div 
              className="accordion-header"
              onClick={() => toggleProject(index)}
            >
              <div className="project-header">
                <div className="project-title-row">
                  <div className="title-with-icon">
                    <span className={`toggle-icon ${expandedProjects.includes(index) ? 'expanded' : ''}`}>
                      ▶
                    </span>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="progress-text">{calculateProgress(project.tasks)}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${calculateProgress(project.tasks)}%` }}
                  />
                </div>
                {project.dueDate && (
                  <div className="due-date">Due: {new Date(project.dueDate).toLocaleDateString()}</div>
                )}
              </div>
            </div>
            {expandedProjects.includes(index) && (
              <>
                <p className="secondary-text" 
                   dangerouslySetInnerHTML={{ __html: project.detail }}>
                </p>
                <div className="accordion-content">
                  <h4>Tasks</h4>
                  <TaskList 
                    tasks={project.tasks} 
                    onTaskToggle={(taskIndex, newTask) => handleProjectTaskToggle(index, taskIndex, newTask)}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {isAddingProject ? (
        <div className="new-project-form">
          <input
            type="text"
            placeholder="Project title"
            value={newProject.title}
            onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
            className="project-input"
          />
          <textarea
            placeholder="Project details (optional)"
            value={newProject.detail}
            onChange={(e) => setNewProject(prev => ({ ...prev, detail: e.target.value }))}
            className="project-input"
            rows={4}
          />
          <div className="project-form-buttons">
            <button onClick={handleAddProject} className="save-button">Save</button>
            <button onClick={() => setIsAddingProject(false)} className="cancel-button">Cancel</button>
          </div>
        </div>
      ) : (
        <button className="add-project-button" onClick={() => setIsAddingProject(true)}>
          <span className="plus-icon">+</span>
          Add Project
        </button>
      )}

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        h2 {
          font-size: 1.5rem;
          margin: 2rem 0 1rem;
        }

        h3 {
          font-size: 1.2rem;
          margin: 0;
        }

        .description {
          margin-bottom: 2rem;
          color: #666;
        }

        .accordion-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .accordion {
          border: 1px solid #ddd;
          border-radius: 2px;
          background: white;
        }

        .accordion-header {
          padding: 1rem;
          cursor: pointer;
          user-select: none;
        }

        .accordion-header:hover {
          background: #f5f5f5;
        }

        .accordion-content {
          padding: 1rem;
          border-top: 1px solid #ddd;
        }

        .project-header, .task-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .secondary-text {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
          padding: 0 1rem;
          border-top: 1px solid #ddd;
        }

        .secondary-text h3 {
          margin: 1rem 0;
          color: #333;
        }

        .secondary-text h4 {
          margin: 1rem 0;
          color: #444;
        }

        .secondary-text p {
          margin: 0.75rem 0;
          line-height: 1.5;
        }

        .secondary-text ul {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
        }

        .secondary-text li {
          margin: 0.25rem 0;
          line-height: 1.4;
        }

        .due-date {
          font-size: 0.9rem;
          color: #666;
        }

        .task-category {
          margin-bottom: 1.5rem;
        }

        .category-chip {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: #eee;
          border-radius: 8px;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        ul {
          margin: 0;
          padding-left: 1.5rem;
        }

        li {
          margin: 0.5rem 0;
        }

        .task-list {
          list-style: none;
          padding: 0;
        }

        .task-item {
          margin: 0.5rem 0;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .checkbox-label input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .completed {
          text-decoration: line-through;
          color: #888;
        }

        .project-title-row, .task-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .progress-text {
          font-size: 0.9rem;
          color: #666;
          font-weight: 500;
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background-color: #eee;
          border-radius: 2px;
          margin: 8px 0;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background-color: #4CAF50;
          transition: width 0.3s ease;
        }

        .title-with-icon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .toggle-icon {
          display: inline-block;
          transition: transform 0.2s ease;
          font-size: 0.8rem;
          color: #666;
        }

        .toggle-icon.expanded {
          transform: rotate(90deg);
        }

        .accordion-header {
          cursor: pointer;
          user-select: none;
        }

        .accordion-header:hover {
          background: #f5f5f5;
        }

        .new-project-form {
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: white;
        }

        .project-input {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 2px;
          font-size: 14px;
          width: 100%;
          box-sizing: border-box;
        }

        .project-input:focus {
          outline: none;
          border-color: #4CAF50;
        }

        .project-form-buttons {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .add-project-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: transparent;
          border: 2px dashed #ccc;
          border-radius: 4px;
          color: #666;
          cursor: pointer;
          width: 100%;
          font-size: 15px;
          transition: all 0.2s ease;
          margin-top: 8px;
        }

        .add-project-button:hover {
          border-color: #4CAF50;
          color: #4CAF50;
          background: rgba(76, 175, 80, 0.05);
        }
      `}</style>
    </div>
  );
}
