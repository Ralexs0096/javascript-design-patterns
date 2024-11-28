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