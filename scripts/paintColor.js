import { getPaintColor, setPaintColor } from "./database.js";

const paintColor = getPaintColor()

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "color") {
//             const paint = changeEvent.target.value
//             console.log(paint)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)

export const PaintColor = () => {
    let html = ""

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'

    const arrayOfOptions = paintColor.map( (paint) => {
        return  `<option id="paint" value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}