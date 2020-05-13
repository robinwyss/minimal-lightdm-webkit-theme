# minimal-lightdm-webkit-theme
![screenshot](/screenshots/screenshot.png "Screenshot")
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
