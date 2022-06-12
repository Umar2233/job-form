import "./pageTwo.css"
import Question from "../../component/question/Question"
import { Link } from "react-router-dom"

const PageTwo = () => {

    const allData = [
        {
            qns: "Linkdin",
            opt: "",
            desc: "Do you have a Linkdin Profile? If so, please enter it below.",
        },
        {
            qns: "Facebook",
            opt: "",
            desc: "Are you on Facebook? Care to share your profile address?",
        },
        {
            qns: "Twitter",
            opt: "",
            desc: "Do you tweet? Mind share your twitter handle url",
        },
        {
            qns: "Github",
            opt: "",
            desc: "As a Developer, It's highly valueable to have and share your github profile.",
        },
        {
            qns: "Personal Website or Blog",
            opt: "",
            desc: "Do you have your own website and/or blog? If so we would love to check it out.",
        },
        {
            qns: "Any other references",
            opt: "",
            desc: "Do you have anyother references you would like to share? Mention to your work, articles, or any other relevent reference you would like to share. Feel free to enter one url per line.",
        }
    ]

    return (
        <div>
            <div className="container">
                <div className="navbar"></div>
                <div className="wrapper">
                    <div className="leftSide">
                        <div className="lsTop">
                            <h1 className="lsTitle">Web Presence</h1>
                            <p className="lsDesc">Help us get to know by answering the following question</p>
                        </div>
                        <div className="lsWrapper">
                            {allData.map((data, i) => <Question key={i} question={data.qns} optional={data.opt} desc={data.desc} />)}
                        </div>
                        <div className="btn">
                            <Link to='/' className="pre">Previous</Link>
                            <Link to="/" className="next">Next</Link>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="count">
                            <div className="pageNumber">
                                <div className="onNumber">1</div>
                                <h2 className="pageName">Welcome Page</h2>
                            </div>
                            <div className="pageNumber">
                                <div className="nextNumber">2</div>
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

export default PageTwo