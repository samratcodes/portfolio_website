const viewMore = document.querySelector('.ViewMore');
const content=document.querySelector('.content-section');
const skillsNames=['Html','Css','Javascript','Bootstarp','React.Js','Tailwind css']
const certificationsNames=['Freecodecamp responsive webdesign','Cs50']
const services=['Web Development: Expertise in HTML, CSS, JavaScript, Tailwind, ReactJS, and Bootstrap to create impactful websites.',
'Brand Alignment: Collaborating with marketing and design teams to ensure your website aligns seamlessly with your brand.',
'User Experience Optimization: Applying best practices to enhance user engagement and satisfaction.',
'Responsive Design: Creating websites that adapt smoothly to various devices and screen sizes.',
'Performance Optimization: Improving website speed and performance for better user experience and SEO rankings.',
'Ongoing Support: Providing ongoing maintenance and support to keep your website secure and up to date.']

viewMore.addEventListener('click',(event) => {
    event.preventDefault();
    viewMore.remove()
    //Services card
  const Services_card= document.createElement('div')
  Services_card.className='services_card'
  const work= document.createElement('div')
 work.className='works'
 work.innerText='What i can do for you:'
 Services_card.appendChild(work)
 const unordered_list=document.createElement('ul')
 services.forEach((info)=>{
  const serviceslist=document.createElement('li')
  serviceslist.className='services'
  serviceslist.innerText=info;
  unordered_list.append(serviceslist)
 })
 Services_card.appendChild(unordered_list);
    content.append(Services_card)

    
    //skills card
    const below=document.createElement('div')
    below.className='outerSkillsBox'

  const newdiv= document.createElement('div')
  newdiv.className='skills-box'

  const skillsdiv= document.createElement('div')
   skillsdiv.innerText='Skills'
   skillsdiv.className='skills'

   newdiv.append(skillsdiv)
   const list =document.createElement('ul')

   skillsNames.forEach((Data)=>{
    const listElements =document.createElement('li')
    listElements.className='skills-list'
    listElements.innerText=Data;
    list.append(listElements)
   })
   newdiv.appendChild(list)
   below.append(newdiv)
    //certifications cards
    const CertificationsCard=document.createElement('div')
    CertificationsCard.className='CertificationsCard'

  const CertificationsBox= document.createElement('div')
  CertificationsBox.className='CertificationsBox'

  const certifications= document.createElement('div')
  certifications.innerText='Certifications'
  certifications.className='certifications'

  CertificationsBox.append(certifications)

   const certificationlist =document.createElement('ul')

   certificationsNames.forEach((Data)=>{
    const clistElements =document.createElement('li')
    clistElements.className='certificationsLists'
    clistElements.innerText=Data;
    certificationlist.append(clistElements)
   })
   CertificationsBox.append(certificationlist)
   CertificationsCard.append(CertificationsBox)
   content.appendChild(below)
  content.append(CertificationsCard)

})
