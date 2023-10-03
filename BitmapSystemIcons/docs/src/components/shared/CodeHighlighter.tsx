import React from "react";
import { useEffect } from "react";
import Prism from "prismjs";
import 'prismjs/components/prism-csharp';

interface ICodeHighlighter {
    children: string;
}

const CodeHighlighter : React.FC<ICodeHighlighter> = props => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);    

    return (
        <pre>
            <code className={`language-csharp`}>
                {props.children}
            </code>
        </pre>
    )
}

export default CodeHighlighter