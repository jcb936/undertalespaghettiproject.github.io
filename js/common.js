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

export function loadCreditsList(selector, list) {
  let staff = document.querySelector(selector);
  let ul = document.createElement("ul");
  for (const person of list) {
    let li = document.createElement("li");

    // Create avatar
    let avatarDiv = document.createElement("div");
    avatarDiv.className = "staff-avatar";
    avatarDiv.style = "background-image: url(images/avatar/" + person.avatar + ");";
    li.appendChild(avatarDiv);

    // Text
    let textDiv = document.createElement("div");
    textDiv.className = "staff-text";

    let nickDiv = document.createElement("div");
    nickDiv.className = "staff-nick";
    if (!person.link) {
      nickDiv.textContent = person.name;
    } else {
      let linkA = document.createElement("a");
      linkA.href = person.link;
      linkA.textContent = person.name;
      nickDiv.appendChild(linkA);
    }

    let roleDiv = document.createElement("div");
    roleDiv.className = "staff-role";
    roleDiv.textContent = person.role;

    textDiv.appendChild(nickDiv);
    textDiv.appendChild(roleDiv);
    li.appendChild(textDiv);

    ul.appendChild(li);
  }

  staff.appendChild(ul);
}
