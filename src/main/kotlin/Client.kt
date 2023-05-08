import csstype.FontFamily
import kotlinx.browser.document
import react.create
import react.dom.client.createRoot
import react.*
import emotion.react.css
import csstype.Position
import csstype.px
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.img
import react.dom.client.createRoot
//import kotlinx.serialization.Serializable

fun main() {
   val container = document.getElementById("root") ?: error("Couldn't find root")
    createRoot(container).render(
        App.create() {
            query = "what do you want to ask?"
            response = "Meow?"
        })
}

fun algorithm (input: String): String {
    val split = input.lowercase().split(" ")
    return if (split.any { it.startsWith("what")}) {
        "Meow?"
    } else if (split.any { it.startsWith("when")}) {
        "Meow Meow Meow 12/23/92 Meow Meow...meow meow?"
    } else if (split.any{ it.startsWith("who")}) {
        "Meow meow ---> MEOW --> meow"
    } else if (split.any{ it.startsWith("where")}) {
        "Meow -> Meow <- Meow Meow --> Meow -> meow <--- Meow"
    } else {
        "MEOW!!!!"
    }
}