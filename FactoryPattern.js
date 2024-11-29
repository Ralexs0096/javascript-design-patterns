/**
 * The Factory pattern can be useful if we're creating relatively
 * complex and configurable objects.
 * We can easily create new objects that contain the custom keys and values.
 *
 */

const createObjectFromArray = ([key, value]) =>({
 [key]: value
})

createObjectFromArray(["name", "Alex"])