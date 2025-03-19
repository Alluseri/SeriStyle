# SeriStyle
Bring the early-2021 UI back to YouTube!

## How to install? <!-- This could use a better English -->
Warning: Firefox releases may be outdated! Current rolling release version: `v1.15.0`.
### Chrome and Chromium-based browsers
1. Download this repository(Code -> Download ZIP) and unpack it into any folder
2. Navigate to `chrome://extensions`
3. Enable Developer mode
4. Click "Load unpacked"
5. Select the folder you unpacked this repo to or the manifest.json file inside
6. Enjoy!
### Firefox
1. Download [the latest release](https://github.com/Alluseri/SeriStyle/releases)
2. Accept the automatic installation
3. Enjoy!
<!--
2. Navigate to `about:addons`
3. Find the "Install Add-on from File..." button
4. Pick & install the xpi file you just downloaded
5. Enjoy!
-->

## My YouTube page is frozen and it only happens with your extension!
Try to disable RYD. Unironically. Lmfao. Who's even surprised at this point?

## FAQ <!-- Nobody ever asked one. Oh well. -->
#### Does it support white theme?
No. Most transformers will have their colors broken under white theme.
#### How is this different from YouTube Redux?
It's in the description of the extension: **early-2021** UI.
#### Where's the RYD sentiment bar?
SeriStyle hides it because it's implemented in such a disgusting way that it cannot even work standalone without breaking on video switch. Digging around other people's code to fix it isn't something I do.

## Features
This is a **general, non-exhaustive** list of SeriStyle's features.
- General changes
  - Old dark theme colors
  - Old subscribe button
  - Old top bar: search bar, menu icon, mic search icon
  - Remove rounded corners of thumbnails and some containers
  - Revert "pink theme" back to red
- Videopage changes (Similarity: 99.9%)
  - Old icons: like, dislike, share, add to playlist, menu
  - Old metadata view
  - Old description panel
  - Configurable changes
- True Old UI and general changes for playlists (Similarity with True Old UI enabled: 90%)
- Minor homepage changes (All configurable)
- Minor videoplayer changes (All configurable)

## Compare & see for yourself
The screenshots were made with old dark theme colors and all **True Old UI** features enabled. May be outdated.
### Video Page
#### SeriStyle v1.13.0
<img src="https://cdn.nest.rip/uploads/0fb3306d-0ed3-4eee-9477-580e5c0eb1ae.png">

#### Normal YouTube UI
<img src="https://cdn.nest.rip/uploads/5a597b98-7643-443a-9613-5bc38364d73e.png">

### Homepage
#### SeriStyle v1.13.0
<img src="https://cdn.nest.rip/uploads/da3d2ec7-d010-4251-b54d-d797499a0129.jpg">

#### Normal YouTube UI
<img src="https://cdn.nest.rip/uploads/f533ddb3-275b-4431-8dac-437c1429e52b.png">

### Playlist view
#### SeriStyle v1.13.0
<img src="https://cdn.nest.rip/uploads/894dace0-73f6-4358-a7d0-ad44a3944780.png">

#### Normal YouTube UI
<img src="https://cdn.nest.rip/uploads/b80f5493-14af-47db-8bd4-bb44d4882e23.png">

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
