import { Container } from "react-bootstrap"
import CodeHighlighter from "./shared/CodeHighlighter";

const Usage : React.FC = () => {
    return (
        <Container id="usage">
            <h2>Usage</h2>
            <CodeHighlighter>
                {`Usage BitmapSystem;

Button1.Image = SystemIcon.Get(Icons.Abbreviation);`}
            </CodeHighlighter>
        </Container>
    )
}

export default Usage;