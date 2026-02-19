addEventListener("DOMContentLoaded", (event) => { 
  const shellString = `<span style="color: red;">root</span><span>@localhost$</span> `
  const commands = 
    {
      help: 
      `
      <p>GNU bash, version 5.3.9(1)-release (x86_64-pc-linux-gnu)</p>
      <p>These shell commands are defined internally.  Type 'help' to see this list.</p>
      <br>
      <p><strong>clear</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clear the screen</p>
      <p><strong>telegram</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get telegram link</p>
      <p><strong>linkedin</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get linkedin link</p>
      <p><strong>github</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get github link</p>
      <p><strong>printables</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get printables link</p>
      <p><strong>art</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;show ascii art</p>
      <p><strong>help</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display this menu</p>
      <br>
      `,
      telegram: `<a target="_blank" href="https://t.me/bundemshake">t.me/bundemshake</a><br>`,
      linkedin: '<a target="_blank" href="https://www.linkedin.com/in/fedir-krysiuk-400ab0263/">linkedin.com/in/fed.</a><br>',
      github: `<a target="_blank" href="https://github.com/BlathanAevon">github.com/BlathanAevon</a><br>`,
      printables: `<a target="_blank" href="https://www.printables.com/@Runeshard_X_3543916">printables.com/@Runeshard</a><br>`,
      art: `<br><p>Under construction!</p><br>`,
    }

  const main = document.getElementById("main");

  let stringInput = "";
  let input = document.getElementById("input");

  onkeydown = (event) => { 
    if (event.key.length > 1 && event.key !== "Backspace" && event.key !== "Enter") {
      return; 
    }
    else if (event.key == "Backspace")
    {
      stringInput = stringInput.substring(0, stringInput.length - 1);
    }
    else if (event.key == "Enter")
    {
      const input = document.getElementById("input");
      const activeInput = document.getElementById("activeInput");
      const caret = document.getElementById("caret");
      const newInput = document.createElement("div");

      const menu = document.createElement("p");
      menu.setAttribute("style", "display: block;")
      menu.classList.add("oldOutput")

      switch (stringInput)
      {
	case "clear":
	  newInput.innerHTML = shellString; 
	  newInput.appendChild(input);
	  newInput.appendChild(caret);

	  newInput.setAttribute("id", "activeInput");

	  stringInput = "";
	  input.textContent = stringInput;
	  main.innerHTML = "<p> Welcome! type 'help' to see list of available commands </p>"
	  main.appendChild(newInput);
	  return;
	case "help":
	  menu.innerHTML = commands.help;
	  main.appendChild(menu);
	  break;
	case "telegram":
	  menu.innerHTML = commands.telegram;
	  main.appendChild(menu);
	  break;
	case "linkedin":
	  menu.innerHTML = commands.linkedin;
	  main.appendChild(menu);
	  break;
	case "printables":
	  menu.innerHTML = commands.printables;
	  main.appendChild(menu);
	  break;
	case "github":
	  menu.innerHTML = commands.github;
	  main.appendChild(menu);
	  break;
	case "art":
	  menu.innerHTML = commands.art; 
	  main.appendChild(menu);
	  break;
      }

      newInput.innerHTML = shellString; 
      newInput.appendChild(input);
      newInput.appendChild(caret);

      activeInput.innerHTML += stringInput;
      activeInput.removeAttribute("id");
      activeInput.classList.add("oldOutput");

      newInput.setAttribute("id", "activeInput");

      stringInput = "";

      main.appendChild(newInput);
    }
    else 
    {
      stringInput += event.key;
    }
    input.textContent = stringInput;
    input.scrollIntoView();
  }
})
