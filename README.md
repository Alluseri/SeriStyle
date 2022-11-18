# SeriStyle
Bring back the Early-2021 UI back to YouTube!

## Incompatible
You will not receive support if you have any of the following extensions installed:
- <del>**RYD(Return YouTube Dislike)** - SeriStyle can emulate RYD by using its API, providing better styles adapted directly from YouTube, and improved stability compared to the original extension.</del> Not yet implemented.
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
  - Fix the background color of categories at the top(opt. remove them)
- Videopage
  - **Upper Layout Changes**
    - Emulate RYD
      - Dislike Label
      - Dislike Functionality
      - Sentiment Bar
      - Unhide
    - Realign Sponsor & Analytics
    - Localize (E)RYDless/Hidden dislike button
    - Remove Premiere chat on published videos
      - Only when it's hidden
  - **Lower Layout Changes**
    - Disable scroll on collapse
    - Hide recommendation filters(All videos, New content, etc.)
    - Localization on Show More/Show Less
    - Old copyright flairs in description
    - Old comment section
    - Fix "Show More" button's hitbox being too wide
  - **Videoplayer Changes**
    - Remove heatmap
    - Remove precise drag if functionally possible
    - Better autoplay canceller(requires a switch-resistant pausable Date.now implementation)
- Playlists
  - Old UI(will be split into steps later)
- General
  - Hide playlists in recommendations(or use API to restore them into videos)
  - Old top bar style
    - Old search bar
      - Old Search icon
    - Old notification bubble color
    - Old Menu icon
    - Old Mic Input icon
  - Disable notification count limit
  - Remove roundings
    - Thumbnails
    - Buttons(might be distributed between other sections later)
- Post-transition
  - Verify compatibility with latest Chrome and Firefox
  - Make every transformation configurable(only some, currently)
  - Functional popup & settings page
  - More to come
### Done
- Homepage
  - Nothing yet!
- Videopage
  - **Upper Layout Changes**
    - Hide RYD sentiment bar
    - Sacrifice Create Clip to fit Add to Playlist on smaller screens
    - Old Share icon
    - Old Like/Dislike icons
    - Old subscribe button style & location(+ uppercase option)
    - Old Add to Playlist icon
    - Old view count & publish date
    - Remove action bar buttons' backgrounds
    - Fix icon colors to match like/dislike
    - Old Menu icon
    - Fix margins
    - Old pfp style
  - **Lower Layout Changes**
    - Remove background
    - Old expander style
    - Correct description positioning
    - Fix margins
    - Remove "Explicit Lyrics" flair
  - **Videoplayer Changes**
    - Cancel autoplay when scrolled past video
- Playlists
  - Nothing yet!
- General
  - Fix theme colors
  - Old fonts(where applicable)
- Convert to Chrome extension
