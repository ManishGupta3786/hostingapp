import './Section5.css';

function Section5() {
    return (
        <div className='Section5'>
            <div className='Section5-Wrapper'>
                <div className='Section5-Left-Panel'>
                    <div id="para1">
                        Improve your work processes
                    </div>
                    <div id="para2">
                        If you want to streamline your hiring procedure and provide a smooth candidate experience, our API solution is an ideal option. Our APIs are equipped with state-of-the-art features to elevate your hiring process.
                    </div>
                    <div id="para3">
                        <li>Easy and fast activation process for seamless integration with your platform</li>
                        <li>Effective pagination to enhance network traffic and boost performance</li>
                        <li>Tailorable filters to allow you to request specific assessments that align with your business requirements</li>
                        <li>A secure and compliant platform that guarantees complete data protection and privacy</li>
                    </div>
                </div>
                <div className='Section5-Right-Panel'>
                    <img src={require('../images/sec5_visual.png')} alt="visual"/>
                </div>
            </div>
        </div>
    )
}

export default Section5;