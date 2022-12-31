import React from "react";
import {useState} from "react";

let Base = () => {


    const[radioAnswer12,setRadioAnswer12] = useState();
    const[radioAnswer11,setRadioAnswer11] = useState();
    const[radioAnswer10,setRadioAnswer10] = useState();
    const[radioAnswer9,setRadioAnswer9] = useState();
    const[radioAnswer8,setRadioAnswer8] = useState();
    const[radioAnswer7,setRadioAnswer7] = useState();
    const[radioAnswer4,setRadioAnswer4] = useState();
    const[radioAnswer5,setRadioAnswer5] = useState();
    const[radioAnswer6,setRadioAnswer6] = useState();
    const[radioAnswer,setRadioAnswer] = useState();
    const[radioAnswer2,setRadioAnswer2] = useState();
    const[radioAnswer3,setRadioAnswer3] = useState();
    let[answer,setAnswer] = useState();
    
    
    
    let AnswerRadio12 = () => {
    
        setRadioAnswer12(!radioAnswer12)
    
    }
    
    let AnswerRadio11 = () => {
    
        setRadioAnswer11(!radioAnswer11)
    
    }
    
    let AnswerRadio10 = () => {
    
        setRadioAnswer10(!radioAnswer10)
    
    }
    
    let AnswerRadio9 = () => {
    
        setRadioAnswer9(!radioAnswer9)
    
    }
    
    let AnswerRadio8 = () => {
    
        setRadioAnswer8(!radioAnswer8)
    
    }
    
    let AnswerRadio7 = () => {
    
        setRadioAnswer7(!radioAnswer7)
    
    }
    
    let AnswerRadio4 = () => {
    
        setRadioAnswer4(!radioAnswer4)
    
    }
    
    let AnswerRadio5 = () => {
    
        setRadioAnswer5(!radioAnswer5)
    
    }
    
    let AnswerRadio6 = () => {
    
        setRadioAnswer6(!radioAnswer6)
    
    }
    
    let AnswerRadio = () => {
    
        setRadioAnswer(!radioAnswer)
    
    }
    let AnswerRadio2 = () => {
    
        setRadioAnswer2(!radioAnswer2)
    
    }
    let AnswerRadio3 = () => {
    
        setRadioAnswer3(!radioAnswer3)
    
    }
    
    let AnswerBtn = () => {
    
        if(radioAnswer || radioAnswer4 || radioAnswer7 || radioAnswer10){
    
            setAnswer(answer = "25%")
    
        }
        if(radioAnswer && radioAnswer5 || radioAnswer8 && radioAnswer12){
    
            setAnswer(answer = "50%")
    
        }
        if(radioAnswer8 && radioAnswer5 || radioAnswer && radioAnswer12){
    
            setAnswer(answer = "50%")
    
        }
        if(radioAnswer && radioAnswer8 || radioAnswer5 && radioAnswer12){
    
            setAnswer(answer = "50%")
    
        }
        if(radioAnswer && radioAnswer8 && radioAnswer5 || radioAnswer12 && radioAnswer8 && radioAnswer5){
    
            setAnswer(answer = "75%")
    
        }
        if(radioAnswer && radioAnswer12 && radioAnswer5 || radioAnswer8 && radioAnswer12 && radioAnswer5){
    
            setAnswer(answer = "75%")
    
        }
        if(radioAnswer && radioAnswer12 && radioAnswer8 || radioAnswer5 && radioAnswer12 && radioAnswer8){
    
            setAnswer(answer = "75%")
    
        }
       if(radioAnswer && radioAnswer5 && radioAnswer8 && radioAnswer12){
    
            setAnswer(answer = "100%")
    
        }
    
    }

    let arr = [
    
        {
    
            question:"Кто такой Карл Маркс?",
            answer:"философ и экономист",
            answer2:"физик",
            answer3:"писатель",
            radio:<input type="radio" name="first" onChange={AnswerRadio} checked={radioAnswer} />,
            radio2:<input type="radio" name="first" onChange={AnswerRadio2} checked={radioAnswer2} />,
            radio3:<input type="radio" name="first" onChange={AnswerRadio3} checked={radioAnswer3} />
        },
        {
    
            question:"Какая столица Ватикана ?",
            answer:"Берлин",
            answer2:"Ватикан",
            answer3:"Братислава",
            radio:<input type="radio" name="second" onChange={AnswerRadio4} checked={radioAnswer4} />,
            radio2:<input type="radio" name="second" onChange={AnswerRadio5} checked={radioAnswer5} />,
            radio3:<input type="radio" name="second" onChange={AnswerRadio6} checked={radioAnswer6} />
        },
        {
    
            question:"Куда ушла мама-коза из сказки «Семеро козлят»?",
            answer:"за капустой",
            answer2:"за молоком.",
            answer3:"за мороженым",
            radio:<input type="radio" name="third" onChange={AnswerRadio7} checked={radioAnswer7} />,
            radio2:<input type="radio" name="third" onChange={AnswerRadio8} checked={radioAnswer8} />,
            radio3:<input type="radio" name="third" onChange={AnswerRadio9} checked={radioAnswer9} />
        },
        {
    
            question:"Кто выиграл чемпионат мира по футболу 2002 года ?",
            answer:"Франция",
            answer2:"Германия",
            answer3:"Бразилия",
            radio:<input type="radio" name="fourth" onChange={AnswerRadio10} checked={radioAnswer10} />,
            radio2:<input type="radio" name="fourth" onChange={AnswerRadio11} checked={radioAnswer11} />,
            radio3:<input type="radio" name="fourth" onChange={AnswerRadio12} checked={radioAnswer12} />
        },
    
    ]


    

    return(

        <div>




{arr.map((item) => <div>      
    <div className="blockTest"> 
    
    <div className="blockquestion">

       <p>{item.question}</p>

    </div>

    <div className="blockAnswer">

           <div className="answer">

               {item.answer}
               {item.radio}

           </div>
           <div className="answer">
               {item.answer2}
               {item.radio2}
           </div><div className="answer">
               {item.answer3}
               {item.radio3}</div></div></div></div>)}


    
    <div className="blockAnswerBtn">

        <button onClick={AnswerBtn}>Result</button>
        
    </div>
    <div className="AnswerText">

            <h5>{answer}</h5>

    </div>

        </div>

    )



}

export default Base;