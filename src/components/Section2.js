import "./Section2.css"

function Section2() {
    return (
        <div className="Section2">
            <div className="Section2-Wrapper">
                <div id="section2-heading">
                    Preferred by leading-edge enterprises globally
                </div>
                <div id="section2-image-panel">
                    <div id="adobe">
                        <img src={require('../images/adobe.png')} alt="adobe" />
                    </div>
                    <div>
                        <img src={require('../images/pepperfry.png')} alt="pepperfry" />
                    </div>
                    <div>
                        <img src={require('../images/apollo.png')} alt="apollo" />
                    </div>
                    <div>
                        <img src={require('../images/paytm.png')} alt="paytm" />
                    </div>
                    <div>
                        <img src={require('../images/phonepe.png')} alt="phonepe" />
                    </div>
                    <div>
                        <img src={require('../images/saregama.png')} alt="saregama" />
                    </div>
                    <div>
                        <img src={require('../images/new24.png')} alt="new24" />
                    </div>
                    <div>
                        <img src={require('../images/dunzo.png')} alt="dunzo" />
                    </div>
                    <div id="comviva">
                        <img src={require('../images/comviva.png')} alt="comviva" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;