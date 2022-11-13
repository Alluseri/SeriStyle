# SeriStyle
Bring back the Early-2021 UI back to YouTube!

## Incompatible
You will not receive support if you have any of the following extensions installed:
- <del>**RYD(Return YouTube Dislike)** - SeriStyle can emulate RYD by using its API, providing better styles adapted directly from YouTube, and improved stability compared to the original extension.</del>
  - Lazy compatibility exists to some degree, but you will still not receive support with RYD installed.

## Warning
This isn't ready for prod.

## Style Clarification
I try adapting most styles and layouts directly from the old UI, but sometimes it is virtually impossible(e.g. because of script differences or I simply couldn't find what I was looking for), so there might be minor differences between what you remember and what I implemented.

## Roadmap
Most features are/will be optional, but some might misbehave without each other!

Features might appear or disappear over time, NOT THE FINAL VERSION.
### TODO (NOT by priority)
- Homepage
  - Nothing yet!
- Videopage
  - **Upper Layout Changes**
    - Emulate RYD
      - Dislike Label
      - Dislike Functionality
      - Like/Dislike Ratio
      - Unhide
    - Fix margins
  - **Lower Layout Changes**
    - Fix margins
    - Disable scroll on collapse
    - Uppercase, font, weight, color on "Show More"
    - Offset description by pfp
    - Remove wide left margin
    - Hide recommendation filters(All videos, New content, etc.)
  - **Videoplayer Changes**
    - Remove heatmap
    - Remove precise drag if functionally possible
    - Automatically refresh when Internet connection is lost(new YT glitch)
- Playlists
  - Old UI(will be split into steps later)
- General
  - Old Notification Bubble Color
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
  - **Upper Layout Changes**
    - Sacrifice Create Clip to fit Add to Playlist on smaller screens
    - Old Share icon
    - Old Like/Dislike icons
    - Old subscribe button style & location(+ uppercase option)
    - Old Add to Playlist icon
    - Old view count & publish date
    - Remove action bar buttons' backgrounds
    - Fix icon colors to match like/dislike
    - Old Menu icon
  - **Lower Layout Changes**
    - Nothing yet!
  - **Videoplayer Changes**
    - Cancel autoplay when scrolled past video
      - Basic mode: Cancel when scrolled
      - Alternative mode: Suspend timer when scrolled [COULD BE IMPROVED]
- Playlists
  - Nothing yet!
- General
  - Fix theme colors
  - Old fonts(where applicable)
