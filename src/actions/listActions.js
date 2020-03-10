export const ITEMSELECT = "ITEMSELECT"

export const selectItem = (payload) => {
    return {
        type:ITEMSELECT,
        payload
    }
}