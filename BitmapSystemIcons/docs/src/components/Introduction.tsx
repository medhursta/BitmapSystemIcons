import { Container } from "react-bootstrap";

const Introduction : React.FC = () => {
    return (
        <Container id="intro">
            <h2>Introduction</h2>
            <p>
                BitmapSystemIcon is a simple library which I create to use the{" "}
                <a href="https://www.microsoft.com/en-us/download/details.aspx?id=35825" target="_blank">Visual Studio 2022 Image Library</a>{" "}
                as button icons within a WinFroms application.
            </p>
            <p>
                The library take an SVG file and converts it to a bitmap icon using the{" "}
                <a href="https://github.com/svg-net/SVG" target="_blank">C# SVG rendering library</a>.
            </p>
        </Container>
    );
}

export default Introduction;