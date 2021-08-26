import styled from "styled-components"
import { useState, useEffect } from "react"
/**
 * Store some information to local storage (browser storage)
 * @param {*} defaultValue Value to store
 * @param {String} key Name of the variable
 * @source https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
 */
function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
        const stickyValue = window.localStorage.getItem(key)
        return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
}


function App() {
	const [date, setDate] = useState(Date.now())
	const [eventDate, setEventDate] = useStickyState(Date.parse("1 Jan 2025"))
	const [eventName, setEventName] = useStickyState("Year 2025", "eventName")
	
	useEffect(() => {
		const interval = setInterval(() => setDate(Date.now()), 1000);
		return () => clearInterval(interval)
	}, [])

	const formatNumber = (number) => number < 10 ? "0" + number : number

	const getDays = () => eventDate > date ? Math.floor((eventDate - date) / 1000 / 3600 / 24) : "0"
	const getHours = () => eventDate > date ? formatNumber(Math.floor((eventDate - date) / 1000 / 3600 % 24)): "00"
	const getMinutes = () => eventDate > date ? formatNumber(Math.floor((eventDate - date) / 1000 / 60 % 60)): "00"
	const getSeconds = () => eventDate > date ? formatNumber(Math.floor((eventDate - date) / 1000 % 60)): "00"

	const dateChange = () => {
		const nameElement = document.getElementById("eventName")
		const dateElement = document.getElementById("eventDate")
		const name = nameElement.value
		const dateValue = dateElement.value
		const newDate = Date.parse(dateValue)
		var r = false
		if (name == "") {
			nameElement.style.border = "1px solid red"
			setTimeout(() => {
				nameElement.style.border = "1px solid white"
			}, 600);
			r = true
		}
		if (isNaN(newDate) || newDate <= date) {
			dateElement.style.border = "1px solid red"
			setTimeout(() => {
				dateElement.style.border = "1px solid white"
			}, 600);
			r = true
		}
		if (r) return
		setEventDate(newDate)
		setEventName(name)
		dateElement.value = null
		nameElement.value = null
	}

    return (
        <div className="App">
			<EventText>{eventName}</EventText>
			<Timer>
				<TimerSection>
					<Number>
						{getDays()}
					</Number>
					<NumberText>days</NumberText>
				</TimerSection>
				<TimerSection>
					<Number>
						{getHours()}
					</Number>
					<NumberText>hours</NumberText>
				</TimerSection>
				<TimerSection>
					<Number>
						{getMinutes()}
					</Number>
					<NumberText>minutes</NumberText>
				</TimerSection>
				<TimerSection>
					<Number>
						{getSeconds()}
					</Number>
					<NumberText>seconds</NumberText>
				</TimerSection>
			</Timer>
			<InputField>
				<Name>
					<input id="eventName" placeholder="Event name" maxlength="18"/>
				</Name>
				<DateInput>
					<input id="eventDate" type="datetime-local"/>
				</DateInput>
				<button onClick={dateChange}><img src="./save.svg"></img></button>
			</InputField>
        </div>
    );
}

export default App;

const EventText = styled.div`
    display: flex;
	font-weight: 500;
	font-size: 4rem;
`;

const Timer = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`

const TimerSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0rem 1.8rem;
`

const Number = styled.div`
	font-size: 5rem;
`

const NumberText = styled.div`
	font-size: 1.5rem;
`

const InputField = styled.div`
	margin-top: 16rem;
	display: flex;
	button {
		background: none;
		outline: none;
		border: none;
		margin-left: 1rem;
		color: white;
		cursor: pointer;
		img {
			filter: invert(1);
			width: 2.5rem;
			height: 2.5rem;
		}
		:active {
			img {
				filter: invert(0.5);
			}
		}
	}
`
const Name = styled.div`
	input {
		background: none;
		border: 1px solid white;
		border-radius: 7px;
		padding: .6rem;
		width: 13rem;
		outline: none;
		color: white;
		font-size: 1.2rem;
		height: 3rem;
		cursor: pointer;
		margin-right: 1rem;
		::placeholder {
			color: white;
			opacity: 0.5;
		}
	}
`

const DateInput = styled.div`
	input {
		background: none;
		color: white;
		border: 1px solid white;
		border-radius: 7px;
		font-size: 1.2rem;
		width: 16.5rem;
		height: 3rem;
		outline: none;
		padding: .6rem;
		::-webkit-calendar-picker-indicator {
			filter: invert(1);
		}
		::-webkit-datetime-edit-day-field:focus,
		::-webkit-datetime-edit-month-field:focus,
		::-webkit-datetime-edit-hour-field:focus,
		::-webkit-datetime-edit-minute-field:focus,
		::-webkit-datetime-edit-year-field:focus {
			background-color: #bfa8a6;
			color: white;
			outline: none;
		}
	}
`