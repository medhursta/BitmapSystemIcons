import { Container, Stack, Table } from "react-bootstrap"
import CodeHighlighter from "./shared/CodeHighlighter";

const Methods : React.FC = () => {
    return (
        <Container id="methods">
            <Stack gap={2}>
                <div>
                    <h2>Methods</h2>
                    <h3>SystemIcon.Get</h3>
                </div>
                <div>
                    <i>Declaration</i>
                    <CodeHighlighter>
                        {`public static Image Get(Icons icon)`}
                    </CodeHighlighter>
                </div>
                <div>
                    <i>Parameters</i>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://learn.microsoft.com/en-gb/dotnet/api/system.enum?view=net-7.0" target="_blank">Enum</a>
                                </td>
                                <td>icon</td>
                                <td>
                                A enum value from <a href="#icons">BitmapSystemIcons.Icons</a>.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <i>Returns</i>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://learn.microsoft.com/en-us/dotnet/api/system.drawing.image?view=dotnet-plat-ext-7.0" target="_blank">Image</a>
                                </td>
                                <td>
                                    A <a href="https://learn.microsoft.com/en-us/dotnet/api/system.drawing.image?view=dotnet-plat-ext-7.0" target="_blank">Image</a>{" "}
                                    of the requested icon.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Stack>
        </Container>
    )
}

export default Methods;