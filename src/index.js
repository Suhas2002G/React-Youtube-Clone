import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './cards';
import Ydata from './ydata';
import Header from './header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>
  {/* <Card  title={Ydata[0].title} link={Ydata[0].link} imgsrc={Ydata[0].imgsrc}/>
  <Card  title={Ydata[1].title} link={Ydata[1].link} imgsrc={Ydata[1].imgsrc}/>
  <Card  title={Ydata[2].title} link={Ydata[2].link} imgsrc={Ydata[2].imgsrc}/>
  <Card  title={Ydata[3].title} link={Ydata[3].link} imgsrc={Ydata[3].imgsrc}/> */}

{
  Ydata.map((val)=>{
    return(
        <Card  title={val.title} subtitle={val.subtitle} link={val.link} imgsrc={val.imgsrc}/>
      );
    })
}
  
  
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
