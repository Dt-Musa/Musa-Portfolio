import fs from 'node:fs'
import path from 'node:path'
import PDFDocument from 'pdfkit'

const outputPath = path.resolve('public', 'cv.pdf')
fs.mkdirSync(path.dirname(outputPath), { recursive: true })

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 48, bottom: 48, left: 52, right: 52 },
  info: {
    Title: 'Irankunda Musa Resume',
    Author: 'Irankunda Musa',
    Subject: 'Frontend Developer Resume',
  },
})

const stream = fs.createWriteStream(outputPath)
doc.pipe(stream)

const colors = {
  text: '#0f172a',
  muted: '#475569',
  accent: '#0f766e',
  border: '#cbd5e1',
}

const profile = {
  name: 'Irankunda Musa',
  title: 'Frontend Developer | Web3 Community Builder',
  location: 'Kampala, Uganda',
  email: 'irankundamusa17@gmail.com',
  website: 'https://digitalsphereug.tech',
  github: 'https://github.com/Dt-Musa',
  linkedin: 'https://www.linkedin.com/in/musa-irankunda-2073a2322',
  x: 'https://x.com/irankundaMusa',
}

const summary =
  "Frontend developer focused on clean interfaces, practical products, and user-friendly web systems. Community Lead at digitalSphere, Africa's Home for BlockChain & Web3, supporting learners across East Africa through practical blockchain education and opportunities."

const skills = [
  'React',
  'Next.js',
  'JavaScript (ES6+)',
  'Responsive UI Systems',
  'HTML/CSS',
  'Vite',
  'Tailwind CSS',
  'Web3 Product Education',
  'UX Refinement',
]

const currentlyBuilding = [
  {
    title: 'digitalSphere Platform Expansion',
    detail:
      'Scaling onboarding, content structure, and learner pathways for practical blockchain education in East Africa.',
  },
  {
    title: 'UI Refinement Initiative',
    detail:
      'Improving visual hierarchy, accessibility, and interaction quality across active web projects.',
  },
  {
    title: 'MintLearn (In Progress)',
    detail:
      'Building an AI and blockchain-powered study platform that generates study guides; after completion, learners can mint an on-chain certificate on Celo.',
  },
]

const projects = [
  {
    name: 'digitalSphere',
    url: 'https://digitalsphereug.tech',
    detail:
      "Africa's home for BlockChain & Web3, focused on onboarding and supporting the next generation of blockchain builders.",
  },
  {
    name: 'Shoebill Adventure',
    url: 'https://shoebilladventure.com',
    detail:
      'Tourism platform designed to convert discovery into bookings through clear storytelling and user-focused flows.',
  },
  {
    name: 'Musezero Foundation',
    url: 'https://musezerofoundation.org',
    detail:
      'NGO website supporting community storytelling with clear calls-to-action for donors and partners.',
  },
  {
    name: 'JolRic Designs',
    url: 'https://jolricdesigns.irankundamusa17.workers.dev',
    detail:
      'Creative business website deployed on Cloudflare Workers with an AI-assisted customer experience.',
  },
]

const writing = [
  'The Room Laughed, I Stayed. Now We Are Building',
  'DigitalSphereUg Showed Up at Kyambogo',
  'Celo Proof of Ship Season 2 Is Live',
]

function sectionTitle(text) {
  doc.moveDown(0.6)
  doc.font('Helvetica-Bold').fontSize(11).fillColor(colors.accent).text(text.toUpperCase())
  doc.moveTo(doc.page.margins.left, doc.y + 3)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 3)
    .strokeColor(colors.border)
    .lineWidth(1)
    .stroke()
  doc.moveDown(0.6)
}

function bullet(text, indent = 12) {
  doc
    .font('Helvetica')
    .fontSize(10.5)
    .fillColor(colors.text)
    .text('- ' + text, { indent, lineGap: 2 })
}

// Header
const nameY = doc.y

doc.font('Helvetica-Bold').fontSize(24).fillColor(colors.text).text(profile.name)
doc.font('Helvetica-Bold').fontSize(11.5).fillColor(colors.accent).text(profile.title)

const rightTop = nameY
const rightX = 340
doc
  .font('Helvetica')
  .fontSize(9.5)
  .fillColor(colors.muted)
  .text(profile.location, rightX, rightTop)
  .text(profile.email, rightX)
  .text(profile.website, rightX)
  .text(profile.github, rightX)
  .text(profile.linkedin, rightX)
  .text(profile.x, rightX)

doc.moveDown(0.9)
doc
  .moveTo(doc.page.margins.left, doc.y)
  .lineTo(doc.page.width - doc.page.margins.right, doc.y)
  .strokeColor(colors.border)
  .lineWidth(1)
  .stroke()

doc.moveDown(0.7)

sectionTitle('Professional Summary')
doc.font('Helvetica').fontSize(10.5).fillColor(colors.text).text(summary, { lineGap: 3 })

sectionTitle('Core Skills')
doc.font('Helvetica').fontSize(10.5).fillColor(colors.text).text(skills.join(' | '), { lineGap: 3 })

sectionTitle('Currently Building')
currentlyBuilding.forEach((item) => {
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(colors.text).text(item.title)
  doc.font('Helvetica').fontSize(10.3).fillColor(colors.muted).text(item.detail, { lineGap: 2 })
  doc.moveDown(0.25)
})

sectionTitle('Selected Projects')
projects.forEach((project) => {
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(colors.text).text(project.name)
  doc.font('Helvetica').fontSize(10.1).fillColor(colors.muted).text(project.url)
  doc.font('Helvetica').fontSize(10.3).fillColor(colors.text).text(project.detail, { lineGap: 2 })
  doc.moveDown(0.2)
})

sectionTitle('Writing Highlights')
writing.forEach((article) => bullet(article, 10))

sectionTitle('Current Learning')
bullet('React and Next.js (active focus)', 10)
bullet('Preparing to deepen TypeScript, smart contracts, and Web3 integration workflows', 10)

sectionTitle('Availability')
doc
  .font('Helvetica')
  .fontSize(10.5)
  .fillColor(colors.text)
  .text('Open to frontend, product, and Web3-focused collaborations and opportunities.')

doc.end()

await new Promise((resolve, reject) => {
  stream.on('finish', resolve)
  stream.on('error', reject)
})

console.log('Generated resume PDF:', outputPath)
