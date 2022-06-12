import "./question.css"

const Question = ({question, optional, desc}) => {
    return (
        <div>
            <div className="lsSec">
                <div className="icon"></div>
                <div className="lsQues">
                    <h2>{question}<span>{optional}</span></h2>
                    <h3>{desc}</h3>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default Question