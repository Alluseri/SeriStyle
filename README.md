# SeriStyle
Bring the early-2021 UI back to YouTube!

## How to install? <!-- This could use a better English -->
### Chrome and Chromium-based browsers
1. Download this repository(Code -> Download ZIP) and unpack it into any folder
2. Navigate to `chrome://extensions`
3. Enable Developer mode
4. Click "Load unpacked"
5. Select the folder you unpacked this repo to or the manifest.json file inside
6. Enjoy!
### Firefox
1. Download [the latest release](https://github.com/Alluseri/SeriStyle/releases)
2. Navigate to `about:addons`
3. Find the "Install Add-on from File..." button
4. Pick & install the xpi file you just downloaded
5. Enjoy!

## FAQ <!-- Nobody ever asked one. Oh well. -->
#### Does it support white theme?
No. Most transformers will have their colors broken under white theme.
#### How is this different from YouTube Redux?
It's in the description of the extension: **early-2021** UI.
#### Where's the RYD sentiment bar?
SeriStyle hides it because it's implemented in such a disgusting way that it cannot even work standalone without breaking on video switch. Digging around other people's code to fix it isn't something I do.

## Features
This is a **general non-exhaustive** list of SeriStyle's features. Preview & comparison images coming soon.
- General changes
  - Old dark theme colors
  - Old subscribe button
  - Old top bar: search bar, menu icon, mic search icon
  - Remove rounded corners of thumbnails and some containers
- Videopage changes (Similarity: 99.9%)
  - Old icons: like, dislike, share, add to playlist, menu
  - Old metadata view
  - Old description panel
  - Configurable changes
- True old UI and general changes for playlists (Similarity with True old UI: 80%)
- Minor homepage changes (All configurable)
- Minor videoplayer changes (All configurable)

## Roadmap (TODOs)
- Old icons
  - Comment section (paired with better text colors, perhaps play around with font and alignment)
  - Left side menu
    - Menu
    - Home
    - Subscriptions
    - Library
    - History
    - Watch Later
    - Liked
    - Settings
    - Report History
    - Send Feedback
    - Help
    - Your videos (can be modded from Library)
  - Shuffle & Repeat in playlists
  - Subscription notification bell icon
    1. Keep as-is
    2. Fill (match notification bell icon)
    3. Fill, wider cross line
    4. Hide using Exel
  - "Add To Playlist" and X button in the Queue panel
  - Old X, Shuffle and Loop buttons in the Playlist panel
  - Deuglify 3 dots in Playlist panel(on video sel & top bar) and Queue panel(on video sel)
  - Old Edit icon in Playlist view
- Convert recommended playlists into videos using noembed or hide them(snip in -general)
- Old fonts in playlist & queue panels
- Old control buttons on your channel page
- Old Playlist & Queue panel styles(revamp entirely w/ colors and borders)
- Expand & Collapse arrows
  - Left side menu
  - Playlist view
  - Other places (maybe?)

## Credits & Gratitude
### Services
All of the following services are free-of-charge, which is already worth being credited.
- [Wayback Machine/Web Archive](https://web.archive.org) - For archiving old versions of several YouTube pages to match against.
<!-- - [NoEmbed](https://noembed.com) - Required by SeriStyle to convert playlists into videos. -->
