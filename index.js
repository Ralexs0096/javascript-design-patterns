/**
 * Command Pattern
 *
 * Let’s refactor the OrderManager class:
 * instead of having the placeOrder, cancelOrder and trackOrder methods,
 * it will have one single method: execute. This method will execute any command it’s given.
 *
 * Each command should have access to the orders of the manager, which we’ll pass as its first argument.
 */

class OrderManager {
    constructor() {
        this.orders = [];
    }

    execute(command, ...args) {
        return command.execute(this.orders, ...args);
    }
}

// We need to create three Command-s for the order manager
class Command {
    constructor(execute) {
        this.execute = execute
    }
}

function PlaceOrderCommand(order, id) {
    return new Command((orders) => {
        orders.push(id)
        return `You have successfully ordered ${order} (${id})`
    })
}

function CancelOrderCommand(id) {
    return new Command((orders) => {
        orders.filter((order) => order.id !== id)
        return `You have canceled your order ${id}`
    })
}

function TrackOrderCommand(id) {
    return new Command(() => `Your order ${id} will arrive in 20 minutes`)
}

