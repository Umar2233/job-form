import Question from "../../component/question/Question"
import "./pageOne.css"
import { Link } from "react-router-dom"

const PageOne = () => {

    const allData = [
        {
            qns: "What is your first name?",
            opt: "*",
            desc: "",
        },
        {
            qns: "... and your last name?",
            opt: "*",
            desc: "",
        },
        {
            qns: "What is your phone number?",
            opt: "",
            desc: "Having your phone number help us communicate quicker, specially during schdeling. But we respect your privacy and providing your phone number at this stage is optional.",
        },
        {
            qns: "What is your country of residence?",
            opt: "*",
            desc: "Where do you currently live?",
        },
        {
            qns: "... and which city?",
            opt: "*",
            desc: "",
        },
        {
            qns: "What is your nationality?",
            opt: "*",
            desc: "What country are you a citizen of?",
        }
    ]

    return (
        <div>
            <div className="container">
                <div className="navbar"></div>
                <div className="wrapper">
                    <div className="leftSide">
                        <div className="lsTop">
                            <h1 className="lsTitle">Personal Information</h1>
                            <p className="lsDesc">Help us get to know by answering the following question</p>
                        </div>
                        <div className="lsWrapper">
                            {allData.map((data, i) => <Question key={i} question={data.qns} optional={data.opt} desc={data.desc} />)}
                        </div>
                        <div className="btn">
                            <Link to="/pageTwo" className="next">Next</Link>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="count">
                            <div className="pageNumber">
                                <div className="nextNumber">1</div>
                                <h2 className="pageName">Welcome Page</h2>
                            </div>
                            <div className="pageNumber">
                                <div className="onNumber">2</div>
                                <h2 className="pageName">Personal Information</h2>
                            </div>
                            <div className="pageNumber">
                                <div className="number">3</div>
                                <h2 className="pageName">Web Presence</h2>
                            </div>
                            <div className="pageNumber">
                                <div className="number">4</div>
                                <h2 className="pageName">Experience</h2>
                            </div>
                            <div className="pageNumber">
                                <div className="number">5</div>
                                <h2 className="pageName">Education</h2>
                            </div>
                            <div className="pageNumber">
                                <div className="number">6</div>
                                <h2 className="pageName">Expectations</h2>
                            </div>
                            <div className="pageNumber">
                                <div className="number">7</div>
                                <h2 className="pageName">Supporting Document</h2>
                            </div>
                            <div className="pageNumber">
                                <div className="number">8</div>
                                <h2 className="pageName">Summary</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageOne