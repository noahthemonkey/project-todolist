export function homePage() {
    const content = document.getElementById("content");
    const lists = document.getElementById("lists");
    todoContainer.innerHTML = "";
    lists.innerHTML = "";
    const homePageTitle = document.createElement("h1");
    homePageTitle.textContent = "Welcome to the Todo App";
    const homePageText = document.createElement("p");
    homePageText.textContent =
        "This is a simple todo app that allows you to create lists and todos. You can also edit and delete todos and lists. Enjoy!";
    content.append(homePageTitle, homePageText);
    
}