const button = document.querySelector("button")
const input = document.querySelector("input");
const container = document.getElementById("container");
const task = document.getElementById("task");
// add
button.addEventListener("click", (eo) => {
    eo.preventDefault();
    const talk = `
    <div class="task">
            <span class="icon-star"></span>
            <p class="center"> ${input.value}</p>
            <div class="span1">
                <span class="icon-trash-o"></span>
            </div>
        </div>`;

    container.innerHTML += talk;
    input.value = "";
});
// remove

container.addEventListener("click", (eo) => {
    if (eo.target.className === "icon-trash-o") {
        eo.target.parentElement.parentElement.remove()
    }
    else if (eo.target.className == "icon-star") {
        eo.target.classList.add("orange")
        container.prepend(eo.target.parentElement)
    }
    else if (eo.target.className == "icon-star orange") {
        eo.target.classList.remove("orange")
    }
    if(eo.target.className=="task")
    {
        document.write(`${task.value}`);
    }
})