import { fetchAuthors, fetchEntries, fetchRecipients, fetchTopics } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchEntries()
        .then(() => fetchAuthors())
        .then(() => fetchRecipients())
        .then(() => fetchTopics())
        .then(
            () => {
                mainContainer.innerHTML = PenPalSociety()
            }
        )
}

render()


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)