import { getAuthors, getEntries, getRecipients, getTopics } from "./dataAccess.js"

export const letterEntries = () => {
    const entries = getEntries()
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()


    let html = ""
    html += `<h2>Letters</h2>`


    for (const entry of entries) {

        html += `<div id="letterBox">`

        html += `<div id="date"> ${entry.date}</div>`

        const foundRecipient = recipients.find(
            (recipient) => {
                return recipient.id === entry.recipientId
            }
        )
        html += `<div id="message"><div id="entry-recipient"> Dear ${foundRecipient.name},</div>`

        html += `<div id="entry-content">${entry.content}</div>`

        const foundAuthor = authors.find(
            (author) => {
                return author.id === entry.authorId
            }
        )
        html += `<div id ="entry-author"> Sincerely,
            ${foundAuthor.name}</div></div>`


        const foundTopic = topics.find(
            (topic) => {
                return topic.id === entry.topicId
            }
        )
        html += `<div id ="entry-topic" > ${foundTopic.name}</div >`

        html += `</div></div> `

    }
    return html
}




