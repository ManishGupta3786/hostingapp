import "./Section1.css"

function Section1() {
    return (
        <div className="Section1">
            <div className="Section1-Wrapper">
                <div className="Navbar">
                    <div id="brand-logo">
                        <img src={require("../images/135.png")} alt="logo" />
                    </div>
                    <div id="tabs">
                        <li>
                            <label>Product</label>
                            <select>
                                <option>Hello1</option>
                                <option>Hello1</option>
                                <option>Hello1</option>
                            </select>
                        </li>
                        <li>
                            <label>Test-Library</label>
                            <select>
                                <option>Hello1</option>
                                <option>Hello1</option>
                                <option>Hello1</option>
                            </select>
                        </li>
                        <li>
                            <label>Solution</label>
                            <select>
                                <option>Hello1</option>
                                <option>Hello1</option>
                                <option>Hello1</option>
                            </select>
                        </li>
                        <li>
                            <label>Resources</label>
                            <select>
                                <option>Hello1</option>
                                <option>Hello1</option>
                                <option>Hello1</option>
                            </select>
                        </li>
                        <li>Pricing</li>
                        <li>
                            <label>About</label>
                            <select>
                                <option>Hello1</option>
                                <option>Hello1</option>
                                <option>Hello1</option>
                            </select>
                        </li>
                    </div>
                    <div id="btns">
                        <button id="login-btn">Login</button>
                        <button id="signup-btn">Signup</button>
                    </div>
                </div>
                <div className="Section1-Left-Pannel">
                    <div id="para1"><strong>Enhance your pre-hiring assessments using RecruitBae’s API</strong></div>
                    <div id="para2">
                        We provide a comprehensive solution for seamlessly integrating pre-hiring assessments into your platform. Our APIs are built using the latest coding standards and offer a diverse range of features, including advanced filtering and efficient pagination. With our robust and dependable APIs, you can ensure a smooth candidate experience and optimize your hiring process.
                        <li>Robust and Dependable APIs</li>
                        <li>Fast Activation</li>
                        <li>Extensive Selection of Assessments</li>
                        <li>Secure and Compliant</li>
                    </div>
                    <div id="section1-btns">
                        <button id="btn1">Request A Demo</button>
                        <button id="btn2">Read API Doc</button>
                    </div>
                </div>
                <div className="Section1-Right-Pannel">
                    <img src={require('../images/1000004431.png')} alt="hero" />
                </div>
            </div>
        </div>
    )
}

export default Section1;