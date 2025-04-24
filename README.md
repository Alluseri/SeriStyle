# SeriStyle
Bring the early-2021 UI back to YouTube!

## How to install? <!-- This could use a better English -->
Warning: Firefox releases may be outdated! Current rolling release version: `v1.15.1`.
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
- True Old UI and general changes for playlists (Similarity with True Old UI enabled: 70%)
- Minor homepage changes (Most configurable)
- Minor videoplayer changes (Most configurable)

## Compare & see for yourself
The screenshots were made with old dark theme colors and all **True Old UI** features enabled. May be outdated.
### Video Page
#### SeriStyle v1.15.1
<img src="https://cdn.nest.rip/uploads/fda3a7da-81d9-4c98-8a96-e438c45c0389.png">

#### Normal YouTube UI
<img src="https://cdn.nest.rip/uploads/be83e3f0-8c7b-4c70-b073-9b541d9b9639.png">

### Homepage
#### SeriStyle v1.15.1
<img src="https://cdn.nest.rip/uploads/01d2aba5-c436-45d4-9655-97dc10326d08.png">

#### Normal YouTube UI
<img src="https://cdn.nest.rip/uploads/a6ef2222-f0b7-438c-bdba-a774aff72bba.png">

### Playlist view
#### SeriStyle v1.15.1
<img src="https://cdn.nest.rip/uploads/0dc8188d-f1f3-4f0f-8f05-891e37fe5a67.png">

#### Normal YouTube UI
<img src="https://cdn.nest.rip/uploads/78838e15-42db-4e66-ae31-26586aaea56f.png">

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
