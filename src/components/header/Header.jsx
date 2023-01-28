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
        <div className="container" style={{ height: '100vh' }}>
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


