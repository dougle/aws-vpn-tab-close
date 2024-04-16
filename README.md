# AWS VPN Tab Close Chrome Extension
An extension to detect and close the authentication tab left open by AWS VPN.

### Install

You can find this extension in the [Chrome Web Store](https://chromewebstore.google.com/detail/eeohkjpjmohadfbgaghdofdphnjhidfg?hl=en-GB). Click install and you're done, no config required.

### Permissions
This extension requires only `host permission` so that it can detect a tab navigating to `http://127.0.0.1:35001/` this is the AWS VPN Client showing you a success message.

Chrome doesn't "activate" this extension for any other URL or any other port running on 127.0.0.1

See the [AWS Client VPN User Guide](https://docs.aws.amazon.com/vpn/latest/clientvpn-user/client-vpn-user-what-is.html) for more information.

### Privacy

This extension does **not** collect **any** information.

### Build

Use `build.sh` to build a standardised zip file that can be uploaded to the Chrome Web Store.
