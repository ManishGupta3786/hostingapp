import './Section4.css';

function Section4() {
    return(
        <div className='Section4'>
            <div className='Section4-Wrapper'>
                <div className='Section4-Left-Panel'>
                    <img src={require('../images/sec4_visual.png')} alt="visual" />
                </div>
                <div className='Section4-Right-Panel'>
                    <div id="para1">Improve your candidate experience</div>
                    <div id="para2">
                        We recognize the importance of providing an excellent candidate experience to ensure a successful hiring process. Our APIs are specifically developed to assist you in accomplishing this objective, offering a wide range of advanced features. Regardless of your industry, whether it's e-commerce, healthcare, or any other sector, our APIs can empower you to create a seamless and captivating customer journey.
                    </div>
                    <div id="para3">
                        <li>Stay connected and engaged with real-time notifications</li>
                        <li>Expand your reach to a global audience with multi-language support</li>
                        <li>Customize your content with sophisticated filtering options</li>
                        <li>Rely on our scalable and dependable API infrastructure to handle high volumes of traffic and peak usage periods</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4;