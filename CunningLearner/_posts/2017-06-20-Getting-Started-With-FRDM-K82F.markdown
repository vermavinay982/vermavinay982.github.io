---
title: "Getting Started With FRDM-K82F"
layout: post
date: 2017-06-20 22:44
image: /assets/images/markdown.jpg
headerImage: false
tag:
- ARM cortex M4
- FRDM-K82F
star: false
category: blog
author: himanshusahdev
description: Start off with FRDM board
---

Hey everyone! It’s very obvious that things, sometimes took time
even in its initialization state, same occurs to me with this board.
Today, by this writeup, I’ll show the steps involved in setting up the
board and a kickstarter module to get started easily with latest
updates now available.
FRDM-K82F is based on ARM Cortex-M Cores (M4) and Kinetics
Design Studio is used to upload the code into. Sign in to NXP.com to
download the respective [KDS][1] found under product section and
install the IDE.

<img class="image" src="{{ site.url }}/assets/images/frdm/kinetics_IDE.JPG" alt="Alt Text">
<figcaption class="caption">KDS IDE</figcaption>

[Building up SDK][2] being an easy task is full of fun and offers me to
choose according to my requirements. I am using windows so as my
Host OS and selected “All Toolchains” as Supported Toolchain(s)
and included “Free RTOS” in the configuration and built my SDK
Package.

<img class="image" src="{{ site.url }}/assets/images/frdm/SDK_site.JPG" alt="Alt Text">
<figcaption class="caption">Config Tools</figcaption>

For me I build “SDK_2.2_FRDM-K82F” as a latest one successfully.
The created Zip file downloaded is unzipped. SDK will contain some
demo apps. Now, this is the time I connect my FRDM board to my
PC via USB port available near reset button on my K82F board.


<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="{{ site.url }}/assets/images/frdm/FRDM-K82F.jpeg" alt="Alt Text">
        <figcaption class="caption">FRDM-K82F Board</figcaption>
    </div>

    <div class="toright" style="padding: 115px 0;">
        <p>To make the serial port as 'Opensda CDC Serial Port', I have
		downloaded a binary file and bootload it to the FRDM K82F Dev
		Board. Converting it to Opensda has its own advantages, we can
		easily upload the code to the FRDM board.
		I have downloaded the binary file OpenSDA V2.1 Bootloader
		from <a href="https://www.segger.com/downloads/jlinkopensda">HERE</a> at the bottom of the page.</p>
    </div>
</div>

### STEPS TO BOOTLOAD THE BOARD TO OPENSDA:

{% highlight html %}
* Plug in the board by pressing the reset button.
* Drag and drop the binary file in the BOOTLOADER(H): disk drive.
* Unplug the board.
{% endhighlight %}

Luckily I didn’t face much problem but the only thing where I got
stuck is the way to import the demo apps from its sdk build up as
there is no .wsd files generated in the latest versions of build up now.

So apart from the way of importing the buildup as shown on videos
present on nxp website, I do the following:

* Open the new workspace in Kinetics Design Studio IDE.

<img class="image" src="{{ site.url }}/assets/images/frdm/workspace.JPG" alt="Alt Text">
<figcaption class="caption">Workspace</figcaption>

* Go to File import and under General tab click ‘Existing
Project into Workspace’.

<img class="image" src="{{ site.url }}/assets/images/frdm/import.JPG" alt="Alt Text">
<figcaption class="caption">Configuration</figcaption>

* Selecting the root directory from the SDK as SDKboards
frdmk82f demo_app and choose ‘hello_world’ and click
Finish.

<img class="image" src="{{ site.url }}/assets/images/frdm/import_settings.JPG" alt="Alt Text">
<figcaption class="caption">Import Project Setup</figcaption>

* Under Project Explorer Tab, select the imported project and
click on the “Build Debug” (Hammer shape option).

* After that from drop down Debug option, Go to debug
configurations. Select debug jlink file under GDB SEGGER J-
Link Debugging and click Debug (make sure to connect the
hardware). Accept the pop ups occurred in process.

<img class="image" src="{{ site.url }}/assets/images/frdm/debug.JPG" alt="Alt Text">
<figcaption class="caption">Debug Configuration</figcaption>

* Now access the Serial Com port using Tera Term or Putty on
baud rate 115200.

<img class="image" src="{{ site.url }}/assets/images/frdm/Putty.JPG" alt="Alt Text">
<figcaption class="caption">Putty Configuration</figcaption>

* Clicking on resume button on the IDE the Output can be seen
on putty. Voilla! , I run my first program “Hello World”, the
hardest program for a newbie.

<img class="image" src="{{ site.url }}/assets/images/frdm/Application.JPG" alt="Alt Text">
<figcaption class="caption">Application</figcaption>

<img class="image" src="{{ site.url }}/assets/images/frdm/putty_OP.JPG" alt="Alt Text">
<figcaption class="caption">Output</figcaption>
---


Here’s I have done with my First Program on FRDM K82F board.
I am currently trying to leverage the board to make some sort ofgood but invent new application owing to its capabilities including
Accelerometer and Touch Sensing Input et al. I’ll be back with my
full fledged new inventory application next time. Till then, Good
bye!


[1]: https://www.nxp.com/security/login?TARGET=https%3A%2F%2Fwww.nxp.com%2Fwebapp%2Fsecure%2Flogin.SAMLSecuredController.sp%3Faction%3DforwardToDestination
[2]: https://mcuxpresso.nxp.com/en/welcome
[3]: https://www.segger.com/downloads/jlinkopensda

