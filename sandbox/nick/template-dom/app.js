function getData() {
    var items = [{
        name: "Bob",
        bio: "Bob works with apples."
    }, {
        name: "Jane",
        bio: "Jane works with deer."
    }];
    return (items);
}

function renderCell(item) {
    let compiler = new Compiler();
    let compiled = compiler.compile(`
        <div class="grid__item">
            <h2 ${compiler.namedElement("Header")}>${item.name}</h2>
            <p ${compiler.namedElement("Bio")}>${item.bio}</p>
        </div>
    `);
    let {Header, Bio} = compiler;
    Header.style.backgroundColor = "#f00";
    Bio.style.backgroundColor = "#0f0";
    return compiled;
}

function renderGrid() {
    let compiler = new Compiler();
    let items = getData().map(renderCell);
    let compiled = compiler.compile(`
        <div class="grid">
            ${compiler.nestElements("grid-items", items)}
        </div>
    `);
    return (compiled);
}

function renderAll() {
    let results = renderGrid();
    document.body.appendChild(results);
}

renderAll();
