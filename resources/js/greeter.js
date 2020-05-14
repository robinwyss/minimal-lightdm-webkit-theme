
function startAuthentication(username) {
  if (lightdm._username) {
      lightdm.cancel_authentication();
  }
  lightdm.cancel_timed_login();

  selected_user = username;
  showUser(username)
  lightdm.start_authentication(username);
}

function user_clicked(event) {
  const username = event.currentTarget.id
  startAuthentication(username);
  event.stopPropagation();
  return false;
}

function showUser(username) {
  selected_user = username;
  const userContainer = document.querySelector("#users");
  var userNodes = Array.from(userContainer.childNodes);
  userNodes.forEach(node => {
      if (node.id === username) {
          node.classList.remove('hide')
      } else {
          node.classList.add('hide')
      }
  });
}

function showAllUsers() {
  selected_user = undefined;
  const passwordinput = document.querySelector("#passwordinput");
  passwordinput.classList.add('hide')
  const userContainer = document.querySelector("#users");
  var userNodes = Array.from(userContainer.childNodes);
  userNodes.forEach(node => {
      node.classList.remove('hide')
  });
}

function provideSecret() {
  entry = document.querySelector("#passwordinput");
  lightdm.provide_secret(entry.value);
}

function initialize_users() {
  const users = lightdm.users;
  const userContainer = document.querySelector("#users");
  userContainer.innerHTML = '';
  for (let user of users) {
      var span = document.createElement('div');
      span.innerText = user.display_name;
      span.id = user.name;
      span.onclick = user_clicked;
      userContainer.appendChild(span);
  }
  if (users.length === 1) {
      startAuthentication(users[0].name);
  }
}

function initialize() {
  initialize_users();
  document.addEventListener("keydown", key_press_handler);
}

function key_press_handler(event) {
  let action = null;
  show_message('pressed ' + event.code);
  switch (event.code) {
      case "Enter":
          if (lightdm._username) {
              provideSecret()
          }
          break;
      case "Escape":
          if (lightdm._username) {
              lightdm.cancel_authentication();
          }
          showAllUsers();
          break;
  }
}



/* Callback API. Called by the webkit greeter */

/*
* called when the greeter asks to show a login prompt for a user
* @param {str} text to show in prompt
*/
function show_prompt(text) {
  const passwordinput = document.querySelector("#passwordinput");
  passwordinput.classList.remove('hide')
  passwordinput.focus();
}

/*
* called when the greeter is finished the authentication request
*/
function authentication_complete() {
  show_message('authentication completed');
  if (lightdm.is_authenticated) {
    show_message(`login user: ${lightdm.authentication_user} session: ${lightdm.default_session}`);
      lightdm.login(lightdm.authentication_user, lightdm.default_session);
  } else {
      show_message('wrong password');
      const passwordinput = document.querySelector("#passwordinput");
      passwordinput.value = '';
      startAuthentication(selected_user);
  }
}

/*
* called when the greeter asks to show a message
* @param {str} text to show in message
*/
function show_message(text) {
  const message = document.querySelector("#message");
  message.innerHTML = text;
}

/*
* called when the greeter asks to show an error
* @param {str} text to show in error
*/
function show_error(text) {
  show_message(text);
}

/*
* called when the greeter wants us to perform a timed login
* @param {any} user to log in
*/
function timed_login(user) {
  lightdm.login(lightdm.timed_login_user);
}
