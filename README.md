# SeriStyle
Bring the Early-2021 UI back to YouTube!

## How to install? <!-- This could use a better English -->
1. Download this repository(Code -> Download ZIP) and unpack it into any folder
### Chrome and Chromium-based browsers
2. Navigate to `chrome://extensions`
3. Enable Developer mode
4. Click "Load unpacked"
5. Select the folder you unpacked this repo to
6. Enable the extension if necessary
7. Enjoy!
### Firefox
Unfortunately, Mozilla Firefox is not supported for the time being because they still didn't implement Manifest V3.

## Features
TODO this based on roadmap and defaults.js

## Roadmap (TODO)
- Homepage
  - Fix background color of the categories at the top(opt. remove them)
- Videopage
  - **Upper Layout Changes**
    - Fix RYD's awful sentiment bar
      - Changing the residing panel and a few styles should be enough
    - Realign Sponsor & Analytics
    - Hide context menu during mCC interaction cycle
    - [Specially restyle "Try It Free" button if applicable](https://www.reddit.com/r/youtube/comments/z12tk3/subscibersonly_chat_is_enabled_subscribe_button/)
    - Localize RYDless/Hidden dislike button
    - Remove Premiere chat on published videos
      - Only when it's hidden
    - Fix notification bell color
      - [Bonus functionality] Autoswitch on click(hide context menu)
    - Fix Save tooltip being too high
  - **Lower Layout Changes**
    - Hide recommendation filters(All videos, New content, etc.)
    - Old copyright notices in description
    - Old comment section(will be split into steps later)
  - **Videoplayer Changes**
    - Remove precise drag if functionally possible
- Playlists
  - Old UI(will be split into steps later)
- General
  - Hide playlists in recommendations(or use API to restore them into videos)
  - Old top bar style
    - Old notification bubble color
  - Disable notification count limit
- Extension & its structure
  - Firefox(MFV2) support
