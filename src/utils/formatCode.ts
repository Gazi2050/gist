import { FormatCodeParams } from "@/constants/type";

export const formatCode = ({ code, setCode }: FormatCodeParams): void => {
    const lines = code.trim().split('\n');
    let formatted = '';
    let indentLevel = 0;
    const indent = '  ';

    const addFormattedLine = (line: string) => {
        formatted += indent.repeat(indentLevel) + line + '\n';
    };

    for (const rawLine of lines) {
        const line = rawLine.trim();

        if (line === '') {
            addFormattedLine('');
            continue;
        }

        if (line.endsWith('{')) {
            addFormattedLine(line.replace(/\s*\{/, ' {'));
            indentLevel += 1;
            continue;
        }

        if (line === '}') {
            indentLevel = Math.max(0, indentLevel - 1);
            addFormattedLine(line);
            continue;
        }

        if (line.includes('function ') && line.includes('{')) {
            const parts = line.split('{');
            const params = parts[0].trim().replace('function', '').trim();
            addFormattedLine(`function ${params} {`);
            indentLevel += 1;
            const innerCode = parts[1].trim().replace('}', '').trim();
            const innerLines = innerCode.split(';');
            innerLines.forEach((innerLine) => {
                if (innerLine.trim()) {
                    addFormattedLine(innerLine.trim() + ';');
                }
            });
            addFormattedLine('}');
            indentLevel -= 1;
            continue;
        }

        addFormattedLine(line);
    }

    setCode(formatted.trim());
};
