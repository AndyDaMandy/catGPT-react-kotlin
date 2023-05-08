import csstype.FontFamily
import csstype.Position
import csstype.px
import csstype.rgb
import emotion.react.css
//import kotlinx.coroutines.*
import react.*
import react.dom.*
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.p

external interface CatProps : Props {
    var query: String
    var response: String
}

val App = FC<CatProps> { props ->
    var query by useState(props.query)
    var response by useState(props.response)
        div {
            css {
                fontFamily = FontFamily.serif
                top = 10.px
                right = 10.px
            }
            h1 {
                +"catGPT"
            }
            p {
                +"Input a question below and catGPT will respond!"
            }
            p {
                +"you input: $query"
            }
            p {
                +"catGTP response: $response"
            }
            div {
                ReactHTML.input {
                    css {
                        marginTop = 5.px
                        marginBottom = 5.px
                        fontSize = 14.px
                    }
                    type = InputType.text
                    value = query
                    onChange = { event ->
                        query = event.target.value
                    }
                }
                button {
                    onClick = {
                        response = algorithm(query)
                    }
                    +"Submit"
                }
            }
        }
}