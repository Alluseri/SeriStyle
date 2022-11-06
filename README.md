# SeriStyle
Bring back the Early-2021 UI back to YouTube!

## Prerequisites
- RYD(Return YouTube Dislike). It's not mandatory, but the action bar will be significantly misaligned if you don't use it.

## Warning
I genuinely have no clue how you got there at this point unless I or someone else I invited invited you(hi to commit history checkers), but this isn't ready for prod.

## Style Clarification
I try adapting most styles and layouts directly from the old UI, but sometimes it is virtually impossible(e.g. because of script differences or I simply couldn't find what I was looking for), so there might be minor differences between what you remember and what I implemented.

## Roadmap
Most features are/will be optional, but some might misbehave without each other!

Features might appear or disappear over time, NOT THE FINAL VERSION.
### TODO (NOT by priority)
- Homepage
  - Nothing yet!
- Videopage
  - Upper Layout Changes
    - Old Menu icon
    - Fix RYD styles being utter trash
    - Fix margins
      - Views/Action bar
      - Whole/Splitter
  - Lower Layout Changes
    - Fix description(will be split into steps later)
    - Remove wide left margin
    - Hide recommendation filters(All videos, New content, etc.)
  - Videoplayer Changes
    - Remove heatmap
    - Remove precise drag if functionally possible
- Playlists
  - Old UI(will be split into steps later)
- General
  - Fix theme colors
    - Stuff that isn't in Done
  - Old fonts
  - Hide playlists in recommendations(or use API to restore them into videos)
  - Disable notification count limit
  - Remove roundings
    - Search bar
    - Thumbnails
    - Buttons(might be distributed between other sections later)
- Convert to Chrome extension
### Done
- Homepage
  - Nothing yet!
- Videopage
  - Upper Layout Changes
    - Old Share icon
    - Old Like/Dislike icons
    - Old subscribe button style & location(+ uppercase option)
    - Sacrifice Create Clip to fit Add to Playlist on smaller screens
    - Old Add to Playlist icon
    - Old view count & publish date
    - Remove action bar buttons' backgrounds
    - Fix margins
      - Action bar
  - Lower Layout Changes
    - Nothing yet!
  - Videoplayer Changes
    - Cancel autoplay when scrolled past video(I have no idea why they removed this in the last update)
      - Basic mode: Cancel when scrolled
      - Alternative mode: Suspend timer when scrolled
- Playlists
  - Nothing yet!
- General
  - Fix theme colors
    - Background
