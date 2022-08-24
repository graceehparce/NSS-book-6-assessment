const applicationState = {
    entries: [],
    authors: [],
    recipients: [],
    topics: []
}


const API = "http://localhost:8088"

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topics) => {
                applicationState.topics = topics
            }
        )
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic }))

}

//////////////////////////////////////////////////////////////////////

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (authors) => {
                applicationState.authors = authors
            }
        )
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({ ...author }))

}

//////////////////////////////////////////////////////////////////////

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (recipients) => {
                applicationState.recipients = recipients
            }
        )
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({ ...recipient }))

}

//////////////////////////////////////////////////////////////////////

export const fetchEntries = () => {
    return fetch(`${API}/entries`)
        .then(response => response.json())
        .then(
            (entries) => {
                applicationState.entries = entries
            }
        )
}

export const getEntries = () => {
    return applicationState.entries.map(entry => ({ ...entry }))

}
/////////////////////////////////////////////////////////////////

export const sendEntry = (userEntry) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userEntry)
    }


    return fetch(`${API}/entries`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            const mainContainer = document.querySelector("#container")
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}