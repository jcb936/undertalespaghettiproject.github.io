export function handleTopBar() {
    const onClick = () => {
        let topBarsInner = Array.from(document.getElementsByClassName("top-bar"));
        if (topBarsInner.some((topBarElement) => topBarElement.classList.contains("activated-top-bar"))) {
            topBarsInner.forEach((element) => {
                element.classList.remove("activated-top-bar");
            });
        } else {
            topBarsInner.forEach((element) => {
                element.classList.add("activated-top-bar");
            });
        }
    };

    let topBars = document.getElementsByClassName("top-bar");
    for (let el of topBars) {
        el.addEventListener("click", onClick);
    }
}
