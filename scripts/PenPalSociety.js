import { letterEntries } from "./Entries.js"
import { entryForm } from "./Form.js"

export const PenPalSociety = () => {
    return `
        <section class="letterForm">
        ${entryForm()}
        </section>
        <section class="letterEntries">
        ${letterEntries()}
        </section>
    </section>
    `
}