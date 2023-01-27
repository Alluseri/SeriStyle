# SeriStyle
Bring the early-2021 UI back to YouTube!

## How to install? <!-- This could use a better English -->
### Chrome and Chromium-based browsers
1. Download this repository(Code -> Download ZIP) and unpack it into any folder
2. Navigate to `chrome://extensions`
3. Enable Developer mode
4. Click "Load unpacked"
5. Select the folder you unpacked this repo to
6. Enable the extension if necessary
7. Enjoy!
### Firefox
Very soon!

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
  - Verified & Producer channel icons
  - Like, dislike icons: left side menu, comment section
  - Better/old downarrow icon: left side menu (can be drawn manually, adapted from wa or rotated from video player)
  - Left side menu
    - Menu
    - Home
    - Subscriptions
    - Library
    - History
    - Watch Later
    - Settings
    - Report History
    - Send Feedback
    - Help
    - Your videos(can be modded from Library)
  - Shuffle
  - Sign in
  - Notification bell icon & color
  - Subscription notification bell icon
    1. Keep as-is
    2. Fill(match notification bell icon)
    3. Fill, wider cross line
    4. Hide using Exel
  - Video settings panel
    - Annotations
    - Speed
    - Quality
    - Creative Captions
- Expand button in left side menu will now function as both, collapse button will be hidden
- Fix Add to Playlist tooltip being too high
- Old context menus
  - Global
    - Remove roundings everywhere
    - Transparency(IF EXISTED)
- Bring back slider bar on left side menu(works in playlist view)
- Add a conditional MutationObserver to invoke Reinject() in videopage transformer
- Convert recommended playlists into videos using https://noembed.com/embed?url=https://www.youtube.com/watch?v=eGfzWqbwtAA or hide them
- Old playlist & queue panels
- Old control buttons on your channel page
- Cancel miniplayer keybinding
- Give background to "Play All" on channel page
- Match playlist metadata panel color with old colors enabled
- Extend alerts to end of screen
- Replace Share with Add to Playlist

## Credits & Gratitude
### Services
All of the following services are free-of-charge, which is already worth being credited.
- [NoEmbed](https://noembed.com) - Required by SeriStyle to convert playlists into videos.
- [Wayback Machine/Web Archive](https://web.archive.org) - For archiving old versions of several YouTube pages to match against.
