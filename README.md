# An app demo build with Gulp, React, Ratchet.

+ Build

	+ Execute **init.sh** to install core gulp plugins。
	+ Execute **gulp** command to build all source。
	+ Open **public/views/login.html** or **register.html** in Chrome's device mode:

	![login](images/login.png) ![register](images/register.png)

	+ **NOTE**: If you add **Ratchet.js** into vendor.js，the UI can't respond any event.
	
	+ **Push**: If you want **Ratchet**'s push feature, need to add **push** event:
	
		```javascript
		window.addEventListener('push', function (e) {
	      // render React component
	      doRender();
	   });
		```