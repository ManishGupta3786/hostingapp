import "./Section3.css"

function Section3() {
    return (
        <div className="Section3">
            <div className="Section3-Wrapper">
                <div className="Section3-Left-Pannel">
                    <div id="para1">Unleash the Potential of Data</div>
                    <div id="para2">
                        Data holds immense value for modern enterprises, and our APIs are specifically designed to empower you in harnessing its complete capabilities. By utilizing our cutting-edge analytics and reporting tools, you can delve deep into your business operations, customer behaviors, and market trends, gaining invaluable insights. Whether your objective is to fuel growth, streamline processes, or make well-informed decisions based on data, our APIs are your ideal solution.
                    </div>
                    <div id="para3">
                        <li>Track vital performance metrics using advanced analytics and reporting tools</li>
                        <li>Personalize dashboards and visualizations to gain clarity from your data</li>
                        <li>Process data in real-time for prompt insights and quicker decision-making</li>
                        <li>Safeguarded platform with data encryption and other protective measures to ensure the security of your sensitive information.</li>
                    </div>
                </div>
                <div className="Section3-Right-Pannel">
                    <img src={require('../images/sec3_visual.png')} alt="visual" />
                </div>
            </div>
        </div>
    )
}

export default Section3;