import React, { Component } from "react";


import * as Survey from "survey-react";



import "survey-react/survey.css";
import "./index.css";

Survey.StylesManager.applyTheme("default");

class SurveyComponent extends Component {
    constructor() {
        super();
        this.state={
          chunk_response:'',
          completeSurvey:false
        }
        this.change=this.change.bind(this);
        //this.render=this.render.bind(this);
        //this.onComplete=this.onComplete.bind(this);
        
    }
    
    render() {
     
    
        

        

        const json = {
      title: "Online Diagnostic Tool",
      showProgressBar: "bottom",
      //showTimerPanel: "top",maxTimeToFinishPage: 10,maxTimeToFinish: 25,
      firstPageIsStarted: true,
      startSurveyText: "Start Diagnosis",
  pages: [
    { 
      questions: [ {type: "html", html: "You are about to start your online diagnosis. <br/>Please be true to yourself for best results!!!<br/> Please click on <b>'Start Diagnosis'</b> button when you are ready." } ] },
    {
      questions: [
        {
          type: "comment",
          name: "0",
          //isRequired:true,
          title: "What is the problem from your point of view?",
          
        }
      ]
    },
    {
      questions: [
        {
          type: "comment",
          name: "1",
          //isRequired:true,
          title: "How does this problem typically make you feel?",
          
        }
      ]
    },
    {
      
      questions: [
        {
          type: "comment",
          name: "2",
          //isRequired:true,
          title: "How have you been coping with the problem(s) that brought you into therapy? What have you tried so far?",
          
        }
      ]
    },
    {
      questions: [
        {
          type: "comment",
          name: "3",
          //isRequired:true,
          title: "Overall, how would you best describe your mood",
          
        }
      ]
    },
    /*
    {
      questions: [
        {
          type: "checkbox",
          name: "4",
          title: "We all use different strategies to cope. Do you find yourself reaching for ........ to make you feel better?",
          //isRequired:true,
          hasNone:true,
          colCount: 4,
            choices: [
                "caffeine",
                "drugs",
                "alcohol",
                "sex",
                "shopping",
                "the internet"
            ]
        }
      ]
    },*/
    {
      questions: [
        {
          type: "comment",
          name: "4",
          //isRequired:true,
          title: "What is your attitude about change?",
          
        }
      ]
    }

  ],
  completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

const survey = new Survey.Model(json);
survey.showCompletedHtml=true;





        

        

        return (
          <div>
            {!this.state.completeSurvey&&<Survey.Survey model={survey} onComplete={this.change} />}
            {this.state.completeSurvey&&<div>The survey is completed</div>}
          </div>
            );
    }
    change(sender){
      //console.log(sender.data);

      var surveyData = sender.data;
      console.log("comes to change ");

      var str="";
        for(var i=0;i<5;i++){
          str=str.concat(surveyData[i]);

        }
        //console.log(str);
        this.setState({ chunk_response: str,completeSurvey:true }, () => {
          console.log(this.state.chunk_response);
        }); 
        
        /*

      this.setState({
        chunk_response:str
      });
      console.log(this.state.chunk_response);
*/
    }
}

export default SurveyComponent;
