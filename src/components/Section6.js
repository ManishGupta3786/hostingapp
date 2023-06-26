import './Section6.css';

function Section6() {
    return (
        <div className='Section6'>
            <div className='Section6-Wrapper'>
                <div className='Section6-Container1'>
                    Enhance your business potential through seamless integration
                </div>
                <div className='Section6-Container2'>
                    By incorporating our API solution, you can optimize and streamline your hiring process, unlocking your business's maximum potential. Our API solution offers top-notch features, serving as the perfect tool to propel your business to new heights.
                </div>
                <div className='Section6-Container3'>
                    <div id='left-div'>
                        <div id='inner-div1'>
                            <img src={require('../images/div-pic1.png')} alt="icon-pic" />
                        </div>
                        <div id='inner-div2'>
                            <div id='inner-para1'>Developer-friendly approach</div>
                            <div id='inner-para2'>Our talent assessment tool is designed with developers in mind, providing comprehensive API documentation, a staging server environment for testing, and adherence to the latest coding standards.</div>
                        </div>
                    </div>
                    <div id='center-div'>
                        <div id='inner-div1'>
                            <img src={require('../images/div-pic2.png')} alt="icon-pic" />
                        </div>
                        <div id='inner-div2'>
                            <div id='inner-para1'>Tailored filters</div>
                            <div id='inner-para2'>Our API empowers you to apply customizable filters. You can filter based on criteria like country, region, and category, ensuring that you receive relevant catalog sections tailored to your business.</div>
                        </div>
                    </div>
                    <div id='right-div'>
                        <div id='inner-div1'>
                            <img src={require('../images/div-pic3.png')} alt="icon-pic" />
                        </div>
                        <div id='inner-div2'>
                            <div id='inner-para1'>Version management</div>
                            <div id='inner-para2'>With our talent assessment platform, you have the flexibility to continue using existing APIs until you are ready to migrate. This gives you greater control, allowing for a smooth transition whenever you migrate.</div>
                        </div>
                    </div>
                </div>
                <div className='Section6-Container4'>
                    <div id='left-div'>
                        <div id='inner-div1'>
                            <img src={require('../images/div-pic4.png')} alt="icon-pic" />
                        </div>
                        <div id='inner-div2'>
                            <div id='inner-para1'>Efficient pagination</div>
                            <div id='inner-para2'>Our APIs are designed to maximize efficiency by implementing API pagination, effectively managing network traffic. This enables businesses to deliver an enhanced customer experience while reducing costs and boosting performance.</div>
                        </div>
                    </div>
                    <div id='center-div'>
                        <div id='inner-div1'>
                            <img src={require('../images/div-pic5.png')} alt="icon-pic" />
                        </div>
                        <div id='inner-div2'>
                            <div id='inner-para1'>Real-time data availability</div>
                            <div id='inner-para2'>With our talent assessment tool, your business gains access to real-time data, ensuring you have the most up-to-date information at your disposal. This facilitates quicker decision-making and more accurate insights, ultimately driving business growth.</div>
                        </div>
                    </div>
                    <div id='right-div'>
                        <div id='inner-div1'>
                            <img src={require('../images/div-pic6.png')} alt="icon-pic " />
                        </div>
                        <div id='inner-div2'>
                            <div id='inner-para1'>Scalability at its core</div>
                            <div id='inner-para2'>Our highly scalable talent assessment platform is equipped to handle high volumes of traffic, making it suitable for businesses of all sizes. Whether you're a small startup or a large corporation, our platform is poised to grow alongside your business.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6;