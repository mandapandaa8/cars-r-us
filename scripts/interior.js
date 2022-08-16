import { getInterior, setInterior } from "./database.js";

const interior = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "inter") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interior = () => {
    let html = ""

    html += '<select id="inter">'
    html += '<option value="0">Select a fabric interior</option>'

    const arrayOfOptions = interior.map( (inter) => {
        return  `<option id="inter" value="${inter.id}">${inter.fabric}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
