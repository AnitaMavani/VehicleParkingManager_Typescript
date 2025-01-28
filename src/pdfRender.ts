class PdfRender {
    constructor() {
    }

    render(rows: string[][]) {
        rows.forEach((row) => console.log(row.join(" | ")));
    }
}

export default PdfRender;