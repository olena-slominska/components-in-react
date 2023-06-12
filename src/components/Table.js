import { Fragment } from "react";

function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map(configColumn => {
        if (configColumn.header) {
            return <Fragment key={configColumn.label}>{configColumn.header()}</Fragment>;
        }
        return <th key={configColumn.label}>{configColumn.label}</th>;
    });

    const renderedRows = data.map((row) => {
        const renderedCells = config.map((column) => {
            return <td key={column.label} className="p-3">{column.render(row)}</td>
        });

        return (
            <tr key={keyFn(row)} className="border-b">
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;