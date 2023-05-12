import React from 'react'
import './Htcwho.css'
import Asset5 from '../../assets/scan-1.gif'
import Asset6 from '../../assets/scan-2.gif'
import { useTranslation } from 'react-i18next';

const Htcwho = () => {
    
  const { t } = useTranslation();

  return (
    <section id="htc__who">
        <h2>WHO CAN USE IMAGE TEXT CONVERTER?</h2>

        <div className="container htc-who_container">
            <div className='Who_about'>
            <div className="who_me">
                <img src={Asset5} alt="who_img" />
            </div>
            </div>
            <div className='Who_content'>
            <div className="who_item">
                <h3 className="who_head">{t('1. Data Entry Specialists')}</h3>
                <p className="who_info">
                {t('From the banking sector to the health and education departments, every field has paperwork to deal with. There can be loads of printed or handwritten official documents that need to be digitized. It can be done easily with the use of our OCR-based image text converter. The data entry specialists just need to process the scanned copies of the documents through our tool and it will take no time to convert them into the textual form which can be easily edited and stored in the computer system.')}
                </p>
                <h3 className="who_head">{t('2. Linguistic Researchers')}</h3>
                <p className="who_info">
                {t('When it comes to language analysis then the linguistic researchers often need to tag the corpora (data). For this purpose, they are required to convert the data into textual form. For instance, there’s a book in PDF form and it needs to be tagged for analysis. The linguistic researchers can simply process it through our image text converter so that the OCR technology can convert it into editable “text document”. Once the data is converted into textual form, they can easily tag it and then use it for corpus-based analysis.')}
                </p>
            </div>
            </div>
        </div>
        <div className="container htc-who_container1">
            <div className='Who_content1'>
            <div className="who_item">
                <h3 className="who_head">{t('3. Students & Teachers')}</h3>
                <p className="who_info">
                {t('The students and teachers can get the best out of our image to text converter as it enables them to convert handwritten reports, essays, and notes into “editable and searchable” documents. They just need to process the material (scanned or photographed) through our Image Text Converter tool which will extract all the text from it and display in copyable form. Whether it is a printed or handtyped material, they can easily digitize it.')}
                </p>
                <h3 className="who_head">{t('4. Content Creators')}</h3>
                <p className="who_info">
                {t('Everyone who creates content including content writers and books authors can use our image text converter in various ways. For instance, there’s some piece of information which is available in the form of an infographic but a content writer need it in textual form. In such a case, he/she can simply process the infographic through our tool and get its editable form within seconds. Likewise, the authors can convert scanned books nto editable form.')}
                </p>
            </div>
            </div>
            <div className='Who_about1'>
            <div className="who_me1">
                <img src={Asset6} alt="who_img1" />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Htcwho   