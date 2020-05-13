<div align="center">
  <h1>minimal-lightdm-webkit-theme</h1>
  
  <br>
  <br>
  <p> inspired by macOS, based on <a href=https://github.com/ZoomTen/lightdm-webkit-theme-macos>lightdm-webkit-theme-macos</a>, and updated with Catalina in mind.</p>
  <a href=https://github.com/paysonwallach/aqua-lightdm-webkit-theme/release/latest>
    <img src=https://img.shields.io/github/v/release/paysonwallach/aqua-lightdm-webkit-theme?style=flat-square>
  </a>
  <a href=https://github.com/paysonwallach/aqua-lightdm-webkit-theme/blob/master/LICENSE>
    <img src=https://img.shields.io/badge/license-HIP-994444?style=flat-square>
  </a>
  <a href=https://buymeacoffee.com/paysonwallach>
    <img src=https://img.shields.io/badge/donate-Buy%20me%20a%20coffe-yellow?style=flat-square>
  </a>
  <br>
</div>
A minimal LightDM webkit greeter theme
<img alt="screenshot" src=screenshot.png>
![Screenshot](screenshot.png "Screenshot")
## Installation

minimal-lightdm-webkit-theme can be obtained by either downloading a `.zip` file of the contents of the repository, or by cloning the repository via `git`. In either case, the theme may be applied by modifying `/etc/lightdm/lightdm-webkit-greeter.conf` or `/etc/lightdm/lightdm-webkit2-greeter.conf` as such:

```sh
webkit-theme = minimal
```

### From zip

Download the [latest release](https://github.com/robinwyss/minimal-lightdm-webkit-theme/releases/latest), and extract it to the `lightdm-webkit-greeter` theme directory.

```sh
unzip -o minimal-lightdm-webkit-theme.zip -d /usr/share/lightdm-webkit/themes/minimal
```

### From git

Clone this repository into the `lightdm-webkit-greeter` theme directory.

```sh
git clone https://github.com/robinwyss/minimal-lightdm-webkit-theme /usr/share/lightdm-webkit/themes/minimal
```
