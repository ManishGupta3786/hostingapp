import "./Section7.css";

function Section7() {
    return (
        <div className="Section7">
            <div className="Section7-Wrapper">
                <div className="Section7-Left-Panel">Frequently asked <span>questions</span></div>
                <div className="Section7-Right-Panel">
                    <div id="group1">
                        <div id="para1">What is the procedure for hiring a React JS developer on SourceBae?</div>
                        <div id="xmark"><img src={require('../images/xmark.png')} alt="xmark" /></div>
                        <div id="para2">
                            The process for hiring a React JS developer on SourceBae involves four steps:
                            <li>i). Gathering Your Requirement,</li>
                            <li>ii). Finding the most-qualified pre-vetted developers,</li>
                            <li>iii). Interviewing with suitable candidates,</li>
                            <li>iv). Boom! Your talent is on board. (Don't worry! The paperwork is on us.)</li>
                            It's as simple as that.
                        </div>
                    </div>
                    <div id="group2">
                        <div id="para1">What makes SourceBae React JS developers unique?</div>
                        <div id="plusmark"><img src={require('../images/plusmark.png')} alt="plusmark"/></div>
                    </div>
                    <div id="group3">
                        <div id="para1">How much does it cost to hire a React JS developer?</div>
                        <div id="plusmark"><img src={require('../images/plusmark.png')} alt="plusmark"/></div>
                    </div>
                    <button>View More</button>
                </div>
            </div>
        </div>
    )
}

export default Section7; 