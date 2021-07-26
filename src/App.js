import './App.css';
import React from "react";

const getDaysInMS = (days) => days * 24 * 60 * 60 * 1000
const getFormattedDate = date => new Intl.DateTimeFormat('en', {month: 'short', day: 'numeric'}).format(date)

function App() {
    const currentTimeInMS = Date.now()
    const currentTime = new Date()
    let [startDateInMS, setStartDateInMS] = React.useState(currentTimeInMS - getDaysInMS(3))
    let startDate = new Date(startDateInMS)
    let formattedDates = [getFormattedDate(startDate)]
    for (let i = 1; i < 7; i++) formattedDates.push(getFormattedDate(new Date(
        startDateInMS + getDaysInMS(i)
    )))
    let [dates, setDates] = React.useState(formattedDates)
    const goBack = () => {
        let newStartDateInMS = startDateInMS - getDaysInMS(7)
        let startDate = new Date(newStartDateInMS)
        let formattedDates = [getFormattedDate(startDate)]
        for (let i = 1; i < 7; i++) formattedDates.push(getFormattedDate(new Date(
            newStartDateInMS + getDaysInMS(i)
        )))
        setDates(formattedDates)
        setStartDateInMS(prev => prev - getDaysInMS(7))
    }
    const goForward = () => {
        let newStartDateInMS = startDateInMS + getDaysInMS(7)
        let startDate = new Date(newStartDateInMS)
        let formattedDates = [getFormattedDate(startDate)]
        for (let i = 1; i < 7; i++) formattedDates.push(getFormattedDate(new Date(
            newStartDateInMS + getDaysInMS(i)
        )))
        setDates(formattedDates)
        setStartDateInMS(prev => prev + getDaysInMS(7))
    }
    return (
        <div className="App">
            <div className="Ribbon">
                <div className="nav">
                    <div className="Circle" onClick={goBack}/>
                </div>
                {dates.map(d => <span className={d === getFormattedDate(currentTime) && 'today'}>{d}</span>)}
                <div className="nav">
                    <div className="Circle" onClick={goForward}/>
                </div>
            </div>
        </div>
    );
}

export default App;
