import React from 'react';


const About = (props) => {
    return (
        <div classNameName='container'>
            <h2 style={{color: props.mode === 'dark'?'white':'black'}}>About Us</h2>
            <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item my-3">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <b>What is Text Data?</b>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#050523':'white',
                        color: props.mode === 'dark'?'white':'black'}}>
                        Text data usually consists of documents which can represent words, sentences or even paragraphs of free flowing text. The inherent unstructured (no neatly formatted data columns!) 
                        and noisy nature of textual data makes it harder for machine learning methods to directly work on raw text data.
                </div>
                </div>
            </div>
            <div className="accordion-item my-3">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <b>Why do we analyze text?</b>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#050523':'white',
                        color: props.mode === 'dark'?'white':'black'}}>
                        Text Analysis is about parsing texts in order to extract machine-readable facts from them. The purpose of Text Analysis is to create structured data out of free text content.
                        The process can be thought of as slicing and dicing heaps of unstructured, heterogeneous documents into easy-to-manage and interpret data pieces.
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <b>How do I content analysis a website?</b>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#050523':'white',
                        color: props.mode === 'dark'?'white':'black'}}>
                        To do a content analysis of your site, start with a content inventory to figure out what your web content currently looks like.
                         The easiest way to do this is to use a simple spreadsheet that looks like this
                        : Go through every single page on your website and record what you find using the above format.
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;
