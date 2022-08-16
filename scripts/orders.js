import { getOrders, getTechnology, getInterior, getPaintColor, getWheels } from "./database.js"

const buildOrderListItem = (order) => {

    const tech = getTechnology()
    const inter = getInterior()
    const wheels = getWheels()
    const paint = getPaintColor()

// Remember that the function you pass to find() must return true/false
const foundTech = tech.find(
    (tech) => {
        return tech.id === order.technologyId
    }
)

const foundInter = inter.find(
    (inter) => {
        return inter.id === order.interiorId
    }
)

const foundWheels = wheels.find(
    (wheels) => {
        return wheels.id === order.wheelsId
    }
)

const foundPaint = paint.find(
    (paint) => {
        return paint.id === order.paintColorId
    }
)

let totalCost = foundTech.price + foundInter.price + foundWheels.price + foundPaint.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}