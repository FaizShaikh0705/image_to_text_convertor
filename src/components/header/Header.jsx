import React from 'react'
import Tesseract from 'tesseract.js';
import './Header.css'

const Header = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [image, setImage] = React.useState('');
    const [text, setText] = React.useState('');
    const [progress, setProgress] = React.useState(0);

    const handleSubmit = () => {
        setIsLoading(true);
        Tesseract.recognize(image, 'eng', {
            logger: (m) => {
                console.log(m);
                if (m.status === 'recognizing text') {
                    setProgress(parseInt(m.progress * 100));
                }
            },
        })
            .catch((err) => {
                console.error(err);
            })
            .then((result) => {
                console.log(result.data);
                setText(result.data.text);
                setIsLoading(false);
            });
    };

    return (
        <section id='Header'>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 700" xmlns="https://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="5%" stop-color="#002bdc"></stop>
                        <stop offset="95%" stop-color="#32ded4"></stop>
                    </linearGradient>
                </defs>
                <path d="M 0,700 C 0,700 0,233 0,233 C 110.35714285714286,188.57142857142856 220.71428571428572,144.14285714285714 348,167 C 475.2857142857143,189.85714285714286 619.5000000000001,280 743,317 C 866.4999999999999,354 969.2857142857142,337.8571428571429 1082,315 C 1194.7142857142858,292.1428571428571 1317.357142857143,262.57142857142856 1440,233 C 1440,233 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="5%" stop-color="#002bdc"></stop>
                        <stop offset="95%" stop-color="#32ded4"></stop>
                    </linearGradient>
                </defs>
                <path d="M 0,700 C 0,700 0,466 0,466 C 149.42857142857144,461.7857142857143 298.8571428571429,457.57142857142856 426,485 C 553.1428571428571,512.4285714285714 658,571.5 772,545 C 886,518.5 1009.1428571428571,406.42857142857144 1122,379 C 1234.857142857143,351.57142857142856 1337.4285714285716,408.7857142857143 1440,466 C 1440,466 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 350)"></path>
            </svg>
            <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="5%" stop-color="#002bdc"></stop>
                    <stop offset="95%" stop-color="#32ded4"></stop>
                </linearGradient>
                <stop offset="5%" stop-color="#002bdc"></stop>
                <stop offset="95%" stop-color="#32ded4"></stop>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="5%" stop-color="#002bdc"></stop>
                    <stop offset="95%" stop-color="#32ded4"></stop>
                </linearGradient>
            </defs>
            <path d="M 0,700 C 0,700 0,233 0,233 C 110.35714285714286,188.57142857142856 220.71428571428572,144.14285714285714 348,167 C 475.2857142857143,189.85714285714286 619.5000000000001,280 743,317 C 866.4999999999999,354 969.2857142857142,337.8571428571429 1082,315 C 1194.7142857142858,292.1428571428571 1317.357142857143,262.57142857142856 1440,233 C 1440,233 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path>
            <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="5%" stop-color="#002bdc"></stop>
                    <stop offset="95%" stop-color="#32ded4"></stop>
                </linearGradient>
            </defs>
            <path d="M 0,700 C 0,700 0,466 0,466 C 149.42857142857144,461.7857142857143 298.8571428571429,457.57142857142856 426,485 C 553.1428571428571,512.4285714285714 658,571.5 772,545 C 886,518.5 1009.1428571428571,406.42857142857144 1122,379 C 1234.857142857143,351.57142857142856 1337.4285714285716,408.7857142857143 1440,466 C 1440,466 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 350)"></path> 
            <div className="container">
                <div className="row h-100">
                    <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
                        {!isLoading && (
                            <h1 className="text-center py-5 mc-5">Image To Text</h1>
                        )}
                        {isLoading && (
                            <>
                                <progress className="form-control" value={progress} max="100">
                                    {progress}%{' '}
                                </progress>{' '}
                                <p className="text-center py-0 my-0">Converting:- {progress} %</p>
                            </>
                        )}
                        {!isLoading && !text && (
                            <>
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        setImage(URL.createObjectURL(e.target.files[0]))
                                    }
                                    className="form-control mt-5 mb-2"
                                />
                                <input
                                    type="button"
                                    onClick={handleSubmit}
                                    className="btn btn-primary mt-5"
                                    value="Convert"
                                />
                            </>
                        )}
                        {!isLoading && text && (
                            <>
                                <textarea
                                    className="form-control w-100 mt-5"
                                    rows="30"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                ></textarea>
                            </>
                        )}

                    </div>
                </div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,133.3C96,107,192,53,288,74.7C384,96,480,192,576,213.3C672,235,768,181,864,160C960,139,1056,149,1152,170.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}



        </section>
    );

}

export default Header


