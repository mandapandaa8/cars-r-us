import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = ""

    html += '<select id="wheel">'
    html += '<option value="0">Select a pair of wheels</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
        return  `<option id="wheel" value="${wheel.id}">${wheel.pair}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}