import './Section9.css';

function Section9() {
    return (
        <div className='Section9'>
            <div className='Section9-Wrapper'>
                <div id='div1'>
                    <div id='product'>recruitbae</div>
                    <div id='poweredby'>Powered by Sourcebae</div>
                    <div id='icons'>
                        <img id="twitter" src={require('../images/twitter_icon.png')} alt="twitter" />
                        <img id="linkedin" src={require('../images/linkedin-icon.png')} alt="linkedin" />
                    </div>
                </div>
                <div id='div2'>
                    <div id="para1">Product</div>
                    <div id="para2">
                        <li>API</li>
                        <li>Integration</li>
                        <li>Video Interview</li>
                    </div>
                </div>
                <div id='div3'>
                    <div id="para1">Solution</div>
                    <div id="para2">
                        <li>By Industry</li>
                        <li>By Use Case</li>
                        <li>By Test Type</li>
                    </div>
                </div>
                <div id='div4'>
                    <div id="para1">About</div>
                    <div id="para2">
                        <li>Our Company</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Life At RecruitBae</li>
                    </div>
                </div>
                <div id='div5'>
                    <div id="para1">Address</div>
                    <div id="para2">Plot no. 205, Vijay Nagar, Part II, Scheme Number 136, Indore, Madhya Pradesh 452010</div>
                </div>
                <div id='div6'>
                    <div id="para1">Contact</div>
                    <div id="para2">for any inquiry contact us info@sourcebae.com</div>
                </div>
                <div id='footer'>©2023RecruitBae All Rights Reserved </div>
            </div>
        </div>
    )
}

export default Section9;