const database = {
    paintColor: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 600 },
        { id: 3, color: "Firebrick Red", price: 700 },
        { id: 4, color: "Spring Green", price: 800 },
    ],

    interior: [
        { id: 1, fabric: "Beige Fabric", price: 325 },
        { id: 2, fabric: "Charcoal Fabric", price: 350 },
        { id: 3, fabric: "white Leather", price: 550 },
        { id: 4, fabric: "Black Leather", price: 575}
    ],

    technology: [
        { id: 1, package: "Basic Package (basic sound system)", price: 1000 },
        { id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 1500 },
        { id: 3, package: "Visibility Package (includes side and rear cameras)", price: 1800 },
        { id: 4, package: "Ultra Package (includes navigation and visibility packages)", price: 3000}
    ],

    wheels: [
        { id: 1, pair: "17-inch Pair Radial", price: 800 },
        { id: 2, pair: "17-inch Pair Radial Black", price: 875 },
        { id: 3, pair: "18-inch Pair Spoke Silver", price: 950 },
        { id: 4, pair: "18-inch Pair Spoke Black", price: 1000}
    ],

    customOrders: [
        {
            id: 1, 
            paintColorId: 4,
            interiorId: 1,
            technologyId: 4,
            wheelsId: 2,
            timestamp: 12420988
        }
    ],

    orderBuilder: {},
}

export const getPaintColor = () => {
    return database.paintColor.map(color => ({...color}))
}

export const getInterior = () => {
    return database.interior.map(fabric => ({...fabric}))
}

export const getTechnology = () => {
    return database.technology.map(pack => ({...pack}))
}

export const getWheels = () => {
    return database.wheels.map(pair => ({...pair}))
}

export const getOrders = () => {
    return database.customOrders.map(custom => ({...custom}))
}
export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}


export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
