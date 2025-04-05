export const formatCode = (code, setCode) => {
    const lines = code.trim().split('\n');
    let formatted = '';
    let indentLevel = 0;
    const indent = '  ';

    for (let rawLine of lines) {
        let line = rawLine.trim();

        if (line.startsWith('}')) indentLevel = Math.max(0, indentLevel - 1);
        formatted += indent.repeat(indentLevel) + line + '\n';

        if (line.endsWith('{')) indentLevel += 1;
    }

    setCode(formatted.trim());
};