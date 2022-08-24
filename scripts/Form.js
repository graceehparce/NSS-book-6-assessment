import { getAuthors, getRecipients, getTopics, sendEntry } from "./dataAccess.js"

export const entryForm = () => {
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()

    let html = ""
    html += `<form class="entryForm">
    <h2 class="entryListTitle">New Letter Entry Form</h2>
            <fieldset class="entry-box">
                <label for="entryDate">Date</label>
                <input type="date" name="entryDate" class="entryForm__date">
            </fieldset>
            <fieldset class="entry-box">
                        <label>Author</label>
                        <select name="author">`
    for (let author of authors) {
        html += `<option value="${author.id}">${author.name}</option>`
    }
    html += `</select>
        </fieldset>`
    html += `<fieldset class="entry-box">
    <label for="content">What Would You Like To Say?</label>
    <input type="text" name="content" class="contentLetter">
    </fieldset>`
    html += `<fieldset class="entry-box">
    <label>Recipient</label>
    <select name='recipient'>`
    for (let recipient of recipients) {
        html += `<option value="${recipient.id}">${recipient.name}</option>`
    }
    html += `</select>
    </fieldset>`
    html += `<fieldset class="entry-box">
    <label>Topic</label>`
    for (let topic of topics) {
        html += `<input type="radio" name="topicRadio" checked value='${topic.id}'>${topic.name}`
    }
    html += `</fieldset>`
    html += `<fieldset class="entry-box">
    <button id="button" role="button">Save Letter</button></fieldset>`
    html += `</form>`

    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "button") {
        const userDate = document.querySelector("input[name='entryDate']").value
        const userAuthor = document.querySelector("select[name='author']").value
        const userContent = document.querySelector("input[name='content']").value
        const userTopic = document.querySelector("input[name='topicRadio']").value
        const userRecipient = document.querySelector("select[name='recipient']").value


        const dataToSendToAPI = {
            date: userDate,
            authorId: parseInt(userAuthor),
            recipientId: parseInt(userRecipient),
            topicId: parseInt(userTopic),
            content: userContent
        }

        sendEntry(dataToSendToAPI)
    }
})







