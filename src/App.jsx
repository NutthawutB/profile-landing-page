import './App.css'
import ActivityItem from './components/ActivityItem'
import LangSkill from './components/LangSkill'
import ProfileHeader from './components/ProfileHeader'
import SkillPill from './components/SkillPill'
import SkillSection from './components/SkillSection'
import SoftSkillCard from './components/SoftSkillCard'

const profilePhoto = '/nutthawut-buakeao.jpg'

const profileDetails = [
  { label: 'มหาวิทยาลัย', value: 'มหาวิทยาลัยราชภัฏบูลสงคราม' },
  { label: 'คณะ', value: 'เทคโนโลยีอุตสาหกรรม' },
  { label: 'สาขา', value: 'วิศวกรรมคอมพิวเตอร์' },
  { label: 'ชั้นปี', value: 'นักศึกษาปีที่ 4' },
]

const languages = [
  {
    lang: 'C',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  {
    lang: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    lang: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    lang: 'HTML',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    lang: 'CSS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    lang: 'SQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  { lang: 'micro:bit' },
  { lang: 'Ladder' },
]

const frameworks = ['React.js', 'Node.js', 'Tailwind CSS', 'Bootstrap', 'Express.js']

const tools = ['SOLIDWORKS', 'micro:bit', 'Bit-Car', '3D Printing', 'Notion', 'Canva']

const softSkills = [
  {
    title: 'การทำงานข้ามวัฒนธรรม',
    description:
      'ปรับตัวได้รวดเร็วเมื่อร่วมทีมกับนักศึกษาต่างประเทศ รักษาความเข้าใจร่วมกันแม้มีความหลากหลายทั้งภาษาและบริบท',
  },
  {
    title: 'การสื่อสารธุรกิจ',
    description:
      'สรุปประเด็นเชิงเทคนิคให้ผู้บริหารและนักลงทุนเห็นคุณค่าทางธุรกิจ พร้อมเตรียมสื่อประกอบที่จับใจและตรงประเด็น',
  },
  {
    title: 'ภาวะผู้นำทีม',
    description:
      'แบ่งบทบาท กำหนดแผน และสนับสนุนสมาชิกให้ทำงานสำเร็จตามกรอบเวลา ทั้งทีมแข่งขันและทีมจัดกิจกรรม',
  },
  {
    title: 'การจัดการโครงการ',
    description:
      'วางไทม์ไลน์ กำหนด Milestone และติดตามงานหลายโปรเจ็กต์พร้อมกันโดยไม่เสียคุณภาพ',
  },
  {
    title: 'การนำเสนอ',
    description:
      'เล่าเรื่องผลงานด้วยข้อมูล กราฟ และเดโมที่เข้าใจง่าย พร้อมตอบคำถามเฉพาะทางได้อย่างมั่นใจ',
  },
  {
    title: 'การสอนและโค้ชน้อง ๆ',
    description:
      'ออกแบบกิจกรรมให้เยาวชนทดลองโค้ดดิ้งและฮาร์ดแวร์ได้สนุก ถ่ายทอดความรู้เป็นขั้นตอนเข้าใจง่าย',
  },
]

const activities = [
  {
    title: 'Experiential Learning Program 2024 (Outbound)',
    summary: 'เป็น 1 ใน 35 ตัวแทนนักศึกษาไทย ร่วมแลกเปลี่ยนเรียนรู้ต่างประเทศที่ไต้หวัน',
    period: '2024 (2567)',
  },
  {
    title: 'Experiential Learning Program 2024 – นำงานวิจัยไปทดสอบเชิงธุรกิจ',
    summary: 'นำผลงานวิจัยของมหาวิทยาลัยไปสำรวจศักยภาพเชิงธุรกิจและคู่ค้าร่วมในไต้หวัน',
    period: '2024 (2567)',
  },
  {
    title: 'The 3rd GTEP International Invitation (Taiwan Tech)',
    summary: 'แข่งขันนำเสนอแผนธุรกิจและแสดงผลิตภัณฑ์ที่ National Taiwan University of Science and Technology',
    period: '2024 (2567)',
  },
  {
    title: 'R2M 2023 (Research to Market) – ระดับมหาวิทยาลัย',
    summary: 'คว้ารางวัลชนะเลิศจากการผลักดันงานวิจัยสู่เชิงพาณิชย์ระดับมหาวิทยาลัย',
    period: '2023 (2566)',
  },
  {
    title: 'R2M ครั้งที่ 11 – ระดับภูมิภาค',
    summary: 'ได้รับรางวัลชมเชยจากการต่อยอดผลงานวิจัยในระดับภูมิภาค',
    period: '2023–2024',
  },
  {
    title: 'R2M ครั้งที่ 11 – ระดับประเทศ',
    summary: 'เป็นตัวแทนมหาวิทยาลัยเข้าร่วมแข่งขันระดับประเทศต่อยอดจากเวทีภูมิภาค',
    period: '2023–2024',
  },
  {
    title: 'แข่งขันทักษะเครือข่ายคณะเทคโนโลยีอุตสาหกรรม (ระดับประเทศ)',
    summary: 'ได้รับรางวัลชมเชยจากรายการ “การออกแบบสามมิติทางวิศวกรรมด้วย SOLIDWORKS”',
    period: '2024 (2567)',
    tags: ['#CAD', '#SolidWorks', '#3DDesign'],
  },
  {
    title: 'Business Brotherhood (MHESI)',
    summary: 'ผ่านการพิจารณาและได้รับการสนับสนุนงบประมาณประจำปีเพื่อขยายผลโครงการ',
    period: '2024 (2567)',
  },
  {
    title: 'TED Fund – Ideation Incentive Program (IDEA)',
    summary: 'ได้รับทุนสนับสนุน 100,000 บาท สำหรับพัฒนานวัตกรรมและต้นแบบ',
    period: '2024 (2567)',
  },
  {
    title: 'STARTUP THAILAND LEAGUE 2024 (Regional)',
    summary: 'หนึ่งใน 6 ทีมตัวแทนมหาวิทยาลัย เข้าร่วมรอบระดับภูมิภาค',
    period: '2024 (2567)',
  },
  {
    title: 'New Regional Startup 2024',
    summary: 'คว้ารางวัล Most Variable Product (MVP) พร้อมทุนพัฒนาต้นแบบ',
    period: '2024 (2567)',
  },
  {
    title: 'จิตอาสา: งานประชุมวิชาการ JCSSE ครั้งที่ 20',
    summary: 'ตัวแทนนำนักศึกษาจัดแสดงนวัตกรรมของภาควิชาวิศวกรรมคอมพิวเตอร์',
    period: 'ปีไม่ระบุ',
  },
  {
    title: 'จิตอาสา: OPENHOUSE PSRU 2024',
    summary: 'จัดบูธสาธิตแขนกลให้ผู้ชมทดลองบังคับ พร้อมเตรียมเครื่องพิมพ์ 3 มิติ',
    period: '2024 (2567)',
    tags: ['#Robotics', '#3DPrinting'],
  },
  {
    title: 'จิตอาสา/TA: ค่ายวิทยาการคำนวณ ม.1',
    summary: 'ผู้ช่วยสอน Python และ micro:bit/Bit-Car ให้เยาวชนในค่าย STEM',
    period: 'ปีไม่ระบุ',
    tags: ['#Python', '#Microbit', '#STEM', '#Education'],
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-slate-100 text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-14 px-4 py-12 sm:py-16 lg:px-10">
        <ProfileHeader
          name="นาย ณัฐวุฒิ บัวแก้ว"
          role="Nutthawut Buakeao - นักศึกษาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 4"
          summary="นักศึกษาที่ผสานความสนใจด้านเทคโนโลยี วิศวกรรม และการสร้างสรรค์ธุรกิจ ผ่านประสบการณ์โปรแกรมแลกเปลี่ยน การแข่งขันระดับประเทศ และงานจิตอาสา"
          photo={profilePhoto}
          highlights={['โปรแกรมแลกเปลี่ยนที่ไต้หวัน', 'ผู้นำทีม R2M', 'จิตอาสาด้าน STEM และโรบอติกส์']}
          details={profileDetails}
        />

        <SkillSection
          title="ภาษาและเทคโนโลยี"
          description="ฐานความรู้ด้านการพัฒนาซอฟต์แวร์และฮาร์ดแวร์ที่ถ่ายทอดได้ผ่านกิจกรรมและการแข่งขัน"
          columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
          accent="sky"
        >
          {languages.map((item) => (
            <LangSkill key={item.lang} {...item} />
          ))}
        </SkillSection>

        <div className="grid gap-10 lg:grid-cols-2">
          <SkillSection
            title="Framework & Library"
            description="เครื่องมือหลักที่ใช้สร้างเว็บแอป ระบบฝั่งเซิร์ฟเวอร์ และงานออโตเมชัน"
            columns="grid-cols-2"
          >
            {frameworks.map((item) => (
              <SkillPill key={item} label={item} />
            ))}
          </SkillSection>

          <SkillSection
            title="Tools"
            description="อุปกรณ์และซอฟต์แวร์ที่ช่วยออกแบบ ทดลอง และนำเสนอผลงาน"
            columns="grid-cols-2"
          >
            {tools.map((item) => (
              <SkillPill key={item} label={item} />
            ))}
          </SkillSection>
        </div>

        <SkillSection
          title="Soft Skills"
          description="ทักษะสนับสนุนที่ทำให้การพัฒนานวัตกรรมและการทำงานกับทีมเป็นไปอย่างราบรื่น"
          columns="grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          {softSkills.map((skill) => (
            <SoftSkillCard key={skill.title} {...skill} />
          ))}
        </SkillSection>

        <section className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-white via-slate-50 to-white p-8 shadow-2xl ring-1 ring-slate-200">
          <div className="absolute inset-y-0 left-12 hidden w-px bg-gradient-to-b from-sky-400 via-sky-200 to-transparent md:block" aria-hidden="true" />
          <header className="relative flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-slate-900">กิจกรรมและโครงการเด่น</h2>
            <p className="text-sm text-slate-500">
              สรุปประสบการณ์ที่สะท้อนความสนใจด้านนวัตกรรม วิศวกรรม และการพัฒนาธุรกิจของ ณัฐวุฒิ
            </p>
          </header>
          <div className="relative mt-8 grid gap-6 md:grid-cols-2">
            {activities.map((activity) => (
              <ActivityItem key={activity.title} {...activity} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
