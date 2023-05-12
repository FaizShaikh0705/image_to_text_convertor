import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Htc from '../htc/Htc'
import Htcwork from '../htcwork/Htcwork';
import Htcwho from '../htcwho/Htcwho';
import Understand from '../understand/Understand';
import Benefit from '../benefit/Benefit';
import { useTranslation } from 'react-i18next';
import './About.css'

const About = () => {

  const { t } = useTranslation();

  return (
<section id='about'>
<Container>
<Row className='justify-content-md-center'>
<h2>IMAGE TEXT TO CONVERTER</h2>
<h5>DELIVER DATA AS YOU NEED IT</h5>
<div className="about-info">
<p className='about_para'>{t('“Image Text Converter” combines the power of optical character recognition with advanced AI algorithms to let users')} <br />{t('extract text from images. It takes less than a few seconds and only a couple of clicks to convert images into text.')}</p>
<br />
<p className='about_para'>{t('Whether you have scanned documents such as books and official reports or snapshots, this online OCR tool will enable')}<br />{t('you to convert any digital image into editable text file. It works effectively to ensure that the text is extracted with')}<br />{t('absolute clarity. Neither it omits any piece of the information nor it changes the layout of the text.')}</p>
<br />
<p className='about_para'>{t('From students and researchers to language analysts and data entry specialists, anyone can make use of our free online')} <br />{t('image to text converter. There’s no premium subscription required to convert image into text with our intuitive OCR tool.')}</p>
<br />
<p className='about_para'>{t('Extract text from any type of image and save it in an easily accessible format as required.')}</p>
</div>
</Row>
</Container>
<Htc />
<Htcwork />
<Htcwho />
<Understand />
<Benefit />
</section>
  )
}

export default About;