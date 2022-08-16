import { PaintColor } from "./paintColor.js";
import { Interior } from "./interior.js";
import { Technologies } from "./technology.js";
import { Wheels } from "./wheels.js";
import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id.startsWith("orderButton")) {
       
        addCustomOrder()
        
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-r-us</h1>

        <article class="choices">
            <section class="choices__paintColor options">
                <h2>Paint Color</h2>
                ${PaintColor()}
            </section>

            <section class="choices__interior options">
                <h2>Interior</h2>
                ${Interior()}
            </section>

            <section class="choices__technology options">
                <h2>Technology</h2>
                ${Technologies()}
            </section>

            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Car Package</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Package</h2>
            ${Orders()}
        </article>
    `
}

