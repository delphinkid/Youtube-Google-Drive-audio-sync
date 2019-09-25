# Youtube-Google-Drive-audio-sync
Embeds an audio file from google drive in the description of a youtube video and syncs the audio with the video.

Works similarly to the soundcloud sync userscript, but uses audio from google drive rather than soundcloud.

To use, simply open google drive and right click on the audio file you want to embed (make sure the file is set to public if you want other people to be able to hear it). Click on 'get shareable link' and copy the link that appears. Copy all the characters in the link after "id=", and in the description section of your video put in "gdrivesync(############)", replacing the ### symbols with the characters you just copied. So, in the description it should look something like this:

gdrivesync(12345abcdef124567abcdef12345)

You can add whatever other text before or after this in your description, and so long as that part of it is intact, the embedding should work. If the audio becomes unsynced at any point during playback, or the video is playing but the audio track isn't, just pause and un-pause the video and the tracks should re-sync.

Known bugs:

-The embeded player sometimes doesn't load. Refreshing the page fixes this.

-sometimes, following a link to another youtube page causes the video player to to persist on top of the new page. Refreshing the page should fix this.

This is still in its early phases, so there are likely more bugs I haven't found yet. Most bugs seem to be fixed by refreshing the page. If you encounter any issues that refreshing does not fix, you can disable the script in the greasemonkey menu.

TO INSTALL: Make sure you have greasemonkey installed. Go to the Youtube Drive Sync.user.js file page and click 'raw'. A window should open allowing you to install the userscript.
